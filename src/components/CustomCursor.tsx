"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

function subscribeFinePointer(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(pointer: fine)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getFinePointerSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

function isInteractiveTarget(el: EventTarget | null): boolean {
  if (!el || !(el instanceof Element)) return false;
  const t = el as HTMLElement;
  return !!(
    t.closest("a") ||
    t.closest("button") ||
    t.closest("input") ||
    t.closest("textarea") ||
    t.closest("select") ||
    t.closest('[role="button"]')
  );
}

const PALETTE = {
  day: {
    outer: "rgba(0, 0, 0, 0.2)",
    inner: "rgba(0, 0, 0, 1)",
    contrastRing: "rgba(255, 255, 255, 0.5)",
    glow: "rgba(0, 0, 0, 0.38)",
  },
  night: {
    outer: "rgba(255, 255, 255, 0.26)",
    inner: "rgba(255, 255, 255, 1)",
    contrastRing: "rgba(0, 0, 0, 0.35)",
    glow: "rgba(255, 255, 255, 0.45)",
  },
} as const;

export default function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot
  );

  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const pendingRef = useRef({ x: 0, y: 0 });
  const hoverRef = useRef(false);
  const visibleRef = useRef(true);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor-active");
    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const el = ringRef.current;
    if (!el) return;

    const applyPalette = () => {
      const hour = new Date().getHours();
      const night = hour >= 18 || hour < 6;
      const p = night ? PALETTE.night : PALETTE.day;
      el.style.backgroundColor = p.outer;
      el.style.border = `1.5px solid ${p.inner}`;
      el.style.boxShadow = `0 0 0 1px ${p.contrastRing}, 0 8px 24px ${p.glow}`;
    };

    const syncSizeAndPosition = () => {
      if (!ringRef.current) return;
      const node = ringRef.current;
      const { x, y } = pendingRef.current;
      const hovering = hoverRef.current;
      const size = hovering ? 56 : 36;
      const offset = size / 2;
      node.style.left = `${x - offset}px`;
      node.style.top = `${y - offset}px`;
      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      node.style.visibility = visibleRef.current ? "visible" : "hidden";
    };

    const flush = () => {
      rafRef.current = 0;
      syncSizeAndPosition();
    };

    const scheduleFlush = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(flush);
    };

    const onMove = (e: MouseEvent) => {
      pendingRef.current = { x: e.clientX, y: e.clientY };
      scheduleFlush();
    };

    const onOver = (e: MouseEvent) => {
      const next = isInteractiveTarget(e.target);
      if (next !== hoverRef.current) {
        hoverRef.current = next;
        scheduleFlush();
      }
    };

    const onLeaveWin = () => {
      visibleRef.current = false;
      scheduleFlush();
    };

    const onEnterWin = () => {
      visibleRef.current = true;
      scheduleFlush();
    };

    applyPalette();
    const themeInterval = window.setInterval(applyPalette, 60_000);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeaveWin);
    document.addEventListener("mouseenter", onEnterWin);

    return () => {
      window.clearInterval(themeInterval);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeaveWin);
      document.removeEventListener("mouseenter", onEnterWin);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      className="fixed pointer-events-none z-[9999] rounded-full will-change-transform"
      style={{
        left: -100,
        top: -100,
        width: 36,
        height: 36,
        transform: "translateZ(0)",
        transition: "width 120ms ease, height 120ms ease",
      }}
      aria-hidden
    />
  );
}

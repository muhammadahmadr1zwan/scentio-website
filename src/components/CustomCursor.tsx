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

const CURSOR_STYLE = {
  outer: "rgba(255, 255, 255, 0.22)",
  inner: "rgba(255, 255, 255, 1)",
  contrastRing: "rgba(0, 0, 0, 0.28)",
  glow: "rgba(255, 255, 255, 0.25)",
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

    const applyStyle = () => {
      el.style.backgroundColor = CURSOR_STYLE.outer;
      el.style.border = `1.5px solid ${CURSOR_STYLE.inner}`;
      el.style.boxShadow = `0 0 0 1px ${CURSOR_STYLE.contrastRing}, 0 8px 24px ${CURSOR_STYLE.glow}`;
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

    applyStyle();

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeaveWin);
    document.addEventListener("mouseenter", onEnterWin);

    return () => {
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
      className="fixed pointer-events-none z-[9999] rounded-full will-change-transform mix-blend-difference"
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

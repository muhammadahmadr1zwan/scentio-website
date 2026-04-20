"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";

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

export default function CustomCursor() {
  const enabled = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot
  );

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointerVisible, setIsPointerVisible] = useState(true);
  const [hydrated, setHydrated] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setHydrated(true);
      const hour = new Date().getHours();
      setIsNightMode(hour >= 18 || hour < 6);
    });
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor-active");
    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const setThemeByTime = () => {
      const hour = new Date().getHours();
      setIsNightMode(hour >= 18 || hour < 6);
    };

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsPointerVisible(false);
    };

    const handleMouseEnter = () => {
      setIsPointerVisible(true);
    };

    setThemeByTime();
    const themeInterval = window.setInterval(setThemeByTime, 60_000);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.clearInterval(themeInterval);
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [enabled]);

  const palette = useMemo(
    () =>
      hydrated && isNightMode
        ? {
            outer: "rgba(255, 255, 255, 0.26)",
            inner: "rgba(255, 255, 255, 1)",
            contrastRing: "rgba(0, 0, 0, 0.35)",
            glow: "rgba(255, 255, 255, 0.45)",
          }
        : {
            outer: "rgba(0, 0, 0, 0.2)",
            inner: "rgba(0, 0, 0, 1)",
            contrastRing: "rgba(255, 255, 255, 0.5)",
            glow: "rgba(0, 0, 0, 0.38)",
          },
    [hydrated, isNightMode]
  );

  if (!enabled || !isPointerVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] rounded-full"
      style={{
        left: position.x - 20,
        top: position.y - 20,
        width: isHovering ? 56 : 36,
        height: isHovering ? 56 : 36,
        backgroundColor: palette.outer,
        border: `1.5px solid ${palette.inner}`,
        boxShadow: `0 0 0 1px ${palette.contrastRing}, 0 8px 24px ${palette.glow}`,
        transform: "translate3d(0, 0, 0)",
        transition:
          "width 160ms ease, height 160ms ease, background-color 280ms ease, border-color 280ms ease",
        backdropFilter: "blur(2px)",
      }}
    />
  );
}

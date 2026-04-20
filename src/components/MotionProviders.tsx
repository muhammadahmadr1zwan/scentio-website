"use client";

import { MotionConfig } from "framer-motion";

/**
 * Respects prefers-reduced-motion for all Framer Motion descendants.
 */
export default function MotionProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

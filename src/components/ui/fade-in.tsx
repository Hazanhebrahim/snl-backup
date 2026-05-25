"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

const motionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds (default 0). Ignored when reduced motion is on. */
  delay?: number;
}

/**
 * Fades in and slides up when scrolled into view.
 * Degrades to a plain <div> when prefers-reduced-motion is set.
 */
export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={motionVariants}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}>
      {children}
    </motion.div>
  );
}

interface FadeInStaggerProps {
  children: ReactNode;
  className?: string;
  /** Delay between each child entrance (default 0.08s). */
  stagger?: number;
}

/**
 * Wraps a group of FadeInItem children and staggers their entrance.
 * Uses Framer Motion variant propagation so children don't need their own
 * whileInView — the parent orchestrates the trigger and timing.
 */
export function FadeInStagger({
  children,
  className,
  stagger = 0.08,
}: FadeInStaggerProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={className}>
      {children}
    </motion.div>
  );
}

interface FadeInItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * Individual item inside a FadeInStagger container.
 * Inherits the "hidden"→"visible" trigger from its parent via variant propagation.
 */
export function FadeInItem({ children, className }: FadeInItemProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={motionVariants}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

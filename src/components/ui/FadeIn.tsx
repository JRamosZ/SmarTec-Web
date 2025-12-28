"use client";

import {useInView} from "@/hooks/useInView";
import clsx from "clsx";
import {ReactNode} from "react";

interface FadeInProps {
  children: ReactNode;
  /** explicit delay in ms (overrides index-based stagger) */
  delay?: number;
  /** alternative: pass an index and let FadeIn compute staggered delay */
  index?: number;
  /** animation duration in ms */
  duration?: number;
  /** gap between staggered animations in ms */
  stagger?: number;
  /** intersection observer threshold (0-1) when element is considered visible */
  threshold?: number;
  direction?: "up" | "down";
}

export function FadeIn({children, delay, index, duration = 800, stagger = 80, threshold = 0.25, direction = "up"}: FadeInProps) {
  const {ref, isVisible} = useInView<HTMLDivElement>({threshold});

  const translateClass = direction === "up" ? "translate-y-6" : "-translate-y-6";

  // Decide effective delay: explicit `delay` wins, otherwise compute from index* (duration+stagger)
  const delayMs = typeof delay === "number" ? delay : typeof index === "number" ? index * (duration + stagger) : 0;

  const style: React.CSSProperties = {
    transitionDelay: `${delayMs}ms`,
    transitionDuration: `${duration}ms`,
  };

  return (
    <div ref={ref} style={style} className={clsx("transition-all ease-out", isVisible ? "opacity-100 translate-y-0" : `opacity-0 ${translateClass}`)}>
      {children}
    </div>
  );
}

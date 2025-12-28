"use client";

import clsx from "clsx";
import {useEffect, useRef, useState} from "react";

type FadeInOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // en ms
};

export function FadeInOnScroll({children, className, delay = 0}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{transitionDelay: `${delay}ms`}} className={clsx("transition-all duration-700 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", className)}>
      {children}
    </div>
  );
}

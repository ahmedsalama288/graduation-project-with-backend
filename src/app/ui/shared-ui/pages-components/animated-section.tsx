"use client";

import { useInView } from "react-intersection-observer";

export default function AnimatedSection({
  children,
  threshold,
  duration,
}: {
  children: React.ReactNode;
  threshold?: number;
  duration?: string;
}) {
  const [ref, inView] = useInView({
    threshold: threshold || 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`
        transition ${duration || "duration-1000"}
        ${inView ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"}
      `}
    >
      {children}
    </div>
  );
}

"use client";
import { cn } from "@/app/lib/utils";
// import { HTMLAttributes } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
  threshold?: number;
  duration?: string;
  startPosition?: React.HTMLAttributes<HTMLDivElement>["className"];
  endPosition?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export default function AnimatedSection({
  children,
  threshold,
  startPosition = "translate-y-16 opacity-0",
  endPosition = "translate-y-0 opacity-100",
  duration,
}: Props) {
  const [ref, inView] = useInView({
    threshold: threshold || 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition duration-1000",
        duration,
        !inView && startPosition,
        inView && endPosition
      )}
    >
      {children}
    </div>
  );
}

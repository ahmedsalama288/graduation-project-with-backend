"use client";

import { Suspense, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  statusNumber: number;
}

export default function InteractiveInfoStatus({ statusNumber }: Props) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const counterInterval = setInterval(() => {
        setCount((prevCount) =>
          prevCount < statusNumber ? prevCount + 10 : statusNumber
        );
      }, 0.01);
      return () => clearInterval(counterInterval);
    }
  }, [inView, statusNumber]);

  return (
    <div
      ref={ref}
      className=" flex flex-col gap-2 justify-center items-center mb-2 sm:mb-4"
    >
      <p className=" text-base">اكثر من</p>
      <p className=" text-2xl sm:text-3xl">{count}</p>
    </div>
  );
}

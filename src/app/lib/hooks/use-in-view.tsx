import { useEffect, useState, RefObject } from "react";

interface IntersectionOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
}
const useInView = (
  elementRef: RefObject<Element>,
  options: IntersectionOptions = {}
) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
  }, [elementRef, options]);

  return inView;
};

export default useInView;

import { useEffect, MutableRefObject } from "react";

export default function useOnResize(reference, callback) {
  useEffect(() => {
    const el = reference.current;
    if (el !== null) {
      const observer = new ResizeObserver(([entry]) => {
        callback(entry);
      });
      observer.observe(el);
      return () => observer.unobserve(el);
    }
  }, [reference, callback]);
}

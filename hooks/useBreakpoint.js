import { useState, useEffect } from "react";

export default function useBreakpoint(mediaQuery) {
  const [isMobile, setIsMobile] = useState(false);

  function handleChange(event) {
    setIsMobile(event.matches);
  }

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(mediaQuery);
    setIsMobile(mq.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, [mediaQuery]);

  return isMobile;
}

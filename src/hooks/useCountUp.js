import { useState, useEffect, useRef } from "react";

/**
 * Animates a number from 0 up to `target` using an ease-out cubic curve.
 * Only runs once `start` becomes true, and only ever runs once (guards
 * against re-triggering if `start` flips true/false/true, e.g. from a
 * flaky IntersectionObserver).
 */
export function useCountUp(target, duration = 1200, start) {
  const [val, setVal] = useState(0);
  const ran = useRef(false);

  useEffect(() => {
    if (!start || ran.current) return;
    ran.current = true;
    let startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(target * eased);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return val;
}

import { useState, useEffect, useRef } from "react";

/**
 * Returns a [ref, inView] pair. Attach `ref` to any element; `inView`
 * becomes true once that element crosses 40% visibility and stays true
 * thereafter (used to trigger count-up animations exactly once).
 */
export function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

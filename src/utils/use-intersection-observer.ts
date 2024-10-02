import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(items: { label: string; id: string }[]) {
  const [active, setActive] = useState(items[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      }
    }, options);

    for (const { id } of items) {
      const element = document.getElementById(id);
      if (element) observerRef.current?.observe(element);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [items]);

  return active;
}

import { useEffect, useState } from "react";

export function useOffset() {
  const [offset, setOffset] = useState(0);

  const setScroll = () => {
    setOffset(window.scrollY);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);
  return offset;
}

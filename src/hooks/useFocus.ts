import { useEffect, useRef } from "react";

export const useFocus = (hash: string) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.location.hash === hash) {
      ref.current?.focus();
    }
  }, [hash]);

  return ref;
};

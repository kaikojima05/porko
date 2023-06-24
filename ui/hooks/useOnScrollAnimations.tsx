import { RefObject, useEffect } from "react";

export const useOnscrollAnimations = (
  refs: RefObject<HTMLElement>[],
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): void => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  });
};

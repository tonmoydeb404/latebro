import { useEffect, useRef, useState } from "react";

interface UseScrollSpyOptions<R> {
  root?: R | null;
  rootMargin?: string;
  threshold?: number | number[];
}

interface UseScrollSpyResult<R> {
  activeId: string | null;
  containerRef: React.RefObject<R>;
}

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

const useScrollSpy = <R extends HTMLDivElement>(
  options: UseScrollSpyOptions<R> = {}
): UseScrollSpyResult<R> => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const debouncedActiveId = useDebouncedValue(activeId, 200);
  const containerRef = useRef<R>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: options.root || null,
      rootMargin: options.rootMargin || "0px",
      threshold: options.threshold || 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry?.target instanceof HTMLElement) {
        const scrollspyId = visibleEntry.target.dataset.scrollspy;
        if (scrollspyId && scrollspyId !== activeId) {
          setActiveId(scrollspyId);
        }
      }
    }, observerOptions);

    const container = containerRef.current;
    if (container) {
      const elements = container.querySelectorAll(
        "[data-scrollspy]"
      ) as NodeListOf<HTMLElement>;

      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [options, activeId]);

  return { activeId: debouncedActiveId, containerRef };
};

export default useScrollSpy;

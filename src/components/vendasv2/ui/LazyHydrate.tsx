"use client";

import { useEffect, useRef, useState } from "react";

export function LazyHydrate({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHydrated(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Hydrate 200px before it enters viewport
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} suppressHydrationWarning>
      {isHydrated ? children : <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: '' }} />}
    </div>
  );
}

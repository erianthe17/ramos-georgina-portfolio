"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delay?: number;
  initialVisible?: boolean;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  initialVisible = false,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(initialVisible);

  useEffect(() => {
    const node = ref.current;

    if (!node || initialVisible) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      node.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [initialVisible]);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} ${className}`.trim()}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}

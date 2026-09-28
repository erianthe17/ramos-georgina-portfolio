import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] px-2.5 py-1 text-[11px] font-medium tracking-[0.12em] text-[var(--foreground)] uppercase shadow-[0_8px_24px_var(--shadow)] ${className}`.trim()}
    >
      {children}
    </span>
  );
}

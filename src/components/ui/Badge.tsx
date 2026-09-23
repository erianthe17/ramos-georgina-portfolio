import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium tracking-[0.12em] text-slate-200 uppercase ${className}`.trim()}
    >
      {children}
    </span>
  );
}

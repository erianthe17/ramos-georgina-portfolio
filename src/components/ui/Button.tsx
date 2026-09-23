import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-cyan-400/50 bg-cyan-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:bg-cyan-300",
  secondary:
    "border border-slate-700 bg-slate-900/70 text-slate-100 hover:border-slate-500 hover:bg-slate-800",
  ghost: "border border-transparent bg-transparent text-slate-200 hover:border-slate-700 hover:bg-slate-900/70",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-out ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-[var(--accent)]/40 bg-[var(--accent)] text-[var(--accent-contrast)] shadow-[0_14px_34px_var(--shadow)] hover:brightness-110",
  secondary:
    "border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:border-[var(--accent)]/60 hover:text-[var(--accent-strong)]",
  ghost: "border border-transparent bg-transparent text-[var(--foreground)] hover:border-[var(--border)] hover:bg-[var(--card)]",
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

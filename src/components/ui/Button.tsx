import Link from "next/link";
import { type ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost" | "ghost-dark";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  external?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-electric-blue text-white hover:bg-[#0048d1] shadow-[0_8px_30px_rgba(0,87,255,0.25)]",
  secondary:
    "bg-deep-blue text-white hover:bg-[#0a2445]",
  ghost:
    "bg-transparent text-deep-blue border border-deep-blue/15 hover:border-deep-blue/40 hover:bg-deep-blue/[0.03]",
  "ghost-dark":
    "bg-white/5 text-white border border-white/15 hover:border-white/30 hover:bg-white/10",
};

export function Button({ href, external, children, variant = "primary", className, icon }: ButtonAsLink) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] active:scale-[0.98]",
    variantClasses[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}

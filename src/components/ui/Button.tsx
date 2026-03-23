import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "whatsapp" | "ghost" | "soft";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  icon?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-[0_20px_40px_rgba(163,55,0,0.16)] hover:scale-[1.02]",
  secondary:
    "bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed",
  whatsapp:
    "bg-whatsapp text-white shadow-[0_20px_40px_rgba(37,211,102,0.2)] hover:bg-whatsapp-dark hover:scale-[1.02]",
  ghost:
    "bg-transparent text-primary ring-1 ring-primary/20 hover:bg-primary/5",
  soft: "bg-primary/10 text-primary hover:bg-primary hover:text-on-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-6 py-3.5 text-sm sm:text-base",
  lg: "px-8 py-5 text-base sm:text-lg",
};

export function Button({
  children,
  className = "",
  icon,
  variant = "primary",
  size = "md",
  fullWidth = false,
  target,
  rel,
  href,
  ...props
}: ButtonProps) {
  const resolvedRel = target === "_blank" ? rel ?? "noreferrer" : rel;
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 active:scale-95",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href?.startsWith("/") && !target) {
    return (
      <Link className={classes} to={href}>
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <a
      className={classes}
      target={target}
      rel={resolvedRel}
      href={href}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}

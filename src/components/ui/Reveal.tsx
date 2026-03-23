import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export function Reveal({
  children,
  as: Component = "div",
  className = "",
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <Component
      ref={ref}
      className={[
        "transition-all duration-700",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className,
      ].join(" ")}
    >
      {children}
    </Component>
  );
}

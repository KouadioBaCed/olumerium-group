import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "gold" | "outline-light" | "outline-dark" | "ghost-light";

export default function Button({
  href,
  children,
  variant = "gold",
  className,
  showIcon = true,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showIcon?: boolean;
}) {
  const base =
    "group inline-flex items-center gap-2.5 border px-7 py-3.5 font-label text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300";

  const variants: Record<ButtonVariant, string> = {
    gold: "border-gold bg-gold text-navy hover:bg-transparent hover:text-gold",
    "outline-light":
      "border-white/40 text-white hover:border-gold hover:bg-white/5",
    "outline-dark":
      "border-navy/25 text-navy hover:border-gold hover:text-gold-champagne hover:bg-navy/5",
    "ghost-light": "border-transparent text-gold hover:gap-4",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {showIcon && (
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

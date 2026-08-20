import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 font-label text-[11px] font-semibold uppercase tracking-[0.3em]",
            light ? "text-gold-light" : "text-gold",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 font-body text-base leading-relaxed md:text-lg",
            light ? "text-pearl/85" : "text-navy-corporate/70"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  decimals,
  label,
  light = false,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  light?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");
  const precision = decimals ?? (value % 1 !== 0 ? 1 : 0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(precision)),
    });
    return () => controls.stop();
  }, [isInView, value, precision]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("text-center md:text-left", className)}
    >
      <p
        className={cn(
          "font-display text-4xl font-semibold tabular-nums md:text-5xl",
          light ? "text-white" : "text-navy"
        )}
      >
        <span ref={ref}>
          {prefix}
          {display}
        </span>
        <span className="text-gold">{suffix}</span>
      </p>
      <p
        className={cn(
          "mt-2 font-label text-[11px] font-medium uppercase tracking-[0.18em]",
          light ? "text-pearl/70" : "text-navy-corporate/60"
        )}
      >
        {label}
      </p>
    </motion.div>
  );
}

"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, type Variants } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

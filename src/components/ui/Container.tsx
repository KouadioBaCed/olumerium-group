import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16", className)}>
      {children}
    </Tag>
  );
}

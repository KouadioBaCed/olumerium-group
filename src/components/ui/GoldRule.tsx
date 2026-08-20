import { cn } from "@/lib/utils";

export default function GoldRule({
  className,
  vertical = false,
}: {
  className?: string;
  vertical?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "gold-rule block",
        vertical ? "h-full w-px" : "h-px w-full",
        className
      )}
    />
  );
}

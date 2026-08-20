import { cn } from "@/lib/utils";

/**
 * Abstract brand motif — fine gold arcs, circles and a connective grid,
 * echoing the globe/monogram identity from the graphic charter. Used
 * in place of stock photography so no image is ever presented as a
 * real Olumerium site, project or asset.
 */
export default function BrandMotif({
  className,
  variant = "arcs",
}: {
  className?: string;
  variant?: "arcs" | "globe" | "grid";
}) {
  if (variant === "globe") {
    return (
      <svg
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
        className={cn("pointer-events-none", className)}
      >
        <circle cx="200" cy="200" r="150" stroke="url(#g1)" strokeWidth="1" />
        <ellipse cx="200" cy="200" rx="150" ry="55" stroke="url(#g1)" strokeWidth="1" />
        <ellipse cx="200" cy="200" rx="150" ry="105" stroke="url(#g1)" strokeWidth="1" />
        <line x1="50" y1="200" x2="350" y2="200" stroke="url(#g1)" strokeWidth="1" />
        <line x1="200" y1="50" x2="200" y2="350" stroke="url(#g1)" strokeWidth="1" />
        <circle cx="200" cy="200" r="190" stroke="url(#g1)" strokeWidth="0.5" strokeDasharray="2 6" />
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C9972B" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C9972B" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === "grid") {
    return (
      <svg
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
        className={cn("pointer-events-none", className)}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 50}
            y1="0"
            x2={i * 50}
            y2="400"
            stroke="#C9972B"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * 50}
            x2="400"
            y2={i * 50}
            stroke="#C9972B"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
        ))}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      <circle cx="60" cy="340" r="220" stroke="#C9972B" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="60" cy="340" r="170" stroke="#C9972B" strokeOpacity="0.2" strokeWidth="1" />
      <path
        d="M -40 200 A 240 240 0 0 1 300 -20"
        stroke="#F2C866"
        strokeOpacity="0.4"
        strokeWidth="1"
      />
    </svg>
  );
}

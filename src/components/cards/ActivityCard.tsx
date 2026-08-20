import type { Sector } from "@/types";
import { ICONS, DEFAULT_ICON } from "@/lib/icons";

export default function ActivityCard({ sector }: { sector: Sector }) {
  const Icon = ICONS[sector.icon] ?? DEFAULT_ICON;
  return (
    <div className="group relative flex flex-col overflow-hidden border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:bg-white/[0.06]">
      <div className="flex items-center justify-between">
        <span className="font-display text-2xl text-gold/60">{sector.number}</span>
        <Icon className="h-6 w-6 text-gold/70 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" strokeWidth={1.5} />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-white">
        {sector.title}
      </h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-pearl/65">
        {sector.description}
      </p>
      <span className="mt-6 h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-16" />
    </div>
  );
}

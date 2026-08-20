import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Subsidiary } from "@/types";

export default function SubsidiaryCard({ subsidiary }: { subsidiary: Subsidiary }) {
  const hasWebsite = Boolean(subsidiary.website);

  const linkProps = hasWebsite
    ? {
        href: subsidiary.website as string,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { href: `/subsidiaries/${subsidiary.slug}` };

  return (
    <Link
      {...linkProps}
      className="group relative flex flex-col justify-between overflow-hidden border border-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_24px_48px_-24px_rgba(2,8,20,0.35)]"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />

      <div>
        <div className="flex items-start justify-between">
          <span className="font-display text-3xl font-semibold text-gold/70">
            {subsidiary.number}
          </span>
          {subsidiary.isNew && (
            <span className="font-label text-[9px] font-semibold uppercase tracking-[0.15em] text-gold">
              Nouvelle entité
            </span>
          )}
        </div>

        <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-navy">
          {subsidiary.name}
        </h3>
        <p className="mt-2 font-label text-[10px] font-medium uppercase tracking-[0.15em] text-royal">
          {subsidiary.sector}
        </p>
        <p className="mt-4 font-body text-sm leading-relaxed text-navy-corporate/65">
          {subsidiary.description}
        </p>
      </div>

      <div className="mt-8 flex items-center gap-2 font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-navy transition-colors group-hover:text-gold">
        {hasWebsite ? "Visiter le site" : "Découvrir"}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}

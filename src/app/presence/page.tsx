import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import StatCounter from "@/components/ui/StatCounter";
import CTAContact from "@/components/sections/CTAContact";
import BrandMotif from "@/components/ui/BrandMotif";
import { PRESENCE_REGIONS, PRESENCE_COUNTRIES } from "@/data/presence";
import { KEY_STATS } from "@/data/company";

export const metadata: Metadata = {
  title: "Notre présence",
  description:
    "Découvrez l’implantation panafricaine et internationale d’Olumerium Group, région par région.",
};

export default function PresencePage() {
  const countriesStat = KEY_STATS.find((s) => s.id === "countries")!;

  return (
    <>
      <PageHero
        eyebrow="Notre présence"
        title="Une présence panafricaine. Une ambition internationale."
        description="Cette page présente l’architecture régionale de notre implantation. La liste détaillée des pays sera publiée dès sa confirmation officielle."
      />

      <section className="bg-white py-20">
        <Container>
          <StatCounter
            value={countriesStat.value}
            suffix={countriesStat.suffix}
            label={countriesStat.label}
          />
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy-gradient py-24 text-white">
        <BrandMotif variant="grid" className="pointer-events-none absolute inset-0 h-full w-full opacity-25" />
        <Container className="relative">
          <h2 className="font-display text-2xl font-semibold text-gold-light">
            Régions d’implantation
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {PRESENCE_REGIONS.map((region, i) => (
              <Reveal key={region.id} delay={(i % 4) * 0.06}>
                <div className="flex h-full min-h-[140px] flex-col justify-center bg-navy/60 p-7">
                  <span className="font-display text-xl font-semibold text-white">
                    {region.name}
                  </span>
                  <span className="mt-2 font-label text-[10px] uppercase tracking-[0.15em] text-pearl/50">
                    Pays à confirmer
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-24">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Répertoire des implantations
          </h2>
          <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-navy-corporate/60">
            Filtrable par région, pays, secteur et filiale — cette structure de
            données sera alimentée dès que les implantations officielles
            seront confirmées par le Groupe.
          </p>
          <div className="mt-10 border border-dashed border-navy/20 bg-white p-10 text-center">
            {PRESENCE_COUNTRIES.length === 0 ? (
              <p className="font-body text-sm text-navy-corporate/50">
                Aucune donnée de pays n’est actuellement publiée. Cette
                section sera mise à jour dès validation officielle.
              </p>
            ) : null}
          </div>
        </Container>
      </section>

      <CTAContact />
    </>
  );
}

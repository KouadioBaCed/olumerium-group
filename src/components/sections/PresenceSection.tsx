import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import BrandMotif from "@/components/ui/BrandMotif";
import { PRESENCE_REGIONS } from "@/data/presence";
import { KEY_STATS } from "@/data/company";

export default function PresenceSection() {
  const countriesStat = KEY_STATS.find((s) => s.id === "countries");

  return (
    <section className="relative overflow-hidden bg-navy-gradient py-28 text-white">
      <BrandMotif variant="globe" className="pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 opacity-30" />
      <Container className="relative">
        <SectionHeader
          eyebrow="Notre présence"
          title="Une présence panafricaine. Une ambition internationale."
          description="L’architecture ci-dessous est conçue pour accueillir, région par région, la liste détaillée des pays d’implantation dès leur confirmation officielle."
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="font-display text-7xl font-semibold text-gold-light md:text-8xl">
              {countriesStat?.value}
              <span className="text-gold">{countriesStat?.suffix}</span>
            </p>
            <p className="mt-3 font-label text-xs uppercase tracking-[0.2em] text-pearl/70">
              {countriesStat?.label}
            </p>
            <Button href="/presence" variant="outline-light" className="mt-10">
              Explorer notre présence
            </Button>
          </Reveal>

          <div className="grid grid-cols-2 gap-px overflow-hidden bg-white/10 sm:grid-cols-3">
            {PRESENCE_REGIONS.map((region, i) => (
              <Reveal key={region.id} delay={i * 0.05}>
                <div className="flex h-full flex-col justify-center bg-navy/60 p-6">
                  <span className="font-display text-lg font-semibold text-white">
                    {region.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

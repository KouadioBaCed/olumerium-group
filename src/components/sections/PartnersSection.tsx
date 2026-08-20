import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { PARTNERS } from "@/data/partners";

export default function PartnersSection() {
  return (
    <section className="border-y border-navy/10 bg-white py-24">
      <Container>
        <SectionHeader
          eyebrow="Ils nous font confiance"
          title="Un réseau de relations stratégiques."
          description="Références mentionnées à titre indicatif, en attente de confirmation et de validation officielle avant publication."
          align="center"
        />

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {PARTNERS.map((partner) => (
              <span
                key={partner.id}
                className="font-label text-sm font-medium uppercase tracking-[0.1em] text-navy-corporate/40 transition-colors hover:text-navy-corporate/70"
                title="Partenariat à confirmer"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

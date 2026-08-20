import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { GOVERNANCE_BODIES } from "@/data/governance";

export default function GovernanceSection() {
  return (
    <section className="bg-navy-gradient py-28 text-white">
      <Container>
        <SectionHeader
          eyebrow="Gouvernance"
          title="Une gouvernance solide et transparente."
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GOVERNANCE_BODIES.map((body, i) => (
            <Reveal key={body.id} delay={(i % 3) * 0.08}>
              <div className="h-full border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:bg-white/[0.06]">
                <h3 className="font-display text-lg font-semibold text-gold-light">
                  {body.name}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-pearl/70">
                  {body.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

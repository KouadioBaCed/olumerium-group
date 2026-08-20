import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import StatCounter from "@/components/ui/StatCounter";
import { PERSPECTIVES_2030 } from "@/data/perspectives";

export default function Perspectives2030() {
  const numeric = PERSPECTIVES_2030.filter((g) => g.value > 0);
  const qualitative = PERSPECTIVES_2030.filter((g) => g.value === 0);

  return (
    <section className="relative overflow-hidden bg-navy py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,151,43,0.12),transparent_55%)]" />
      <Container className="relative">
        <SectionHeader
          eyebrow="Perspectives 2030"
          title="Une ambition claire pour la décennie à venir."
          light
          align="center"
        />

        <div className="mt-16 grid grid-cols-2 gap-10 border-y border-white/10 py-12 sm:grid-cols-3">
          {numeric.map((goal) => (
            <StatCounter
              key={goal.id}
              value={goal.value}
              suffix={goal.suffix}
              label={goal.label}
              light
              className="text-center"
            />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {qualitative.map((goal, i) => (
            <Reveal key={goal.id} delay={i * 0.08}>
              <div className="border border-white/10 bg-white/[0.03] p-7">
                <h3 className="font-display text-xl font-semibold text-gold-light">
                  {goal.label}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-pearl/70">
                  {goal.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

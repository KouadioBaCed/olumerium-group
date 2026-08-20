import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { WHY_US } from "@/data/why-us";

export default function WhyUs() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader eyebrow="Pourquoi Olumerium Group" title="Cinq raisons de nous faire confiance." align="center" />

        <div className="mt-16 divide-y divide-navy/10 border-y border-navy/10">
          {WHY_US.map((point, i) => (
            <Reveal key={point.id} delay={i * 0.05}>
              <div className="grid grid-cols-1 items-center gap-4 py-8 md:grid-cols-[100px_1fr_2fr]">
                <span className="font-display text-4xl font-semibold text-gold/50">
                  {point.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-navy">
                  {point.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-navy-corporate/65">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { RSE_AXES } from "@/data/rse";
import { ICONS, DEFAULT_ICON } from "@/lib/icons";

export default function RSESection() {
  return (
    <section className="bg-offwhite py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Engagement RSE"
            title="Un impact positif, responsable et durable."
          />
          <Button href="/sustainability" variant="outline-dark" className="shrink-0">
            Notre engagement RSE
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {RSE_AXES.map((axis, i) => {
            const Icon = ICONS[axis.icon] ?? DEFAULT_ICON;
            return (
              <Reveal key={axis.id} delay={i * 0.06}>
                <div className="h-full border border-navy/10 bg-white p-7 transition-all duration-500 hover:border-gold/60">
                  <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                    {axis.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-navy-corporate/65">
                    {axis.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

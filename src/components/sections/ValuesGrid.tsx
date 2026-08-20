import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { VALUES } from "@/data/values";
import { ICONS, DEFAULT_ICON } from "@/lib/icons";

export default function ValuesGrid() {
  return (
    <section className="bg-offwhite py-28">
      <Container>
        <SectionHeader eyebrow="Nos valeurs" title="Les principes qui guident notre action." align="center" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, i) => {
            const Icon = ICONS[value.icon] ?? DEFAULT_ICON;
            return (
              <Reveal key={value.id} delay={(i % 3) * 0.08}>
                <div className="group h-full border border-navy/10 bg-white p-8 transition-all duration-500 hover:border-gold/60 hover:shadow-[0_20px_40px_-24px_rgba(2,8,20,0.25)]">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-gold/60">{value.number}</span>
                    <Icon className="h-6 w-6 text-navy/40 transition-colors duration-300 group-hover:text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-navy">{value.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-navy-corporate/65">
                    {value.description}
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

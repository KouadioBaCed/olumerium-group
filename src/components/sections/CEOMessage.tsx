import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { CEO_MESSAGE, COMPANY } from "@/data/company";

export default function CEOMessage() {
  const paragraphs = CEO_MESSAGE.split("\n\n");

  return (
    <section className="bg-white py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.6fr]">
        <Reveal>
          <p className="font-label text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            Message du Président-Directeur Général
          </p>
          {/* No official CEO photograph supplied — a placeholder panel
              is used instead of fabricating a portrait. */}
          <div className="mt-8 flex aspect-[4/5] max-w-xs items-center justify-center bg-navy-gradient">
            <span className="font-display text-6xl font-semibold text-gold/60">
              {COMPANY.ceoName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <p className="mt-6 font-display text-xl font-semibold text-navy">
            {COMPANY.ceoName}
          </p>
          <p className="font-label text-[11px] uppercase tracking-[0.15em] text-navy-corporate/60">
            {COMPANY.ceoTitle}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="border-l-2 border-gold pl-8">
          {paragraphs.map((p) => (
            <p
              key={p}
              className="mb-5 font-display text-xl italic leading-relaxed text-navy-corporate/80 last:mb-0 md:text-2xl"
            >
              {p}
            </p>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

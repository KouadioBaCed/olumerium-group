import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { TIMELINE } from "@/data/timeline";

export default function Timeline() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader
          eyebrow="Notre histoire"
          title="Une trajectoire de croissance continue."
          align="center"
        />

        <div className="relative mt-20">
          <span className="absolute left-4 top-0 h-full w-px bg-navy/10 md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

          <ol className="space-y-14 md:space-y-0">
            {TIMELINE.map((event, i) => (
              <li key={event.id} className="relative md:grid md:grid-cols-2 md:gap-x-16 md:py-10">
                <span
                  className="absolute left-4 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold ring-4 ring-white md:left-1/2"
                  aria-hidden="true"
                />
                <Reveal
                  className={i % 2 === 0 ? "md:col-start-1 md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}
                >
                  <div className="pl-12 md:pl-0">
                    <p className="font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                      {event.period}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
                      {event.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-navy-corporate/65">
                      {event.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { VISION_TEXT, MISSION_TEXT } from "@/data/company";

export default function VisionMission() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="grid grid-cols-1 gap-px overflow-hidden bg-navy/10 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-center bg-offwhite p-10 md:p-14">
              <p className="font-label text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                Notre vision
              </p>
              <p className="mt-6 font-display text-2xl font-medium italic leading-snug text-navy md:text-3xl">
                « {VISION_TEXT} »
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center bg-navy-gradient p-10 md:p-14">
              <p className="font-label text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-light">
                Notre mission
              </p>
              <p className="mt-6 font-display text-2xl font-medium italic leading-snug text-white md:text-3xl">
                « {MISSION_TEXT} »
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import ActivityCard from "@/components/cards/ActivityCard";
import { ACTIVITIES } from "@/data/activities";

export default function ActivitiesSection() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Nos activités"
            title="Un portefeuille diversifié, ancré dans des secteurs stratégiques."
            light
          />
          <Button href="/activities" variant="outline-light" className="shrink-0">
            Voir tous les secteurs
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {ACTIVITIES.slice(0, 8).map((sector, i) => (
            <Reveal key={sector.id} delay={(i % 4) * 0.06}>
              <ActivityCard sector={sector} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

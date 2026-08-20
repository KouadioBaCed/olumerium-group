import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SubsidiaryCard from "@/components/cards/SubsidiaryCard";
import { SUBSIDIARIES } from "@/data/subsidiaries";

export default function SubsidiariesSection() {
  return (
    <section className="bg-offwhite py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="14 filiales & entités"
            title="Un écosystème diversifié au service de la croissance."
            description="Chaque entité contribue, dans son secteur, à la mission de création de valeur durable du Groupe."
          />
          <Button href="/subsidiaries" variant="outline-dark" className="shrink-0">
            Toutes les filiales
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUBSIDIARIES.map((subsidiary, i) => (
            <Reveal key={subsidiary.id} delay={(i % 3) * 0.08}>
              <SubsidiaryCard subsidiary={subsidiary} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

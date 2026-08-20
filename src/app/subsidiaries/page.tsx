import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTAContact from "@/components/sections/CTAContact";
import SubsidiaryCard from "@/components/cards/SubsidiaryCard";
import { SUBSIDIARIES } from "@/data/subsidiaries";

export const metadata: Metadata = {
  title: "Nos 14 filiales & entités",
  description:
    "Découvrez les 14 filiales et entités d’Olumerium Group, un écosystème diversifié au service de la croissance.",
};

export default function SubsidiariesPage() {
  return (
    <>
      <PageHero
        eyebrow="14 filiales & entités"
        title="Un écosystème diversifié au service de la croissance."
        description="Chaque entité opère avec sa propre expertise sectorielle, au service de la mission commune du Groupe."
      />

      <section className="bg-offwhite py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SUBSIDIARIES.map((subsidiary, i) => (
              <Reveal key={subsidiary.id} delay={(i % 3) * 0.06}>
                <SubsidiaryCard subsidiary={subsidiary} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTAContact />
    </>
  );
}

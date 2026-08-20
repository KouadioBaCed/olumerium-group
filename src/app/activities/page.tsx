import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTAContact from "@/components/sections/CTAContact";
import ActivityCard from "@/components/cards/ActivityCard";
import { ACTIVITIES } from "@/data/activities";

export const metadata: Metadata = {
  title: "Nos activités",
  description:
    "Les 13 secteurs stratégiques dans lesquels Olumerium Group déploie ses activités à travers l’Afrique et au-delà.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos activités"
        title="Des secteurs stratégiques, une même ambition."
        description="Olumerium Group intervient dans des secteurs clés de l’économie pour créer de la valeur durable. Les activités présentées ci-dessous constituent une architecture extensible, distincte de la liste des filiales du Groupe."
      />

      <section className="bg-navy-gradient py-24">
        <Container>
          <div className="grid grid-cols-1 gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.map((sector, i) => (
              <Reveal key={sector.id} delay={(i % 3) * 0.06}>
                <ActivityCard sector={sector} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTAContact />
    </>
  );
}

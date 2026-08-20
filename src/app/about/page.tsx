import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import Timeline from "@/components/sections/Timeline";
import CEOMessage from "@/components/sections/CEOMessage";
import VisionMission from "@/components/sections/VisionMission";
import ValuesGrid from "@/components/sections/ValuesGrid";
import GovernanceSection from "@/components/sections/GovernanceSection";
import { ABOUT_TEXT, COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Le Groupe",
  description:
    "Découvrez Olumerium Group : notre histoire, notre gouvernance, notre vision et nos valeurs.",
};

export default function AboutPage() {
  const paragraphs = ABOUT_TEXT.split("\n\n");

  return (
    <>
      <PageHero
        eyebrow="Le Groupe"
        title="Qui sommes-nous ?"
        description={COMPANY.positioning}
      />

      <section className="bg-white py-24">
        <Container className="max-w-3xl">
          <Reveal className="space-y-6 border-l-2 border-gold pl-8">
            {paragraphs.map((p) => (
              <p key={p} className="font-body text-lg leading-relaxed text-navy-corporate/75">
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      <Timeline />
      <CEOMessage />
      <VisionMission />
      <ValuesGrid />
      <GovernanceSection />
    </>
  );
}

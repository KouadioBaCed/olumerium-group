import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import CTAContact from "@/components/sections/CTAContact";
import { RSE_AXES } from "@/data/rse";
import { ICONS, DEFAULT_ICON } from "@/lib/icons";

export const metadata: Metadata = {
  title: "RSE",
  description:
    "L’engagement RSE d’Olumerium Group : éducation, communautés locales, environnement, éthique et collaborateurs.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="RSE"
        title="Notre engagement RSE"
        description="Un impact responsable, durable et centré sur le développement humain, au cœur de la stratégie du Groupe."
      />

      <section className="bg-white py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Notre engagement
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-navy-corporate/70">
              Olumerium Group place la responsabilité sociétale au cœur de sa
              stratégie de développement, avec la conviction que la
              performance économique et l’impact positif sur les
              communautés sont indissociables.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-offwhite py-24">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Nos priorités
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RSE_AXES.map((axis, i) => {
              const Icon = ICONS[axis.icon] ?? DEFAULT_ICON;
              return (
                <Reveal key={axis.id} delay={(i % 3) * 0.06}>
                  <div className="h-full border border-navy/10 bg-white p-8 transition-all duration-500 hover:border-gold/60">
                    <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                    <h3 className="mt-5 font-display text-xl font-semibold text-navy">
                      {axis.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-navy-corporate/65">
                      {axis.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-navy-gradient py-24 text-white">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold">
              Notre impact
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-pearl/75">
              Les actions et résultats détaillés de nos programmes RSE seront
              publiés progressivement, à mesure de leur déploiement et de
              leur validation par le Comité RSE du Groupe.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTAContact />
    </>
  );
}

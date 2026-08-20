import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import NewsCard from "@/components/cards/NewsCard";
import { NEWS } from "@/data/news";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Toute l’actualité d’Olumerium Group et de ses filiales.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Actualités"
        title="L’actualité du Groupe."
        description="Suivez les temps forts, annonces et initiatives d’Olumerium Group et de ses filiales."
      />

      <section className="bg-offwhite py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {NEWS.map((article, i) => (
              <Reveal key={article.id} delay={(i % 3) * 0.08}>
                <NewsCard article={article} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

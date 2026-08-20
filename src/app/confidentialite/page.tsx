import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité d’Olumerium Group.",
};

export default function ConfidentialitePage() {
  return (
    <section className="bg-white py-32">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-navy">
          Politique de confidentialité
        </h1>
        <div className="mt-10 space-y-6 font-body text-sm leading-relaxed text-navy-corporate/70">
          <p>
            Olumerium Group attache une importance particulière à la
            protection des données personnelles des visiteurs de son site.
          </p>
          <p>
            Le détail de notre politique de traitement des données
            personnelles (finalités, durées de conservation, droits des
            personnes) sera publié dès sa validation officielle par le
            Groupe.
          </p>
        </div>
      </Container>
    </section>
  );
}

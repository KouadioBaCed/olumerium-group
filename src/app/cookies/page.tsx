import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Politique relative aux cookies d’Olumerium Group.",
};

export default function CookiesPage() {
  return (
    <section className="bg-white py-32">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-navy">
          Politique relative aux cookies
        </h1>
        <div className="mt-10 space-y-6 font-body text-sm leading-relaxed text-navy-corporate/70">
          <p>
            Ce site peut utiliser des cookies techniques nécessaires à son
            bon fonctionnement.
          </p>
          <p>
            Le détail de notre politique en matière de cookies (nature,
            finalités, gestion des préférences) sera publié dès sa
            validation officielle par le Groupe.
          </p>
        </div>
      </Container>
    </section>
  );
}

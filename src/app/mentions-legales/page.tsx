import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales d’Olumerium Group.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-white py-32">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-semibold text-navy">
          Mentions légales
        </h1>
        <div className="mt-10 space-y-6 font-body text-sm leading-relaxed text-navy-corporate/70">
          <p>
            Le présent site est édité par {COMPANY.legalName}, dont le siège
            social est situé {COMPANY.address.street},{" "}
            {COMPANY.address.district}, {COMPANY.address.city},{" "}
            {COMPANY.address.country}.
          </p>
          <p>
            Contact :{" "}
            <a href={`mailto:${COMPANY.email}`} className="text-gold hover:underline">
              {COMPANY.email}
            </a>
          </p>
          <p>
            Le contenu de cette page sera complété avec les informations
            légales officielles (numéro d’immatriculation, hébergeur,
            directeur de publication) dès leur transmission par le Groupe.
          </p>
        </div>
      </Container>
    </section>
  );
}

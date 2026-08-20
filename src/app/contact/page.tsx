import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Olumerium Group — siège social à Abidjan, Côte d’Ivoire.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        description="Notre équipe est à votre écoute pour toute demande d’information."
      />

      <section className="bg-white py-24">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-navy">
              {COMPANY.name}
            </h2>

            <div className="mt-8 space-y-8">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <p className="font-body text-sm leading-relaxed text-navy-corporate/75">
                  {COMPANY.address.district}
                  <br />
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.city} — {COMPANY.address.country}
                </p>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div className="font-body text-sm leading-relaxed text-navy-corporate/75">
                  {COMPANY.phones.map((phone) => (
                    <p key={phone}>
                      <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-gold">
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <p className="font-body text-sm leading-relaxed text-navy-corporate/75">
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-gold">
                    {COMPANY.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-10 aspect-[4/3] w-full border border-navy/10 bg-offwhite">
              <div className="flex h-full w-full items-center justify-center">
                <p className="px-6 text-center font-label text-[11px] uppercase tracking-[0.15em] text-navy-corporate/40">
                  Emplacement réservé à la carte —
                  <br />
                  Abidjan, Cocody Angré 8ᵉ Tranche
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

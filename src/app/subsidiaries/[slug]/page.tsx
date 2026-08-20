import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import BrandMotif from "@/components/ui/BrandMotif";
import CTAContact from "@/components/sections/CTAContact";
import { SUBSIDIARIES, getSubsidiaryBySlug } from "@/data/subsidiaries";

export function generateStaticParams() {
  return SUBSIDIARIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subsidiary = getSubsidiaryBySlug(slug);
  if (!subsidiary) return {};
  return {
    title: subsidiary.name,
    description: subsidiary.description,
  };
}

export default async function SubsidiaryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subsidiary = getSubsidiaryBySlug(slug);
  if (!subsidiary) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-navy-gradient pb-24 pt-40 text-white">
        <BrandMotif
          variant="globe"
          className="pointer-events-none absolute -right-24 top-16 h-[380px] w-[380px] opacity-30"
        />
        <Container className="relative">
          <Link
            href="/subsidiaries"
            className="mb-10 inline-flex items-center gap-2 font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-pearl/70 hover:text-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Toutes les filiales
          </Link>

          <Reveal>
            <span className="font-display text-5xl font-semibold text-gold/70">
              {subsidiary.number}
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
              {subsidiary.name}
            </h1>
            <p className="mt-5 font-label text-xs font-semibold uppercase tracking-[0.2em] text-royal">
              {subsidiary.sector}
            </p>
            {subsidiary.isNew && (
              <p className="mt-3 inline-block border border-gold/50 px-3 py-1 font-label text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
                Nouvelle entité du Groupe
              </p>
            )}
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container className="max-w-3xl">
          <Reveal className="border-l-2 border-gold pl-8">
            <p className="font-body text-lg leading-relaxed text-navy-corporate/75">
              {subsidiary.description}
            </p>
            <p className="mt-8 font-body text-sm leading-relaxed text-navy-corporate/50">
              Les informations détaillées de cette filiale (pays d’implantation,
              coordonnées, site web dédié, réalisations) seront publiées dès
              leur confirmation officielle par Olumerium Group.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-4">
            {subsidiary.website && (
              <a
                href={subsidiary.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 border border-gold bg-gold px-7 py-3.5 font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-navy transition-all hover:bg-transparent hover:text-gold"
              >
                Visiter le site officiel
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
            <Button href="/contact" variant="outline-dark">
              Contacter le Groupe
            </Button>
          </div>
        </Container>
      </section>

      <CTAContact />
    </>
  );
}

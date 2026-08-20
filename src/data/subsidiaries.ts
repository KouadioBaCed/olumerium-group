import type { Subsidiary } from "@/types";

/**
 * The 14 official subsidiaries & entities of Olumerium Group.
 * Descriptions are intentionally generic placeholders pending
 * client-confirmed content — see field-level TODOs. Extend this
 * record with logo, image, countries, website, phone, email as
 * official information becomes available.
 */
export const SUBSIDIARIES: Subsidiary[] = [
  {
    id: "finance",
    slug: "olumerium-finance",
    number: "01",
    name: "OLUMERIUM FINANCE",
    sector: "Finance & Investissements",
    description:
      "Solutions financières et développement d’opportunités stratégiques.",
  },
  {
    id: "capital",
    slug: "olumerium-capital",
    number: "02",
    name: "OLUMERIUM CAPITAL",
    sector: "Finance & Investissements",
    description:
      "Gestion d’actifs et d’investissements au service de la croissance du Groupe.",
    isNew: true,
  },
  {
    id: "construction-real-estate",
    slug: "olumerium-construction-real-estate",
    number: "03",
    name: "OLUMERIUM CONSTRUCTION & REAL ESTATE",
    sector: "Construction & Immobilier",
    description:
      "Développement d’infrastructures et de projets immobiliers structurants.",
  },
  {
    id: "mining",
    slug: "olumerium-mining",
    number: "04",
    name: "OLUMERIUM MINING",
    sector: "Mines & Ressources naturelles",
    description:
      "Valorisation responsable des ressources naturelles et minières.",
  },
  {
    id: "energy",
    slug: "olumerium-energy",
    number: "05",
    name: "OLUMERIUM ENERGY",
    sector: "Énergie & Utilités",
    description:
      "Solutions énergétiques au service du développement des territoires.",
  },
  {
    id: "petroleum",
    slug: "olumerium-petroleum",
    number: "06",
    name: "OLUMERIUM PETROLEUM",
    sector: "Pétrole & Hydrocarbures",
    description:
      "Activités liées au secteur pétrolier et aux hydrocarbures.",
    isNew: true,
  },
  {
    id: "agro",
    slug: "olumerium-agro",
    number: "07",
    name: "OLUMERIUM AGRO",
    sector: "Agro-industrie",
    description:
      "Développement de filières agro-industrielles durables et performantes.",
  },
  {
    id: "industries",
    slug: "olumerium-industries",
    number: "08",
    name: "OLUMERIUM INDUSTRIES",
    sector: "Industries & Manufacturing",
    description:
      "Production industrielle et développement manufacturier.",
  },
  {
    id: "logistics",
    slug: "olumerium-logistics",
    number: "09",
    name: "OLUMERIUM LOGISTICS",
    sector: "Logistique & Transport",
    description:
      "Solutions logistiques et de transport au service des économies régionales.",
  },
  {
    id: "technologies",
    slug: "olumerium-technologies",
    number: "10",
    name: "OLUMERIUM TECHNOLOGIES",
    sector: "Technologies & Innovation",
    description:
      "Innovation numérique et solutions technologiques pour la transformation.",
  },
  {
    id: "healthcare",
    slug: "olumerium-healthcare",
    number: "11",
    name: "OLUMERIUM HEALTHCARE",
    sector: "Santé & Pharmaceutique",
    description:
      "Contribution au développement de l’accès aux soins et à la santé.",
  },
  {
    id: "hospitality",
    slug: "olumerium-hospitality",
    number: "12",
    name: "OLUMERIUM HOSPITALITY",
    sector: "Hospitality & Tourisme",
    description:
      "Développement d’expériences hôtelières et touristiques de qualité.",
  },
  {
    id: "retail",
    slug: "olumerium-retail",
    number: "13",
    name: "OLUMERIUM RETAIL",
    sector: "Distribution & Retail",
    description:
      "Distribution et commerce au service des consommateurs et des territoires.",
  },
  {
    id: "foundation",
    slug: "olumerium-foundation",
    number: "14",
    name: "OLUMERIUM FOUNDATION",
    sector: "Développement social",
    description:
      "Engagement social et communautaire du Groupe au service des populations.",
  },
];

export function getSubsidiaryBySlug(slug: string): Subsidiary | undefined {
  return SUBSIDIARIES.find((s) => s.slug === slug);
}

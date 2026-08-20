import type { Sector } from "@/types";

/**
 * The Group's 13 strategic sectors of activity. A sector is a
 * distinct concept from a subsidiary — several subsidiaries can
 * relate loosely to one sector, and this list is not a 1:1 mapping.
 */
export const ACTIVITIES: Sector[] = [
  {
    id: "finance-investments",
    number: "01",
    slug: "finance-investissements",
    title: "Finance & Investissements",
    description:
      "Structuration financière, gestion d’actifs et développement d’opportunités d’investissement stratégiques.",
    icon: "landmark",
  },
  {
    id: "construction-real-estate",
    number: "02",
    slug: "construction-immobilier",
    title: "Construction & Immobilier",
    description:
      "Conception et réalisation d’infrastructures et de programmes immobiliers structurants.",
    icon: "building-2",
  },
  {
    id: "mining-resources",
    number: "03",
    slug: "mines-ressources-naturelles",
    title: "Mines & Ressources naturelles",
    description:
      "Exploration et valorisation responsable des ressources naturelles et minières.",
    icon: "mountain",
  },
  {
    id: "energy-utilities",
    number: "04",
    slug: "energie-utilites",
    title: "Énergie & Utilités",
    description:
      "Développement de solutions énergétiques fiables au service des territoires.",
    icon: "zap",
  },
  {
    id: "oil-gas",
    number: "05",
    slug: "petrole-hydrocarbures",
    title: "Pétrole & Hydrocarbures",
    description:
      "Activités liées à la chaîne de valeur du pétrole et des hydrocarbures.",
    icon: "fuel",
  },
  {
    id: "agro-industry",
    number: "06",
    slug: "agro-industrie",
    title: "Agro-industrie",
    description:
      "Développement de filières agricoles et agro-industrielles durables.",
    icon: "wheat",
  },
  {
    id: "industries-manufacturing",
    number: "07",
    slug: "industries-manufacturing",
    title: "Industries & Manufacturing",
    description:
      "Production industrielle et développement de capacités manufacturières.",
    icon: "factory",
  },
  {
    id: "logistics-transport",
    number: "08",
    slug: "logistique-transport",
    title: "Logistique & Transport",
    description:
      "Solutions de logistique et de transport connectant les marchés régionaux.",
    icon: "truck",
  },
  {
    id: "technology-innovation",
    number: "09",
    slug: "technologies-innovation",
    title: "Technologies & Innovation",
    description:
      "Transformation numérique et développement de solutions technologiques.",
    icon: "cpu",
  },
  {
    id: "health-pharma",
    number: "10",
    slug: "sante-pharmaceutique",
    title: "Santé & Pharmaceutique",
    description:
      "Contribution à l’amélioration de l’accès aux soins et aux produits de santé.",
    icon: "heart-pulse",
  },
  {
    id: "hospitality-tourism",
    number: "11",
    slug: "hospitality-tourisme",
    title: "Hospitality & Tourisme",
    description:
      "Développement d’expériences hôtelières et touristiques de standing international.",
    icon: "hotel",
  },
  {
    id: "retail-distribution",
    number: "12",
    slug: "distribution-retail",
    title: "Distribution & Retail",
    description:
      "Réseaux de distribution et solutions commerciales au service des consommateurs.",
    icon: "store",
  },
  {
    id: "social-development",
    number: "13",
    slug: "developpement-social",
    title: "Développement social",
    description:
      "Programmes et initiatives au service du développement des communautés.",
    icon: "hand-heart",
  },
];

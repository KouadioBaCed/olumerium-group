import type { CompanyInfo, KeyStat } from "@/types";

export const COMPANY: CompanyInfo = {
  name: "OLUMERIUM GROUP",
  legalName: "Olumerium Group",
  tagline: "Éclairer le progrès. Bâtir la prospérité.",
  positioning:
    "Groupe multinational panafricain dont le siège social est basé en Côte d’Ivoire.",
  mission:
    "Créer de la valeur durable et contribuer au développement de l’Afrique et du monde à travers des activités diversifiées dans des secteurs stratégiques.",
  ceoName: "Oloye Oloye Brice",
  ceoTitle: "Président-Directeur Général",
  address: {
    street: "Rue des Jardins, Immeuble Olumerium Group",
    district: "Cocody Angré 8ᵉ Tranche",
    city: "Abidjan",
    country: "Côte d’Ivoire",
  },
  phones: ["+225 07 48 55 09 99", "+225 05 45 55 09 99"],
  email: "contact@olumeriumgroup.com",
  website: "www.olumeriumgroup.com",
};

export const KEY_STATS: KeyStat[] = [
  { id: "countries", value: 15, suffix: "+", label: "Pays d’implantation" },
  { id: "employees", value: 5000, suffix: "+", label: "Collaborateurs" },
  { id: "sectors", value: 12, label: "Secteurs clés" },
  { id: "experience", value: 10, suffix: "+", label: "Années d’expertise" },
  { id: "subsidiaries", value: 14, label: "Filiales & entités" },
  {
    id: "revenue",
    value: 1.2,
    suffix: " Md+ FCFA",
    label: "Chiffre d’affaires consolidé",
  },
  { id: "projects", value: 500, suffix: "+", label: "Projets réalisés et en cours" },
];

export const VISION_TEXT =
  "Être un groupe panafricain de référence, créateur de valeur durable et reconnu pour son impact positif sur les économies et les sociétés.";

export const MISSION_TEXT =
  "Créer, développer et gérer des entreprises performantes et responsables dans des secteurs stratégiques, en offrant des solutions innovantes qui améliorent la qualité de vie et favorisent le progrès durable.";

export const CEO_MESSAGE = `Olumerium Group est né d’une vision forte : créer un groupe africain d’envergure internationale, capable d’innover et de transformer les défis de notre temps en opportunités durables pour nos communautés et les générations futures.

Nous croyons en l’excellence, en l’intégrité et en l’innovation comme leviers de croissance et de progrès.

Ce projet illustre notre engagement et notre détermination à bâtir un groupe performant, responsable et tourné vers l’avenir.

Ensemble, construisons un avenir meilleur pour tous.`;

export const ABOUT_TEXT = `Olumerium Group est un groupe multinational panafricain dont le siège social est basé en Côte d’Ivoire.

Nous opérons dans des secteurs clés de l’économie avec pour mission de créer de la valeur durable et d’améliorer le développement de l’Afrique et du monde.

Notre stratégie repose sur la diversification, l’excellence opérationnelle, l’innovation et la création de valeur à long terme.`;

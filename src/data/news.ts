import type { NewsArticle } from "@/types";

/**
 * Mock news data pending a future CMS/backend integration. Content
 * is deliberately institutional and generic — to be replaced with
 * real articles once available.
 */
export const NEWS: NewsArticle[] = [
  {
    id: "lancement-site",
    slug: "lancement-du-site-institutionnel-olumerium-group",
    title: "Olumerium Group lance son site institutionnel",
    summary:
      "Le Groupe se dote d’une nouvelle plateforme digitale pour présenter ses activités et son ambition panafricaine.",
    content:
      "Olumerium Group annonce le lancement de son site institutionnel, une plateforme digitale conçue pour présenter le Groupe, ses filiales, ses secteurs d’activité et son engagement en matière de responsabilité sociétale. Cette initiative s’inscrit dans la stratégie de développement et de visibilité internationale du Groupe.",
    category: "Groupe",
    date: "2026-01-15",
  },
  {
    id: "extension-portefeuille",
    slug: "extension-du-portefeuille-avec-olumerium-petroleum-et-olumerium-capital",
    title: "Le Groupe renforce son portefeuille avec deux nouvelles entités",
    summary:
      "Olumerium Petroleum et Olumerium Capital rejoignent l’écosystème du Groupe, portant à 14 le nombre de filiales et entités.",
    content:
      "Dans le cadre de sa stratégie de diversification, Olumerium Group annonce l’intégration de deux nouvelles entités à son écosystème : Olumerium Petroleum, dédiée aux activités pétrolières et aux hydrocarbures, et Olumerium Capital, dédiée à la gestion d’actifs et d’investissements. Le Groupe compte désormais 14 filiales et entités.",
    category: "Filiales",
    date: "2026-02-10",
  },
  {
    id: "engagement-rse",
    slug: "olumerium-group-reaffirme-son-engagement-rse",
    title: "Olumerium Group réaffirme son engagement RSE",
    summary:
      "Le Groupe consolide ses axes d’engagement en matière d’éducation, d’environnement et de développement des communautés.",
    content:
      "Olumerium Group poursuit le déploiement de sa stratégie de responsabilité sociétale, articulée autour de cinq axes prioritaires : éducation et formation, communautés locales, environnement, éthique et droits humains, et développement des collaborateurs.",
    category: "RSE",
    date: "2026-03-05",
  },
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return NEWS.find((n) => n.slug === slug);
}

export const NEWS_CATEGORIES = Array.from(
  new Set(NEWS.map((article) => article.category))
);

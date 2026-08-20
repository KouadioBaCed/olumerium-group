import type { GovernanceBody } from "@/types";

export const GOVERNANCE_BODIES: GovernanceBody[] = [
  {
    id: "direction-generale",
    name: "Direction Générale",
    description:
      "Pilote la stratégie globale du Groupe et supervise l’exécution opérationnelle des filiales.",
  },
  {
    id: "conseil-administration",
    name: "Conseil d’administration",
    description:
      "Définit les orientations stratégiques et veille à la performance durable du Groupe.",
  },
  {
    id: "comite-audit",
    name: "Comité d’audit",
    description:
      "Garantit la fiabilité de l’information financière et la solidité du contrôle interne.",
  },
  {
    id: "comite-risques",
    name: "Comité des risques",
    description:
      "Identifie, évalue et supervise la gestion des risques stratégiques et opérationnels.",
  },
  {
    id: "comite-rse",
    name: "Comité RSE",
    description:
      "Oriente et suit les engagements sociaux, environnementaux et sociétaux du Groupe.",
  },
  {
    id: "comite-ethique",
    name: "Comité éthique",
    description:
      "Veille au respect des principes d’intégrité et de conformité dans toutes les activités.",
  },
];

import type { PresenceCountry, PresenceRegion } from "@/types";

/**
 * Regions of presence. Exact countries are intentionally NOT listed
 * (not officially confirmed) — the array below is empty and ready to
 * be populated with { country, region, entities, activities } once
 * official data is provided.
 */
export const PRESENCE_REGIONS: PresenceRegion[] = [
  { id: "west-africa", name: "Afrique de l’Ouest" },
  { id: "central-africa", name: "Afrique centrale" },
  { id: "east-africa", name: "Afrique de l’Est" },
  { id: "southern-africa", name: "Afrique australe" },
  { id: "europe", name: "Europe" },
  { id: "middle-east", name: "Moyen-Orient" },
  { id: "asia", name: "Asie" },
];

export const PRESENCE_COUNTRIES: PresenceCountry[] = [];

export const PRESENCE_COUNT_LABEL = "15+ pays d’implantation";

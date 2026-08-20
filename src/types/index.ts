/**
 * Central type definitions for the Olumerium Group corporate site.
 * These shapes are designed to be extensible so that a CMS or backend
 * can later be plugged in without changing consuming components.
 */

export interface CompanyAddress {
  street: string;
  district: string;
  city: string;
  country: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  positioning: string;
  mission: string;
  ceoName: string;
  ceoTitle: string;
  address: CompanyAddress;
  phones: string[];
  email: string;
  website: string;
}

export interface KeyStat {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

/** A subsidiary / operating entity of the Group. Fields beyond the
 * essentials are optional so pages degrade gracefully until content
 * is confirmed and supplied by the client. */
export interface Subsidiary {
  id: string;
  slug: string;
  number: string;
  name: string;
  sector: string;
  description: string;
  logo?: string;
  image?: string;
  color?: string;
  countries?: string[];
  website?: string;
  phone?: string;
  email?: string;
  isNew?: boolean;
}

export interface Sector {
  id: string;
  number: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export interface CoreValue {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineEvent {
  id: string;
  period: string;
  title: string;
  description: string;
}

export type PartnerStatus = "confirmed" | "to-confirm";

export interface Partner {
  id: string;
  name: string;
  status: PartnerStatus;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  image?: string;
}

export interface PresenceCountry {
  country: string;
  region: string;
  entities: string[];
  activities: string[];
}

export interface PresenceRegion {
  id: string;
  name: string;
  description?: string;
}

export interface GovernanceBody {
  id: string;
  name: string;
  description: string;
}

export interface WhyUsPoint {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Perspective2030Goal {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface RSEAxis {
  id: string;
  title: string;
  description: string;
  icon: string;
}

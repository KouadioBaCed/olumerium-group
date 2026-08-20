import type { MetadataRoute } from "next";
import { SUBSIDIARIES } from "@/data/subsidiaries";
import { NEWS } from "@/data/news";

const siteUrl = "https://www.olumeriumgroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/activities",
    "/subsidiaries",
    "/presence",
    "/sustainability",
    "/news",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    "/cookies",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const subsidiaryRoutes = SUBSIDIARIES.map((s) => ({
    url: `${siteUrl}/subsidiaries/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const newsRoutes = NEWS.map((n) => ({
    url: `${siteUrl}/news/${n.slug}`,
    lastModified: n.date,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...subsidiaryRoutes, ...newsRoutes];
}

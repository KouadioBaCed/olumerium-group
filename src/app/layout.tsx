import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/data/company";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.olumeriumgroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Olumerium Group | Éclairer le progrès. Bâtir la prospérité.",
    template: "%s | Olumerium Group",
  },
  description:
    "Olumerium Group est un groupe multinational panafricain basé en Côte d’Ivoire, présent dans plusieurs secteurs stratégiques et engagé dans la création de valeur durable.",
  keywords: [
    "Olumerium Group",
    "groupe panafricain",
    "holding Côte d'Ivoire",
    "Abidjan",
    "investissement Afrique",
    "conglomérat africain",
  ],
  authors: [{ name: "Olumerium Group" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Olumerium Group",
    title: "Olumerium Group | Éclairer le progrès. Bâtir la prospérité.",
    description:
      "Groupe multinational panafricain basé en Côte d’Ivoire, présent dans plusieurs secteurs stratégiques et engagé dans la création de valeur durable.",
    images: [
      {
        url: "/logo/olumerium_logo_normal.png",
        width: 1200,
        height: 1200,
        alt: "Olumerium Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olumerium Group | Éclairer le progrès. Bâtir la prospérité.",
    description:
      "Groupe multinational panafricain basé en Côte d’Ivoire, engagé dans la création de valeur durable.",
    images: ["/logo/olumerium_logo_normal.png"],
  },
  icons: {
    icon: "/logo/olumerium_logo_transparent.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: siteUrl,
    logo: `${siteUrl}/logo/olumerium_logo_normal.png`,
    slogan: COMPANY.tagline,
    description: COMPANY.mission,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressCountry: COMPANY.address.country,
    },
    contactPoint: COMPANY.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "customer service",
      email: COMPANY.email,
    })),
  };

  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${montserrat.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-navy antialiased font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

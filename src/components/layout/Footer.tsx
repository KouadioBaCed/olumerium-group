import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/data/company";
import { NAV_LINKS } from "@/data/navigation";
import Container from "@/components/ui/Container";

const FOOTER_COLUMNS = [
  {
    title: "Le Groupe",
    links: [
      { label: "Qui sommes-nous", href: "/about" },
      { label: "Nos activités", href: "/activities" },
      { label: "Nos filiales", href: "/subsidiaries" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Notre présence", href: "/presence" },
      { label: "RSE", href: "/sustainability" },
      { label: "Actualités", href: "/news" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "Nous contacter", href: "/contact" }],
  },
];

const LEGAL_LINKS = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/confidentialite" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-white">
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo/olumerium_logo_transparent.png"
                alt="Olumerium Group"
                width={48}
                height={48}
                className="h-11 w-11 object-contain"
              />
              <span className="font-display text-xl font-semibold tracking-wide">
                OLUMERIUM <span className="text-gold">GROUP</span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs font-display text-lg italic leading-snug text-gold-light">
              Éclairer le progrès.
              <br />
              Bâtir la prospérité.
            </p>
            <div className="mt-8 space-y-1.5 font-body text-sm leading-relaxed text-pearl/75">
              <p>{COMPANY.address.district}</p>
              <p>{COMPANY.address.street}</p>
              <p>
                {COMPANY.address.city} — {COMPANY.address.country}
              </p>
              <p className="pt-3">
                {COMPANY.phones.map((phone, i) => (
                  <span key={phone}>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-gold">
                      {phone}
                    </a>
                    {i < COMPANY.phones.length - 1 && <br />}
                  </span>
                ))}
              </p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-gold">
                  {COMPANY.email}
                </a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-body text-sm text-pearl/75 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <nav className="mt-16 hidden flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8 sm:flex" aria-label="Navigation secondaire">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-label text-[11px] uppercase tracking-[0.15em] text-pearl/60 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-pearl/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Olumerium Group. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

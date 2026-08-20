"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid && "shadow-[0_1px_0_0_rgba(201,151,43,0.25)]",
        open
          ? "bg-navy"
          : scrolled
            ? "bg-navy/95 backdrop-blur-md"
            : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-6 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-3" aria-label="Olumerium Group — Accueil">
          <Image
            src="/logo/olumerium_logo_transparent.png"
            alt="Olumerium Group"
            width={44}
            height={44}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="hidden font-display text-lg font-semibold tracking-wide text-white sm:block">
            OLUMERIUM <span className="text-gold">GROUP</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-label text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-gold",
                pathname === link.href && "text-gold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden border border-gold px-6 py-2.5 font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-navy lg:inline-block"
          >
            Nous contacter
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 top-20 z-40 flex flex-col bg-navy px-6 pt-10 lg:hidden"
          >
            <nav className="flex flex-1 flex-col gap-2" aria-label="Navigation mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-5 font-display text-3xl text-white transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mb-10 w-full border border-gold px-6 py-4 text-center font-label text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              Nous contacter
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

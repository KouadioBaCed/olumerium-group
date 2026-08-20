"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Container from "@/components/ui/Container";
import BrandMotif from "@/components/ui/BrandMotif";
import { COMPANY } from "@/data/company";
import { EASE } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-gradient">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
          className="absolute -right-32 top-1/2 h-[720px] w-[720px] -translate-y-1/2 opacity-70 md:-right-10"
        >
          <BrandMotif variant="globe" className="h-full w-full" />
        </motion.div>
        <BrandMotif variant="grid" className="absolute inset-0 h-full w-full opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
      </div>

      <Container className="relative z-10 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-6 flex items-center gap-3 font-label text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-light"
        >
          <span className="h-px w-10 bg-gold-light" />
          Groupe panafricain — Côte d’Ivoire
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
          className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Éclairer le progrès.
          <br />
          <span className="text-gold-gradient">Bâtir la prospérité.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
          className="mt-8 max-w-xl font-body text-lg leading-relaxed text-pearl/85 md:text-xl"
        >
          « Un groupe panafricain engagé pour créer de la valeur durable et
          contribuer au développement des économies et des communautés. »
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: EASE }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="/about"
            className="group inline-flex items-center justify-center gap-2.5 border border-gold bg-gold px-8 py-4 font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-navy transition-all hover:bg-transparent hover:text-gold"
          >
            Découvrir le Groupe
          </Link>
          <Link
            href="/activities"
            className="group inline-flex items-center justify-center gap-2.5 border border-white/30 px-8 py-4 font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:border-gold hover:text-gold"
          >
            Nos activités
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 font-label text-[11px] uppercase tracking-[0.2em] text-pearl/50"
        >
          {COMPANY.address.city}, {COMPANY.address.country}
        </motion.p>
      </Container>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-pearl/50 md:block"
        aria-hidden="true"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}

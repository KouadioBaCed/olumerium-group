import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import BrandMotif from "@/components/ui/BrandMotif";
import { ABOUT_TEXT } from "@/data/company";

export default function AboutTeaser() {
  const paragraphs = ABOUT_TEXT.split("\n\n");
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="À propos"
            title="Un groupe panafricain, une ambition internationale."
          />
          <div className="mt-8 space-y-5 border-l-2 border-gold pl-7">
            {paragraphs.map((p) => (
              <p key={p} className="font-body text-base leading-relaxed text-navy-corporate/75">
                {p}
              </p>
            ))}
          </div>
          <Button href="/about" variant="outline-dark" className="mt-10">
            Découvrir le Groupe
          </Button>
        </div>

        <Reveal delay={0.1}>
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-navy-gradient">
            <BrandMotif variant="globe" className="h-[80%] w-[80%] opacity-90" />
            <div className="absolute inset-x-0 bottom-0 border-t border-gold/30 bg-navy/70 p-8 backdrop-blur-sm">
              <p className="font-display text-2xl italic leading-snug text-gold-light">
                « Créer de la valeur durable. »
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

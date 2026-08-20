import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import BrandMotif from "@/components/ui/BrandMotif";

export default function CTAContact() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-28 text-white">
      <BrandMotif variant="arcs" className="pointer-events-none absolute -left-20 -top-20 h-[420px] w-[420px] opacity-40" />
      <Container className="relative text-center">
        <Reveal>
          <p className="font-label text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-light">
            Parlons de votre projet
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Construisons ensemble l’avenir de vos ambitions.
          </h2>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="gold">
              Nous contacter
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

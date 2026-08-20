import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BrandMotif from "@/components/ui/BrandMotif";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy-gradient text-white">
      <BrandMotif
        variant="globe"
        className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 opacity-30"
      />
      <Container className="relative">
        <p className="font-label text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-light">
          Erreur 404
        </p>
        <h1 className="mt-6 font-display text-5xl font-semibold md:text-6xl">
          Page introuvable.
        </h1>
        <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-pearl/75">
          La page que vous recherchez n’existe pas ou a été déplacée.
        </p>
        <Button href="/" variant="gold" className="mt-10">
          Retour à l’accueil
        </Button>
      </Container>
    </section>
  );
}

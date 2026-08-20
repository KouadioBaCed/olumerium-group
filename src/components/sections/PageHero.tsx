import Container from "@/components/ui/Container";
import BrandMotif from "@/components/ui/BrandMotif";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient pb-20 pt-40 text-white">
      <BrandMotif
        variant="grid"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
      />
      <BrandMotif
        variant="arcs"
        className="pointer-events-none absolute -right-32 -top-16 h-[420px] w-[420px] opacity-50"
      />
      <Container className="relative">
        <p className="mb-5 flex items-center gap-3 font-label text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-light">
          <span className="h-px w-10 bg-gold-light" />
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-pearl/80">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}

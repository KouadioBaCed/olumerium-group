import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { NEWS, getNewsBySlug } from "@/data/news";

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.summary };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const date = new Date(article.date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="bg-white pb-24 pt-40">
      <Container className="max-w-3xl">
        <Link
          href="/news"
          className="mb-10 inline-flex items-center gap-2 font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-corporate/60 hover:text-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Toutes les actualités
        </Link>

        <Reveal>
          <div className="flex items-center gap-3 font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-royal">
            <span>{article.category}</span>
            <span className="h-1 w-1 rounded-full bg-royal/50" />
            <time dateTime={article.date}>{date}</time>
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-navy md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-8 border-l-2 border-gold pl-8 font-body text-lg leading-relaxed text-navy-corporate/75">
            {article.content}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

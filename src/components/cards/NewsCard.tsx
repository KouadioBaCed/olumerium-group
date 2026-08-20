import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/types";

export default function NewsCard({ article }: { article: NewsArticle }) {
  const date = new Date(article.date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/news/${article.slug}`}
      className="group flex flex-col border border-navy/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
    >
      <div className="flex items-center gap-3 font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-royal">
        <span>{article.category}</span>
        <span className="h-1 w-1 rounded-full bg-royal/50" />
        <time dateTime={article.date}>{date}</time>
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-navy">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-navy-corporate/65">
        {article.summary}
      </p>
      <div className="mt-6 flex items-center gap-2 font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-navy transition-colors group-hover:text-gold">
        Lire l’article
        <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}

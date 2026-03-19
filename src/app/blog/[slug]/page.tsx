import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileText, TrendingUp, Award, ChevronLeft } from "lucide-react";

const API_URL = "https://app.whiskeyrivertx.com/api/content/public";

const TYPE_CONFIG: Record<string, { label: string; icon: typeof FileText; color: string; bg: string }> = {
  market_review: { label: "Market Review", icon: FileText, color: "text-blue-400", bg: "bg-blue-400/10" },
  top_new_accounts: { label: "Top New Accounts", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  venue_of_the_month: { label: "Venue of the Month", icon: Award, color: "text-amber-400", bg: "bg-amber-400/10" },
};

interface Article { id: string; title: string; slug: string; excerpt: string; body: string; article_type: string; cover_image_url?: string; published_at: string; author_name?: string; }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const res = await fetch(`${API_URL}?slug=${slug}`, { next: { revalidate: 3600 } });
    if (!res.ok) return { title: "Article Not Found" };
    const article: Article = await res.json();
    return { title: `${article.title} — Whiskey River TX`, description: article.excerpt };
  } catch { return { title: "Article Not Found" }; }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let article: Article | null = null;
  try {
    const res = await fetch(`${API_URL}?slug=${slug}`, { next: { revalidate: 3600 } });
    if (res.ok) article = await res.json();
  } catch {}
  if (!article) notFound();

  const config = TYPE_CONFIG[article.article_type] || TYPE_CONFIG.market_review;
  const Icon = config.icon;

  return (
    <>
      <Header />
      <main className="bg-slate-950 pt-32 pb-24 min-h-screen">
        <article className="mx-auto max-w-3xl px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 mb-8 text-sm font-medium"><ChevronLeft className="w-4 h-4" />Back to all articles</Link>
          {article.cover_image_url && <div className="mb-8 rounded-xl overflow-hidden h-96 bg-slate-800"><img src={article.cover_image_url} alt={article.title} className="w-full h-full object-cover" /></div>}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4"><div className={`w-9 h-9 rounded-lg ${config.bg} flex items-center justify-center`}><Icon className={`w-5 h-5 ${config.color}`} /></div><span className={`text-sm font-semibold ${config.color}`}>{config.label}</span></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <time>{new Date(article.published_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
              {article.author_name && <><span>•</span><span>By {article.author_name}</span></>}
            </div>
          </div>
          <div className="prose prose-invert max-w-none"><div className="text-slate-300 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: article.body }} /></div>
          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-slate-400 mb-4">Ready to explore your territory?</p>
            <a href="https://app.whiskeyrivertx.com/signup" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent-400/30 bg-accent-400/5 text-accent-400 hover:bg-accent-400/10 transition-all font-medium">Start your free trial →</a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

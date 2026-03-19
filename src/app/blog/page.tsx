import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FileText, TrendingUp, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Whiskey River TX",
  description: "Monthly Texas alcohol market intelligence, top new accounts, and venue highlights.",
};

const API_URL = "https://app.whiskeyrivertx.com/api/content/public?all=true";

const TYPE_CONFIG: Record<string, { label: string; icon: typeof FileText; color: string; bg: string }> = {
  market_review: { label: "Market Review", icon: FileText, color: "text-blue-400", bg: "bg-blue-400/10" },
  top_new_accounts: { label: "Top New Accounts", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  venue_of_the_month: { label: "Venue of the Month", icon: Award, color: "text-amber-400", bg: "bg-amber-400/10" },
};

interface Article { id: string; title: string; slug: string; excerpt: string; article_type: string; cover_image_url?: string; published_at: string; }

export default async function BlogPage() {
  let articles: Article[] = [];
  try {
    const res = await fetch(API_URL, { next: { revalidate: 3600 } });
    if (res.ok) { const data = await res.json(); articles = Array.isArray(data) ? data : []; }
  } catch {}

  return (
    <>
      <Header />
      <main className="bg-slate-950 pt-32 pb-24 min-h-screen">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Latest Data & Insights</h1>
          <p className="text-slate-400 mb-12 max-w-2xl">Monthly Texas alcohol market intelligence powered by real TABC data.</p>
          {articles.length === 0 ? (
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-12 text-center"><p className="text-slate-400">No articles published yet. Check back soon.</p></div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => {
                const config = TYPE_CONFIG[article.article_type] || TYPE_CONFIG.market_review;
                const Icon = config.icon;
                return (
                  <article key={article.id} className="group rounded-xl border border-slate-800 bg-slate-950/60 overflow-hidden hover:border-slate-700 transition-all">
                    {article.cover_image_url && <div className="h-48 overflow-hidden bg-slate-800"><img src={article.cover_image_url} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /></div>}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4"><div className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center`}><Icon className={`w-4 h-4 ${config.color}`} /></div><span className={`text-xs font-semibold ${config.color}`}>{config.label}</span></div>
                      <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-accent-300 transition-colors">{article.title}</h2>
                      <p className="text-sm text-slate-400 mb-5 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                        <time className="text-xs text-slate-500">{new Date(article.published_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
                        <Link href={`/blog/${article.slug}`} className="text-sm font-medium text-accent-400 hover:text-accent-300">Read more →</Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

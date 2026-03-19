"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, revealUp, viewport } from "@/lib/motion";
import { FileText, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

const API_URL = "https://app.whiskeyrivertx.com/api/content/public?featured=true";

const TYPE_CONFIG = {
  market_review: { label: "Market Review", icon: FileText, color: "text-blue-400", bg: "bg-blue-400/10" },
  top_new_accounts: { label: "Top New Accounts", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  venue_of_the_month: { label: "Venue of the Month", icon: Award, color: "text-amber-400", bg: "bg-amber-400/10" },
};

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  article_type: keyof typeof TYPE_CONFIG;
  cover_image_url?: string;
  published_at: string;
}

export default function LatestDataSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => setArticles(Array.isArray(data) ? data.slice(0, 3) : []))
      .catch(() => setArticles([]))
      .finally(() => setLoading(false));
  }, []);

  const displayArticles = articles.length > 0 ? articles : [
    { id: "1", title: "Coming Soon", slug: "#", excerpt: "Monthly Texas market intelligence. Check back soon.", article_type: "market_review" as const, published_at: new Date().toISOString() },
    { id: "2", title: "Coming Soon", slug: "#", excerpt: "Top new accounts analysis launching with our next data update.", article_type: "top_new_accounts" as const, published_at: new Date().toISOString() },
    { id: "3", title: "Coming Soon", slug: "#", excerpt: "Venue spotlights and industry insights coming monthly.", article_type: "venue_of_the_month" as const, published_at: new Date().toISOString() },
  ];

  return (
    <section id="latest-data" className="w-full bg-slate-950 section-y">
      <div className="section-container">
        <motion.div variants={revealUp} initial="hidden" whileInView="visible" viewport={viewport} className="text-center mb-14 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-3">Monthly Intelligence</p>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white">Latest Data Reviewed</h2>
          <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">Monthly Texas alcohol market insights powered by real TABC receipts data.</p>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {displayArticles.map((article) => {
            const config = TYPE_CONFIG[article.article_type];
            const Icon = config.icon;
            const isPlaceholder = !articles.length || article.slug === "#";
            return (
              <motion.div key={article.id} variants={staggerItem} className="group rounded-xl border border-slate-800 bg-slate-950/60 p-6 md:p-7 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-8 h-8 rounded-lg ${config.bg} flex items-center justify-center`}><Icon className={`w-4 h-4 ${config.color}`} strokeWidth={2} /></div>
                  <span className={`text-xs font-semibold ${config.color}`}>{config.label}</span>
                </div>
                {article.cover_image_url && !isPlaceholder && (<div className="mb-4 rounded-lg overflow-hidden h-40 bg-slate-800"><img src={article.cover_image_url} alt={article.title} className="w-full h-full object-cover" /></div>)}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent-300 transition-colors line-clamp-2">{article.title}</h3>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <time className="text-xs text-slate-500">{new Date(article.published_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
                  {isPlaceholder ? <span className="text-xs font-medium text-slate-500">Coming soon</span> : <Link href={`/blog/${article.slug}`} className="text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors">Read more →</Link>}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        {articles.length > 0 && (<motion.div variants={staggerItem} initial="hidden" whileInView="visible" viewport={viewport} className="text-center mt-12"><Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent-400/30 bg-accent-400/5 text-accent-400 hover:bg-accent-400/10 transition-all font-medium text-sm">View all articles →</Link></motion.div>)}
      </div>
    </section>
  );
}

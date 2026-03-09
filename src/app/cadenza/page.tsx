"use client";

import { motion } from "framer-motion";
import { BookOpen, ShoppingCart, TrendingUp, Users, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: BookOpen,
    title: "Menu Printing",
    description:
      "Design and print polished beverage menus directly from your live inventory and pricing data.",
  },
  {
    icon: ShoppingCart,
    title: "Streamlined Ordering",
    description:
      "Place orders with distributors in fewer clicks, backed by real-time par levels and depletion trends.",
  },
  {
    icon: TrendingUp,
    title: "Margin Tracking",
    description:
      "Monitor pour costs and margins per item so you can price with confidence and protect profitability.",
  },
  {
    icon: Users,
    title: "Guest-Facing Pages",
    description:
      "Publish beautiful, mobile-friendly digital menus your guests can browse from any device.",
  },
];

export default function CadenzaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80svh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent-400/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 section-container pt-32 pb-20 md:pt-40 md:pb-28">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent-300 text-sm font-semibold uppercase tracking-widest mb-5"
            >
              Cadenza by ThirstMetrics
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-3xl"
            >
              Beverage menu management&mdash;end to end.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              From menu design and printing to ordering, margin tracking, and
              guest-facing digital pages&mdash;Cadenza brings every piece of
              beverage menu ops into one streamlined platform.
            </motion.p>

            {/* Feature cards */}
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {f.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Coming Soon / Waitlist */}
        <section className="bg-slate-950 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-container text-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-300 bg-brand-500/10 border border-brand-500/20 rounded-full mb-6">
              Coming Soon
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join the Cadenza waitlist
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Be among the first to streamline your beverage menu operations.
              We&apos;ll notify you when Cadenza is ready for early access.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors shadow-soft"
            >
              Request Early Access
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}

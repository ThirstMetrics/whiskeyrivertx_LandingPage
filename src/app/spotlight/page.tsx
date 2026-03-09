"use client";

import { motion } from "framer-motion";
import { Building2, BarChart3, Package, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Building2,
    title: "Multi-Outlet Management",
    description:
      "Manage inventory across every bar, restaurant, and banquet hall within a single resort property.",
  },
  {
    icon: BarChart3,
    title: "Depletion Intelligence",
    description:
      "Real-time depletion data tailored for distributors and suppliers to optimize replenishment cycles.",
  },
  {
    icon: Package,
    title: "Unified Inventory View",
    description:
      "One dashboard to track stock levels, transfers, and variance across all outlets in your portfolio.",
  },
];

export default function SpotlightPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80svh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
          {/* Decorative gradient orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 section-container pt-32 pb-20 md:pt-40 md:pb-28">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent-300 text-sm font-semibold uppercase tracking-widest mb-5"
            >
              Spotlight by ThirstMetrics
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-3xl"
            >
              Resort inventory management&mdash;simplified.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Multi-outlet beverage inventory tracking with depletion
              intelligence built for distributors, suppliers, and resort
              operators managing complex hospitality portfolios.
            </motion.p>

            {/* Feature cards */}
            <div className="mt-14 grid sm:grid-cols-3 gap-6">
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
              Join the Spotlight waitlist
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Be the first to know when Spotlight launches. We&apos;ll reach out
              with early access details and a personalized demo.
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

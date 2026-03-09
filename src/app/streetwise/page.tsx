"use client";

import { motion } from "framer-motion";
import { MapPin, Camera, Wifi, Globe, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: MapPin,
    title: "Location-Pinned Intelligence",
    description:
      "Capture photographic intel tied to precise GPS coordinates for any location you visit.",
  },
  {
    icon: Camera,
    title: "Photo-First Workflow",
    description:
      "Snap photos of menus, shelf sets, signage, or conditions and they auto-tag with location metadata.",
  },
  {
    icon: Wifi,
    title: "Works Offline",
    description:
      "Full functionality without a connection. Data syncs automatically when you reconnect.",
  },
  {
    icon: Globe,
    title: "Browser-Based, Any Industry",
    description:
      "No app store required. Runs in any modern browser and adapts to field work across industries.",
  },
];

export default function StreetwisePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80svh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
          <div className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-brand-500/8 rounded-full blur-[110px] pointer-events-none" />

          <div className="relative z-10 section-container pt-32 pb-20 md:pt-40 md:pb-28">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent-300 text-sm font-semibold uppercase tracking-widest mb-5"
            >
              Streetwise by ThirstMetrics
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-3xl"
            >
              Location intelligence&mdash;captured in the field.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Pin photographic intelligence to real-world locations with Google
              Maps integration. Browser-based, works offline, and built for any
              industry that needs eyes on the ground.
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
              Join the Streetwise waitlist
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Be the first to deploy location-pinned photographic intelligence
              for your field teams. Early access coming soon.
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

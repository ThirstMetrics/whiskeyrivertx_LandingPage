import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WhiskeyRiver Platform — Texas Alcohol Market Intelligence SaaS",
  description: "WhiskeyRiver enriches every Texas LP license with B2B portals, ordering contacts, Provi status, and market gap analysis.",
};

const LAYERS = [
  { n: 1, color: "bg-brand-500", title: "TABC License Foundation", desc: "Every active LP license from TABC — 1,119 across 188 counties. Cleaned, deduplicated, and structured." },
  { n: 2, color: "bg-brand-500", title: "Store Classification Engine", desc: "Chain, Regional, or Independent based on ownership patterns and location counts." },
  { n: 3, color: "bg-brand-500", title: "Contact Discovery", desc: "Phone numbers, websites, and verified emails from public records, storefronts, and industry directories." },
  { n: 4, color: "bg-accent-500", title: "B2B Portal Detection", desc: "Direct links to wholesale ordering portals and B2B platforms for every store that has one." },
  { n: 5, color: "bg-accent-500", title: "Provi & Fintech Mapping", desc: "Know which stores use Provi, which have fintech integrations, and which are still phone-and-fax." },
  { n: 6, color: "bg-accent-500", title: "Market Gap Analysis", desc: "67 Texas counties have zero liquor stores. Wet/dry breakdowns, permit analysis, and opportunity scoring." },
];

const COMPARISON = [
  ["License name & address", true, true],
  ["License status & expiration", true, true],
  ["Store type classification", false, true],
  ["Chain location count", false, true],
  ["Phone number & website", false, true],
  ["Ordering email & phone", false, true],
  ["B2B ordering portal links", false, true],
  ["Provi integration status", false, true],
  ["Fintech adoption status", false, true],
  ["County wet/dry analysis", false, true],
  ["Market gap detection", false, true],
];

export default function ProductPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-brand-500 text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-accent-500 font-semibold text-sm uppercase tracking-wider mb-4">The Definitive Texas Alcohol Data Source</p>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">The Intelligence Platform No One Else Has.</h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">The only source that enriches every Texas LP license with B2B portals, ordering contacts, Provi status, and market gap analysis.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.whiskeyrivertx.com/signup" className="bg-accent-500 hover:bg-accent-600 px-8 py-3 rounded-lg text-lg font-semibold">Start Free Trial</a>
              <Link href="/directory" className="px-8 py-3 rounded-lg text-lg font-semibold border border-white/30 hover:bg-white/10 transition-colors">Try the Free Directory</Link>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-16 md:py-20 border-b">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">What TABC Gives You vs. WhiskeyRiver</h2>
            <p className="text-slate-500 text-center max-w-2xl mx-auto mb-12">TABC publishes the basics. We build the intelligence layer.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 bg-slate-100 border font-semibold text-slate-700 w-1/3">Data Point</th>
                    <th className="text-center py-3 px-4 bg-slate-100 border font-semibold text-slate-700 w-1/3">Raw TABC</th>
                    <th className="text-center py-3 px-4 bg-brand-500 border border-brand-500 text-white font-semibold w-1/3">WhiskeyRiver</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {COMPARISON.map(([label, tabc, wr], i) => (
                    <tr key={i} className={i % 2 ? "bg-slate-50" : ""}>
                      <td className="py-2.5 px-4 border">{label as string}</td>
                      <td className="py-2.5 px-4 border text-center">{tabc ? <span className="text-green-600 font-bold">\u2713</span> : <span className="text-slate-300">\u2717</span>}</td>
                      <td className="py-2.5 px-4 border text-center"><span className="text-green-600 font-bold">\u2713</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Six layers */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-accent-500 font-semibold text-sm uppercase tracking-wider text-center mb-3">How It Works</p>
            <h2 className="text-3xl font-bold text-center mb-12">Six Enrichment Layers, One Platform</h2>
            <div className="space-y-6">
              {LAYERS.map(l => (
                <div key={l.n} className="flex gap-5 items-start p-6 bg-white border rounded-xl shadow-sm">
                  <div className={`flex-shrink-0 w-12 h-12 ${l.color} text-white rounded-xl flex items-center justify-center font-bold text-lg`}>{l.n}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{l.title}</h3>
                    <p className="text-slate-500 text-sm">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-500 text-white py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to See the Full Picture?</h2>
            <p className="text-slate-300 mb-8">The free directory is just the surface. The platform gives you the enrichment, contacts, and intelligence that moves the needle.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://app.whiskeyrivertx.com/signup" className="bg-accent-500 hover:bg-accent-600 px-8 py-3 rounded-lg text-lg font-semibold">Start Free Trial</a>
              <Link href="/directory" className="px-8 py-3 rounded-lg text-lg font-semibold border border-white/30 hover:bg-white/10 transition-colors">Explore Free Data</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

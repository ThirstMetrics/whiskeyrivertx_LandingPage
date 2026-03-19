import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Download Texas LP License Dataset — Free | WhiskeyRiver TX",
  description: "Download the complete enriched Texas LP license dataset. 1,119 liquor stores with contacts and market intelligence.",
};

export default function DownloadPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold mb-3">Download the Complete LP License Dataset</h1>
          <p className="text-slate-500 mb-8 max-w-2xl">Get the full enriched file with 1,119 Texas liquor store records. Perfect for restaurant and bar owners sourcing spirits suppliers.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free tier */}
            <div className="border rounded-xl p-8">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Free Download</p>
              <h3 className="text-2xl font-bold mb-4">Basic LP Data</h3>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span> All 1,119 LP licenses</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span> County, city, address</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span> Store type classification</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">&#10003;</span> Chain location counts</li>
                <li className="flex gap-2 text-slate-400"><span>&#10007;</span> B2B portal links</li>
                <li className="flex gap-2 text-slate-400"><span>&#10007;</span> Ordering contacts</li>
                <li className="flex gap-2 text-slate-400"><span>&#10007;</span> Provi & fintech status</li>
              </ul>
              <a href="/data/lp_licenses.json" download className="block text-center py-3 rounded-lg font-semibold border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white transition-colors">
                Download JSON (Free)
              </a>
            </div>

            {/* Platform tier */}
            <div className="border-2 border-accent-500 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-6 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Full Access</div>
              <p className="text-sm font-semibold text-accent-500 uppercase tracking-wider mb-2">Platform</p>
              <h3 className="text-2xl font-bold mb-4">Full Enriched Dataset</h3>
              <ul className="space-y-3 text-sm mb-8">
                <li className="flex gap-2"><span className="text-accent-500 font-bold">&#10003;</span> Everything in free, plus:</li>
                <li className="flex gap-2"><span className="text-accent-500 font-bold">&#10003;</span> B2B ordering portal links</li>
                <li className="flex gap-2"><span className="text-accent-500 font-bold">&#10003;</span> Verified ordering contacts</li>
                <li className="flex gap-2"><span className="text-accent-500 font-bold">&#10003;</span> Provi integration status</li>
                <li className="flex gap-2"><span className="text-accent-500 font-bold">&#10003;</span> Fintech adoption mapping</li>
                <li className="flex gap-2"><span className="text-accent-500 font-bold">&#10003;</span> Market gap scoring</li>
                <li className="flex gap-2"><span className="text-accent-500 font-bold">&#10003;</span> Full enriched CSV/Excel export</li>
              </ul>
              <a href="https://app.whiskeyrivertx.com/signup" className="block text-center py-3 rounded-lg font-semibold bg-accent-500 text-white hover:bg-accent-600 transition-colors">
                Start Free Trial for Full Access
              </a>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-50 rounded-xl border">
            <h3 className="font-bold mb-2">Data Sources & Attribution</h3>
            <p className="text-sm text-slate-500">LP license data sourced from <a href="https://www.tabc.texas.gov" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">Texas Alcoholic Beverage Commission (TABC)</a> public records. County analysis uses data from the <a href="https://comptroller.texas.gov" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">Texas Comptroller of Public Accounts</a>. Enrichment layers powered by <a href="https://thirstmetrics.com" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">ThirstMetrics</a> and <a href="https://powerfulthirst.com" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">PowerfulThirst</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

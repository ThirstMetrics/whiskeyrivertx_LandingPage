"use client";

import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MissingCounty {
  county: string; category: string; p_count: number; mb_count: number;
  bg_count: number; bq_count: number; n_count: number;
}

const CAT_COLORS: Record<string, string> = {
  "Completely Dry": "bg-red-100 text-red-700",
  "No Package Stores": "bg-amber-100 text-amber-700",
  "No Mixed Beverage": "bg-blue-100 text-blue-700",
  "Has Both But No LP": "bg-purple-100 text-purple-700",
};

export default function InsightsPage() {
  const [data, setData] = useState<MissingCounty[]>([]);
  const [category, setCategory] = useState("");
  const [sortCol, setSortCol] = useState("county");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    fetch("/data/missing_counties.json").then(r => r.json()).then(setData);
  }, []);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    data.forEach(d => { c[d.category] = (c[d.category] || 0) + 1; });
    return c;
  }, [data]);

  const filtered = useMemo(() => {
    let f = category ? data.filter(d => d.category === category) : [...data];
    f.sort((a: any, b: any) => {
      const va = a[sortCol], vb = b[sortCol];
      if (typeof va === "number") return sortAsc ? va - vb : vb - va;
      return sortAsc ? String(va || "").localeCompare(String(vb || "")) : String(vb || "").localeCompare(String(va || ""));
    });
    return f;
  }, [data, category, sortCol, sortAsc]);

  const toggleSort = (col: string) => {
    if (sortCol === col) setSortAsc(!sortAsc);
    else { setSortCol(col); setSortAsc(true); }
  };

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <section className="bg-slate-100 border-b py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-2">Texas County Intelligence: Wet/Dry Analysis</h1>
            <p className="text-slate-500">67 of Texas&apos;s 254 counties have zero LP (package store) licenses. Data from <a href="https://www.tabc.texas.gov" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">TABC</a> and <a href="https://comptroller.texas.gov" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">Texas Comptroller</a>.</p>
          </div>
        </section>

        {/* Summary cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-red-700">{counts["Completely Dry"] || 0}</div>
              <div className="text-sm text-red-600 mt-1">Completely Dry</div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-amber-700">{counts["No Package Stores"] || 0}</div>
              <div className="text-sm text-amber-600 mt-1">No Package Stores</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-blue-700">{counts["No Mixed Beverage"] || 0}</div>
              <div className="text-sm text-blue-600 mt-1">No Mixed Beverage</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-purple-700">{counts["Has Both But No LP"] || 0}</div>
              <div className="text-sm text-purple-600 mt-1">Has Both But No LP</div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <select value={category} onChange={e => setCategory(e.target.value)} className="border rounded-lg px-3 py-2 text-sm">
              <option value="">All Categories</option>
              <option value="Completely Dry">Completely Dry</option>
              <option value="No Package Stores">No Package Stores</option>
              <option value="No Mixed Beverage">No Mixed Beverage</option>
              <option value="Has Both But No LP">Has Both But No LP</option>
            </select>
            <span className="text-sm text-slate-500">{filtered.length} counties shown</span>
          </div>

          <div className="overflow-x-auto border rounded-lg">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b">
                <tr>
                  {[["county","County"],["category","Category"],["p_count","P Permits"],["mb_count","MB Permits"],["bg_count","BG Permits"],["bq_count","BQ Permits"],["n_count","N Permits"]].map(([col,label]) => (
                    <th key={col} onClick={() => toggleSort(col)} className="text-left px-4 py-3 font-semibold text-slate-600 cursor-pointer hover:bg-slate-100 select-none whitespace-nowrap">{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((d, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-2.5 font-medium">{d.county}</td>
                    <td className="px-4 py-2.5"><span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${CAT_COLORS[d.category] || ""}`}>{d.category}</span></td>
                    <td className="px-4 py-2.5 text-center">{d.p_count}</td>
                    <td className="px-4 py-2.5 text-center">{d.mb_count}</td>
                    <td className="px-4 py-2.5 text-center">{d.bg_count}</td>
                    <td className="px-4 py-2.5 text-center">{d.bq_count}</td>
                    <td className="px-4 py-2.5 text-center">{d.n_count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

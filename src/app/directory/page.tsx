"use client";

import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, X, ChevronUp, ChevronDown } from "lucide-react";

interface License {
  county: string; trade_name: string; owner: string; address: string;
  city: string; state: string; zip: string; store_type: string;
  chain_count: number; phone: string; website: string;
  lp_license_id: string; lp_status: string;
}

const PER_PAGE = 50;

function Badge({ type }: { type: string }) {
  const cls = type === "Chain" ? "bg-blue-100 text-blue-700" : type === "Small Regional" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700";
  const label = type === "Small Regional" ? "Regional" : type;
  return <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cls}`}>{label}</span>;
}

export default function DirectoryPage() {
  const [data, setData] = useState<License[]>([]);
  const [search, setSearch] = useState("");
  const [county, setCounty] = useState("");
  const [storeType, setStoreType] = useState("");
  const [sortCol, setSortCol] = useState("county");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/lp_licenses.json").then(r => r.json()).then(d => { setData(d); setLoading(false); });
  }, []);

  const counties = useMemo(() => [...new Set(data.map(d => d.county))].sort(), [data]);

  const filtered = useMemo(() => {
    let f = data;
    if (county) f = f.filter(d => d.county === county);
    if (storeType) f = f.filter(d => d.store_type === storeType);
    if (search) {
      const s = search.toLowerCase();
      f = f.filter(d => (d.trade_name + " " + d.city + " " + d.owner + " " + d.county).toLowerCase().includes(s));
    }
    f = [...f].sort((a: any, b: any) => {
      const va = a[sortCol], vb = b[sortCol];
      if (typeof va === "number") return sortAsc ? va - vb : vb - va;
      return sortAsc ? String(va || "").localeCompare(String(vb || "")) : String(vb || "").localeCompare(String(va || ""));
    });
    return f;
  }, [data, search, county, storeType, sortCol, sortAsc]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageData = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  useEffect(() => { setPage(1); }, [search, county, storeType]);

  const toggleSort = (col: string) => {
    if (sortCol === col) setSortAsc(!sortAsc);
    else { setSortCol(col); setSortAsc(true); }
  };

  const SortIcon = ({ col }: { col: string }) => sortCol === col
    ? (sortAsc ? <ChevronUp className="w-3 h-3 inline ml-1" /> : <ChevronDown className="w-3 h-3 inline ml-1" />)
    : <ChevronUp className="w-3 h-3 inline ml-1 opacity-30" />;

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <section className="bg-slate-100 border-b py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-2">Texas LP License Directory</h1>
            <p className="text-slate-500">All 1,119 active LP (package store) licenses in Texas. Data sourced from <a href="https://www.tabc.texas.gov" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">TABC</a> public records.</p>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search by name, city, owner, or county..." value={search} onChange={e => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none" />
            </div>
            <select value={county} onChange={e => setCounty(e.target.value)} className="border rounded-lg px-3 py-2 text-sm">
              <option value="">All Counties</option>
              {counties.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={storeType} onChange={e => setStoreType(e.target.value)} className="border rounded-lg px-3 py-2 text-sm">
              <option value="">All Types</option>
              <option value="Chain">Chain</option>
              <option value="Small Regional">Regional</option>
              <option value="Independent">Independent</option>
            </select>
            {(search || county || storeType) && (
              <button onClick={() => { setSearch(""); setCounty(""); setStoreType(""); }} className="flex items-center gap-1 px-3 py-2 text-sm text-accent-500 font-semibold hover:bg-red-50 rounded-lg">
                <X className="w-4 h-4" /> Clear
              </button>
            )}
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-slate-500">{filtered.length.toLocaleString()} license{filtered.length !== 1 ? "s" : ""} found</span>
            <span className="text-sm text-slate-400">Page {page} of {totalPages}</span>
          </div>
          {loading ? <div className="text-center py-20 text-slate-400">Loading directory...</div> : (
            <div className="overflow-x-auto border rounded-lg">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 border-b">
                  <tr>
                    {[["county","County"],["trade_name","Store Name"],["city","City"],["store_type","Type"],["chain_count","Locs"],["phone","Phone"],["website","Website"]].map(([col,label]) => (
                      <th key={col} onClick={() => toggleSort(col)} className="text-left px-4 py-3 font-semibold text-slate-600 cursor-pointer hover:bg-slate-100 select-none whitespace-nowrap">
                        {label}<SortIcon col={col} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {pageData.map((d, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-4 py-2.5">{d.county}</td>
                      <td className="px-4 py-2.5 font-medium">{d.trade_name}</td>
                      <td className="px-4 py-2.5">{d.city}</td>
                      <td className="px-4 py-2.5"><Badge type={d.store_type} /></td>
                      <td className="px-4 py-2.5 text-center">{d.chain_count}</td>
                      <td className="px-4 py-2.5">{d.phone || <span className="text-slate-300">&mdash;</span>}</td>
                      <td className="px-4 py-2.5">{d.website ? <a href={d.website} target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">Visit</a> : <span className="text-slate-300">&mdash;</span>}</td>
                    </tr>
                  ))}
                  {pageData.length === 0 && <tr><td colSpan={7} className="px-4 py-12 text-center text-slate-400">No results match your filters.</td></tr>}
                </tbody>
              </table>
            </div>
          )}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <button onClick={() => setPage(1)} disabled={page === 1} className="px-3 py-1.5 border rounded text-sm disabled:opacity-30">First</button>
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-1.5 border rounded text-sm disabled:opacity-30">Prev</button>
              <span className="text-sm text-slate-500 px-3">Page {page} of {totalPages}</span>
              <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="px-3 py-1.5 border rounded text-sm disabled:opacity-30">Next</button>
              <button onClick={() => setPage(totalPages)} disabled={page === totalPages} className="px-3 py-1.5 border rounded text-sm disabled:opacity-30">Last</button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

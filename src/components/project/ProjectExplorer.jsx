import { useState, useMemo } from "react";
import { Search, ListFilter, ChevronDown } from "lucide-react";
import { PROJECTS, DOMAINS } from "../../data/projects";
import { SectionLabel } from "../common/SectionLabel";
import { ExplorerCard } from "./ExplorerCard";

export function ProjectExplorer() {
  const [domain, setDomain] = useState("All");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(true);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesDomain = domain === "All" || p.domain.includes(domain);
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.platform.join(" ").toLowerCase().includes(query.toLowerCase());
      return matchesDomain && matchesQuery;
    });
  }, [domain, query]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <SectionLabel>Project explorer</SectionLabel>
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">Browse by domain</h2>
        <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-2">
          <Search size={14} className="text-zinc-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or platforms"
            className="w-48 bg-transparent text-sm text-zinc-200 placeholder-zinc-600 outline-none md:w-64"
          />
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {["All", ...DOMAINS].map((d) => (
          <button
            key={d}
            onClick={() => setDomain(d)}
            className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
              domain === d
                ? "border-orange-500/40 bg-orange-500/10 text-orange-300"
                : "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <button
        onClick={() => setExpanded((e) => !e)}
        className="mb-4 flex w-full items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-300 transition-colors hover:border-zinc-700"
      >
        <span className="flex items-center gap-2">
          <ListFilter size={14} className="text-orange-400" />
          {filtered.length} project{filtered.length !== 1 ? "s" : ""} matching
        </span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
      </button>

      <div
        className="grid gap-4 overflow-hidden transition-all duration-500 md:grid-cols-2"
        style={{ maxHeight: expanded ? 4000 : 0, opacity: expanded ? 1 : 0 }}
      >
        {filtered.map((p) => (
          <ExplorerCard key={p.id} project={p} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-2 rounded-xl border border-dashed border-zinc-800 p-8 text-center text-sm text-zinc-500">
            No projects match that filter — try a different domain or search term.
          </div>
        )}
      </div>
    </section>
  );
}

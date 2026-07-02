import { KPIS } from "../../data/projects";
import { SectionLabel } from "../common/SectionLabel";
import { KPICard } from "./KPICard";

export function KPISection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionLabel>Track record</SectionLabel>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {KPIS.map((k) => (
          <KPICard key={k.label} kpi={k} />
        ))}
      </div>
    </section>
  );
}

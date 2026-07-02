import { useInView } from "../../hooks/useInView";
import { useCountUp } from "../../hooks/useCountUp";
import { Icon } from "../common/Icon";

export function KPICard({ kpi }) {
  const [ref, inView] = useInView();
  const val = useCountUp(kpi.value, 1400, inView);
  const display = kpi.value % 1 !== 0 ? val.toFixed(2) : Math.round(val);

  return (
    <div
      ref={ref}
      className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 transition-all duration-300 hover:border-orange-500/30 hover:bg-zinc-900/70"
    >
      <Icon name={kpi.icon} size={18} className="mb-4 text-orange-400/80" />
      <div className="flex items-baseline gap-0.5">
        {kpi.prefix && <span className="text-2xl font-semibold text-zinc-100">{kpi.prefix}</span>}
        <span className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">{display}</span>
        <span className="text-2xl font-semibold text-zinc-100">{kpi.suffix}</span>
      </div>
      <p className="mt-2 text-sm leading-snug text-zinc-500">{kpi.label}</p>
      {kpi.note && (
        <p className="mt-1 text-zinc-600" style={{ fontSize: "11px", fontFamily: "'JetBrains Mono', monospace" }}>
          {kpi.note}
        </p>
      )}
    </div>
  );
}

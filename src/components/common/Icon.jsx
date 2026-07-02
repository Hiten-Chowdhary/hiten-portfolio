import { BarChart3, Workflow, Sparkles, Cpu, Layers, Radio, Database, TrendingUp, Gauge } from "lucide-react";

const ICONS = { BarChart3, Workflow, Sparkles, Cpu, Layers, Radio, Database, TrendingUp, Gauge };

/** Renders a lucide-react icon by string name, falling back to Sparkles. */
export function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || Sparkles;
  return <Cmp {...props} />;
}

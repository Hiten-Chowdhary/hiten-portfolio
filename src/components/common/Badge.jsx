export function Badge({ children, tone = "default", delay = 0 }) {
  const tones = {
    default: "bg-zinc-900 text-zinc-400 border-zinc-800",
    accent: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-500/40 hover:text-orange-300 ${tones[tone]}`}
      style={{
        fontSize: "11px",
        fontFamily: "'JetBrains Mono', monospace",
        animation: `fadeUp 0.4s ease ${delay}s backwards`,
      }}
    >
      {children}
    </span>
  );
}

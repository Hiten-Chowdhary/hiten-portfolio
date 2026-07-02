export function StatusDot({ status }) {
  const live = status === "live";
  return (
    <span
      className="inline-flex items-center gap-1.5 text-zinc-500"
      style={{ fontSize: "11px", fontFamily: "'JetBrains Mono', monospace" }}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-400" : "bg-zinc-600"}`}
        style={live ? { boxShadow: "0 0 6px rgba(52,211,153,0.8)" } : {}}
      />
      {status}
    </span>
  );
}

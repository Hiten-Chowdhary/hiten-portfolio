export function SectionLabel({ children }) {
  return (
    <div
      className="mb-4 uppercase text-orange-400/80"
      style={{ fontSize: "12px", letterSpacing: "0.18em", fontFamily: "'JetBrains Mono', monospace" }}
    >
      {children}
    </div>
  );
}

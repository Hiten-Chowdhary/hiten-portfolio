export function FloatingCard({ className, delay, children }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-2xl border border-zinc-800 bg-zinc-900/70 p-3 shadow-2xl backdrop-blur-md ${className}`}
      style={{ animation: `float 6s ease-in-out ${delay}s infinite` }}
    >
      {children}
    </div>
  );
}

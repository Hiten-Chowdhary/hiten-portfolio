import { X } from "lucide-react";

export function ImageLightbox({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-6 py-10"
      style={{ zIndex: 70 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm" />
      <button onClick={onClose} className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-100">
        <X size={22} />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-full max-w-full rounded-xl border border-zinc-800 object-contain shadow-2xl"
        style={{ animation: "fadeUp 0.2s ease" }}
      />
    </div>
  );
}

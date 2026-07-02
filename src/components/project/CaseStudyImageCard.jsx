import { ArrowUpRight } from "lucide-react";

export function CaseStudyImageCard({ label, caption, src, onExpand }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30">
      <button onClick={onExpand} className="group block w-full overflow-hidden border-b border-zinc-800 bg-zinc-950">
        <img
          src={src}
          alt={label}
          className="preview-zoom-103 w-full object-cover object-top transition-transform duration-500"
          style={{ maxHeight: 320 }}
        />
      </button>
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-sm font-medium text-zinc-200">{label}</p>
          <p className="text-xs text-zinc-500">{caption}</p>
        </div>
        <button onClick={onExpand} className="text-zinc-600 hover:text-orange-400">
          <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
}

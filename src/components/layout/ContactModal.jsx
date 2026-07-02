import { X, Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../../data/projects";

export function ContactModal({ open, onClose }) {
  if (!open) return null;

  const items = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    {
      icon: Phone,
      label: "WhatsApp",
      value: PROFILE.phone,
      href: `https://wa.me/${PROFILE.phone.replace(/[^0-9]/g, "")}`,
    },
    { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: PROFILE.linkedin },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center px-6" style={{ zIndex: 60 }}>
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl"
        style={{ animation: "fadeUp 0.25s ease" }}
      >
        <button onClick={onClose} className="absolute right-4 top-4 text-zinc-500 hover:text-zinc-200">
          <X size={18} />
        </button>
        <h3 className="text-lg font-medium text-zinc-100">Get in touch</h3>
        <p className="mt-1 text-sm text-zinc-500">Pick whichever's easiest.</p>
        <div className="mt-5 space-y-2">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/60 p-3 transition-colors hover:border-orange-500/40 hover:bg-zinc-950"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                <it.icon size={16} />
              </span>
              <span>
                <span className="block text-sm text-zinc-200">{it.label}</span>
                <span className="block text-xs text-zinc-500">{it.value}</span>
              </span>
              <ArrowUpRight size={14} className="ml-auto text-zinc-600" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

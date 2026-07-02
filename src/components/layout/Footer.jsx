import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { PROFILE } from "../../data/projects";

export function Footer({ onContact }) {
  return (
    <footer className="border-t border-zinc-900 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <h3 className="text-xl font-medium text-zinc-200">Hiring, or just want to compare notes on dashboards?</h3>
        <button
          onClick={onContact}
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-zinc-950"
        >
          Get in touch <ArrowRight size={14} />
        </button>
        <div className="mt-6 flex items-center gap-4 text-zinc-600">
          <a href={`mailto:${PROFILE.email}`} className="hover:text-zinc-300">
            <Mail size={16} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-zinc-300">
            <Linkedin size={16} />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-zinc-300">
            <Github size={16} />
          </a>
        </div>
        <p className="mt-4 text-xs text-zinc-700">© 2026 {PROFILE.name}.</p>
      </div>
    </footer>
  );
}

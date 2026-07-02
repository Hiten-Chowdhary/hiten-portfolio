import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { StatusDot } from "../common/StatusDot";
import { Badge } from "../common/Badge";
import { LivePreview } from "./LivePreview";

export function ProjectCard({ project }) {
  return (
    <div className="card-hover-glow group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30">
      <LivePreview project={project} />
      <div className="mt-4 flex items-start justify-between gap-2">
        <h3 className="text-lg font-medium leading-snug text-zinc-100">{project.title}</h3>
        <StatusDot status={project.status} />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500 line-clamp-2">{project.oneLiner}</p>
      <p className="mt-3 text-xs leading-relaxed text-zinc-600 line-clamp-2">
        <span className="text-zinc-500">Problem — </span>
        {project.problem}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-zinc-600 line-clamp-2">
        <span className="text-orange-400/80">Impact — </span>
        {project.impact}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 3).map((t, i) => (
          <Badge key={t} delay={i * 0.06}>
            {t}
          </Badge>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4 border-t border-zinc-800 pt-4">
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-1.5 text-sm text-zinc-200 transition-colors hover:text-orange-400"
        >
          View case study <ArrowRight size={14} />
        </Link>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-200"
          >
            Live <ExternalLink size={12} />
          </a>
        )}
      </div>
    </div>
  );
}

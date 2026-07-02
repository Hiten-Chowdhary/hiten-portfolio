import { Link } from "react-router-dom";
import { ChevronRight, ExternalLink } from "lucide-react";
import { StatusDot } from "../common/StatusDot";
import { Badge } from "../common/Badge";
import { LivePreview } from "./LivePreview";

export function ExplorerCard({ project }) {
  return (
    <div className="group flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/20 p-4 transition-all hover:border-zinc-700">
      <div className="w-28 shrink-0">
        <LivePreview project={project} compact />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-medium text-zinc-200">{project.title}</h4>
          <StatusDot status={project.status} />
        </div>
        <p className="mt-1 text-xs leading-relaxed text-zinc-500">{project.oneLiner}</p>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {project.platform.map((p) => (
            <Badge key={p} tone="accent">
              {p}
            </Badge>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-4">
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-1 text-xs text-zinc-300 hover:text-orange-400"
          >
            View dashboard <ChevronRight size={12} />
          </Link>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-zinc-600 hover:text-zinc-300"
            >
              Open live <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

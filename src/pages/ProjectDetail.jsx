import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, GitBranch, Sparkles } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { Badge } from "../components/common/Badge";
import { StatusDot } from "../components/common/StatusDot";
import { LivePreview } from "../components/project/LivePreview";
import { N8nCaseStudyBody } from "../components/project/N8nCaseStudyBody";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [id]);

  if (!project) {
    return (
      <div className="mx-auto max-w-2xl px-6 pb-24 pt-40 text-center">
        <h1 className="text-2xl font-semibold text-zinc-100">Project not found</h1>
        <p className="mt-3 text-sm text-zinc-500">
          That project doesn't exist, or the link may be out of date.
        </p>
        <Link
          to="/work"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-zinc-300 hover:text-orange-400"
        >
          <ArrowLeft size={15} /> Back to work
        </Link>
      </div>
    );
  }

  const related = PROJECTS.filter(
    (p) => p.id !== project.id && p.domain.some((d) => project.domain.includes(d))
  ).slice(0, 3);

  const idx = PROJECTS.findIndex((p) => p.id === project.id);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200"
      >
        <ArrowLeft size={15} /> Back to work
      </button>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        {project.domain.map((d) => (
          <Badge key={d} tone="accent">
            {d}
          </Badge>
        ))}
        <StatusDot status={project.status} />
      </div>
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">{project.title}</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-400">{project.oneLiner}</p>

      {project.caseStudyLayout === "n8n" ? (
        <N8nCaseStudyBody project={project} />
      ) : (
        <>
          <div className="mt-8 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6">
            <div
              className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wide text-orange-400"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Sparkles size={13} /> Business impact
            </div>
            <p className="text-base leading-relaxed text-zinc-200">{project.impact}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="mb-2 text-sm font-medium text-zinc-300">Business problem</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{project.problem}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="mb-2 text-sm font-medium text-zinc-300">Solution</h3>
              <p className="text-sm leading-relaxed text-zinc-500">{project.process}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-sm font-medium text-zinc-300">Dashboard preview</h3>
            <LivePreview project={project} />
            <p className="mt-2 text-zinc-600" style={{ fontSize: "11px" }}>
              {project.link
                ? "Live thumbnail of the actual dashboard — click to open it directly."
                : "Real dashboard preview will be displayed here."}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-sm font-medium text-zinc-300">Key metrics</h3>
            <div className="flex flex-wrap gap-2">
              <Badge tone="accent">{project.domain.join(" · ")}</Badge>
              <Badge>{project.platform.join(" · ")}</Badge>
              <Badge>{project.status}</Badge>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h3 className="mb-3 flex items-center gap-1.5 text-sm font-medium text-zinc-300">
              <GitBranch size={14} className="text-orange-400" /> Architecture
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {project.architecture}
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h3 className="mb-2 text-sm font-medium text-zinc-300">Lessons learned</h3>
            <p className="text-sm leading-relaxed text-zinc-500">{project.lessons}</p>
          </div>
        </>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="hover-scale-102 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-zinc-950 transition-transform"
          >
            Open live dashboard <ExternalLink size={15} />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-2.5 text-sm text-zinc-500">
            Automated workflow — screenshots above
          </span>
        )}
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h3
            className="mb-4 text-sm uppercase tracking-wide text-zinc-500"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Related projects
          </h3>
          <div className="grid gap-3 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/project/${r.id}`}
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-3 text-left transition-colors hover:border-orange-500/30"
              >
                <LivePreview project={r} compact linkable={false} />
                <p className="mt-2 text-sm font-medium text-zinc-200">{r.title}</p>
                <p className="mt-1 text-xs text-zinc-500 line-clamp-2">{r.oneLiner}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12 flex items-center justify-between border-t border-zinc-800 pt-6">
        <Link to={`/project/${prev.id}`} className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200">
          <ArrowLeft size={14} /> {prev.title}
        </Link>
        <Link to={`/project/${next.id}`} className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-200">
          {next.title} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

import { useState, useRef } from "react";
import { ExternalLink, Layers } from "lucide-react";
import { IMAGES } from "../../data/projects";

/**
 * Real dashboard previews, no synthetic mockups.
 * - If a screenshot asset exists, show it directly (strongest case — an
 *   actual capture of the actual tool, immune to X-Frame-Options blocks).
 * - Else if a live public link exists, embed it as a scaled iframe
 *   thumbnail. Some hosts set X-Frame-Options and will refuse to render
 *   inside an iframe — that's a host-side security header outside this
 *   app's control, so the card always keeps a visible "Open live" link.
 * - Else: an honest structural skeleton, never a fabricated chart
 *   standing in for real work.
 */
export function LivePreview({ project, compact, linkable = true }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const wrapRef = useRef(null);
  const h = compact ? "h-28" : "h-40";

  function handleMove(e) {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -4, y: px * 4 });
  }
  function handleEnter() {
    setHovered(true);
  }
  function handleLeave() {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }

  if (project.screenshot && IMAGES[project.screenshot]) {
    const caption = project.caseStudyLayout === "n8n" ? "Real workflow screenshot" : "Real dashboard screenshot";
    const Wrapper = project.link && linkable ? "a" : "div";
    const wrapperProps =
      project.link && linkable ? { href: project.link, target: "_blank", rel: "noreferrer" } : {};
    return (
      <Wrapper
        {...wrapperProps}
        ref={wrapRef}
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`relative block ${h} w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition-colors duration-300`}
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.2s ease-out, border-color 0.2s ease-out",
          borderColor: hovered ? "rgba(251,146,60,0.35)" : undefined,
          boxShadow: hovered ? "0 8px 24px -8px rgba(251,146,60,0.25)" : undefined,
          cursor: project.link ? "pointer" : "default",
        }}
      >
        <img
          src={IMAGES[project.screenshot]}
          alt={`${project.title} — actual dashboard screenshot`}
          className="h-full w-full object-cover object-top transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-zinc-950/90 to-transparent px-2.5 py-1.5 text-zinc-400"
          style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span>{caption}</span>
          {project.link && linkable && (
            <span
              className="flex items-center gap-1 text-zinc-300 transition-opacity duration-300"
              style={{ opacity: hovered ? 1 : 0 }}
            >
              Open <ExternalLink size={10} />
            </span>
          )}
        </div>
      </Wrapper>
    );
  }

  if (!project.link) {
    return (
      <div
        className={`relative flex ${h} w-full flex-col justify-between overflow-hidden rounded-xl border border-dashed border-zinc-800 bg-zinc-950/60 p-3`}
      >
        <div className="flex gap-1.5">
          <div className="h-3 w-10 rounded bg-zinc-800/80" />
          <div className="h-3 w-10 rounded bg-zinc-800/80" />
          <div className="ml-auto h-3 w-6 rounded bg-zinc-800/80" />
        </div>
        <div className="flex items-end gap-1.5">
          {[40, 65, 50, 80, 60].map((hh, i) => (
            <div key={i} className="w-full rounded-sm bg-zinc-800/60" style={{ height: `${hh * 0.4}px` }} />
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-zinc-600" style={{ fontSize: "10px" }}>
          <Layers size={11} className="text-zinc-700" />
          Not publicly hosted — layout shown, no live data
        </div>
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`relative ${h} w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition-colors duration-300`}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.2s ease-out, border-color 0.2s ease-out",
        borderColor: hovered ? "rgba(251,146,60,0.35)" : undefined,
        boxShadow: hovered ? "0 8px 24px -8px rgba(251,146,60,0.25)" : undefined,
        cursor: "pointer",
      }}
    >
      <iframe
        src={project.link}
        loading="lazy"
        title={project.title}
        tabIndex={-1}
        className="pointer-events-none absolute left-0 top-0 origin-top-left transition-transform duration-500"
        style={{ width: "400%", height: "400%", transform: hovered ? "scale(0.2625)" : "scale(0.25)", border: 0 }}
      />
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-zinc-950/85 via-transparent to-transparent px-2.5 py-1.5 transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <span className="text-zinc-400" style={{ fontSize: "10px", fontFamily: "'JetBrains Mono', monospace" }}>
          {project.platform[0]}
        </span>
        <span
          className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-1 font-medium text-zinc-900"
          style={{ fontSize: "10px" }}
        >
          Open live <ExternalLink size={10} />
        </span>
      </a>
    </div>
  );
}

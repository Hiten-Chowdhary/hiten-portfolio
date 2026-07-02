import { useState } from "react";
import { AlertTriangle, GitBranch, Sparkles } from "lucide-react";
import { IMAGES } from "../../data/projects";
import { SectionLabel } from "../common/SectionLabel";
import { CaseStudyImageCard } from "./CaseStudyImageCard";
import { ImageLightbox } from "./ImageLightbox";

export function N8nCaseStudyBody({ project }) {
  const [lightbox, setLightbox] = useState(null);

  const steps = [
    { label: "Problem", icon: AlertTriangle, body: project.problem },
    { label: "Workflow architecture", icon: GitBranch, body: project.architecture },
  ];

  return (
    <div className="mt-8 space-y-10">
      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((s) => (
          <div key={s.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <h3 className="mb-2 flex items-center gap-1.5 text-sm font-medium text-zinc-300">
              <s.icon size={14} className="text-orange-400" /> {s.label}
            </h3>
            <p
              className="text-sm leading-relaxed text-zinc-500"
              style={s.label === "Workflow architecture" ? { fontFamily: "'JetBrains Mono', monospace" } : {}}
            >
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <div>
        <SectionLabel>The actual build — three real artifacts</SectionLabel>
        <div className="grid gap-5 md:grid-cols-3">
          <CaseStudyImageCard
            label="Workflow overview"
            caption="Both n8n flows, end to end"
            src={IMAGES.workflow}
            onExpand={() => setLightbox({ src: IMAGES.workflow, alt: "n8n workflow overview" })}
          />
          <CaseStudyImageCard
            label="Agent experience"
            caption="What the field agent receives on WhatsApp"
            src={IMAGES.agent}
            onExpand={() => setLightbox({ src: IMAGES.agent, alt: "Agent WhatsApp view" })}
          />
          <CaseStudyImageCard
            label="Leadership view"
            caption="The auto-generated chart leadership sees (agent names blurred for privacy)"
            src={IMAGES.leadership}
            onExpand={() => setLightbox({ src: IMAGES.leadership, alt: "Leadership WhatsApp summary" })}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6">
        <div
          className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wide text-orange-400"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <Sparkles size={13} /> Business impact
        </div>
        <p className="text-base leading-relaxed text-zinc-200">{project.impact}</p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
        <h3 className="mb-2 text-sm font-medium text-zinc-300">Lessons learned</h3>
        <p className="text-sm leading-relaxed text-zinc-500">{project.lessons}</p>
      </div>

      <ImageLightbox src={lightbox?.src} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </div>
  );
}

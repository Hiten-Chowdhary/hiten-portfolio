import { CheckCircle2, ChevronDown, Download } from "lucide-react";
import { PROFILE, TIMELINE, SKILL_GROUPS } from "../data/projects";
import { SectionLabel } from "../components/common/SectionLabel";
import { Badge } from "../components/common/Badge";
import { Icon } from "../components/common/Icon";
import profilePhoto from "../assets/hiten_photo.jpg";

export default function About({ onContact }) {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <SectionLabel>About</SectionLabel>
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="flex flex-col items-center gap-1.5">
          <img
            src={profilePhoto}
            alt={PROFILE.name}
            className="h-24 w-24 shrink-0 rounded-2xl border border-zinc-800 object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">{PROFILE.name}</h1>
          <p className="mt-1 text-zinc-400">
            {PROFILE.role} · {PROFILE.company}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
            Electronics & Telecommunication engineer turned product-minded analyst. I came up through
            hardware and field testing, moved into SQL/Metabase/Hex dashboarding, and now spend most of
            my time on the line where operations data, automation, and product decisions meet — translating
            messy B2B operational reality (SIM billing, fleet telemetry, vendor workflows) into systems that
            non-technical stakeholders can act on without help.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={onContact}
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-zinc-950"
            >
              Get in touch
            </button>
            <a
              href="/resume.pdf"
              download="Hiten_Chowdhary_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-orange-500/40 hover:text-orange-300"
            >
              <Download size={14} /> Download résumé
            </a>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <h2 className="mb-8 text-lg font-medium text-zinc-200">From Hardware to Product</h2>
        <div>
          {TIMELINE.map((t, i) => (
            <div key={t.stage} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}
                >
                  {i + 1}
                </span>
                {i < TIMELINE.length - 1 && (
                  <div className="my-1 flex flex-1 flex-col items-center">
                    <span className="w-px flex-1 bg-zinc-800" />
                    <ChevronDown size={12} className="my-0.5 text-zinc-700" />
                    <span className="w-px flex-1 bg-zinc-800" />
                  </div>
                )}
              </div>
              <div className={i < TIMELINE.length - 1 ? "pb-8 pt-1" : "pb-1 pt-1"}>
                <h3 className="text-base font-medium text-zinc-100">{t.stage}</h3>
                <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-zinc-500">{t.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-16">
        <h2 className="mb-4 text-lg font-medium text-zinc-200">Experience</h2>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-medium text-zinc-100">{PROFILE.role}</h3>
              <p className="text-sm text-zinc-500">
                {PROFILE.company} · {PROFILE.location}
              </p>
            </div>
            <span className="shrink-0 text-xs text-zinc-600" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Jul 2025 – Present
            </span>
          </div>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-500">
            <li className="flex gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-orange-400/70" /> Built product/operational
              reporting systems (PostgreSQL, Metabase, Hex), uncovering thousands of unmapped billed SIMs and
              cutting monthly SIM cost 25–30% (~₹1.5–2L/month).
            </li>
            <li className="flex gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-orange-400/70" /> Led on-site technical
              integrations for major B2B clients, turning user feedback into actionable technical requirements.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-orange-400/70" /> Ran product validation &
              workflow testing, including a secure diagnostic interface for the Carnot Dealer App.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-orange-400/70" /> Supported GTM execution and
              rollout monitoring for a Solar GPS Tracker product.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-orange-400/70" /> Evaluated alternate hardware
              vendors offering equivalent specifications at a lower price, reducing manufacturing costs on select
              devices.
            </li>
            <li className="flex gap-2">
              <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-orange-400/70" /> Designed automated
              product-ops workflows (n8n, Apps Script, APIs), removing manual reporting for cross-functional
              leaders.
            </li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h2 className="mb-6 text-lg font-medium text-zinc-200">Capabilities</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g) => (
            <div
              key={g.label}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 transition-colors hover:border-orange-500/30"
            >
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-200">
                <Icon name={g.icon} size={15} className="text-orange-400" /> {g.label}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <Badge key={it}>{it}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-16">
        <h2 className="mb-4 text-lg font-medium text-zinc-200">Education</h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
            <p className="text-sm font-medium text-zinc-200">B.E., Electronics & Telecommunication</p>
            <p className="text-xs text-zinc-500">Don Bosco Institute of Technology, Mumbai · 2022–2025</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
            <p className="text-sm font-medium text-zinc-200">Diploma, Electronics & Telecommunication</p>
            <p className="text-xs text-zinc-500">Thakur Polytechnic, Mumbai · 2019–2022</p>
          </div>
        </div>

        <h3
          className="mb-4 mt-8 text-sm font-medium uppercase tracking-wide text-zinc-500"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Academic projects
        </h3>
        <div className="space-y-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-medium text-zinc-200">Secure Locker Access System</p>
              <span className="text-xs text-zinc-600" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Python · OpenCV · Arduino
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Built a biometric locker combining facial recognition and fingerprint authentication. Trained
              facial datasets with OpenCV Haar Cascades, integrated Arduino-based fingerprint verification, and
              implemented dual-factor authentication to control an electronic locking mechanism — hands-on work
              in computer vision, embedded systems, and hardware-software integration.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-medium text-zinc-200">Tilt Angle Measurement System</p>
              <span className="text-xs text-zinc-600" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Embedded C
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Designed a high-precision tilt measurement solution for hardware validation and data acquisition.
              Built the embedded firmware, calibrated sensors for reliable readings, and delivered structured
              telemetry for downstream analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
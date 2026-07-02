import { SectionLabel } from "../components/common/SectionLabel";
import { FeaturedWork } from "../components/project/FeaturedWork";
import { ProjectExplorer } from "../components/project/ProjectExplorer";

export default function Work() {
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <SectionLabel>Work</SectionLabel>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">Featured case studies</h1>
        <p className="mt-2 max-w-xl text-sm text-zinc-500">
          Five projects with the clearest business impact, then everything else in the explorer below.
        </p>
      </div>
      <FeaturedWork />
      <ProjectExplorer />
    </main>
  );
}

import { FEATURED } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedWork() {
  return (<section className="mx-auto max-w-6xl px-6 pb-16 pt-8 md:pb-20 md:pt-10">
    
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
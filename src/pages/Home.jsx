import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Hero } from "../components/home/Hero";
import { KPISection } from "../components/home/KPISection";
import { FeaturedWork } from "../components/project/FeaturedWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <KPISection />
      <FeaturedWork />
      <div className="mx-auto max-w-6xl px-6 pb-4">
        <Link
          to="/work"
          className="mx-auto flex w-fit items-center gap-2 text-sm text-zinc-400 hover:text-orange-400"
        >
          See all 11 projects <ArrowRight size={14} />
        </Link>
      </div>
    </main>
  );
}

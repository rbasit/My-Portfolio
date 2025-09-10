import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Rida Basit",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="section-title">Projects</h1>
      <p className="text-gray-700">A curated set of projects across mobile, backend, and AI/ML.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}

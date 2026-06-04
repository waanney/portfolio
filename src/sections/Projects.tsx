"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="section-content">
        <SectionTitle title={t("projects.title")} subtitle={t("projects.subtitle")} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

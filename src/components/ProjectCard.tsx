"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { language, t } = useLanguage();
  const desc = project.description[language] || project.description.en;

  return (
    <div className="glass-card" style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1rem", height: "100%" }}>
      {/* Image placeholder */}
      <div style={{
        height: "160px",
        borderRadius: "12px",
        background: "var(--gradient-accent)",
        opacity: 0.15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3rem",
      }}>
        🚀
      </div>

      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)" }}>
        {project.title}
      </h3>

      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, flex: 1 }}>
        {desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {project.tech.map((tech) => (
          <span key={tech} style={{
            padding: "0.25rem 0.6rem",
            borderRadius: "6px",
            fontSize: "0.75rem",
            fontWeight: 500,
            background: "var(--bg-tertiary)",
            color: "var(--text-secondary)",
          }}>
            {tech}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "10px",
              fontSize: "0.85rem",
              fontWeight: 500,
              background: "var(--bg-tertiary)",
              color: "var(--text-primary)",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--bg-tertiary)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
            }}
          >
            ⌨ {t("projects.viewCode")}
          </a>
        )}
        {project.demo && project.demo !== "#" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "10px",
              fontSize: "0.85rem",
              fontWeight: 500,
              background: "var(--accent)",
              color: "#fff",
              transition: "opacity 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            ▶ {t("projects.liveDemo")}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

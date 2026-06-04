"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { ResearchPaper } from "@/data/portfolio";

interface ResearchCardProps {
  paper: ResearchPaper;
}

const ResearchCard = ({ paper }: ResearchCardProps) => {
  const { language, t } = useLanguage();
  const abstract = paper.abstract[language] || paper.abstract.en;

  return (
    <div className="glass-card" style={{ padding: "1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.4 }}>
        📄 {paper.title}
      </h3>

      <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontStyle: "italic" }}>
        {paper.authors} — {paper.venue}
      </div>

      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
        {abstract}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {paper.tags.map((tag) => (
          <span key={tag} style={{
            padding: "0.2rem 0.6rem",
            borderRadius: "6px",
            fontSize: "0.75rem",
            fontWeight: 500,
            background: "var(--accent)",
            color: "#fff",
            opacity: 0.8,
          }}>
            {tag}
          </span>
        ))}
      </div>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "0.5rem",
        paddingTop: "0.75rem",
        borderTop: "1px solid var(--card-border)",
      }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          📊 {paper.citations} {t("research.citations")}
        </span>
        {paper.link && paper.link !== "#" && (
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "0.4rem 1rem",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: 500,
              background: "var(--accent)",
              color: "#fff",
              transition: "opacity 0.3s ease",
            }}
          >
            {t("research.readMore")} →
          </a>
        )}
      </div>
    </div>
  );
};

export default ResearchCard;

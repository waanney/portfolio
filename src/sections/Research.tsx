"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/SectionTitle";
import ResearchCard from "@/components/ResearchCard";
import { research } from "@/data/portfolio";

const Research = () => {
  const { t } = useLanguage();

  return (
    <section id="research" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-content">
        <SectionTitle title={t("research.title")} subtitle={t("research.subtitle")} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "1.5rem" }}>
          {research.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;

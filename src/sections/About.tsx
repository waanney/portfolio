"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import { skills } from "@/data/portfolio";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="section-content">
        <SectionTitle title={t("about.title")} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem", alignItems: "start" }}>
          <div className="glass-card" style={{ padding: "2rem" }}>
            <div style={{
              width: "100px", height: "100px", borderRadius: "50%",
              background: "var(--gradient-accent)", display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: "2.5rem",
              marginBottom: "1.5rem", boxShadow: "0 8px 30px var(--shadow-color)",
            }}>
              🐔
            </div>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
              {t("about.bio")}
            </p>
          </div>
          <div className="glass-card" style={{ padding: "2rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.25rem", color: "var(--text-primary)", fontFamily: "'Outfit', sans-serif" }}>
              {t("about.skillsTitle")}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {skills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} color={skill.color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

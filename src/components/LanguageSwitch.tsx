"use client";

import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      id="language-switch"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === "en" ? "Vietnamese" : "English"}`}
      className="glass"
      style={{
        padding: "0.5rem 0.75rem",
        cursor: "pointer",
        fontSize: "0.8rem",
        fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        color: "var(--text-primary)",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: "center",
        gap: "0.3rem",
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.transform = "scale(1.1)";
        (e.target as HTMLElement).style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.transform = "scale(1)";
        (e.target as HTMLElement).style.borderColor = "var(--bg-glass-border)";
      }}
    >
      <span>🌐</span>
      <span>{language === "en" ? "EN" : "VI"}</span>
    </button>
  );
};

export default LanguageSwitch;

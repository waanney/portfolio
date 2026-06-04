"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(30px)";
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transition = "all 0.8s ease";
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
        }
      }, 300);
    }
  }, []);

  return (
    <section
      id="home"
      className="section"
      style={{ background: "transparent", overflow: "hidden" }}
    >
      <div
        ref={titleRef}
        style={{
          maxWidth: "700px",
          zIndex: 2,
          textAlign: "left",
          alignSelf: "flex-start",
          paddingLeft: "5%",
          pointerEvents: "auto",
        }}
      >
        <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "0.5rem", fontWeight: 500 }}>
          {t("hero.greeting")}
        </p>

        <h1 className="gradient-text" style={{
          fontSize: "clamp(3rem, 8vw, 5rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: "1rem",
        }}>
          {t("hero.name")}
        </h1>

        <h2 style={{
          fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
          fontWeight: 600,
          color: "var(--text-primary)",
          marginBottom: "1.5rem",
          fontFamily: "'Outfit', sans-serif",
        }}>
          {t("hero.subtitle")}
        </h2>

        <p style={{
          fontSize: "1.05rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          marginBottom: "2rem",
          maxWidth: "550px",
        }}>
          {t("hero.description")}
        </p>

        <button
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            padding: "0.85rem 2rem",
            borderRadius: "14px",
            border: "none",
            background: "var(--accent)",
            color: "#ffffff",
            fontSize: "1rem",
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px var(--shadow-color)",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "translateY(-2px)";
            (e.target as HTMLElement).style.boxShadow = "0 8px 30px var(--shadow-color)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "translateY(0)";
            (e.target as HTMLElement).style.boxShadow = "0 4px 20px var(--shadow-color)";
          }}
        >
          {t("hero.cta")} →
        </button>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        zIndex: 2,
      }}>
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }}>
          {t("hero.scrollDown")}
        </span>
        <div className="animate-float" style={{ fontSize: "1.2rem", color: "var(--accent)" }}>
          ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;

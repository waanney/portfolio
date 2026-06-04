"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import Link from "next/link";

const navItems = ["home", "about", "research", "projects", "contact", "blog"] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    setMobileOpen(false);
    
    if (item === "blog") {
      router.push("/blog");
      return;
    }

    if (item === "home") {
      if (pathname !== "/") {
        router.push("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (pathname !== "/") {
      // Navigate to home and then scroll
      router.push(`/#${item}`);
    } else {
      const el = document.getElementById(item);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
        background: scrolled ? "var(--navbar-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--bg-glass-border)"
          : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="gradient-text"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1.5rem",
            fontWeight: 800,
            textDecoration: "none",
            background: "var(--gradient-accent)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          waanney
        </Link>

        {/* Desktop Nav */}
        <div
          className="nav-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                padding: "0.5rem 0",
                transition: "color 0.3s ease",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "var(--text-secondary)")
              }
            >
              {t(`nav.${item}` as any)}
            </button>
          ))}
          <div
            style={{ display: "flex", gap: "0.5rem", marginLeft: "0.5rem" }}
          >
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "0.5rem",
          }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--navbar-bg)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--bg-glass-border)",
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-secondary)",
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
                padding: "0.5rem 0",
                textAlign: "left",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {t(`nav.${item}` as any)}
            </button>
          ))}
          <div style={{ display: "flex", gap: "0.5rem", paddingTop: "0.5rem" }}>
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

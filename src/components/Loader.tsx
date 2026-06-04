"use client";

import { useState, useEffect } from "react";

interface LoaderProps {
  onFinished?: () => void;
}

const Loader = ({ onFinished }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            onFinished?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onFinished]);

  if (!visible) return null;

  return (
    <div
      id="loader-screen"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "var(--bg-primary)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        opacity: progress >= 100 ? 0 : 1,
        transition: "opacity 0.5s ease",
      }}
    >
      <div className="animate-float" style={{ fontSize: "4rem" }}>
        🐔
      </div>
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "1.2rem",
          fontWeight: 600,
          color: "var(--text-secondary)",
        }}
      >
        Loading...
      </div>
      <div
        style={{
          width: "200px",
          height: "4px",
          background: "var(--bg-tertiary)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${Math.min(progress, 100)}%`,
            height: "100%",
            background: "var(--gradient-accent)",
            borderRadius: "2px",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;

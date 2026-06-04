"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Research from "@/sections/Research";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

// Dynamic import for 3D scene - no SSR since Three.js needs the browser
const Scene = dynamic(() => import("@/canvas/Scene"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {loading && <Loader onFinished={() => setLoading(false)} />}

        {!loading && (
          <>
            <Navbar />
            <Scene interactive />

            <main style={{ position: "relative", zIndex: 1 }}>
              <Hero />
              <About />
              <Research />
              <Projects />
              <Contact />
            </main>
          </>
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}

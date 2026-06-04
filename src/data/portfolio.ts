export interface Skill {
  name: string;
  category: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: { en: string; vi: string };
  tech: string[];
  github: string;
  demo: string;
}

export interface ResearchPaper {
  id: number;
  title: string;
  authors: string;
  venue: string;
  abstract: { en: string; vi: string };
  citations: number;
  link: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email";
}

export const skills: Skill[] = [
  { name: "React", category: "frontend", color: "#a78bfa" },
  { name: "Next.js", category: "frontend", color: "#f9a8d4" },
  { name: "Three.js", category: "frontend", color: "#67e8f9" },
  { name: "TypeScript", category: "frontend", color: "#86efac" },
  { name: "Python", category: "backend", color: "#fbbf24" },
  { name: "Node.js", category: "backend", color: "#a78bfa" },
  { name: "NixOS", category: "devops", color: "#f9a8d4" },
  { name: "Docker", category: "devops", color: "#67e8f9" },
  { name: "Git", category: "tools", color: "#86efac" },
  { name: "Linux", category: "tools", color: "#fbbf24" },
  { name: "Machine Learning", category: "research", color: "#a78bfa" },
  { name: "Computer Vision", category: "research", color: "#f9a8d4" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "3D Portfolio",
    description: {
      en: "An interactive 3D portfolio website featuring a Minecraft Chicken avatar, built with Next.js & React Three Fiber.",
      vi: "Trang portfolio 3D tương tác với avatar Minecraft Chicken, xây dựng bằng Next.js & React Three Fiber.",
    },
    tech: ["Next.js", "Three.js", "TailwindCSS", "TypeScript"],
    github: "https://github.com/waanney/portfolio",
    demo: "https://waanney.github.io/portfolio/",
  },
  {
    id: 2,
    title: "Project Alpha",
    description: {
      en: "A machine learning project exploring novel approaches to image classification.",
      vi: "Dự án machine learning khám phá các phương pháp mới trong phân loại hình ảnh.",
    },
    tech: ["Python", "PyTorch", "OpenCV"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Project Beta",
    description: {
      en: "A full-stack web application with real-time data processing capabilities.",
      vi: "Ứng dụng web full-stack với khả năng xử lý dữ liệu thời gian thực.",
    },
    tech: ["Node.js", "React", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
];

export const research: ResearchPaper[] = [
  {
    id: 1,
    title: "Research Paper Title",
    authors: "waanney, et al.",
    venue: "Conference / Journal Name, 2025",
    abstract: {
      en: "This paper presents a novel approach to solving a challenging problem in the field of computer science...",
      vi: "Bài báo này trình bày một phương pháp mới để giải quyết vấn đề thách thức trong lĩnh vực khoa học máy tính...",
    },
    citations: 0,
    link: "#",
    tags: ["Machine Learning", "AI"],
  },
  {
    id: 2,
    title: "Another Research Paper",
    authors: "waanney, et al.",
    venue: "Workshop / Symposium, 2024",
    abstract: {
      en: "An exploration of efficient algorithms for large-scale data processing and analysis...",
      vi: "Khám phá các thuật toán hiệu quả cho xử lý và phân tích dữ liệu quy mô lớn...",
    },
    citations: 0,
    link: "#",
    tags: ["Data Science", "Algorithms"],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/waanney", icon: "github" },
  { name: "LinkedIn", url: "#", icon: "linkedin" },
  { name: "Email", url: "mailto:your.email@example.com", icon: "email" },
];

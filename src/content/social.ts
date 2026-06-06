export const social = [
  { url: "mailto:work.buiminhquan@gmail.com", name: "mail" },
  { url: "https://github.com/waanney", name: "github" },
  { url: "https://www.linkedin.com/in/waanney", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
  tags?: string[];
  content: string;
}

export function getPostSlugs() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  return fs.readdirSync(blogDirectory);
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(blogDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || "Untitled",
    date: data.date || "",
    description: data.description || "",
    coverImage: data.coverImage || "",
    tags: data.tags || [],
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

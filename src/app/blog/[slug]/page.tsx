import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | Waanney Blog`,
      description: post.description,
    };
  } catch (error) {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  
  try {
    post = getPostBySlug(slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className="section-content pt-32 pb-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: "var(--accent)" }}
          >
            ← Quay lại Blog
          </Link>
        </div>
        
        <article className="glass-card p-8 md:p-12">
          <header className="mb-10 text-center border-b pb-8" style={{ borderColor: "var(--card-border)" }}>
            <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              {post.title}
            </h1>
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>
              {new Date(post.date).toLocaleDateString("vi-VN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full"
                    style={{ background: "rgba(128, 128, 128, 0.1)", color: "var(--text-primary)" }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          
          <div 
            className="prose prose-lg max-w-none"
            style={{
              '--tw-prose-body': 'var(--text-primary)',
              '--tw-prose-headings': 'var(--text-primary)',
              '--tw-prose-links': 'var(--accent)',
              '--tw-prose-bold': 'var(--text-primary)',
              '--tw-prose-quotes': 'var(--text-secondary)',
              '--tw-prose-quote-borders': 'var(--accent)',
              '--tw-prose-code': 'var(--text-primary)',
              '--tw-prose-pre-code': 'var(--text-primary)',
              '--tw-prose-pre-bg': 'var(--bg-secondary)',
              '--tw-prose-hr': 'var(--card-border)',
            } as React.CSSProperties}
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}

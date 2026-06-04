import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Waanney Portfolio",
  description: "Read my latest thoughts and articles.",
};

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <div className="section-content pt-32 pb-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: "var(--text-primary)" }}>
          Blog
        </h1>
        <p className="text-center mb-12" style={{ color: "var(--text-secondary)" }}>
          Bài viết, ghi chú và chia sẻ từ quá trình học tập & nghiên cứu.
        </p>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="glass-card p-6 transition-transform hover:-translate-y-1 duration-300 cursor-pointer">
                <h2 className="text-2xl font-semibold mb-2" style={{ color: "var(--accent)" }}>
                  {post.title}
                </h2>
                <div className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                  {new Date(post.date).toLocaleDateString("vi-VN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <p style={{ color: "var(--text-secondary)" }}>{post.description}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md"
                        style={{ background: "rgba(128, 128, 128, 0.1)", color: "var(--text-primary)" }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
        
        {posts.length === 0 && (
          <p className="text-center" style={{ color: "var(--text-muted)" }}>
            Chưa có bài viết nào.
          </p>
        )}
      </div>
    </div>
  );
}

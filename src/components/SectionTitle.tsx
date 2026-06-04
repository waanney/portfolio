interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <h2 className="gradient-text" style={{
        fontSize: "clamp(2rem, 5vw, 3rem)",
        fontWeight: 800,
        marginBottom: "0.75rem",
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: "1.1rem",
          color: "var(--text-secondary)",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: 1.6,
        }}>
          {subtitle}
        </p>
      )}
      <div style={{
        width: "60px",
        height: "4px",
        background: "var(--gradient-accent)",
        borderRadius: "2px",
        margin: "1.5rem auto 0",
      }} />
    </div>
  );
};

export default SectionTitle;

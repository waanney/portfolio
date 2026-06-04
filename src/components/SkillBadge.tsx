interface SkillBadgeProps {
  name: string;
  color: string;
}

const SkillBadge = ({ name, color }: SkillBadgeProps) => {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.4rem 0.9rem",
        borderRadius: "20px",
        fontSize: "0.85rem",
        fontWeight: 500,
        background: `${color}18`,
        color: color,
        border: `1px solid ${color}30`,
        transition: "all 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = `${color}30`;
        el.style.transform = "translateY(-2px)";
        el.style.boxShadow = `0 4px 12px ${color}25`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = `${color}18`;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <span
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: color,
          display: "inline-block",
        }}
      />
      {name}
    </span>
  );
};

export default SkillBadge;

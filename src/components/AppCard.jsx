import styles from "./AppCard.module.css";

const COLOR_MAP = {
  cyan:   { bg: "rgba(0,229,255,0.1)",    shadow: "rgba(0,229,255,0.1)" },
  amber:  { bg: "rgba(255,179,0,0.1)",    shadow: "rgba(255,179,0,0.1)" },
  green:  { bg: "rgba(0,230,118,0.1)",    shadow: "rgba(0,230,118,0.1)" },
  violet: { bg: "rgba(124,77,255,0.1)",   shadow: "rgba(124,77,255,0.1)" },
  red:    { bg: "rgba(255,82,82,0.1)",    shadow: "rgba(255,82,82,0.1)" },
};

const BADGE_MAP = {
  prod:    { bg: "rgba(0,230,118,0.12)",   color: "#69f0ae", border: "rgba(0,230,118,0.2)",  label: "Prod" },
  dev:     { bg: "rgba(255,179,0,0.12)",   color: "#ffcc80", border: "rgba(255,179,0,0.2)",  label: "Dev" },
  uat:     { bg: "rgba(124,77,255,0.12)",  color: "#b39ddb", border: "rgba(124,77,255,0.2)", label: "UAT" },
  tool:    { bg: "rgba(0,229,255,0.12)",   color: "#80deea", border: "rgba(0,229,255,0.2)",  label: "Tool" },
  support: { bg: "rgba(255,82,82,0.12)",   color: "#ff8a80", border: "rgba(255,82,82,0.2)",  label: "Support" },
};

export default function AppCard({ app, style }) {
  const col = COLOR_MAP[app.color] || COLOR_MAP.cyan;
  const bdg = BADGE_MAP[app.badge] || BADGE_MAP.tool;

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
      style={style}
    >
      <div className={styles.top}>
        <div
          className={styles.icon}
          style={{ background: col.bg, boxShadow: `0 0 16px ${col.shadow}` }}
        >
          {app.icon}
        </div>
        <span
          className={styles.badge}
          style={{ background: bdg.bg, color: bdg.color, border: `1px solid ${bdg.border}` }}
        >
          {bdg.label}
        </span>
      </div>
      <div className={styles.name}>{app.name}</div>
      <div className={styles.desc}>{app.desc}</div>
      <div className={styles.footer}>
        <span className={styles.host}>{app.host}</span>
        <span className={styles.arrow}>→</span>
      </div>
    </a>
  );
}

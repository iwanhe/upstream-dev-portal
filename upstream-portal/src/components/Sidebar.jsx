import styles from "./Sidebar.module.css";

const NAV_ITEMS = [
  { id: "home",       label: "Overview",         color: "var(--cyan)",   badge: null },
  { id: "webapps",    label: "Web Applications", color: "var(--green)",  badge: "15" },
  { id: "erp",        label: "ERP Environments", color: "var(--violet)", badge: "10" },
  { id: "activities", label: "Activities",       color: "var(--amber)",  badge: null },
];

const EXT_LINKS = [
  { label: "Sharepoint ↗", url: "https://kcsiid.sharepoint.com/sites/PANDAWA" },
  { label: "GitHub ↗",     url: "https://github.com/pandawa-apex" },
];

export default function Sidebar({ activePage, onNav }) {
  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <div className={styles.logoMark}>
          <div className={styles.logoHex}>▲</div>
          <div>
            <div className={styles.logoText}>UPSTREAM</div>
            <div className={styles.logoSub}>DEV PORTAL</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className={styles.navSection}>Navigation</div>
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className={`${styles.navItem} ${activePage === item.id ? styles.active : ""}`}
          onClick={() => onNav(item.id)}
          style={{ "--dot-color": item.color }}
        >
          <span className={styles.navDot} style={{ background: item.color }} />
          <span className={styles.navLabel}>{item.label}</span>
          {item.badge && (
            <span
              className={styles.navBadge}
              style={{
                background: `${item.color}1a`,
                color: item.color,
                border: `1px solid ${item.color}33`,
              }}
            >
              {item.badge}
            </span>
          )}
        </button>
      ))}

      {/* External */}
      <div className={styles.navSection}>External</div>
      {EXT_LINKS.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className={styles.navItem}
        >
          <span className={styles.navDot} style={{ background: "var(--txt3)" }} />
          <span className={styles.navLabel}>{link.label}</span>
        </a>
      ))}

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.statusPill}>
          <span className={styles.pulse} />
          All systems online
        </div>
        <div className={styles.footerMeta}>PANDAWA · KCSI · 2026</div>
      </div>
    </aside>
  );
}

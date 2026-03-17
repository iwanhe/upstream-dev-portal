import { useState } from "react";
import AppCard from "./AppCard";
import { WEB_APPS, ERP_ENTITIES, ACTIVITIES } from "../data";
import styles from "./Pages.module.css";

const FILTERS = [
  { id: "all",     label: "All" },
  { id: "prod",    label: "Production" },
  { id: "dev",     label: "Development" },
  { id: "tool",    label: "Tools" },
  { id: "support", label: "Support" },
];

export function WebAppsPage({ searchQuery }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = WEB_APPS.filter((app) => {
    const matchCat = activeFilter === "all" || app.cat === activeFilter;
    const matchSearch = !searchQuery || app.name.toLowerCase().includes(searchQuery.toLowerCase()) || app.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className={styles.page}>
      <div className={styles.heroSection} style={{ gridTemplateColumns: "1fr" }}>
        <div>
          <div className={styles.heroTag}>Web Applications</div>
          <h1 className={styles.heroTitle} style={{ fontSize: "clamp(20px, 3vw, 28px)" }}>Application Directory</h1>
          <p className={styles.heroDesc} style={{ marginBottom: 0 }}>
            All web-based applications for the Upstream Development team.
          </p>
        </div>
      </div>

      <div className={styles.filterRow}>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`${styles.filterBtn} ${activeFilter === f.id ? styles.filterActive : ""}`}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label}
            {f.id === "all" && <span className={styles.filterCount}>{WEB_APPS.length}</span>}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className={styles.emptyState}>No applications found.</div>
      ) : (
        <div className={styles.appsGrid}>
          {filtered.map((app, i) => (
            <AppCard
              key={app.id}
              app={app}
              style={{ animation: `fadeUp 0.3s ease ${i * 0.04}s both` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── ERP PAGE ──────────────────────────────────────
const IND_STYLES = {
  prod: { background: "var(--green)", boxShadow: "0 0 8px rgba(0,230,118,0.6)" },
  dev:  { background: "var(--amber)" },
  uat:  { background: "var(--violet)" },
};

export function ErpPage() {
  return (
    <div className={styles.page}>
      <div className={styles.heroSection} style={{ gridTemplateColumns: "1fr" }}>
        <div>
          <div className={styles.heroTag}>ERP Applications</div>
          <h1 className={styles.heroTitle} style={{ fontSize: "clamp(20px, 3vw, 28px)" }}>Oracle EBS Environments</h1>
          <p className={styles.heroDesc} style={{ marginBottom: 0 }}>
            All Oracle E-Business Suite instances across entities and deployment stages.
          </p>
        </div>
      </div>

      <div className={styles.legendRow}>
        {[
          { type: "prod", label: "Production",          style: IND_STYLES.prod },
          { type: "dev",  label: "Development",         style: IND_STYLES.dev },
          { type: "uat",  label: "UAT / Staging",       style: IND_STYLES.uat },
        ].map((l) => (
          <div key={l.type} className={styles.legendItem}>
            <span className={styles.erpDot} style={l.style} />
            {l.label}
          </div>
        ))}
      </div>

      {ERP_ENTITIES.map((entity) => (
        <div key={entity.name} className={styles.erpSection}>
          <div className={styles.erpHeader}>
            <span className={styles.erpEntity}>{entity.name}</span>
            <div className={styles.erpDivider} />
          </div>
          <div className={styles.erpGrid}>
            {entity.envs.map((env) => (
              <a
                key={env.name}
                href={env.url}
                target="_blank"
                rel="noreferrer"
                className={styles.erpCard}
              >
                <span className={styles.erpDot} style={IND_STYLES[env.type]} />
                <div className={styles.erpInfo}>
                  <div className={styles.erpName}>{env.name}</div>
                  <div className={styles.erpEnv}>{env.env}</div>
                </div>
                <span className={styles.erpChev}>›</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── ACTIVITIES PAGE ──────────────────────────────
const ACT_COLORS = {
  cyan:   "rgba(0,229,255,0.1)",
  violet: "rgba(124,77,255,0.1)",
  green:  "rgba(0,230,118,0.1)",
  amber:  "rgba(255,179,0,0.1)",
};

export function ActivitiesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.heroSection} style={{ gridTemplateColumns: "1fr" }}>
        <div>
          <div className={styles.heroTag}>Team Activities</div>
          <h1 className={styles.heroTitle} style={{ fontSize: "clamp(20px, 3vw, 28px)" }}>Our Activities</h1>
          <p className={styles.heroDesc} style={{ marginBottom: 0 }}>
            Latest milestones, commits, and team updates from PANDAWA.
          </p>
        </div>
      </div>

      <div className={styles.terminal}>
        <div className={styles.termBar}>
          <span className={styles.termDot} style={{ background: "#ff5f56" }} />
          <span className={styles.termDot} style={{ background: "#ffbd2e" }} />
          <span className={styles.termDot} style={{ background: "#27c93f" }} />
          <span className={styles.termTitle}>git log --oneline --graph — pandawa-apex/main</span>
        </div>
        <div className={styles.termBody}>
          {ACTIVITIES.map((a) => (
            <div key={a.hash}>
              <span style={{ color: "var(--violet)" }}>*</span>{" "}
              <span style={{ color: "var(--amber)" }}>{a.hash}</span>{" "}
              <span className={styles.tC}>{a.title}</span>
            </div>
          ))}
          <br />
          <div className={styles.tCmt}># Full history → github.com/pandawa-apex</div>
          <br />
          <div>
            <span className={styles.tP}>pandawa@kcsi</span>:
            <span style={{ color: "var(--violet)" }}>~</span>$ <span className={styles.tC}>_</span>
          </div>
        </div>
      </div>

      <div className={styles.secHdr}>
        <h2>Recent Activity</h2>
        <div className={styles.secLine} />
      </div>

      <div className={styles.activityList}>
        {ACTIVITIES.map((a, i) => (
          <div
            key={a.hash}
            className={styles.actItem}
            style={{ animation: `fadeUp 0.3s ease ${i * 0.06}s both` }}
          >
            <div className={styles.actIcon} style={{ background: ACT_COLORS[a.color] }}>
              {a.icon}
            </div>
            <div className={styles.actBody}>
              <div className={styles.actTitle}>{a.title}</div>
              <div className={styles.actMeta}>
                {a.meta} · <span className={styles.actHash}>{a.hash}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

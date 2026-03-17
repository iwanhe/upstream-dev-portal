import AppCard from "./AppCard";
import { WEB_APPS } from "../data";
import styles from "./Pages.module.css";

const FEATURED_IDS = ["frits", "it-hub", "permadi", "submit-ticket"];
const FEATURED = WEB_APPS.filter((a) => FEATURED_IDS.includes(a.id));

export function HomePage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.heroSection}>
        <div>
          <div className={styles.heroTag}>PANDAWA · Nojorono Group · Kudus</div>
          <h1 className={styles.heroTitle}>
            Application Development<br />Upstream Portal
          </h1>
          <p className={styles.heroDesc}>
            Central hub for all IT resources, applications, and development assets.
            Access web apps, ERP environments, documentation, and internal tools
            from one unified workspace.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.btnGhost} href="https://github.com/pandawa-apex" target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub Repository
            </a>
            <a className={styles.btnGhost} href="https://bit.ly/ntisupport" target="_blank" rel="noreferrer">
              <InfoIcon /> IT Support
            </a>
            <a className={styles.btnGhost} href="https://kcsiid.sharepoint.com/sites/PANDAWA" target="_blank" rel="noreferrer">
              <SharepointIcon /> Sharepoint
            </a>
          </div>
        </div>

        <div className={styles.statsCluster}>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>Web Applications</div>
            <div className={styles.statNum} style={{ color: "var(--cyan)" }}>
              15 <span className={styles.statTag}>apps</span>
            </div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>ERP Environments</div>
            <div className={styles.statNum} style={{ color: "var(--violet)" }}>
              10 <span className={styles.statTag}>envs</span>
            </div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>System Health</div>
            <div className={styles.statusLine}>
              <span className={styles.pulse} />
              Operational
            </div>
          </div>
        </div>
      </div>

      {/* Welcome card */}
      <div className={styles.welcomeCard}>
        <h3>👋 Welcome to the Upstream Dev Portal</h3>
        <p>
          Hello, and welcome to the Application Development (Upstream) Department Portal!
          This platform serves as a central hub for all IT-related information, resources,
          and news. Explore web applications, ERP environments, and team activities from
          this unified workspace.
        </p>
      </div>

      {/* Quick Access */}
      <div className={styles.secHdr}>
        <h2>Quick Access</h2>
        <div className={styles.secLine} />
        <div className={styles.secCnt}>Featured</div>
      </div>

      <div className={styles.appsGrid}>
        {FEATURED.map((app, i) => (
          <AppCard
            key={app.id}
            app={app}
            style={{ animation: `fadeUp 0.3s ease ${i * 0.06}s both` }}
          />
        ))}
      </div>

      {/* Terminal */}
      <div className={styles.terminal}>
        <div className={styles.termBar}>
          <span className={styles.termDot} style={{ background: "#ff5f56" }} />
          <span className={styles.termDot} style={{ background: "#ffbd2e" }} />
          <span className={styles.termDot} style={{ background: "#27c93f" }} />
          <span className={styles.termTitle}>bash — pandawa@kcsi</span>
        </div>
        <div className={styles.termBody}>
          <div><span className={styles.tP}>pandawa@kcsi</span>:<span style={{ color: "var(--violet)" }}>~</span>$ <span className={styles.tC}>cat /etc/portal-info</span></div>
          <div className={styles.tO}>IT Application Development Portal — PANDAWA Team</div>
          <div className={styles.tO}>Shared Service Center, Nojorono Group, Kudus</div>
          <br />
          <div><span className={styles.tP}>pandawa@kcsi</span>:<span style={{ color: "var(--violet)" }}>~</span>$ <span className={styles.tC}>ls ./links</span></div>
          <div className={styles.tO}>support  →  <a href="https://bit.ly/ntisupport" target="_blank" rel="noreferrer" className={styles.tA}>bit.ly/ntisupport</a></div>
          <div className={styles.tO}>github   →  <a href="https://github.com/pandawa-apex" target="_blank" rel="noreferrer" className={styles.tA}>github.com/pandawa-apex</a></div>
          <div className={styles.tO}>sharepoint → <a href="https://kcsiid.sharepoint.com/sites/PANDAWA" target="_blank" rel="noreferrer" className={styles.tA}>kcsiid.sharepoint.com/sites/PANDAWA</a></div>
          <br />
          <div><span className={styles.tP}>pandawa@kcsi</span>:<span style={{ color: "var(--violet)" }}>~</span>$ <span className={styles.tC}>_</span></div>
        </div>
      </div>
    </div>
  );
}

// Inline SVG icons
function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
      <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" /><path d="M8 7v4m0-6h.01" />
    </svg>
  );
}
function SharepointIcon() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 16 16">
      <path d="M13 10L8 5 3 10" /><line x1="8" y1="5" x2="8" y2="15" /><path d="M1 1h14v4H1z" />
    </svg>
  );
}

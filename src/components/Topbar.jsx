import { useState } from "react";
import styles from "./Topbar.module.css";

export default function Topbar({ activePage, onSearch }) {
  const [query, setQuery] = useState("");

  const pageLabels = {
    home: "Overview",
    webapps: "Web Applications",
    erp: "ERP Environments",
    activities: "Activities",
  };

  function handleSearch(e) {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  }

  return (
    <header className={styles.topbar}>
      <div className={styles.breadcrumb}>
        <span className={styles.breadCrumb1}>KCSI</span>
        <span className={styles.sep}>/</span>
        <span className={styles.breadCrumb2}>{pageLabels[activePage] || "Portal"}</span>
      </div>

      <div className={styles.searchWrap}>
        <svg width="12" height="12" fill="none" stroke="var(--txt3)" strokeWidth="1.5" viewBox="0 0 16 16">
          <circle cx="6.5" cy="6.5" r="4.5" />
          <line x1="10.5" y1="10.5" x2="15" y2="15" />
        </svg>
        <input
          type="text"
          placeholder="Search apps..."
          value={query}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <span className={styles.shortcut}>⌘K</span>
      </div>

      <a
        href="https://support.niaganusaabadi.co.id/"
        target="_blank"
        rel="noreferrer"
        className={styles.ticketBtn}
      >
        <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 8h12M8 2l6 6-6 6" />
        </svg>
        Submit Ticket
      </a>
    </header>
  );
}

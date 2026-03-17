import { useState } from "react";
import ParticleCanvas from "./components/ParticleCanvas";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { HomePage } from "./components/HomePage";
import { WebAppsPage, ErpPage, ActivitiesPage } from "./components/Pages";
import "./App.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");

  function handleNav(page) {
    setActivePage(page);
    setSearchQuery("");
  }

  function handleSearch(query) {
    setSearchQuery(query);
    // Auto-navigate to webapps when searching
    if (query && activePage !== "webapps") {
      setActivePage("webapps");
    }
  }

  const renderPage = () => {
    switch (activePage) {
      case "home":       return <HomePage />;
      case "webapps":    return <WebAppsPage searchQuery={searchQuery} />;
      case "erp":        return <ErpPage />;
      case "activities": return <ActivitiesPage />;
      default:           return <HomePage />;
    }
  };

  return (
    <>
      <ParticleCanvas />
      <div className="layout">
        <Sidebar activePage={activePage} onNav={handleNav} />
        <div className="mainArea">
          <Topbar activePage={activePage} onSearch={handleSearch} />
          <div className="content">{renderPage()}</div>
        </div>
      </div>
    </>
  );
}

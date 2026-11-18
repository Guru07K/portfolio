import { useState } from "react";


function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <line x1="12" y1="1.5" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22.5" />
        <line x1="1.5" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22.5" y2="12" />
        <line x1="4.4" y1="4.4" x2="6.1" y2="6.1" />
        <line x1="17.9" y1="17.9" x2="19.6" y2="19.6" />
        <line x1="4.4" y1="19.6" x2="6.1" y2="17.9" />
        <line x1="17.9" y1="6.1" x2="19.6" y2="4.4" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Header({ tabs, activeTab, onTabChange, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (tab) => {
    onTabChange(tab);
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-[100] pt-3 pointer-events-none before:content-[''] before:absolute before:inset-0 before:z-[-1] before:pointer-events-none before:bg-[rgba(247,247,251,0.9)] before:backdrop-blur-[20px] before:shadow-[0_6px_24px_rgba(0,0,0,0.06)] dark:before:bg-[rgba(11,11,16,0.9)] dark:before:shadow-[0_6px_24px_rgba(0,0,0,0.2)]`}
    >
      <div className="mx-auto px-6 grid grid-cols-[1fr_auto_1fr] items-center gap-6 max-[860px]:grid-cols-[1fr_auto] max-[860px]:gap-3 max-[400px]:px-4 h-[calc(var(--header-height)_-_12px)] pointer-events-none">
        <button
          type="button"
          className="bg-transparent border-0 p-0 cursor-pointer flex items-center gap-2.5 shrink-0 justify-self-start pointer-events-auto"
          onClick={() => handleTabClick("Home")}
          aria-label="Go to Home"
        >
          <span className="flex items-center justify-center w-[42px] h-[42px] rounded-[12px] bg-[linear-gradient(135deg,var(--accent),#a855f7)] text-white text-[16px] font-bold tracking-[0.5px]" aria-hidden="true">
            GK
          </span>
          <span className="text-[17px] text-header-dim max-[600px]:hidden">
            <strong className="text-header-text font-bold">Gnanaguru</strong> K
          </span>
        </button>

        <nav
          className={`flex items-center gap-1.5 justify-self-center max-w-full pointer-events-auto p-2 rounded-[9999px] bg-[rgba(255,255,255,0.65)] border border-[rgba(255,255,255,0.35)] shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-[18px] dark:bg-[rgba(20,20,25,0.65)] dark:border-[rgba(255,255,255,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] max-[1180px]:gap-0.5 max-[860px]:absolute max-[860px]:top-full max-[860px]:left-3 max-[860px]:right-3 max-[860px]:justify-self-stretch max-[860px]:mt-2 max-[860px]:bg-header max-[860px]:rounded-[18px] max-[860px]:flex-col max-[860px]:items-stretch max-[860px]:gap-0.5 ${menuOpen ? "max-[860px]:flex" : "max-[860px]:hidden"}`}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`border-0 py-2.5 px-4 rounded-[9999px] text-[15px] font-medium whitespace-nowrap cursor-pointer transition-[color,background-color] duration-200 ease-[ease] hover:text-header-text hover:bg-header-tab-hover max-[1180px]:text-[14px] max-[1180px]:py-[9px] max-[1180px]:px-3 max-[860px]:text-left max-[860px]:w-full max-[860px]:rounded-[10px] max-[860px]:py-3 max-[860px]:text-[15px] ${activeTab === tab ? "text-accent bg-accent-soft" : "text-header-dim bg-transparent"}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end pointer-events-auto">
          <button
            type="button"
            className="flex items-center justify-center w-[38px] h-[38px] rounded-[50%] border border-header-control-border text-header-text cursor-pointer bg-[rgba(255,255,255,0.65)] backdrop-blur-[18px] transition-[background-color,transform] duration-200 ease-[ease] dark:bg-[rgba(20,20,25,0.65)] hover:bg-header-control-hover hover:[transform:rotate(12deg)] dark:hover:bg-header-control-hover"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className="hidden flex-col justify-center gap-[5px] w-[38px] h-[38px] bg-transparent border border-header-control-border rounded-[8px] cursor-pointer max-[860px]:flex"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-[18px] h-[2px] mx-auto bg-header-text transition-[transform,opacity] duration-200 ease-[ease] ${menuOpen ? "[transform:translateY(7px)_rotate(45deg)]" : ""}`} />
            <span className={`block w-[18px] h-[2px] mx-auto bg-header-text transition-[transform,opacity] duration-200 ease-[ease] ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[18px] h-[2px] mx-auto bg-header-text transition-[transform,opacity] duration-200 ease-[ease] ${menuOpen ? "[transform:translateY(-7px)_rotate(-45deg)]" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

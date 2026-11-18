import { useState, useSyncExternalStore } from "react";
import { HERO_STATS } from "../components/heroStatsClasses";
import { EXPERIENCE, formatPeriod, roleDuration } from "../data/experience";

/* ---------- icons ---------- */

const BriefcaseIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

const BuildingIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <line x1="9" y1="8" x2="9" y2="8" />
    <line x1="15" y1="8" x2="15" y2="8" />
    <line x1="9" y1="12" x2="9" y2="12" />
    <line x1="15" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="15" y2="16" />
  </svg>
);

const CapIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="m9 6 6 6-6 6" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const PinIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
);

const ListIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <line x1="9" y1="6" x2="21" y2="6" />
    <line x1="9" y1="12" x2="21" y2="12" />
    <line x1="9" y1="18" x2="21" y2="18" />
    <circle cx="4" cy="6" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="4" cy="12" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="4" cy="18" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);

const LayersIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path d="m12 2 9 5-9 5-9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </svg>
);

/* ---------- data ---------- */

// Role icons by key (data: src/data/experience.js).
const ROLE_ICONS = {
  building: <BuildingIcon />,
  briefcase: <BriefcaseIcon />,
  cap: <CapIcon />,
};

// Adds display values: icon, "April 2025 – May 2026" and the computed duration.
const toView = (item) => ({
  ...item,
  icon: ROLE_ICONS[item.icon],
  period: formatPeriod(item.start, item.end),
  duration: roleDuration(item),
});

const MAX_RESPONSIBILITIES = 5;


/* ---------- layout mode ---------- */

// Below this width the list and details stack, so Experience switches to an
// accordion (details expand inside the tapped card).
const COMPACT_QUERY = "(max-width: 980px)";

const subscribeCompact = (callback) => {
  const mq = window.matchMedia(COMPACT_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
};
const getCompact = () => window.matchMedia(COMPACT_QUERY).matches;

function useIsCompact() {
  return useSyncExternalStore(subscribeCompact, getCompact, () => false);
}

// Keeps a tapped card at the same screen position while cards above it
// collapse/expand, so the page does not jump during the animation.
function keepInPlace(element, duration = 420) {
  if (!element) return;
  const startTop = element.getBoundingClientRect().top;
  // Only anchor a card the user can see (e.g. not one triggered off-screen).
  if (startTop < 0 || startTop > window.innerHeight) return;
  const start = performance.now();
  const step = (now) => {
    const drift = element.getBoundingClientRect().top - startTop;
    if (Math.abs(drift) >= 1) window.scrollBy(0, drift);
    if (now - start < duration) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ---------- shared details content ---------- */

function ExperienceBody({ item, limit }) {
  const responsibilities = limit ? item.responsibilities.slice(0, limit) : item.responsibilities;
  return (
    <>
      <p className="text-body text-[14.5px] leading-[1.7] m-0 mb-[22px] max-[600px]:text-[14px]">{item.summary}</p>

      {responsibilities.length > 0 && (
        <div className="mb-5 last:mb-0">
          <h4 className="flex items-center gap-2 text-[15px] m-0 mb-3 text-heading [&_svg]:text-accent">
            <ListIcon /> Key Responsibilities
          </h4>
          <ul className="m-0 p-0 list-none flex flex-col gap-2">
            {responsibilities.map((text) => (
              <li
                className="relative pl-[18px] text-body text-[14px] leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-accent"
                key={text}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.technologies.length > 0 && (
        <div className="mb-5 last:mb-0">
          <h4 className="flex items-center gap-2 text-[15px] m-0 mb-3 text-heading [&_svg]:text-accent">
            <LayersIcon /> Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span className="py-[5px] px-[14px] rounded-[999px] text-[13px] font-semibold bg-accent-soft text-accent" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- mobile accordion card ---------- */

function ExperienceAccordionItem({ item, index, expanded, onToggle }) {
  const panelId = `experience-panel-${index}`;
  const buttonId = `experience-button-${index}`;
  return (
    <div className="relative flex items-start gap-4 max-[400px]:gap-3">
      <span
        className={`relative z-[1] shrink-0 mt-[30px] w-3 h-3 rounded-[50%] border-2 transition-colors duration-200 ${expanded ? "bg-accent border-accent" : "bg-card border-line"}`}
        aria-hidden="true"
      />
      <div
        className={`flex-1 min-w-0 rounded-[14px] border transition-[border-color,background-color] duration-200 ${expanded ? "bg-card border-accent shadow-card" : "bg-card border-line"}`}
      >
        <button
          type="button"
          id={buttonId}
          className={`w-full flex items-center gap-[14px] text-left rounded-[14px] py-[14px] px-4 cursor-pointer bg-transparent border-0 max-[400px]:gap-3 max-[400px]:px-3 ${expanded ? "bg-accent-soft rounded-b-none" : ""}`}
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={panelId}
        >
          <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-[10px] bg-accent-soft text-accent max-[399px]:hidden">{item.icon}</span>
          <span className="flex-1 min-w-0 flex flex-col gap-[3px]">
            <span className="text-[14.5px] font-bold text-heading leading-[1.3]">{item.role}</span>
            <span className="text-[13px] font-semibold text-accent leading-[1.35]">{item.company}</span>
            <span className="inline-flex items-start gap-[6px] text-[12.5px] text-body leading-[1.45] [&_svg]:shrink-0 [&_svg]:mt-[2px] [&_svg]:text-accent">
              <CalendarIcon />
              <span>{item.period} · {item.duration}</span>
            </span>
            {item.location && (
              <span className="inline-flex items-start gap-[6px] text-[12.5px] text-body leading-[1.45] [&_svg]:shrink-0 [&_svg]:mt-[2px] [&_svg]:text-accent">
                <PinIcon />
                <span>{item.location}</span>
              </span>
            )}
          </span>
          <span
            className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-[transform,color] duration-300 ${expanded ? "rotate-90 text-accent" : "text-body"}`}
            aria-hidden="true"
          >
            <ChevronIcon />
          </span>
        </button>

        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          inert={!expanded}
          className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="px-4 pt-4 pb-5 border-t border-line max-[400px]:px-3">
              <ExperienceBody item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const isCompact = useIsCompact();
  const items = EXPERIENCE.map(toView);
  const active = items[activeIndex];

  // Mobile: one card open at a time; tapping the open card closes it.
  const toggleExpanded = (index, event) => {
    keepInPlace(event.currentTarget);
    setExpandedIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="animate-fade-in relative p-[32px_max(24px,calc((100%_-_1200px)/2))_60px] box-border min-h-[110vh] max-[980px]:min-h-[100svh] max-[600px]:px-4 max-[767px]:min-h-0 max-[767px]:py-12">
      <div className="relative max-w-[720px] mb-6">
        <h2 className="text-[34px] leading-[1.15] mb-2 max-[640px]:text-[32px] max-[400px]:text-[28px]">
          My Professional <span className="text-accent">Experience</span>
        </h2>
      </div>

      <div className="grid grid-cols-[36fr_64fr] items-start gap-8 max-[980px]:grid-cols-[1fr]">
        <div>
          {isCompact ? (
            <div className="relative flex flex-col gap-4 mb-6 max-[767px]:mb-0 before:content-[''] before:absolute before:top-[34px] before:bottom-[34px] before:left-[5px] before:w-[2px] before:bg-line">
              {items.map((item, i) => (
                <ExperienceAccordionItem
                  key={item.role}
                  item={item}
                  index={i}
                  expanded={expandedIndex === i}
                  onToggle={(event) => toggleExpanded(i, event)}
                />
              ))}
            </div>
          ) : (
            <div className="relative flex flex-col gap-4 mb-6 before:content-[''] before:absolute before:top-[10px] before:bottom-[10px] before:left-[5px] before:w-[2px] before:bg-line">
              {items.map((item, i) => (
                <div className="relative flex items-center gap-4" key={item.role}>
                  <span
                    className={`relative z-[1] shrink-0 w-3 h-3 rounded-[50%] border-2 ${i === activeIndex ? "bg-accent border-accent" : "bg-card border-line"}`}
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    className={`flex-1 min-w-0 flex items-center gap-[14px] text-left rounded-[14px] py-[14px] px-4 cursor-pointer border transition-[border-color,background] duration-150 ease-[ease] hover:border-accent-line max-[640px]:flex-wrap ${i === activeIndex ? "bg-accent-soft border-accent" : "bg-card border-line"}`}
                    onClick={() => setActiveIndex(i)}
                    aria-pressed={i === activeIndex}
                  >
                    <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-[10px] bg-accent-soft text-accent">{item.icon}</span>
                    <span className="flex-1 min-w-0 flex flex-col gap-[2px]">
                      <span className="text-[14.5px] font-bold text-heading">{item.role}</span>
                      <span className="text-[13px] font-semibold text-accent">{item.company}</span>
                      <span className="text-[12px] text-body">
                        {item.period} &nbsp;|&nbsp; {item.duration}
                      </span>
                    </span>
                    <span className={`shrink-0 ${i === activeIndex ? "text-accent" : "text-body"}`}>
                      <ChevronIcon />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5 min-w-0 [scrollbar-width:none] [-ms-overflow-style:none] max-[767px]:empty:hidden">
          {!isCompact && (
            <div className="p-7 bg-card border border-line rounded-[16px] shadow-card min-[981px]:max-h-[calc(100vh_-_var(--header-height)_-_200px)] min-[981px]:overflow-y-auto">
              <div className="flex items-center gap-4 mb-[18px]">
                <span className="shrink-0 flex items-center justify-center w-[52px] h-[52px] rounded-[14px] bg-accent-soft text-accent">{active.icon}</span>
                <div>
                  <h3 className="m-0 mb-[4px] text-[20px]">{active.role}</h3>
                  <p className="m-0 text-accent text-[14px] font-bold">{active.company}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-[6px_24px] pb-[18px] mb-[18px] border-b border-line [&_svg]:shrink-0 [&_svg]:text-accent">
                <span className="inline-flex items-center gap-[6px] text-body text-[13px]">
                  <CalendarIcon />
                  {active.period} &nbsp;|&nbsp; {active.duration}
                </span>
                <span className="inline-flex items-center gap-[6px] text-body text-[13px]">
                  <PinIcon />
                  {active.location}
                </span>
              </div>

              <ExperienceBody item={active} limit={MAX_RESPONSIBILITIES} />
            </div>
          )}
          {!isCompact && (
            <div className={HERO_STATS.wrap} aria-label={`${active.company} at a glance`}>
              <div className={HERO_STATS.stat}>
                <span className={HERO_STATS.icon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <span>
                  <span className={HERO_STATS.value}>{active.duration} </span>
                  <span className={HERO_STATS.label}>{active.end ? "Duration" : "So far"}</span>
                </span>
              </div>
              {active.technologies.length > 0 && (
                <div className={HERO_STATS.stat}>
                  <span className={HERO_STATS.icon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
                    </svg>
                  </span>
                  <span>
                    <span className={HERO_STATS.value}>{active.technologies.length} </span>
                    <span className={HERO_STATS.label}>Technologies used</span>
                  </span>
                </div>
              )}
              <div className={HERO_STATS.stat}>
                <span className={HERO_STATS.icon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                </span>
                <span>
                  <span className={HERO_STATS.value}>{active.location}</span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experience;

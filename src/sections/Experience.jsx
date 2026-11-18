import { useState } from "react";
import { HERO_STATS } from "../components/heroStatsClasses";

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

const ChartIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <line x1="4" y1="20" x2="4" y2="12" />
    <line x1="10" y1="20" x2="10" y2="6" />
    <line x1="16" y1="20" x2="16" y2="14" />
    <line x1="21" y1="20" x2="21" y2="9" />
  </svg>
);

const CodeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.5 20c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6" />
    <path d="M16 4.3a3.2 3.2 0 0 1 0 6.2" />
    <path d="M17.5 14c2.6.5 4 2.4 4 6" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.5 6.2 20.5l1.1-6.5-4.8-4.6 6.6-.9Z" />
  </svg>
);

/* ---------- data ---------- */

const EXPERIENCE = [
  {
    icon: <BuildingIcon />,
    role: "Backend Developer",
    company: "Things Alive Solutions",
    period: "June 2026 – Present",
    duration: "4+ months",
    location: "Bangalore",
    summary:
      "Building backend APIs and services for IoT platforms, including device telemetry processing, dashboard and KPI services, and real-time communication.",
    responsibilities: [
      "Building backend APIs and services.",
      "Working on IoT platforms.",
      "Processing device telemetry and sensor data.",
      "Developing dashboard and KPI backend services.",
      "Working with real-time communication.",
      "Working with messaging systems.",
      "Designing and maintaining PostgreSQL-based backend systems.",
    ],
    technologies: ["NestJS", "TypeScript", "Node.js", "PostgreSQL", "RabbitMQ", "Redis", "WebSocket", "TypeORM"],
  },
  {
    icon: <BriefcaseIcon />,
    role: "Software Engineer I",
    company: "Energetics.ai Pvt Ltd & Blackdart Labs Pvt Ltd",
    period: "April 2025 – May 2026",
    duration: "1 year 2 months",
    location: "Chennai",
    summary:
      "Worked on REST API development using Node.js, TypeScript and Express.js, with PostgreSQL and MongoDB for data storage.",
    responsibilities: [],
    technologies: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "Git"],
  },
  {
    icon: <CapIcon />,
    role: "Software Developer Intern",
    company: "ZOHO Corporation",
    period: "October 2024 – March 2025",
    duration: "6 months",
    location: "Srivilliputhur, Tamil Nadu",
    summary: "Internship as a Software Developer at ZOHO Corporation.",
    responsibilities: [],
    technologies: [],
  },
];

const MAX_RESPONSIBILITIES = 5;

const STATS = [
  { icon: <ChartIcon />, value: "2+", label: "Years of Experience" },
  { icon: <CodeIcon />, value: "3", label: "Roles" },
  { icon: <UsersIcon />, value: "15+", label: "Technologies" },
  { icon: <StarIcon />, value: "Always", label: "Learning & Growing" },
];

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = EXPERIENCE[activeIndex];

  return (
    <section className="animate-fade-in relative p-[32px_max(24px,calc((100%_-_1200px)/2))_60px] box-border h-[110vh]">
      <div className="relative max-w-[720px] mb-6">
        <h2 className="text-[34px] leading-[1.15] mb-2 max-[640px]:text-[32px]">
          My Professional <span className="text-accent">Experience</span>
        </h2>
      </div>

      <div className="grid grid-cols-[36fr_64fr] items-start gap-8 max-[980px]:grid-cols-[1fr]">
        <div>
          <div className="relative flex flex-col gap-4 mb-6 before:content-[''] before:absolute before:top-[10px] before:bottom-[10px] before:left-[5px] before:w-[2px] before:bg-line">
            {EXPERIENCE.map((item, i) => (
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
        </div>

        <div className="flex flex-col gap-5 min-w-0 [scrollbar-width:none] [-ms-overflow-style:none]">
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

            <p className="text-body text-[14.5px] leading-[1.7] m-0 mb-[22px]">{active.summary}</p>

            {active.responsibilities.length > 0 && (
              <div className="mb-5 last:mb-0">
                <h4 className="flex items-center gap-2 text-[15px] m-0 mb-3 text-heading [&_svg]:text-accent">
                  <ListIcon /> Key Responsibilities
                </h4>
                <ul className="m-0 p-0 list-none flex flex-col gap-2">
                  {active.responsibilities.slice(0, MAX_RESPONSIBILITIES).map((item) => (
                    <li
                      className="relative pl-[18px] text-body text-[14px] leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-accent"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {active.technologies.length > 0 && (
              <div className="mb-5 last:mb-0">
                <h4 className="flex items-center gap-2 text-[15px] m-0 mb-3 text-heading [&_svg]:text-accent">
                  <LayersIcon /> Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {active.technologies.map((tech) => (
                    <span className="py-[5px] px-[14px] rounded-[999px] text-[13px] font-semibold bg-accent-soft text-accent" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={HERO_STATS.wrap}>
            <div className={HERO_STATS.stat}>
              <span className={HERO_STATS.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
                </svg>
              </span>
              <span>
                <span className={HERO_STATS.value}>15+ </span>
                <span className={HERO_STATS.label}>Technologies</span>
              </span>
            </div>
            <div className={HERO_STATS.stat}>
              <span className={HERO_STATS.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                </svg>
              </span>
              <span>
                <span className={HERO_STATS.value}>2+ </span>
                <span className={HERO_STATS.label}>Years Experience</span>
              </span>
            </div>
            <div className={HERO_STATS.stat}>
              <span className={HERO_STATS.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20.8 8.6c0 5.4-8.8 10.4-8.8 10.4S3.2 14 3.2 8.6a4.6 4.6 0 0 1 8.8-1.9 4.6 4.6 0 0 1 8.8 1.9Z" />
                </svg>
              </span>
              <span>
                <span className={HERO_STATS.value}>Always </span>
                <span className={HERO_STATS.label}>Learning New Things</span>
              </span>
            </div>
          </div>
          {/* <div className="exp2__stats">
            {STATS.map((stat) => (
              <div className="exp2__stat" key={stat.label}>
                <span className="exp2__stat-icon">{stat.icon}</span>
                <span className="exp2__stat-value">{stat.value}</span>
                <span className="exp2__stat-label">{stat.label}</span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Experience;

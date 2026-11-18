import { useEffect, useState } from "react";
import { HERO_STATS } from "../components/heroStatsClasses";
import { EXPERIENCE, totalExperienceLabel } from "../data/experience";
import { TECHNOLOGY_COUNT } from "../data/skills";
import { RESUME_URL } from "../data/resume";


const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/gnanaguruk/",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/Guru07K",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.51v-1.98c-2.93.64-3.55-1.24-3.55-1.24-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.61 2.46 1.15 3.06.88.1-.68.37-1.15.67-1.42-2.34-.27-4.8-1.17-4.8-5.21 0-1.15.41-2.09 1.09-2.83-.11-.27-.47-1.36.1-2.83 0 0 .89-.29 2.91 1.08a10 10 0 0 1 5.3 0c2.02-1.37 2.91-1.08 2.91-1.08.57 1.47.21 2.56.1 2.83.68.74 1.09 1.68 1.09 2.83 0 4.05-2.47 4.94-4.82 5.2.38.33.72.97.72 1.96v2.9c0 .28.19.62.73.51A10.5 10.5 0 0 0 12 1.5z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:gnanaguru704@gmail.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
];


const TYPED_PHRASES = ["Backend APIs", "IoT Platforms", "Scalable Server Applications", "Real-Time Systems"];

function useTypewriter(phrases) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    const step = deleting ? -1 : 1;
    const delay = deleting ? 40 : 80;

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(pause);
    }
    if (deleting && text === "") {
      const next = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => i + 1);
      }, 300);
      return () => clearTimeout(next);
    }

    const timeout = setTimeout(() => {
      setText(current.slice(0, text.length + step));
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases]);

  return text;
}

// Shared button classes: the hero overrides of the old .btn rules.
const HERO_BTN =
  "inline-flex items-center justify-center gap-[10px] h-[54px] px-[27px] py-0 rounded-[28px] no-underline text-[16px] font-semibold cursor-pointer transition-[transform,box-shadow,background] duration-[250ms] ease-[ease] [&_svg]:shrink-0 max-[600px]:w-full";

const CARD =
  "rounded-[18px] border border-[#ece9f5] bg-white/90 shadow-[0_14px_30px_-18px_rgba(100,37,233,0.28)] backdrop-blur-[6px] dark:bg-[#15151f]/90 dark:border-[rgba(196,181,253,0.16)] dark:shadow-[0_14px_30px_-16px_rgba(0,0,0,0.6)]";
const CARD_ICON =
  "flex items-center justify-center w-10 h-10 shrink-0 rounded-[12px] bg-[#f0edff] text-[#6425e9] dark:bg-[rgba(124,58,237,0.18)] dark:text-[#c4b5fd]";

function StatCard({ icon, value, unit, label, note }) {
  return (
    <div className={`${CARD} flex items-start gap-3.5 p-[18px] max-[600px]:flex-col max-[600px]:gap-2.5 max-[600px]:p-4`}>
      <span className={CARD_ICON} aria-hidden="true">{icon}</span>
      <div className="min-w-0">
        <p className="leading-none text-[#101010] dark:text-[#f3f3f6]">
          <span className="text-[30px] font-bold tracking-[-0.5px] max-[600px]:text-[26px]">{value}</span>
          {unit && <span className="ml-1.5 text-[15px] font-semibold">{unit}</span>}
        </p>
        <p className="mt-1.5 text-[13.5px] font-medium leading-[1.35] text-[#3d4458] dark:text-[#c9ccd8]">{label}</p>
        {note && <p className="mt-0.5 text-[12px] text-[#7a8196] dark:text-[#8f93a3]">{note}</p>}
      </div>
    </div>
  );
}

function Home({ onNavigate }) {
  const typed = useTypewriter(TYPED_PHRASES);
  const experience = totalExperienceLabel();
  const current = EXPERIENCE.find((item) => item.end === null);

  return (
    <section className="relative w-full grid grid-cols-[minmax(0,1fr)] overflow-hidden bg-white text-[#17213a] h-[100vh] dark:bg-[#0b0b12] dark:text-[#d7d9e6] max-[900px]:grid-cols-[1fr] max-[900px]:h-auto max-[900px]:min-h-[100svh]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <span className="absolute bg-[#f5f5ff] pointer-events-none dark:bg-[rgba(124,58,237,0.14)] w-[650px] h-[650px] left-[-430px] top-[-420px] rounded-[50%]" />
        <span className="hidden" />
      </div>

      <div className="relative z-10 flex flex-col justify-center pt-[56px] pr-[40px] pb-[48px] pl-[max(24px,calc((100vw_-_1200px)/2))] bg-[linear-gradient(90deg,#ffffff_0%,#f1f1ff_55%,#f3f5fd_100%)] dark:bg-[linear-gradient(90deg,#0b0b12_0%,#171b34_55%,#262b52_100%)] max-[900px]:p-[70px_max(24px,calc((100vw_-_1200px)/2))_40px]">
        <p className="flex items-center gap-[10px] mb-[18px] text-[#596177] dark:text-[#9ca3af] text-[14px] font-semibold tracking-[2px] uppercase max-[400px]:text-[12px]">
          <span className="inline-block w-[50px] h-[2px] bg-[#6425e9]" /> Backend Developer
        </p>
        <h1 className="m-0 text-[#111111] dark:text-[#f5f5f7] text-[clamp(50px,4vw,68px)] leading-none font-bold tracking-[-2.5px] min-[1500px]:text-[68px] max-[1200px]:text-[53px] max-[600px]:text-[45px] max-[600px]:tracking-[-1.5px] max-[400px]:text-[40px]">
          Hi, I'm
          <br />
          <span className="text-[#6425e9]">Gnanaguru K</span>
        </h1>
        <p className="mt-[18px] mb-[15px] text-[#17213a] dark:text-[#e5e7eb] text-[clamp(20px,1.55vw,28px)] leading-[1.35] font-semibold max-[1200px]:text-[21px] max-[600px]:text-[19px]">
          I build{" "}
          <span className="text-[#6425e9]">{typed}</span>
          <span className="inline-block ml-[2px] text-[#6425e9] font-normal animate-hero-cursor-blink">|</span>
        </p>
        <p className="max-w-[650px] m-0 text-[#626b80] dark:text-[#a7abb8] text-[16px] leading-[1.65] font-normal min-[1500px]:text-[17px] max-[1200px]:text-[15px]">
          I'm a Backend Developer with experience building scalable APIs, IoT
          platforms, real-time systems and data-driven applications using
          Node.js, TypeScript, NestJS, PostgreSQL and modern backend technologies.
        </p>

        <div className="flex items-center gap-4 mt-[27px] max-[600px]:flex-col max-[600px]:items-stretch">
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              onNavigate?.("Contact");
            }}
            className={`${HERO_BTN} border-2 border-transparent text-white bg-[linear-gradient(135deg,#7629f5,#5e1fe1)] shadow-[0_10px_24px_rgba(100,37,233,0.22)] hover:opacity-90 hover:[transform:translateY(-2px)] hover:shadow-[0_14px_30px_rgba(100,37,233,0.3)]`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22l-4-9-9-4 20-7z" />
            </svg>
            Let's Connect
          </a>
          <a
            href={RESUME_URL}
            rel="noopener"
            className={`${HERO_BTN} border-[1.5px] border-solid border-[#c7a9ff] text-[#6425e9] bg-white hover:bg-[#faf7ff] hover:[transform:translateY(-2px)] dark:text-[#c4b5fd] dark:bg-transparent dark:border-[rgba(196,181,253,0.4)] dark:hover:bg-[rgba(196,181,253,0.1)]`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Download Resume
          </a>
        </div>
        <div className="flex flex-row flex-wrap items-end justify-between gap-[22px] mt-[28px] max-[900px]:flex-col max-[900px]:items-start">

        <div className="flex items-center gap-[18px] max-[600px]:gap-[12px]">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="flex items-center justify-center w-[58px] h-[58px] rounded-[50%] text-[#111827] bg-[#f0edff] no-underline transition-[transform,background,color] duration-[250ms] ease-[ease] hover:text-white hover:bg-[#6425e9] hover:[transform:translateY(-3px)] dark:text-[#e5e7eb] dark:bg-[rgba(124,58,237,0.18)] dark:hover:text-white dark:hover:bg-[#7c3aed] max-[600px]:w-[52px] max-[600px]:h-[52px]"
              aria-label={social.name}
              title={social.name}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className={`${HERO_STATS.wrap} max-[767px]:hidden`}>
          <div className={HERO_STATS.stat}>
            <span className={HERO_STATS.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
              </svg>
            </span>
            <span>
              <span className={HERO_STATS.value}>{TECHNOLOGY_COUNT} </span>
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
              <span className={HERO_STATS.value}>{experience.value} </span>
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
        </div>

        {/* Mobile only (below 768px): stacked at-a-glance cards. */}
        <aside
          aria-label="At a glance"
          className="grid grid-cols-2 gap-3 mt-8 max-[340px]:grid-cols-1 min-[768px]:hidden"
        >
          {current && (
            <div className={`${CARD} col-span-full flex items-center gap-3.5 p-[18px] max-[600px]:p-4`}>
              <span className="relative flex w-2.5 h-2.5 shrink-0" aria-hidden="true">
                <span className="absolute inset-0 rounded-full bg-[#22c55e] opacity-60 animate-ping motion-reduce:animate-none" />
                <span className="relative w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
              </span>
              <div className="min-w-0">
                <p className="text-[11.5px] font-bold uppercase tracking-[1.5px] text-[#7a8196] dark:text-[#8f93a3]">Currently</p>
                <p className="mt-0.5 text-[14.5px] font-semibold leading-[1.4] text-[#101010] dark:text-[#f3f3f6]">
                  {current.role} at {current.company}
                </p>
                <p className="text-[12.5px] text-[#7a8196] dark:text-[#8f93a3]">{current.location}</p>
              </div>
            </div>
          )}
          <StatCard
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              </svg>
            }
            value={experience.value}
            unit={experience.unit}
            label="Software development experience"
            note="Including internship"
          />
          <StatCard
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3 9 5-9 5-9-5Z" />
                <path d="m3 13 9 5 9-5" />
              </svg>
            }
            value={TECHNOLOGY_COUNT}
            label="Technologies & tools"
            note="Languages, frameworks, databases & tooling"
          />
        </aside>
      </div>
    </section>
  );
}

export default Home;

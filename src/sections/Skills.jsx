import { SKILL_CATEGORIES } from "../data/skills";

/* ---------- tech logos ---------- */

// Logos are PNGs grouped by category: /public/assets/<category>/<logo>.png
// (languages-frameworks, databases, cloud-tools; set by each category's `assetDir`).
// Replace a file there to update a logo; no code change is needed. Entries
// marked `dark: true` also have <logo>-dark.png (the brand's light-on-dark
// version) for the dark theme.
const ASSETS_BASE = "/assets";

function TechLogo({ name, dir, logo, dark = false }) {
  const imgClass = "w-full h-full object-contain";
  const alt = `${name} logo`;
  const base = `${ASSETS_BASE}/${dir}/${logo}`;
  if (!dark) {
    return <img src={`${base}.png`} alt={alt} className={imgClass} draggable="false" decoding="async" />;
  }
  return (
    <>
      <img src={`${base}.png`} alt={alt} className={`${imgClass} dark:hidden`} draggable="false" decoding="async" />
      <img src={`${base}-dark.png`} alt={alt} className={`${imgClass} hidden dark:block`} draggable="false" decoding="async" />
    </>
  );
}

/* ---------- categories ---------- */

// Category heading icons (the data lives in src/data/skills.js).
const CATEGORY_ICONS = {
  "languages-frameworks": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 6 2 12 8 18" />
      <polyline points="16 6 22 12 16 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  data: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  ),
  tools: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
};

/* ---------- technology marquee ---------- */

// Each row is a fixed viewport showing exactly --skills-visible slots:
// 3 on mobile, 4 on tablets (768px+), 5 on laptops/desktops (1024px+).
// Each slot is 1/--skills-visible of the viewport width (container query
// units), with spacing inside the slot, so slots are always equal. Each row
// repeats its items until one copy is at least MIN_CARDS_PER_SEGMENT slots
// (always wider than the viewport), so the -50% loop never shows empty space.
// Speed is set per card, so every row moves at the same pace.
const MAX_VISIBLE_ITEMS = 5;
const MIN_CARDS_PER_SEGMENT = 12;
const SECONDS_PER_CARD = 4.5;


function SkillMarquee({ items, reverse, assetDir }) {
  const copies = Math.ceil(Math.max(MIN_CARDS_PER_SEGMENT, MAX_VISIBLE_ITEMS) / items.length);
  const segment = Array.from({ length: copies }, () => items).flat();
  const doubled = [...segment, ...segment];

  return (
    <div className="group w-full overflow-hidden [container-type:inline-size] p-[6px_0] [--skills-visible:3] min-[768px]:[--skills-visible:4] min-[1024px]:[--skills-visible:5] [mask-image:linear-gradient(to_right,transparent,#000_20px,#000_calc(100%_-_20px),transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_20px,#000_calc(100%_-_20px),transparent)] max-[500px]:[mask-image:linear-gradient(to_right,transparent,#000_6px,#000_calc(100%_-_6px),transparent)] max-[500px]:[-webkit-mask-image:linear-gradient(to_right,transparent,#000_6px,#000_calc(100%_-_6px),transparent)]">
      <div
        className={`flex w-max ${reverse ? "animate-skills-marquee-rtl" : "animate-skills-marquee-ltr"} group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
        style={{ animationDuration: `${segment.length * SECONDS_PER_CARD}s` }}
      >
        {doubled.map((item, i) => (
          <div
            className="flex flex-col shrink-0 items-center gap-2 px-2 transition-[transform] duration-200 ease-[ease] hover:[transform:translateY(-3px)] max-[500px]:px-1 max-[500px]:gap-1.5"
            style={{ width: "calc(100cqw / var(--skills-visible))" }}
            key={`${item.name}-${i}`}
            aria-hidden={i >= segment.length ? "true" : undefined}
          >
            <span className="flex items-center justify-center w-[clamp(40px,min(calc(100cqw/var(--skills-visible)*0.42),7.5vh),60px)] h-[clamp(40px,min(calc(100cqw/var(--skills-visible)*0.42),7.5vh),60px)]">
              <TechLogo name={item.name} dir={assetDir} logo={item.logo} dark={item.dark} />
            </span>
            <span className="max-w-full truncate text-[12px] font-semibold text-heading text-center max-[420px]:text-[11.5px]">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="animate-fade-in relative overflow-hidden pt-[32px] pr-[max(24px,calc((100%_-_1200px)/2))] pb-0 pl-[max(24px,calc((100%_-_1200px)/2))] bg-white text-[#17213a] h-[100vh] dark:bg-[#0b0b12] dark:text-[#d7d9e6] max-[760px]:pl-4 max-[760px]:pr-4 max-[760px]:h-auto max-[760px]:py-12">
      <span className="absolute rounded-[50%] bg-accent opacity-[0.1] blur-[60px] pointer-events-none z-0 w-[420px] h-[420px] top-[-160px] right-[-120px]" aria-hidden="true" />
      <span className="absolute rounded-[50%] bg-accent opacity-[0.1] blur-[60px] pointer-events-none z-0 w-[320px] h-[320px] bottom-[-140px] left-[-100px]" aria-hidden="true" />

      <div className="w-full mx-auto">
        <div className="text-center">
          <h2 className="text-[28px] leading-[1.15] mb-2 max-[500px]:text-[26px]">
            Tools &amp; <span className="bg-[linear-gradient(120deg,var(--accent),#38bdf8)] bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-body text-[15px] leading-[1.6]">
            Technologies I work with to build modern, scalable and user-friendly
            web applications.
          </p>
        </div>

        {SKILL_CATEGORIES.map((cat) => (
          <div className="relative z-[1] mb-9 max-[767px]:last:mb-0" key={cat.key}>
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2 max-[760px]:flex-col max-[760px]:items-start">
              <div className="flex items-center gap-3">
                <span className="w-[30px] h-[30px] rounded-[9px] flex items-center justify-center text-white shrink-0" style={{ background: cat.iconBg }}>
                  {CATEGORY_ICONS[cat.key]}
                </span>
                <h3 className="text-[16px] text-heading">{cat.title}</h3>
              </div>
            </div>

            <SkillMarquee items={cat.items} reverse={cat.reverse} assetDir={cat.assetDir} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

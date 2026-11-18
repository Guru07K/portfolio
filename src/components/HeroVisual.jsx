/*
 * Decorative hero visual (desktop only): a static backend architecture card.
 * Each layer (API → Services → Data → Cloud & Messaging) lists technologies
 * from the Skills section, using the same logo files. No animation.
 * Purely presentational, so it is hidden from assistive technology.
 */

const logo = (folder, file, dark = false) => ({
  src: `/assets/${folder}/${file}.png`,
  darkSrc: dark ? `/assets/${folder}/${file}-dark.png` : null,
});

const LAYERS = [
  {
    label: "API Layer",
    items: [
      { name: "REST API", ...logo("languages-frameworks", "rest-api", true) },
      { name: "GraphQL", ...logo("languages-frameworks", "graphql") },
      { name: "WebSocket", ...logo("cloud-tools", "websocket", true) },
    ],
  },
  {
    label: "Services",
    items: [
      { name: "Node.js", ...logo("languages-frameworks", "nodejs") },
      { name: "NestJS", ...logo("languages-frameworks", "nestjs") },
      { name: "TypeScript", ...logo("languages-frameworks", "typescript") },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "PostgreSQL", ...logo("databases", "postgresql") },
      { name: "Redis", ...logo("databases", "redis") },
      { name: "MongoDB", ...logo("databases", "mongodb") },
    ],
  },
  {
    label: "Cloud & Messaging",
    items: [
      { name: "AWS", ...logo("cloud-tools", "aws", true) },
      { name: "Kafka", ...logo("cloud-tools", "kafka", true) },
      { name: "Docker", ...logo("cloud-tools", "docker") },
    ],
  },
];

const SURFACE =
  "rounded-[18px] border border-[#ece9f5] bg-white/90 shadow-[0_24px_50px_-24px_rgba(100,37,233,0.35)] backdrop-blur-[6px] dark:bg-[#15151f]/90 dark:border-[rgba(196,181,253,0.16)] dark:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.7)]";

function Logo({ item }) {
  return (
    <span className="flex items-center justify-center w-5 h-5 shrink-0">
      <img src={item.src} alt="" className={`w-full h-full object-contain ${item.darkSrc ? "dark:hidden" : ""}`} draggable="false" decoding="async" />
      {item.darkSrc && (
        <img src={item.darkSrc} alt="" className="w-full h-full object-contain hidden dark:block" draggable="false" decoding="async" />
      )}
    </span>
  );
}

function HeroVisual({ className = "" }) {
  return (
    <div className={`relative w-full max-w-[440px] justify-self-end ${className}`} aria-hidden="true">
      {/* Soft glow behind the card */}
      <span className="absolute inset-[8%] rounded-full bg-[#6425e9] opacity-[0.10] blur-[60px] pointer-events-none dark:opacity-[0.22]" />

      <div className={`relative z-10 p-5 ${SURFACE}`}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[12px] font-bold uppercase tracking-[1.6px] text-[#6425e9] dark:text-[#c4b5fd]">Backend Architecture</p>
          <span className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#e4dcff] dark:bg-[rgba(196,181,253,0.25)]" />
            <span className="w-2 h-2 rounded-full bg-[#e4dcff] dark:bg-[rgba(196,181,253,0.25)]" />
            <span className="w-2 h-2 rounded-full bg-[#6425e9] dark:bg-[#c4b5fd]" />
          </span>
        </div>

        <ol className="relative m-0 p-0 list-none rounded-[14px] border border-[#ece9f5] bg-[#fbfaff] divide-y divide-[#ece9f5] dark:bg-[#10101a] dark:border-[rgba(196,181,253,0.14)] dark:divide-[rgba(196,181,253,0.12)]">
          {/* Static line joining the layer markers, top to bottom */}
          <span className="absolute left-[19px] top-6 bottom-6 w-px bg-[#d9ccff] dark:bg-[rgba(196,181,253,0.3)]" />
          {LAYERS.map((layer) => (
            <li key={layer.label} className="relative flex items-center gap-3 py-2.5 pl-[34px] pr-3">
              <span className="absolute left-[15px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full border-2 border-[#6425e9] bg-[#fbfaff] dark:border-[#c4b5fd] dark:bg-[#10101a]" />
              <span className="w-[74px] shrink-0 text-[10.5px] font-semibold uppercase leading-[1.3] tracking-[1px] text-[#7a8196] dark:text-[#8f93a3]">{layer.label}</span>
              <ul className="flex-1 min-w-0 m-0 p-0 list-none grid grid-cols-3 gap-1.5">
                {layer.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col items-center gap-1 min-w-0 py-1.5 px-1 rounded-[9px] bg-white border border-[#f0edf8] dark:bg-[#1b1b28] dark:border-[rgba(196,181,253,0.12)]"
                  >
                    <Logo item={item} />
                    <span className="max-w-full truncate text-[11px] leading-[1.2] font-semibold text-[#17213a] dark:text-[#e5e7eb]">{item.name}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default HeroVisual;

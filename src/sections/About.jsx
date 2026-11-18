const LightbulbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z" />
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.5 20c0-3.3 2.9-6 6.5-6s6.5 2.7 6.5 6" />
    <path d="M16 4.3a3.2 3.2 0 0 1 0 6.2" />
    <path d="M17.5 14c2.6.5 4 2.4 4 6" />
  </svg>
);

const RocketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M14.5 2c1.8 1.8 2.7 4 2.9 7-3 .2-5.2 1.1-7 2.9l-4-1c1.6-3.6 4-6.6 8.1-8.9Z" />
    <path d="M9.5 13.6 4 12.2c1-1.7 2.1-2.7 4-3" />
    <path d="M10.4 14.5 11.8 20c1.7-1 2.7-2.1 3-4" />
    <circle cx="15" cy="9" r="1.4" />
    <path d="M6.5 17.5c-1.2 1.2-1.5 4-1.5 4s2.8-.3 4-1.5" />
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 20.5s-7.5-4.7-9.8-9.3C.6 7.7 2.3 4 6 4c2 0 3.5 1.1 4.4 2.6.4.7.7 1.4 1.1 2.1.4-.7.7-1.4 1.1-2.1C13.5 5.1 15 4 17 4c3.7 0 5.4 3.7 3.8 7.2C18.5 15.8 12 20.5 12 20.5Z" />
  </svg>
);

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M2.5 12h19" />
    <path d="M12 2.5c2.6 2.6 4 6 4 9.5s-1.4 6.9-4 9.5c-2.6-2.6-4-6-4-9.5s1.4-6.9 4-9.5Z" />
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.5 6.2 20.5l1.1-6.5-4.8-4.6 6.6-.9Z" />
  </svg>
);

const LeafIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d="M4 20c8 0 16-6 16-16-10 0-16 8-16 16Z" />
    <path d="M4 20c2-6 6-10 12-13" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const PlantIllustration = () => (
  <svg viewBox="0 0 100 110" width="100%" aria-hidden="true">
    <ellipse cx="50" cy="102" rx="22" ry="5" fill="var(--accent)" opacity="0.12" />
    <path d="M28 66h44l-6 34a4 4 0 0 1-4 3H38a4 4 0 0 1-4-3Z" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="2" />
    <path d="M30 66h40" stroke="var(--border)" strokeWidth="2" />
    <g fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round">
      <path d="M50 66C48 48 40 40 26 34" />
      <path d="M50 66C46 42 54 30 70 22" />
      <path d="M50 66C52 46 60 38 72 36" />
      <path d="M50 66C50 44 46 34 34 24" />
    </g>
  </svg>
);

const CARDS = [
  {
    variant: "blue",
    icon: <LightbulbIcon />,
    number: "01",
    title: "Backend Focus",
    type: "text",
    text: "I design and build APIs and server-side services that are reliable and easy to extend.",
  },
  {
    variant: "green",
    icon: <UsersIcon />,
    number: "02",
    title: "System Thinking",
    type: "text",
    text: "I look at how services, databases and devices work together as one system.",
  },
  {
    variant: "purple",
    icon: <RocketIcon />,
    number: "03",
    title: "Real-Time Systems",
    type: "text",
    text: "I work with WebSocket communication and messaging systems such as RabbitMQ.",
  },
  {
    variant: "pink",
    icon: <HeartIcon />,
    number: "04",
    title: "Problem Solver",
    type: "text",
    text: "I enjoy finding simple and effective solutions to complex technical problems.",
  },
  {
    variant: "yellow",
    icon: <CodeIcon />,
    number: "05",
    title: "Database Design",
    type: "text",
    text: "I design PostgreSQL and MongoDB data models that serve applications well.",
  },
  {
    variant: "blue",
    icon: <GlobeIcon />,
    number: "06",
    title: "Based In",
    type: "text",
    text: "Bangalore, Karnataka, India.",
  },
  {
    variant: "pink",
    icon: <CodeIcon />,
    number: "07",
    title: "Recent Project",
    type: "text",
    text: "MERN Real Estate Platform, built with MongoDB, Express.js, React and Node.js.",
  },
  {
    variant: "purple",
    icon: <StarIcon />,
    number: "08",
    title: "Core Strengths",
    type: "checklist",
    items: ["API Design", "Database Modelling", "Messaging Systems", "Clean Code"],
  },
];

// Each card tints itself through CSS variables, which its children read.
const CARD_TINTS = {
  blue: "[--card-tint-bg:rgba(59,130,246,0.08)] [--card-tint-border:rgba(59,130,246,0.18)] [--card-tint-icon-bg:rgba(59,130,246,0.16)] [--card-tint-color:#3b82f6]",
  green: "[--card-tint-bg:rgba(16,185,129,0.08)] [--card-tint-border:rgba(16,185,129,0.18)] [--card-tint-icon-bg:rgba(16,185,129,0.16)] [--card-tint-color:#10b981]",
  purple: "[--card-tint-bg:rgba(139,92,246,0.08)] [--card-tint-border:rgba(139,92,246,0.18)] [--card-tint-icon-bg:rgba(139,92,246,0.16)] [--card-tint-color:#8b5cf6]",
  pink: "[--card-tint-bg:rgba(244,63,94,0.08)] [--card-tint-border:rgba(244,63,94,0.18)] [--card-tint-icon-bg:rgba(244,63,94,0.16)] [--card-tint-color:#f43f5e]",
  yellow: "[--card-tint-bg:rgba(245,158,11,0.1)] [--card-tint-border:rgba(245,158,11,0.2)] [--card-tint-icon-bg:rgba(245,158,11,0.18)] [--card-tint-color:#d97706]",
};

function AboutCard({ card }) {
  return (
    <div className={`relative min-w-0 p-[22px] rounded-[16px] border border-[var(--card-tint-border)] bg-[var(--card-tint-bg)] ${CARD_TINTS[card.variant]}`}>
      <span className="absolute top-[18px] right-[22px] text-[22px] font-extrabold text-[var(--card-tint-color)] opacity-[0.45]">{card.number}</span>
      <span className="flex items-center justify-center w-[42px] h-[42px] rounded-[50%] mb-[14px] bg-[var(--card-tint-icon-bg)] text-[var(--card-tint-color)]">{card.icon}</span>
      <h3 className="text-[16px] m-0 mb-2 pr-[30px]">{card.title}</h3>

      {card.type === "text" && <p className="m-0 text-body text-[14px] leading-[1.6]">{card.text}</p>}

      {card.type === "tags" && (
        <div className="flex flex-wrap gap-2 mt-[2px]">
          {card.tags.map((tag) => (
            <span className="py-[4px] px-[12px] rounded-[999px] text-[12px] font-bold bg-[var(--card-tint-icon-bg)] text-[var(--card-tint-color)]" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {card.type === "list" && (
        <ul className="grid grid-cols-[1fr_1fr] gap-[6px_14px] m-0 p-0 list-none [&_svg]:shrink-0 [&_svg]:text-[var(--card-tint-color)]">
          {card.items.map((item) => (
            <li className="flex items-center gap-[6px] text-body text-[13px]" key={item.label}>
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      )}

      {card.type === "checklist" && (
        <ul className="m-0 p-0 list-none flex flex-col gap-[6px]">
          {card.items.map((item) => (
            <li className="flex items-center gap-2 text-body text-[13.5px] before:content-[''] before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-[var(--card-tint-color)] before:shrink-0" key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function About() {
  return (
    <section className="animate-fade-in relative grid grid-cols-[34fr_66fr] items-start gap-12 p-[32px_max(24px,calc((100%_-_1200px)/2))_60px] box-border max-[980px]:grid-cols-[1fr]">
      <div className="sticky top-[100px] max-[980px]:static">
        <p className="flex items-center gap-[10px] mb-[18px] text-body text-[13px] font-bold tracking-[1.8px] uppercase">
          <span className="w-7 h-[2px] bg-accent" /> More About Me
        </p>
        <h2 className="text-[34px] leading-[1.15] mb-[18px]">
          Know More
          <span className="block text-accent">About Me</span>
        </h2>
        <p className="text-body text-[15px] leading-[1.7] max-w-[340px] mb-8 max-[980px]:max-w-none">
          I'm a backend developer who enjoys designing reliable systems, from
          APIs and databases to IoT and real-time platforms. Here are a few more
          things that shape how I work.
        </p>

        <p className="[transform:rotate(-2deg)] text-heading font-['Segoe_Print','Bradley_Hand',cursive] text-[19px] leading-[1.4] max-w-[260px] m-0 mb-9 ml-[4px] max-[980px]:max-w-none">&ldquo;Small details make big things happen.&rdquo;</p>

        <div className="relative max-w-[260px] max-[980px]:max-w-none">
          <div className="relative [transform:rotate(-3deg)] bg-accent-soft border border-accent-line rounded-[4px] pt-[22px] px-[22px] pb-[26px] shadow-card font-['Segoe_Print','Bradley_Hand',cursive] text-heading text-[17px] leading-[1.6]">
            <span className="absolute top-[-10px] left-[28px] w-[18px] h-[18px] rounded-[50%] bg-[#cbd5e1] shadow-[0_3px_4px_rgba(0,0,0,0.25)] [transform:rotate(35deg)]" aria-hidden="true" />
            Stay Curious
            <br />
            Keep Learning
            <br />
            Make it Happen
            <span className="block mt-2 text-[14px] text-body">— Gnanaguru K</span>
          </div>
          <div className="relative z-[-1] mt-[-18px] ml-auto w-24 [transform:translateX(30%)] max-[980px]:hidden">
            <PlantIllustration />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_1fr] gap-[18px] max-[640px]:grid-cols-[1fr]">
        {CARDS.map((card) => (
          <AboutCard card={card} key={card.number} />
        ))}

        <div className="col-span-full mt-2 flex items-center justify-between gap-4 flex-wrap px-7 py-5 rounded-[14px] bg-accent-soft border border-accent-line max-[640px]:flex-col max-[640px]:text-center">
          <span className="text-accent shrink-0">
            <LeafIcon />
          </span>
          <p className="flex-1 min-w-[200px] text-center italic font-semibold text-heading text-[15px] m-0">
            &ldquo;Better Skills. Brighter Tomorrow.&rdquo;
          </p>
          <span className="inline-flex items-center gap-2 text-accent text-[12px] font-extrabold tracking-[1px] uppercase whitespace-nowrap">
            Keep Growing <ArrowRightIcon />
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;

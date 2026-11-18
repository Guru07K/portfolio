import eduGraphic from "../assets/edu-graphic.png";

const EDUCATION = [
  {
    icon: "cap",
    degree: "MCA",
    field: "Computer Applications",
    institution: "SRM Institute of Science and Technology, Chennai",
    period: "August 2022 – May 2024",
    badge: "CGPA: 8.5",
  },
  {
    icon: "cap",
    degree: "BSc Computer Science",
    field: "Bachelor of Science",
    institution: "The American College, Madurai",
    period: "September 2019 – June 2022",
    badge: "CGPA: 7.7",
  },
];

const ICONS = {
  cap: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    </svg>
  ),
  cert: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  ),
  book: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </svg>
  ),
}

const BuildingIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <line x1="9" y1="8" x2="9" y2="8" />
    <line x1="15" y1="8" x2="15" y2="8" />
    <line x1="9" y1="12" x2="9" y2="12" />
    <line x1="15" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="15" y2="16" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

function Education() {
  return (
    <section className="animate-fade-in relative grid grid-cols-[45fr_55fr] items-center gap-10 p-[32px_max(24px,calc((100%_-_1200px)/2))_60px] overflow-hidden box-border bg-white text-[#17213a] h-[100vh] dark:bg-[#0b0b12] dark:text-[#d7d9e6] max-[900px]:grid-cols-[1fr]">
      <svg
        className="absolute z-0 top-0 left-0 w-[46%] h-full opacity-[0.22] blur-[20px] pointer-events-none"
        viewBox="0 0 700 550"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M700,0
             C 540,10 480,110 330,130
             C 190,150 110,70 0,85
             L 0,240
             C 100,232 190,215 245,248
             C 330,298 385,345 400,425
             C 415,505 300,545 150,550
             L 0,550 L 0,0 Z"
          fill="var(--accent)"
        />
      </svg>

      <div className="relative z-[1]">
        <p className="text-body text-[15px] leading-[1.7] max-w-[320px] mb-7 max-[900px]:max-w-none">
          Here is my academic journey that has shaped my skills and knowledge
          in technology and development.
        </p>
        <blockquote className="relative pl-[18px] border-l-[3px] border-l-accent [border-left-style:solid] max-w-[300px] max-[900px]:max-w-none">
          <p className="mb-[6px] text-heading text-[16px] italic leading-[1.5]">&ldquo;Learning never exhausts the mind.&rdquo;</p>
          <cite className="text-body text-[13px] not-italic">— Leonardo da Vinci</cite>
        </blockquote>

        <img
          src={eduGraphic}
          alt=""
          aria-hidden="true"
          className="block w-[300px] max-w-full mt-8 drop-shadow-[0_20px_25px_rgba(20,18,26,0.15)]"
        />
      </div>

      <div className="relative z-[1] min-w-0 flex flex-col gap-7 before:content-[''] before:absolute before:top-[22px] before:bottom-[22px] before:left-[21px] before:w-[2px] before:bg-line">
        {EDUCATION.map((item) => (
          <div className="relative min-w-0 flex items-start gap-5" key={item.degree}>
            <span className="relative z-[1] shrink-0 w-[44px] h-[44px] rounded-[50%] flex items-center justify-center bg-accent-soft text-accent">{ICONS[item.icon]}</span>
            <span className="absolute top-[20px] left-[44px] w-2 h-2 rounded-[50%] bg-accent" aria-hidden="true" />
            <div className="flex-1 min-w-0 flex items-start justify-between gap-4 bg-card border border-line rounded-[16px] py-[22px] px-6 shadow-card max-[600px]:flex-col">
              <div className="min-w-0 flex-1">
                <h3 className="text-[18px] mb-1">{item.degree}</h3>
                <p className="text-accent text-[14px] font-semibold mb-3">{item.field}</p>
                <div className="flex flex-wrap gap-[4px_20px] [&_svg]:shrink-0 [&_svg]:text-accent">
                  <span className="inline-flex items-center gap-[6px] text-body text-[13px]">
                    <BuildingIcon />
                    {item.institution}
                  </span>
                  <span className="inline-flex items-center gap-[6px] text-body text-[13px]">
                    <CalendarIcon />
                    {item.period}
                  </span>
                </div>
              </div>
              {item.badge && <span className="shrink-0 self-start whitespace-nowrap bg-accent-soft text-accent text-[13px] font-bold py-[6px] px-[14px] rounded-[999px]">{item.badge}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

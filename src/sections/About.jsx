/* ---------- content (factual; edit here) ---------- */

const LOCATION = ["Based in Bangalore, Karnataka", "Originally from Tamil Nadu", "Open to relocating to Chennai"];

const PARAGRAPHS = [
  "I work with Node.js, NestJS, Express.js and TypeScript to build APIs and backend applications. My experience also includes PostgreSQL, REST APIs, GraphQL and AWS integrations.",
  "I've worked on real-world applications across different domains, and I've also explored frontend development with React.js and the MERN stack.",
  "I hold an MCA from SRM Institute of Science and Technology and a BSc in Computer Science from The American College.",
];

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

/* ---------- section ---------- */

function About() {
  return (
    <section className="animate-fade-in relative p-[56px_max(24px,calc((100%_-_1200px)/2))_72px] box-border max-[600px]:px-4 max-[767px]:py-12">
      <div className="max-w-[760px]">
        <p className="flex items-center gap-3 mb-4 text-[12px] font-bold uppercase tracking-[2px] text-body">
          <span className="w-7 h-[2px] rounded-full bg-accent" aria-hidden="true" />
          About Me
        </p>
        <h2 className="text-[clamp(26px,2.6vw,34px)] leading-[1.25] tracking-[-0.02em]">
          Hi, I'm Gnanaguru, a <span className="text-accent">Software Engineer</span>.
        </h2>

        <ul className="m-0 mt-4 p-0 list-none flex flex-wrap items-center gap-y-1.5 text-[14.5px] text-body max-[600px]:flex-col max-[600px]:items-start max-[600px]:text-[14px]">
          {LOCATION.map((item, i) => (
            <li key={item} className="flex items-center">
              {i === 0 ? (
                <span className="mr-2 text-accent flex" aria-hidden="true">
                  <PinIcon />
                </span>
              ) : (
                <span className="mx-3 h-4 w-px bg-line max-[600px]:hidden" aria-hidden="true" />
              )}
              <span className={i === 0 ? "font-semibold text-heading" : "max-[600px]:pl-6"}>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-col gap-4 max-w-[68ch] max-[600px]:mt-6">
          {PARAGRAPHS.map((text) => (
            <p key={text} className="text-body text-[16px] leading-[1.8] max-[600px]:text-[15px] max-[600px]:leading-[1.75]">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

import { formatProjectNumber } from "../../data/projects";
import { TECH_LOGOS } from "../../data/techLogos";
import { ArrowLeftIcon, ExternalLinkIcon, FeatureIcon, GithubIcon } from "./ProjectIcons";
const hasText = (value) => typeof value === "string" && value.trim().length > 0;
const hasItems = (value) => Array.isArray(value) && value.length > 0;
const toParagraphs = (value) => (Array.isArray(value) ? value : hasText(value) ? [value] : []);

function DetailSection({ title, children }) {
  return (
    <section className="mb-9 last:mb-0">
      <h4 className="m-0 mb-4 flex items-center gap-3 text-[11.5px] font-bold uppercase tracking-[1.4px] text-accent">
        {title}
        <span className="flex-1 h-px bg-line" aria-hidden="true" />
      </h4>
      {children}
    </section>
  );
}

function FeatureCard({ feature }) {
  return (
    <li className="flex gap-3 p-4 rounded-[14px] border border-line bg-page">
      <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-[10px] bg-accent-soft text-accent">
        <FeatureIcon name={feature.icon} />
      </span>
      <div className="min-w-0">
        <p className="text-[14px] font-semibold text-heading leading-[1.35]">{feature.title}</p>
        <p className="mt-1 text-[13.5px] leading-[1.6] text-body">{feature.text}</p>
      </div>
    </li>
  );
}

// Technologies without an official logo (e.g. RBAC, cron jobs) are shown by
// name only, rather than with an invented mark.
function TechTile({ name }) {
  const logo = TECH_LOGOS[name];
  if (!logo) {
    return (
      <li className="flex items-center justify-center min-h-[76px] py-3 px-1.5 rounded-[12px] border border-line bg-page text-center">
        <span className="text-[12.5px] font-semibold leading-[1.3] text-heading">{name}</span>
      </li>
    );
  }
  return (
    <li className="flex flex-col items-center justify-start gap-2 min-h-[76px] py-3 px-1.5 rounded-[12px] border border-line bg-page text-center">
      <span className="flex items-center justify-center w-8 h-8">
        <img src={logo.src} alt={`${name} logo`} className={`w-full h-full object-contain ${logo.darkSrc ? "dark:hidden" : ""}`} draggable="false" decoding="async" />
        {logo.darkSrc && (
          <img src={logo.darkSrc} alt={`${name} logo`} className="w-full h-full object-contain hidden dark:block" draggable="false" decoding="async" />
        )}
      </span>
      <span className="text-[11.5px] font-semibold leading-[1.3] text-heading">{name}</span>
    </li>
  );
}

/* Reading view shown inside the card. Only non-empty fields are rendered. */
function ProjectDetails({ project, index, onBack, backButtonRef, scrollRef }) {
  const details = project.details ?? {};
  const links = project.links ?? {};
  const overview = toParagraphs(details.overview);
  const paragraphs = overview.length ? overview : [project.description];
  const hasLinks = hasText(links.live) || hasText(links.source);

  return (
    <div className="project-anim project-anim--view flex flex-col h-full min-h-0">
      <header className="shrink-0 flex items-center gap-4 px-[clamp(18px,3vw,44px)] py-[clamp(14px,2.2vh,22px)] border-b border-line max-[560px]:flex-wrap max-[560px]:gap-3">
        <button
          type="button"
          ref={backButtonRef}
          onClick={onBack}
          className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-line bg-page text-heading text-[14px] font-semibold cursor-pointer transition-[border-color,color] duration-200 hover:border-accent-line hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowLeftIcon />
          Back to preview
        </button>
        <div className="min-w-0 flex items-center gap-3 ml-auto max-[560px]:ml-0 max-[560px]:w-full">
          <span className="text-[13px] font-bold text-accent tabular-nums">{formatProjectNumber(index)}</span>
          <span className="w-6 h-px bg-line" aria-hidden="true" />
          <span className="truncate text-[13px] font-semibold text-body">{project.category}</span>
        </div>
      </header>

      {/*
        Desktop (1024px+): two columns. The left column (title, summary, links)
        stays put; only the right column scrolls. Below 1024px the columns stack
        and the whole body scrolls as one pane. `scrollRef` marks the details
        area; usePinnedProjects lets wheel/touch scroll whichever pane inside it
        can scroll.
      */}
      <div
        ref={scrollRef}
        className="project-details-body flex-1 min-h-0 grid grid-cols-[minmax(0,1fr)] content-start min-[1024px]:grid-cols-[minmax(280px,34fr)_minmax(0,66fr)] min-[1024px]:content-stretch"
      >
        <div className="project-details-aside min-w-0 px-[clamp(18px,3vw,44px)] pt-[clamp(20px,3.5vh,32px)] min-[1024px]:pb-8 min-[1024px]:border-r min-[1024px]:border-line">
          <h3 className="text-heading font-bold tracking-[-0.03em] leading-[1.1] text-[clamp(26px,3vw,40px)]">{project.title}</h3>
          <p className="mt-3 max-w-[70ch] text-[15px] leading-[1.7] text-body">{project.description}</p>

          {hasLinks && (
            <div className="mt-6 flex flex-wrap gap-3">
              {hasText(links.live) && (
                <a href={links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-accent text-white dark:text-[#0b0b10] no-underline text-[14px] font-semibold">
                  <ExternalLinkIcon /> Live Demo
                </a>
              )}
              {hasText(links.source) && (
                <a href={links.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-line text-heading no-underline text-[14px] font-semibold hover:border-accent-line hover:text-accent">
                  <GithubIcon /> Source Code
                </a>
              )}
            </div>
          )}
        </div>

        <div
          tabIndex={0}
          aria-label={`${project.title} details`}
          className="project-details-main min-w-0 focus:outline-none px-[clamp(18px,3vw,44px)] pt-[clamp(24px,4vh,36px)] pb-12 min-[1024px]:pt-[clamp(20px,3.5vh,32px)]"
        >
          {hasItems(project.tech) && (
            <DetailSection title="Technologies Used">
              <ul className="m-0 p-0 list-none grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-2.5">
                {project.tech.map((tech) => (
                  <TechTile key={tech} name={tech} />
                ))}
              </ul>
            </DetailSection>
          )}

          <DetailSection title="Project Overview">
            <div className="flex flex-col gap-3.5">
              {paragraphs.map((text) => (
                <p key={text} className="text-body text-[15px] leading-[1.8] max-w-[72ch]">{text}</p>
              ))}
            </div>
          </DetailSection>

          {hasItems(details.features) && (
            <DetailSection title="Key Features">
              <ul className="m-0 p-0 list-none grid grid-cols-2 gap-3 max-[700px]:grid-cols-1">
                {details.features.map((feature) => (
                  <FeatureCard key={feature.title} feature={feature} />
                ))}
              </ul>
            </DetailSection>
          )}

          {hasItems(details.implementation) && (
            <DetailSection title="Technical Implementation">
              <dl className="m-0 rounded-[14px] border border-line divide-y divide-[var(--border)] overflow-hidden">
                {details.implementation.map((item) => (
                  <div key={item.title} className="grid grid-cols-[200px_minmax(0,1fr)] gap-4 px-4 py-3.5 max-[700px]:grid-cols-1 max-[700px]:gap-1">
                    <dt className="text-[13.5px] font-semibold text-heading">{item.title}</dt>
                    <dd className="m-0 text-[14px] leading-[1.65] text-body">{item.text}</dd>
                  </div>
                ))}
              </dl>
            </DetailSection>
          )}

          {hasItems(details.contributions) && (
            <DetailSection title="My Contributions">
              <ul className="m-0 p-0 list-none flex flex-col gap-3">
                {details.contributions.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-[1.7] text-body">
                    <span className="shrink-0 mt-[3px] flex items-center justify-center w-5 h-5 rounded-full bg-accent-soft text-accent" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </DetailSection>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

import { formatProjectNumber } from "../../data/projects";
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from "./ProjectIcons";

const hasText = (value) => typeof value === "string" && value.trim().length > 0;
const hasItems = (value) => Array.isArray(value) && value.length > 0;

function DetailBlock({ title, children }) {
  return (
    <section className="pb-7 mb-7 border-b border-line last:border-b-0 last:mb-0 last:pb-0">
      <h4 className="m-0 mb-3 text-[11.5px] font-bold uppercase tracking-[1.4px] text-accent">{title}</h4>
      {children}
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="m-0 p-0 list-none flex flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-5 text-body text-[15px] leading-[1.7] before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-[7px] before:h-[7px] before:rounded-full before:bg-accent-line"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

const Paragraph = ({ children }) => <p className="text-body text-[15px] leading-[1.8] max-w-[68ch]">{children}</p>;

/* Reading view shown inside the card. Only non-empty fields are rendered. */
function ProjectDetails({ project, index, onBack, backButtonRef, scrollRef }) {
  const details = project.details ?? {};
  const links = project.links ?? {};
  const overview = hasText(details.overview) ? details.overview : project.description;
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

      <div
        ref={scrollRef}
        tabIndex={0}
        aria-label={`${project.title} details`}
        className="project-scroll-pane flex-1 min-h-0 overflow-y-auto focus:outline-none px-[clamp(18px,3vw,44px)] pt-[clamp(20px,3.5vh,36px)] pb-12"
      >
        <h3 className="text-heading font-bold tracking-[-0.03em] leading-[1.1] text-[clamp(26px,3vw,42px)]">{project.title}</h3>

        <div className="mt-[clamp(20px,3.5vh,36px)] grid grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] gap-[clamp(24px,4vw,64px)] max-[899px]:grid-cols-[minmax(0,1fr)]">
          <div>
            <DetailBlock title="Project Overview">
              <Paragraph>{overview}</Paragraph>
            </DetailBlock>

            {hasText(details.purpose) && (
              <DetailBlock title="Purpose">
                <Paragraph>{details.purpose}</Paragraph>
              </DetailBlock>
            )}

            {hasItems(details.features) && (
              <DetailBlock title="Key Features">
                <BulletList items={details.features} />
              </DetailBlock>
            )}

            {(hasText(details.role) || hasItems(details.responsibilities)) && (
              <DetailBlock title="My Role & Responsibilities">
                {hasText(details.role) && <Paragraph>{details.role}</Paragraph>}
                {hasItems(details.responsibilities) && (
                  <div className={hasText(details.role) ? "mt-4" : ""}>
                    <BulletList items={details.responsibilities} />
                  </div>
                )}
              </DetailBlock>
            )}

            {hasItems(details.contributions) && (
              <DetailBlock title="Technical Contributions">
                <BulletList items={details.contributions} />
              </DetailBlock>
            )}
          </div>

          <aside className="min-w-0">
            {hasItems(details.implementation) && (
              <DetailBlock title="Implementation">
                <dl className="m-0 rounded-[14px] border border-line bg-page divide-y divide-[var(--border)]">
                  {details.implementation.map((group) => (
                    <div key={group.label} className="grid grid-cols-[96px_1fr] gap-3 px-4 py-3">
                      <dt className="text-[13px] font-semibold text-body">{group.label}</dt>
                      <dd className="m-0 text-[13.5px] font-semibold text-heading">{group.items.join(", ")}</dd>
                    </div>
                  ))}
                </dl>
              </DetailBlock>
            )}

            {hasItems(project.tech) && (
              <DetailBlock title="Technologies & Tools">
                <ul className="m-0 p-0 list-none flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li key={tech} className="py-[5px] px-3 rounded-[8px] bg-accent-soft text-accent text-[12.5px] font-semibold">
                      {tech}
                    </li>
                  ))}
                </ul>
              </DetailBlock>
            )}

            {hasLinks && (
              <DetailBlock title="Links">
                <div className="flex flex-wrap gap-3">
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
              </DetailBlock>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

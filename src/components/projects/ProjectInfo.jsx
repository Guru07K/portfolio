import { formatProjectNumber } from "../../data/projects";
import { ArrowRightIcon } from "./ProjectIcons";

// The card shows a short stack summary; the details view lists every technology.
const CARD_TECH_LIMIT = 7;

/* Left column of the presentation: number, category, title, summary, stack. */
function ProjectInfo({ project, index, total, detailsButtonRef, onOpenDetails, animationClass }) {
  return (
    <div className="flex flex-col items-start min-w-0">
      <div className={`project-anim ${animationClass} flex items-end gap-3 mb-[clamp(10px,2vh,22px)] [@media(max-height:660px)]:mb-2 max-[899px]:mb-2.5 [@media(max-width:899px)_and_(max-height:620px)]:mb-1.5`}>
        <span
          className={`project-number block font-semibold leading-[0.9] tracking-[-0.05em] tabular-nums text-[clamp(48px,5.4vw,80px)] [@media(max-height:720px)]:text-[clamp(40px,4.4vw,58px)] [@media(max-height:660px)]:text-[38px] max-[899px]:text-[38px] [@media(max-width:899px)_and_(max-height:620px)]:text-[30px]`}
          aria-hidden="true"
        >
          {formatProjectNumber(index)}
        </span>
        <span className="project-number-total mb-[6px] text-[15px] font-medium text-body tabular-nums opacity-70 max-[899px]:mb-1 max-[899px]:text-[13px]">
          / {formatProjectNumber(total - 1)}
        </span>
      </div>

      <div className={`project-anim ${animationClass} min-w-0 w-full`} style={{ "--project-delay": "60ms" }}>
        <span className="inline-flex items-center gap-2 py-[5px] px-3 rounded-full border border-accent-line bg-accent-soft text-accent text-[11.5px] font-bold uppercase tracking-[1.2px]">
          <span className="w-[6px] h-[6px] rounded-full bg-accent" aria-hidden="true" />
          {project.category}
        </span>

        <h3 className={`mt-[clamp(10px,1.8vh,18px)] text-heading font-bold tracking-[-0.03em] leading-[1.08] text-[clamp(28px,3.1vw,46px)] [@media(max-height:720px)]:text-[clamp(24px,2.5vw,34px)] [@media(max-height:660px)]:text-[24px] [@media(max-height:660px)]:mt-2 max-[899px]:text-[24px] max-[899px]:mt-2.5 [@media(max-width:899px)_and_(max-height:620px)]:text-[20px] [@media(max-width:899px)_and_(max-height:620px)]:mt-2`}>
          {project.title}
        </h3>

        <p className={`mt-[clamp(10px,1.8vh,18px)] max-w-[46ch] text-body text-[clamp(14.5px,1.05vw,16px)] leading-[1.7] line-clamp-4 [@media(max-height:720px)]:line-clamp-3 [@media(max-height:660px)]:line-clamp-2 [@media(max-height:660px)]:mt-2 [@media(max-height:660px)]:text-[14px] max-[899px]:line-clamp-3 max-[899px]:text-[14px] max-[899px]:leading-[1.6] [@media(max-width:899px)_and_(max-height:620px)]:text-[13px] [@media(max-width:899px)_and_(max-height:620px)]:leading-[1.5] [@media(max-width:899px)_and_(max-height:620px)]:mt-1.5`}>
          {project.description}
        </p>
      </div>

      {project.tech.length > 0 && (
        <div className={`project-anim ${animationClass} mt-[clamp(14px,3vh,30px)] w-full [@media(max-height:660px)]:mt-3 max-[899px]:mt-3.5 [@media(max-width:899px)_and_(max-height:700px)]:hidden`} style={{ "--project-delay": "120ms" }}>
          <p className="text-[11.5px] font-bold uppercase tracking-[1.4px] text-heading opacity-80">Technologies Used</p>
          <ul className="m-0 mt-3 p-0 list-none flex flex-wrap gap-2 [@media(max-height:660px)]:mt-2 [@media(max-height:660px)]:max-h-[34px] [@media(max-height:660px)]:overflow-hidden max-[899px]:mt-2 max-[899px]:gap-1.5 max-[899px]:max-h-[56px] max-[899px]:overflow-hidden">
            {project.tech.slice(0, CARD_TECH_LIMIT).map((tech) => (
              <li
                key={tech}
                className="py-[5px] px-3 rounded-[8px] border border-line bg-page text-heading text-[12.5px] font-semibold leading-[1.4] max-[899px]:py-[3px] max-[899px]:px-2.5 max-[899px]:text-[11.5px]"
              >
                {tech}
              </li>
            ))}
            {project.tech.length > CARD_TECH_LIMIT && (
              <li
                className="py-[5px] px-3 rounded-[8px] bg-accent-soft text-accent text-[12.5px] font-semibold leading-[1.4] max-[899px]:py-[3px] max-[899px]:px-2.5 max-[899px]:text-[11.5px]"
                title={project.tech.slice(CARD_TECH_LIMIT).join(", ")}
              >
                +{project.tech.length - CARD_TECH_LIMIT} more
              </li>
            )}
          </ul>
        </div>
      )}

      <div className={`project-anim ${animationClass} mt-[clamp(18px,3.6vh,36px)] [@media(max-height:660px)]:mt-3.5 max-[899px]:mt-4 [@media(max-width:899px)_and_(max-height:620px)]:mt-2.5`} style={{ "--project-delay": "180ms" }}>
        <button
          type="button"
          ref={detailsButtonRef}
          onClick={onOpenDetails}
          className="group inline-flex items-center gap-2.5 h-10 pl-5 pr-1.5 rounded-full border-0 bg-accent text-white dark:text-[#0b0b10] text-[14px] font-semibold cursor-pointer shadow-[0_10px_22px_-12px_var(--accent)] transition-[transform,box-shadow] duration-200 hover:-translate-y-[1px] hover:shadow-[0_14px_26px_-12px_var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Project Details
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[rgba(255,255,255,0.18)] dark:bg-[rgba(11,11,16,0.12)] transition-transform duration-200 group-hover:translate-x-[3px]">
            <ArrowRightIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProjectInfo;

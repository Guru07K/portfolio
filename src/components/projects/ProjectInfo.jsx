import { formatProjectNumber } from "../../data/projects";
import { ArrowRightIcon } from "./ProjectIcons";


/* Left column of the presentation: number, category, title, summary, stack. */
function ProjectInfo({ project, index, total, detailsButtonRef, onOpenDetails, animationClass }) {
  return (
    <div className="flex flex-col items-start min-w-0">
      <div className={`project-anim ${animationClass} flex items-end gap-3 mb-[clamp(10px,2vh,22px)] max-[899px]:mb-2.5`}>
        <span
          className={`project-number block font-extralight leading-[0.85] tracking-[-0.04em] tabular-nums text-[clamp(56px,7vw,104px)] [@media(max-height:720px)]:text-[clamp(44px,5vw,68px)] max-[899px]:text-[40px]`}
          aria-hidden="true"
        >
          {formatProjectNumber(index)}
        </span>
        <span className="mb-[6px] text-[13px] font-semibold text-body tabular-nums opacity-70">
          / {formatProjectNumber(total - 1)}
        </span>
      </div>

      <div className={`project-anim ${animationClass} min-w-0 w-full`} style={{ "--project-delay": "60ms" }}>
        <span className="inline-flex items-center gap-2 py-[5px] px-3 rounded-full border border-accent-line bg-accent-soft text-accent text-[11.5px] font-bold uppercase tracking-[1.2px]">
          <span className="w-[6px] h-[6px] rounded-full bg-accent" aria-hidden="true" />
          {project.category}
        </span>

        <h3 className={`mt-[clamp(10px,1.8vh,18px)] text-heading font-bold tracking-[-0.03em] leading-[1.08] text-[clamp(28px,3.1vw,46px)] [@media(max-height:720px)]:text-[clamp(24px,2.5vw,34px)] max-[899px]:text-[24px] max-[899px]:mt-2.5`}>
          {project.title}
        </h3>

        <p className={`mt-[clamp(10px,1.8vh,18px)] max-w-[46ch] text-body text-[clamp(14.5px,1.05vw,16px)] leading-[1.7] line-clamp-4 [@media(max-height:720px)]:line-clamp-3 max-[899px]:line-clamp-3 max-[899px]:text-[14px] max-[899px]:leading-[1.6]`}>
          {project.description}
        </p>
      </div>

      {project.tech.length > 0 && (
        <div className={`project-anim ${animationClass} mt-[clamp(14px,3vh,30px)] w-full max-[899px]:mt-3.5`} style={{ "--project-delay": "120ms" }}>
          <p className="text-[11.5px] font-bold uppercase tracking-[1.4px] text-heading opacity-80">Technologies Used</p>
          <ul className="m-0 mt-3 p-0 list-none flex flex-wrap gap-2 max-[899px]:mt-2 max-[899px]:gap-1.5 max-[899px]:max-h-[56px] max-[899px]:overflow-hidden">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="py-[5px] px-3 rounded-[8px] border border-line bg-page text-heading text-[12.5px] font-semibold leading-[1.4] max-[899px]:py-[3px] max-[899px]:px-2.5 max-[899px]:text-[11.5px]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={`project-anim ${animationClass} mt-[clamp(18px,3.6vh,36px)] max-[899px]:mt-4`} style={{ "--project-delay": "180ms" }}>
        <button
          type="button"
          ref={detailsButtonRef}
          onClick={onOpenDetails}
          className="group inline-flex items-center gap-3 h-12 pl-6 pr-2 rounded-full border-0 bg-accent text-white dark:text-[#0b0b10] text-[15px] font-semibold cursor-pointer shadow-[0_12px_28px_-12px_var(--accent)] transition-[transform,box-shadow] duration-200 hover:-translate-y-[1px] hover:shadow-[0_16px_32px_-12px_var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent max-[899px]:h-11"
        >
          Project Details
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(255,255,255,0.18)] dark:bg-[rgba(11,11,16,0.12)] transition-transform duration-200 group-hover:translate-x-[3px]">
            <ArrowRightIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

export default ProjectInfo;

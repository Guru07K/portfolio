import { Fragment } from "react";
import { formatProjectNumber } from "../../data/projects";
import { ChevronDownIcon, ChevronUpIcon } from "./ProjectIcons";

const stepButton =
  "flex items-center justify-center w-8 h-8 rounded-full border border-line bg-transparent text-heading cursor-pointer transition-[border-color,color,opacity] duration-200 hover:border-accent-line hover:text-accent disabled:opacity-35 disabled:cursor-default disabled:hover:border-line disabled:hover:text-heading";

/* 01 ━━━ 02 ━━━ 03, with previous / next controls. */
function ProjectIndicator({ projects, activeIndex, onSelect }) {
  return (
    <nav className="flex items-center gap-4 max-[420px]:gap-2.5" aria-label="Project navigation">
      <ol className="m-0 p-0 list-none flex items-center gap-2.5">
        {projects.map((project, i) => (
          <Fragment key={project.id}>
            {i > 0 && (
              <li aria-hidden="true" className="relative w-[clamp(20px,3vw,40px)] h-[2px] rounded-full bg-line overflow-hidden">
                <span
                  className="absolute inset-0 bg-accent origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `scaleX(${i <= activeIndex ? 1 : 0})` }}
                />
              </li>
            )}
            <li>
              <button
                type="button"
                onClick={() => onSelect(i)}
                aria-current={i === activeIndex ? "step" : undefined}
                aria-label={`Project ${formatProjectNumber(i)}: ${project.title}`}
                className={`bg-transparent border-0 p-1 cursor-pointer text-[13px] font-bold tabular-nums tracking-[0.5px] transition-colors duration-200 hover:text-accent ${i === activeIndex ? "text-accent" : "text-body opacity-70"}`}
              >
                {formatProjectNumber(i)}
              </button>
            </li>
          </Fragment>
        ))}
      </ol>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          className={stepButton}
          onClick={() => onSelect(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous project"
        >
          <ChevronUpIcon />
        </button>
        <button
          type="button"
          className={stepButton}
          onClick={() => onSelect(activeIndex + 1)}
          disabled={activeIndex === projects.length - 1}
          aria-label="Next project"
        >
          <ChevronDownIcon />
        </button>
      </div>
    </nav>
  );
}

export default ProjectIndicator;

import { useEffect, useRef, useState } from "react";
import { PROJECTS, formatProjectNumber } from "../data/projects";
import usePinnedProjects from "../components/projects/usePinnedProjects";
import ProjectInfo from "../components/projects/ProjectInfo";
import BrowserPreview from "../components/projects/BrowserPreview";
import ProjectIndicator from "../components/projects/ProjectIndicator";
import ProjectDetails from "../components/projects/ProjectDetails";
import "../components/projects/projects.css";


/*
 * Pinned project presentation: one centred card, one project at a time.
 * Scroll / swipe / arrow keys step through the projects (see usePinnedProjects);
 * "Project Details" swaps the card into a scrollable reading view.
 */
function Projects() {
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const detailsScrollRef = useRef(null);
  const detailsOpenRef = useRef(false);
  const detailsButtonRef = useRef(null);
  const backButtonRef = useRef(null);
  const pendingFocusRef = useRef(null);

  // The project whose details are open. Changing project closes the details.
  const [detailsFor, setDetailsFor] = useState(null);

  const { index, direction, goTo, syncTouchAction } = usePinnedProjects(PROJECTS.length, {
    trackRef,
    stageRef,
    detailsScrollRef,
    detailsOpenRef,
  });

  const project = PROJECTS[index];
  const detailsOpen = detailsFor === index;

  useEffect(() => {
    detailsOpenRef.current = detailsOpen;
    syncTouchAction();
    const target = pendingFocusRef.current === "back" ? backButtonRef : pendingFocusRef.current === "details" ? detailsButtonRef : null;
    target?.current?.focus({ preventScroll: true });
    pendingFocusRef.current = null;
  }, [detailsOpen, syncTouchAction]);

  const openDetails = () => {
    pendingFocusRef.current = "back";
    setDetailsFor(index);
  };

  const closeDetails = () => {
    pendingFocusRef.current = "details";
    setDetailsFor(null);
  };

  useEffect(() => {
    if (!detailsOpen) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") {
        pendingFocusRef.current = "details";
        setDetailsFor(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [detailsOpen]);

  const forward = direction > 0;
  const infoAnimation = forward ? "project-anim--next" : "project-anim--prev";
  const previewAnimation = forward ? "project-anim--preview-next" : "project-anim--preview-prev";

  return (
    <section
      ref={trackRef}
      aria-labelledby="projects-title"
      className="relative"
      style={{ height: `calc((100svh - var(--header-height)) * ${PROJECTS.length})` }}
    >
      <div
        ref={stageRef}
        className="sticky top-[var(--header-height)] h-[calc(100svh_-_var(--header-height))] flex items-center justify-center p-[clamp(14px,4vw,44px)] overflow-x-clip"
      >
        <span
          className="absolute w-[460px] h-[460px] top-[-120px] right-[-140px] rounded-full bg-accent opacity-[0.08] blur-[80px] pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute w-[360px] h-[360px] bottom-[-160px] left-[-120px] rounded-full bg-accent opacity-[0.07] blur-[80px] pointer-events-none"
          aria-hidden="true"
        />

        <article className="relative w-full max-w-[1360px] h-full min-[900px]:max-h-[860px] rounded-[clamp(20px,2vw,30px)] border border-line bg-card shadow-card overflow-hidden">
          <p className="sr-only" aria-live="polite">
            {`Project ${index + 1} of ${PROJECTS.length}: ${project.title}${detailsOpen ? ", details" : ""}`}
          </p>

          {detailsOpen ? (
            <ProjectDetails
              key={`details-${project.id}`}
              project={project}
              index={index}
              onBack={closeDetails}
              backButtonRef={backButtonRef}
              scrollRef={detailsScrollRef}
            />
          ) : (
            <div
              key="presentation"
              className={`project-anim project-anim--view grid h-full min-h-0 grid-rows-[auto_minmax(140px,1fr)_auto] min-[900px]:grid-cols-[46fr_54fr] min-[1200px]:grid-cols-[40fr_60fr] min-[900px]:grid-rows-[minmax(0,1fr)_auto]`}
            >
              {/* Project information */}
              <div className={`min-h-0 min-w-0 flex flex-col px-[clamp(20px,3.4vw,56px)] pt-[clamp(18px,4vh,44px)] min-[900px]:col-start-1 min-[900px]:row-start-1`}>
                <h2
                  id="projects-title"
                  className="shrink-0 flex items-center gap-3 text-[11.5px] font-bold uppercase tracking-[2px] text-body"
                >
                  <span className="w-7 h-[2px] rounded-full bg-accent" aria-hidden="true" />
                  Featured Projects
                </h2>
                <div className="flex-1 min-h-0 flex flex-col justify-center py-[clamp(12px,3vh,28px)] max-[899px]:pb-3">
                  <ProjectInfo
                    key={project.id}
                    project={project}
                    index={index}
                    total={PROJECTS.length}
                    detailsButtonRef={detailsButtonRef}
                    onOpenDetails={openDetails}
                    animationClass={infoAnimation}
                  />
                </div>
              </div>

              {/* Browser-framed screenshot */}
              <div
                className={`min-h-0 min-w-0 px-[clamp(14px,3vw,20px)] pb-[clamp(10px,2vh,16px)] min-[900px]:col-start-2 min-[900px]:row-start-1 min-[900px]:row-span-2 min-[900px]:p-[clamp(20px,2.6vw,40px)] min-[900px]:border-l min-[900px]:border-line min-[900px]:bg-page min-[900px]:bg-[radial-gradient(110%_80%_at_100%_0%,var(--accent-bg),transparent_55%)]`}
              >
                <div key={project.id} className={`project-anim ${previewAnimation} h-full`} style={{ "--project-delay": "40ms" }}>
                  <BrowserPreview screenshot={project.screenshot} />
                </div>
              </div>

              {/* Navigation */}
              <div
                className={`flex items-center justify-between gap-4 px-[clamp(20px,3.4vw,56px)] py-[clamp(12px,2.6vh,26px)] border-t border-line min-[900px]:col-start-1 min-[900px]:row-start-2`}
              >
                <ProjectIndicator projects={PROJECTS} activeIndex={index} onSelect={goTo} />
                <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-body opacity-60 tabular-nums max-[480px]:hidden">
                  {formatProjectNumber(index)} / {formatProjectNumber(PROJECTS.length - 1)}
                </span>
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export default Projects;

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../data/projects";
import usePinnedProjects from "../components/projects/usePinnedProjects";
import ProjectInfo from "../components/projects/ProjectInfo";
import BrowserPreview from "../components/projects/BrowserPreview";
import ProjectIndicator from "../components/projects/ProjectIndicator";
import ProjectDetails from "../components/projects/ProjectDetails";
import ProjectTypeBadge from "../components/projects/ProjectTypeBadge";
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
  const isCompany = project.type === "company";

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
      data-scroll-skip
      aria-labelledby="projects-title"
      className="relative"
      style={{ height: `calc((100svh - var(--header-height)) * ${PROJECTS.length})` }}
    >
      <div
        ref={stageRef}
        className="sticky top-[var(--header-height)] h-[calc(100svh_-_var(--header-height))] flex items-center justify-center p-[clamp(14px,4vw,44px)] pt-[clamp(26px,4vw,44px)] overflow-x-clip"
      >
        <span
          className="absolute w-[460px] h-[460px] top-[-120px] right-[-140px] rounded-full bg-accent opacity-[0.08] blur-[80px] pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute w-[360px] h-[360px] bottom-[-160px] left-[-120px] rounded-full bg-accent opacity-[0.07] blur-[80px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Wrapper without overflow clipping, so the type badge can sit on the card's top edge. */}
        <div className="relative w-full max-w-[1360px] h-full min-[900px]:max-h-[860px]">
        <div
          key={`badge-${project.type}`}
          className="project-anim project-anim--view absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <ProjectTypeBadge type={project.type} size="lg" />
        </div>
        <article
          className={`relative w-full h-full rounded-[clamp(20px,2vw,30px)] border bg-card overflow-hidden transition-[border-color,box-shadow] duration-500 ${isCompany ? "border-accent-line shadow-[0_0_0_1px_var(--accent-bg),0_24px_60px_-28px_var(--accent)]" : "border-line shadow-card"}`}
        >
          {/* Company projects get a highlighted card: accent border, top bar and tint. */}
          <span
            className={`absolute inset-x-0 top-0 z-[2] h-[3px] bg-[linear-gradient(90deg,var(--accent),#38bdf8)] pointer-events-none transition-opacity duration-500 ${isCompany ? "opacity-100" : "opacity-0"}`}
            aria-hidden="true"
          />
          <h2 id="projects-title" className="sr-only">Featured Projects</h2>
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
              className={`project-anim project-anim--view grid h-full min-h-0 grid-cols-[minmax(0,1fr)] grid-rows-[auto_minmax(140px,1fr)_auto] [@media(max-width:899px)_and_(max-height:620px)]:grid-rows-[auto_minmax(112px,1fr)_auto] min-[900px]:grid-cols-[46fr_54fr] min-[1200px]:grid-cols-[40fr_60fr] min-[900px]:grid-rows-[minmax(0,1fr)_auto]`}
            >
              {/* Project information */}
              <div
                className={`min-h-0 min-w-0 flex flex-col px-[clamp(20px,3.4vw,56px)] pt-[clamp(10px,2vh,24px)] min-[900px]:col-start-1 min-[900px]:row-start-1 ${isCompany ? "bg-[linear-gradient(180deg,var(--accent-bg),transparent_55%)]" : ""}`}
              >
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
                <ProjectIndicator projects={PROJECTS} activeIndex={index} onSelect={goTo} />              </div>
            </div>
          )}
        </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;

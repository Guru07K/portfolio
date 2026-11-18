/*
 * Direct navigation to a page section (navbar, "Let's Connect", ...).
 *
 * Some sections take over scrolling while pinned (e.g. Projects steps through
 * its projects as you scroll). They are marked with `data-scroll-skip`.
 * A smooth scroll that passes through such a section would play its whole
 * sequence, so the part of the journey that crosses it is skipped with an
 * instant jump, and the remaining distance is scrolled smoothly.
 * Navigating *to* such a section always enters it at its first step.
 */

function headerHeight() {
  const value = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"));
  return Number.isFinite(value) ? value : 0;
}

const absTop = (element) => element.getBoundingClientRect().top + window.scrollY;

const jumpTo = (top) => {
  const y = Math.max(0, Math.round(top));
  window.scrollTo({ top: y, behavior: "instant" });
  return y;
};

export function scrollToSection(target) {
  if (!target) return;
  const header = headerHeight();
  const viewport = window.innerHeight;
  const goal = Math.max(0, Math.round(absTop(target) - header));
  let position = window.scrollY;

  for (const pinned of document.querySelectorAll("[data-scroll-skip]")) {
    const top = absTop(pinned);
    const bottom = top + pinned.offsetHeight;
    // Scroll positions at which any part of the pinned section is on screen.
    const visibleFrom = top - viewport;
    const visibleTo = bottom - header;

    if (target === pinned || target.contains(pinned) || pinned.contains(target)) {
      // Arriving from below (or from inside): re-enter from just above so the
      // section starts at its first step instead of rewinding through it. The
      // jump lands with the section fully off screen, so it resets to its first
      // step before it becomes visible.
      if (position > goal + 1) position = jumpTo(goal - viewport);
      continue;
    }

    const low = Math.min(position, goal);
    const high = Math.max(position, goal);
    if (high > visibleFrom && low < visibleTo) {
      position = jumpTo(goal > position ? Math.max(position, visibleTo) : Math.min(position, visibleFrom));
    }
  }

  window.scrollTo({ top: goal, behavior: "smooth" });
}

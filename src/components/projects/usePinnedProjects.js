import { useCallback, useEffect, useRef, useState } from "react";

/*
 * Pinned, step-by-step project navigation.
 *
 * The section ("track") is `count` stage-heights tall and holds a sticky stage.
 * While the stage is pinned, each project owns one stage-height of scroll, so
 * the scroll position and the active project always agree. Wheel, touch and
 * keyboard input inside the pinned range is turned into single, discrete steps
 * (one gesture = one project). At the first and last project the input is let
 * through, so normal page scrolling resumes. Jumps inside the pinned range are
 * invisible because the stage is sticky; only the content transition is seen.
 */

const LOCK_MS = 750; // minimum time between two steps
const GESTURE_GAP_MS = 180; // wheel silence that marks the start of a new gesture
const TOUCH_THRESHOLD = 42; // px of swipe needed for a step
const EDGE = 2; // px tolerance for "pinned" checks

const FORWARD_KEYS = new Set(["ArrowDown", "PageDown"]);
const BACKWARD_KEYS = new Set(["ArrowUp", "PageUp"]);

function readHeaderHeight() {
  const value = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--header-height"),
  );
  return Number.isFinite(value) ? value : 0;
}

function normalizeWheelDelta(event) {
  if (event.deltaMode === 1) return event.deltaY * 16;
  if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
  return event.deltaY;
}

function canScrollInside(element, direction) {
  if (!element) return false;
  if (direction > 0) return element.scrollTop + element.clientHeight < element.scrollHeight - 1;
  return element.scrollTop > 0;
}

/*
 * The details view may contain more than one scroll pane (e.g. a fixed left
 * column and a scrolling right column). Walk up from the event target to the
 * details root and report whether any scrollable element on the way can
 * still move in `direction`.
 */
function canScrollWithin(root, target, direction) {
  if (!root || !(target instanceof Element) || !root.contains(target)) return false;
  for (let el = target; el; el = el.parentElement) {
    const { overflowY } = getComputedStyle(el);
    if ((overflowY === "auto" || overflowY === "scroll") && canScrollInside(el, direction)) return true;
    if (el === root) break;
  }
  return false;
}

const supportsTouchAction = (value) =>
  typeof CSS !== "undefined" && typeof CSS.supports === "function" && CSS.supports("touch-action", value);

const pickTouchAction = (...candidates) => candidates.find(supportsTouchAction) ?? "";

/*
 * Declarative touch policy for the pinned stage. preventDefault() alone is not
 * enough on mobile: Chrome may scroll on the compositor while the main thread
 * renders a transition. touch-action tells the browser up front which native
 * pans are allowed, so only the "release" direction scrolls the page.
 * Browsers without pan-up / pan-down fall back to pan-y + preventDefault().
 */
function touchActionFor({ pinned, details, index, count }) {
  if (!pinned || count < 2) return "";
  if (details) return pickTouchAction("pinch-zoom", "none");
  if (index === 0) return pickTouchAction("pan-up pinch-zoom", "pan-up", "pan-y");
  if (index === count - 1) return pickTouchAction("pan-down pinch-zoom", "pan-down", "pan-y");
  return pickTouchAction("pinch-zoom", "none");
}

function isEditable(target) {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName);
}

export default function usePinnedProjects(count, { trackRef, stageRef, detailsScrollRef, detailsOpenRef }) {
  const [state, setState] = useState({ index: 0, direction: 1 });
  const indexRef = useRef(0);
  const gestureRef = useRef({ lastTime: 0, lastAbs: 0, dir: 0, consumed: false, lockUntil: 0 });

  const measure = useCallback(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return null;
    const top = readHeaderHeight();
    const height = stage.offsetHeight;
    const rect = track.getBoundingClientRect();
    const pinned = rect.top <= top + EDGE && rect.bottom >= top + height - EDGE;
    return { top, height, rect, pinned, absTop: rect.top + window.scrollY };
  }, [trackRef, stageRef]);

  const setIndex = useCallback((next) => {
    const previous = indexRef.current;
    if (next === previous) return;
    indexRef.current = next;
    setState({ index: next, direction: next > previous ? 1 : -1 });
  }, []);

  const syncTouchAction = useCallback(() => {
    const stage = stageRef.current;
    const m = measure();
    if (!stage || !m) return;
    const value = touchActionFor({
      pinned: m.pinned,
      details: detailsOpenRef.current,
      index: indexRef.current,
      count,
    });
    if (stage.style.touchAction !== value) stage.style.touchAction = value;
  }, [count, measure, stageRef, detailsOpenRef]);

  // Moves to a project and aligns the scroll position with its slot.
  const goTo = useCallback(
    (next) => {
      const target = Math.max(0, Math.min(count - 1, next));
      setIndex(target);
      const m = measure();
      if (!m) return;
      window.scrollTo({ top: Math.round(m.absTop - m.top + target * m.height), behavior: "instant" });
    },
    [count, measure, setIndex],
  );

  useEffect(() => {
    const gesture = gestureRef.current;
    let touch = null;

    const lock = () => {
      gesture.lockUntil = performance.now() + LOCK_MS;
      gesture.consumed = true;
    };

    // Keeps the active project in sync with the scroll position (scrollbar
    // drags, navbar jumps, anchor links, momentum scrolling on touch devices).
    const handleScroll = () => {
      const m = measure();
      if (!m || m.height === 0) return;
      const progress = (m.top - m.rect.top) / m.height;
      setIndex(Math.max(0, Math.min(count - 1, Math.round(progress))));
      syncTouchAction();
    };

    const handleWheel = (event) => {
      if (event.ctrlKey) return; // pinch-zoom
      const dy = normalizeWheelDelta(event);
      if (dy === 0 || Math.abs(event.deltaX) > Math.abs(dy)) return;

      // event.timeStamp is when the input happened, so a busy main thread
      // (e.g. during a transition) can't make queued momentum events look
      // like a pause between two gestures.
      const now = event.timeStamp || performance.now();
      const abs = Math.abs(dy);
      const dir = Math.sign(dy);
      // A pause, a direction change or a fresh acceleration starts a new
      // gesture; trackpad momentum (decaying deltas) never does.
      if (now - gesture.lastTime > GESTURE_GAP_MS || dir !== gesture.dir || abs > gesture.lastAbs * 1.5 + 4) {
        gesture.consumed = false;
      }
      gesture.lastTime = now;
      gesture.lastAbs = abs;
      gesture.dir = dir;

      const m = measure();
      if (!m) return;

      if (!m.pinned) {
        // Catch the section when a scroll would carry it past its pin point,
        // so arriving always lands on Project 01 (from above) or 03 (from below).
        const pinLine = m.top + EDGE;
        const bottomLine = m.top + m.height - EDGE;
        const fromAbove = dir > 0 && m.rect.top > pinLine && m.rect.top - dy <= pinLine;
        const fromBelow = dir < 0 && m.rect.bottom < bottomLine && m.rect.bottom - dy >= bottomLine;
        if (fromAbove || fromBelow) {
          event.preventDefault();
          goTo(fromAbove ? 0 : count - 1);
          lock();
        }
        return;
      }

      if (detailsOpenRef.current) {
        // Reading view: the details pane scrolls; nothing else moves.
        const pane = detailsScrollRef.current;
        if (canScrollWithin(pane, event.target, dir)) return;
        event.preventDefault();
        return;
      }

      if (now < gesture.lockUntil || gesture.consumed) {
        event.preventDefault();
        return;
      }

      const target = indexRef.current + dir;
      if (target < 0 || target >= count) return; // release to the page
      event.preventDefault();
      goTo(target);
      lock();
    };

    const handleTouchStart = (event) => {
      if (event.touches.length !== 1) {
        touch = null;
        return;
      }
      const pane = detailsScrollRef.current;
      touch = {
        y: event.touches[0].clientY,
        consumed: false,
        inPane: Boolean(pane && pane.contains(event.target)),
      };
    };

    const handleTouchMove = (event) => {
      if (!touch || event.touches.length !== 1) return;
      const m = measure();
      if (!m || !m.pinned) return;

      const dy = touch.y - event.touches[0].clientY;
      if (dy === 0) return;
      const dir = Math.sign(dy);

      if (detailsOpenRef.current) {
        if (touch.inPane) return; // native scrolling inside the details pane
        if (event.cancelable) event.preventDefault();
        return;
      }

      if (touch.consumed) {
        if (event.cancelable) event.preventDefault();
        return;
      }

      const target = indexRef.current + dir;
      if (target < 0 || target >= count) return; // release to the page
      if (event.cancelable) event.preventDefault();
      if (Math.abs(dy) >= TOUCH_THRESHOLD && performance.now() >= gesture.lockUntil) {
        goTo(target);
        touch.consumed = true;
        gesture.lockUntil = performance.now() + LOCK_MS;
      }
    };

    const handleTouchEnd = () => {
      touch = null;
    };

    const handleKeyDown = (event) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
      if (isEditable(event.target)) return;

      let dir = 0;
      if (FORWARD_KEYS.has(event.key)) dir = 1;
      else if (BACKWARD_KEYS.has(event.key)) dir = -1;
      else if (event.key === " " && !(event.target instanceof HTMLButtonElement)) dir = event.shiftKey ? -1 : 1;
      if (!dir) return;

      const m = measure();
      if (!m || !m.pinned) return;

      if (detailsOpenRef.current) {
        const pane = detailsScrollRef.current;
        if (pane && pane.contains(event.target)) return;
        event.preventDefault();
        return;
      }

      const target = indexRef.current + dir;
      if (target < 0 || target >= count) return;
      event.preventDefault();
      if (performance.now() < gesture.lockUntil) return;
      goTo(target);
      gesture.lockUntil = performance.now() + LOCK_MS;
    };

    // Keep the current project aligned when the stage height changes.
    const handleResize = () => {
      const m = measure();
      if (m && m.pinned) goTo(indexRef.current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [count, measure, goTo, setIndex, syncTouchAction, detailsScrollRef, detailsOpenRef]);

  // `syncTouchAction` must be called when the details view opens or closes.
  return { index: state.index, direction: state.direction, goTo, syncTouchAction };
}

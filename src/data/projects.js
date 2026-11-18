/**
 * Single source of truth for the Projects showcase.
 *
 * Screenshots
 * -----------
 * Each project's preview image is configured in `screenshot.src`. The current
 * files in /public/projects/ are placeholders. To use a real screenshot, drop
 * the image into /public/projects/ and change only the `src` (and `alt`) here.
 * Images fill the browser frame with `object-fit: cover`, anchored to the top,
 * so a 16:10 capture (e.g. 1600x1000) fits best.
 *
 * Details view
 * ------------
 * Every field under `details` is optional. Empty fields are not rendered, so
 * only add information that is accurate.
 *
 * Placeholder entries
 * -------------------
 * Projects 02 and 03 are placeholders (`placeholder: true`). The portfolio
 * currently lists only one real project. Replace these two entries with your
 * actual projects.
 */

export const PROJECTS = [
  {
    id: "mern-real-estate",
    category: "Web Application",
    title: "MERN Real Estate Platform",
    description:
      "A real estate platform built with the MERN stack, using MongoDB, Express.js, React and Node.js.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
    screenshot: {
      src: "/projects/project-01.svg",
      alt: "Placeholder preview of a real estate listings application",
      address: "real-estate-platform",
    },
    details: {
      overview:
        "A real estate platform built with the MERN stack, using MongoDB, Express.js, React and Node.js.",
      purpose: "",
      features: [],
      role: "",
      responsibilities: [],
      implementation: [
        { label: "Frontend", items: ["React"] },
        { label: "Backend", items: ["Node.js", "Express.js"] },
        { label: "Database", items: ["MongoDB"] },
        { label: "Language", items: ["JavaScript"] },
      ],
      contributions: [],
    },
    links: { live: "", source: "" },
  },
  {
    // TODO: replace with your second project.
    id: "project-02",
    placeholder: true,
    category: "Coming Soon",
    title: "Upcoming Project",
    description: "Details for this project will be added soon.",
    tech: [],
    screenshot: {
      src: "/projects/project-02.svg",
      alt: "Placeholder preview of an analytics dashboard",
      address: "project-02",
    },
    details: {
      overview: "Details for this project will be added soon.",
    },
    links: {},
  },
  {
    // TODO: replace with your third project.
    id: "project-03",
    placeholder: true,
    category: "Coming Soon",
    title: "Upcoming Project",
    description: "Details for this project will be added soon.",
    tech: [],
    screenshot: {
      src: "/projects/project-03.svg",
      alt: "Placeholder preview of an API console",
      address: "project-03",
    },
    details: {
      overview: "Details for this project will be added soon.",
    },
    links: {},
  },
];

export const formatProjectNumber = (index) => String(index + 1).padStart(2, "0");

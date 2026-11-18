/**
 * Work history. Every duration is calculated from the dates below, so it stays
 * current without edits. Months are counted inclusively (Apr 2025 – May 2026 is
 * 1 year 2 months). `end: null` means "Present".
 */

export const EXPERIENCE = [
  {
    id: "things-alive",
    icon: "building",
    role: "Backend Developer",
    company: "Things Alive Solutions",
    start: { year: 2026, month: 7 },
    end: null,
    location: "Bangalore",
    summary:
      "Building backend APIs and services for IoT platforms, including device telemetry processing, dashboard and KPI services, and real-time communication.",
    responsibilities: [
      "Building backend APIs and services.",
      "Working on IoT platforms.",
      "Processing device telemetry and sensor data.",
      "Developing dashboard and KPI backend services.",
      "Working with real-time communication.",
      "Working with messaging systems.",
      "Designing and maintaining PostgreSQL-based backend systems.",
    ],
    technologies: ["NestJS", "TypeScript", "Node.js", "PostgreSQL", "RabbitMQ", "Redis", "WebSocket", "TypeORM"],
  },
  {
    id: "energetics-blackdart",
    icon: "briefcase",
    role: "Software Engineer I",
    company: "Energetics.ai Pvt Ltd & Blackdart Labs Pvt Ltd",
    start: { year: 2025, month: 4 },
    end: { year: 2026, month: 5 },
    location: "Chennai",
    summary:
      "Worked on REST API development using Node.js, TypeScript and Express.js, with PostgreSQL and MongoDB for data storage.",
    responsibilities: [],
    technologies: ["Node.js", "TypeScript", "Express.js", "REST APIs", "GraphQL", "AWS", "PostgreSQL", "MongoDB", "Git"],
  },
  {
    id: "zoho",
    icon: "cap",
    role: "Software Developer Intern",
    company: "ZOHO Corporation",
    start: { year: 2024, month: 10 },
    end: { year: 2025, month: 3 },
    location: "Srivilliputhur, Tamil Nadu",
    summary: "Internship as a Software Developer at ZOHO Corporation.",
    responsibilities: [],
    technologies: [],
  },
];

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const toIndex = ({ year, month }) => year * 12 + (month - 1);

const currentMonth = (now = new Date()) => ({ year: now.getFullYear(), month: now.getMonth() + 1 });

/** Inclusive number of months between start and end (or today). */
export function monthsBetween(start, end, now = new Date()) {
  return toIndex(end ?? currentMonth(now)) - toIndex(start) + 1;
}

/** "1 year 2 months", "5 months", "2 years". */
export function formatDuration(totalMonths) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (months || !years) parts.push(`${months} ${months === 1 ? "month" : "months"}`);
  return parts.join(" ");
}

/** "April 2025 – May 2026" / "July 2026 – Present". */
export function formatPeriod(start, end) {
  const label = ({ year, month }) => `${MONTH_NAMES[month - 1]} ${year}`;
  return `${label(start)} – ${end ? label(end) : "Present"}`;
}

/** Duration of one role, e.g. "1 year 2 months". */
export const roleDuration = (item, now) => formatDuration(monthsBetween(item.start, item.end, now));

/**
 * Total experience across all roles (internship included), counting each month
 * once even if roles overlap.
 */
export function totalExperienceMonths(items = EXPERIENCE, now = new Date()) {
  const months = new Set();
  for (const item of items) {
    const from = toIndex(item.start);
    const to = toIndex(item.end ?? currentMonth(now));
    for (let m = from; m <= to; m += 1) months.add(m);
  }
  return months.size;
}

/** Short label for the total, e.g. "2+" years (or "8" months under a year). */
export function totalExperienceLabel(now = new Date()) {
  const months = totalExperienceMonths(EXPERIENCE, now);
  if (months < 12) return { value: `${months}`, unit: months === 1 ? "month" : "months" };
  const years = Math.floor(months / 12);
  return { value: months % 12 ? `${years}+` : `${years}`, unit: years === 1 && months % 12 === 0 ? "year" : "years" };
}

const iconProps = (size) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
});

const BuildingIcon = ({ size }) => (
  <svg {...iconProps(size)}>
    <rect x="4" y="3" width="16" height="18" rx="1.5" />
    <path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" />
  </svg>
);

const UserIcon = ({ size }) => (
  <svg {...iconProps(size)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const SIZES = {
  md: { box: "gap-1.5 py-[5px] px-3 text-[11.5px]", icon: 12 },
  lg: { box: "gap-2 py-2 px-4 text-[12px] max-[480px]:py-1.5 max-[480px]:px-3 max-[480px]:text-[11px]", icon: 14 },
};

/*
 * "Company Project" (highlighted) or "Personal Project" label. Backgrounds are
 * opaque so the badge can sit on top of the card's border.
 */
function ProjectTypeBadge({ type, size = "md" }) {
  const { box, icon } = SIZES[size] ?? SIZES.md;
  const base = `inline-flex items-center whitespace-nowrap rounded-full font-bold uppercase tracking-[1.2px] ${box}`;
  if (type === "company") {
    return (
      <span className={`${base} bg-[linear-gradient(120deg,var(--accent),#38bdf8)] text-white dark:text-[#0b0b10] shadow-[0_8px_20px_-8px_var(--accent)]`}>
        <BuildingIcon size={icon} />
        Company Project
      </span>
    );
  }
  return (
    <span className={`${base} border border-line bg-card text-body shadow-card`}>
      <UserIcon size={icon} />
      Personal Project
    </span>
  );
}

export default ProjectTypeBadge;

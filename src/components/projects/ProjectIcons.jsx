const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ArrowRightIcon = () => (
  <svg {...base}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const ArrowLeftIcon = () => (
  <svg {...base}>
    <path d="M19 12H5" />
    <path d="m11 18-6-6 6-6" />
  </svg>
);

export const ChevronUpIcon = () => (
  <svg {...base}>
    <path d="m6 15 6-6 6 6" />
  </svg>
);

export const ChevronDownIcon = () => (
  <svg {...base}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const LockIcon = () => (
  <svg {...base} width={11} height={11} strokeWidth={2.4}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

export const ExternalLinkIcon = () => (
  <svg {...base}>
    <path d="M14 4h6v6" />
    <path d="M20 4 10 14" />
    <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
  </svg>
);

export const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.51v-1.98c-2.93.64-3.55-1.24-3.55-1.24-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.61 2.46 1.15 3.06.88.1-.68.37-1.15.67-1.42-2.34-.27-4.8-1.17-4.8-5.21 0-1.15.41-2.09 1.09-2.83-.11-.27-.47-1.36.1-2.83 0 0 .89-.29 2.91 1.08a10 10 0 0 1 5.3 0c2.02-1.37 2.91-1.08 2.91-1.08.57 1.47.21 2.56.1 2.83.68.74 1.09 1.68 1.09 2.83 0 4.05-2.47 4.94-4.82 5.2.38.33.72.97.72 1.96v2.9c0 .28.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z" />
  </svg>
);

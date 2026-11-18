import { PROFILE } from "../data/profile";

const iconProps = {
  width: 17,
  height: 17,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const GitHubIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.51v-1.98c-2.93.64-3.55-1.24-3.55-1.24-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.61 2.46 1.15 3.06.88.1-.68.37-1.15.67-1.42-2.34-.27-4.8-1.17-4.8-5.21 0-1.15.41-2.09 1.09-2.83-.11-.27-.47-1.36.1-2.83 0 0 .89-.29 2.91 1.08a10 10 0 0 1 5.3 0c2.02-1.37 2.91-1.08 2.91-1.08.57 1.47.21 2.56.1 2.83.68.74 1.09 1.68 1.09 2.83 0 4.05-2.47 4.94-4.82 5.2.38.33.72.97.72 1.96v2.9c0 .28.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg {...iconProps} fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
  </svg>
);

const MailIcon = () => (
  <svg {...iconProps} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const LINKS = [
  { label: "GitHub", href: PROFILE.github, icon: <GitHubIcon />, external: true },
  { label: "LinkedIn", href: PROFILE.linkedin, icon: <LinkedInIcon />, external: true },
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: <MailIcon />, external: false },
];

/* Minimal personal footer: credit, tagline and social links. */
function Footer() {
  return (
    <footer className="border-t border-line bg-white dark:bg-[#0b0b12]">
      <div className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-6 py-6 px-[max(24px,calc((100%_-_1200px)/2))] max-[760px]:grid-cols-1 max-[760px]:justify-items-center max-[760px]:gap-3 max-[760px]:py-7 max-[760px]:text-center max-[400px]:px-4">
        <p className="text-[13.5px] text-body">
          Designed &amp; Built by <span className="font-semibold text-heading">{PROFILE.name}</span>
        </p>

        <p className="text-[13px] text-body opacity-80 max-[760px]:order-3">
          Building reliable software, one solution at a time.
        </p>

        <ul className="m-0 p-0 list-none flex items-center gap-2 justify-self-end max-[760px]:justify-self-center">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={link.label}
                title={link.label}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-line text-body transition-[color,border-color,background-color,transform] duration-200 hover:text-accent hover:border-accent-line hover:bg-accent-soft hover:-translate-y-[2px]"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

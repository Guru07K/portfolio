import { useState } from "react";

const CONTACT_EMAIL = "gnanaguru704@gmail.com";
const MESSAGE_LIMIT = 500;

const QUICK_INFO = [
  {
    title: "Job Opportunities",
    sub: "Let's work together",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    title: "Project Discussion",
    sub: "Have an idea?",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
      </svg>
    ),
  },
  {
    title: "Networking",
    sub: "Let's connect",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.51v-1.98c-2.93.64-3.55-1.24-3.55-1.24-.48-1.22-1.17-1.55-1.17-1.55-.96-.65.07-.64.07-.64 1.06.07 1.62 1.09 1.62 1.09.94 1.61 2.46 1.15 3.06.88.1-.68.37-1.15.67-1.42-2.34-.27-4.8-1.17-4.8-5.21 0-1.15.41-2.09 1.09-2.83-.11-.27-.47-1.36.1-2.83 0 0 .89-.29 2.91 1.08a10 10 0 0 1 5.3 0c2.02-1.37 2.91-1.08 2.91-1.08.57 1.47.21 2.56.1 2.83.68.74 1.09 1.68 1.09 2.83 0 4.05-2.47 4.94-4.82 5.2.38.33.72.97.72 1.96v2.9c0 .28.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z" />
  </svg>
);

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </svg>
);

const PersonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);

const TagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M20.6 12.6 12.6 20.6a2 2 0 0 1-2.8 0l-8-8a2 2 0 0 1-.6-1.4V4a1 1 0 0 1 1-1h7.2c.5 0 1 .2 1.4.6l8 8a2 2 0 0 1 0 2.8Z" />
    <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const PencilIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 20-7z" />
  </svg>
);

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const CONTACT_ITEMS = [
  {
    key: "email",
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: <MailIcon />,
    bg: "rgba(236, 72, 153, 0.14)",
    color: "#ec4899",
    action: "copy",
  },
  {
    key: "location",
    label: "Location",
    value: "Bangalore, Karnataka, India",
    href: null,
    icon: <PinIcon />,
    bg: "rgba(59, 130, 246, 0.14)",
    color: "#3b82f6",
    action: "copy",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/gnanaguruk",
    href: "https://www.linkedin.com/in/gnanaguruk/",
    icon: <LinkedInIcon />,
    bg: "rgba(59, 130, 246, 0.14)",
    color: "#3b82f6",
    action: "link",
  },
  {
    key: "github",
    label: "GitHub",
    value: "github.com/Guru07K",
    href: "https://github.com/Guru07K",
    icon: <GitHubIcon />,
    bg: "rgba(100, 116, 139, 0.16)",
    color: "var(--text-h)",
    action: "link",
  },
];

function Field({ id, label, icon, ...props }) {
  return (
    <div className="mb-2">
      <label className="block text-[13px] font-semibold text-heading mb-2" htmlFor={id}>
        {label} <span className="text-[#ef4444]">*</span>
      </label>
      <div className="relative flex items-center">
        <span className="absolute left-[14px] text-body pointer-events-none flex">{icon}</span>
        <input
          className="w-full box-border py-[12px] pr-[14px] pb-[12px] pl-[40px] rounded-[10px] border border-line bg-page text-heading [font-family:inherit] text-[14px] focus:outline-none focus:border-accent-line"
          id={id}
          name={id}
          {...props}
        />
      </div>
    </div>
  );
}

function Contact() {
  const [message, setMessage] = useState("");
  const [copiedKey, setCopiedKey] = useState(null);
  const [sent, setSent] = useState(false);

  const handleCopy = (item) => {
    navigator.clipboard
      ?.writeText(item.value)
      .then(() => {
        setCopiedKey(item.key);
        setTimeout(() => setCopiedKey((k) => (k === item.key ? null : k)), 1500);
      })
      .catch(() => {});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const subject = encodeURIComponent(form.subject.value || "Portfolio message");
    const body = encodeURIComponent(
      `${form.message.value}\n\n— ${form.name.value} (${form.email.value})`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="animate-fade-in relative flex flex-col overflow-hidden pt-[32px] bg-white text-[#17213a] dark:bg-[#0b0b12] dark:text-[#d7d9e6]">
      <span className="absolute rounded-[50%] bg-accent opacity-[0.1] blur-[60px] pointer-events-none z-0 w-[360px] h-[360px] top-[-140px] left-[-100px]" aria-hidden="true" />
      <span className="absolute rounded-[50%] bg-accent opacity-[0.1] blur-[60px] pointer-events-none z-0 w-[300px] h-[300px] top-[30%] right-[-120px]" aria-hidden="true" />

      <div className="relative z-[1] flex-1 grid grid-cols-[38fr_62fr] content-center gap-7 p-[0_max(24px,calc((100%_-_1200px)/2))_16px] max-[900px]:grid-cols-[1fr]">
        <div>
          <h2 className="text-[34px] mb-[14px] max-[600px]:text-[32px]">
            Get In <span className="bg-[linear-gradient(120deg,#3b82f6,var(--accent))] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-body text-[15px] leading-[1.65] max-w-[440px] mb-3">
            I'm always open to discussing new opportunities, exciting
            projects, or just having a friendly conversation about
            technology.
          </p>

          <div className="flex flex-wrap gap-[14px] mb-3">
            {QUICK_INFO.map((item) => (
              <div className="flex items-center gap-[10px]" key={item.title}>
                <span className="w-9 h-9 rounded-[50%] shrink-0 flex items-center justify-center bg-accent-soft text-accent">{item.icon}</span>
                <span>
                  <span className="block text-[13px] font-bold text-heading">{item.title}</span>
                  <span className="block text-[11.5px] text-body">{item.sub}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[6px] mb-3">
            {CONTACT_ITEMS.map((item) => (
              <div className="flex items-center gap-[14px] bg-card border border-line rounded-[14px] py-[9px] px-[14px] shadow-card" key={item.key}>
                <span
                  className="w-10 h-10 rounded-[50%] shrink-0 flex items-center justify-center"
                  style={{ background: item.bg, color: item.color }}
                >
                  {item.icon}
                </span>
                <span className="flex-1 min-w-0">
                  <strong className="block text-[14px] text-heading">{item.label}</strong>
                  {item.action === "link" ? (
                    <a className="block text-[13px] text-body no-underline overflow-hidden text-ellipsis whitespace-nowrap" href={item.href} target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <span className="block text-[13px] text-body overflow-hidden text-ellipsis whitespace-nowrap">{item.value}</span>
                  )}
                </span>
                {item.action === "copy" ? (
                  <button
                    type="button"
                    className={`shrink-0 w-8 h-8 rounded-[8px] border flex items-center justify-center cursor-pointer transition-[background-color,color] duration-200 ease-[ease] hover:bg-accent hover:text-white hover:border-accent ${copiedKey === item.key ? "bg-[#22c55e] text-white border-[#22c55e]" : "bg-transparent text-body border-line"}`}
                    aria-label={`Copy ${item.label}`}
                    onClick={() => handleCopy(item)}
                  >
                    {copiedKey === item.key ? <CheckIcon /> : <CopyIcon />}
                  </button>
                ) : (
                  <a
                    className="shrink-0 w-8 h-8 rounded-[8px] border border-line bg-transparent text-body flex items-center justify-center cursor-pointer transition-[background-color,color] duration-200 ease-[ease] hover:bg-accent hover:text-white hover:border-accent"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${item.label}`}
                  >
                    <ExternalIcon />
                  </a>
                )}
              </div>
            ))}
          </div>

        </div>

        <div className="relative bg-card border border-line rounded-[24px] p-[18px] shadow-card overflow-hidden">
          <h3 className="text-[20px] mb-1">Send Me a Message</h3>
          <p className="text-body text-[14px] mb-3">Fill out the form below and I'll get back to you as soon as possible.</p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-[1fr_1fr] gap-[18px] max-[600px]:grid-cols-[1fr]">
              <Field
                id="name"
                label="Your Name"
                icon={<PersonIcon />}
                type="text"
                placeholder="Enter your name"
                required
              />
              <Field
                id="email"
                label="Your Email"
                icon={<MailIcon />}
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <Field
              id="subject"
              label="Subject"
              icon={<TagIcon />}
              type="text"
              placeholder="What's this about?"
              required
            />

            <div className="mb-2">
              <label className="block text-[13px] font-semibold text-heading mb-2" htmlFor="message">
                Message <span className="text-[#ef4444]">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-[14px] top-[14px] text-body pointer-events-none flex">
                  <PencilIcon />
                </span>
                <textarea
                  id="message"
                  name="message"
                  className="w-full box-border py-[12px] pr-[14px] pb-[24px] pl-[40px] rounded-[10px] border border-line bg-page text-heading [font-family:inherit] text-[14px] resize-y min-h-[78px] focus:outline-none focus:border-accent-line"
                  rows="3"
                  maxLength={MESSAGE_LIMIT}
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <span className="absolute right-[12px] bottom-[8px] text-[11px] text-body pointer-events-none">
                  {message.length}/{MESSAGE_LIMIT}
                </span>
              </div>
            </div>

            <div className="flex items-stretch flex-wrap gap-[14px] mt-2">
              <button type="submit" className="inline-flex items-center justify-center gap-[10px] px-7 py-[14px] rounded-[12px] border-0 bg-[linear-gradient(120deg,#3b82f6,var(--accent))] text-white text-[15px] font-bold cursor-pointer transition-[transform,box-shadow] duration-200 ease-[ease] shadow-[0_14px_28px_-12px_var(--accent-border)] hover:[transform:translateY(-2px)]">
                <SendIcon />
                Send Message
              </button>
              <div className="flex-1 min-w-[220px] flex items-center gap-[10px] py-[10px] px-4 rounded-[12px] bg-[rgba(34,197,94,0.12)] text-[#16a34a] text-[12.5px] leading-[1.4] dark:bg-[rgba(34,197,94,0.16)] dark:text-[#4ade80] [&_svg]:shrink-0">
                <LockIcon />
                <span>
                  Your information is safe with me.
                  <br />
                  I'll never share your details.
                </span>
              </div>
            </div>

            {sent && (
              <p className="mt-[14px] text-[13px] font-semibold text-[#16a34a]">
                Your email app should now be open with the message ready to send.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="w-full bg-[#0b0b12] text-[#e7e7ee] h-24 rounded-[60%_60%_0_0_/_40px_40px_0_0]" aria-hidden="true" />
    </section>
  );
}

export default Contact;

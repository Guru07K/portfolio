/**
 * Technology name -> logo PNG, used by the Project Details view.
 *
 * Logos are reused from the folders in /public/assets/ (the same files the
 * Skills section uses), so no logo is stored twice. Logos only used by
 * projects live in /public/assets/integrations/.
 * `dark: true` means a <file>-dark.png (light-on-dark version) also exists.
 *
 * Names without an entry (e.g. concepts such as RBAC or libraries without an
 * official logo) are shown as a text label instead.
 */

const logo = (folder, file, dark = false) => ({
  src: `/assets/${folder}/${file}.png`,
  darkSrc: dark ? `/assets/${folder}/${file}-dark.png` : null,
});

export const TECH_LOGOS = {
  // languages & frameworks
  "Node.js": logo("languages-frameworks", "nodejs"),
  "Express.js": logo("languages-frameworks", "express", true),
  "REST API": logo("languages-frameworks", "rest-api", true),
  GraphQL: logo("languages-frameworks", "graphql"),
  TypeScript: logo("languages-frameworks", "typescript"),
  React: logo("languages-frameworks", "react"),
  "Redux Toolkit": logo("languages-frameworks", "redux"),
  Zustand: logo("languages-frameworks", "zustand"),
  "Tailwind CSS": logo("languages-frameworks", "tailwindcss"),

  // databases
  MongoDB: logo("databases", "mongodb"),

  // cloud, messaging & tools
  "Socket.IO": logo("cloud-tools", "socketio", true),
  "AWS AppSync": logo("cloud-tools", "aws", true),

  // project integrations & libraries
  JWT: logo("integrations", "jwt"),
  Razorpay: logo("integrations", "razorpay", true),
  "WhatsApp Cloud API": logo("integrations", "whatsapp"),
  "AWS SQS": logo("integrations", "amazon-sqs"),
  "AWS S3": logo("integrations", "amazon-s3"),
  Cloudinary: logo("integrations", "cloudinary", true),
  Formik: logo("integrations", "formik"),
  Vercel: logo("integrations", "vercel", true),
  Render: logo("integrations", "render", true),
  "Google OAuth": logo("integrations", "google"),
};

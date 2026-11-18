/**
 * Technologies shown in the Skills section (three scrolling rows).
 * Logos: /public/assets/<assetDir>/<logo>.png (+ <logo>-dark.png when `dark`).
 * The Home page counts technologies from this list, so it stays in sync.
 */

export const SKILL_CATEGORIES = [
  {
    key: "languages-frameworks",
    assetDir: "languages-frameworks",
    reverse: false,
    title: "Languages & Frameworks",
    iconBg: "linear-gradient(135deg, #6366f1, #38bdf8)",
    items: [
      { name: "Node.js", logo: "nodejs" },
      { name: "TypeScript", logo: "typescript" },
      { name: "NestJS", logo: "nestjs" },
      { name: "Express.js", logo: "express", dark: true },
      { name: "REST API", logo: "rest-api", dark: true },
      { name: "GraphQL", logo: "graphql" },
      { name: "TypeORM", logo: "typeorm" },
      { name: "Java", logo: "java" },
      { name: "JavaScript", logo: "javascript" },
      { name: "React", logo: "react" },
      { name: "Redux", logo: "redux" },
      { name: "Zustand", logo: "zustand" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
    ],
  },
  {
    key: "data",
    assetDir: "databases",
    reverse: true,
    title: "Databases & Data",
    iconBg: "linear-gradient(135deg, #a855f7, #7c3aed)",
    items: [
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "Mongoose", logo: "mongoose" },
      { name: "Redis", logo: "redis" },
      { name: "SQL", logo: "sql", dark: true },
    ],
  },
  {
    key: "tools",
    assetDir: "cloud-tools",
    reverse: false,
    title: "Cloud, Messaging & Tools",
    iconBg: "linear-gradient(135deg, #64748b, #334155)",
    items: [
      { name: "AWS", logo: "aws", dark: true },
      { name: "RabbitMQ", logo: "rabbitmq" },
      { name: "Kafka", logo: "kafka", dark: true },
      { name: "WebSocket", logo: "websocket", dark: true },
      { name: "Socket.IO", logo: "socketio", dark: true },
      { name: "Git", logo: "git" },
      { name: "Bitbucket", logo: "bitbucket" },
      { name: "Jenkins", logo: "jenkins" },
      { name: "Docker", logo: "docker" },
    ],
  },
];

/** Number of distinct technologies across all rows. */
export const TECHNOLOGY_COUNT = new Set(
  SKILL_CATEGORIES.flatMap((category) => category.items.map((item) => item.name.trim().toLowerCase())),
).size;

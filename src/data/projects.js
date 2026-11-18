/**
 * Single source of truth for the Projects showcase.
 *
 * Card (presentation view)
 * ------------------------
 * `type` is "company" (highlighted card + Company Project badge) or "personal".
 * `category`, `title`, `description` (short summary) and `tech` are shown on
 * the card. `tech` names are also used for the logo grid in the details view
 * (see src/data/techLogos.js).
 *
 * Screenshots
 * -----------
 * `screenshot.src` points to /public/projects/. The current files are
 * placeholders: drop a real capture (16:10, e.g. 1600x1000) into that folder
 * and change only `src` (and `alt`).
 *
 * Details view
 * ------------
 * `details.overview`       paragraphs (array of strings)
 * `details.features`       [{ icon, title, text }]  (icon names: ProjectIcons.jsx)
 * `details.implementation` [{ title, text }]
 * `details.contributions`  bullet points
 * Every field is optional and empty fields are not rendered. Only add
 * information that is accurate.
 */

export const PROJECTS = [
  {
    id: "shuttle-service",
    type: "company",
    category: "Transportation & Ticketing",
    title: "Shuttle Service",
    description:
      "A transportation and ticketing platform for employee travel, covering ticket plans and booking, Razorpay payments, driver scheduling, boarding verification and WhatsApp notifications.",
    tech: ["Node.js", "Express.js", "REST API", "JWT", "RBAC", "Razorpay", "WhatsApp Cloud API", "AWS SQS", "AWS S3", "Cron Jobs"],
    screenshot: {
      src: "/projects/shuttle-service.svg",
      alt: "Placeholder preview of a shuttle ticket booking screen",
      address: "shuttle-service",
    },
    details: {
      overview: [
        "Shuttle Service is a transportation and ticketing platform for employee travel. It covers a commute from start to finish: choosing a ticket plan, paying for it, scheduling the trip and confirming that the passenger has boarded. Alongside this, it provides the tools needed to manage drivers and day-to-day transportation operations.",
        "From a business perspective, the platform brings ticket sales, travel scheduling and transport operations into a single system. Riders choose between daily, weekly and monthly plans and book one-way or round trips, while operations rely on driver scheduling, route-related workflows and ticket scanning at boarding. Access is role-based, so different users, such as riders and drivers, work with the features relevant to their role.",
        "Technically, the platform is backed by a Node.js and Express.js REST API secured with JWT authentication and role-based access control. It integrates Razorpay for payments and the Meta WhatsApp Cloud API for notifications, uses AWS SQS and AWS S3 for asynchronous processing and storage, and runs recurring operations as cron jobs.",
      ],
      features: [
        { icon: "ticket", title: "Flexible ticket plans", text: "Daily, weekly and monthly plans let riders pick a ticket that matches how often they travel." },
        { icon: "repeat", title: "One-way & round-trip booking", text: "Riders can book a single journey or a return trip as part of the booking flow." },
        { icon: "card", title: "Online payments", text: "Ticket purchases are paid online through the Razorpay payment integration." },
        { icon: "steering", title: "Driver scheduling", text: "Drivers are scheduled as part of managing the platform's transportation operations." },
        { icon: "scan", title: "Ticket scanning & boarding", text: "Tickets are scanned when passengers board, confirming boarding for the trip." },
        { icon: "route", title: "Travel scheduling & routes", text: "Trips are organized through travel scheduling and route-related workflows." },
        { icon: "message", title: "WhatsApp notifications", text: "Users receive notifications on WhatsApp through the Meta WhatsApp Cloud API." },
        { icon: "clock", title: "Scheduled automation", text: "Recurring operations run automatically as cron jobs instead of being triggered by hand." },
      ],
      implementation: [
        { title: "Backend architecture", text: "Node.js and Express.js backend exposing REST APIs for ticketing, booking, scheduling and transportation workflows." },
        { title: "Authentication & authorization", text: "API requests are authenticated with JSON Web Tokens (JWT), and role-based access control (RBAC) limits each operation to the user roles permitted to perform it." },
        { title: "Payments", text: "Razorpay is integrated into the ticket purchase flow, so booking a ticket is completed with an online payment." },
        { title: "WhatsApp messaging", text: "The Meta WhatsApp Cloud API is used to send notifications to users on WhatsApp." },
        { title: "Asynchronous processing", text: "AWS SQS queues work for asynchronous processing, so tasks that do not need to finish within an API request are handled outside the request–response cycle." },
        { title: "Storage", text: "AWS S3 provides object storage for the platform's files." },
        { title: "Scheduled operations", text: "Cron jobs run the platform's scheduled operations automatically." },
      ],
      contributions: [
        "Worked on the Node.js and Express.js backend as part of the development team, building REST APIs for ticket plans, booking and transportation workflows.",
        "Implemented JWT-based authentication and role-based access control (RBAC) for the platform's APIs.",
        "Integrated Razorpay into the ticket purchase flow.",
        "Integrated the Meta WhatsApp Cloud API to deliver notifications to users.",
        "Used AWS SQS for asynchronous processing and AWS S3 for storage.",
        "Implemented cron jobs to automate scheduled operations.",
      ],
    },
    links: {},
  },
  {
    id: "safecommute",
    type: "company",
    category: "Employee Transportation Management",
    title: "SafeCommute",
    description:
      "An Employee Transportation Management System (ETMS) for planning and running employee pickup and drop operations across rosters, routes, trips, drivers and vehicles.",
    tech: ["Node.js", "Express.js", "REST API", "GraphQL", "Socket.IO", "AWS AppSync", "WhatsApp Cloud API", "JWT", "RBAC"],
    screenshot: {
      src: "/projects/safecommute.svg",
      alt: "Placeholder preview of an employee transportation trips dashboard",
      address: "safecommute",
    },
    details: {
      overview: [
        "SafeCommute is an Employee Transportation Management System (ETMS) for organizations that provide transport to their employees. It manages the operations behind employee pickups and drops: who travels and when, which routes and trips are planned, and which drivers and vehicles operate them.",
        "The system connects planning with what happens on the road. Employee rosters and pickup and drop schedules feed into route and trip management, while attendance and boarding confirmation record each employee's participation in a trip. Employees receive OTPs and notifications on WhatsApp.",
        "The backend is built with Node.js and Express.js and exposes REST APIs, with GraphQL used where applicable. Its real-time functionality was originally built on Socket.IO and later migrated to AWS AppSync, AWS's managed service for GraphQL and real-time APIs.",
      ],
      features: [
        { icon: "calendar", title: "Pickup & drop scheduling", text: "Employee pickups and drops are scheduled in advance as part of transport planning." },
        { icon: "users", title: "Roster management", text: "Employee rosters determine who needs transport and when." },
        { icon: "route", title: "Route & trip management", text: "Routes and trips are created and managed for employee transportation." },
        { icon: "car", title: "Driver & vehicle management", text: "Drivers and vehicles are managed within the system and linked to transportation operations." },
        { icon: "check", title: "Attendance & boarding", text: "Employee attendance and boarding are confirmed for trips." },
        { icon: "message", title: "WhatsApp OTP & notifications", text: "One-time passwords and notifications are delivered to employees on WhatsApp." },
        { icon: "workflow", title: "Transportation workflows", text: "Scheduling, rosters, routes and trips are managed as connected workflows." },
      ],
      implementation: [
        { title: "Backend architecture", text: "Node.js and Express.js backend exposing REST APIs, with GraphQL where applicable, for scheduling, rosters, routes, trips, drivers and vehicles." },
        { title: "Real-time communication", text: "Real-time functionality was first implemented with Socket.IO, which keeps a persistent connection between clients and the server." },
        { title: "Migration to AWS AppSync", text: "Socket.IO-based communication was later migrated to AWS AppSync, moving real-time delivery onto a managed AWS service." },
        { title: "WhatsApp integration", text: "The Meta WhatsApp Cloud API delivers OTPs and notifications to employees." },
        { title: "Authentication & authorization", text: "JWT authentication and role-based access control (RBAC) are applied where applicable." },
      ],
      contributions: [
        "Contributed to the Node.js and Express.js backend as part of the development team, building REST APIs, and GraphQL APIs where applicable, for scheduling, rosters, routes, trips, drivers and vehicles.",
        "Worked on the Socket.IO-based real-time functionality and its migration to AWS AppSync.",
        "Integrated the Meta WhatsApp Cloud API for OTP delivery and notifications.",
        "Applied JWT authentication and role-based access control where applicable.",
        "Worked on integrating the backend with AWS services.",
      ],
    },
    links: {},
  },
  {
    id: "chat-application",
    type: "personal",
    category: "Real-Time Web Application",
    title: "Real-Time Chat Application",
    description:
      "A real-time chat application with Socket.IO messaging and Cloudinary-based media sharing, built with React, TypeScript, Zustand and Tailwind CSS.",
    tech: ["React", "TypeScript", "Socket.IO", "Zustand", "Tailwind CSS", "Cloudinary", "Formik", "Yup", "Joi", "JWT", "Vercel", "Render"],
    screenshot: {
      src: "/projects/chat-app.svg",
      alt: "Placeholder preview of a real-time chat conversation",
      address: "chat-application",
    },
    details: {
      overview: [
        "A real-time chat application that lets users communicate through instant messaging and share media within their conversations.",
        "The client is built with React and TypeScript, styled with Tailwind CSS, and uses Zustand to manage application state. Real-time communication runs over Socket.IO, media is managed through Cloudinary, and users are authenticated with JWT.",
        "Forms are handled with Formik and validated with Yup, with Joi used for additional validation. The application is deployed on Vercel and Render.",
      ],
      features: [
        { icon: "bolt", title: "Real-time messaging", text: "Messages are delivered as they are sent over a Socket.IO connection, without reloading the page." },
        { icon: "image", title: "Media sharing", text: "Users can share media in conversations, with files stored and delivered through Cloudinary." },
        { icon: "lock", title: "Authentication", text: "Users are authenticated with JSON Web Tokens (JWT)." },
        { icon: "form", title: "Validated forms", text: "Formik manages form state and Yup validates input before it is submitted." },
      ],
      implementation: [
        { title: "Frontend", text: "React with TypeScript for a typed component codebase, styled with Tailwind CSS." },
        { title: "State management", text: "Zustand holds the application state shared across components." },
        { title: "Real-time communication", text: "Socket.IO provides the real-time channel used for messaging." },
        { title: "Media management", text: "Cloudinary stores and serves the media shared in conversations." },
        { title: "Forms & validation", text: "Formik and Yup handle form state and validation, with Joi used for additional validation." },
        { title: "Authentication", text: "JWT is used to authenticate users." },
        { title: "Deployment", text: "The application is deployed on Vercel and Render." },
      ],
      contributions: [
        "Developed the React and TypeScript frontend, with Zustand for state management and Tailwind CSS for styling.",
        "Implemented real-time messaging with Socket.IO.",
        "Integrated Cloudinary for media sharing.",
        "Implemented form handling and validation with Formik, Yup and Joi.",
        "Implemented JWT-based authentication.",
        "Deployed the application on Vercel and Render.",
      ],
    },
    links: {},
  },
  {
    id: "mern-real-estate",
    type: "personal",
    category: "Full-Stack Web Application",
    title: "MERN Real Estate Platform",
    description:
      "A real estate web application built on the MERN stack, with JWT and Google OAuth authentication, Redux Toolkit state management and Cloudinary for media.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux Toolkit", "Tailwind CSS", "JWT", "Google OAuth", "Cloudinary", "Render"],
    screenshot: {
      src: "/projects/real-estate.svg",
      alt: "Placeholder preview of a real estate listings application",
      address: "real-estate-platform",
    },
    details: {
      overview: [
        "A real estate web application built on the MERN stack: MongoDB, Express.js, React and Node.js.",
        "The backend is a Node.js and Express.js application organized around the MVC pattern, with MongoDB as its database. Users are authenticated with JWT and can also sign in with their Google account through Google OAuth.",
        "On the frontend, React is combined with Redux Toolkit for state management and Tailwind CSS for styling. Images and media are managed through Cloudinary, and the application is deployed on Render.",
      ],
      features: [
        { icon: "lock", title: "Secure authentication", text: "Users are authenticated with JSON Web Tokens (JWT)." },
        { icon: "google", title: "Sign in with Google", text: "Google OAuth lets users sign in with their existing Google account." },
        { icon: "image", title: "Image & media management", text: "Images and media are uploaded to and served from Cloudinary." },
        { icon: "layers", title: "Centralized state", text: "Redux Toolkit keeps application state in a single, predictable store." },
      ],
      implementation: [
        { title: "Backend architecture", text: "Node.js and Express.js backend following the MVC (Model–View–Controller) pattern, separating data models from the controllers that handle requests." },
        { title: "Database", text: "MongoDB stores the application's data." },
        { title: "Authentication", text: "JWT-based authentication, with Google OAuth as an additional sign-in method." },
        { title: "Frontend", text: "React for the user interface, Redux Toolkit for state management and Tailwind CSS for styling." },
        { title: "Media management", text: "Cloudinary handles image and media storage and delivery." },
        { title: "Deployment", text: "The application is deployed on Render." },
      ],
      contributions: [
        "Built the Node.js and Express.js backend following the MVC pattern, with MongoDB for data storage.",
        "Implemented JWT authentication and Google OAuth sign-in.",
        "Developed the React frontend with Redux Toolkit for state management and Tailwind CSS for styling.",
        "Integrated Cloudinary for image and media management.",
        "Deployed the application on Render.",
      ],
    },
    links: {},
  },
  {
    // TODO: replace with your next project.
    id: "upcoming-project",
    type: "personal",
    placeholder: true,
    category: "Coming Soon",
    title: "Upcoming Project",
    description: "Details for this project will be added soon.",
    tech: [],
    screenshot: {
      src: "/projects/upcoming-project.svg",
      alt: "Placeholder preview for an upcoming project",
      address: "upcoming-project",
    },
    details: {
      overview: ["Details for this project will be added soon."],
    },
    links: {},
  },
];

export const formatProjectNumber = (index) => String(index + 1).padStart(2, "0");

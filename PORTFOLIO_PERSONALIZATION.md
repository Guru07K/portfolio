# Portfolio Personalization Guide

This guide was generated from the files in this project. Nothing else was assumed.
The current owner of the content is **Akasha Sahu** (a Frontend Developer, SAP Fiori).
Every value below is taken from the code, and each one has a blank for your replacement.

**Please read first:** the contact email in this project is already `Sathishkumar.Annadurai@thingsalive.io`. It appears in three places (see section 1). It is the same address as your account, so it may already have been changed by you. Confirm it is the address you want published. If it is, leave it as is and mark it as "keep".

Line numbers refer to the files as they are now. Line numbers inside `src/sections/*.jsx` refer to the component files, not to the built output.

---

## 0. How to fill this in

1. Fill every `Replacement value: __________` blank.
2. For each item in section 3 (assets), provide the image or file.
3. Items in section 4 need a decision (keep, change, or remove). Some need a small code change, which is noted.
4. Section 6 gives the overall split into "must replace", "optional", and "keep".

---

## 1. Values that appear in more than one place

Replace each group with one value. Every occurrence in the group must change together.

### 1.1 Full name: `Akasha Sahu`

| # | File | Line | Context |
|---|------|------|---------|
| 1 | `index.html` | 13 | `<title>Akasha Sahu \| Portfolio</title>` (browser tab title) |
| 2 | `src/App.jsx` | 98 | Footer: `© {year} Akasha Sahu. All rights reserved.` |
| 3 | `src/sections/Home.jsx` | 128 | Hero heading, `<span className="hero-accent">Akasha Sahu</span>` |
| 4 | `src/sections/Home.jsx` | 235 | Hero image `alt="Akasha Sahu working at his desk"` (alt text, see also 1.5) |
| 5 | `src/sections/Experience.jsx` | 245 | Quote attribution `<cite>— Akasha Sahu</cite>` |
| 6 | `src/sections/Projects.jsx` | 272 | SAP mockup top bar user name `<span className="proj__sap-user">Akasha Sahu</span>` |
| 7 | `src/sections/Projects.jsx` | 325 | Portfolio mockup window title `<span className="proj__window-brand">Akasha Sahu</span>` |
| 8 | `src/sections/Projects.jsx` | 330 | Portfolio mockup heading `<h4>Akasha Sahu</h4>` |

Same value everywhere: **yes**. Replacement: __________

### 1.2 First name only: `Akasha`

| # | File | Line | Context |
|---|------|------|---------|
| 1 | `src/components/Header.jsx` | 69 | Brand text `<strong>Akasha</strong> Sahu` (the bold part of the name; the surname is in the same line) |
| 2 | `src/sections/About.jsx` | 262 | Note signature `— Akasha 🙂` |

Same value everywhere: **yes, but this is the first-name part of the full name.** Replacement first name: __________ Surname: __________

### 1.3 Initials: `AS`

| # | File | Line | Context |
|---|------|------|---------|
| 1 | `src/components/Header.jsx` | 66 | Logo mark `<span className="brand__mark">AS</span>` (top-left) |

Replacement: __________

### 1.4 Professional title: `Frontend Developer`

| # | File | Line | Context |
|---|------|------|---------|
| 1 | `src/sections/Home.jsx` | 123 | Hero eyebrow label above the name |
| 2 | `src/sections/Projects.jsx` | 331 | Portfolio mockup role text |
| 3 | `src/sections/Home.jsx` | 136-138 | Bio paragraph also says "passionate Frontend Developer" (part of a longer sentence, see 2.4) |

Replacement: __________

### 1.5 Hero photo (used twice, plus alt text)

- `src/sections/Home.jsx:2` and `:3` import the photo. It is used on line 112 for the light and dark themes.
- The alt text is at `src/sections/Home.jsx:235` (see 1.1 #4).
- The picture is of the friend. See section 3.

Replacement photo(s): __________

### 1.6 Contact email

| # | File | Line | Context |
|---|------|------|---------|
| 1 | `src/sections/Contact.jsx` | 4 | `const CONTACT_EMAIL = "Sathishkumar.Annadurai@thingsalive.io";` (the source value. Lines 133, 134 and 218 use it: the contact row, its mailto link, and the contact form's mailto) |
| 2 | `src/sections/Home.jsx` | 59 | Social icon list, Email entry `href: "mailto:Sathishkumar.Annadurai@thingsalive.io"` |
| 3 | `src/sections/Home.jsx` | 143 | Hero "Let's Connect" button `href="mailto:Sathishkumar.Annadurai@thingsalive.io"` |

Same value everywhere: **yes. Items 2 and 3 are hard-coded copies, not references to Contact.jsx's constant. If you change the email, you must change all three lines.**

Current value: `Sathishkumar.Annadurai@thingsalive.io`
Replacement value: __________

Note: the contact form has no backend. Submitting it opens the visitor's mail app with `mailto:` to this address (`Contact.jsx:218`).

### 1.7 Location

| # | File | Line | Context |
|---|------|------|---------|
| 1 | `src/sections/Contact.jsx` | 153 | Contact row "Location": `Bhubaneswar, Odisha, India` |
| 2 | `src/sections/Experience.jsx` | 119 | Location of job 1: `Bhubaneswar, Odisha (Hybrid)` |
| 3 | `src/sections/Experience.jsx` | 138, 155, 171 | Locations of jobs 2, 3 and 4: `Bhubaneswar, Odisha` |
| 4 | `src/sections/Education.jsx` | 9, 17, 25 | Institutions are in Bhubaneswar (part of institution names, see section 2.7) |

Same value everywhere: **no**. Contact location is the one to change first. Each experience location is a separate fact.

Your location: __________

### 1.8 Copyright footer phrase

- `src/App.jsx:98`: `© {new Date().getFullYear()} Akasha Sahu. All rights reserved.`
- The year is calculated automatically; keep it. Only the name and the wording need your input.

Replacement: __________

### 1.9 Page title and favicon

- `index.html:13` page title: `Akasha Sahu | Portfolio`. Replacement: __________
- `index.html:5` favicon `/favicon.svg`. See section 3.

---

## 2. Items by file

### 2.1 `index.html`

**2.1.1 Page title**
- File: `index.html`
- Location: line 13 (`<title>`)
- Current value: `Akasha Sahu | Portfolio`
- What I need to provide: text for the browser tab title
- Replacement value: __________

**2.1.2 Language**
- File: `index.html`, line 2
- Current value: `lang="en"`
- Decision: keep if the portfolio is in English. Replacement (if not): __________

### 2.2 `src/App.jsx`

**2.2.1 Footer copyright**
- File: `src/App.jsx`
- Location: line 98
- Current value: `© {year} Akasha Sahu. All rights reserved.`
- What I need to provide: name for the copyright line (see 1.1, 1.8)
- Replacement value: __________

**2.2.2 Section (tab) list**
- File: `src/App.jsx`, lines 12-20 (`SECTIONS` array)
- Current value: Home, Education, Experience, Skill, Project, About, Contact
- Notes: this list must match `TABS` in `src/components/Header.jsx:3`. The two lists are duplicates in the code. If you add, remove or rename a section, change both files.
- Decision: keep, or change. New list (if changed): __________

### 2.3 `src/components/Header.jsx`

**2.3.1 Logo initials**
- File: `src/components/Header.jsx`, line 66
- Current value: `AS`
- Replacement value: __________

**2.3.2 Brand name**
- File: `src/components/Header.jsx`, lines 68-69
- Current value: `<strong>Akasha</strong> Sahu` (first name in bold)
- Replacement first name: __________ Surname: __________

**2.3.3 Navigation tabs**
- File: `src/components/Header.jsx`, line 3 (`TABS`)
- Current value: `"Home", "Education", "Experience", "Skill", "Project", "About", "Contact"`
- Notes: must match `src/App.jsx` (see 2.2.2). Remove or rename tabs here as well as in App.jsx.
- Decision: keep, or change.

### 2.4 `src/sections/Home.jsx` (hero section)

**2.4.1 Social links**
- File: `src/sections/Home.jsx`, `SOCIAL_LINKS` array, lines 7-75

| Line | Platform | Current `href` | What I need to provide | Replacement |
|------|----------|----------------|------------------------|-------------|
| 10 | LinkedIn | `"#"` (placeholder, not a real link) | Your LinkedIn profile URL | __________ |
| 25 | GitHub | `"#"` (placeholder) | Your GitHub profile URL | __________ |
| 40 | Instagram | `"#"` (placeholder) | Your Instagram URL, or remove this entry | __________ |
| 59 | Email | `mailto:Sathishkumar.Annadurai@thingsalive.io` | Email (see 1.6) | __________ |

Notes: the three `"#"` links go nowhere. If you do not use Instagram, delete that object (lines 38-56) so the icon does not appear.

**2.4.2 Typed rotating phrases**
- File: `src/sections/Home.jsx`, line 77 (`TYPED_PHRASES`)
- Current values: `"web applications"`, `"IoT platforms"`, `"SAP Fiori apps"`
- Notes: the phrase before the typed text is `I build modern and responsive` (line 131, generic).
- What I need to provide: 2 to 4 phrases describing what you do. Replacements: __________

**2.4.3 Eyebrow role label**
- File: `src/sections/Home.jsx`, line 123
- Current value: `Frontend Developer`
- Replacement: __________

**2.4.4 Hero name**
- File: `src/sections/Home.jsx`, line 128
- Current value: `Akasha Sahu` (the greeting "Hi, I'm" on line 126 is generic)
- Replacement: __________

**2.4.5 Bio paragraph**
- File: `src/sections/Home.jsx`, lines 136-138
- Current value: "I'm a passionate Frontend Developer with experience in building user-friendly, scalable, and visually appealing web applications using HTML, CSS, JavaScript and SAP UI5 / Fiori."
- What I need to provide: a short bio in your own words. It names your role and your technologies (including SAP UI5 / Fiori).
- Replacement: __________

**2.4.6 Resume download link**
- File: `src/sections/Home.jsx`, line 160
- Current value: `href="/resume.pdf" download`
- Notes: this file does **not exist** in `public/`. The button will return a 404 until you add it. See section 3.
- What I need to provide: your resume PDF, named `resume.pdf` (or tell me a different file name and I will change the link). Replacement filename: __________

**2.4.7 Hero stats**
- File: `src/sections/Home.jsx`, lines 202-226

| Line | Current value | Label | What I need to provide | Replacement |
|------|---------------|-------|------------------------|-------------|
| 202 | `10+ ` | Technologies | Number of technologies you work with | __________ |
| 214 | `3+ ` | Years Experience | Years of experience | __________ |
| 225 | `Always ` | Learning New Things | Keep, or change the label | __________ |

Notes: the years figure conflicts with the experience section (see section 5).

**2.4.8 Hero photo alt text**
- File: `src/sections/Home.jsx`, line 235
- Current value: `Akasha Sahu working at his desk`
- What I need to provide: description of your new hero photo (or the image you use)
- Replacement: __________

**2.4.9 Hero buttons**
- File: `src/sections/Home.jsx`, lines 158 and 174
- Current values: "Let's Connect" (button), "Download Resume" (button)
- Notes: generic labels. Keep unless you want other wording.

**2.4.10 Hero intro bio text**
- Covered in 2.4.5.

### 2.5 `src/sections/About.jsx`

**2.5.1 Section header**
- File: `src/sections/About.jsx`, lines 240-249
- Current values: eyebrow "More About Me" (240); title "Know More" + "About Me" (243-244); description (246-249): "Here are a few more things about me beyond coding. These values, interests and skills shape who I am and help me bring a better perspective to everything I do."
- Notes: the description is generic personal text. Rewrite if it does not fit.
- Replacement (optional): __________

**2.5.2 Quote under the description**
- File: `src/sections/About.jsx`, line 252
- Current value: `"Small details make big things happen."`
- What I need to provide: a quote you like, or keep
- Replacement: __________

**2.5.3 Sticky note**
- File: `src/sections/About.jsx`, lines 257-262
- Current values: "Stay Curious / Keep Learning / Make it Happen" and signature `— Akasha 🙂` (line 262)
- What I need to provide: note lines and sign-off. Signature replacement: __________

**2.5.4 Bottom banner**
- File: `src/sections/About.jsx`, lines 280, 283
- Current values: `"Better Skills. Brighter Tomorrow."` and link text `Keep Growing`
- Replacement (optional): __________

**2.5.5 Cards (8 cards, array `CARDS` lines 122-192)**

| # | Line (title) | Current title | Line (text) | Current text | Replacement title | Replacement text |
|---|---|---|---|---|---|---|
| 01 | 127 | Problem Solver | 129 | "I enjoy finding simple and effective solutions to complex problems." | __________ | __________ |
| 02 | 135 | Team Player | 137 | "I believe in collaboration and learning from others to achieve better results." | __________ | __________ |
| 03 | 143 | Always Learning | 145 | "Exploring new technologies keeps me motivated and helps me grow." | __________ | __________ |
| 04 | 151 | Passionate | 153 | "I love creating meaningful digital experiences and solving real-world problems." | __________ | __________ |
| 05 | 159 | Strong Problem Skills | 161 | "Good at analyzing issues, thinking logically and coming up with efficient solutions." | __________ | __________ |

Card 06 "Languages I Know" (title line 167), tags at line 169: `"English"`, `"Hindi"`, `"Odia"`.
- What I need to provide: languages you speak. Replacement: __________

Card 07 "Hobbies" (title line 175), list at lines 178-181: `Music`, `Photography`, `Traveling`, `Reading`.
- What I need to provide: your hobbies. The icons are generic and can stay. Replacement: __________

Card 08 "Personal Strengths" (title line 188), checklist at line 190: `"Positive Attitude"`, `"Adaptability"`, `"Time Management"`, `"Eagerness to Learn"`.
- What I need to provide: your own strengths. Replacement: __________

Notes: card numbers `01`-`08` and the icons are design, not personal. Keep them.

### 2.6 `src/sections/Experience.jsx`

The data array is `EXPERIENCE` (lines 112-181). Four entries.

**2.6.1 Job 1: Frontend Developer (SAP Fiori)** (lines 113-131)

| Line | Field | Current value | Replacement |
|------|-------|---------------|-------------|
| 115 | Role | `Frontend Developer (SAP Fiori)` | __________ |
| 116 | Company | `Company Name` (placeholder, never filled in) | __________ |
| 117 | Period | `Jan 2024 – Present` | __________ |
| 118 | Duration | `1+ years` | __________ |
| 119 | Location | `Bhubaneswar, Odisha (Hybrid)` | __________ |
| 121 | Summary | "Working on modern, responsive and user-friendly web applications using React, JavaScript and SAP Fiori. Collaborating with cross-functional teams to deliver efficient and scalable solutions." | __________ |
| 123-128 | Responsibilities (6) | "Developed and maintained SAP Fiori applications.", "Built reusable UI components using React.", "Integrated with backend services (OData).", "Worked on UI/UX enhancements and performance optimization.", "Collaborated with functional teams to understand requirements and deliver solutions.", "Fixed issues and improved existing application features." | __________ |
| 130 | Technologies | `SAP Fiori`, `React`, `JavaScript`, `OData`, `HTML5`, `CSS3`, `Git` | __________ |

**2.6.2 Job 2: Frontend Developer Intern** (lines 132-148)

| Line | Field | Current value | Replacement |
|------|-------|---------------|-------------|
| 134 | Role | `Frontend Developer Intern` | __________ |
| 135 | Company | `Company Name` (placeholder) | __________ |
| 136 | Period | `2022 – 2023` | __________ |
| 137 | Duration | `1 year` | __________ |
| 138 | Location | `Bhubaneswar, Odisha` | __________ |
| 140 | Summary | "Assisted the frontend team in building and maintaining responsive web interfaces, translating UI designs into clean, reusable components." | __________ |
| 142-145 | Responsibilities (4) | "Built and styled UI components from Figma designs.", "Fixed bugs and improved existing pages.", "Worked with REST APIs to display dynamic data.", "Participated in code reviews and daily stand-ups." | __________ |
| 147 | Technologies | `HTML5`, `CSS3`, `JavaScript`, `React`, `Git` | __________ |

**2.6.3 Job 3: Web Development Trainee** (lines 149-164)

| Line | Field | Current value | Replacement |
|------|-------|---------------|-------------|
| 151 | Role | `Web Development Trainee` | __________ |
| 152 | Company | `Training Institute Name` (placeholder) | __________ |
| 153 | Period | `2021` | __________ |
| 154 | Duration | `1 month` | __________ |
| 155 | Location | `Bhubaneswar, Odisha` | __________ |
| 157 | Summary | "Completed an intensive hands-on training program covering core web development fundamentals and modern frontend tooling." | __________ |
| 159-161 | Responsibilities (3) | "Learned HTML, CSS and JavaScript fundamentals.", "Built small practice projects and layouts.", "Got introduced to Git and version control workflows." | __________ |
| 163 | Technologies | `HTML5`, `CSS3`, `JavaScript`, `Git` | __________ |

**2.6.4 Job 4: Academic Projects** (lines 165-180)

| Line | Field | Current value | Replacement |
|------|-------|---------------|-------------|
| 167 | Role | `Academic Projects` | __________ |
| 168 | Company | `College / Personal` | __________ |
| 169 | Period | `2020 – 2021` | __________ |
| 170 | Duration | `1 year` | __________ |
| 171 | Location | `Bhubaneswar, Odisha` | __________ |
| 173 | Summary | "Built several college and personal projects to apply and strengthen core programming and web development concepts." | __________ |
| 175-177 | Responsibilities (3) | "Designed and built responsive project UIs.", "Practiced JavaScript logic and DOM manipulation.", "Collaborated with peers on group assignments." | __________ |
| 179 | Technologies | `HTML5`, `CSS3`, `JavaScript` | __________ |

Notes:
- Entry 4 is not paid work. Keep it if you want, or delete it (lines 165-180).
- Entries 3 and 4 are not employers, but the data stores them in the `company` field, which renders as the second line under the role. Fill it with the institute or "Personal" as appropriate.

**2.6.5 Experience stats** (`STATS`, lines 183-188)

| Line | Current value | Label | Replacement value | Replacement label |
|------|---------------|-------|-------------------|-------------------|
| 184 | `1+` | Years of Experience | __________ | __________ |
| 185 | `5+` | Projects Delivered | __________ | __________ |
| 186 | `3+` | Technologies Worked With | __________ | __________ |
| 187 | `Continuous` | Learning & Growing | keep or change | keep or change |

Notes: these are separate from the hero stats (see 2.4.7). They conflict. See section 5.

**2.6.6 Section header and quote**
- File: `src/sections/Experience.jsx`, lines 197-206 (eyebrow "Experience", title "My Professional Experience", subtitle "A journey of continuous learning, problem solving and building impactful solutions.")
- Quote line 244: "Every experience, big or small, has taught me something valuable." Attribution line 245: `— Akasha Sahu`.
- Replacement quote: __________ Attribution name: __________

### 2.7 `src/sections/Education.jsx`

The array is `EDUCATION` (lines 4-29). Three entries.

**2.7.1 Education 1** (lines 5-12)

| Line | Field | Current value | Replacement |
|------|-------|---------------|-------------|
| 7 | Degree | `Bachelor of Technology (B.Tech)` | __________ |
| 8 | Field | `Computer Science and Engineering` | __________ |
| 9 | Institution | `Siksha 'O' Anusandhan University, Bhubaneswar` | __________ |
| 10 | Period | `2018 – 2022` | __________ |
| 11 | Badge (grade) | `CGPA: 8.2 / 10` | __________ |

**2.7.2 Education 2** (lines 13-20)

| Line | Field | Current value | Replacement |
|------|-------|---------------|-------------|
| 15 | Degree | `Higher Secondary (12th)` | __________ |
| 16 | Field | `Science (PCM)` | __________ |
| 17 | Institution | `BJB Junior College, Bhubaneswar` | __________ |
| 18 | Period | `2016 – 2018` | __________ |
| 19 | Badge (grade) | `Percentage: 76%` | __________ |

**2.7.3 Education 3** (lines 21-28)

| Line | Field | Current value | Replacement |
|------|-------|---------------|-------------|
| 23 | Degree | `Secondary (10th)` | __________ |
| 24 | Field (board) | `BSE Odisha` | __________ |
| 25 | Institution | `DAV Public School, Bhubaneswar` | __________ |
| 26 | Period | `2015 – 2016` | __________ |
| 27 | Badge (grade) | `Percentage: 85%` | __________ |

Notes:
- The `icon` keys (`cap`, `cert`, `book`) on lines 6, 14 and 22 select the icons. Keep them.
- Remove an entry by deleting its object. Add an entry by copying one. The icon key must be `cap`, `cert` or `book`.

**2.7.4 Education section header and quote**
- Eyebrow `My Education` (line 97), title `My Education` (lines 100-101), description (lines 104-105): "Here is my academic journey that has shaped my skills and knowledge in technology and development."
- Quote line 108: `"Learning never exhausts the mind."`, attribution line 109: `— Leonardo da Vinci`. Replacement quote: __________ Attribution: __________

### 2.8 `src/sections/Projects.jsx`

The data array is `PROJECTS` (lines 136-184). Three entries. The mockups in lines 186-349 are built from this content plus hard-coded sample data. Each project has a `mockup` key (`dashboard`, `sap`, `portfolio`), which selects a mockup component. Do not change the keys unless you also edit `MOCKUPS` (line 351).

**2.8.1 Project 1: CEMINNDIA** (lines 137-152)

| Line | Field | Current value | Replacement |
|------|-------|---------------|-------------|
| 138 | Badge | `IoT / Web Application` | __________ |
| 139 | Title | `CEMINNDIA` | __________ |
| 140 | Subtitle | `IoT Platform for Construction Equipment Monitoring` | __________ |
| 142 | Description | "A comprehensive web application to monitor and manage construction equipment with real-time data, alarms, reports, and user management. Built with modern technologies and responsive design." | __________ |
| 144-148 | Features (5) | "Real-time equipment monitoring and data visualization", "Alarm management and notification system", "Reports and analytics dashboard", "User and role management", "Responsive and user-friendly UI" | __________ |
| 150 | Technologies | `React`, `JavaScript`, `OData`, `SAP Fiori`, `HTML5`, `CSS3` | __________ |
| 151 | Mockup | `dashboard` (keep) | keep |

Notes: "CEMINNDIA" is a named project. It is not your work unless you built it. Check whether you have the right to show it. The dashboard mockup (lines 188-258) is built around this project: see 2.8.4.

**2.8.2 Project 2: SAP Fiori Application** (lines 153-168)

| Line | Field | Current value | Replacement |
|------|-------|---------------|-------------|
| 154 | Badge | `Enterprise Application` | __________ |
| 155 | Title | `SAP Fiori Application` | __________ |
| 156 | Subtitle | `Purchase Order Management` | __________ |
| 158 | Description | "A SAP Fiori application to manage purchase orders with create, update, and display functionalities. Integrated with SAP backend services using OData and built with SAPUI5." | __________ |
| 160-164 | Features (5) | "Create, update and display purchase orders", "Search and filter functionality", "Integration with SAP OData services", "Responsive design following SAP Fiori guidelines", "Role-based access control" | __________ |
| 166 | Technologies | `SAP Fiori`, `UI5`, `OData`, `JavaScript`, `HTML5`, `CSS3` | __________ |
| 167 | Mockup | `sap` (keep) | keep |

Notes: the mockup (lines 260-316) uses sample data. See 2.8.4.

**2.8.3 Project 3: Personal Portfolio Website** (lines 169-183)

| Line | Field | Current value | Replacement |
|------|-------|---------------|-------------|
| 170 | Badge | `Personal Project` | __________ |
| 171 | Title | `Personal Portfolio Website` | __________ |
| 173 | Description | "A modern and responsive portfolio website built with React to showcase my skills, projects, and achievements. Designed with a clean UI and smooth animations." | __________ |
| 175-179 | Features (5) | "Single page application with smooth navigation", "Responsive design for all devices", "Modern and clean UI with animations", "Project showcase with live demo and source code", "Contact form integration" | __________ |
| 181 | Technologies | `React`, `JavaScript`, `HTML5`, `CSS3`, `Vite` | __________ |
| 182 | Mockup | `portfolio` (keep) | keep |

Notes: this project describes the portfolio itself. Replace it with your own project, or delete the object (lines 169-183) and set the mockup to one of the other two. The `portfolio` mockup (lines 318-349) shows the name and role, so it needs your details (see 2.8.4).

**2.8.4 Sample data inside the mockups**

These values are not in `PROJECTS`. They are hard-coded inside the mockup components. They look like real data. Replace them with sample data that fits your work, or leave them as demo content.

| Line | Mockup | Current value | Replacement |
|------|--------|---------------|-------------|
| 209 | Dashboard window title | `CEMINNDIA` | __________ (match project 1 title) |
| 190 | Dashboard stat "Total Equipment" | `24` | __________ |
| 191 | Dashboard stat "Active Alarms" | `5` | __________ |
| 192 | Dashboard stat "Healthy" | `18` | __________ |
| 193 | Dashboard stat "Under Maintenance" | `3` | __________ |
| 195 | Dashboard chart bar heights | `[40, 55, 35, 70, 50, 80, 60]` | keep or change |
| 197-200 | Dashboard "Recent Alarms" rows | `Excavator-01 / Engine Temperature / 10:24 AM`, `Crane-03 / Hydraulic Pressure / 09:18 AM`, `Loader-07 / Battery Voltage / 08:45 AM`, `Generator-02 / Fuel Level / 07:30 AM` | __________ |
| 262-265 | SAP table rows (PO number, supplier, status) | `450001234 / ABC Ltd / Open`, `450001235 / XYZ Corp / In Process`, `450001236 / Global Mart / Completed`, `450001237 / Tech Solutions / Open` | __________ |
| 272 | SAP mockup user name | `Akasha Sahu` | __________ (see 1.1 #6) |
| 284 | SAP mockup heading | `Manage Purchase Orders` | keep or change |
| 325, 330 | Portfolio mockup name | `Akasha Sahu` | __________ (see 1.1 #7, #8) |
| 329 | Portfolio mockup greeting | `Hi, I'm` | keep |
| 331 | Portfolio mockup role | `Frontend Developer` | __________ (see 1.4 #2) |
| 332 | Portfolio mockup tagline | `I build modern and responsive web applications.` | __________ |

**2.8.5 Project links (hard-coded in one place for all projects)**
- File: `src/sections/Projects.jsx`
- Location: `ProjectRow` function, line 391 (Live Demo) and line 394 (Source Code)
- Current values: both `href="#"` (placeholders), for all three projects
- Notes: the links are not stored in `PROJECTS`. They are the same for every project. To give each project its own links, the code must be changed (see section 4).
- What I need to provide for each project: live demo URL (or "none") and source code URL (or "none"). Project 1: __________ / __________ Project 2: __________ / __________ Project 3: __________ / __________

**2.8.6 Section header**
- File: `src/sections/Projects.jsx`
- Eyebrow `My Work` (line 415), title `Featured Projects` (line 419), subtitle (lines 422-423): "Here are some of the projects I've worked on, showcasing my skills in frontend development, SAP Fiori and modern web technologies."
- Replacement (optional): __________

### 2.9 `src/sections/Skills.jsx`

The data array is `CATEGORIES` (lines 143-217). Three categories, 8 items each.

**2.9.1 Section header**
- File: `src/sections/Skills.jsx`
- Eyebrow `My Skills` (line 309), title `Tools & Technologies` (line 313), subtitle (lines 316-317): "Technologies I work with to build modern, scalable and user-friendly web applications."
- Replacement (optional): __________

**2.9.2 Category 1: Frontend Development** (lines 145-167)
- Title line 146: `Frontend Development`. Description line 147: "Building responsive and interactive user interfaces". Divider line 148: `SCROLL TO EXPLORE`.
- Items (lines 158-165): `React.js`, `JavaScript`, `HTML5`, `CSS3`, `Tailwind CSS`, `Material UI`, `Redux`, `Next.js`
- Replacement items: __________

**2.9.3 Category 2: Backend & Integration** (lines 169-192)
- Title line 170: `Backend & Integration`. Description line 171: "Connect, integrate and work with powerful services". Divider line 172: `POWERING MODERN APPLICATIONS`.
- Items (lines 183-190): `REST API`, `Axios`, `Node.js`, `Express.js`, `Firebase`, `GraphQL`, `Postman`, `MongoDB`
- Replacement items: __________

**2.9.4 Category 3: Tools & Others** (lines 194-216)
- Title line 195: `Tools & Others`. Description line 196: "Tools that make development faster and easier". Divider line 197: `DEVELOP · CREATE · DEPLOY`.
- Items (lines 207-214): `Git`, `GitHub`, `VS Code`, `npm`, `Vite`, `Figma`, `PostgreSQL`, `Docker`
- Replacement items: __________

Notes:
- Each item has its own icon in code (the `render` function). A new technology that has no icon in this file needs a new entry added. The simple option is a coloured badge with text, as the `badge(...)` helper shows.
- SAP UI5 / OData / SAP Fiori appear in Home, Experience and Projects, but **none appear in this skill list**. See section 5.

### 2.10 `src/sections/Contact.jsx`

**2.10.1 Contact email (source constant)**
- File: `src/sections/Contact.jsx`, line 4
- Current value: `Sathishkumar.Annadurai@thingsalive.io` (see 1.6)
- Replacement: __________

**2.10.2 Contact rows** (`CONTACT_ITEMS`, lines 129-180)

| Line | Row | Current value | Current link | What I need to provide | Replacement value |
|------|-----|---------------|--------------|------------------------|-------------------|
| 143 | Phone | `Add your phone number` (placeholder text, shown to visitors) | none (copy button only) | Your phone number, or remove the row | __________ |
| 153 | Location | `Bhubaneswar, Odisha, India` | none (copy button only) | Location (see 1.7) | __________ |
| 163 | LinkedIn | `linkedin.com/in/your-profile` (placeholder) | `"#"` on line 164 | Display text and full URL | __________ / __________ |
| 173 | GitHub | `github.com/your-username` (placeholder) | `"#"` on line 174 | Display text and full URL | __________ / __________ |

Notes:
- Row 1 (email) is at lines 131-139, using the constant. Rows marked "copy" put a copy button on the row. The LinkedIn and GitHub rows open a link.
- The phone row uses copy-to-clipboard. A visitor who copies "Add your phone number" gets that text. Change it before publishing.
- Removing a row means deleting its object from `CONTACT_ITEMS`.

**2.10.3 Quick info cards** (`QUICK_INFO`, lines 7-39)
- Current values: `Job Opportunities` / `Let's work together`; `Project Discussion` / `Have an idea?`; `Networking` / `Let's connect`
- Notes: generic. Keep, or change.

**2.10.4 Section text**
- Eyebrow `LET'S CONNECT` (line 230), title `Get In Touch` (lines 233), lede (lines 236-238): "I'm always open to discussing new opportunities, exciting projects, or just having a friendly conversation about technology."
- Form heading `Send Me a Message` (line 299), intro (line 300): "Fill out the form below and I'll get back to you as soon as possible."
- Privacy notice (lines 363-365): "Your information is safe with me. I'll never share your details."
- Bottom quote (line 384): `"Let's create something meaningful together."`
- Replacement (optional): __________

### 2.11 `src/sections/Home.jsx` contact text (duplicate of 1.6)
- Covered in 1.6 and 2.4.1.

### 2.12 Images and files

See section 3.

### 2.13 Package and build metadata

**2.13.1 Project name**
- File: `package.json` line 2, and `package-lock.json` lines 2 and 8
- Current value: `"my-portfolio"`
- Notes: a generic name. It does not show on the site. Change it only if you want. The lock file must match `package.json` if you change it.
- Replacement (optional): __________

**2.13.2 Built output (`dist/`)**
- Files: `dist/index.html` and `dist/assets/index-CdHEzFIx.js`
- Notes: this is the **compiled** site. It contains the old name and email (it has `Akasha`, `Sahu`, `Sathishkumar` and `CEMINNDIA` in it). It is ignored by git (`.gitignore` line 11). Do not edit it by hand. It is recreated when you run `npm run build`.

**2.13.3 README**
- File: `README.md`
- Notes: default Vite template text. It has no personal content. Replace it with your own description if you want.

---

## 3. Friend-specific assets to replace

| Priority | File | Used by | Why it is friend-specific | What to provide |
|----------|------|---------|---------------------------|-----------------|
| **Required** | `src/assets/hero-banner.jpg` (1400 × 783) | `src/sections/Home.jsx:2`, shown on line 112 in light theme | Shows a real person (the friend) at a desk. The image also has printed text: "Code Design Develop Repeat", "Always Learning Always Improving", "Good Things Take Time", "Build a Better Web", a mug that says "Good Ideas Build Great Things", and book spines "HTML & CSS", "JavaScript", "SAP UI5 / Fiori", "Web Development". | A photo of you (or a banner you choose) at the same size and aspect ratio (1400 × 783, or 16:9). If the photo does not carry the same text, nothing else needs changing. |
| **Required** | `src/assets/hero-banner-dark.jpg` (1400 × 783) | `src/sections/Home.jsx:3`, shown on line 112 in dark theme | The same photo and the same printed text, with a dark background. | A dark-mode version of the same banner. Use the same photo and size. |
| **Required** | `public/resume.pdf` (**missing**) | `src/sections/Home.jsx:160` (`href="/resume.pdf"`, the "Download Resume" button) | The file does not exist. | Your resume as a PDF, named `resume.pdf`. |
| Optional | `src/assets/edu-graphic.png` (700 × 584) | `src/sections/Education.jsx:2`, shown on line 113 | A generic "Learn / Build / Grow" illustration (graduation cap, books, plant). It does not show a person or contain personal text. | Keep, or use your own graphic at about 700 × 584 with a transparent background. |
| Optional | `public/favicon.svg` | `index.html:5` (browser tab icon) | A purple symbol with no text. Not personal, but it is the template's icon. | Your own icon or initials as SVG. |
| Not used | `public/icons.svg` | Nothing (checked: no reference in `src/` or `index.html`) | Contains social network icons from a template. It is never loaded. | No action needed. |
| Generated | `dist/` (all files) | Built output | Contains the old name and email. | Nothing to provide. Run `npm run build` after your changes. |

Notes:
- The two hero banners must be the same photo in light and dark. If you only provide one, the site looks wrong in the other theme.
- The purple colour used in the hero images matches the site's purple accent (`--accent: #7c3aed` in `src/index.css`). If you change the accent colour, the banner colour will not match. Plan the colour before you create the banner.
- No project screenshots exist. The project cards are built in code, so no project images are needed.

---

## 4. Code changes needed, not just values

These are not simple text swaps. Decide before you start.

1. **Project links are the same for every project.** `ProjectRow` (`src/sections/Projects.jsx:391` and `:394`) hard-codes `href="#"`. Per-project links require new `liveUrl` / `repoUrl` fields in the `PROJECTS` array and a change to `ProjectRow`.
2. **Social links** (`src/sections/Home.jsx`, `SOCIAL_LINKS`). Each item already has an `href` field. Fill in the URLs or delete the items you do not use.
3. **Contact rows** (`src/sections/Contact.jsx`, `CONTACT_ITEMS`). Each row has its own value. Delete rows you do not want (for example Phone).
4. **Experience and Education entries** are arrays. Add or delete objects to change how many appear. Entries must keep the same keys (`role`, `company`, `period`, `duration`, `location`, `summary`, `responsibilities`, `technologies` for experience; `degree`, `field`, `institution`, `period`, `badge`, `icon` for education).
5. **Projects and the mockups are linked.** Each project's `mockup` key must be one of `dashboard`, `sap` or `portfolio`. The mockups contain their own hard-coded sample data (section 2.8.4). A new project type needs a new mockup component.
6. **Skills** items need an icon `render` function (section 2.9 notes). A new technology must be added with a `render` value.
7. **Tab list** is in two places (`src/App.jsx` lines 12-20 and `src/components/Header.jsx` line 3). Keep them identical.
8. **Stats are duplicated.** Hero stats (`Home.jsx`) and experience stats (`Experience.jsx`) are separate arrays. Both must be updated.
9. **Hero text is split across lines.** "Hi, I'm" and the name are on separate lines in `Home.jsx` (lines 126-128). The name must stay in `<span className="hero-accent">`.

---

## 5. Inconsistencies in the current content

These are facts you should check with your own data. They are not errors in the code.

| Item | Where | Problem |
|------|-------|---------|
| Years of experience | `Home.jsx:214` says `3+`; `Experience.jsx:118` says `1+ years`; `Experience.jsx:184` says `1+` | The three values disagree. Also, job 1 began `Jan 2024` and is `Present`. That is roughly 2.8 years to today (2026-10-28), not 1. |
| Technologies count | `Home.jsx:202` says `10+`; `Experience.jsx:186` says `3+` | Different numbers for the same idea. |
| Projects delivered | `Experience.jsx:185` says `5+`; `Projects.jsx` lists 3 projects | The count is higher than the projects shown. |
| Company names | `Experience.jsx:116`, `:135`, `:152` | Placeholders: `Company Name` (twice) and `Training Institute Name`. The company is never named. |
| Social and contact placeholders | `Home.jsx:10, 25, 40`; `Contact.jsx:143, 163, 173` | Placeholder links and text are visible to visitors unless changed. |
| SAP skills missing from skill list | `Skills.jsx` (no SAP / UI5 / OData entry) vs. `Home.jsx:136`, `Experience.jsx:121`, `Projects.jsx:166` | SAP work is central to the experience, but the skill list has no SAP entry. Decide whether to add one. |
| Email name vs. page name | `Contact.jsx:4`, `Home.jsx:59, 143` | The email address is `Sathishkumar.Annadurai@…`, which does not match the page name `Akasha Sahu`. Confirm it is the address you want shown. |
| Dates | `Education.jsx:10` B.Tech `2018 – 2022` | Consistent with the internship `2022 – 2023` (`Experience.jsx:136`). No change needed. |

---

## 6. Summary

### 6.1 Definitely needs to be replaced
- Full name, first name, surname and initials (sections 1.1, 1.2, 1.3; `index.html:13`, `App.jsx:98`, `Header.jsx:66-69`, `Home.jsx:128, 235`, `About.jsx:262`, `Experience.jsx:245`, `Projects.jsx:272, 325, 330`)
- Job title (section 1.4)
- Contact email (section 1.6; `Contact.jsx:4`, `Home.jsx:59, 143`)
- Location (`Contact.jsx:153`)
- Hero photo and dark-mode photo (`src/assets/hero-banner.jpg`, `src/assets/hero-banner-dark.jpg`)
- Resume file (`public/resume.pdf`, missing)
- Bio, hero stats and typed phrases (`Home.jsx:77, 136-138, 202, 214, 225-226`)
- Social links (`Home.jsx:10, 25, 40`)
- Contact placeholders: phone, LinkedIn, GitHub (`Contact.jsx:143, 163-164, 173-174`)
- Experience: all four entries, including the company placeholders (`Experience.jsx:113-180`) and stats (`:183-188`)
- Education: all three entries (`Education.jsx:5-28`)
- Projects: all three entries, including the project links (`Projects.jsx:136-184, 391, 394`)
- Skills: the lists, if they do not match your own (`Skills.jsx:143-217`)
- Hobbies, languages and personal strengths (`About.jsx:169, 178-181, 190`)
- Quotes attributed to you (`Experience.jsx:244-245`) and the About sticky note (`About.jsx:257-262`)
- Mockup sample data that matches the old project (`Projects.jsx:190-200, 209, 262-265`)

### 6.2 May optionally be personalized
- Section headings, eyebrows and subtitles on every section (generic text, rewrite if you prefer)
- Quotes not attributed to you: `About.jsx:252, 280`; `Education.jsx:108-109` (Leonardo da Vinci); `Contact.jsx:384`
- Privacy wording: `Contact.jsx:363-365`
- Quick info cards: `Contact.jsx:7-39`
- Hero stat label "Always Learning New Things" (`Home.jsx:225-226`)
- Tab names (`App.jsx:12-20`, `Header.jsx:3`)
- Project #3 (Personal Portfolio Website) (`Projects.jsx:169-183`)
- Education graphic `src/assets/edu-graphic.png`
- Favicon `public/favicon.svg`
- Package name `my-portfolio` (`package.json:2`)
- README (`README.md`)
- Instagram social link (`Home.jsx:38-56`), if you do not use it

### 6.3 Should remain unchanged (part of the existing implementation or design)
- All styling: every `src/**/*.css` file, including the colour tokens in `src/index.css` (`--accent: #7c3aed` and the dark-mode values), fonts (`Caveat` from Google Fonts in `index.html:7-12`; `Segoe UI` and `Segoe Print` fallbacks), and the layout rules
- Logic in `src/App.jsx`: theme handling (`getInitialTheme`, `localStorage`), scroll-spy (`IntersectionObserver`), section navigation
- Logic in `src/components/Header.jsx`: mobile menu, theme toggle icons
- Logic in `src/sections/Home.jsx`: typewriter effect (`useTypewriter`), theme-based banner switch (line 112)
- Logic in `src/sections/Skills.jsx`: marquee scrolling (`MarqueeRow`)
- Logic in `src/sections/Contact.jsx`: copy-to-clipboard, mailto form submission
- Logic in `src/sections/Experience.jsx`: tab-style selection of entries
- Logic in `src/sections/Projects.jsx`: the stacked-card layout (`top` and `zIndex` on lines 428-436)
- All inline SVG icon components (in every section file), the `PlantIllustration` in `About.jsx`, the wave shape in `Education.jsx:76-93`
- The mockup layouts (`DashboardMockup`, `SapMockup`, `PortfolioMockup`), as design. Only their text and sample data are personal (section 2.8.4)
- Category icon badges and tech logos in `Skills.jsx`
- Build and tooling: `package.json` scripts and dependencies, `vite.config.js`, `eslint.config.js`, `.gitignore`, `src/main.jsx`
- `public/icons.svg` (unused)
- The `Caveat` font link in `index.html`

---

## 7. Verification: files inspected

Every file in the project was opened. Each file is listed with what it contains for personalization.

| File | Inspected | Personal content found |
|------|-----------|------------------------|
| `index.html` | Yes, full | Page title (line 13), favicon link (line 5), font link (keep) |
| `package.json` | Yes, full | Project name only (line 2) |
| `package-lock.json` | Yes, top section | Project name (lines 2, 8). Rest is dependency data |
| `vite.config.js` | Yes, full | None |
| `eslint.config.js` | Yes, full | None |
| `.gitignore` | Yes, full | None (confirms `dist` is ignored) |
| `README.md` | Yes, full | None (template text) |
| `src/main.jsx` | Yes, full | None |
| `src/App.jsx` | Yes, full | Footer name (line 98), tab list (lines 12-20) |
| `src/components/Header.jsx` | Yes, full | Logo initials (66), brand name (69), tab list (3) |
| `src/sections/Home.jsx` | Yes, full (SVG path data not shown in full; it is icon geometry, not text) | Social links, email, name, role, typed phrases, bio, stats, resume link, photo alt text |
| `src/sections/About.jsx` | Yes, full (SVG path data not shown in full) | Section text, 8 cards, quotes, sticky note |
| `src/sections/Experience.jsx` | Yes, full (SVG path data not shown in full) | Four entries, stats, quote and attribution |
| `src/sections/Education.jsx` | Yes, full (SVG path data not shown in full) | Three entries, section text, quote |
| `src/sections/Projects.jsx` | Yes, full (SVG path data not shown in full) | Three projects, mockup sample data, project links |
| `src/sections/Skills.jsx` | Yes, full (SVG path data not shown in full) | Three categories, 24 skill items, section text |
| `src/sections/Contact.jsx` | Yes, full (SVG path data not shown in full) | Email, phone, location, LinkedIn, GitHub, quick info, text |
| `src/App.css`, `src/index.css`, `src/sections/*.css` | Yes, searched for URLs, fonts, `content:`, personal text | No personal content. Colour tokens and fonts are design |
| `src/assets/hero-banner.jpg`, `hero-banner-dark.jpg` | Viewed | Friend's photo and printed text |
| `src/assets/edu-graphic.png` | Viewed | Generic illustration |
| `public/favicon.svg` | Checked for text | None. Symbol only |
| `public/icons.svg` | Checked references | Unused |
| `dist/index.html`, `dist/assets/*` | Listed; searched for personal text | Old name, email and project name in compiled output |

Searches run across the whole project for: name, first name, surname, email, company and school names, city names, social and profile URLs, the words "your-", "Add your", "Company Name", and `@`. Every match is listed above.

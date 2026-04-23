export type GalleryItem = {
  src?: string
  caption: string
  hint?: string
  aspect?: "4/5" | "1/1" | "4/3" | "16/9"
}

export type HeroImage = {
  src: string
  alt?: string
  caption?: string
  hint?: string
}

export type Project = {
  slug: string
  kind?: "project" | "achievement"
  title: string
  subtitle: string
  tagline: string
  description: string
  role: string
  year: string
  period: string
  client: string
  company: string
  location?: string
  featured?: boolean
  accent: string
  heroImage?: HeroImage
  technologies: string[]
  overview: string[]
  challengesLabel?: string
  challenges: string[]
  approachLabel?: string
  approach: { title: string; desc: string }[]
  contributionsLabel?: string
  contributions: string[]
  stackLabel?: string
  stack: { group: string; items: string[] }[]
  impact: { label: string; value: string; note?: string }[]
  timelineLabel?: string
  timeline: { phase: string; desc: string }[]
  gallery?: GalleryItem[]
  galleryTitle?: string
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    slug: "citizen-watch",
    title: "Citizen Watch — Global Site",
    subtitle: "Lead Frontend @ Barbarian",
    tagline:
      "Owning the end-to-end frontend for a heritage watch brand — shipping production-ready features with a performance-first mindset.",
    description:
      "Led end-to-end frontend development for Citizen Watch: owned codebase structure, shipped production-ready features and optimized rendering performance across the experience.",
    role: "Lead Frontend Developer",
    year: "2025",
    period: "Aug 2025 — Present",
    client: "Citizen Watch",
    company: "Barbarian",
    location: "Hyderabad, India (Remote)",
    featured: true,
    accent: "from-sky-500/30 via-blue-500/20 to-indigo-500/20",
    technologies: ["Next.js", "TypeScript", "React", "Cloudflare", "Tailwind"],
    overview: [
      "Citizen Watch is a global heritage brand where every frontend pixel carries brand equity. I joined as Lead Frontend Developer to take ownership of the codebase, stabilize the architecture and ship features confidently at a high cadence.",
      "My mandate: raise the quality bar across the frontend, enforce a scalable structure, and unblock the team so every sprint ends with production-ready deliverables — not tech debt.",
    ],
    challenges: [
      "A growing codebase with inconsistent patterns and shared state fragmentation causing rendering regressions.",
      "Tight release cadence with multiple regional variants going live simultaneously.",
      "High expectations for visual polish, accessibility and performance on product, storytelling and commerce flows.",
      "Needed a single source of truth for components, data-fetching conventions and performance budgets.",
    ],
    approach: [
      {
        title: "Architect for clarity",
        desc:
          "Established a clear module boundary: feature folders, shared UI primitives, typed data contracts and a documented pattern for server vs client components.",
      },
      {
        title: "Performance as a contract",
        desc:
          "Introduced per-route performance budgets, audited bundle size with each PR, and restructured rendering paths to eliminate hydration waterfalls.",
      },
      {
        title: "Team leadership",
        desc:
          "Ran code reviews, paired with engineers daily, and created lightweight RFCs for anything that touched shared infrastructure.",
      },
      {
        title: "Release hygiene",
        desc:
          "Tightened the PR → preview → staging → production pipeline so every merge was automatically deployed, verified and reversible.",
      },
    ],
    contributions: [
      "Served as Lead Frontend Developer, owning end-to-end frontend delivery.",
      "Led a team of 4 developers — balancing hands-on coding with mentoring, reviews and unblockers.",
      "Refactored and optimized the frontend codebase to improve performance, scalability and maintainability.",
      "Restructured component architecture, eliminating duplication and shortening the time-to-add-a-feature.",
      "Improved rendering performance across the site by optimizing expensive components and data flows.",
      "Delivered features under tight timelines while holding the bar on stability and code quality.",
    ],
    stack: [
      { group: "Framework", items: ["Next.js", "React", "TypeScript"] },
      { group: "Styling", items: ["Tailwind CSS", "Design Tokens", "Responsive Grid"] },
      { group: "Platform", items: ["Cloudflare Pages", "Edge Cache", "CI/CD"] },
      { group: "Quality", items: ["ESLint", "TypeScript strict", "Code Reviews"] },
    ],
    impact: [
      { label: "Role", value: "Lead Frontend", note: "Owning the frontend end-to-end" },
      { label: "Team", value: "4 devs", note: "Led delivery & code quality" },
      { label: "Rendering", value: "Optimized", note: "Restructured expensive paths" },
      { label: "Cadence", value: "High", note: "Shipping under tight timelines" },
    ],
    timeline: [
      { phase: "Audit", desc: "Mapped the codebase, identified performance & architectural gaps." },
      { phase: "Foundation", desc: "Introduced conventions, feature boundaries and shared primitives." },
      { phase: "Refactor", desc: "Reworked hot paths, removed duplication, lifted shared state." },
      { phase: "Ship", desc: "Delivered production features with the team on a tight cadence." },
    ],
  },
  {
    slug: "abbvie-migration",
    title: "AbbVie — Platform Migration",
    subtitle: "Netlify → Cloudflare @ Barbarian",
    tagline:
      "Led the cross-stack migration of multiple production apps to Cloudflare, improving deployment reliability and edge performance.",
    description:
      "Led migration of multiple applications (Next.js, React, Angular, JS/TS) from Netlify to Cloudflare — improving deployment reliability, edge performance and DX for a team of 4.",
    role: "Lead Migration Engineer",
    year: "2025",
    period: "2025",
    client: "AbbVie",
    company: "Barbarian",
    location: "Hyderabad, India (Remote)",
    featured: true,
    accent: "from-violet-500/30 via-fuchsia-500/20 to-rose-500/20",
    technologies: ["Next.js", "React", "Angular", "Cloudflare", "CI/CD"],
    overview: [
      "AbbVie operates a portfolio of web applications across multiple frameworks — Next.js, React, Angular and vanilla JS/TS — each with its own build pipeline, environment conventions and deploy nuances.",
      "I led the migration of these apps off Netlify and onto Cloudflare, unifying the deployment story, improving edge performance and leaving the team with a single, reliable workflow.",
    ],
    challenges: [
      "Multiple apps, multiple frameworks — no shared deployment pattern.",
      "Existing Netlify functions, redirects and headers needed careful mapping to Cloudflare equivalents.",
      "Zero tolerance for production downtime during migration.",
      "Preview environments, custom domains and env vars had to be preserved per app.",
    ],
    approach: [
      {
        title: "Migration playbook",
        desc:
          "Documented a repeatable playbook per framework: build commands, output directories, headers, redirects, functions and env mapping.",
      },
      {
        title: "Risk-first rollout",
        desc:
          "Dual-deployed on both platforms behind DNS switches so we could verify parity and roll back instantly if needed.",
      },
      {
        title: "CI/CD unification",
        desc:
          "Consolidated pipelines so all apps share a common preview → staging → production flow with per-PR previews.",
      },
      {
        title: "Edge optimizations",
        desc:
          "Tuned caching, headers and edge routing to take advantage of Cloudflare's global network for faster TTFB.",
      },
    ],
    contributions: [
      "Led migration of Next.js, React, Angular and JS/TS applications from Netlify to Cloudflare for AbbVie.",
      "Improved deployment reliability and performance across the app portfolio.",
      "Owned the per-framework migration playbook and the rollout sequence.",
      "Led a team of 4 developers through the migration, ensuring timely delivery and code quality.",
      "Coordinated with stakeholders on DNS cutovers and post-launch verification.",
    ],
    stack: [
      { group: "Frameworks", items: ["Next.js", "React", "Angular", "TypeScript", "JavaScript"] },
      { group: "Platform", items: ["Cloudflare Pages", "Cloudflare Workers", "Edge Cache"] },
      { group: "DevOps", items: ["CI/CD", "Preview Environments", "DNS Strategy"] },
      { group: "Observability", items: ["Build Logs", "Deploy Verification", "Rollback Plan"] },
    ],
    impact: [
      { label: "Apps Migrated", value: "Multiple", note: "Across Next.js, React, Angular, JS/TS" },
      { label: "Deployment", value: "Reliable", note: "Unified CI/CD across the portfolio" },
      { label: "Performance", value: "Improved", note: "Edge-accelerated delivery" },
      { label: "Team", value: "4 devs", note: "Led migration squad" },
    ],
    timeline: [
      { phase: "Discovery", desc: "Inventoried every app, function, redirect and env var on Netlify." },
      { phase: "Playbook", desc: "Wrote per-framework migration guides with clear acceptance criteria." },
      { phase: "Parallel deploy", desc: "Dual-deployed apps to validate parity before cutover." },
      { phase: "Cutover", desc: "Coordinated DNS switches with zero production downtime." },
      { phase: "Hardening", desc: "Optimized caching, CI/CD and previews on the new platform." },
    ],
  },
  {
    slug: "ev-cms",
    title: "EV CMS — Content Management System",
    subtitle: "Full-Stack @ Evergent",
    tagline:
      "Designed and shipped core CMS modules end-to-end — from MongoDB aggregations to role-based permissions and dynamic file handling.",
    description:
      "Designed and built core CMS modules end-to-end. Implemented REST APIs, advanced MongoDB aggregations ($set, $group, $lookup), role-based permissions and dynamic file handling.",
    role: "Full-Stack Web Developer",
    year: "2023 — 2024",
    period: "Jul 2023 — Aug 2024",
    client: "Evergent",
    company: "Evergent Technologies Private Limited",
    location: "Hyderabad, India",
    featured: true,
    accent: "from-emerald-500/30 via-teal-500/20 to-cyan-500/20",
    technologies: ["React", "Node.js", "MongoDB", "Express", "REST APIs", "AWS"],
    overview: [
      "Served as Full-Stack Web Developer at Evergent Technologies, driving innovation by delivering impactful features across multiple modules of the CMS platform.",
      "Developed a core component of the CMS application — owning frontend (React), backend (Node.js) and database integration (MongoDB), all inside an Agile delivery process.",
    ],
    challenges: [
      "Legacy SQL-based logic that needed to be modernized into efficient MongoDB operations.",
      "Complex relational queries that had to be reshaped as aggregations ($lookup, $group, $set).",
      "Dynamic file handling (images, videos, PDFs) without sacrificing security or performance.",
      "Granular visibility rules — different roles should see different slices of the same data.",
      "Delivering impactful features across multiple modules while operating in a fast Agile cadence.",
    ],
    approach: [
      {
        title: "Full-stack ownership",
        desc:
          "Led design and development of core features across React (frontend) and Node.js (backend) with integrated MongoDB — keeping the contract consistent end-to-end.",
      },
      {
        title: "API-first",
        desc:
          "Created and implemented REST APIs for dynamic data handling — enabling efficient CRUD operations and seamless client ↔ server communication.",
      },
      {
        title: "Data modeling",
        desc:
          "Optimized MongoDB storage using advanced methods like $set, $group and $lookup for relational data management and aggregation.",
      },
      {
        title: "SQL → MongoDB migration",
        desc:
          "Converted complex SQL queries into efficient MongoDB operations, improving performance and scalability.",
      },
      {
        title: "Dynamic file handling",
        desc:
          "Managed server-side storage and retrieval of images, videos and PDFs using the fs package — ensuring efficient, reliable asset workflows.",
      },
      {
        title: "Role-based permissions",
        desc:
          "Developed a robust role-based permissions system to ensure data visibility and access control based on user roles.",
      },
    ],
    contributions: [
      "Led the design and development of core features across both frontend (React) and backend (Node.js) with integrated MongoDB.",
      "Created and implemented REST APIs for dynamic data handling — enabling efficient CRUD operations and seamless communication between client and server.",
      "Optimized data storage using MongoDB, applying advanced methods like $set, $group and $lookup for relational data management and aggregation.",
      "Converted complex SQL queries into efficient MongoDB operations — improving performance and scalability.",
      "Managed dynamic file handling (images, videos, PDFs) using the fs package, ensuring efficient server-side storage and retrieval.",
      "Developed a robust role-based permissions system, ensuring data visibility and access control based on user roles.",
      "Collaborated effectively within an Agile framework, delivering key features and driving innovation across multiple project modules.",
    ],
    stack: [
      { group: "Frontend", items: ["React", "MUI", "Redux"] },
      { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
      { group: "Database", items: ["MongoDB", "$lookup", "$group", "$set"] },
      { group: "Infra", items: ["AWS", "fs package", "File Storage"] },
      { group: "Process", items: ["Agile", "Scrum", "Code Reviews"] },
    ],
    impact: [
      { label: "Modules", value: "Core CMS", note: "Multiple shipped end-to-end" },
      { label: "Queries", value: "SQL → Mongo", note: "Optimized aggregations" },
      { label: "Permissions", value: "Role-based", note: "Data filtered at API" },
      { label: "Assets", value: "Dynamic", note: "Images, videos, PDFs" },
    ],
    timeline: [
      { phase: "Discovery", desc: "Modeled domain entities, ownership boundaries and core modules." },
      { phase: "API layer", desc: "Designed REST APIs with predictable CRUD semantics and clear resource modeling." },
      { phase: "Data migration", desc: "Converted complex SQL queries into efficient MongoDB aggregations." },
      { phase: "Permissions", desc: "Built a role-based visibility system at the API boundary." },
      { phase: "Assets", desc: "Added secure dynamic file handling for media and documents." },
      { phase: "Iterate", desc: "Shipped features across modules inside an Agile cadence." },
    ],
  },
  {
    slug: "astro-canada",
    title: "Astro Canada — Dealer Portal",
    subtitle: "Client: Astro (Malaysia) · Evergent",
    tagline:
      "Expanded Astro's dealer portal into the Canadian market with Google Maps, PDF generation and broadband onboarding.",
    description:
      "Following the success of Astro NJoy, Astro entrusted us with Astro Canada. Replicated the dealer portal and added Google Maps, PDF generation and broadband service onboarding.",
    role: "React Developer",
    year: "2023",
    period: "2023",
    client: "Astro (Malaysia)",
    company: "Evergent Technologies Private Limited",
    location: "Hyderabad, India",
    accent: "from-orange-500/30 via-amber-500/20 to-yellow-500/20",
    technologies: ["React", "Node.js", "EJS", "Google Maps", "MUI", "Redux"],
    overview: [
      "Following the success of Astro NJoy, Astro expanded its services to Canada and entrusted us with the Astro Canada project — a dealer portal tailored for the Canadian market.",
      "The project involved replicating the proven NJoy portal and layering on new capabilities: Google Maps for address pinning, EJS-powered PDF generation, and broadband onboarding alongside the core services.",
    ],
    challenges: [
      "Replicating the NJoy dealer portal while tailoring it for the Canadian market and regulations.",
      "Address accuracy issues during customer registration needed a map-assisted capture flow.",
      "Dealers required printable, signable PDF artifacts after completing onboarding.",
      "Broadband service onboarding had to coexist with the existing product flows without regressions.",
      "Sensitive data flowing across Java APIs required transport-level encryption.",
    ],
    approach: [
      {
        title: "Map-assisted onboarding",
        desc:
          "Integrated Google Maps into the customer onboarding process, enabling dealers to pin addresses for better accuracy during user registration.",
      },
      {
        title: "PDF generation",
        desc:
          "Implemented PDF generation using EJS, allowing dealers to generate a downloadable PDF after completing the 5-step onboarding process. Users could download, sign and submit the form for final approval.",
      },
      {
        title: "Broadband onboarding",
        desc:
          "Expanded the portal to include onboarding for broadband services, ensuring comprehensive service offerings for Astro's Canadian users.",
      },
      {
        title: "Secure API transport",
        desc:
          "Implemented encryption for Java APIs, securing sensitive data transmitted over the network to enhance overall system security.",
      },
    ],
    contributions: [
      "Integrated Google Maps into the customer onboarding process, enabling dealers to pin addresses for better accuracy during user registration.",
      "Implemented PDF generation using EJS, allowing dealers to generate a downloadable PDF after completing the 5-step onboarding process — downloadable, signable and submittable for final approval.",
      "Expanded the portal to include onboarding for broadband services, ensuring comprehensive service offerings for Astro's Canadian users.",
      "Implemented encryption for Java APIs, securing sensitive data transmitted over the network to enhance overall system security.",
    ],
    stack: [
      { group: "Frontend", items: ["React", "Redux", "MUI"] },
      { group: "Backend", items: ["Node.js", "EJS", "REST APIs"] },
      { group: "Integrations", items: ["Google Maps", "Java APIs", "PDF Generation"] },
      { group: "Security", items: ["API Encryption", "Validation", "Auth"] },
    ],
    impact: [
      { label: "Market", value: "Canada", note: "New region launched" },
      { label: "Onboarding", value: "5 steps", note: "Map-assisted flow" },
      { label: "Services", value: "+Broadband", note: "Expanded portfolio" },
      { label: "Security", value: "Encrypted", note: "Java API transport" },
    ],
    timeline: [
      { phase: "Replicate", desc: "Ported the Astro NJoy portal base to the Canada project." },
      { phase: "Maps & accuracy", desc: "Integrated Google Maps pinning for address precision." },
      { phase: "PDF artifacts", desc: "Added EJS-based PDF generation for final approval." },
      { phase: "Broadband expansion", desc: "Extended the portal to cover broadband services." },
      { phase: "Security hardening", desc: "Implemented API encryption for sensitive data." },
    ],
  },
  {
    slug: "astro-njoy",
    title: "Astro NJoy — Dealer Portal",
    subtitle: "Client: Astro (Malaysia) · Evergent",
    tagline:
      "Built the original Astro dealer portal — a reusable UI system, Java API integrations, OTP-secured flows and Redux-backed state.",
    description:
      "Designed and developed the Astro NJoy dealer portal for onboarding users and managing customer support — reusable components, Java API integrations, OTP verification and Redux-backed state.",
    role: "Frontend Developer",
    year: "2022 — 2023",
    period: "2022 — 2023",
    client: "Astro (Malaysia)",
    company: "Evergent Technologies Private Limited",
    location: "Hyderabad, India",
    accent: "from-pink-500/30 via-rose-500/20 to-red-500/20",
    technologies: ["React", "Redux", "Java APIs", "OTP", "MUI"],
    overview: [
      "Astro is a leading digital provider in Malaysia, offering a wide range of entertainment, telecommunications and digital solutions. Astro NJoy streamlines dealer operations with a dealer portal for onboarding users and managing customer support.",
      "I contributed as a Frontend Developer — designing reusable UI components, integrating Java APIs, implementing OTP-secured password flows and wiring up Redux for resilient client-side state.",
    ],
    challenges: [
      "A multi-page dealer portal that had to stay consistent across workflows as new pages were added.",
      "Dealer operations span onboarding, data collection and customer support — each with different validation and backend contracts.",
      "Java backend APIs required a reliable, typed integration layer from the React frontend.",
      "Password flows needed an extra layer of security — a trustworthy OTP verification mechanism.",
      "Sensitive data across Java APIs required transport-level encryption.",
    ],
    approach: [
      {
        title: "Reusable UI system",
        desc:
          "Designed and developed multiple pages for the dealer portal, creating reusable components for efficiency and scalability in the UI.",
      },
      {
        title: "Java API integration",
        desc:
          "Integrated Java APIs to fetch and display data on the frontend, ensuring smooth communication between the portal and backend systems.",
      },
      {
        title: "Data capture & submission",
        desc:
          "Implemented forms to collect end-user data, processed and sent to the backend via Java APIs for onboarding and ticket management.",
      },
      {
        title: "State management",
        desc:
          "Integrated Redux and used React state hooks to manage and store data locally — ensuring real-time updates and better control over application state.",
      },
      {
        title: "OTP verification",
        desc:
          "Developed an OTP verification system for secure password changes, enhancing the security of the dealer portal.",
      },
      {
        title: "API encryption",
        desc:
          "Implemented encryption for Java APIs, securing sensitive data transmitted over the network to enhance overall system security.",
      },
    ],
    contributions: [
      "Designed and developed multiple pages for the dealer portal, creating reusable components for efficiency and scalability in the UI.",
      "Integrated Java APIs to fetch and display data on the frontend, ensuring smooth communication between the portal and backend systems.",
      "Implemented forms to collect end-user data, which was processed and sent to the backend via Java APIs for onboarding and ticket management.",
      "Integrated Redux and used React state hooks to manage and store data locally, ensuring real-time updates and better control over application state.",
      "Developed an OTP verification system for secure password changes, enhancing the security of the dealer portal.",
      "Implemented encryption for Java APIs, securing sensitive data transmitted over the network to enhance overall system security.",
    ],
    stack: [
      { group: "Frontend", items: ["React", "MUI", "Reusable Components"] },
      { group: "State", items: ["Redux", "React Hooks", "Local State"] },
      { group: "APIs", items: ["Java APIs", "REST", "Ticket Management"] },
      { group: "Security", items: ["OTP Verification", "API Encryption"] },
    ],
    impact: [
      { label: "Pages", value: "Multiple", note: "Reusable component system" },
      { label: "State", value: "Redux", note: "Real-time, resilient" },
      { label: "Auth", value: "OTP-secured", note: "Password change flow" },
      { label: "APIs", value: "Encrypted", note: "Java transport layer" },
    ],
    timeline: [
      { phase: "UI foundation", desc: "Built reusable component library for the dealer portal." },
      { phase: "API integration", desc: "Wired Java APIs into the frontend for data fetch and submission." },
      { phase: "Forms & onboarding", desc: "Shipped end-user data collection and ticket management forms." },
      { phase: "State layer", desc: "Integrated Redux + React state hooks for real-time updates." },
      { phase: "Security", desc: "Delivered OTP verification and encrypted Java API transport." },
    ],
  },
  {
    slug: "webgenius-ai",
    kind: "achievement",
    title: "WebGenius-AI — Hackathon Champion",
    subtitle: "1st Place · CodeStormers · Evergent Internal Hackathon",
    tagline:
      "Led team CodeStormers to 1st place 🏆 by building WebGenius-AI — an LLM + Computer Vision powered test automation platform that reimagines browser testing.",
    description:
      "Proud to share that team CodeStormers won 1st Place at Evergent's internal hackathon. As Team Lead I built most of the core logic, led the pitch and guided an amazing crew to deliver WebGenius-AI — an AI-powered test automation platform combining LLMs + Computer Vision.",
    role: "Team Lead · Core Engineering & Pitch",
    year: "2024",
    period: "Evergent Internal Hackathon · 2024",
    client: "Internal · Evergent",
    company: "Evergent Technologies Private Limited",
    location: "Hyderabad, India",
    accent: "from-amber-500/30 via-yellow-500/20 to-orange-500/20",
    heroImage: {
      src: "/case-studies/webgenius-ai/trophy.jpg",
      alt: "Team CodeStormers with the 1st Place trophy",
      caption: "1st Place · Evergent Internal Hackathon",
      hint: "/public/case-studies/webgenius-ai/trophy.jpg",
    },
    technologies: ["LLMs", "Computer Vision", "AI Agents", "Automation", "2FA"],
    overview: [
      "🚀 Hackathon Champion Moment — team CodeStormers secured 1st Place at Evergent Technologies' internal hackathon. As Team Lead, I had the privilege of building most of the core logic, leading the pitch to the jury, and guiding an amazing crew toward a shared technical vision.",
      "Together we built WebGenius-AI — an AI-powered test automation platform designed to revolutionize browser-based testing. It combines LLMs and Computer Vision to automate dynamic browser testing, eliminate brittle scripts, enable zero-code workflows, and provide human-like interaction with smart validations.",
      "Traditional automation tools struggle with scalability, maintenance and dynamic web handling. WebGenius-AI simplifies all that with real-time monitoring, intelligent parsing and an agent-based architecture — all without manual scripting.",
    ],
    challengesLabel: "Why it matters",
    challenges: [
      "Traditional automation tools are brittle — every UI change breaks test scripts and drives up maintenance cost.",
      "Manual test scripting doesn't scale for dynamic, modern web apps with unpredictable DOM changes.",
      "Testing flows that include 2FA and authentication steps are a pain to automate reliably.",
      "QA and non-engineering teams are locked out of automation because everything requires code.",
    ],
    approachLabel: "What we built",
    approach: [
      {
        title: "LLM-powered planner",
        desc:
          "An agent that reads a natural-language test intent and plans the browser steps — no scripts, no selectors to maintain.",
      },
      {
        title: "Computer-vision actor",
        desc:
          "A vision-aware agent that understands the rendered page the way a human does — resilient to DOM changes and dynamic layouts.",
      },
      {
        title: "Smart validator",
        desc:
          "A validation agent that performs intelligent assertions (semantic + visual) and flags anomalies in real time.",
      },
      {
        title: "Security-aware testing",
        desc:
          "First-class support for 2FA and auth flows, so real production journeys are testable end-to-end.",
      },
      {
        title: "Zero-code workflows",
        desc:
          "QA and PMs can author automation without writing scripts — unlocking automation across the whole team.",
      },
      {
        title: "Resilient architecture",
        desc:
          "Scalable, reliable, agent-based framework with real-time monitoring and intelligent parsing.",
      },
    ],
    contributionsLabel: "My role as Team Lead",
    contributions: [
      "Built most of the core logic and code for our project — the AI agent orchestration, browser automation glue and validation layer.",
      "Led the presentation and pitch in front of the jury — articulating the vision, the tech and the why-it-matters.",
      "Guided the team toward a shared technical vision — unblocking, reviewing and pairing through the sprint.",
      "Collaborated with a talented crew to deliver a working, demoable product inside hackathon timelines.",
      "Secured 1st Place 🏆 for CodeStormers at the internal Evergent hackathon.",
    ],
    stackLabel: "Built with",
    stack: [
      { group: "AI Agents", items: ["LLM Planner", "Validator Agent", "Actor Agent"] },
      { group: "Intelligence", items: ["Large Language Models", "Computer Vision", "Semantic Parsing"] },
      { group: "Security", items: ["2FA-aware flows", "Auth handling", "Safe execution"] },
      { group: "Framework", items: ["Scalable", "Reliable", "Resilient", "Real-time monitoring"] },
    ],
    impact: [
      { label: "Result", value: "1st Place 🏆", note: "Team CodeStormers" },
      { label: "My Role", value: "Team Lead", note: "Core code + pitch" },
      { label: "Product", value: "WebGenius-AI", note: "AI test automation" },
      { label: "Approach", value: "Agent-based", note: "LLM + Computer Vision" },
    ],
    timelineLabel: "How we won it",
    timeline: [
      { phase: "Ideation", desc: "Identified a real pain point — brittle, code-heavy test automation." },
      { phase: "Architecture", desc: "Designed an agent-based framework: Planner + Actor + Validator." },
      { phase: "Core build", desc: "Built most of the core logic and code alongside the team." },
      { phase: "Integration", desc: "Layered 2FA-aware testing, vision-based interaction and smart validation." },
      { phase: "Pitch", desc: "Led the presentation and pitch in front of the jury." },
      { phase: "Win", desc: "Team CodeStormers secured 1st Place 🏆." },
    ],
    galleryTitle: "Moments from the win",
    gallery: [
      {
        src: "/case-studies/webgenius-ai/team.jpg",
        caption: "Team CodeStormers",
        hint: "Drop a team photo at /public/case-studies/webgenius-ai/team.jpg",
      },
      {
        src: "/case-studies/webgenius-ai/trophy.jpg",
        caption: "1st Place 🏆",
        hint: "Drop a trophy / award photo at /public/case-studies/webgenius-ai/trophy.jpg",
      },
      {
        src: "/case-studies/webgenius-ai/pitch.jpg",
        caption: "Leading the pitch",
        hint: "Drop a presentation photo at /public/case-studies/webgenius-ai/pitch.jpg",
      },
    ],
  },
  {
    slug: "evergent-culture",
    kind: "achievement",
    title: "Beyond Code — Culture, Community & Sportsmanship",
    subtitle: "Internal Activities @ Evergent",
    tagline:
      "I'm not just a developer. At Evergent I invested deeply in culture — organizing Fun Fridays, serving on multiple committees and co-running the Evergent Premier League tournaments.",
    description:
      "Beyond shipping product, I actively contributed to Evergent's culture: organizing Fun Fridays, serving on Sports/Fun/Cricket committees and co-running EPL (Evergent Premier League) tournaments in 2024 & 2025 — including live commentary.",
    role: "Culture & Community Contributor",
    year: "2022 — 2025",
    period: "Apr 2022 — Aug 2024 · Ongoing community",
    client: "Internal · Evergent",
    company: "Evergent Technologies Private Limited",
    location: "Hyderabad, India",
    accent: "from-violet-500/30 via-indigo-500/20 to-blue-500/20",
    heroImage: {
      src: "/case-studies/evergent-culture/hero.jpg",
      alt: "Evergent culture — team moments",
      caption: "Culture, community & sportsmanship",
      hint: "/public/case-studies/evergent-culture/hero.jpg",
    },
    technologies: ["Team Building", "Event Hosting", "Sports", "Commentary", "Leadership"],
    overview: [
      "Great engineers do more than write code. They build teams, culture and trust — and that's what I cared about at Evergent alongside my day job as a Full-Stack Developer.",
      "From hosting Fun Fridays to running sports committees and live-commentating the Evergent Premier League, I consistently showed up to create space for people to connect, laugh and compete. These moments don't appear on a JIRA board, but they're how a company actually stays a team.",
      "If you're hiring someone who can both ship production software and help build the kind of workplace people love coming to — that's me.",
    ],
    challengesLabel: "Why culture matters",
    challenges: [
      "Cross-functional teams often operate in silos — culture needs deliberate champions to bring people together.",
      "Remote / hybrid setups make casual bonding harder; structured events become essential.",
      "Sports, music and fun aren't extras — they're how trust and psychological safety get built.",
      "People deliver their best work when they feel seen, heard and celebrated.",
    ],
    approachLabel: "How I contributed",
    approach: [
      {
        title: "Fun Friday organizer",
        desc:
          "Organized multiple successful Fun Friday events — games, themed sessions and team-bonding activities that brought teams together across the office.",
      },
      {
        title: "Sports Committee member",
        desc:
          "Part of the Sports Committee — helping plan, schedule and run internal sports activities across the year.",
      },
      {
        title: "Fun Committee member",
        desc:
          "Part of the Fun Committee — ideating office-wide celebrations, contests and feel-good events.",
      },
      {
        title: "Cricket Committee member",
        desc:
          "Active member of the Cricket Committee — organizing matches, managing logistics and keeping the cricket culture alive.",
      },
      {
        title: "EPL 2024 & 2025 co-host",
        desc:
          "Played a role in planning and hosting the Evergent Premier League (EPL) tournaments in 2024 and 2025.",
      },
      {
        title: "Live commentary",
        desc:
          "Took the mic and delivered live commentary during EPL matches — adding energy, storytelling and banter to the games.",
      },
    ],
    contributionsLabel: "Highlights",
    contributions: [
      "Organized multiple successful Fun Friday events that brought teams together.",
      "Member of the Sports Committee, Fun Committee and Cricket Committee at Evergent.",
      "Played a key role in planning and hosting the Evergent Premier League (EPL) tournaments in 2024 & 2025.",
      "Delivered live commentary during EPL matches — bringing energy, storytelling and community to the games.",
      "Helped shape an office culture where people wanted to show up, connect and belong.",
    ],
    stackLabel: "Roles I wore",
    stack: [
      { group: "Committees", items: ["Sports", "Fun", "Cricket"] },
      { group: "Events", items: ["Fun Friday", "EPL 2024", "EPL 2025"] },
      { group: "On the mic", items: ["Live Commentary", "Hosting", "Storytelling"] },
      { group: "Soft skills", items: ["Team Building", "Event Planning", "Leadership"] },
    ],
    impact: [
      { label: "Fun Fridays", value: "Multiple", note: "Team-bonding events hosted" },
      { label: "Committees", value: "3", note: "Sports · Fun · Cricket" },
      { label: "EPL Editions", value: "2024 & 2025", note: "Co-hosted tournaments" },
      { label: "On mic", value: "Live", note: "EPL commentary" },
    ],
    timelineLabel: "Across the years",
    timeline: [
      { phase: "2022 — joined", desc: "Started at Evergent as a Full-Stack Developer." },
      { phase: "Fun Fridays", desc: "Began organizing Fun Friday events across teams." },
      { phase: "Committees", desc: "Joined the Sports, Fun and Cricket committees." },
      { phase: "EPL 2024", desc: "Co-hosted the first Evergent Premier League and did live commentary." },
      { phase: "EPL 2025", desc: "Returned for EPL 2025 — planning, hosting and on the mic again." },
    ],
    galleryTitle: "Moments from the office",
    gallery: [
      {
        src: "/case-studies/evergent-culture/fun-friday.jpg",
        caption: "Fun Friday vibes",
        hint: "Drop a Fun Friday photo at /public/case-studies/evergent-culture/fun-friday.jpg",
      },
      {
        src: "/case-studies/evergent-culture/epl.jpg",
        caption: "EPL tournament",
        hint: "Drop an EPL match / team photo at /public/case-studies/evergent-culture/epl.jpg",
      },
      {
        src: "/case-studies/evergent-culture/commentary.jpg",
        caption: "On the mic",
        hint: "Drop a commentary / hosting photo at /public/case-studies/evergent-culture/commentary.jpg",
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null
  next: Project | null
} {
  const current = projects.find((p) => p.slug === slug)
  if (!current) return { prev: null, next: null }
  const pool = projects.filter(
    (p) => (p.kind ?? "project") === (current.kind ?? "project"),
  )
  if (pool.length < 2) return { prev: null, next: null }
  const idx = pool.findIndex((p) => p.slug === slug)
  const prev = idx > 0 ? pool[idx - 1] : pool[pool.length - 1]
  const next = idx < pool.length - 1 ? pool[idx + 1] : pool[0]
  return { prev, next }
}

export function isAchievement(p: Project): boolean {
  return p.kind === "achievement"
}

export const portfolioProjects = projects.filter((p) => p.kind !== "achievement")
export const achievementProjects = projects.filter((p) => p.kind === "achievement")

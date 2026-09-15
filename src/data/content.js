// All the text on the site lives here.
// Edit this file to update the portfolio — you should not need to touch the components.

export const profile = {
  name: "Nikhil Lather",
  role: "Full Stack MERN Developer",
  tagline:
    "I build and ship production web apps with React, Node.js, Express and MongoDB.",
  summary:
    "Full stack MERN developer with over a year of professional experience building, optimizing and maintaining production-grade web applications, including an AI-powered SaaS product. Comfortable across REST API design, JWT authentication, MVC architecture and third-party AI API integration — and used to refactoring code for performance and shipping reliable features in a fast-moving team.",
  email: "nikhillather02687@gmail.com",
  phone: "+91 8168530783",
  location: "India",
  linkedin: "https://www.linkedin.com/in/nikhil-lather-3514272a9/",
  github: "https://github.com/nikhil-lather",
  resume: "/Nikhil_Lather_Resume.pdf",
};

export const skills = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Styled Components",
      "React Router",
      "Recharts",
      "jsPDF",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST API design",
      "JWT authentication",
      "Bcrypt",
      "MVC architecture",
      "Multer",
    ],
  },
  {
    group: "Database",
    items: [
      "MongoDB",
      "Mongoose ODM",
      "Query optimization",
      "Aggregation pipeline",
    ],
  },
  {
    group: "Tools",
    items: [
      "Groq API (LLaMA 3.3)",
      "PDF / DOCX parsing",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Render",
      "NPM",
    ],
  },
  {
    group: "Concepts",
    items: [
      "Full stack development",
      "AI integration",
      "SaaS architecture",
      "Authentication & authorization",
      "CRUD operations",
    ],
  },
];

export const experience = [
  {
    company: "NS3Edu",
    role: "MERN Stack Developer",
    period: "November 2025 — Present",
    points: [
      "Build and ship full-stack features across the MERN stack, owning work from API design through to the React interface.",
      "Design and integrate RESTful APIs on an MVC structure, with request validation and centralised error-handling middleware.",
      "Implement JWT-based authentication and role-based authorization, including bcrypt password hashing and protected route middleware.",
      "Model application data with Mongoose schemas and improve slow endpoints using indexes and aggregation pipelines.",
      "Build responsive React interfaces from reusable components, with client-side routing and consistent state handling.",
      "Debug production issues and take part in code reviews to keep quality consistent across the team.",
    ],
  },
  {
    company: "CloudDFN",
    role: "Backend Developer",
    period: "June 2025 — October 2025",
    points: [
      "Developed and maintained backend platform features using Node.js and Express.js.",
      "Built authentication and authorization flows for platform users, covering token handling, session validity and access control.",
      "Worked with MongoDB for data modelling and query handling across core platform modules.",
      "Reviewed pull requests and maintained code quality standards across the codebase.",
    ],
  },
];

// `live` and `repo` are optional — a button only shows when the link is filled in.
// Paste your repo URLs into `repo` when you want the code buttons to appear.
export const projects = [
  {
    name: "MyJobify",
    kind: "Job tracking application",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    points: [
      "Engineered a production-ready full-stack job tracking app with complete CRUD functionality, deployed live on Render.",
      "Implemented JWT authentication and role-based authorization, with REST APIs supporting filtering, sorting and pagination.",
      "Delivered an analytics dashboard using area and bar charts (Recharts), plus a dark/light theme toggle.",
      "Architected the backend on the MVC pattern with custom error-handling middleware and an admin panel for user management.",
    ],
    live: "https://my-jobify-iirq.onrender.com",
    repo: "https://github.com/nikhil-lather/nikhil-jobify",
  },
  {
    name: "Natours",
    kind: "RESTful backend API for tour management",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose"],
    points: [
      "Designed a scalable REST API for a tour booking platform with advanced querying and pagination.",
      "Implemented JWT authentication, role-based authorization, MVC architecture and global error-handling middleware.",
      "Handled secure file uploads and image processing, and added rate limiting to strengthen API security.",
    ],
    live: "",
    repo: "https://github.com/nikhil-lather/my-node-bootcamp",
  },
  {
    name: "ATS Optimizer",
    kind: "AI-powered resume analyzer (SaaS)",
    stack: ["React", "Node.js", "MongoDB", "Groq AI"],
    points: [
      "Built a full-stack AI SaaS application that analyzes resumes against job descriptions to help users get past ATS filters.",
      "Integrated Groq LLaMA 3.3 70B to generate match scores, missing-keyword analysis, improvement suggestions and tailored cover letters.",
      "Implemented PDF/DOCX resume parsing, one-click PDF export of reports, a credit system and API rate limiting.",
      "Developed full authentication with analysis history, delete functionality and dark/light mode; deployed on Render.",
    ],
    live: "https://ats-optimizer-ubwu.onrender.com",
    repo: "https://github.com/nikhil-lather/ats-optimizer",
  },
  {
    name: "Notes Manager",
    kind: "Note summarizing tool",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    points: [
      "Upload raw, unstructured notes and get back the important points as a clean set of bullets.",
      "Handles parsing and cleanup of messy input before summarizing, so the output stays readable.",
      "Built with a simple REST backend and a lightweight React interface for uploading and reviewing notes.",
    ],
    live: "",
    repo: "https://github.com/nikhil-lather/notes-manager",
  },
];

export const education = {
  degree: "B.Tech, Computer Science",
  institution: "Ganga Institute of Technology and Management",
  year: "2026",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

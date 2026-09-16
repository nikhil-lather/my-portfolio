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
      "JavaScript (ES6+)",
      "React.js",
      "React Router",
      "HTML",
      "CSS",
      "Styled Components",
      "Recharts",
    ],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "bcrypt", "Multer"],
  },
  {
    group: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Render", "Groq API"],
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
// `live` and `repo` are optional — a button only shows when the link is filled in.
// Paste your repo URLs into `repo` when you want the code buttons to appear.
export const projects = [
  {
    name: "MyJobify",
    kind: "Job tracking application",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    points: [
      "Full-stack app to add, edit, delete and track job applications, deployed on Render.",
      "JWT login, search with filters, sorting and pagination.",
      "Stats page with charts (Recharts) and a dark/light theme toggle.",
    ],
    live: "https://my-jobify-iirq.onrender.com",
    repo: "https://github.com/nikhil-lather/nikhil-jobify",
  },
  {
    name: "Natours",
    kind: "RESTful backend API for tour management",
    stack: ["Node.js", "Express", "MongoDB"],
    points: [
      "REST API for tours with filtering, sorting and pagination.",
      "JWT authentication, admin/user roles and a common error-handling middleware.",
    ],
    live: "",
    repo: "https://github.com/nikhil-lather/my-node-bootcamp",
  },
  {
    name: "ATS Optimizer",
    kind: "AI resume analyzer",
    stack: ["React", "Node.js", "Express", "MongoDB", "Groq API"],
    points: [
      "Web app that compares a resume with a job description and gives a match score, missing keywords and suggestions using the Groq LLaMA 3.3 API.",
      "Users can upload PDF/DOCX resumes and download the analysis as a PDF.",
      "Added login with JWT, a simple credit system to limit usage, and rate limiting on the API.",
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

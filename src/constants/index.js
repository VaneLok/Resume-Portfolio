import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  java,
  clanguage,
  python,
  wordpress,
  airtable,
  go,
  googleworkspace,
  jira,
  microsoft360,
  metasploit,
  n8n,
  vscode,
  klk,
  newcompany,
  billsplitter,
  movielibrary,
  portfolio,
  onepiecegaming,
  comptia,
  ejpt,
  gocert,
  pythoncert,
  jennsec,
  n8njob,
  ejptstudy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "CompTIA Security+",
    icon: comptia,
    imageSize: "w-36 h-36",
  },
  {
    title: "eJPT",
    icon: ejpt,
    imageSize: "w-32 h-32",
  },
  {
    title: "Go (Basic)",
    icon: gocert,
    imageSize: "w-36 h-36",
  },
  {
    title: "Python (Basic)",
    icon: pythoncert,
    imageSize: "w-36 h-36",
  },
];

const technologies = [
  {
    name: "Airtable",
    icon: airtable,
    scale: 1.3,
  },
  {
    name: "Go",
    icon: go,
    scale: 1.4,
  },
  {
    name: "Google Workspace",
    icon: googleworkspace,
    scale: 1.3,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Microsoft 365",
    icon: microsoft360,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "n8n",
    icon: n8n,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "Metasploit",
    icon: metasploit,
  },
];

const experiences = [
  {
    title: "Infrastructure Project Coordinator",
    company_name: "RMG Contract Interior, Richmondhill, ON",
    icon: newcompany,
    iconBg: "#E6DEDD",
    date: "Aug 2023 – Feb 2024",
    points: [
      "Implemented AI-powered workflows, boosting productivity by 20% and cutting annual costs by CAD $75,000–$120,000.",
      "Designed and standardized digital documentation processes, ensuring alignment with enterprise security standards.",
      "Coordinated infrastructure projects with a focus on operational efficiency and security integration.",
      "Managed security-sensitive workflows with an emphasis on data integrity and regulatory compliance.",
      "Acted as technical liaison for infrastructure designs, bridging security requirements with operational needs.",
      "Developed structured onboarding and offboarding procedures within security-clearance environments.",
    ],
  },
  {
    title: "Architectural Technologist",
    company_name: "Delcor Engineering, Markham, ON",
    icon: newcompany,
    iconBg: "#E6DEDD",
    date: "Jan 2023 – Jun 2023",
    points: [
      "Conducted security assessments and enforced version control for engineering documentation.",
      "Evaluated vulnerabilities with IT and engineering teams, driving risk mitigation and compliance efforts.",
      "Designed secure digital workflows for blueprint management, ensuring accessibility while maintaining control.",
      "Standardized documentation practices for technical assets, reducing errors and accelerating project handoffs.",
    ],
  },
  {
    title: "Data Operations Specialist",
    company_name: "ContactPoint 360, Remote, ON",
    icon: newcompany,
    iconBg: "#E6DEDD",
    date: "Jan 2020 – Jan 2023",
    points: [
      "Maintained data protection protocols, achieving 100% regulatory compliance.",
      "Led incident response procedures, reducing resolution time by 35%.",
      "Established structured incident documentation frameworks, strengthening governance and compliance practices.",
    ],
  },
  {
    title: "Honors Bachelor of Interior Design",
    company_name: "Fanshawe College of Applied Arts & Technology, London, ON",
    icon: newcompany,
    iconBg: "#E6DEDD",
    date: "Graduated May 2020",
    points: [
      "Completed comprehensive program in Interior Design with focus on technical design principles.",
      "Developed expertise in space planning, design software, and project management.",
      "Gained foundation in construction documentation and building codes compliance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "3D Interactive Portfolio",
    description:
      "A responsive portfolio built with Three.js, React, and WebGL to showcase cybersecurity and development projects. Features interactive 3D elements, smooth animations, and a modern UI designed to highlight both technical expertise and creativity.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "webgl",
        color: "pink-text-gradient",
      },
    ],
    image: jennsec,
    source_code_link: "https://github.com/VaneLok/Live-Website.git",
  },
  {
    name: "Automated Job Agent",
    description:
      "An automated workflow built with n8n, Google Sheets, and OpenAI to streamline job discovery, triage, and tracking. The system searches postings, filters by location and freshness, evaluates fit with an ATS-style AI model, and logs results in Google Sheets for easy tracking.",
    tags: [
      {
        name: "n8n",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "GoogleSheets",
        color: "pink-text-gradient",
      },
    ],
    image: n8njob,
    source_code_link: "https://github.com/VaneLok/N8N-Job-Hunter-Agent.git",
  },
  {
    name: "INE JPT Study Guide",
    description:
      "A structured study guide created to prepare for INE's Junior Penetration Tester Certification (JPTC). Covers core penetration testing concepts, tools, and practical labs in a concise, exam-focused format.",
    tags: [
      {
        name: "pentesting",
        color: "blue-text-gradient",
      },
      {
        name: "certifications",
        color: "green-text-gradient",
      },
      {
        name: "studyguide",
        color: "pink-text-gradient",
      },
    ],
    image: ejptstudy,
    source_code_link: "https://github.com/VaneLok/INE-JPT-Study-Guide.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
import type React from "react"
import { Globe, Zap, Briefcase } from "lucide-react"

// Work Experience Types and Data
export interface WorkExperience {
  title: string
  company: string
  location: string
  period: string
  description: string
  responsibilities: string[]
  techStack: string[]
  icon: string
  color: string
  borderColor: string
  current: boolean
}

export const workExperience: WorkExperience[] = [
  {
    title: "Full Stack Software Developer",
    company: "ANANA Properties Inc.",
    location: "Vancouver, BC",
    period: "Apr 2024 – Present",
    description:
      "Built and launched a custom CRM platform that streamlined payroll, scheduling, and automated payouts—reducing admin overhead by an estimated 40%.",
    responsibilities: [
      "Built and launched a custom CRM platform that streamlined payroll, scheduling, and automated payouts—reducing admin overhead by an estimated 40%",
      "Developed an AI-powered analytics dashboard to track staffing trends and operational metrics in real-time",
      "Integrated 4+ external property platforms (e.g., Airbnb, Hostaway), enabling real-time data sync across booking and operations",
      "Automated non-API workflows via browser scripting, cutting daily manual tasks by ~3 hours",
      "Deployed a full-stack system using Docker, PM2, and Nginx on a Linux server for high scalability",
    ],
    techStack: ["React", "Node.js", "Docker", "PM2", "Nginx", "Linux"],
    icon: "🏢",
    color: "bg-purple-500",
    borderColor: "border-purple-200",
    current: true,
  },
  {
    title: "Owner - Full Stack Developer",
    company: "Front End on Front",
    location: "Toronto, ON",
    period: "Sep 2019 – Present",
    description: "Delivered 50+ end-to-end software solutions for clients in eCommerce, research, and SaaS.",
    responsibilities: [
      "Delivered 50+ end-to-end software solutions for clients in eCommerce, research, and SaaS",
      "Led web application builds using React, Node.js, PostgreSQL, and custom CMS/CRM systems",
      "Advised clients on architecture and tooling, improving development timelines and system longevity",
      "Notable clients: NYU Pagano Lab, Artistic Skylights, MEC, CAWIC",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "CMS/CRM", "Architecture Consulting"],
    icon: "💻",
    color: "bg-green-500",
    borderColor: "border-green-200",
    current: true,
  },
  {
    title: "Full Stack Developer",
    company: "PDi Prime Datalytics Inc.",
    location: "Vancouver, BC",
    period: "Apr 2022 – Nov 2023",
    description:
      "Co-led development of the company's first AI-driven SaaS analytics platform, using the MERN stack + PostgreSQL.",
    responsibilities: [
      "Co-led development of the company's first AI-driven SaaS analytics platform, using the MERN stack + PostgreSQL",
      "Delivered modular architecture enabling easy scalability and rapid feature releases",
      "Built complex visualizations with Deck.GL to display large-scale data interactively",
      "Automated deployments with Docker and CI/CD, reducing release cycles from weekly to daily",
      "Deployed on AWS and DigitalOcean, ensuring uptime >99.9% and smooth scaling under load",
    ],
    techStack: ["MERN", "PostgreSQL", "Deck.GL", "Docker", "AWS", "DigitalOcean"],
    icon: "🚀",
    color: "bg-blue-500",
    borderColor: "border-blue-200",
    current: false,
  },
]

// Projects Types and Data

export interface Project {
  id: number
  title: string
  year: string
  description: string
  fullDescription: string
  stack: string[]
  features: string[]
  images: string[]
  github: string | null
  demo: string | null
  icon: React.ComponentType<{ className?: string }>
  type: "Personal Project" | "Work Project"
}

export const currentProjects: Project[] = [
  {
    id: 2,
    title: "MCP AI Security Platform",
    year: "WIP – 2025",
    description: "A secure interface that connects proprietary business systems to AI models using Anthropic's Model Context Protocol (MCP).",
    fullDescription:
      "MCP AI Security Platform is a secure interface that connects proprietary business systems to AI models using Anthropic's Model Context Protocol (MCP). It demonstrates how to safely enable AI assistants to access databases, APIs, and internal files while maintaining strict privacy controls and enterprise-grade security.",
    stack: ["React", "Node.js", "TypeScript", "MCP Protocol", "OpenAI API", "JWT Authentication", "Encryption Standards"],
    features: [
      "Secure LLM-to-database/API communication using MCP",
      "Role-based access controls with JWT authentication", 
      "Real-time data filtering and sanitization",
      "Encrypted data transmission",
      "Audit logging and request tracking",
      "Multi-tenant security model",
      "API rate limiting and abuse prevention"
    ],
    images: [],
    github: null,
    demo: null,
    icon: Zap,
    type: "Personal Project",
  },
  {
    id: 1,
    title: "Condo Link",
    year: "WIP – 2025",
    description: "Full-stack property and HOA management platform with role-based dashboards.",
    fullDescription:
      "Condo Link is a comprehensive property management solution designed to streamline communication, payments, and building maintenance workflows. Features role-based dashboards and integrated payment processing.",
    stack: ["MERN", "Auth0", "Stripe", "DigitalOcean"],
    features: ["Role-based dashboards", "Payment processing", "Ticketing system", "Notifications"],
    images: ["https://cdn.frontendonfront.com/CondoLinkScreenshot1.png", "https://cdn.frontendonfront.com/CondoLinkScreenshot2.png"],
    github: "https://github.com/Garciat427/CondoLink",
    demo: null,
    icon: Briefcase,
    type: "Personal Project",
  },
]

export const pastProjects: Project[] = [
  {
    id: 3,
    title: "BuzzCircle",
    year: "2024",
    description: "Real-time social platform with Next.js 15, Firebase, and comprehensive authentication system.",
    fullDescription:
      "BuzzCircle is a modern real-time social media platform built with Next.js 15 and Firebase. The application features comprehensive user authentication, real-time post feeds, commenting system, and social interactions. Built with performance-first architecture using App Router, server components, and automatic code splitting for lightning-fast performance. Firebase Firestore provides real-time synchronization ensuring all users see new posts and comments instantly without page refreshes.",
    stack: ["Next.js 15", "React 18", "TypeScript", "Firebase", "Tailwind CSS", "Shadcn/ui"],
    features: [
      "Real-time social feed",
      "Firebase Authentication",
      "Next.js App Router",
      "TypeScript integration",
      "Responsive design",
      "Real-time comments",
      "Social interactions",
      "Performance optimized",
    ],
    images: ["https://cdn.frontendonfront.com/BuzzCircleScreenshot1.png", "https://cdn.frontendonfront.com/BuzzCircleScreenshot2.png"],
    github: "https://github.com/Garciat427/BuzzCircle",
    demo: "https://buzzcircle.frontendonfront.com/",
    icon: Globe,
    type: "Personal Project",
  },
  {
    id: 4,
    title: "Primer Datalake",
    year: "2022–2023",
    description:
      "Unified, cookieless data ecosystem powered by machine learning for smarter advertising and audience targeting.",
    fullDescription:
      "Primer Datalake is a comprehensive data intelligence platform that unifies diverse datasets into a single, flexible source of truth for advertising. The platform ingests, normalizes, and enriches first- and third-party data including demographic, psychographic, behavioral, financial, and location data. Built with a privacy-first approach using cookieless data and offline signals, it features AI-powered trading desk capabilities and proprietary algorithms for precise audience targeting across channels and DSPs. The platform transforms raw data into actionable insights with machine-learning feedback, enabling effective campaign planning and execution in a privacy-conscious advertising landscape.",
    stack: ["MERN", "PostgreSQL", "Deck.GL", "Docker", "AWS", "DSP Integration"],
    features: [
      "Unified data ecosystem",
      "Cookieless targeting",
      "AI-powered trading desk",
      "Machine learning algorithms",
      "Privacy-first approach",
      "Cross-channel optimization",
      "Real-time insights",
      "Audience segmentation",
    ],
    images: [],
    github: null,
    demo: null,
    icon: Zap,
    type: "Work Project",
  },
  {
    id: 5,
    title: "ANANA Properties CRM",
    year: "2024",
    description:
      "Custom CRM platform that streamlined payroll, scheduling, and automated payouts—reducing admin overhead by 40%.",
    fullDescription:
      "Built and launched a comprehensive CRM platform for ANANA Properties that revolutionized their operations. The system streamlined payroll management, scheduling, and automated payouts, resulting in an estimated 40% reduction in administrative overhead. Featured an AI-powered analytics dashboard for tracking staffing trends and operational metrics in real-time, plus integration with 4+ external property platforms including Airbnb and Hostaway for seamless data synchronization.",
    stack: ["React", "Node.js", "Docker", "PM2", "Nginx", "Linux", "API Integration"],
    features: [
      "Payroll automation",
      "AI analytics dashboard",
      "Multi-platform integration",
      "Browser automation",
      "Real-time sync",
    ],
    images: [],
    github: null,
    demo: null,
    icon: Briefcase,
    type: "Work Project",
  },
  {
    id: 7,
    title: "MotoFarrings",
    year: "2023",
    description:
      "Custom Shopify app for selling personalized motorcycle fairings with three pricing tiers and custom product workflows.",
    fullDescription:
      "MotoFarrings is a custom Shopify app built in 2023 to support the sale of personalized motorcycle fairings with three pricing tiers. This project was created to learn the Shopify ecosystem, including Liquid templating, Shopify's admin and storefront APIs, and app development best practices. The app showcases a working knowledge of eCommerce architecture and custom product workflows.",
    stack: ["Shopify (Liquid, Polaris)", "Node.js", "React", "GraphQL", "Shopify CLI", "Webhooks"],
    features: [
      "Custom product configuration and pricing logic",
      "Tiered pricing model for fairings",
      "Admin dashboard customization",
      "Liquid-based storefront modifications",
      "Integration with Shopify APIs (Storefront & Admin)",
    ],
    images: [],
    github: null,
    demo: null,
    icon: Globe,
    type: "Personal Project",
  },
  {
    id: 6,
    title: "Med 2.0",
    year: "2023",
    description: "Medical symptom tracker and diagnosis application with crowd-sourced empirical data collection.",
    fullDescription:
      "Med 2.0 is a medical-based application developed with two primary goals: providing diagnosis to end-users based on symptoms provided, and collecting crowd-sourced empirical data on diagnoses to allow for foresight of current conditions within an area. This data collection proves beneficial for healthcare resource allocation and trend analysis.",
    stack: ["React", "Node.js", "Express", "MySQL", "Sequelize ORM", "Materialize CSS"],
    features: ["Symptom diagnosis", "Crowd-sourced data", "Medical trend tracking", "Resource allocation insights"],
    images: ["https://cdn.frontendonfront.com/Med2Screenshot1.png", "https://cdn.frontendonfront.com/Med2Screenshot2.png", "https://cdn.frontendonfront.com/Med2Screenshot3.png"],
    github: null,
    demo: null,
    icon: Globe,
    type: "Personal Project",
  },
]

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

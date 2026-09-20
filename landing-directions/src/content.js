import {
  UsersThree,
  ChartLineUp,
  FolderSimple,
  CheckSquare,
  Megaphone,
  Browser,
  Palette,
  Code,
  Lifebuoy,
} from "@phosphor-icons/react";

export const directions = [
  {
    id: "cinematic",
    number: "01",
    name: "Cinematic brand",
    label: "Presence, with purpose.",
    description:
      "An immersive, dark canvas. Sculptural imagery, confident typography, and a slower, cinematic rhythm.",
    image: "brand-glass",
    tags: ["Atmospheric", "Expressive", "Brand-led"],
  },
  {
    id: "editorial",
    number: "02",
    name: "Editorial technology",
    label: "Clarity makes an impact.",
    description:
      "A warm, open composition. Oversized typography, editorial storytelling, and deliberate contrast.",
    image: "brand-cards",
    tags: ["Refined", "Human", "Services-led"],
  },
  {
    id: "connected",
    number: "03",
    name: "Connected systems",
    label: "Everything, working together.",
    description:
      "A precise, indigo experience. Interactive modules, a visible system, and a clear path to the right tools.",
    image: "brand-phone",
    tags: ["Interactive", "Structured", "Product-led"],
  },
];

export const modules = [
  {
    id: "hr",
    name: "People",
    formal: "HR",
    icon: UsersThree,
    title: "A little less admin. A lot more human.",
    short: "Bring your people and their work together.",
    description:
      "Give people, documents, and everyday processes a clearer place in your business.",
    tasks: ["People & teams", "Leave & onboarding", "Employee documents"],
    category: "Operations",
    number: "01",
  },
  {
    id: "crm",
    name: "Relationships",
    formal: "CRM",
    icon: ChartLineUp,
    title: "Make the next conversation count.",
    short: "Keep relationships moving forward.",
    description:
      "Organize contacts, understand opportunities, and keep the next action in view.",
    tasks: [
      "Contacts & companies",
      "Pipeline visibility",
      "Follow-ups & activities",
    ],
    category: "Growth",
    number: "02",
  },
  {
    id: "files",
    name: "Files",
    formal: "Files",
    icon: FolderSimple,
    title: "Find the file. Keep the flow.",
    short: "Give your business knowledge a home.",
    description:
      "Bring the documents that matter into a clear, shared structure your team can understand.",
    tasks: [
      "Folders & organization",
      "Document discovery",
      "Sharing workflows",
    ],
    category: "Operations",
    number: "03",
  },
  {
    id: "tasks",
    name: "Work",
    formal: "Tasks",
    icon: CheckSquare,
    title: "From a good idea to a job well done.",
    short: "Turn priorities into progress.",
    description:
      "Connect projects, people, and next steps so everyone can see what moves the work forward.",
    tasks: [
      "Project planning",
      "Ownership & priorities",
      "Progress visibility",
    ],
    category: "Operations",
    number: "04",
  },
  {
    id: "marketing",
    name: "Marketing",
    formal: "Marketing",
    icon: Megaphone,
    title: "Give every campaign a direction.",
    short: "Make your next move more intentional.",
    description:
      "Bring campaign plans, content, and customer activity into a more considered marketing workflow.",
    tasks: ["Campaign planning", "Content calendar", "Performance overview"],
    category: "Growth",
    number: "05",
  },
  {
    id: "website",
    name: "Website",
    formal: "Website Manager",
    icon: Browser,
    title: "Keep your digital front door open.",
    short: "Make your website easier to manage.",
    description:
      "See content, requests, and website priorities together, with a clearer path from update to action.",
    tasks: ["Content management", "Website requests", "Maintenance overview"],
    category: "Growth",
    number: "06",
  },
];

export const services = [
  {
    title: "Brand & digital design",
    category: "Make it matter",
    icon: Palette,
    text: "From the first impression to the smallest interaction. Identity and experiences built around your audience.",
    details: "Brand strategy · Visual identity · UI/UX design",
    index: "01",
  },
  {
    title: "Web & app development",
    category: "Make it work",
    icon: Code,
    text: "Translate an ambitious idea into a considered digital experience. Websites and applications with a purpose.",
    details: "Websites · Applications · Digital experiences",
    index: "02",
  },
  {
    title: "Marketing & growth",
    category: "Make it move",
    icon: Megaphone,
    text: "Connect your story with the people who need to hear it. A clearer strategy for meaningful attention.",
    details: "Search · Campaigns · Content strategy",
    index: "03",
  },
  {
    title: "IT & ongoing support",
    category: "Keep it moving",
    icon: Lifebuoy,
    text: "A dependable partner for the work after launch. Keep improving the systems your business relies on.",
    details: "Website care · Technical support · Improvements",
    index: "04",
  },
];

export const steps = [
  [
    "Understand",
    "Start with the right questions.",
    "Your business, your people, and what needs to work better.",
  ],
  [
    "Design",
    "Make the way forward clear.",
    "A shared direction, a considered experience, and a practical plan.",
  ],
  [
    "Deliver",
    "Bring the details together.",
    "Design and technology shaped into something people can use.",
  ],
  [
    "Evolve",
    "Keep making it better.",
    "Learn from the work, respond to change, and build on what matters.",
  ],
];

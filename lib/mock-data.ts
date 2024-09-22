export interface Question {
  id: number;
  question: string;
  wordLimit: number;
}

export interface JobApplication {
  id: number;
  company: string;
  position: string;
  description: string;
  requirements: string[];
  deadline: string;
  salary: string;
  questions: Question[];
  progress: number;
}

export interface UserProfile {
  name: string;
  position: string;
  workExperience: {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
  }[];
  projects: {
    name: string;
    description: string;
  }[];
  skills: string[];
  resumeOptimization: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Describe your experience with React and state management.",
    wordLimit: 250,
  },
  {
    id: 2,
    question: "How do you approach testing in your projects?",
    wordLimit: 150,
  },
  {
    id: 3,
    question:
      "Describe a challenging project you've worked on and how you overcame obstacles.",
    wordLimit: 300,
  },
];

const jobDescription =
  "The ideal candidate will have extensive experience in building complex, scalable web applications using React and related technologies. You will be responsible for leading frontend development efforts, mentoring junior developers, and collaborating with cross-functional teams to deliver high-quality software solutions.";

const jobRequirements = [
  "5+ years of experience with React and modern JavaScript",
  "Strong understanding of state management (Redux, MobX, or similar)",
  "Experience with TypeScript and GraphQL",
  "Familiarity with server-side rendering and Next.js",
  "Knowledge of responsive design and cross-browser compatibility",
  "Excellent problem-solving and communication skills",
];

const jobDeadline = "June 30, 2025";

const jobSalary = "$120,000 - $150,000";

export const jobApplications: JobApplication[] = [
  {
    id: 1,
    company: "TechCorp Inc.",
    position: "Senior React Developer",
    description: jobDescription,
    requirements: jobRequirements,
    deadline: jobDeadline,
    salary: jobSalary,
    questions,
    progress: 75,
  },
  {
    id: 2,
    company: "InnoSoft",
    position: "Full Stack Engineer",
    description: jobDescription,
    requirements: jobRequirements,
    deadline: jobDeadline,
    salary: jobSalary,
    questions,
    progress: 50,
  },
  {
    id: 3,
    company: "DataViz Co.",
    position: "Frontend Specialist",
    description: jobDescription,
    requirements: jobRequirements,
    deadline: jobDeadline,
    salary: jobSalary,
    questions,
    progress: 25,
  },
];

export const userProfile: UserProfile = {
  name: "John Doe",
  position: "Software Engineer",
  workExperience: [
    {
      position: "Senior Developer",
      company: "TechCorp Inc.",
      startDate: "2018",
      endDate: "2021",
    },
    {
      position: "Full Stack Developer",
      company: "WebSolutions",
      startDate: "2015",
      endDate: "2018",
    },
    {
      position: "Junior Developer",
      company: "StartupX",
      startDate: "2013",
      endDate: "2015",
    },
  ],
  projects: [
    {
      name: "E-commerce Platform Redesign",
      description:
        "Redesigned the e-commerce platform to improve user experience and increase conversion rates.",
    },
    {
      name: "AI-powered Chatbot Integration",
      description:
        "Integrated an AI-powered chatbot into the e-commerce platform to provide personalized recommendations and support.",
    },
    {
      name: "Mobile App for Fitness Tracking",
      description:
        "Developed a mobile app for tracking fitness activities and setting goals, allowing users to monitor their progress and stay motivated.",
    },
  ],
  skills: ["React", "Node.js", "TypeScript", "GraphQL", "AWS", "Docker"],
  resumeOptimization: 75,
};

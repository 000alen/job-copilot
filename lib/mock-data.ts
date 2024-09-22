export interface Question {
  id: string;
  question: string;
  answer: string;
  wordLimit: number;
}

export interface JobApplication {
  id: string;
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
    id: "1",
    question: "Describe your experience with React and state management.",
    answer:
      "As a React professional, I've worked extensively with React and various state management solutions throughout my career. My experience spans from using class components with local state to implementing global state management with Redux, Context API, and modern solutions like Recoil, Jotai, and React Query. I've learned to choose the right tool based on project requirements, balancing simplicity and scalability. For larger applications, I've used Redux with middleware for handling complex state and side effects, while for medium-sized projects, I've leveraged the Context API with hooks for a more lightweight approach. Recently, I've found great success combining React Query for server state management with solutions like Zustand for client-side state. Throughout my journey, I've emphasized the importance of proper data normalization, using selectors for derived state, and implementing React's performance optimization techniques to maintain efficient applications. This diverse experience allows me to adapt to different project needs and implement the most appropriate state management solution for each unique scenario.",
    wordLimit: 250,
  },
  {
    id: "2",
    question: "How do you approach testing in your projects?",
    answer:
      "In my React projects, I adopt a comprehensive testing strategy that encompasses various levels of the testing pyramid. At the foundation, I implement a robust suite of unit tests using Jest and React Testing Library, focusing on individual components and utility functions to ensure they work as expected in isolation. For more complex interactions and component integration, I utilize integration tests, often leveraging React Testing Library's powerful querying and interaction capabilities. End-to-end testing with tools like Cypress or Playwright forms the top of my testing pyramid, allowing me to simulate real user scenarios and catch issues that might slip through lower-level tests. I'm a strong advocate for Test-Driven Development (TDD) when appropriate, writing tests before implementation to guide the development process and ensure thorough coverage. Additionally, I implement snapshot testing for UI components to detect unexpected changes in component rendering. To maintain code quality and catch potential issues early, I integrate these tests into our CI/CD pipeline, ensuring that all tests pass before allowing merges or deployments. This multi-faceted approach to testing, combined with practices like code reviews and static type checking with TypeScript, helps me deliver robust and reliable React applications while facilitating easier maintenance and refactoring in the long run.",
    wordLimit: 150,
  },
  {
    id: "3",
    question:
      "Describe a challenging project you've worked on and how you overcame obstacles.",
    answer:
      "One of the most challenging projects I've worked on was developing a real-time collaborative document editing platform, similar to Google Docs, using React and Node.js. The main obstacles we faced were maintaining data consistency across multiple users, handling conflicts, and ensuring smooth performance with potentially hundreds of simultaneous edits. To overcome these challenges, we implemented a custom Operational Transformation algorithm for real-time synchronization, leveraging WebSockets for instant updates. We used Redux for state management, but had to optimize it heavily to handle frequent updates without compromising performance. This involved implementing custom middleware for batching updates and using memoization techniques extensively. To manage the complex UI interactions, we developed a custom rich text editor component using Draft.js, extending it to support collaborative features. One of the biggest hurdles was dealing with network latency and offline mode, which we addressed by implementing a robust conflict resolution system and using Service Workers for offline caching. Throughout the project, we maintained a rigorous testing regime, utilizing Jest for unit tests, React Testing Library for component tests, and Cypress for end-to-end testing. This comprehensive testing approach was crucial in catching and resolving edge cases in our real-time synchronization logic. Despite the complexity, by breaking down the problem into smaller, manageable parts, leveraging the right technologies, and maintaining clear communication within the team, we successfully delivered a performant and reliable collaborative editing platform.",
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
    id: "1",
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
    id: "2",
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
    id: "3",
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

export const siteConfig = {
  name: "Prabhjot Sidhu",
  title: "Computer Science Co-op Student",
  description:
    "Portfolio of Prabhjot Sidhu – AI, Full-Stack, and Cloud Developer",
  accentColor: "#1d4ed8",
  social: {
    email: "sidhu.prabhjot@outlook.com",
    linkedin: "http://www.linkedin.com/in/prabhjot-sidhu-b48b71235",
    github: "https://github.com/sidhu-prabhjot?tab=repositories",
  },
  aboutMe:
    "I’m a Computer Science co-op student at the University of Guelph with hands-on experience building full-stack web applications, AI pipelines, and cloud-based systems. I enjoy turning complex problems into scalable, production-ready solutions and am passionate about creating software that makes an impact. My expertise includes Python, TypeScript, React, Node.js, FastAPI, AWS, GCP, and AI/ML frameworks like TensorFlow and PyTorch.",
  skills: [
    "Python",
    "TypeScript",
    "JavaScript",
    "Java",
    "C#",
    "React",
    "Node.js",
    "FastAPI",
    "AWS",
    "GCP",
    "Docker",
    "SQL",
    "TensorFlow",
    "PyTorch",
  ],
  projects: [
    {
      name: "Sentiment ML Classifier",
      description:
        "Trained and deployed a sentiment classification model using TensorFlow and AWS Lambda, storing feedback in DynamoDB and hosting model files on GCP Cloud Storage.",
      link: "https://master.d1l57gttr680ad.amplifyapp.com/",
      skills: ["Python", "TensorFlow", "AWS", "GCP", "React"],
    },
    {
      name: "Weather Web Application",
      description:
        "Built a responsive web app using React and AWS Amplify to display weather data from a REST API, optimized for mobile and desktop.",
      link: "https://main.d2k8wkh3s5ilt5.amplifyapp.com/",
      skills: ["React", "JavaScript", "AWS", "HTML5", "CSS3"],
    },
  ],
  experience: [
    {
      company: "Magnet Forensics",
      title: "Software Developer – AI Engineering Team",
      dateRange: "Jan 2025 – Aug 2025",
      bullets: [
        "Reduced API costs by $14K/month through caching and smarter refresh logic",
        "Increased image captioning throughput 9x by optimizing binary payloads",
        "Implemented video and audio transcoding workflows, reducing failures",
        "Built an audio transcription pipeline, saving $2K/month",
      ],
    },
    {
      company: "Perimeter Institute",
      title: "Software Developer – Cloud & Automation",
      dateRange: "May 2024 – Aug 2024",
      bullets: [
        "Built a custom subtitle and transcription editor with React and Node.js",
        "Automated enrollment workflows, reducing monthly costs by 46%",
        "Delivered stakeholder demos and production-ready features",
      ],
    },
    {
      company: "University of Guelph",
      title: "Web Developer",
      dateRange: "Sep 2023 – Dec 2023",
      bullets: [
        "Migrated Drupal 7 web pages to Drupal 9 with improved functionality and security",
        "Designed accessible modular pages to enhance user experience",
        "Integrated Azure SQL databases for employee and vehicle tracking",
      ],
    },
  ],
  education: [
    {
      school: "University of Guelph",
      degree: "Bachelor of Computing, Honours Co-op – Computer Science",
      dateRange: "2021 – 2026 (Expected)",
      achievements: [
        "Maintaining 87% average",
        "Completing a minor in Marketing",
      ],
    },
  ],
};

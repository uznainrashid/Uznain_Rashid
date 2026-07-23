// src/lib/data.ts

export const profileData = {
  name: "Uznain Rashid",
  role: "Full Stack Developer",
  tagline: "CS graduate & Full-Stack Developer specializing in the MERN stack, Next.js, and AI integration.",
  location: "Lahore, Punjab, Pakistan",
  email: "uznainrashid5@gmail.com",
  phone: "0308-9245646",
  github: "https://github.com/uznainrashid",
  linkedin: "https://www.linkedin.com/in/uznain-rashid-806442321/",
  languages: ["English", "Urdu", "Punjabi"],
  hobbies: ["Sports", "Gaming", "Music", "Movies", "Traveling"]
};

export const skillsData = [
  { 
    category: 'Frontend & Full-Stack', 
    items: [
      { name: 'React.js', level: 90 }, 
      { name: 'Next.js', level: 85 }, 
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5/CSS3', level: 95 }
    ] 
  },
  { 
    category: 'Backend & Databases', 
    items: [
      { name: 'Node.js', level: 85 }, 
      { name: 'Express.js', level: 85 }, 
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'Appwrite', level: 70 }
    ] 
  },
  { 
    category: 'AI & Data Science', 
    items: [
      { name: 'LangChain & RAG', level: 80 }, 
      { name: 'LangGraph & LangSmith', level: 70 },
      { name: 'ChromaDB & Qdrant', level: 75 }, 
      { name: 'Machine Learning (Scikit-Learn)', level: 70 },
      { name: 'PyTorch & Hugging Face', level: 65 },
      { name: 'Data Visualization (Seaborn/Matplotlib)', level: 70 }
    ] 
  },
  {
    category: 'Tools & DevOps',
    items: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Postman / Thunder Client', level: 85 },
      { name: 'Vercel / Netlify / Render', level: 80 },
      { name: 'C++', level: 75 }
    ]
  }
];

export const projectsData = [
  {
    id: '1',
    title: 'SmartBuy - Full-Stack E-Commerce Platform',
    slug: 'smartbuy',
    date: 'Dec 2024',
    description: 'A full-stack e-commerce marketplace featuring secure JWT authentication, dynamic product browsing, integrated shopping carts, a dual-payment gateway (Stripe & COD), and a role-based admin panel.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'TailwindCSS', 'Stripe'],
    live_url: 'https://fyp-1-y2q7.vercel.app',
    github_url: 'https://github.com/uznainrashid/FYP1',
    image_url: '/project-12.jpg',
    features: [
      'Developed a full-stack e-commerce marketplace with secure JWT auth, bcrypt password hashing, and session handling via cookie-parser.',
      'Engineered dynamic product browsing, shopping cart workflows, and a dual-payment gateway supporting Stripe and Cash on Delivery.',
      'Built a comprehensive admin dashboard with strict role-based access control to monitor orders, manage catalogs, and users.'
    ]
  },
  {
    id: '2',
    title: 'SwiftChat - Real-Time Chat Application',
    slug: 'swiftchat',
    date: 'Mar 2026',
    description: 'A full-stack real-time conversational application featuring instant messaging and private chat rooms with low-latency bi-directional communication channels.',
    tech: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Mongoose', 'JWT', 'TailwindCSS'],
    live_url: 'https://chat-app-eta-one-62.vercel.app/',
    github_url: 'https://github.com/uznainrashid/chatApp',
    image_url: '/project-7.jpg',
    features: [
      'Implemented Socket.io to establish seamless, low-latency bi-directional communication channels and managed active user statuses.',
      'Managed persistent user data, structural message payloads, and detailed chat histories utilizing MongoDB and Mongoose schemas.',
      'Integrated JWT for robust user authentication and session management paired with an SEO-optimized, highly responsive Tailwind UI.'
    ]
  },
  {
    id: '3',
    title: 'MERN Authentication & Security Suite',
    slug: 'mern-auth',
    date: 'Jan 2025',
    description: 'A robust authentication and user management system with secure password hashing, JWT token handling, and protected REST API endpoints.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt', 'TailwindCSS'],
    live_url: 'https://github.com/uznainrashid/mern-app',
    github_url: 'https://github.com/uznainrashid/mern-app',
    image_url: '/project-2.jpg',
    features: [
      'Architected secure user registration and login workflows using JWT authentication and encrypted passwords with Bcrypt.',
      'Designed protected API routes and middleware in Express.js for verifying user access tokens.',
      'Constructed a clean, responsive client interface using React.js and TailwindCSS with dynamic state updates.'
    ]
  },
  {
    id: '4',
    title: 'BookStore - Full-Stack Management App',
    slug: 'bookstore-app',
    date: 'Feb 2025',
    description: 'An interactive full-stack bookstore management application supporting complete CRUD operations, inventory cataloging, and RESTful API endpoints.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'Axios'],
    live_url: 'https://github.com/uznainrashid/BookStore',
    github_url: 'https://github.com/uznainrashid/BookStore',
    image_url: '/project-3.jpg',
    features: [
      'Built a full CRUD interface for managing digital book collections, details, and dynamic updates.',
      'Developed scalable RESTful backend services in Node.js and Express to process database operations efficiently.',
      'Utilized MongoDB and Mongoose schemas to ensure structured document storage and query efficiency.'
    ]
  },
  {
    id: '5',
    title: 'Real Estate Portal',
    slug: 'real-estate-portal',
    date: 'Aug 2025',
    description: 'A high-performance real estate web portal offering modern property listing browsing, interactive filtering, and custom architectural layouts.',
    tech: ['React.js', 'TailwindCSS', 'JavaScript', 'Vercel'],
    live_url: 'https://real-estate-lake-one.vercel.app/',
    github_url: 'https://github.com/uznainrashid',
    image_url: '/project-4.jpg',
    features: [
      'Engineered an interactive, responsive property showcase UI using React.js and TailwindCSS.',
      'Implemented dynamic client-side filtering and search workflows for seamless property navigation.',
      'Optimized layout performance, cross-browser compatibility, and deployed on Vercel infrastructure.'
    ]
  },
  {
    id: '6',
    title: 'Travelia - Travel & Tourism Platform',
    slug: 'travelia-company',
    date: 'Oct 2025',
    description: 'A modern, visually immersive landing and booking showcase platform for travel agencies featuring interactive UI elements and responsive design.',
    tech: ['React.js', 'TailwindCSS', 'Framer Motion', 'Vercel'],
    live_url: 'https://travelia-company.vercel.app/',
    github_url: 'https://github.com/uznainrashid',
    image_url: '/project-5.jpg',
    features: [
      'Designed a sleek, user-centric interface tailored for booking destinations and exploring travel packages.',
      'Integrated modern CSS utility styling and responsive grid layouts for flawless display across all viewports.',
      'Deployed on Vercel with optimized asset delivery and fast load speeds.'
    ]
  },
  {
    id: '7',
    title: 'TaskFlow - Task Management App',
    slug: 'todo-app',
    date: 'Nov 2025',
    description: 'A minimalist task management web application engineered with custom React state mechanics, local persistence, and sleek interactive styling.',
    tech: ['React.js', 'TailwindCSS', 'JavaScript', 'Vercel'],
    live_url: 'https://todo-app-eta-jet.vercel.app/',
    github_url: 'https://github.com/uznainrashid',
    image_url: '/project-6.jpg',
    features: [
      'Developed real-time task creation, completion tracking, and deletion using optimized React Hooks.',
      'Implemented local storage sync to maintain user tasks across browser sessions seamlessly.',
      'Designed a clean, dark/light compatible UI focusing on user productivity and seamless feedback.'
    ]
  }
];

export const experienceData = [
  { 
    id: 1,
    role: 'MERN Stack Developer Intern', 
    company: 'Dafi Lab', 
    date: 'Present', 
    location: 'Remote',
    desc: 'Developing dynamic web applications, designing scalable RESTful APIs, and implementing state management and UI flows using the MERN stack and Next.js.' 
  },
  { 
    id: 2,
    role: 'ML Intern', 
    company: 'FlyRank AI', 
    date: 'June 2026 - Present', 
    location: 'Remote',
    desc: 'Working with the FlyRank AI team through their Internship Program, focusing on modern AI integrations, RAG pipelines, and Agentic workflows.' 
  },

  { 
    id: 3,
    role: 'MERN Stack Developer Intern', 
    company: 'Micro Data Tech Solutions', 
    date: 'Sep 2025 - Oct 2026', 
    location: 'RS MART, DHA Phase 9 Town Lahore',
    desc: 'Contributed to building dynamic web features using React.js and Node.js/Express, designed MongoDB schemas, managed application state, and created reusable, modular UI components using TailwindCSS.' 
  },
  { 
    id: 4,
    role: 'MERN Stack & Next.js Developer Intern', 
    company: 'Techzoq (Pvt.) Ltd', 
    date: 'Dec 2025 - Feb 2026', 
    location: 'Kasur, Punjab',
    desc: 'Built high-performance full-stack applications using MERN & Next.js. Designed RESTful APIs, optimized server-side performance, implemented secure user auth, and collaborated on component-driven Tailwind CSS interfaces.' 
  }
];

export const educationData = [
  { 
    id: 1,
    degree: 'BS Computer Science', 
    institute: 'Govt. College University Faisalabad', 
    date: 'Sep 2021 - Sep 2025', 
    location: 'Faisalabad, Punjab',
    desc: 'Graduated with a CGPA of 3.21/4.00. Built a strong foundation in computer science core principles, software engineering, and full-stack web architectures.' 
  }
];

export const certificationsData = [
  {
    id: 1,
    title: 'Certificate in IT (Web Development)',
    institute: 'TECH-HUB',
    date: 'May 2023'
  }
];
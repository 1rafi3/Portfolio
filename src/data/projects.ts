import type { IProject } from "@/types/project";

function img(slug: string, file: string, alt: string, w = 1200, h = 675) {
  return { src: `/images/projects/${slug}/${file}`, alt, width: w, height: h };
}

export const projects: IProject[] = [
  {
    title: "RentNest",
    slug: "rentnest",
    shortDescription:
      "A premium co-living and rental platform for discovering hand-picked spaces with modern amenities.",
    fullDescription:
      "RentNest is a full-featured property rental platform that connects tenants with premium co-living spaces, apartments, studios, and villas. The platform features advanced search and filtering, secure billing, digital smart door access, and a community-focused experience with coworking lounges and networking events. Built as a full-stack application with a focus on modern UI/UX and seamless booking workflows.",
    thumbnail: img("rentnest", "thumbnail.webp", "RentNest project thumbnail"),
    heroImage: img("rentnest", "hero.png", "RentNest hero preview", 1600, 900),
    gallery: [
      img("rentnest", "gallery-1.png", "RentNest screenshot 1"),
      img("rentnest", "gallery-2.png", "RentNest screenshot 2"),
      img("rentnest", "gallery-3.png", "RentNest screenshot 3"),
    ],
    category: "Full-Stack",
    status: "completed",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Property listing with advanced search and filter tools",
      "Secure billing and reservation system",
      "User authentication and profile management",
      "Responsive design with premium UI/UX",
    ],
    challenges: [
      "Implementing a responsive and intuitive search interface that works across all device sizes",
      "Building a secure billing flow with proper error handling and user feedback",
    ],
    lessonsLearned: [
      "Importance of mobile-first design for property discovery platforms",
      "How to structure a scalable component hierarchy for complex UI states",
    ],
    futureImprovements: [
      "Add real-time availability calendar",
      "Integrate payment gateway for in-app transactions",
      "Add user reviews and rating system",
    ],
    links: {
      liveDemo: "https://rest-net-client.vercel.app/",
    },
    role: "Full-Stack Developer",
    featured: true,
    order: 1,
  },
  {
    title: "IntelliStudy AI",
    slug: "intellistudy-ai",
    shortDescription:
      "An AI-powered learning coach that helps students study smarter with personalized assistance.",
    fullDescription:
      "IntelliStudy AI is an intelligent learning platform designed to act as a personal AI coach for students. It leverages modern web technologies to provide an interactive and adaptive learning experience. The platform aims to make studying more efficient by providing personalized recommendations and AI-driven assistance.",
    thumbnail: img("intellistudy-ai", "thumbnail.png", "IntelliStudy AI project thumbnail"),
    heroImage: img("intellistudy-ai", "hero.png", "IntelliStudy AI hero preview", 1600, 900),
    gallery: [
      img("intellistudy-ai", "gallery-1.png", "IntelliStudy AI screenshot 1"),
      img("intellistudy-ai", "gallery-2.png", "IntelliStudy AI screenshot 2"),
      img("intellistudy-ai", "gallery-3.png", "IntelliStudy AI screenshot 3"),
    ],
    category: "Full-Stack",
    status: "completed",
    techStack: ["Next.js", "React", "AI", "Vercel"],
    features: [
      "AI-powered learning assistance",
      "Personalized study recommendations",
      "Interactive learning interface",
    ],
    challenges: [
      "Integrating AI capabilities within a responsive web interface",
      "Designing an intuitive user flow for AI-assisted learning",
    ],
    lessonsLearned: [
      "How to structure applications for AI integration",
      "Best practices for building interactive educational tools",
    ],
    futureImprovements: [
      "Expand AI model capabilities for subject-specific tutoring",
      "Add progress tracking and analytics dashboard",
      "Implement collaborative study rooms",
    ],
    links: {
      liveDemo: "https://intelli-study-frontend.vercel.app/",
    },
    role: "Full-Stack Developer",
    featured: true,
    order: 2,
  },
  {
    title: "Qurbani Market",
    slug: "qurbani-market",
    shortDescription:
      "A modern full-stack livestock marketplace built for Qurbani, enabling users to browse, filter, and book verified animals through a responsive and user-friendly web application.",
    fullDescription:
      "Qurbani Market is a modern full-stack web application designed to simplify the process of purchasing livestock for Qurbani. The platform allows users to browse premium animals, filter listings by category and price, view detailed specifications, and book livestock through an intuitive booking system. To provide a realistic user experience, the application includes authentication with both email/password and Google OAuth, user profile management, protected routes, and booking history. Built with Next.js App Router, React Context API, and Tailwind CSS, the project demonstrates scalable frontend architecture, responsive design, and localization for the Bangladeshi market using BDT currency formatting and Bengali content.",
    thumbnail: img("qurbani-market", "thumbnail.png", "Qurbani Market project thumbnail"),
    heroImage: img("qurbani-market", "hero.png", "Qurbani Market hero preview", 1600, 900),
    gallery: [
      img("qurbani-market", "gallery-1.png", "Qurbani Market screenshot 1"),
      img("qurbani-market", "gallery-2.png", "Qurbani Market screenshot 2"),
      img("qurbani-market", "gallery-3.png", "Qurbani Market screenshot 3"),
    ],
    category: "Full-Stack E-Commerce",
    status: "completed",
    techStack: [
      "React 19",
      "Next.js 16",
      "Tailwind CSS v4",
      "NextAuth",
      "Google OAuth",
      "JavaScript",
    ],
    features: [
      "Responsive livestock marketplace with featured animals on the homepage",
      "Animal filtering and price sorting with detailed information pages",
      "Secure booking workflow with email/password and Google OAuth authentication",
      "User profile management with booking history",
      "Protected routes and responsive mobile navigation",
      "Loading states and custom 404 page",
    ],
    challenges: [
      "Designed a hybrid authentication system combining Google OAuth with a custom authentication flow",
      "Implemented persistent user-specific booking data using LocalStorage without a backend database",
      "Managed Client and Server Component architecture using the Next.js App Router",
      "Localized the application with Bengali content and Bangladeshi currency formatting",
      "Built a responsive sticky booking interface that works across different screen sizes",
    ],
    lessonsLearned: [
      "Structuring scalable applications using the Next.js App Router",
      "Building reusable authentication flows with React Context",
      "Managing application state efficiently without external libraries",
      "Creating reusable UI components with Tailwind CSS",
      "Developing production-ready responsive layouts",
    ],
    futureImprovements: [
      "Integrate MongoDB or PostgreSQL for persistent storage",
      "Develop a dedicated seller dashboard",
      "Add payment gateway integration (bKash, Nagad, Stripe)",
      "Implement Cloudinary or AWS S3 for image uploads",
      "Add advanced filtering and search capabilities",
      "Improve SEO using dynamic routes and server-side rendering",
      "Add automated testing with Jest and Playwright",
      "Enhance accessibility following WCAG guidelines",
      "Convert the application into a Progressive Web App (PWA)",
    ],
    links: {
      liveDemo: "https://a8-five.vercel.app/",
    },
    role: "Full-Stack Developer",
    featured: true,
    order: 3,
  },
  {
    title: "A09 Client",
    slug: "a09-client",
    shortDescription:
      "A modern client-facing web application built with Next.js demonstrating full-stack development practices.",
    fullDescription:
      "A09 Client is a web application built as part of learning and mastering full-stack development with Next.js. It demonstrates practical implementation of modern web development practices including server-side rendering, API integration, and responsive design patterns.",
    thumbnail: img("a09-client", "thumbnail.png", "A09 Client project thumbnail"),
    heroImage: img("a09-client", "hero.png", "A09 Client hero preview", 1600, 900),
    gallery: [
      img("a09-client", "gallery-1.png", "A09 Client screenshot 1"),
      img("a09-client", "gallery-2.png", "A09 Client screenshot 2"),
      img("a09-client", "gallery-3.png", "A09 Client screenshot 3"),
    ],
    category: "Web App",
    status: "completed",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    features: [
      "Modern client-facing interface",
      "Responsive design across all devices",
      "Built with Next.js App Router architecture",
    ],
    challenges: [
      "Implementing consistent UI patterns across multiple views",
      "Optimizing performance with Next.js best practices",
    ],
    lessonsLearned: [
      "Deepened understanding of Next.js App Router and server components",
      "Improved skills in responsive design and CSS architecture",
    ],
    futureImprovements: [
      "Add user authentication and dashboard",
      "Integrate with a backend API for dynamic content",
      "Add comprehensive test coverage",
    ],
    links: {
      liveDemo: "https://a09client.vercel.app/",
    },
    featured: true,
    role: "Solo Developer",
    order: 4,
  },
];

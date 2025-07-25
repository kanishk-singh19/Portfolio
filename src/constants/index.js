export const navLinks = ["home", "services", "about", "work", "contact"];
// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I harden security (XSS/SQLI protection, OAuth) and optimize bottlenecks so your app stays fast, safe, and scalable as you grow.",
    items: [
      {
        title: "Code Audits",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "Pen Testing",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
// export const projects = [
//   {
//     id: 1,
//     name: "Mobile Accessories E-commerce",
//     description:
//       "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
//     href: "",
//     image: "/assets/projects/mobile-accessories-store.jpg",
//     bgImage: "/assets/backgrounds/blanket.jpg",
//     frameworks: [
//       { id: 1, name: "React" },
//       { id: 2, name: "Next.js" },
//       { id: 3, name: "Node.js" },
//       { id: 4, name: "MongoDB" },
//       { id: 5, name: "Tailwind CSS" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Plant Shop E-commerce",
//     description:
//       "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
//     href: "",
//     image: "/assets/projects/plant-shop.jpg",
//     bgImage: "/assets/backgrounds/curtains.jpg",
//     frameworks: [
//       { id: 1, name: "React" },
//       { id: 2, name: "Next.js" },
//       { id: 3, name: "Stripe API" },
//       { id: 4, name: "Tailwind CSS" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Apple Tech Marketplace",
//     description:
//       "An e-commerce platform for Apple products and accessories with deals and category filtering.",
//     href: "",
//     image: "/assets/projects/apple-tech-store.jpg",
//     bgImage: "/assets/backgrounds/map.jpg",
//     frameworks: [
//       { id: 1, name: "Blazor" },
//       { id: 2, name: "ASP.NET Core" },
//       { id: 3, name: "SQL Server" },
//       { id: 4, name: "Bootstrap" },
//     ],
//   },
//   {
//     id: 4,
//     name: "Electronics & Gadgets Store",
//     description:
//       "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
//     href: "",
//     image: "/assets/projects/electronics-store.jpg",
//     bgImage: "/assets/backgrounds/poster.jpg",
//     frameworks: [
//       { id: 1, name: "Vue.js" },
//       { id: 2, name: "Laravel" },
//       { id: 3, name: "MySQL" },
//       { id: 4, name: "SCSS" },
//     ],
//   },
//   {
//     id: 5,
//     name: "Home Decor Marketplace",
//     description:
//       "A curated collection of designer home decor items, including furniture and artisan vases.",
//     href: "",
//     image: "/assets/projects/home-decor-store.jpg",
//     bgImage: "/assets/backgrounds/table.jpg",
//     frameworks: [
//       { id: 1, name: "Angular" },
//       { id: 2, name: "Firebase" },
//       { id: 3, name: "GraphQL" },
//       { id: 4, name: "Material UI" },
//     ],
//   },
//   {
//     id: 6,
//     name: "Digital Game Store",
//     description:
//       "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
//     href: "",
//     image: "/assets/projects/game-store.jpg",
//     bgImage: "/assets/backgrounds/curtains.jpg",
//     frameworks: [
//       { id: 1, name: "Svelte" },
//       { id: 2, name: "Node.js" },
//       { id: 3, name: "MongoDB" },
//       { id: 4, name: "Chakra UI" },
//     ],
//   },
// ];
export const socials = [
  
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kanishk-singh-61734628a/" },
  { name: "GitHub", href: "https://github.com/kanishk-singh19" },
];

export const items = [
  {
    id: 1,
    title: "BookIt – Travel Booking Platform",
    description: "",
    className: "oswald tracking-tight font-extralight  uppercase p-6 lg:col-span-2 md:col-span-2 sm:col-span-1 row-span-2 bg-gray-900/50 border border-white/10 rounded-xl",
    imgClassName: "w-full h-full object-cover rounded-xl",
    titleClassName: "justify-end",
    img: "/projects/bookit.png",
    spareImg: "",
    buttonText: "View Project",
    buttonHref: "https://github.com/kanishk-singh19/Bookit",
  },
  {
    id: 2,
    title: "Brainwave – AI Chat Experience",
    description: "",
    className: "oswald tracking-tight font-extralight uppercase p-6 lg:col-span-1 md:col-span-1 sm:col-span-1 row-span-1 bg-gray-900/50 border border-white/10 rounded-xl",
    imgClassName: "w-full h-full object-cover rounded-xl",
    titleClassName: "justify-start",
    img: "/projects/brainwave.png",
    spareImg: "",buttonText: "View Project",
    buttonHref: "https://github.com/kanishk-singh19/Brainwave",
  },
  {
    id: 3,
    title: "PrepEdge – AI Interview Coach",
    // description: "I constantly try to improve",
    className: "oswald tracking-tight font-extralight uppercase p-6 lg:col-span-1 md:col-span-1 sm:col-span-1 row-span-1 bg-gray-900/50 border border-white/10 rounded-xl",
    imgClassName: "w-full h-full object-cover rounded-xl",
    titleClassName: "justify-center",
    img: "/projects/prepedge.png",
    spareImg: "",buttonText: "View Project",
    buttonHref: "https://github.com/kanishk-singh19/PrepEdge",
  },
  {
    id: 4,
    title: "Podzify – Podcast Publishing Platform",
    description: "",
    className: "oswald tracking-tight font-extralight uppercase p-6 lg:col-span-1 md:col-span-1 sm:col-span-1 row-span-1 bg-gray-900/50 border border-white/10 rounded-xl",
    imgClassName: "w-full h-full object-cover rounded-xl",
    titleClassName: "justify-start",
    img: "/projects/podzify.png",
    spareImg: "/b4.svg",buttonText: "View Project",
    buttonHref: "https://github.com/kanishk-singh19/Podzify",
  },
  {
    id: 5,
    title: "VelvetPour – JS Animation Library",
    // description: "The Inside Scoop",
    className: "oswald tracking-tight font-extralight uppercase p-6 lg:col-span-2 md:col-span-2 sm:col-span-1 row-span-1 bg-gray-900/50 border border-white/10 rounded-xl",
    imgClassName: "w-full h-full object-cover rounded-xl",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/projects/velvetpour.png",

    spareImg: "/grid.svg",
    buttonText: "View Project",
    buttonHref: "https://github.com/kanishk-singh19/VelvetPour",
  },
];

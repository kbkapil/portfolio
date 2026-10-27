export const PERSONAL_INFO = {
  name: "Kapil Bisen",
  brand: "Kapil",
  role: "Full Stack Developer & App Developer",
  tagline: "Engineering production web applications, cross-platform mobile apps, and scalable full-stack architectures.",
  bio: "Hi, I'm Kapil Bisen, a passionate Full Stack Developer and App Developer dedicated to crafting clean, high-performance web platforms and mobile applications. Experienced in developing production mobile apps with 50K+ active users, architecting full-stack systems with React, React Native, Java, Spring Boot, MySQL, MongoDB, and Redis.",
  email: "kapilbisen7231@gmail.com",
  linkedin: "https://www.linkedin.com/in/kapilbisen",
  github: "https://github.com/kapilbisen",
  location: "Indore, India",
  resumePath: "/resume_kapil_bisen.pdf",
  stats: [
    { label: "Degree", value: "B.Tech IT", detail: "SVCE Indore (2025)" },
    { label: "Production Apps", value: "4+", detail: "Client Deployed" },
    { label: "Active Mobile Users", value: "50K+", detail: "YashBharat Dual App" },
    { label: "Query Reduction", value: "80%+", detail: "Redis Caching Layer" },
  ]
};

export const PROJECTS = [
  {
    id: "yashbharat",
    title: "YashBharat News App",
    category: "Mobile Application",
    oneLiner: "Production real-time news app with 50K+ active mobile users on Android & iOS.",
    description: "Architected high-volume dual mobile application serving 50,000+ daily readers. Built with React Native, Firebase push notifications, categorized article feeds, and automated backend caching.",
    tags: ["React Native", "Firebase", "REST APIs", "Node.js", "Redux"],
    image: "/images/projects/yashbharat.png",
    androidUrl: "https://play.google.com/store/apps/details?id=com.yashbharat.news",
    iosUrl: "https://apps.apple.com/in/app/yashbharat/id6475685789",
    liveUrl: "https://play.google.com/store/apps/details?id=com.yashbharat.news",
    metrics: "50K+ Downloads · Dual App Store",
    projectType: "freelance",
    features: [
      "50,000+ active downloads across Google Play Store & Apple App Store",
      "Automated push notifications for breaking regional news broadcasts",
      "Sub-second article feed delivery backed by caching and pagination",
      "Multi-category offline bookmarking and instant search"
    ]
  },
  {
    id: "groomy",
    title: "Groomy India",
    category: "Service Marketplace",
    oneLiner: "On-demand salon & beauty platform with geo-routing and an 80%+ DB query bypass.",
    description: "Engineered scalable service marketplace connecting users to local beauty experts. Designed high-performance caching layer that reduced database query load by 80%+ under peak booking hours.",
    tags: ["PHP", "MySQL", "Redis Cache", "JavaScript", "REST APIs"],
    image: "/images/projects/groomy.png",
    liveUrl: "https://groomy.in",
    metrics: "80%+ DB Query Bypass",
    projectType: "freelance",
    features: [
      "Geo-location based partner discovery and automated slot reservation",
      "Multi-tier Redis in-memory caching cutting database latency",
      "Customer & salon partner dedicated control dashboards",
      "Secure payment processing and SMS status updates"
    ]
  },
  {
    id: "kasturi",
    title: "Kasturi Architect",
    category: "Portfolio Website",
    oneLiner: "High-performance digital portfolio for premier architecture & design firm.",
    description: "Designed and deployed modern, fluid digital showcase for an architecture practice. Features interactive spatial project galleries, optimized image lazy loading, and sub-second load times.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "SEO"],
    image: "/images/projects/kasturi.png",
    liveUrl: "https://kasturiarchitects.com",
    metrics: "98+ PageSpeed Score",
    projectType: "freelance",
    features: [
      "High-resolution architectural project showcase with lightbox zoom",
      "Responsive client inquiry and blueprint consultation pipeline",
      "98+ Google Lighthouse performance and accessibility score",
      "Dynamic project filtering by residential, commercial & interior"
    ]
  },
  {
    id: "adintra",
    title: "Adintra Digital",
    category: "Agency Web Portal",
    oneLiner: "Digital marketing & media agency portal with dynamic client inquiry engine.",
    description: "Full-stack agency platform delivering high-converting campaign landing pages, dynamic service breakdowns, and streamlined client consultation lead capture.",
    tags: ["React", "Tailwind CSS", "REST APIs", "Vite"],
    image: "/images/projects/aditra.png",
    liveUrl: "https://adintradigital.com",
    metrics: "Client Lead Engine",
    projectType: "freelance",
    features: [
      "Conversion-optimized marketing agency portal with instant booking",
      "Automated email dispatch for incoming enterprise campaign leads",
      "Modular service cards with interactive case study analytics",
      "Fast, fluid micro-interactions and mobile-first layout"
    ]
  },
  {
    id: "cafe",
    title: "Urban Roast Cafe",
    category: "Web Application",
    oneLiner: "Interactive artisanal coffee shop portal with digital menu & online ordering.",
    description: "Modern food & beverage platform featuring dynamic table reservation, real-time item customizer, and shopping cart persistence.",
    tags: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    image: "/images/projects/cafe.png",
    liveUrl: "https://cafe-websitedemo.netlify.app",
    metrics: "Demo Prototype",
    projectType: "demo"
  },
  {
    id: "luxe",
    title: "Luxe Estate",
    category: "Real Estate Portal",
    oneLiner: "Luxury property search and virtual tour scheduling web application.",
    description: "Real estate portal featuring advanced parametric property search, interactive floorplan viewer, and automated broker appointment booking.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    image: "/images/projects/luxe.png",
    liveUrl: "https://realestate-websitedemo.netlify.app",
    metrics: "Demo Prototype",
    projectType: "demo"
  },
  {
    id: "advocate",
    title: "Legal Advocate Practice",
    category: "Law Firm Website",
    oneLiner: "Legal counsel portfolio with client appointment booking & case summaries.",
    description: "Professional law chamber website offering direct consultation booking, practice area overviews, and client intake workflows.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/images/projects/advocate.png",
    liveUrl: "https://advocate-portfoliio.netlify.app",
    metrics: "Demo Prototype",
    projectType: "demo"
  }
];

export const EXPERIENCES = [
  {
    id: "yyjcpl",
    role: "Backend Developer Intern",
    company: "YYJCPL (Remote / Jaipur)",
    period: "2025 – 2026",
    location: "Remote",
    description: [
      "Engineered high-volume REST endpoints for corporate candidate qualification and automated interview scheduling pipelines.",
      "Developed automated lead-handshake mechanism transferring filtered records from Service Panel to Sales Panel using Spring Boot & MongoDB.",
      "Implemented clean DTO isolation, comprehensive validation, and structured exception handling."
    ],
    tags: ["Spring Boot", "Java 17", "MongoDB", "REST APIs", "Microservices"]
  },
  {
    id: "freelance",
    role: "Freelance Full-Stack & App Developer",
    company: "Client Projects (Yash Bharat, Groomy, Kasturi, Adintra)",
    period: "2025",
    location: "Remote",
    description: [
      "Architected and deployed YashBharat news mobile app for 50,000+ active users on Android and iOS.",
      "Engineered Groomy India on-demand marketplace with partner geo-routing and an 80%+ DB query bypass caching layer using Redis.",
      "Delivered production web platforms for Kasturi Architects and Adintra Digital Marketing."
    ],
    tags: ["React Native", "Spring Boot", "Redis", "MySQL", "REST APIs", "PHP"]
  },
  {
    id: "edu",
    role: "B.Tech in Information Technology",
    company: "Swami Vivekanand College of Engineering, Indore",
    period: "2021 – 2025",
    location: "Indore, India",
    description: [
      "Completed 4-year engineering curriculum affiliated with RGPV with strong focus on Java, Data Structures, DBMS, and Operating Systems.",
      "Solved 50+ DSA problems and built multiple production web & mobile software prototypes."
    ],
    tags: ["Java", "Data Structures", "MySQL", "Operating Systems", "Computer Networks"]
  }
];

export const SKILLS_LIST = [
  { name: "Java 17 / OOP", category: "Backend", desc: "Core Java, OOP principles, multi-threading, Streams API, and JVM architecture." },
  { name: "Spring Boot 3", category: "Backend", desc: "Enterprise microservices, Spring Security, stateless JWT, and RESTful APIs." },
  { name: "MySQL Database", category: "Database", desc: "Relational schema design, ACID transactions, complex joins, and query optimization." },
  { name: "MongoDB", category: "Database", desc: "Document storage, aggregation pipelines, flexible schemas, and indexing." },
  { name: "Redis In-Memory Cache", category: "Database", desc: "Cache-Aside pattern, sub-millisecond hot reads, and 80%+ query reduction." },
  { name: "React.js & Vite", category: "Frontend", desc: "Modern component architecture, hooks, responsive interfaces, and state management." },
  { name: "React Native", category: "Mobile", desc: "Cross-platform iOS & Android mobile app development (50K+ users on YashBharat)." },
  { name: "Git & GitHub", category: "Tools", desc: "Version control, branching workflows, PR reviews, and CI/CD automation." },
  { name: "Docker & Linux", category: "Tools", desc: "Containerization, Dockerfile configuration, and Linux shell environment." }
];

export const personal = {
  name: "Ei Myat Myat Mon",
  title: "Software Engineer & DevOps Engineer",
  location: "Yangon, Myanmar",
  email: "eimyatmon759@gmail.com",
  linkedin: "https://www.linkedin.com/in/ei-myat-myat-mon/",
  about:
    "Solution-driven and fast-learning DevOps Engineer with extensive hands-on experience in backend development, cloud infrastructure, and project coordination. Proven track record of delivering scalable, reliable, and cloud-native systems across diverse industries. Recognized for writing clean, maintainable code, taking ownership of complex projects, and consistently exceeding expectations in fast-paced environments.",
};

export const experience = [
  {
    id: 1,
    company: "rotutiA",
    role: "Backend & DevOps Engineer",
    type: "Full-time",
    period: "Jul 2025 – Present",
    location: "On-site",
    highlights: [
      "Owned the entire server infrastructure across AWS and Azure — sole engineer responsible for provisioning, managing, and scaling all cloud environments",
      "Designed and managed multi-cloud architecture: Azure as primary cloud for application workloads and AWS for AI/ML inference pipelines, vector indexing, and similarity search",
      "Architected microservice structure and database schemas from scratch — designed service boundaries, inter-service communication, and relational data models to support scalable SaaS operations",
      "Built and maintained production-grade microservices using ASP.NET Core 9.0, covering user management, payment processing, and subscription lifecycle",
      "Integrated Stripe Connect for marketplace payment processing, handling payment intents, webhooks, and billing automation",
      "Developed Azure Functions (Python) for async workloads and AWS Lambda functions for ML inference pipelines",
      "Provisioned and managed infrastructure using Terraform across 4 isolated environments (Dev, UAT, Staging, Production)",
      "Designed and maintained 15+ GitHub Actions CI/CD pipelines for automated deployments across all services",
      "Implemented WAF, API rate limiting, SSL automation, and centralized logging with Grafana + Loki",
    ],
    projects: [
      {
        name: "rotutiA",
        logo: "/img/rotutia.png",
        description:
          "End-to-end ownership of a production SaaS platform — designed the microservice architecture, database structure, and the full multi-cloud infrastructure (Azure + AWS) from the ground up. Built ASP.NET Core 9.0 services for user management, Stripe Connect payment processing, and subscription lifecycle, with Terraform-managed environments and centralized observability.",
        tags: ["ASP.NET Core 9.0", "Azure", "AWS", "Microservices", "Stripe", "Terraform", "Grafana", "Database Design"],
      },
    ],
  },
  {
    id: 2,
    company: "Alpha X Co., Ltd.",
    role: "Backend & DevOps Engineer",
    type: "Full-time",
    period: "Nov 2024 – Present",
    location: "Yangon, Myanmar · On-site",
    subRoles: [
      { role: "DevOps Engineer (Freelance)", period: "Jul 2025 – Present" },
      { role: "Backend & DevOps Engineer (Full-time)", period: "Nov 2024 – Present" },
      { role: "Back End Developer (Freelance)", period: "Mar 2024 – Nov 2024" },
    ],
    highlights: [
      "Architected and deployed multiple production platforms using .NET microservices with full AWS infrastructure",
      "Provisioned and managed cloud environments including EC2, ECS, ECR, RDS, Lambda, SQS, MediaConvert, CloudFront, and API Gateway",
      "Established CI/CD pipelines and infrastructure-as-code using Terraform across all projects",
      "Integrated multiple payment gateways (KPay, Wave, Atom, MPU) across platforms",
      "Collaborated closely with UI/UX designers providing app structure, user flow, and design guidance",
    ],
    projects: [
      {
        name: "Bebeetv",
        logo: "/img/bebeetv.webp",
        description:
          "Comprehensive movie and live-streaming platform built with .NET microservices. Implemented full AWS infrastructure including ECS, EC2, MediaConvert, CloudFront, EventBridge, and multiple payment gateways with Firebase integration.",
        tags: [".NET", "AWS", "Microservices", "Firebase", "Terraform", "CI/CD"],
      },
      {
        name: "Tytenium",
        logo: "/img/tytenium.webp",
        description:
          "E-commerce platform for a fashion brand with .NET API backend, Blazor dashboard, EC2 hosting, RDS database management, Nginx reverse proxy, and automated CI/CD deployment.",
        tags: [".NET", "Blazor", "AWS EC2", "RDS", "Nginx"],
      },
      {
        name: "BioDent",
        logo: "/img/biodent.webp",
        description:
          "Dental production order management application with .NET backend and interactive Blazor dashboard. AWS infrastructure with EC2, RDS, S3, Load Balancer, Route53, and CI/CD automation.",
        tags: [".NET", "Blazor", "AWS", "PostgreSQL"],
      },
      {
        name: "Wecari",
        logo: "/img/moov_bird_icon.webp",
        description:
          "Peer-to-Peer Kilo Sharing platform with .NET API, comprehensive database design, AWS infrastructure with EC2 and Route53, Docker containerization, and CI/CD pipelines.",
        tags: [".NET", "AWS", "Docker", "CI/CD", "Route53"],
      },
      {
        name: "AeinShinMa",
        logo: "/img/aeinshinnma.webp",
        description:
          "E-commerce solution with reverse-engineered database architecture, .NET API, Blazor dashboard, Container Registry, Nginx deployment, Docker containerization, and image storage.",
        tags: [".NET", "Blazor", "Docker", "Nginx", "CI/CD"],
      },
      {
        name: "ChatGyi",
        logo: "/img/chatgyi.webp",
        description:
          "E-commerce platform for retail operations deployed on Digital Ocean Droplet with Container Registry integration, Nginx configuration, and Docker containerization.",
        tags: [".NET", "Digital Ocean", "Docker", "Nginx", "CI/CD"],
      },
      {
        name: "Life Plus",
        logo: "/img/lifeplus.webp",
        description:
          "Notification dashboard server for a pharmacy e-commerce platform, deployed using Docker containerization and Nginx server configuration.",
        tags: ["Docker", "Nginx", "DevOps"],
      },
    ],
  },
  {
    id: 3,
    company: "MyJobs Myanmar",
    role: "Software Engineer",
    type: "Full-time",
    period: "Feb 2024 – Nov 2024",
    location: "Yangon, Myanmar",
    highlights: [
      "Reverse-engineered the entire system and redesigned database structures for optimal performance",
      "Designed and implemented scalable .NET APIs with efficient database interactions using PostgreSQL",
      "Developed a Blazor dashboard to improve data management and system usability",
      "Managed AWS infrastructure including EC2, RDS, S3, and Lambda for high availability",
      "Developed an AI-powered JobPost Generation API that automatically creates job descriptions based on user input",
    ],
    projects: [
      {
        name: "MyJobs",
        logo: "/img/myjobs.png",
        description:
          "Full-featured job portal platform with scalable .NET APIs, Blazor dashboard, and AWS infrastructure. Reverse-engineered and redesigned the entire system, and shipped an AI-powered JobPost Generation API that auto-creates job descriptions from user input.",
        tags: [".NET", "Blazor", "PostgreSQL", "AWS",],
      },
    ],
  },
  {
    id: 4,
    company: "ABC Content Solutions Co., Ltd.",
    role: "Backend Developer",
    type: "Full-time",
    period: "Jan 2023 – Dec 2023",
    location: "Yangon, Myanmar",
    highlights: [
      "Advanced rapidly from intern to handling production-level responsibilities and complex system architecture",
      "Analyzed and modernized existing monolithic systems, successfully transitioning to microservices architecture",
      "Integrated in-app purchase and payment systems (KPay, MPT) with robust security and error handling",
      "Developed comprehensive Content Management System (CMS) dashboard using React",
      "Pioneered cloud environment adoption as the first intern to work with AWS infrastructure",
    ],
    projects: [
      {
        name: "Mahar",
        logo: "/img/mahar.png",
        description:
          "Music, podcast, and movie streaming platform built with .NET/PHP microservices. Transitioned from monolithic to microservices architecture and integrated full AWS cloud infrastructure including CDN, Lambda, SQS, and MediaConvert.",
        tags: [".NET", "AWS Lambda", "Microservices", "PostgreSQL", "KBZPay", "MPT","OData"],
      },
      {
        name: "CMS Dashboard",
        logo: "/img/mahar.png",
        description:
          "Comprehensive Content Management System dashboard built with React for managing content across the Mahar platform. Integrated in-app purchases and payment systems (KPay, MPT).",
        tags: ["React", "OData"],
      },
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["C#", "JavaScript", "Python"],
  },
  {
    category: "Backend",
    items: ["ASP.NET Core 9.0", ".NET Core", "REST APIs", "OData", "Microservices Architecture", "Blazor", "Azure Functions", "AWS Lambda"],
  },
  {
    category: "System Design",
    items: ["Microservice Structure Design", "Database Schema Design", "Service Boundary Definition", "Inter-service Communication", "Event-Driven Architecture", "Reverse Engineering"],
  },
  {
    category: "Cloud — AWS",
    items: ["EC2", "ECS", "ECR", "S3", "Lambda", "RDS", "CloudWatch", "SQS", "EventBridge", "API Gateway", "MediaConvert", "CloudFront", "DynamoDB", "Route53"],
  },
  {
    category: "Cloud — Azure",
    items: [ "Azure Function App", "Azure Container App","Azure API Management ","Azure Front Door","Virtual Machine","Azure Networking", "WAF", "SSL Automation"],
  },
  {
    category: "Cloud — Other",
    items: ["Digital Ocean Droplet", "Digital Ocean Spaces", "Container Registry"],
  },
  {
    category: "DevOps & Infrastructure",
    items: ["Terraform (IaC)", "Docker", "GitHub Actions", "CI/CD Pipelines", "Nginx", "Redis", "Grafana", "Loki", "API Rate Limiting"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQL Server", "AWS RDS", "Database Design & Administration", "Schema Optimisation"],
  },
  {
    category: "Payment Integration",
    items: ["Stripe Connect", "KBZ Pay", "Wave Pay", "Atom", "MPU", "MPT"],
  },
];

export const education = [
  {
    degree: "B.Sc. Computing (Final Year)",
    school: "University of Greenwich",
    period: "2025 – Present",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "University of Computer Studies, Magway",
    period: "2017 – 2019",
  },
];

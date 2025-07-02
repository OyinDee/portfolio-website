export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "diifolio",
    title: "Diifolio",
    category: "Portfolio Website",
    shortDescription: "Personal portfolio website showcasing my projects, skills, and professional experience.",
    description: [
      "Diifolio is my personal portfolio website designed to showcase my skills, projects, and professional journey as a full-stack developer. The website features a modern, responsive design that highlights my technical expertise and project accomplishments.",
      "The portfolio includes detailed project case studies, an interactive skills section, and a comprehensive overview of my professional experience. It serves as a central hub for potential clients and employers to learn about my work.",
      "Built with modern web technologies, the site emphasizes performance, accessibility, and user experience while maintaining a clean, professional aesthetic.",
    ],
    features: [
      "Responsive design optimized for all devices",
      "Interactive project showcase with detailed case studies",
      "Skills and expertise visualization",
      "Professional experience timeline",
      "Contact form for potential collaborations",
      "Fast loading and SEO optimized",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    coverImage: "/confident-professional.png",
    thumbnailImage: "/confident-professional.png",
    timeline: "1 month (2024)",
    role: "Full Stack Developer & Designer",
    liveUrl: "https://diifolio.netlify.app/",
    githubUrl: "https://github.com/oyindamola/diifolio",
  },
  {
    id: 2,
    slug: "wispah",
    title: "Wispah",
    category: "Web Application",
    shortDescription: "Anonymous messaging platform with end-to-end encryption and customizable user experiences.",
    description: [
      "Wispah is an innovative anonymous messaging platform that prioritizes user privacy and security. The platform allows users to send and receive messages without revealing their identity, making it perfect for honest feedback, confessions, and open communication.",
      "The application features end-to-end encryption to ensure that all messages remain private and secure. Users can customize their experience with various themes and notification settings.",
      "Built with modern web technologies, Wispah provides a seamless user experience across all devices while maintaining the highest security standards.",
    ],
    features: [
      "End-to-end encryption for all messages",
      "Anonymous messaging without user identification",
      "Customizable user interface and themes",
      "Real-time message delivery",
      "Cross-platform compatibility",
      "Advanced privacy controls",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "JWT", "Bcrypt"],
    coverImage: "/modern-finance-app.png",
    thumbnailImage: "/modern-finance-app.png",
    timeline: "2 months (2024)",
    role: "Full Stack Developer",
    liveUrl: "https://wispah.vercel.app",
    githubUrl: "https://github.com/oyindamola/wispah",
  },
  {
    id: 3,
    slug: "byte",
    title: "Byte",
    category: "Mobile App",
    shortDescription: "Modern food ordering platform designed specifically for university students.",
    description: [
      "Byte is a comprehensive food ordering platform tailored for university students. The application connects students with local food vendors and campus cafeterias, making it easy to order meals and snacks.",
      "The platform features a user-friendly interface optimized for mobile devices, allowing students to browse menus, place orders, and track deliveries in real-time.",
      "With integrated payment systems and delivery tracking, Byte streamlines the food ordering process for busy students.",
    ],
    features: [
      "University-specific vendor listings",
      "Real-time order tracking",
      "Integrated payment gateway",
      "Student discount system",
      "Delivery scheduling",
      "Rating and review system",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "Socket.io", "JWT"],
    coverImage: "/modern-finance-overview.png",
    thumbnailImage: "/modern-finance-overview.png",
    timeline: "3 months (2023)",
    role: "Full Stack Developer",
    liveUrl: "https://yumbyte.ng/",
    githubUrl: "https://github.com/oyindamola/byte",
  },
  {
    id: 4,
    slug: "tfauto",
    title: "TFAuto",
    category: "Web Application",
    shortDescription: "Feature-rich automobile listing platform with advanced filtering and real-time updates.",
    description: [
      "TFAuto is a comprehensive automobile listing platform that connects car buyers and sellers. The platform provides advanced search and filtering capabilities to help users find their perfect vehicle.",
      "The application features real-time updates, detailed vehicle information, and high-quality image galleries. Sellers can easily list their vehicles with comprehensive details and manage inquiries.",
      "Built with scalability in mind, TFAuto handles thousands of listings while maintaining fast search performance.",
    ],
    features: [
      "Advanced search and filtering system",
      "Real-time listing updates",
      "High-quality image galleries",
      "Seller dashboard and analytics",
      "Inquiry management system",
      "Mobile-responsive design",
    ],
    technologies: ["Next.js", "NestJS", "MySQL", "AWS S3", "Redis", "TypeScript"],
    coverImage: "/modern-apparel-storefront.png",
    thumbnailImage: "/modern-apparel-storefront.png",
    timeline: "4 months (2023)",
    role: "Lead Developer",
    liveUrl: "https://tfauto.vercel.app/",
    githubUrl: "https://github.com/oyindamola/tfauto",
  },
  {
    id: 5,
    slug: "divine-raylight",
    title: "Divine Raylight Consultancy",
    category: "Business Website",
    shortDescription: "Professional travel consultancy platform specializing in international education and immigration services.",
    description: [
      "Divine Raylight Consultancy is a comprehensive travel consultancy platform dedicated to empowering individuals to achieve their dreams abroad. With 7 years of excellence and expertise, the platform provides honest advice, practical solutions, and ongoing support for international ambitions.",
      "The website features a modern, professional design that showcases services across major destinations including Canada, UK, USA, Ireland, Malta, Australia, New Zealand, and other European countries. It includes detailed service listings, client testimonials, and a comprehensive blog section.",
      "Built with Next.js and Firebase, the platform emphasizes user experience, performance, and reliability while maintaining a professional aesthetic that builds trust with potential clients seeking international travel guidance.",
    ],
    features: [
      "Comprehensive service portfolio display",
      "Client testimonials and success stories",
      "Multi-destination expertise showcase",
      "Professional blog with travel insights",
      "Contact and consultation booking system",
      "Responsive design for all devices",
      "Performance-optimized user experience",
    ],
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "React", "Vercel"],
    coverImage: "/modern-finance-app.png",
    thumbnailImage: "/modern-finance-app.png",
    timeline: "3 months (2024)",
    role: "Full Stack Developer & Designer",
    liveUrl: "https://drlc.ng/",
    githubUrl: "https://github.com/oyindamola/divine-raylight",
  },
  {
    id: 6,
    slug: "xquisitenoctea",
    title: "Xquisitenoctéa",
    category: "E-commerce Website",
    shortDescription: "Luxury perfume and beauty e-commerce platform featuring handcrafted skincare, body care, and feminine essentials.",
    description: [
      "Xquisitenoctéa is an exclusive luxury beauty and perfume e-commerce platform that embodies the concept of 'born of night, made for allure.' The website showcases a curated collection of luxury perfumes, handmade skincare, body care, and feminine essentials crafted with intention and love.",
      "The platform features an elegant, sophisticated design that reflects the brand's luxury positioning. It includes detailed product showcases, premium ingredient highlights, and an immersive shopping experience that speaks to customers who embrace mystery, allure, and elevated self-care rituals.",
      "Built with Next.js, Firebase, and Tailwind CSS, the website emphasizes performance, visual appeal, and seamless user experience while maintaining the luxurious aesthetic that defines the Xquisitenoctéa brand.",
    ],
    features: [
      "Luxury product catalog with detailed descriptions",
      "Premium ingredient showcase and highlights",
      "Elegant, sophisticated user interface design",
      "Responsive design optimized for all devices",
      "Product detail pages with rich imagery",
      "Contact and customer inquiry system",
      "Brand storytelling and aesthetic presentation",
      "Performance-optimized shopping experience",
    ],
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "React", "Netlify"],
    coverImage: "/modern-apparel-storefront.png",
    thumbnailImage: "/modern-apparel-storefront.png",
    timeline: "2 months (2024)",
    role: "Full Stack Developer & Designer",
    liveUrl: "https://xquisitenoctea.netlify.app/",
    githubUrl: "https://github.com/oyindamola/xquisitenoctea",
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}

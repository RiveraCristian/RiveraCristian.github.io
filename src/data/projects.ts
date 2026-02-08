export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Fluxo - Sistema de Gestión Financiera",
    description: "Software de gestión financiera integral para web y mobile, diseñado para el control y análisis de finanzas personales y empresariales",
    longDescription: "Plataforma completa de gestión financiera que permite a usuarios y empresas controlar sus finanzas de manera eficiente, con análisis en tiempo real y diseño responsive para todos los dispositivos.",
    technologies: ["Python", "FastAPI", "TypeScript", "React", "PostgreSQL", "Responsive Design"],
    features: [
      "Gestión de ingresos y gastos en tiempo real",
      "Dashboard con análisis financiero y visualizaciones",
      "Diseño responsive optimizado para web y mobile",
      "API RESTful con FastAPI para integración flexible",
      "Reportes y exportación de datos financieros",
      "Interfaz intuitiva desarrollada en React con TypeScript"
    ],
    githubUrl: "#",
    image: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Fluxo"
  },
  {
    id: 2,
    title: "Sistema de Gestión Clínica Kinesiológica",
    description: "Software completo para gestión de clínicas kinesiológicas con seguimiento de pacientes y análisis de datos",
    longDescription: "Plataforma web integral para gestión administrativa y clínica de centros de kinesiología, con análisis estadístico de tratamientos.",
    technologies: ["React", "FastAPI", "Python", "PostgreSQL", "TypeScript"],
    features: [
      "Gestión de pacientes y citas",
      "Seguimiento de tratamientos",
      "Generación de informes estadísticos",
      "Panel de administración completo"
    ],
    githubUrl: "#",
    image: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Gestion+Clinica"
  },
  {
    id: 3,
    title: "Observatorio de Datos del Maule",
    description: "Plataforma de análisis y visualización de datos estadísticos de la Región del Maule",
    longDescription: "Sistema de visualización interactiva de datos económicos, sociales y demográficos de la Región del Maule para apoyo en toma de decisiones.",
    technologies: ["Python", "React", "D3.js", "FastAPI", "Machine Learning"],
    features: [
      "Visualizaciones interactivas de datos regionales",
      "Análisis predictivo de tendencias",
      "Dashboard personalizable",
      "Exportación de informes"
    ],
    githubUrl: "#",
    image: "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Observatorio+Maule"
  },
  {
    id: 4,
    title: "Plataforma de E-commerce para Productos Artesanales",
    description: "Sitio web de comercio electrónico enfocado en la venta de productos artesanales locales",
    longDescription: "Plataforma de e-commerce que conecta artesanos locales con clientes, ofreciendo una experiencia de compra intuitiva y segura.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe API", "TypeScript"],
    features: [
      "Catálogo de productos con filtros avanzados",
      "Carrito de compras y sistema de pagos integrado",
      "Panel de administración para artesanos",
      "Reseñas y valoraciones de productos"
    ],
    githubUrl: "#",
    image: "https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=E-commerce+Artesanal"
  },
  {
    id: 5,
    title: "Plataforma de Mensajería Masiva",
    description: "Aplicación web para el envío de mensajes masivos a través de múltiples canales",
    longDescription: "Sistema de mensajería masiva que permite a las empresas comunicarse con sus clientes mediante SMS, email y notificaciones push.",
    technologies: ["Python", "Twilio API", "AWS", "LabsMobile API"],
    features: [
      "Envío de mensajes masivos por SMS, email y push",
      "Gestión de listas de contactos",
      "Programación de envíos",
      "Análisis de efectividad de campañas"
    ],
    githubUrl: "#",
    image: "https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Mensajeria+Masiva"
  },
  {
    id: 6,
    title: "Plataforma de Gestión de Seguros de Garantía",
    description: "Sistema web para la gestión integral de seguros de garantía para corredora de Seguros",
    longDescription: "Aplicación web que facilita la administración de pólizas de seguros de garantía, con seguimiento de clientes, generación de reportes y analisis de datos para la toma de decisiones.",
    technologies: ["Python", "React", "PostgreSQL", "TypeScript", "Docker"],
    features: [
      "Gestión de pólizas y clientes",
      "Generación de reportes y análisis de datos",
      "Panel de administración intuitivo",
      "Notificaciones automáticas"
    ],
    githubUrl: "#",
    image: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Gestion+Seguros"
  }
];

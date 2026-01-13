export type Project = {
  slug: string;
  title: string;
  years?: string;
  subtitle: string;
  roles: string[];
  stack: string[];
  links: { label: string; href: string }[];
  cover: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  content?: string;
};

export const projects: Project[] = [
  {
    slug: "jardin-solidaire",
    title: "JardinSolidaire",
    years: "2025–2026",
    subtitle:
      "Plateforme de mise en relation propriétaires / jardiniers + réservation + messagerie.",
    roles: ["Full-stack", "UX/UI"],
    stack: ["Next.js", "Node/Express", "Prisma", "PostgreSQL", "Docker"],
    links: [
      { label: "Site", href: "https://jardin-solidaire.vercel.app" },
      { label: "GitHub", href: "https://github.com/thaliawoods/JardinSolidaire" },
    ],
    cover: { src: "/projects/jardin/cover.jpg", alt: "JardinSolidaire cover" },
    gallery: [
      { src: "/projects/jardin/01.jpg", alt: "Home" },
      { src: "/projects/jardin/02.jpg", alt: "Liste jardins" },
      { src: "/projects/jardin/03.jpg", alt: "Réservation" },
    ],
    content:
      "Objectif : remettre des jardins sous-utilisés en circulation et créer du lien social, avec un système de créneaux sans chevauchement.",
  },
];

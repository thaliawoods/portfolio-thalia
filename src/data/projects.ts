export type Locale = "fr" | "en";

export type Project = {
  slug: string;
  years?: string;

  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  content?: Record<Locale, string>;

  roles: string[];
  stack: string[];
  links: { label: string; href: string }[];

  cover: { src: string; alt: string };
  gallery: { src: string; alt: string }[];

  featured?: boolean;
};

const cover = (slug: string) => ({
  src: `/projects/${slug}/cover.jpg`,
  alt: `${slug} cover`,
});

const gallery = (slug: string) => [
  { src: `/projects/${slug}/01.jpg`, alt: `${slug} screenshot 1` },
  { src: `/projects/${slug}/02.jpg`, alt: `${slug} screenshot 2` },
  { src: `/projects/${slug}/03.jpg`, alt: `${slug} screenshot 3` },
];

export const projects: Project[] = [
  // =========================
  // FEATURED (actuels)
  // =========================
  {
    slug: "jardin-solidaire",
    years: "2025–2026",
    title: { fr: "JardinSolidaire", en: "JardinSolidaire" },
    subtitle: {
      fr: "Plateforme collaborative : recherche de jardins, favoris, réservation sans chevauchement, messagerie et notifications.",
      en: "Collaborative platform: garden search, favorites, no-overlap bookings, messaging and notifications.",
    },
    content: {
      fr: "Projet RNCP : conception end-to-end (parcours, API, DB, UI). Gestion des créneaux et prévention des conflits de réservation, avec un focus sur une UX simple et utile.",
      en: "RNCP project: end-to-end design (flows, API, DB, UI). Time-slot management and booking conflict prevention, with a focus on simple, useful UX.",
    },
    roles: ["Full-stack", "UX/UI"],
    stack: ["Next.js", "Node/Express", "Prisma", "PostgreSQL", "Docker"],
    links: [
      { label: "Live", href: "https://jardin-solidaire.vercel.app" },
      { label: "GitHub", href: "https://github.com/thaliawoods/JardinSolidaire" },
    ],
    cover: cover("jardin-solidaire"),
    gallery: gallery("jardin-solidaire"),
    featured: true,
  },

  {
    slug: "julaya-cms-strapi-next",
    years: "2025–2026",
    title: {
      fr: "Julaya — CMS Strapi + Landing/Blog",
      en: "Julaya — Strapi CMS + Landing/Blog",
    },
    subtitle: {
      fr: "CMS headless (Strapi) connecté à une landing Next.js + blog (i18n) : modélisation contenu, composants réutilisables, fetch, perf/SEO.",
      en: "Headless CMS (Strapi) connected to a Next.js landing + blog (i18n): content modeling, reusable components, data fetching, performance/SEO.",
    },
    content: {
      fr: "Objectif : autonomie des équipes marketing/communication, amélioration de la maintenabilité et des performances, tout en gardant une UI cohérente côté front.",
      en: "Goal: empower marketing teams, improve maintainability and performance while keeping a consistent UI on the front-end.",
    },
    roles: ["Front-end", "CMS integration", "Content modeling"],
    stack: ["Next.js", "TypeScript", "Strapi", "i18n", "SEO"],
    links: [{ label: "Case study", href: "#" }],
    cover: cover("julaya-cms-strapi-next"),
    gallery: gallery("julaya-cms-strapi-next"),
    featured: true,
  },

  {
    slug: "julaya-pricing-strapi",
    years: "2025–2026",
    title: {
      fr: "Julaya — Pricing dynamique (JSON → Strapi)",
      en: "Julaya — Dynamic pricing (JSON → Strapi)",
    },
    subtitle: {
      fr: "Migration d’une page pricing statique vers Strapi : structure par pays/sections/lignes (multi-niveaux) + rendu dynamique côté Next.js.",
      en: "Migrated a static pricing page to Strapi: country/sections/rows (multi-level) + dynamic rendering in Next.js.",
    },
    content: {
      fr: "Objectif : sortir la donnée du code, permettre des mises à jour sans déploiement, et garder un rendu lisible et robuste (cas limites, champs optionnels).",
      en: "Goal: move data out of code, enable updates without deployments, and keep rendering robust (edge cases, optional fields).",
    },
    roles: ["Front-end", "Data modeling", "Strapi integration"],
    stack: ["Next.js", "TypeScript", "Strapi"],
    links: [{ label: "Case study", href: "#" }],
    cover: cover("julaya-pricing-strapi"),
    gallery: gallery("julaya-pricing-strapi"),
    featured: true,
  },

  // =========================
  // ANCIENS PROJETS
  // =========================
  {
    slug: "safe-or-not",
    years: "2024",
    title: { fr: "Safe or Not?", en: "Safe or Not?" },
    subtitle: {
      fr: "App iOS SwiftUI : médecins classés par niveau de confiance, avis et alertes.",
      en: "SwiftUI iOS app: doctors ranked by trust level, reviews and safety alerts.",
    },
    content: {
      fr: "Projet mobile SwiftUI : navigation, écrans liste/détail, publication d’avis et gestion d’alertes.",
      en: "SwiftUI mobile project: navigation, list/detail screens, posting reviews and handling alerts.",
    },
    roles: ["iOS", "UI"],
    stack: ["SwiftUI", "iOS"],
    links: [{ label: "GitHub", href: "#" }],
    cover: cover("safe-or-not"),
    gallery: gallery("safe-or-not"),
  },

  {
    slug: "cash-management",
    years: "2024",
    title: { fr: "Cash Management", en: "Cash Management" },
    subtitle: {
      fr: "Gestion de caisse et d’inventaire pour un club social : React + Express + PostgreSQL (Supabase).",
      en: "Cash register and inventory management for a social club: React + Express + PostgreSQL (Supabase).",
    },
    content: {
      fr: "CRUD inventaire, opérations de caisse, endpoints API et interface orientée usage.",
      en: "Inventory CRUD, cash operations, API endpoints and user-focused interface.",
    },
    roles: ["Full-stack"],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Supabase"],
    links: [{ label: "GitHub", href: "#" }],
    cover: cover("cash-management"),
    gallery: gallery("cash-management"),
  },

  {
    slug: "chess",
    years: "2024",
    title: { fr: "Chess", en: "Chess" },
    subtitle: {
      fr: "Jeu d’échecs (MVP) : logique du plateau, mouvements, conditions de victoire.",
      en: "Chess game (MVP): board logic, piece moves, win conditions.",
    },
    content: {
      fr: "Implémentation des règles principales, gestion d’état de partie. V2 TypeScript en cours.",
      en: "Core rules implementation, game state management. TypeScript v2 in progress.",
    },
    roles: ["Front-end"],
    stack: ["JavaScript", "HTML", "CSS", "TypeScript"],
    links: [{ label: "GitHub", href: "#" }],
    cover: cover("chess"),
    gallery: gallery("chess"),
  },

  {
    slug: "tetris",
    years: "2024",
    title: { fr: "Tetris", en: "Tetris" },
    subtitle: {
      fr: "Recréation du jeu : tetrominoes, collisions, lignes, score.",
      en: "Tetris remake: tetrominoes, collisions, line clears, scoring.",
    },
    content: {
      fr: "Gestion du board, rotations, collisions et boucle de jeu.",
      en: "Board handling, rotations, collisions and game loop.",
    },
    roles: ["Front-end"],
    stack: ["JavaScript", "HTML", "CSS"],
    links: [{ label: "GitHub", href: "#" }],
    cover: cover("tetris"),
    gallery: gallery("tetris"),
  },

  {
    slug: "draw-together",
    years: "2024",
    title: { fr: "Draw Together", en: "Draw Together" },
    subtitle: {
      fr: "App iOS responsive (iPhone/iPad) : réseau social dédié au dessin + œuvre collective.",
      en: "Responsive iOS app (iPhone/iPad): drawing social network + collaborative artwork.",
    },
    content: {
      fr: "Exploration UI iOS et features sociales, pensée pour mobile et tablette.",
      en: "Explored iOS UI and social features, designed for both phone and tablet.",
    },
    roles: ["iOS"],
    stack: ["Swift", "iOS"],
    links: [{ label: "GitHub", href: "#" }],
    cover: cover("draw-together"),
    gallery: gallery("draw-together"),
  },

  {
    slug: "vintage-gallery",
    years: "2024",
    title: { fr: "Vintage Gallery", en: "Vintage Gallery" },
    subtitle: {
      fr: "Projet e-commerce collectif : React + Express + MongoDB (équipes front/back alternées).",
      en: "Team e-commerce project: React + Express + MongoDB (alternating front/back squads).",
    },
    content: {
      fr: "Travail d’équipe, routes API, composants UI, pages e-commerce et intégration back.",
      en: "Teamwork, API routes, UI components, e-commerce pages and back-end integration.",
    },
    roles: ["Team project", "Full-stack"],
    stack: ["React", "Express", "MongoDB"],
    links: [{ label: "GitHub", href: "#" }],
    cover: cover("vintage-gallery"),
    gallery: gallery("vintage-gallery"),
  },

  {
    slug: "social-network-php",
    years: "2024",
    title: { fr: "Social Network (PHP)", en: "Social Network (PHP)" },
    subtitle: {
      fr: "Blog PHP simple : articles + commentaires, base MySQL (phpMyAdmin).",
      en: "Simple PHP blog: posts + comments, MySQL database (phpMyAdmin).",
    },
    content: {
      fr: "Base relationnelle, formulaires, listing/détail, publication de contenu.",
      en: "Relational database, forms, list/detail pages, content publishing.",
    },
    roles: ["Full-stack"],
    stack: ["PHP", "MySQL", "phpMyAdmin"],
    links: [{ label: "GitHub", href: "#" }],
    cover: cover("social-network-php"),
    gallery: gallery("social-network-php"),
  },

  {
    slug: "besti-blog",
    years: "2024",
    title: { fr: "Besti-Blog", en: "Besti-Blog" },
    subtitle: {
      fr: "Micro-blog photo (type Instagram) : posts image+texte, profil, feed. PHP + Tailwind + PostgreSQL + Docker.",
      en: "Photo micro-blog (Instagram-like): image+text posts, profile, feed. PHP + Tailwind + PostgreSQL + Docker.",
    },
    content: {
      fr: "Auth, création de posts, UI Tailwind et environnement Docker pour standardiser le dev.",
      en: "Authentication, post creation, Tailwind UI and Docker setup to standardize development.",
    },
    roles: ["Team project", "Full-stack"],
    stack: ["PHP", "Tailwind", "PostgreSQL", "Docker"],
    links: [{ label: "GitHub", href: "#" }],
    cover: cover("besti-blog"),
    gallery: gallery("besti-blog"),
  },

  {
    slug: "evening-experience",
    years: "2024",
    title: { fr: "Evening Experience", en: "Evening Experience" },
    subtitle: {
      fr: "Web app : suggère une recette et de la musique selon l’humeur.",
      en: "Web app: suggests a recipe and music depending on your mood.",
    },
    content: {
      fr: "Approche UX : inputs “mood”, génération de recommandations, UI simple et ludique.",
      en: "UX-focused: mood inputs, recommendation generation, simple playful UI.",
    },
    roles: ["Front-end"],
    stack: ["JavaScript", "HTML", "CSS"],
    links: [{ label: "GitHub", href: "#" }],
    cover: cover("evening-experience"),
    gallery: gallery("evening-experience"),
  },
];

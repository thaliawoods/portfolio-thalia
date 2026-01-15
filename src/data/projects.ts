export type Locale = "fr" | "en";

// =========================
// MEDIA (images + vidéos)
// =========================
export type ProjectImage = {
  kind: "image";
  src: string;
  alt: string;
};

export type ProjectVideo = {
  kind: "video";
  src: string;
  alt: string;
  poster?: string;
};

export type ProjectMedia = ProjectImage | ProjectVideo;

export type Project = {
  slug: string;
  years?: string;

  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  content?: Record<Locale, string>;

  roles: string[];
  stack: string[];
  links: { label: string; href: string }[];

  cover: ProjectImage;
  gallery: ProjectMedia[];

  featured?: boolean;
};

const img = (src: string, alt: string): ProjectImage => ({ kind: "image", src, alt });
const vid = (src: string, alt: string, poster?: string): ProjectVideo => ({
  kind: "video",
  src,
  alt,
  poster,
});

export const projects: Project[] = [
  // =========================
  // FEATURED
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
    stack: ["Next.js · Node / Express · Prisma · PostgreSQL · Docker"],
    links: [
      { label: "Live", href: "https://jardin-solidaire.vercel.app" },
      { label: "GitHub", href: "https://github.com/thaliawoods/JardinSolidaire" },
    ],
    cover: img("/projects/jardin-solidaire/cover.png", "JardinSolidaire cover"),
    gallery: [
      // ✅ Vidéo comme une slide du carousel
      // ⚠️ Ce chemin macOS ne fonctionnera pas dans le navigateur :
      // garde-le seulement si tu l'utilises localement hors web.
      // Pour que ça marche sur ton site (Vercel), utilise plutôt :
      // "/projects/jardin-solidaire/demo.mp4"
      vid(
        "/projects/jardin-solidaire/demo.mp4",
        "JardinSolidaire demo video",
      ),

      // Ajoute des images si tu veux :
      // img("/projects/jardin-solidaire/01.png", "JardinSolidaire screenshot 1"),
      // img("/projects/jardin-solidaire/02.png", "JardinSolidaire screenshot 2"),
      // img("/projects/jardin-solidaire/03.png", "JardinSolidaire screenshot 3"),
    ],
    featured: true,
  },

  {
    slug: "landing-page-julaya",
    years: "2025–2026",
    title: { fr: "Julaya — Landing Page", en: "Julaya — Landing Page" },
    subtitle: {
      fr: "Intégration front & composants, amélioration UI/UX et performance.",
      en: "Front-end integration & components, UI/UX improvements and performance.",
    },
    content: {
      fr: "Travail sur une landing page Next.js en production : composants réutilisables, intégration design, attention SEO/perf.",
      en: "Worked on a production Next.js landing page: reusable components, design integration, SEO/performance focus.",
    },
    roles: ["Front-end"],
    stack: ["Next.js · React · TypeScript"],
    links: [{ label: "Landing Page", href: "https://julaya.co" }],
    cover: img("/projects/landing-page-julaya/cover.png", "Julaya landing cover"),
    gallery: [],
    featured: true,
  },

  {
    slug: "blog-julaya",
    years: "2025–2026",
    title: { fr: "Julaya — Blog", en: "Julaya — Blog" },
    subtitle: {
      fr: "Blog + contenu : intégration et structuration, routes et pages article.",
      en: "Blog + content: integration and structuring, routes and article pages.",
    },
    content: {
      fr: "Intégration blog Next.js : pages listing/détail, composants (topic/author), logique de fetch et robustesse des données.",
      en: "Next.js blog integration: listing/detail pages, components (topic/author), fetch logic and data robustness.",
    },
    roles: ["Front-end", "Content integration"],
    stack: ["Next.js · TypeScript · Strapi"],
    links: [{ label: "Blog", href: "https://blog.julaya.co/" }],
    cover: img("/projects/blog-julaya/cover.png", "Julaya blog cover"),
    gallery: [],
    featured: true,
  },

  // =========================
  // AUTRES PROJETS
  // =========================
  {
    slug: "besti-blog",
    years: "2024",
    title: { fr: "Besti-Blog", en: "Besti-Blog" },
    subtitle: {
      fr: "Micro-blog photo (type Instagram) : posts image+texte, profil, feed.",
      en: "Photo micro-blog (Instagram-like): image+text posts, profile, feed.",
    },
    content: {
      fr: "Projet collectif : UI Tailwind, posts, pages profil/feed, environnement Docker + DB.",
      en: "Team project: Tailwind UI, posts, profile/feed pages, Docker environment + DB.",
    },
    roles: ["Full-stack (collectif)"],
    stack: ["PHP · Tailwind · PostgreSQL · Docker"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/projet-collectif-microblogging-thalia-eda-ghislaine",
      },
    ],
    cover: img("/projects/besti-blog/cover.png", "Besti-Blog cover"),
    gallery: [
      img("/projects/besti-blog/01.png", "Besti-Blog screenshot 1"),
      img("/projects/besti-blog/02.png", "Besti-Blog screenshot 2"),
    ],
  },

  {
    slug: "vintage-gallery",
    years: "2024",
    title: { fr: "Vintage Gallery", en: "Vintage Gallery" },
    subtitle: {
      fr: "Projet e-commerce collectif : React + Express + MongoDB.",
      en: "Team e-commerce project: React + Express + MongoDB.",
    },
    content: {
      fr: "Travail d’équipe, routes API, composants UI, pages e-commerce et intégration back.",
      en: "Teamwork, API routes, UI components, e-commerce pages and back-end integration.",
    },
    roles: ["Full-stack (collectif)"],
    stack: ["React · Express · MongoDB"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/projet-meubles-abelson-bastien-bruno-ghislaine-jay-thalia-zineb",
      },
    ],
    cover: img("/projects/vintage-gallery/cover.png", "Vintage Gallery cover"),
    gallery: [
      img("/projects/vintage-gallery/01.png", "Vintage Gallery screenshot 1"),
      img("/projects/vintage-gallery/02.png", "Vintage Gallery screenshot 2"),
      img("/projects/vintage-gallery/03.png", "Vintage Gallery screenshot 3"),
    ],
  },

  {
    slug: "gestion-de-caisse",
    years: "2024",
    title: { fr: "Gestion de caisse", en: "Cash Management" },
    subtitle: {
      fr: "Gestion de caisse & inventaire : React + Express + PostgreSQL (Supabase).",
      en: "Cash & inventory management: React + Express + PostgreSQL (Supabase).",
    },
    content: {
      fr: "CRUD inventaire, opérations de caisse, endpoints API et interface orientée usage.",
      en: "Inventory CRUD, cash operations, API endpoints and user-focused interface.",
    },
    roles: ["Full-stack"],
    stack: ["React · Node.js · Express · PostgreSQL · Supabase"],
    links: [{ label: "GitHub", href: "https://github.com/thaliawoods/GestionCaisse" }],
    cover: img("/projects/gestion-de-caisse/cover.png", "Gestion de caisse cover"),
    gallery: [img("/projects/gestion-de-caisse/01.png", "Gestion de caisse screenshot 1")],
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
    stack: ["JavaScript · HTML · CSS"],
    links: [{ label: "GitHub", href: "https://github.com/thaliawoods/dataviz-aisseta-thalia-oscar-claire" }],
    cover: img("/projects/evening-experience/cover.png", "Evening Experience cover"),
    gallery: [img("/projects/evening-experience/01.png", "Evening Experience screenshot 1")],
  },

  {
    slug: "safe-or-not",
    years: "2024",
    title: { fr: "Safe or Not?", en: "Safe or Not?" },
    subtitle: {
      fr: "App iOS SwiftUI : avis et alertes (niveau de confiance).",
      en: "SwiftUI iOS app: reviews and safety alerts (trust level).",
    },
    content: {
      fr: "Projet mobile SwiftUI : navigation, écrans liste/détail, publication d’avis et gestion d’alertes.",
      en: "SwiftUI mobile project: navigation, list/detail screens, posting reviews and handling alerts.",
    },
    roles: ["iOS", "UI"],
    stack: ["SwiftUI · iOS"],
    links: [{ label: "GitHub", href: "https://github.com/thaliawoods/SafeOrNotMobile" }],
    cover: img("/projects/safe-or-not/cover.png", "Safe or Not cover"),
    gallery: [img("/projects/safe-or-not/01.jpeg", "Safe or Not screenshot 1")],
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
    stack: ["JavaScript · HTML · CSS · TypeScript"],
    links: [{ label: "GitHub", href: "https://github.com/thaliawoods/Chess" }],
    cover: img("/projects/chess/cover.png", "Chess cover"),
    gallery: [],
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
    stack: ["JavaScript · HTML · CSS"],
    links: [{ label: "GitHub", href: "https://github.com/thaliawoods/Tetris" }],
    cover: img("/projects/tetris/cover.png", "Tetris cover"),
    gallery: [],
  },

  {
    slug: "draw-together",
    years: "2024",
    title: { fr: "Draw Together", en: "Draw Together" },
    subtitle: {
      fr: "App iOS responsive : réseau social de dessin + création collective.",
      en: "Responsive iOS app: drawing social network + collaborative creation.",
    },
    content: {
      fr: "Exploration UI iOS et features sociales, pensée pour iPhone et iPad.",
      en: "Explored iOS UI and social features, designed for both phone and tablet.",
    },
    roles: ["iOS"],
    stack: ["Swift · iOS"],
    links: [{ label: "GitHub", href: "https://github.com/thaliawoods/DrawTogether" }],
    cover: img("/projects/draw-together/cover.png", "Draw Together cover"),
    gallery: [],
  },

  {
    slug: "social-network",
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
    stack: ["PHP · MySQL · phpMyAdmin"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/reseau-social-php-reseau_social_thalia_fatouma",
      },
    ],
    cover: img("/projects/social-network/cover.png", "Social Network cover"),
    gallery: [],
  },
];

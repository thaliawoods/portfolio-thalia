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
  featured?: boolean;
};

const placeholderCover = (slug: string) => ({
  src: `/projects/${slug}/cover.jpg`,
  alt: `${slug} cover`,
});

const placeholderGallery = (slug: string) => [
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
    title: "JardinSolidaire",
    years: "2025–2026",
    subtitle:
      "Plateforme collaborative : recherche de jardins, favoris, réservation sans chevauchement, messagerie et notifications.",
    roles: ["Full-stack", "UX/UI"],
    stack: ["Next.js", "Node/Express", "Prisma", "PostgreSQL", "Docker"],
    links: [
      { label: "Live", href: "https://jardin-solidaire.vercel.app" },
      { label: "GitHub", href: "https://github.com/thaliawoods/JardinSolidaire" },
    ],
    cover: placeholderCover("jardin-solidaire"),
    gallery: placeholderGallery("jardin-solidaire"),
    content:
      "Projet RNCP : conception end-to-end (parcours, API, DB, UI). Gestion des créneaux et prévention des conflits de réservation, avec un focus sur une UX simple et utile.",
    featured: true,
  },
  {
    slug: "julaya-cms-strapi-next",
    title: "Julaya — CMS Strapi + Landing/Blog",
    years: "2025–2026",
    subtitle:
      "CMS headless (Strapi) connecté à une landing Next.js + blog (i18n) : modélisation contenu, composants réutilisables, fetch, perf/SEO.",
    roles: ["Front-end", "Intégration CMS", "Modélisation contenu"],
    stack: ["Next.js", "TypeScript", "Strapi", "i18n", "SEO"],
    links: [
      { label: "Case study", href: "#" }, // remplace par lien ou retire si pas public
    ],
    cover: placeholderCover("julaya-cms-strapi-next"),
    gallery: placeholderGallery("julaya-cms-strapi-next"),
    content:
      "Objectif : autonomie des équipes marketing/communication, amélioration de la maintenabilité et des performances, tout en gardant une UI cohérente côté front.",
    featured: true,
  },
  {
    slug: "julaya-pricing-strapi",
    title: "Julaya — Pricing dynamique (JSON → Strapi)",
    years: "2025–2026",
    subtitle:
      "Migration d’une page pricing statique vers Strapi : structure par pays/sections/lignes (multi-niveaux) + rendu dynamique côté Next.js.",
    roles: ["Front-end", "Structuration data", "Intégration Strapi"],
    stack: ["Next.js", "TypeScript", "Strapi"],
    links: [{ label: "Case study", href: "#" }],
    cover: placeholderCover("julaya-pricing-strapi"),
    gallery: placeholderGallery("julaya-pricing-strapi"),
    content:
      "Objectif : sortir la donnée du code, permettre des mises à jour sans déploiement, et garder un rendu lisible et robuste (cas limites, champs optionnels).",
    featured: true,
  },

  // =========================
  // ANCIENS PROJETS (ton ancien portfolio)
  // =========================
  {
    slug: "safe-or-not",
    title: "Safe or Not?",
    years: "2024",
    subtitle:
      "Application iOS SwiftUI listant des médecins selon un niveau de confiance, avec avis et alertes en cas de danger potentiel.",
    roles: ["Mobile iOS", "UI"],
    stack: ["SwiftUI", "iOS"],
    links: [{ label: "GitHub", href: "#" }],
    cover: placeholderCover("safe-or-not"),
    gallery: placeholderGallery("safe-or-not"),
    content:
      "Projet mobile : UI SwiftUI, navigation, écrans de liste/détail, logique de publication d’avis et gestion d’alertes.",
  },
  {
    slug: "cash-management",
    title: "Cash Management",
    years: "2024",
    subtitle:
      "Application de gestion de caisse et d’inventaire pour un club social (Lycée agricole). Front React, back Node/Express, PostgreSQL (Supabase).",
    roles: ["Full-stack"],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Supabase"],
    links: [{ label: "GitHub", href: "#" }],
    cover: placeholderCover("cash-management"),
    gallery: placeholderGallery("cash-management"),
    content:
      "CRUD inventaire + opérations de caisse, structuration des données, endpoints API et UI orientée usage.",
  },
  {
    slug: "chess",
    title: "Chess",
    years: "2024",
    subtitle:
      "Jeu d’échecs en JS/HTML/CSS (MVP) : logique de plateau, mouvements, conditions de victoire. V2 en TypeScript en cours.",
    roles: ["Front-end"],
    stack: ["JavaScript", "HTML", "CSS", "TypeScript"],
    links: [{ label: "GitHub", href: "#" }],
    cover: placeholderCover("chess"),
    gallery: placeholderGallery("chess"),
    content:
      "Implémentation des règles principales, déplacements par pièce, gestion des états de partie.",
  },
  {
    slug: "tetris",
    title: "Tetris",
    years: "2024",
    subtitle:
      "Création du jeu : pièces (tetrominoes), descente, suppression de lignes, score. JS/HTML/CSS.",
    roles: ["Front-end"],
    stack: ["JavaScript", "HTML", "CSS"],
    links: [{ label: "GitHub", href: "#" }],
    cover: placeholderCover("tetris"),
    gallery: placeholderGallery("tetris"),
    content:
      "Gestion du board, collisions, rotation, scoring et boucle de jeu.",
  },
  {
    slug: "draw-together",
    title: "Draw Together",
    years: "2024",
    subtitle:
      "Application iOS responsive (mobile/tablette) : réseau social dédié au dessin, création d’œuvre collective.",
    roles: ["Mobile iOS"],
    stack: ["Swift", "iOS"],
    links: [{ label: "GitHub", href: "#" }],
    cover: placeholderCover("draw-together"),
    gallery: placeholderGallery("draw-together"),
    content:
      "Expérimentation social features + UI iOS, approche responsive iPhone/iPad.",
  },
  {
    slug: "vintage-gallery",
    title: "Vintage Gallery",
    years: "2024",
    subtitle:
      "Projet collectif e-commerce : front React, back Express, base MongoDB. Deux équipes alternant front/back.",
    roles: ["Full-stack (collectif)"],
    stack: ["React", "Express", "MongoDB"],
    links: [{ label: "GitHub", href: "#" }],
    cover: placeholderCover("vintage-gallery"),
    gallery: placeholderGallery("vintage-gallery"),
    content:
      "Travail d’équipe, séparation front/back, routes API, composants et pages e-commerce.",
  },
  {
    slug: "social-network-php",
    title: "Social Network (PHP)",
    years: "2024",
    subtitle:
      "Blog PHP simple et extensible : articles, commentaires, base MySQL via phpMyAdmin.",
    roles: ["Back / Full-stack"],
    stack: ["PHP", "MySQL", "phpMyAdmin"],
    links: [{ label: "GitHub", href: "#" }],
    cover: placeholderCover("social-network-php"),
    gallery: placeholderGallery("social-network-php"),
    content:
      "Base relationnelle, formulaires, publication de contenu, pages de listing/détail.",
  },
  {
    slug: "besti-blog",
    title: "Besti-Blog",
    years: "2024",
    subtitle:
      "Micro-blog photo type Instagram : posts image+texte, page profil, feed membres. PHP + Tailwind + PostgreSQL + Docker.",
    roles: ["Full-stack (collectif)"],
    stack: ["PHP", "Tailwind", "PostgreSQL", "Docker"],
    links: [{ label: "GitHub", href: "#" }],
    cover: placeholderCover("besti-blog"),
    gallery: placeholderGallery("besti-blog"),
    content:
      "Auth, gestion des posts, stockage des données, UI Tailwind et environnement Docker.",
  },
  {
    slug: "evening-experience",
    title: "Evening Experience",
    years: "2024",
    subtitle:
      "Web app qui suggère une recette et de la musique selon l’humeur. JavaScript/HTML/CSS.",
    roles: ["Front-end"],
    stack: ["JavaScript", "HTML", "CSS"],
    links: [{ label: "GitHub", href: "#" }],
    cover: placeholderCover("evening-experience"),
    gallery: placeholderGallery("evening-experience"),
    content:
      "Approche orientée UX : inputs “mood”, génération de recommandations, UI simple et ludique.",
  },
];

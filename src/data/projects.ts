export type Locale = "fr" | "en";

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

const img = (src: string, alt: string): ProjectImage => ({
  kind: "image",
  src,
  alt,
});
const vid = (src: string, alt: string, poster?: string): ProjectVideo => ({
  kind: "video",
  src,
  alt,
  poster,
});

export const projects: Project[] = [
  {
    slug: "temoigner-pour-lutter",
    years: "2026",
    title: { fr: "Témoigner pour Lutter", en: "Testify to Resist" },
    subtitle: {
      fr: "Outil d’archive & performance - En cours. Navigation dans des témoignages, fragments média, structure documentaire.",
      en: "Archive & performance tool - Ongoing. \nNavigating testimonies, media fragments, documentary structure.",
    },
    content: {
      fr: "Conception d’une interface de consultation pour un projet artistique et documentaire pour Ely & Marion Collective. Travail sur la structuration des données (références, tags, liens), la navigation (parcours, filtres), et la mise en scène des contenus (fragments texte / image / vidéo) dans une logique d’archive vivante. Attention particulière portée à la lisibilité, à l’accessibilité et à la robustesse face aux contenus incomplets.",
      en: "Designed an exploration interface for an artistic and documentary project for Ely & Marion Collective. Worked on data structure (references, tags, links), navigation (user flows, filters), and content staging (text / image / video fragments) as a living archive. Strong focus on readability, accessibility, and robustness with imperfect content.",
    },
    roles: ["Full-Stack", "UX/UI"],
    stack: ["Next.js · TypeScript · Tailwind · Supabase"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/temoigner-pour-lutter-tool",
      },
    ],
    cover: img(
      "/projects/temoigner-pour-lutter/01.png",
      "Témoigner pour Lutter cover",
    ),
    gallery: [
      img(
        "/projects/temoigner-pour-lutter/02.png",
        "Témoigner pour Lutter screenshot 2",
      ),
      img(
        "/projects/temoigner-pour-lutter/03.png",
        "Témoigner pour Lutter screenshot 3",
      ),
      img(
        "/projects/temoigner-pour-lutter/04.png",
        "Témoigner pour Lutter screenshot 4",
      ),
      img(
        "/projects/temoigner-pour-lutter/05.png",
        "Témoigner pour Lutter screenshot 5",
      ),
      img(
        "/projects/temoigner-pour-lutter/06.png",
        "Témoigner pour Lutter screenshot 6",
      ),
      img(
        "/projects/temoigner-pour-lutter/07.png",
        "Témoigner pour Lutter screenshot 7",
      ),
      img(
        "/projects/temoigner-pour-lutter/08.png",
        "Témoigner pour Lutter screenshot 8",
      ),
      img(
        "/projects/temoigner-pour-lutter/09.png",
        "Témoigner pour Lutter screenshot 9",
      ),
      img(
        "/projects/temoigner-pour-lutter/10.png",
        "Témoigner pour Lutter screenshot 10",
      ),
      img(
        "/projects/temoigner-pour-lutter/11.png",
        "Témoigner pour Lutter screenshot 11",
      ),
    ],
    featured: true,
  },

  {
    slug: "lydia-transactions-search",
    years: "2026",
    title: { fr: "Test Technique Lydia", en: "Tech Lydia Test" },
    subtitle: {
      fr: "Test technique React - SPA de recherche dans des transactions, filtrage rapide et UI soignée.",
      en: "React technical test - SPA to search transactions, fast filtering and polished UI. Ongoing Project",
    },
    content: {
      fr: "Développement d’une SPA React à partir d’un fichier JSON de transactions : recherche non sensible à la casse, surlignage des occurrences, gestion des états (loading / vide / erreur), et composants UI réutilisables. Travail sur l’ergonomie (feedbacks, micro-interactions) et la qualité du code (composition, lisibilité, conventions).",
      en: "Built a React SPA from a JSON transactions dataset: case-insensitive search, match highlighting, UI states (loading / empty / error), and reusable UI components. Strong focus on polish (UX feedback, micro-interactions) and code quality (composition, readability, conventions).",
    },
    roles: ["Front-end", "UX/UI"],
    stack: ["React · Tailwind · Playwright"],
    links: [
      { label: "Live", href: "https://test-lydia.vercel.app/" },
      { label: "GitHub", href: "https://github.com/thaliawoods/test-lydia" },
    ],
    cover: img(
      "/projects/test-lydia/01.jpeg",
      "Lydia transactions search cover",
    ),
    gallery: [
      img(
        "/projects/test-lydia/02.png",
        "Lydia transactions search screenshot 2",
      ),
    ],
    featured: true,
  },

  {
    slug: "hannah-hajar",
    years: "2026",
    title: {
      fr: "Hannah Hajar",
      en: "Hannah Hajar",
    },
    subtitle: {
      fr: "Site expérimental audio / visuel - En cours. \n Map avec zones interactives, esthétique organique, narration.",
      en: "Experimental audio/visual site - Ongoing.\n Map with interactive zones, organic aesthetics, narrative.",
    },
    content: {
      fr: "Conception et développement d’un site expérimental pour un duo de performance musicale with Mathilde Proy & Jeanne Merone. Travail sur une direction artistique web (formes organiques, atmosphère), une navigation par zones dans une map, et des interactions orientées expérience. Mise en place d’une base front robuste (components, responsive, perf) pour accueillir des contenus média et faire évoluer le projet.",
      en: "Designed and built an experimental website for a musical performance duo formed by Mathilde Proy & Jeanne Merone. Worked on art direction (organic shapes, atmosphere), a zones-based navigation in a map, and experience-driven interactions. Set up a robust front-end foundation (components, responsive, perf) to host media and keep evolving the project.",
    },
    roles: ["Full-Stack", "UX/UI", "Art direction"],
    stack: ["Next.js · TypeScript · Tailwind"],
    links: [
      { label: "GitHub", href: "https://github.com/thaliawoods/hannah-hajar"},
    ],
    cover: img("/projects/hannah-hajar/01.png", "Hannah Hajar cover"),
    gallery: [
      img("/projects/hannah-hajar/02.png", "Hannah Hajar screenshot 2"),
      img("/projects/hannah-hajar/03.png", "Hannah Hajar screenshot 3"),
      img("/projects/hannah-hajar/04.png", "Hannah Hajar screenshot 4"),
      img("/projects/hannah-hajar/05.png", "Hannah Hajar screenshot 5"),
      img("/projects/hannah-hajar/06.png", "Hannah Hajar screenshot 6"),
      img("/projects/hannah-hajar/07.png", "Hannah Hajar screenshot 7"),
      img("/projects/hannah-hajar/08.png", "Hannah Hajar screenshot 8"),
      img("/projects/hannah-hajar/09.png", "Hannah Hajar screenshot 9"),
    ],
    featured: true,
  },
  {
    slug: "jardin-solidaire",
    years: "2025",
    title: { fr: "Jardin Solidaire", en: "Jardin Solidaire" },
    subtitle: {
      fr: "Projet RNCP - plateforme de mise en relation: jardins, disponibilités, réservations sans conflit, authentification.",
      en: "RNCP project - a matching platform: gardens, availability slots, conflict-free bookings, authentication.",
    },
    content: {
      fr: "Conception et développement end-to-end d’une application full-stack orientée “production”. Modélisation PostgreSQL et API Express structurée (routes/contrôleurs), authentification JWT, contrôle d’accès et validation côté serveur. Le cœur du produit est la gestion de créneaux et de réservations avec prévention des chevauchements, statuts et parcours clairs. Environnement reproductible via Docker Compose, variables d’environnement, et tests automatisés (Playwright) intégrés au workflow CI.",
      en: "End-to-end design and development of a production-oriented full-stack application. PostgreSQL modeling and a structured Express API (routes/controllers), JWT authentication, access control, and server-side validation. The product core is availability slots and bookings with conflict prevention, clear statuses and user flows. Reproducible environment via Docker Compose, environment variables, and automated testing (Playwright) integrated into CI.",
    },
    roles: ["Full-stack", "UX/UI"],
    stack: [
      "Next.js · Node.js · Express · Prisma · PostgreSQL · Docker · Playwright",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/JardinSolidaire",
      },
    ],
    cover: img("/projects/jardin-solidaire/cover.png", "JardinSolidaire cover"),
    gallery: [
      vid("/projects/jardin-solidaire/demo.mp4", "JardinSolidaire demo video"),
    ],
    featured: true,
  },

  {
    slug: "landing-page-julaya",
    years: "2025",
    title: { fr: "Julaya — Landing Page", en: "Julaya — Landing Page" },
    subtitle: {
      fr: "Projet d’entreprise - évolutions front sur la landing Julaya (UI, composants, SEO & performance).",
      en: "Company project - front-end work on Julaya’s landing page (UI, components, SEO & performance).",
    },
    content: {
      fr: "Contributions sur une landing page Next.js en production : intégration de sections, factorisation de composants réutilisables, ajustements responsive et cohérence UI. Travail orienté performance (optimisation des images, lazy-loading, attention au bundle, animations plus légères, amélioration du LCP) et SEO (métadonnées, structure des pages, hiérarchie des titres, qualité et lisibilité des contenus), dans une base de code partagée et déployée sur plusieurs environnements (staging / production).",
      en: "Contributions to a production Next.js landing page: integrating sections, factoring reusable components, responsive tweaks, and UI consistency. Work focused on performance (image optimization, lazy-loading, bundle awareness, lighter animations, improved LCP) and SEO (metadata, page structure, heading hierarchy, content clarity), within a shared codebase deployed across multiple environments (staging / production).",
    },
    roles: ["Front-end"],
    stack: ["Next.js · React · TypeScript · CMS (Strapi)"],
    links: [{ label: "Landing Page", href: "https://julaya.co" }],
    cover: img(
      "/projects/landing-page-julaya/cover.png",
      "Julaya landing cover",
    ),
    gallery: [],
    featured: true,
  },

  {
    slug: "blog-julaya",
    years: "2025",
    title: { fr: "Julaya — Blog", en: "Julaya — Blog" },
    subtitle: {
      fr: "Projet d’entreprise - intégration et structuration du blog public Julaya.",
      en: "Company project - integration and structuring of Julaya’s public blog.",
    },
    content: {
      fr: "Intégration du blog dans un site Next.js en production : pages de listing et d’articles, composants dédiés (auteur·ice, thématique), routage et logique de récupération des données depuis le CMS. Travail axé sur la fiabilité et la robustesse des contenus (gestion des données manquantes, cohérence des relations), ainsi que sur la maintenabilité dans une base de code partagée par plusieurs équipes.",
      en: "Blog integration within a production Next.js website: listing and article pages, dedicated components (author, topic), routing, and data fetching logic from the CMS. The work focused on content reliability and robustness (handling missing data, relationship consistency), as well as maintainability within a large, shared codebase.",
    },
    roles: ["Front-end", "Content integration"],
    stack: ["Next.js · TypeScript · CMS (Strapi)"],
    links: [{ label: "Blog", href: "https://blog.julaya.co/" }],
    cover: img("/projects/blog-julaya/cover.png", "Julaya blog cover"),
    gallery: [],
    featured: true,
  },

  {
    slug: "besti-blog",
    years: "2024",
    title: { fr: "Besti-Blog", en: "Besti-Blog" },
    subtitle: {
      fr: "Projet école (groupe de 3, 6 jours) — plateforme de micro-blogging photo dédiée aux animaux.",
      en: "School project (team of 3, 6 days) — photo micro-blogging platform dedicated to animals.",
    },
    content: {
      fr: "Projet collectif de type Instagram-like, centré sur la publication de posts image + texte. Mise en place d’un socle full-stack avec Laravel : authentification (Breeze), pages feed et profil, création et suppression de posts, gestion des abonnements et structuration d’une base relationnelle PostgreSQL. Le projet s’appuie sur un environnement Docker et une UI Tailwind, avec une attention portée à la clarté des parcours (s’inscrire, publier, consulter). Plusieurs fonctionnalités sont laissées en extension (likes, commentaires, pagination).",
      en: "Team project inspired by Instagram-like platforms, focused on image + text posting. Built a full-stack foundation with Laravel: authentication (Breeze), feed and profile pages, post creation and deletion, follow relationships, and a relational PostgreSQL database. The project relies on a Docker environment and a Tailwind-based UI, with a focus on clear user flows (sign up, publish, browse). Several features remain as extensions (likes, comments, pagination).",
    },
    roles: ["Full-stack (collectif)"],
    stack: ["Laravel · PHP · Tailwind · PostgreSQL · Docker"],
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
      fr: "Projet école (7 personnes, 7 jours) - e-commerce de meubles de seconde main, avec contraintes “client”.",
      en: "School project (7 people, 7 days) - second-hand furniture e-commerce with client-style constraints.",
    },
    content: {
      fr: "Projet collectif mené sous contraintes : UI en Bootstrap, organisation en deux équipes (front / back) puis inversion à mi-parcours. Contribution sur le front la première semaine (React + pages e-commerce : listing, détail produit, admin) puis sur le back la seconde (API Express, base MongoDB via Mongoose, premières briques d’auth). Le projet couvre le parcours principal (catalogue → fiche produit) et une base d’administration ; certaines fonctionnalités restent en MVP (login/panier non finalisés).",
      en: "Team project built under constraints: Bootstrap UI, split into two teams (front / back) then switching mid-way. I contributed on the front in week one (React + e-commerce pages: listing, product detail, admin) and on the back in week two (Express API, MongoDB via Mongoose, first auth building blocks). The project covers the core journey (catalog → product page) and an admin baseline; some features remain MVP-level (login/cart not fully completed).",
    },
    roles: ["Full-stack (collectif)"],
    stack: ["Node.js · Mongoose · Bootstrap"],
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
      fr: "Projet école - web app de gestion de caisse et de stocks pour une association étudiante.",
      en: "School project - cash and inventory management web app for a student association.",
    },
    content: {
      fr: "Conception d’une application full-stack pensée pour un usage réel : suivi des stocks, enregistrement des ventes, calcul automatique des totaux et distinction des rôles (utilisateur·ices / administrateur·ices). Le projet part de besoins exprimés sur le terrain (rotation des équipes, utilisation sur mobile, contraintes de connexion) et s’appuie sur une API Express connectée à une base PostgreSQL via Supabase, avec une interface React orientée simplicité et efficacité.",
      en: "Design and implementation of a full-stack application built for real-world use: stock tracking, sales recording, automatic total calculation, and role separation (users / administrators). The project starts from concrete field needs (team rotation, mobile usage, connectivity constraints) and relies on an Express API connected to a PostgreSQL database via Supabase, with a React interface focused on clarity and efficiency.",
    },
    roles: ["Full-stack"],
    stack: ["React · Node.js · Express · PostgreSQL · Supabase"],
    links: [
      { label: "GitHub", href: "https://github.com/thaliawoods/GestionCaisse" },
    ],
    cover: img(
      "/projects/gestion-de-caisse/cover.png",
      "Gestion de caisse cover",
    ),
    gallery: [
      img(
        "/projects/gestion-de-caisse/01.png",
        "Gestion de caisse screenshot 1",
      ),
    ],
  },

  {
    slug: "safe-or-not",
    years: "2024",
    title: { fr: "Safe or Not?", en: "Safe or Not?" },
    subtitle: {
      fr: "Projet école (6 jours) - app iOS SwiftUI : avis, alertes, niveau de confiance.",
      en: "School project (6 days) - SwiftUI iOS app: reviews, alerts, trust level.",
    },
    content: {
      fr: "Exploration de l’approche mobile avec SwiftUI : conception UI, navigation simple depuis une liste vers des écrans détail, et gestion des états. L’app est pensée pour répertorier des professionnel·les de santé selon un niveau de confiance, permettre la publication d’avis et la création d’alertes. Une étape du projet porte sur le parsing des données et la connexion à une API.",
      en: "Exploring the mobile approach with SwiftUI: UI design, simple navigation from a list to detail screens, and state handling. The app is designed to list healthcare professionals by trust level, allow users to post reviews, and create alerts. One step of the project focuses on data parsing and connecting to an API.",
    },
    roles: ["Mobile"],
    stack: ["SwiftUI · iOS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/SafeOrNotMobile",
      },
    ],
    cover: img("/projects/safe-or-not/cover.png", "Safe or Not cover"),
    gallery: [img("/projects/safe-or-not/01.jpeg", "Safe or Not screenshot 1")],
  },

  {
    slug: "chess",
    years: "2024",
    title: { fr: "Chess", en: "Chess" },
    subtitle: {
      fr: "Jeu d’échecs (MVP) - échiquier 8×8, mouvements des pièces, conditions de victoire.",
      en: "Chess game (MVP) - 8×8 board, piece movement logic, win conditions.",
    },
    content: {
      fr: "Construction d’un MVP en JavaScript pour comprendre la logique d’un jeu à règles : génération du plateau, gestion des cases et des déplacements, état de partie et détection des situations de fin (échec et mat / victoire). Une V2 est en cours en TypeScript, avec une approche orientée objet. Les choix visuels sont pensés en gardant l’accessibilité en tête (couleurs en cours d’ajustement).",
      en: "Built an MVP in JavaScript to understand the logic of a rules-based game: board generation, square handling and legal moves, game state, and end-game detection (checkmate / win). A TypeScript v2 is in progress with an object-oriented approach. Visual choices are made with accessibility in mind (colors are still being refined).",
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
      fr: "Tetris en JavaScript — grille, tetrominos, collisions, lignes complétées et score.",
      en: "Tetris in JavaScript — grid, tetrominoes, collisions, line clears, and scoring.",
    },
    content: {
      fr: "Implémentation de la logique de jeu : gestion de la grille, déplacement et rotation des pièces, détection des collisions, suppression des lignes et calcul du score. Un projet idéal pour travailler l’algorithmie, la gestion d’état et une boucle de jeu claire côté front.",
      en: "Implemented the core game logic: grid handling, piece movement and rotation, collision detection, line clearing, and score calculation. A great project to practice algorithms, state management, and a clean front-end game loop.",
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
      fr: "Projet école (individuel) — app iOS responsive, réseau social de dessin orienté création collective.",
      en: "School project (individual) — responsive iOS app, a drawing social app focused on collective creation.",
    },
    content: {
      fr: "Exploration de Swift et des patterns iOS (navigation, écrans, états) pour concevoir une expérience fluide sur mobile et tablette. L’application est pensée comme un espace où des utilisateur·ices partagent des dessins et contribuent à une œuvre commune, avec une attention particulière portée à l’UI, à la lisibilité des écrans et aux interactions.",
      en: "Exploring Swift and core iOS patterns (navigation, screens, state) to design a smooth experience across phone and tablet. The app is imagined as a space where users share drawings and contribute to a common artwork, with particular attention to UI clarity and interactions.",
    },
    roles: ["iOS"],
    stack: ["Swift · iOS"],
    links: [
      { label: "GitHub", href: "https://github.com/thaliawoods/DrawTogether" },
    ],
    cover: img("/projects/draw-together/cover.png", "Draw Together cover"),
    gallery: [],
  },

  {
    slug: "social-network",
    years: "2023",
    title: { fr: "Social Network (PHP)", en: "Social Network (PHP)" },
    subtitle: {
      fr: "Projet école (binôme, 6 jours) — mini réseau social en PHP : comptes utilisateur·ices, articles, commentaires, base MySQL.",
      en: "School project (pair work, 6 days) - a mini social network in PHP: user accounts, posts, comments, MySQL database.",
    },
    content: {
      fr: "Conception d’une base relationnelle et mise en place d’un CRUD complet (listing / détail, création / édition). Authentification et gestion des sessions, formulaires de publication, et premiers mécanismes d’autorisations côté serveur (droits, modération). Un projet qui m’a permis de consolider le lien entre base de données, logique back et génération dynamique des pages.",
      en: "Relational database design and implementation of a complete CRUD (list / detail, create / edit). Authentication and session management, publishing forms, and first server-side authorization mechanisms (access control, moderation). A project that helped me strengthen the link between databases, backend logic, and dynamic page generation.",
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

  {
    slug: "evening-experience",
    years: "2023",
    title: { fr: "Evening Experience", en: "Evening Experience" },
    subtitle: {
      fr: "Projet école (groupe de 4, 6 jours) - web app qui recommande une recette et une musique selon l’humeur.",
      en: "School project (team of 4, 6 days) - web app that recommends a recipe and music based on mood.",
    },
    content: {
      fr: "Projet orienté UX : saisie d’un “mood” via des inputs simples, transformation de cette donnée en recommandations, puis restitution dans une interface ludique. Les suggestions musicales s’appuient sur des vidéos YouTube. Le projet a aussi permis de travailler le traitement de données côté front, l’animation web et l’organisation en équipe (répartition des tâches, synchronisation, Git).",
      en: "UX-oriented project: collecting a “mood” through simple inputs, turning it into recommendations, and presenting results in a playful interface. Music suggestions rely on YouTube videos. The project also involved front-end data handling, web animation, and team collaboration (task distribution, sync, Git).",
    },
    roles: ["Front-end"],
    stack: ["JavaScript · HTML · CSS"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/dataviz-aisseta-thalia-oscar-claire",
      },
    ],
    cover: img(
      "/projects/evening-experience/cover.png",
      "Evening Experience cover",
    ),
    gallery: [
      img(
        "/projects/evening-experience/01.png",
        "Evening Experience screenshot 1",
      ),
    ],
  },
];

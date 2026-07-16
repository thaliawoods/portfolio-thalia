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
    slug: "https",
    years: "2026",
    title: {
      fr: "Https ://",
      en: "Https ://",
    },
    subtitle: {
      fr: "Expérience interactive 3D - jeu exploratoire mêlant photogrammétrie, narration, son et spatialisation.",
      en: "3D interactive experience - exploratory game combining photogrammetry, narrative, and spatial audio.",
    },
    content: {
      fr: "HTTPS est un jeu vidéo exploratoire développé avec l'artiste Marion Serclérat dans le cadre d'une résidence Création en cours des Ateliers Médicis. Construit à partir d'archives photogrammétriques, le projet interroge les liens entre territoires, mémoires et espaces numériques à travers une expérience immersive. Ces photogrammétries sont retravaillées dans Blender afin de supprimer les éléments parasites.\n\nLe joueur évolue dans des environnements hybrides où l'exploration active les strates sonores et les fragments de récits. Un contrôleur MIDI permet de piloter en temps réel les interactions, transformant le jeu en un dispositif à la frontière entre instrument et installation.\n\nDéveloppé avec Godot, le projet repose sur une architecture modulaire intégrant chargement dynamique des scènes, synchronisation audio/visuelle et génération procédurale d'espaces navigables.\n\nLe projet est désormais accessible en ligne dans une version web, jouable directement depuis le navigateur, sans installation.",
      en: "HTTPS is an exploratory video game developed with artist Marion Serclérat as part of a Création en cours residency at Ateliers Médicis. Built from photogrammetric archives, the project questions the links between territories, memories, and digital spaces through an immersive experience. These photogrammetric scans are reworked in Blender to remove unwanted artifacts.\n\nThe player navigates hybrid environments where exploration activates sonic layers and narrative fragments. A MIDI controller enables real-time interaction, turning the game into a device at the boundary between instrument and installation.\n\nDeveloped with Godot, the project relies on a modular architecture integrating dynamic scene loading, audio/visual synchronization, and procedural generation of navigable spaces.\n\nThe project is now available online as a web version, playable directly in the browser — no installation required.",
    },
    roles: ["Creative coding", "Game dev", "Interactive design"],
    stack: ["Godot Engine · Blender · Photogrammetry · MIDI · Web Audio"],
    links: [
      {
        label: "Live",
        href: "https://https-explore.netlify.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/https",
      },
      {
        label: "Project manifesto (PDF)",
        href: "/projects/https/DOCUMENTATION v2.pdf",
      },
    ],
    cover: img("/projects/https/w5-statue.png", "Https :// cover"),
    gallery: [
      vid("https://vz-1091ebdd-3b9.b-cdn.net/6e8bc210-2375-4c47-83d4-a44c90393c1e/playlist.m3u8", "Https :// gameplay video", "https://vz-1091ebdd-3b9.b-cdn.net/6e8bc210-2375-4c47-83d4-a44c90393c1e/thumbnail.jpg"),
      img("/projects/https/w1-colonnes.png", "Https :// world 1 - colonnes"),
      img("/projects/https/w2-batiment.png", "Https :// world 2 - bâtiment"),
      img("/projects/https/w4-porte.png", "Https :// world 4 - porte"),
      img("/projects/https/w3-fleurs.png", "Https :// world 3 - fleurs"),
      img("/projects/https/w5-colonnes.png", "Https :// world 5 - colonnes"),
      img("/projects/https/w1-tunnel.png", "Https :// world 1 - tunnel"),
      img("/projects/https/w4-statue.png", "Https :// world 4 - statue"),
      img("/projects/https/midi-controller.png", "Https :// midi controller"),
    ],
    featured: true,
  },

  {
    slug: "madame-tagada",
    years: "2026",
    title: {
      fr: "Madame Tagada",
      en: "Madame Tagada",
    },
    subtitle: {
      fr: "Atelier d'initiation à la programmation pour enfants (Ateliers Médicis) - mini-jeu web & supports papier autour d'une fraise qui a perdu sa couleur.",
      en: "Introduction-to-programming workshop for children (Ateliers Médicis) - a browser mini-game and printable materials around a strawberry who lost her colour.",
    },
    content: {
      fr: "Madame Tagada est un atelier d'initiation à la programmation destiné aux enfants, conçu dans le cadre de la résidence Création en cours des Ateliers Médicis, en prolongement du jeu vidéo Https://. Autour d'un fil rouge narratif — Madame Tagada, une fraise qui a perdu sa couleur — les élèves deviennent les programmeur·euses chargé·es de lui écrire un programme pour la retrouver.\n\nL'atelier se déploie sur trois temps : programmer une Tagada à l'écran, devenir soi-même le robot en exécutant des instructions avec son corps, puis une chasse au trésor finale mêlant contraintes et bugs à résoudre en équipe. J'ai développé le support numérique : un mini-jeu web (HTML + Canvas, sans dépendance) où l'on construit une suite d'instructions (haut, bas, gauche, droite) puis on l'exécute pour guider Tagada à travers une grille 6×6, collecter trois étoiles et rejoindre le pot de peinture — sans jamais repasser deux fois sur la même case.\n\nLe dispositif fait vivre concrètement les notions d'instruction, de programme, d'exécution et de bug, avec cinq plateaux iso-difficiles déclinés en versions papier (plateaux A3, fiches programme) pour prolonger le jeu hors de l'écran.",
      en: "Madame Tagada is an introduction-to-programming workshop for children, created as part of the Création en cours residency at Ateliers Médicis, extending the video game Https://. Around a narrative thread — Madame Tagada, a strawberry who has lost her colour — the pupils become the programmers tasked with writing her a program to find it again.\n\nThe workshop unfolds over three sessions: programming a Tagada on screen, becoming the robot yourself by executing instructions with your body, then a final treasure hunt mixing constraints and bugs to solve as a team. I developed the digital tool: a browser mini-game (HTML + Canvas, no dependencies) where you build a sequence of instructions (up, down, left, right) then run it to guide Tagada across a 6×6 grid, collect three stars and reach the paint pot — never stepping on the same cell twice.\n\nThe project brings the notions of instruction, program, execution and bug to life, with five iso-difficulty boards also produced as print versions (A3 boards, program sheets) to extend the game beyond the screen.",
    },
    roles: ["Creative coding", "Médiation / Atelier", "Game design"],
    stack: ["HTML5 Canvas · JavaScript (vanilla)"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/madame-tagada",
      },
    ],
    cover: img("/projects/madame-tagada/cover.png", "Madame Tagada — mini-jeu, plateau de départ"),
    gallery: [
      img("/projects/madame-tagada/02.png", "Madame Tagada — programme en cours d'exécution"),
      img("/projects/madame-tagada/03.png", "Madame Tagada — plateau 2"),
      img("/projects/madame-tagada/04.png", "Madame Tagada — plateau 3"),
      img("/projects/madame-tagada/05.png", "Madame Tagada — plateau papier A3 imprimable"),
      img("/projects/madame-tagada/06.png", "Madame Tagada — fiche programme papier"),
    ],
    featured: true,
  },

  {
    slug: "temoigner-pour-lutter",
    years: "2026",
    title: { fr: "Témoigner pour Lutter", en: "Testify to Resist" },
    subtitle: {
      fr: "Outil d'archive & performance.\nNavigation dans des témoignages, fragments média, structure documentaire.",
      en: "Archive & performance tool.\nNavigating testimonies, media fragments, documentary structure.",
    },
    content: {
      fr: "Témoigner pour lutter est un dispositif numérique conçu comme une archive vivante, à la croisée de l'art, de la performance et de l'engagement politique. Développée pour le collectif Ely & Marion, la plateforme permet de rassembler, manipuler et réactiver des contenus militants (textes, images, vidéos, sons).\n\nPensée comme une expérience active, elle propose un espace de composition (Do It Yourself) où les utilisateur·ices peuvent recomposer des fragments sur un canvas et produire leurs propres formes. Utilisable en contexte performatif, elle devient un outil collectif en constante évolution.\n\nLe projet explore le potentiel du design et du code comme outils de mémoire et de résistance.",
      en: "Testify to Resist is a digital platform designed as a living archive, at the intersection of art, performance, and political engagement. Built for the Ely & Marion collective, the platform brings together, manipulates, and reactivates activist content (texts, images, videos, sounds).\n\nConceived as an active experience, it offers a composition space (Do It Yourself) where users can rearrange fragments on a canvas and produce their own forms. Usable in performative contexts, it becomes a collective tool in constant evolution.\n\nThe project explores the potential of design and code as tools of memory and resistance.",
    },
    roles: ["Full-Stack", "UX/UI"],
    stack: ["Next.js 16 · React 19 · TypeScript · Tailwind · Bunny CDN · Web Audio API"],
    links: [
      {
        label: "Live",
        href: "https://temoigner-pour-lutter.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/temoigner-pour-lutter-tool",
      },
      {
        label: "Dossier artistique (PDF)",
        href: "/projects/temoigner-pour-lutter/dossier-artistique.pdf",
      },
    ],
    cover: img(
      "/projects/temoigner-pour-lutter/01.png",
      "Témoigner pour Lutter — page d'accueil avec bannière d'images",
    ),
    gallery: [
      img(
        "/projects/temoigner-pour-lutter/02.png",
        "Témoigner pour Lutter — archives bibliothèque",
      ),
      img(
        "/projects/temoigner-pour-lutter/03.png",
        "Témoigner pour Lutter — archives vidéo et film",
      ),
      img(
        "/projects/temoigner-pour-lutter/04.png",
        "Témoigner pour Lutter — performances extraits",
      ),
      img(
        "/projects/temoigner-pour-lutter/06.png",
        "Témoigner pour Lutter — do it yourself drag media",
      ),
      img(
        "/projects/temoigner-pour-lutter/07.png",
        "Témoigner pour Lutter — do it yourself composition canvas",
      ),
      img(
        "/projects/temoigner-pour-lutter/08.png",
        "Témoigner pour Lutter — vos créations galerie",
      ),
      img(
        "/projects/temoigner-pour-lutter/09.png",
        "Témoigner pour Lutter — collective Ely & Marion",
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
    fr: "Site expérimental audio / visuel.\nMap avec zones interactives, esthétique organique, narration.",
    en: "Experimental audio/visual site.\nMap with interactive zones, organic aesthetics, narrative.",
  },
  content: {
    fr: "« Hannah Hajar » est un site expérimental audio-visuel conçu pour un duo musical, pensé comme une cartographie 3D immersive de leur univers. L'expérience s'ouvre sur une séquence centrée sur le logo, puis invite à naviguer librement dans un espace où les contenus sont répartis sur une sphère déformée inspirée d'une spirale de Fibonacci. À mesure que l'on se déplace, certains éléments émergent et activent différentes variations sonores, faisant du site une extension numérique de la performance plutôt qu'un simple support de présentation.\n\nLe projet traduit visuellement une musique faite de textures instables et de rythmes fragmentés. L'espace est conçu comme un environnement flottant, en recomposition permanente, où formes, sons et interactions se répondent dans une expérience sensible et immersive, développée en étroite collaboration avec les artistes.",
    en: "\"Hannah Hajar\" is an experimental audio-visual website designed for a musical duo, conceived as an immersive 3D cartography of their universe. The experience opens with a logo-centered sequence, then invites free navigation through a space where content is distributed across a deformed sphere inspired by a Fibonacci spiral. As users move through the space, elements emerge and trigger different sonic variations, making the site a digital extension of the performance rather than a simple presentation platform.\n\nThe project visually translates music made of unstable textures and fragmented rhythms. The space is designed as a floating environment in constant recomposition, where shapes, sounds, and interactions respond to one another in a sensory and immersive experience, developed in close collaboration with the artists.",
  },
  roles: ["Full-Stack", "UX/UI", "Art direction"],
  stack: ["Next.js · TypeScript · Tailwind · Three.js"],
  links: [
    {
      label: "Live",
      href: "https://hannah-hajar.vercel.app/",
    },
    {
      label: "GitHub",
      href: "https://github.com/thaliawoods/hannah-hajar",
    },
    {
      label: "Dossier (PDF)",
      href: "/projects/hannah-hajar/dossier-en.pdf",
    },
  ],
  cover: img("/projects/hannah-hajar/cover.png", "Hannah Hajar cover"),
  gallery: [
    img("/projects/hannah-hajar/04.png", "Hannah Hajar screenshot 5"),
    img("/projects/hannah-hajar/06.png", "Hannah Hajar screenshot 7"),
    img("/projects/hannah-hajar/07.png", "Hannah Hajar screenshot 8"),
    img("/projects/hannah-hajar/08.png", "Hannah Hajar screenshot 9"),
    img("/projects/hannah-hajar/09.png", "Hannah Hajar screenshot 10"),
    img("/projects/hannah-hajar/17.png", "Hannah Hajar screenshot 18"),
    img("/projects/hannah-hajar/18.png", "Hannah Hajar screenshot 19"),
    img("/projects/hannah-hajar/19.png", "Hannah Hajar screenshot 20"),
    img("/projects/hannah-hajar/10.png", "Hannah Hajar screenshot 11"),
    img("/projects/hannah-hajar/11.png", "Hannah Hajar screenshot 12"),
    img("/projects/hannah-hajar/12.png", "Hannah Hajar screenshot 13"),
    img("/projects/hannah-hajar/13.png", "Hannah Hajar screenshot 14"),
    img("/projects/hannah-hajar/14.png", "Hannah Hajar screenshot 15"),
    img("/projects/hannah-hajar/15.png", "Hannah Hajar screenshot 16"),
    img("/projects/hannah-hajar/16.png", "Hannah Hajar screenshot 17"),
    img("/projects/hannah-hajar/20.png", "Hannah Hajar screenshot 21"),
    img("/projects/hannah-hajar/21.png", "Hannah Hajar screenshot 22"),
    img("/projects/hannah-hajar/22.png", "Hannah Hajar screenshot 23"),
    img("/projects/hannah-hajar/23.png", "Hannah Hajar screenshot 24"),
  ],
  featured: true,
},

  {
    slug: "detours-en-cinecourt",
    years: "2026",
    title: {
      fr: "Détours en Cinécourt",
      en: "Détours en Cinécourt",
    },
    subtitle: {
      fr: "Plateforme interne de gestion de films pour un festival de courts-métrages - En cours. UX/UI, structure de données et interface métier.",
      en: "Internal film management platform for a short film festival - Ongoing. UX/UI, data structure, and production interface.",
    },
    content: {
      fr: "Conception et développement d'une plateforme interne utilisée par l'équipe de programmation pour centraliser la sélection de films. Pilotage de la refonte du produit : UX/UI (wireframes, parcours utilisateurs) et développement de l'interface en Next.js, React et Tailwind. Structuration de l'architecture des données et préparation de l'intégration backend avec MongoDB. Implémentation des fonctionnalités clés, gestion des accès et des données sensibles, avec une attention particulière portée à la lisibilité et à l'efficacité des workflows.",
      en: "Designed and developed an internal platform used by a programming team to centralize film selection for a short film festival. Led a product redesign: UX/UI (wireframes, user flows) and front-end development with Next.js, React, and Tailwind. Structured the data architecture and prepared backend integration with MongoDB. Implemented core features, access control, and sensitive data handling, with a strong focus on clarity and efficient workflows.",
    },
    roles: ["Full-stack", "UX/UI"],
    stack: ["Next.js · React · TypeScript · Tailwind · MongoDB"],
    links: [],
    cover: img(
      "/projects/detours-en-cinecourt/film-detail-light.png",
      "Détours en Cinécourt fiche film",
    ),
    gallery: [
      img(
        "/projects/detours-en-cinecourt/login.jpeg",
        "Détours en Cinécourt login screen",
      ),
      img(
        "/projects/detours-en-cinecourt/films-light.png",
        "Détours en Cinécourt films catalogue (clair)",
      ),
      img(
        "/projects/detours-en-cinecourt/films-filtres-light.png",
        "Détours en Cinécourt films filtres avancés (clair)",
      ),
      img(
        "/projects/detours-en-cinecourt/archives-light.png",
        "Détours en Cinécourt archives (clair)",
      ),
      img(
        "/projects/detours-en-cinecourt/film-detail-light.png",
        "Détours en Cinécourt fiche film (clair)",
      ),
      img(
        "/projects/detours-en-cinecourt/admin-light.png",
        "Détours en Cinécourt administration (clair)",
      ),
      img(
        "/projects/detours-en-cinecourt/profil-light.png",
        "Détours en Cinécourt profil (clair)",
      ),
      img(
        "/projects/detours-en-cinecourt/films-dark.png",
        "Détours en Cinécourt films catalogue (sombre)",
      ),
      img(
        "/projects/detours-en-cinecourt/archives-dark.png",
        "Détours en Cinécourt archives (sombre)",
      ),
      img(
        "/projects/detours-en-cinecourt/film-detail-dark.png",
        "Détours en Cinécourt fiche film (sombre)",
      ),
      img(
        "/projects/detours-en-cinecourt/admin-dark.png",
        "Détours en Cinécourt administration (sombre)",
      ),
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
      fr: "Jardin Solidaire est une application web full stack développée en équipe de trois, visant à favoriser le lien social local en mettant en relation des propriétaires de jardins sous-utilisés avec des personnes souhaitant jardiner.\n\nLa plateforme couvre l'ensemble du parcours utilisateur : inscription avec vérification par e-mail, création de profils, publication de jardins géolocalisés, gestion des disponibilités, système de réservation sans conflit et messagerie intégrée.\n\nRéalisé de la conception au déploiement dans le cadre d'un projet RNCP, Jardin Solidaire constitue une première expérience complète en développement full stack, alliant collaboration en équipe, enjeux techniques et impact social.",
      en: "Jardin Solidaire is a full-stack web application developed in a team of three, aimed at fostering local social connections by matching owners of underused gardens with people looking to garden.\n\nThe platform covers the entire user journey: sign-up with email verification, profile creation, geolocated garden listings, availability management, conflict-free booking system, and built-in messaging.\n\nBuilt from design to deployment as part of an RNCP certification project, Jardin Solidaire represents a first complete full-stack development experience, combining teamwork, technical challenges, and social impact.",
    },
    roles: ["Full-stack", "UX/UI"],
    stack: [
      "Next.js · Node.js · Express · Prisma · PostgreSQL · Docker · Playwright",
    ],
    links: [
      {
        label: "Live",
        href: "https://jardin-solidaire.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/JardinSolidaire",
      },
    ],
    cover: img(
      "/projects/jardin-solidaire/01.png",
      "Jardin Solidaire interface",
    ),
    gallery: [
      img("/projects/jardin-solidaire/02.png", "Jardin Solidaire – les jardins"),
      img("/projects/jardin-solidaire/03.png", "Jardin Solidaire – les jardinières"),
      img("/projects/jardin-solidaire/04.png", "Jardin Solidaire – réservation"),
      img("/projects/jardin-solidaire/05.png", "Jardin Solidaire – détail jardin"),
    ],
    featured: true,
  },

  {
    slug: "lydia-transactions-search",
    years: "2026",
    title: { fr: "Test Technique Lydia", en: "Lydia Technical Test" },
    subtitle: {
      fr: "Test technique React - SPA de recherche dans des transactions, filtrage rapide et UI soignée.",
      en: "React technical test - SPA for transaction search, fast filtering, and polished UI.",
    },
    content: {
      fr: "Développement d'une SPA React à partir d'un fichier JSON de transactions : recherche non sensible à la casse, surlignage des occurrences, gestion des états (loading / vide / erreur), et composants UI réutilisables. Travail sur l'ergonomie (feedbacks, micro-interactions) et la qualité du code (composition, lisibilité, conventions).",
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
    slug: "landing-page-julaya",
    years: "2025",
    title: { fr: "Julaya - Landing Page", en: "Julaya - Landing Page" },
    subtitle: {
      fr: "Projet d'entreprise - évolutions front sur la landing Julaya (UI, composants, SEO & performance).",
      en: "Company project - front-end work on Julaya's landing page (UI, components, SEO & performance).",
    },
    content: {
      fr: "Suite au développement du blog et à la mise en place du CMS dans Strapi, j'ai étendu le projet à la landing page. Initialement gérée de manière statique, je l'ai repensée pour qu'elle soit entièrement pilotée depuis le CMS.\n\nJ'ai modélisé de nouveaux contenus dans Strapi, créé les collections et les relations nécessaires, puis restructuré les différentes sections de la page. J'ai ensuite connecté le front en Next.js à ces données pour permettre un affichage dynamique.\n\nCette évolution poursuit le même objectif : permettre à l'équipe marketing de modifier, organiser et faire évoluer la landing page en autonomie, sans dépendre de l'équipe technique, tout en améliorant le référencement naturel du site.",
      en: "Following the blog development and the CMS setup in Strapi, I extended the project to the landing page. Initially managed statically, I reworked it to be entirely driven from the CMS.\n\nI modeled new content in Strapi, created the necessary collections and relationships, then restructured the various sections of the page. I then connected the Next.js front end to this data to enable dynamic rendering.\n\nThis evolution pursues the same goal: enabling the marketing team to edit, organize, and evolve the landing page independently, without relying on the technical team, while improving the site's SEO.",
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
    title: { fr: "Julaya - Blog", en: "Julaya - Blog" },
    subtitle: {
      fr: "Projet d'entreprise - intégration et structuration du blog public Julaya.",
      en: "Company project - integration and structuring of Julaya's public blog.",
    },
    content: {
      fr: "Développement d'un blog à partir d'une maquette Figma, avec une approche complète allant de l'intégration front à la structuration du back office. Le projet inclut la modélisation des contenus dans Strapi, la création des collections et des relations, ainsi que la mise en place de l'API.\n\nLe front, développé en Next.js, est connecté au CMS pour afficher les contenus de manière dynamique. Cette architecture est pensée pour rendre l'équipe marketing autonome dans la gestion et la publication des contenus, sans dépendre de l'équipe technique, tout en assurant une structure claire et évolutive.",
      en: "Development of a blog from a Figma mockup, with a comprehensive approach spanning front-end integration to back office structuring. The project includes content modeling in Strapi, collection and relationship setup, and API implementation.\n\nThe front end, built with Next.js, is connected to the CMS to display content dynamically. This architecture is designed to make the marketing team autonomous in managing and publishing content, without relying on the technical team, while ensuring a clear and scalable structure.",
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
      fr: "Projet école (groupe de 3, 6 jours) - plateforme de micro-blogging photo dédiée aux animaux.",
      en: "School project (team of 3, 6 days) - photo micro-blogging platform dedicated to animals.",
    },
    content: {
      fr: "Projet collectif de type Instagram-like, centré sur la publication de posts image + texte. Mise en place d'un socle full-stack avec Laravel : authentification (Breeze), pages feed et profil, création et suppression de posts, gestion des abonnements et structuration d'une base relationnelle PostgreSQL. Le projet s'appuie sur un environnement Docker et une UI Tailwind, avec une attention portée à la clarté des parcours (s'inscrire, publier, consulter). Plusieurs fonctionnalités sont laissées en extension (likes, commentaires, pagination).",
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
      fr: "Projet école (7 personnes, 7 jours) - e-commerce de meubles de seconde main, avec contraintes «client».",
      en: "School project (7 people, 7 days) - second-hand furniture e-commerce with client-style constraints.",
    },
    content: {
      fr: "Projet collectif mené sous contraintes : UI en Bootstrap, organisation en deux équipes (front / back) puis inversion à mi-parcours. Contribution sur le front la première semaine (React + pages e-commerce : listing, détail produit, admin) puis sur le back la seconde (API Express, base MongoDB via Mongoose, premières briques d'auth). Le projet couvre le parcours principal (catalogue → fiche produit) et une base d'administration ; certaines fonctionnalités restent en MVP (login/panier non finalisés).",
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

  // {
  //   slug: "gestion-de-caisse",
  //   years: "2024",
  //   title: { fr: "Gestion de caisse", en: "Cash Management" },
  //   subtitle: {
  //     fr: "Projet école - web app de gestion de caisse et de stocks pour une association étudiante.",
  //     en: "School project - cash and inventory management web app for a student association.",
  //   },
  //   content: {
  //     fr: "Conception d'une application full-stack pensée pour un usage réel : suivi des stocks, enregistrement des ventes, calcul automatique des totaux et distinction des rôles (utilisateur·ices / administrateur·ices). Le projet part de besoins exprimés sur le terrain (rotation des équipes, utilisation sur mobile, contraintes de connexion) et s'appuie sur une API Express connectée à une base PostgreSQL via Supabase, avec une interface React orientée simplicité et efficacité.",
  //     en: "Design and implementation of a full-stack application built for real-world use: stock tracking, sales recording, automatic total calculation, and role separation (users / administrators). The project starts from concrete field needs (team rotation, mobile usage, connectivity constraints) and relies on an Express API connected to a PostgreSQL database via Supabase, with a React interface focused on clarity and efficiency.",
  //   },
  //   roles: ["Full-stack"],
  //   stack: ["React · Node.js · Express · PostgreSQL · Supabase"],
  //   links: [
  //     { label: "GitHub", href: "https://github.com/thaliawoods/GestionCaisse" },
  //   ],
  //   cover: img(
  //     "/projects/gestion-de-caisse/cover.png",
  //     "Gestion de caisse cover",
  //   ),
  //   gallery: [
  //     img(
  //       "/projects/gestion-de-caisse/01.png",
  //       "Gestion de caisse screenshot 1",
  //     ),
  //   ],
  // },

  {
    slug: "safe-or-not",
    years: "2024",
    title: { fr: "Safe or Not?", en: "Safe or Not?" },
    subtitle: {
      fr: "Projet école (6 jours) - app iOS SwiftUI : avis, alertes, niveau de confiance.",
      en: "School project (6 days) - SwiftUI iOS app: reviews, alerts, trust level.",
    },
    content: {
      fr: "Exploration de l'approche mobile avec SwiftUI : conception UI, navigation simple depuis une liste vers des écrans détail, et gestion des états. L'app est pensée pour répertorier des professionnel·les de santé selon un niveau de confiance, permettre la publication d'avis et la création d'alertes.",
      en: "Exploring the mobile approach with SwiftUI: UI design, simple navigation from a list to detail screens, and state handling. The app is designed to list healthcare professionals by trust level, allow users to post reviews, and create alerts.",
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

  // {
  //   slug: "chess",
  //   years: "2024",
  //   title: { fr: "Chess", en: "Chess" },
  //   subtitle: {
  //     fr: "Jeu d'échecs (MVP) - échiquier 8×8, mouvements des pièces, conditions de victoire.",
  //     en: "Chess game (MVP) - 8×8 board, piece movement logic, win conditions.",
  //   },
  //   content: {
  //     fr: "Construction d'un MVP en JavaScript pour comprendre la logique d'un jeu à règles : génération du plateau, gestion des cases et des déplacements, état de partie et détection des situations de fin (échec et mat / victoire). Une V2 est en cours en TypeScript, avec une approche orientée objet. Les choix visuels sont pensés en gardant l'accessibilité en tête (couleurs en cours d'ajustement).",
  //     en: "Built an MVP in JavaScript to understand the logic of a rules-based game: board generation, square handling and legal moves, game state, and end-game detection (checkmate / win). A TypeScript v2 is in progress with an object-oriented approach. Visual choices are made with accessibility in mind (colors are still being refined).",
  //   },
  //   roles: ["Front-end"],
  //   stack: ["JavaScript · HTML · CSS · TypeScript"],
  //   links: [{ label: "GitHub", href: "https://github.com/thaliawoods/Chess" }],
  //   cover: img("/projects/chess/cover.png", "Chess cover"),
  //   gallery: [],
  // },

  // {
  //   slug: "tetris",
  //   years: "2024",
  //   title: { fr: "Tetris", en: "Tetris" },
  //   subtitle: {
  //     fr: "Tetris en JavaScript - grille, tetrominos, collisions, lignes complétées et score.",
  //     en: "Tetris in JavaScript - grid, tetrominoes, collisions, line clears, and scoring.",
  //   },
  //   content: {
  //     fr: "Implémentation de la logique de jeu : gestion de la grille, déplacement et rotation des pièces, détection des collisions, suppression des lignes et calcul du score. Un projet idéal pour travailler l'algorithmie, la gestion d'état et une boucle de jeu claire côté front.",
  //     en: "Implemented the core game logic: grid handling, piece movement and rotation, collision detection, line clearing, and score calculation. A great project to practice algorithms, state management, and a clean front-end game loop.",
  //   },
  //   roles: ["Front-end"],
  //   stack: ["JavaScript · HTML · CSS"],
  //   links: [{ label: "GitHub", href: "https://github.com/thaliawoods/Tetris" }],
  //   cover: img("/projects/tetris/cover.png", "Tetris cover"),
  //   gallery: [],
  // },

  {
    slug: "draw-together",
    years: "2024",
    title: { fr: "Draw Together", en: "Draw Together" },
    subtitle: {
      fr: "Projet école (individuel) - app iOS responsive, réseau social de dessin orienté création collective.",
      en: "School project (individual) - responsive iOS app, a drawing social app focused on collective creation.",
    },
    content: {
      fr: "Application iOS de dessin collaboratif pensée comme un espace de création partagé. Chaque utilisateur·ice peut dessiner, contribuer et interagir au sein d'une toile commune, en temps réel ou de manière asynchrone. Le projet explore les mécaniques de co-création à travers une interface simple et lisible, où les contributions individuelles s'assemblent pour former une œuvre collective.\n\nDéveloppée en Swift, l'application s'appuie sur les patterns iOS (navigation, gestion des écrans et des états) afin d'offrir une expérience fluide sur mobile et tablette.",
      en: "A collaborative drawing iOS app designed as a shared creative space. Each user can draw, contribute, and interact within a common canvas, in real time or asynchronously. The project explores co-creation mechanics through a simple and readable interface, where individual contributions come together to form a collective artwork.\n\nDeveloped in Swift, the app builds on core iOS patterns (navigation, screen and state management) to deliver a smooth experience on both phone and tablet.",
    },
    roles: ["iOS"],
    stack: ["Swift · iOS"],
    links: [
      { label: "GitHub", href: "https://github.com/thaliawoods/DrawTogether" },
    ],
    cover: img("/projects/draw-together/cover.png", "Draw Together cover"),
    gallery: [],
  }

  // {
  //   slug: "social-network",
  //   years: "2023",
  //   title: { fr: "Social Network (PHP)", en: "Social Network (PHP)" },
  //   subtitle: {
  //     fr: "Projet école (binôme, 6 jours) - mini réseau social en PHP : comptes utilisateur·ices, articles, commentaires, base MySQL.",
  //     en: "School project (pair work, 6 days) - a mini social network in PHP: user accounts, posts, comments, MySQL database.",
  //   },
  //   content: {
  //     fr: "Conception d'une base relationnelle et mise en place d'un CRUD complet (listing / détail, création / édition). Authentification et gestion des sessions, formulaires de publication, et premiers mécanismes d'autorisations côté serveur (droits, modération). Un projet qui m'a permis de consolider le lien entre base de données, logique back et génération dynamique des pages.",
  //     en: "Relational database design and implementation of a complete CRUD (list / detail, create / edit). Authentication and session management, publishing forms, and first server-side authorization mechanisms (access control, moderation). A project that helped me strengthen the link between databases, backend logic, and dynamic page generation.",
  //   },
  //   roles: ["Full-stack"],
  //   stack: ["PHP · MySQL · phpMyAdmin"],
  //   links: [
  //     {
  //       label: "GitHub",
  //       href: "https://github.com/thaliawoods/reseau-social-php-reseau_social_thalia_fatouma",
  //     },
  //   ],
  //   cover: img("/projects/social-network/cover.png", "Social Network cover"),
  //   gallery: [],
  // },

  // {
  //   slug: "evening-experience",
  //   years: "2023",
  //   title: { fr: "Evening Experience", en: "Evening Experience" },
  //   subtitle: {
  //     fr: "Projet école (groupe de 4, 6 jours) - web app qui recommande une recette et une musique selon l'humeur.",
  //     en: "School project (team of 4, 6 days) - web app that recommends a recipe and music based on mood.",
  //   },
  //   content: {
  //     fr: "Projet orienté UX : saisie d'un "mood" via des inputs simples, transformation de cette donnée en recommandations, puis restitution dans une interface ludique. Les suggestions musicales s'appuient sur des vidéos YouTube. Le projet a aussi permis de travailler le traitement de données côté front, l'animation web et l'organisation en équipe (répartition des tâches, synchronisation, Git).",
  //     en: "UX-oriented project: collecting a "mood" through simple inputs, turning it into recommendations, and presenting results in a playful interface. Music suggestions rely on YouTube videos. The project also involved front-end data handling, web animation, and team collaboration (task distribution, sync, Git).",
  //   },
  //   roles: ["Front-end"],
  //   stack: ["JavaScript · HTML · CSS"],
  //   links: [
  //     {
  //       label: "GitHub",
  //       href: "https://github.com/thaliawoods/dataviz-aisseta-thalia-oscar-claire",
  //     },
  //   ],
  //   cover: img(
  //     "/projects/evening-experience/cover.png",
  //     "Evening Experience cover",
  //   ),
  //   gallery: [
  //     img(
  //       "/projects/evening-experience/01.png",
  //       "Evening Experience screenshot 1",
  //     ),
  //   ],
  // },
];
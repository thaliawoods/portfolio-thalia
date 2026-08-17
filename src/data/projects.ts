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
      fr: "HTTPS est un jeu vidéo exploratoire développé avec l'artiste Marion Serclérat dans le cadre de la résidence Création en cours des Ateliers Médicis, en collaboration avec une classe de treize élèves de Bully (42). Sa matière vient directement des enfants et de leur village : ils ont réalisé des maquettes pour les environnements, modelé des mains pour les personnages, et participé à des scans photogrammétriques, de lieux de Bully comme d'eux-mêmes, ensuite retravaillés dans Blender.\n\nL'exploration est un geste narratif : en avançant, le·la joueur·euse active des strates sonores et des fragments de récits. Un contrôleur MIDI pilote le jeu en temps réel (déplacement, changement de monde, photogrammétries, sons, distorsions de l'image et du son), à la frontière entre instrument, installation et environnement interactif. Textures incomplètes, géométries fracturées et surfaces flottantes ne sont pas corrigées mais assumées comme un langage visuel.\n\nDéveloppé avec Godot, le projet repose sur une architecture modulaire : un orchestrateur coordonne les signaux MIDI, la navigation, l'audio et le chargement des scènes, et les collisions sont générées procéduralement à partir des meshes photogrammétriques. Il est désormais accessible en ligne dans une version web, jouable directement depuis le navigateur.",
      en: "HTTPS is an exploratory video game developed with artist Marion Serclérat as part of the Création en cours residency at Ateliers Médicis, in collaboration with a class of thirteen pupils in Bully (Loire, France). Its raw material comes straight from the children and their village: they built models for the environments, sculpted hands for the characters, and took part in photogrammetric scans, of places in Bully as well as of themselves, then reworked in Blender.\n\nExploration is a narrative gesture: moving through the space, the player activates sonic layers and fragments of stories. A MIDI controller drives the game in real time (movement, switching worlds, photogrammetries, sounds, image and sound distortions), at the boundary between instrument, installation and interactive environment. Incomplete textures, fractured geometries and floating surfaces are not corrected but embraced as a visual language.\n\nBuilt with Godot, it relies on a modular architecture: an orchestrator coordinates the MIDI signals, navigation, audio and scene loading, and collisions are generated procedurally from the photogrammetric meshes. It is now available online as a web version, playable directly in the browser.",
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
    cover: img("/projects/https/w5-statue.webp", "Https :// cover"),
    gallery: [
      vid("https://vz-1091ebdd-3b9.b-cdn.net/6e8bc210-2375-4c47-83d4-a44c90393c1e/playlist.m3u8", "Https :// gameplay video", "https://vz-1091ebdd-3b9.b-cdn.net/6e8bc210-2375-4c47-83d4-a44c90393c1e/thumbnail.jpg"),
      img("/projects/https/w1-colonnes.webp", "Https :// world 1 - colonnes"),
      img("/projects/https/w2-batiment.webp", "Https :// world 2 - bâtiment"),
      img("/projects/https/w4-porte.webp", "Https :// world 4 - porte"),
      img("/projects/https/w3-fleurs.webp", "Https :// world 3 - fleurs"),
      img("/projects/https/w5-colonnes.webp", "Https :// world 5 - colonnes"),
      img("/projects/https/w1-tunnel.webp", "Https :// world 1 - tunnel"),
      img("/projects/https/w4-statue.webp", "Https :// world 4 - statue"),
      img("/projects/https/midi-controller.webp", "Https :// midi controller"),
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
      en: "Introduction-to-programming workshop for children (Ateliers Médicis) - a browser mini-game and printable materials around a strawberry who lost her color.",
    },
    content: {
      fr: "Madame Tagada est un atelier d'initiation à la programmation mené avec une classe d'élèves de Bully (42), conçu avec l'artiste Marion Serclérat dans le cadre de la résidence Création en cours des Ateliers Médicis, en prolongement du jeu vidéo Https://. Le fil rouge : Madame Tagada, une fraise qui a perdu sa couleur, ne la retrouvera que si les enfants apprennent à parler aux machines.\n\nL'atelier se déploie sur trois temps. À l'écran d'abord : après avoir déchiffré de vrais morceaux de code du jeu Https://, les élèves programment une Tagada dans un mini-jeu web que j'ai développé (HTML + Canvas, sans dépendance). Sur une grille 6×6, on écrit une suite d'instructions pour la guider vers le pot de peinture. Le lendemain, les enfants deviennent eux-mêmes le programme : un chef dirige un robot aux yeux bandés avec quatre mots, jusqu'à peindre ensemble de grandes Tagadas rouges. Enfin, cinq défis retirent tour à tour la vue, la parole ou les mots, avant une chasse aux vraies fraises Tagada.\n\nLes plateaux du jeu sont déclinés en versions papier (A3, fiches programme), et les mots, dessins et voix des enfants rejoignent ensuite le jeu Https://. L'atelier fait vivre les notions d'instruction, de programme, d'exécution et de bug, et montre que programmer, c'est inventer des langages.",
      en: "Madame Tagada is an introduction-to-programming workshop run with a class of pupils in Bully (Loire, France), created with artist Marion Serclérat as part of the Création en cours residency at Ateliers Médicis, extending the video game Https://. The thread: Madame Tagada, a strawberry who has lost her color, will only find it again if the children learn to talk to machines.\n\nThe workshop unfolds over three sessions. On screen first: after decoding real snippets of the Https:// code, the pupils program a Tagada in a browser mini-game I developed (HTML + Canvas, no dependencies). On a 6×6 grid, they write a sequence of instructions to guide her to the paint pot. The next day, the children become the program themselves: a chief directs a blindfolded robot with four words, until they paint giant red Tagadas together. Finally, five challenges take away sight, speech or words in turn, before a hunt for real Tagada sweets.\n\nThe game's boards are also produced as print versions (A3, program sheets), and the children's words, drawings and voices then feed into the Https:// game. The workshop brings the notions of instruction, program, execution and bug to life, and shows that programming means inventing languages.",
    },
    roles: ["Creative coding", "Médiation / Atelier", "Game design"],
    stack: ["HTML5 Canvas · JavaScript (vanilla)"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/madame-tagada",
      },
    ],
    cover: img("/projects/madame-tagada/cover.webp", "Madame Tagada - mini-jeu, plateau de départ"),
    gallery: [
      img("/projects/madame-tagada/02.webp", "Madame Tagada - programme en cours d'exécution"),
      img("/projects/madame-tagada/03.webp", "Madame Tagada - plateau 2"),
      img("/projects/madame-tagada/04.webp", "Madame Tagada - plateau 3"),
      img("/projects/madame-tagada/05.webp", "Madame Tagada - plateau papier A3 imprimable"),
      img("/projects/madame-tagada/06.webp", "Madame Tagada - fiche programme papier"),
    ],
    featured: true,
  },

  {
    slug: "temoigner-pour-lutter",
    years: "2026",
    title: { fr: "Témoigner pour Lutter", en: "Testify to Resist" },
    subtitle: {
      fr: "Archive vivante & outil de performance.\nComposer, réactiver et rejouer des fragments militants.",
      en: "Living archive & performance tool.\nCompose, reactivate and replay activist fragments.",
    },
    content: {
      fr: "Témoigner pour lutter est une archive vivante et un outil de composition conçus pour le collectif Ely & Marion, autour de leur performance du même nom. J'en ai assuré seule le développement ainsi que la direction éditoriale et graphique. L'outil rassemble 113 références militantes (films, musiques, textes, œuvres, podcasts, performances) structurées par un même schéma typé - créateur·ice, année, lieu, source, tags, médias - et navigables via une interface éditoriale volontairement sobre.\n\nSon cœur est un espace de composition (DIY) : autour d'un canvas, un pool de visuels tirés aléatoirement que l'on glisse, déplace et redimensionne pour recomposer ses propres fragments. Une console audio en Web Audio API (lecture ponctuelle ou en boucle) ajoute le son à la composition, faisant de l'outil un instrument à part entière, pensé pour être joué en direct en performance.\n\nChaque composition s'exporte en PDF ou en vidéo, en recto-verso : la création au recto, les références utilisées au verso, pour garder la trace des sources. L'export vidéo compose images et vidéos en temps réel sur un canvas hors écran, mixe l'audio et l'encode via MediaRecorder ; les créations partagées rejoignent une galerie commune. Les médias sont hébergés sur Bunny CDN et rattachés automatiquement aux références (normalisation des noms, score de similarité). Le projet est livré et évolue au fil des besoins du collectif.",
      en: "Témoigner pour lutter (Testify to Resist) is a living archive and a composition tool built for the Ely & Marion collective, around their performance of the same name. I handled the development, as well as the editorial and graphic direction, on my own. The tool brings together 113 activist references (films, music, texts, artworks, podcasts, performances) structured by a single typed schema - creator, year, location, source, tags, media - and browsable through a deliberately spare, editorial interface.\n\nAt its heart is a composition space (DIY): around a canvas, a randomly drawn pool of visuals that you drag, move and resize to recompose your own fragments. An audio console built with the Web Audio API (one-shot or looped playback) adds sound to the composition, turning the tool into an instrument in its own right, designed to be played live in performance.\n\nEach composition can be exported as a PDF or a video, two-sided: the creation on the front, the references used on the back, to keep track of the sources. The video export composes images and videos in real time onto an offscreen canvas, mixes the audio and encodes it via MediaRecorder; shared creations join a common gallery. Media is hosted on Bunny CDN and matched automatically to references (name normalization, similarity score). The project is delivered and keeps evolving with the collective's needs.",
    },
    roles: ["Full-stack", "Art direction", "UX/UI"],
    stack: ["Next.js 16 · React 19 · TypeScript · Tailwind · Web Audio API · Canvas / MediaRecorder · Bunny CDN"],
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
      "/projects/temoigner-pour-lutter/01.webp",
      "Témoigner pour Lutter - page d'accueil avec bannière d'images",
    ),
    gallery: [
      img(
        "/projects/temoigner-pour-lutter/02.webp",
        "Témoigner pour Lutter - archives bibliothèque",
      ),
      img(
        "/projects/temoigner-pour-lutter/03.webp",
        "Témoigner pour Lutter - archives vidéo et film",
      ),
      img(
        "/projects/temoigner-pour-lutter/04.webp",
        "Témoigner pour Lutter - performances extraits",
      ),
      img(
        "/projects/temoigner-pour-lutter/06.webp",
        "Témoigner pour Lutter - do it yourself drag media",
      ),
      img(
        "/projects/temoigner-pour-lutter/07.webp",
        "Témoigner pour Lutter - do it yourself composition canvas",
      ),
      img(
        "/projects/temoigner-pour-lutter/08.webp",
        "Témoigner pour Lutter - vos créations galerie",
      ),
      img(
        "/projects/temoigner-pour-lutter/09.webp",
        "Témoigner pour Lutter - collective Ely & Marion",
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
    fr: "Site expérimental audio-visuel.\nCartographie 3D navigable et sonore, pour un duo musical.",
    en: "Experimental audio-visual site.\nA navigable, sonic 3D map, for a musical duo.",
  },
  content: {
    fr: "Hannah Hajar est un site expérimental conçu pour un duo musical, pensé comme une cartographie 3D immersive de leur univers plutôt qu'un site vitrine. On y entre par un logo et un écran d'accueil, puis on explore librement une scène en trois dimensions où images, vidéos et textes (bio, abstract, tech rider, dates de concerts) flottent autour d'une sphère centrale. J'en ai assuré le développement et la direction artistique, en dialogue étroit avec les artistes.\n\nLes contenus sont répartis sur une sphère déformée selon l'angle d'or (distribution en tournesol de Fibonacci), qui tourne lentement sur elle-même ; on navigue en faisant pivoter l'orbite autour d'elle et en zoomant, chaque panneau restant toujours face à la caméra. L'atmosphère - halos de fumée, particules qui suivent le curseur, sphère centrale translucide - est rendue par des shaders GLSL maison (bruit fractal), et les transitions comme l'ouverture des médias en plein écran sont animées avec GSAP. Un drone sonore continu accompagne l'exploration.\n\nDéveloppé en React Three Fiber et Three.js, le projet cherche à traduire visuellement une musique de textures instables et de rythmes fragmentés : un espace flottant, en recomposition permanente, où la navigation spatiale remplace le menu et où formes, sons et images se répondent.",
    en: "Hannah Hajar is an experimental website designed for a musical duo, conceived as an immersive 3D map of their world rather than a showcase site. You enter through a logo and a landing screen, then freely explore a three-dimensional scene where images, videos and texts (bio, abstract, tech rider, concert dates) float around a central sphere. I handled the development and the artistic direction, in close dialogue with the artists.\n\nContent is distributed over a sphere deformed along the golden angle (Fibonacci sunflower layout) that slowly rotates on itself; you navigate by turning the orbit around it and zooming, with each panel always facing the camera. The atmosphere - drifting smoke, cursor-following particles, a translucent central sphere - is rendered with custom GLSL shaders (fractal noise), and transitions and full-screen media openings are animated with GSAP. A continuous sonic drone accompanies the exploration.\n\nBuilt with React Three Fiber and Three.js, the project seeks to visually translate music made of unstable textures and fragmented rhythms: a floating space in constant recomposition, where spatial navigation replaces the menu and where shapes, sounds and images respond to one another.",
  },
  roles: ["Creative coding", "Art direction", "UX/UI"],
  stack: ["Next.js 14 · React Three Fiber · Three.js · GLSL · GSAP · Bunny CDN"],
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
  cover: img("/projects/hannah-hajar/cover.webp", "Hannah Hajar - page d'accueil"),
  gallery: [
    img("/projects/hannah-hajar/04.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/06.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/07.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/08.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/09.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/17.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/18.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/19.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/10.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/11.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/12.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/13.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/14.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/15.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/16.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/20.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/21.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/22.webp", "Hannah Hajar - cartographie 3D immersive"),
    img("/projects/hannah-hajar/23.webp", "Hannah Hajar - cartographie 3D immersive"),
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
      fr: "Refonte de l'outil interne de visionnage et de programmation d'un festival de courts métrages. (stage)",
      en: "Redesign of the internal viewing and programming tool of a short-film festival. (internship)",
    },
    content: {
      fr: "Refonte complète de l'outil interne du festival de courts métrages Détours en Cinécourt, utilisé par le comité de visionnage, le jury et l'équipe de programmation pour trier les milliers de films soumis à chaque édition. L'ancien système (PHP et base MySQL) était difficile à faire évoluer, peu lisible sur mobile et stockait les mots de passe en clair. J'ai mené la refonte de bout en bout, de la documentation technique de l'existant à la conception, jusqu'au développement du nouveau site.\n\nJ'ai d'abord rétro-documenté la base relationnelle et cartographié ses tables, puis conçu les wireframes et les maquettes de chaque écran, en itérant à chaque étape avec l'équipe. J'ai migré les données (plus de 4 000 films et leurs commentaires) vers MongoDB via un script Python, en imbriquant commentaires, alertes et tags directement dans chaque film pour un modèle documentaire cohérent, déployé sur MongoDB Atlas.\n\nDéveloppé en Next.js 14, React et TypeScript, le site propose un catalogue à trois vues (carte, liste, tableau) avec recherche avancée et filtres enregistrables, des fiches films détaillées (commentaires, alertes, notes, coups de cœur), une section archives, un espace profil et un dashboard statistique pour l'administration (graphiques Recharts, exports Excel et PDF). J'ai porté une attention particulière à la sécurité : authentification par JWT, hachage bcrypt, gestion des rôles, protection des routes et durcissement contre les injections. Le projet est aujourd'hui livré et sera déployé en septembre pour la nouvelle édition du festival, que je continue d'accompagner comme bénévole.",
      en: "A complete overhaul of the internal tool of the short-film festival Détours en Cinécourt, used by the viewing committee, the jury and the programming team to sort through the thousands of films submitted each edition. The legacy system (PHP and a MySQL database) was hard to maintain, barely readable on mobile and stored passwords in plain text. I led the redesign end to end, from documenting the existing system to designing and building the new site.\n\nI first reverse-documented the relational database and mapped its tables, then designed the wireframes and mockups of every screen, iterating with the team at each step. I migrated the data (over 4,000 films and their comments) to MongoDB through a Python script, embedding comments, alerts and tags directly within each film for a coherent document model, deployed on MongoDB Atlas.\n\nBuilt with Next.js 14, React and TypeScript, the site offers a catalog with three views (card, list, table), advanced search with saveable filters, detailed film pages (comments, alerts, ratings, favorites), an archive section, a profile space and a statistics dashboard for administrators (Recharts graphs, Excel and PDF exports). I paid particular attention to security: JWT authentication, bcrypt hashing, role management, route protection and hardening against injections. The project is now delivered and will go live in September for the festival's new edition, which I continue to support as a volunteer.",
    },
    roles: ["Full-stack", "UX/UI"],
    stack: ["Next.js 14 · React 18 · TypeScript · Tailwind · MongoDB · JWT · Recharts"],
    links: [],
    cover: img(
      "/projects/detours-en-cinecourt/film-detail-light.webp",
      "Détours en Cinécourt fiche film",
    ),
    gallery: [
      img(
        "/projects/detours-en-cinecourt/login.webp",
        "Détours en Cinécourt login screen",
      ),
      img(
        "/projects/detours-en-cinecourt/films-light.webp",
        "Détours en Cinécourt films catalogue (clair)",
      ),
      img(
        "/projects/detours-en-cinecourt/films-filtres-light.webp",
        "Détours en Cinécourt films filtres avancés (clair)",
      ),
      img(
        "/projects/detours-en-cinecourt/archives-light.webp",
        "Détours en Cinécourt archives (clair)",
      ),
      img(
        "/projects/detours-en-cinecourt/film-detail-light.webp",
        "Détours en Cinécourt fiche film (clair)",
      ),
      img(
        "/projects/detours-en-cinecourt/admin-light.webp",
        "Détours en Cinécourt administration (clair)",
      ),
      img(
        "/projects/detours-en-cinecourt/profil-light.webp",
        "Détours en Cinécourt profil (clair)",
      ),
      img(
        "/projects/detours-en-cinecourt/films-dark.webp",
        "Détours en Cinécourt films catalogue (sombre)",
      ),
      img(
        "/projects/detours-en-cinecourt/archives-dark.webp",
        "Détours en Cinécourt archives (sombre)",
      ),
      img(
        "/projects/detours-en-cinecourt/film-detail-dark.webp",
        "Détours en Cinécourt fiche film (sombre)",
      ),
      img(
        "/projects/detours-en-cinecourt/admin-dark.webp",
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
      fr: "Plateforme qui connecte des jardins inutilisés avec des personnes qui veulent jardiner. (projet RNCP, équipe de 3)",
      en: "A platform that connects underused gardens with people who want to garden. (RNCP project, team of 3)",
    },
    content: {
      fr: "Jardin Solidaire est une application web full-stack qui met en relation des propriétaires de jardins sous-utilisés avec des personnes souhaitant jardiner, pour recréer du lien local. Réalisée en équipe de trois dans le cadre d'un projet de certification RNCP, de la conception au déploiement.\n\nLa plateforme couvre tout le parcours : inscription avec vérification par e-mail et réinitialisation de mot de passe, profils distincts propriétaires / jardinier·es, jardins géolocalisés, créneaux de disponibilité, messagerie et favoris. Le cœur métier est un système de réservation sans conflit : chaque demande est confrontée aux créneaux déjà pris (détection de chevauchement sur les statuts en attente et confirmés) pour éviter les doubles réservations.\n\nCôté technique : front Next.js, API Node.js/Express, base PostgreSQL modélisée avec Prisma (jardins, créneaux, réservations, messages, avis, profils), authentification par JWT et hachage bcrypt. Le projet est outillé comme en production : environnement Docker reproductible, tests automatisés (unitaires Jest, bout-en-bout Playwright) et intégration continue GitHub Actions (tests back, e2e, build des images Docker).",
      en: "Jardin Solidaire is a full-stack web application that connects owners of underused gardens with people who want to garden, to rebuild local ties. Built by a team of three as part of an RNCP certification project, from design to deployment.\n\nThe platform covers the whole journey: sign-up with email verification and password reset, separate owner / gardener profiles, geolocated gardens, availability slots, messaging and favorites. Its core is a conflict-free booking system: each request is checked against already-taken slots (overlap detection over pending and confirmed statuses) to prevent double bookings.\n\nOn the technical side: a Next.js front end, a Node.js/Express API, a PostgreSQL database modeled with Prisma (gardens, slots, bookings, messages, reviews, profiles), JWT authentication and bcrypt hashing. The project is tooled like production: a reproducible Docker environment, automated tests (Jest unit tests, Playwright end-to-end) and GitHub Actions continuous integration (backend tests, e2e, Docker image builds).",
    },
    roles: ["Full-stack", "UX/UI"],
    stack: [
      "Next.js · Node.js · Express · Prisma · PostgreSQL · JWT · Docker · Jest · Playwright · GitHub Actions",
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
      "/projects/jardin-solidaire/01.webp",
      "Jardin Solidaire interface",
    ),
    gallery: [
      img("/projects/jardin-solidaire/02.webp", "Jardin Solidaire - les jardins"),
      img("/projects/jardin-solidaire/03.webp", "Jardin Solidaire - les jardinières"),
      img("/projects/jardin-solidaire/04.webp", "Jardin Solidaire - réservation"),
      img("/projects/jardin-solidaire/05.webp", "Jardin Solidaire - détail jardin"),
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
      fr: "SPA React (Vite) développée pour le test technique front-end de Lydia : rechercher dans une liste de transactions à partir d'un fichier JSON. L'interface suit un enchaînement clair - recherche, filtres par statut (validé, en cours, annulé), résultats - avec surlignage des termes trouvés, tri par date, état vide explicite et une info-bulle accessible détaillant le motif des transactions annulées. Utilisable au clavier, responsive (tableau sur desktop, cartes sur mobile).\n\nLa recherche est implémentée sans librairie externe, comme demandé : un index de n-grammes (trigrammes) est construit à partir des libellés, puis chaque requête est décomposée et intersectée pour ne garder que les candidats pertinents, ce qui reste rapide même sur des saisies partielles. Le tout est couvert par des tests end-to-end Playwright (recherche, filtres, bouton effacer, état vide) et déployé en continu via GitHub Actions et Vercel.",
      en: "React (Vite) SPA built for Lydia's front-end technical test: searching a list of transactions from a JSON file. The interface follows a clear flow - search, status filters (completed, pending, canceled), results - with match highlighting, date sorting, an explicit empty state and an accessible tooltip detailing the reason for canceled transactions. Keyboard-usable and responsive (table on desktop, cards on mobile).\n\nSearch is implemented without any external library, as required: an n-gram (trigram) index is built from the labels, then each query is split and intersected to keep only the relevant candidates, staying fast even on partial input. Everything is covered by Playwright end-to-end tests (search, filters, clear button, empty state) and continuously deployed via GitHub Actions and Vercel.",
    },
    roles: ["Front-end", "UX/UI"],
    stack: ["React · Vite · Tailwind · Playwright · GitHub Actions"],
    links: [
      { label: "Live", href: "https://test-lydia.vercel.app/" },
      { label: "GitHub", href: "https://github.com/thaliawoods/test-lydia" },
    ],
    cover: img(
      "/projects/test-lydia/01.webp",
      "Lydia transactions search cover",
    ),
    gallery: [
      img(
        "/projects/test-lydia/02.webp",
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
      fr: "Refonte front de la landing Julaya, pilotée depuis le CMS (UI, composants, SEO & performance). (alternance)",
      en: "Front-end rework of Julaya's landing page, CMS-driven (UI, components, SEO & performance). (apprenticeship)",
    },
    content: {
      fr: "Suite au développement du blog et à la mise en place du CMS dans Strapi, j'ai étendu le projet à la landing page. Initialement gérée de manière statique, je l'ai repensée pour qu'elle soit entièrement pilotée depuis le CMS.\n\nJ'ai modélisé de nouveaux contenus dans Strapi, créé les collections et les relations nécessaires, puis restructuré les différentes sections de la page. J'ai ensuite connecté le front en Next.js à ces données pour permettre un affichage dynamique.\n\nCette évolution poursuit le même objectif : permettre à l'équipe marketing de modifier, organiser et faire évoluer la landing page en autonomie, sans dépendre de l'équipe technique, tout en améliorant le référencement naturel du site.",
      en: "Following the blog development and the CMS setup in Strapi, I extended the project to the landing page. Initially managed statically, I reworked it to be entirely driven from the CMS.\n\nI modeled new content in Strapi, created the necessary collections and relationships, then restructured the various sections of the page. I then connected the Next.js front end to this data to enable dynamic rendering.\n\nThis evolution pursues the same goal: enabling the marketing team to edit, organize, and evolve the landing page independently, without relying on the technical team, while improving the site's SEO.",
    },
    roles: ["Front-end"],
    stack: ["Next.js · React · TypeScript · CMS (Strapi)"],
    links: [{ label: "Landing Page", href: "https://julaya.co" }],
    cover: img(
      "/projects/landing-page-julaya/cover.webp",
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
      fr: "Intégration et structuration du blog public Julaya, piloté via CMS. (alternance)",
      en: "Integration and structuring of Julaya's public blog, CMS-driven. (apprenticeship)",
    },
    content: {
      fr: "Développement d'un blog à partir d'une maquette Figma, avec une approche complète allant de l'intégration front à la structuration du back office. Le projet inclut la modélisation des contenus dans Strapi, la création des collections et des relations, ainsi que la mise en place de l'API.\n\nLe front, développé en Next.js, est connecté au CMS pour afficher les contenus de manière dynamique. Cette architecture est pensée pour rendre l'équipe marketing autonome dans la gestion et la publication des contenus, sans dépendre de l'équipe technique, tout en assurant une structure claire et évolutive.",
      en: "Development of a blog from a Figma mockup, with a comprehensive approach spanning front-end integration to back office structuring. The project includes content modeling in Strapi, collection and relationship setup, and API implementation.\n\nThe front end, built with Next.js, is connected to the CMS to display content dynamically. This architecture is designed to make the marketing team autonomous in managing and publishing content, without relying on the technical team, while ensuring a clear and scalable structure.",
    },
    roles: ["Front-end", "Content integration"],
    stack: ["Next.js · TypeScript · CMS (Strapi)"],
    links: [{ label: "Blog", href: "https://blog.julaya.co/" }],
    cover: img("/projects/blog-julaya/cover.webp", "Julaya blog cover"),
    gallery: [],
    featured: true,
  },

  {
    slug: "besti-blog",
    years: "2024",
    title: { fr: "Besti-Blog", en: "Besti-Blog" },
    subtitle: {
      fr: "Plateforme de micro-blogging photo dédiée aux animaux. (projet école, 3 pers., 6 jours)",
      en: "A photo micro-blogging platform dedicated to animals. (school project, team of 3, 6 days)",
    },
    content: {
      fr: "Projet collectif de type Instagram-like, centré sur la publication de posts image + texte. Mise en place d'un socle full-stack avec Laravel : authentification (Breeze), pages feed et profil, création et suppression de posts, gestion des abonnements et structuration d'une base relationnelle PostgreSQL.\n\nLe projet s'appuie sur un environnement Docker et une UI Tailwind, avec une attention portée à la clarté des parcours (s'inscrire, publier, consulter). Plusieurs fonctionnalités sont laissées en extension (likes, commentaires, pagination).",
      en: "Team project inspired by Instagram-like platforms, focused on image + text posting. Built a full-stack foundation with Laravel: authentication (Breeze), feed and profile pages, post creation and deletion, follow relationships, and a relational PostgreSQL database.\n\nThe project relies on a Docker environment and a Tailwind-based UI, with a focus on clear user flows (sign up, publish, browse). Several features remain as extensions (likes, comments, pagination).",
    },
    roles: ["Full-stack (collectif)"],
    stack: ["Laravel · PHP · Tailwind · PostgreSQL · Docker"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/projet-collectif-microblogging-thalia-eda-ghislaine",
      },
    ],
    cover: img("/projects/besti-blog/cover.webp", "Besti-Blog cover"),
    gallery: [
      img("/projects/besti-blog/01.webp", "Besti-Blog screenshot 1"),
      img("/projects/besti-blog/02.webp", "Besti-Blog screenshot 2"),
    ],
  },

  {
    slug: "vintage-gallery",
    years: "2024",
    title: { fr: "Vintage Gallery", en: "Vintage Gallery" },
    subtitle: {
      fr: "E-commerce de meubles de seconde main, sous contraintes «client». (projet école, 7 pers., 7 jours)",
      en: "Second-hand furniture e-commerce, under client-style constraints. (school project, 7 people, 7 days)",
    },
    content: {
      fr: "Projet collectif mené sous contraintes : UI en Bootstrap, organisation en deux équipes (front / back) puis inversion à mi-parcours. Contribution sur le front la première semaine (React + pages e-commerce : listing, détail produit, admin) puis sur le back la seconde (API Express, base MongoDB via Mongoose, premières briques d'auth).\n\nLe projet couvre le parcours principal (catalogue → fiche produit) et une base d'administration ; certaines fonctionnalités restent en MVP (login/panier non finalisés).",
      en: "Team project built under constraints: Bootstrap UI, split into two teams (front / back) then switching mid-way. I contributed on the front in week one (React + e-commerce pages: listing, product detail, admin) and on the back in week two (Express API, MongoDB via Mongoose, first auth building blocks).\n\nThe project covers the core journey (catalog → product page) and an admin baseline; some features remain MVP-level (login/cart not fully completed).",
    },
    roles: ["Full-stack (collectif)"],
    stack: ["Node.js · Mongoose · Bootstrap"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/projet-meubles-abelson-bastien-bruno-ghislaine-jay-thalia-zineb",
      },
    ],
    cover: img("/projects/vintage-gallery/cover.webp", "Vintage Gallery cover"),
    gallery: [
      img("/projects/vintage-gallery/01.webp", "Vintage Gallery screenshot 1"),
      img("/projects/vintage-gallery/02.webp", "Vintage Gallery screenshot 2"),
      img("/projects/vintage-gallery/03.webp", "Vintage Gallery screenshot 3"),
    ],
  },

  {
    slug: "safe-or-not",
    years: "2024",
    title: { fr: "Safe or Not?", en: "Safe or Not?" },
    subtitle: {
      fr: "App iOS (SwiftUI) : avis, alertes et niveau de confiance. (projet école, 6 jours)",
      en: "SwiftUI iOS app: reviews, alerts and trust level. (school project, 6 days)",
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
    cover: img("/projects/safe-or-not/cover.webp", "Safe or Not cover"),
    gallery: [img("/projects/safe-or-not/01.webp", "Safe or Not screenshot 1")],
  },

  {
    slug: "draw-together",
    years: "2024",
    title: { fr: "Draw Together", en: "Draw Together" },
    subtitle: {
      fr: "App iOS de dessin collaboratif, un réseau social orienté création collective. (projet école, individuel)",
      en: "A collaborative-drawing iOS app, a social app focused on collective creation. (school project, solo)",
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
    cover: img("/projects/draw-together/cover.webp", "Draw Together cover"),
    gallery: [],
  }

];
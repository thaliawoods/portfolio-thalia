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
    slug: "canvas-audio",
    years: "2026",
    title: {
      fr: "Canvas Audio",
      en: "Canvas Audio",
    },
    subtitle: {
      fr: "Visualiseur audio dessiné au trait : huit contours pilotés par le spectre. (Gobelins, 2 semaines, en autonomie)",
      en: "Line-drawn audio visualiser: eight contours driven by the spectrum. (Gobelins, 2 weeks, self-directed)",
    },
    content: {
      fr: "Premier projet du master ECNI, sur un cours Canvas et Web Audio API. L’idée de départ tient en une phrase : un son n’est pas une valeur mais un spectre, donc il peut donner une forme et pas seulement une taille. L’énergie du signal est mesurée soixante fois par seconde, bande de fréquence par bande de fréquence, et chaque mesure devient le rayon d’un point sur un cercle.\n\nUn AnalyserNode découpe le signal en 16 384 intervalles de fréquence, dont seuls les 1 024 premiers, de 0 à 1378 Hz, sont dessinés : plus haut, l’énergie est trop faible.\n\nLes trois quarts du contour resteraient plats. Huit contours se partagent donc cette plage, chacun sur une tranche différente, ce qui leur donne des silhouettes distinctes : celui qui lit les graves bouge sur la grosse caisse, celui des médiums reste calme. Les points ne sont jamais placés en x et y mais en angle et en distance, puis convertis. Une moyenne mobile exponentielle détecte les coups : un coup de grave fait passer à l’ambiance suivante parmi cinq, un coup d’aigu envoie une impulsion de rotation qui retombe d’elle-même. Toutes les valeurs transitent par une interpolation à 4 % par image, et c’est la seule raison pour laquelle le résultat est regardable.\n\nLes cinq ambiances n’ont pas été calculées : elles ont été trouvées au panneau Tweakpane, curseur à la main pendant que la musique jouait, puis recopiées dans le code. Deux graphiques de diagnostic affichent le niveau des graves et des aigus en direct, ce qui permet de voir immédiatement qu’une bande ne déclenche jamais. Trois morceaux sont fournis, on peut aussi déposer le sien. Les limites sont assumées : la fenêtre d’analyse dure 743 ms, tout le minutage suppose soixante images par seconde, et le canvas ne suit pas un redimensionnement de la fenêtre.",
      en: "First project of the ECNI master’s, for a Canvas and Web Audio API course. The starting idea fits in one sentence: a sound is not a value but a spectrum, so it can produce a shape and not merely a size. The signal’s energy is measured sixty times a second, frequency band by frequency band, and each measurement becomes the radius of a point on a circle.\n\nAn AnalyserNode splits the signal into 16,384 frequency bins, of which only the first 1,024, from 0 to 1378 Hz, are actually drawn: higher up, the musical energy is too faint to shape anything.\n\nThree quarters of each contour would otherwise stay flat. Eight contours therefore share that range, each on a different slice, which gives them distinct silhouettes: the one reading the low end moves on the kick, the one on the mids stays calm. Points are never placed in x and y but in angle and distance, then converted. An exponential moving average detects hits: a bass hit switches to the next of five moods, a treble hit sends a rotation impulse that decays on its own. Every value passes through an interpolation at 4% per frame, and that is the only reason the result is watchable.\n\nThe five moods were not computed: they were found in the Tweakpane panel, sliders in hand while the music played, then copied back into the code. Two diagnostic graphs display the bass and treble levels live, making it immediately visible when a band never triggers. Three tracks are provided, and you can also drop in your own. The limits are acknowledged: the analysis window lasts 743 ms, all timing assumes sixty frames per second, and the canvas does not follow a window resize.",
    },
    roles: ["Creative coding"],
    stack: ["Canvas 2D · Web Audio API · TypeScript · Vite · Tweakpane"],
    links: [
      {
        label: "Live",
        href: "https://canvas-audio-gobelins.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/canvas",
      },
    ],
    cover: img("/projects/canvas-audio/cover.webp", "Canvas Audio cover"),
    gallery: [
      img(
        "/projects/canvas-audio/01.webp",
        "Canvas Audio - seven contours in a diamond layout, bold stroke",
      ),
      img(
        "/projects/canvas-audio/02.webp",
        "Canvas Audio - a hollow central contour surrounded by smaller ones",
      ),
      img(
        "/projects/canvas-audio/03.webp",
        "Canvas Audio - a single dense contour drawn with a dashed stroke",
      ),
      img(
        "/projects/canvas-audio/04.webp",
        "Canvas Audio - the most pared-down mood, one contour only",
      ),
      img(
        "/projects/canvas-audio/05.webp",
        "Canvas Audio - the Tweakpane panel with the live bass and treble graphs",
      ),
      img(
        "/projects/canvas-audio/06.webp",
        "Canvas Audio - the track selection screen",
      ),
    ],
    featured: true,
  },

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
      fr: "HTTPS est un jeu vidéo exploratoire développé avec l’artiste Marion Serclérat dans le cadre de la résidence Création en cours des Ateliers Médicis, en collaboration avec une classe de treize élèves de Bully (42). Le projet prend internet comme un système de liens entre territoires, mémoires et individus.\n\nSa matière vient directement des enfants et de leur village : maquettes pour les environnements, mains modelées pour les personnages, scans photogrammétriques de lieux de Bully comme d’eux-mêmes, ensuite importés, nettoyés et retravaillés dans Blender.\n\nL’exploration est un geste narratif : en avançant, le·la joueur·euse active des strates sonores et des fragments de récits. Un contrôleur MIDI pilote le jeu en temps réel : les pads font passer d’un monde à l’autre, les touches déclenchent l’apparition d’objets photogrammétriques, et la vélocité de la frappe module l’intensité sonore, ce qui donne au geste l’expressivité d’un instrument. Aucune timeline n’est prédéfinie : l’expérience se construit à partir des actions, et les sons se superposent librement pour former une structure temporelle émergente.\n\nLe jeu est structuré en cinq environnements, de world_01 à world_05, chacun avec son identité visuelle, sa bibliothèque d’objets et ses propres règles de perception. Le passage de l’un à l’autre est instantané, ce qui fragmente l’expérience en ambiances distinctes sans rompre la continuité du geste. Textures incomplètes, géométries fracturées et surfaces flottantes ne sont pas corrigées mais assumées comme un langage visuel.\n\nDéveloppé avec Godot, le projet repose sur une architecture modulaire : un nœud Main coordonne l’ensemble, MidiRouter traduit les signaux MIDI en événements exploitables, WorldManager charge et configure les environnements, PhotogrammetryManager instancie dynamiquement les objets 3D et AudioManager déclenche les sons. Les collisions sont générées procéduralement à partir des meshes photogrammétriques. Le jeu est désormais accessible en ligne dans une version web, jouable directement depuis le navigateur.\n\nLe jeu a été présenté au vernissage du 4 juillet 2026, devant les parents d’élèves, l’équipe enseignante, les Ateliers Médicis et les artistes de la résidence.",
      en: "HTTPS is an exploratory video game developed with artist Marion Serclérat as part of the Création en cours residency at Ateliers Médicis, in collaboration with a class of thirteen pupils in Bully (Loire, France). The project treats the internet as a system of links between territories, memories and individuals.\n\nIts raw material comes straight from the children and their village: models they built for the environments, hands they sculpted for the characters, photogrammetric scans of places in Bully as well as of themselves, then imported, cleaned up and reworked in Blender before entering the game.\n\nExploration is a narrative gesture: moving through the space, the player activates sonic layers and fragments of stories. A MIDI controller drives the game in real time: the pads switch from one world to another, the keys trigger the appearance of photogrammetric objects, and the velocity of each hit modulates the sound, giving the gesture the expressiveness of an instrument. No timeline is predefined: the experience builds itself from the player’s actions, and sounds layer freely into an emergent temporal structure.\n\nThe game is structured in five environments, world_01 to world_05, each with its own visual identity, object library and rules of perception. Switching between them is instant, fragmenting the experience into distinct moods without breaking the continuity of the gesture. Incomplete textures, fractured geometries and floating surfaces are not corrected but embraced as a visual language.\n\nBuilt with Godot, the project relies on a modular architecture: a Main node coordinates everything, MidiRouter turns MIDI signals into usable events, WorldManager loads and configures the environments, PhotogrammetryManager dynamically instantiates the 3D objects and AudioManager triggers the sounds. Collisions are generated procedurally from the photogrammetric meshes. The game is now available online as a web version, playable directly in the browser.\n\nThe game was shown at the opening on 4 July 2026 to the pupils’ families, the teaching staff, Ateliers Médicis and the artists on the residency.",
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
    ],
    cover: img("/projects/https/w5-statue.webp", "Https :// cover"),
    gallery: [
      img("/projects/https/doc-1.webp", "Https :// - documentation du projet, page 1"),
      img("/projects/https/doc-2.webp", "Https :// - documentation du projet, page 2"),
      img("/projects/https/doc-3.webp", "Https :// - documentation du projet, page 3"),
      img("/projects/https/doc-4.webp", "Https :// - documentation du projet, page 4"),
      img("/projects/https/doc-5.webp", "Https :// - documentation du projet, page 5"),
      img("/projects/https/doc-6.webp", "Https :// - documentation du projet, page 6"),
      img("/projects/https/doc-7.webp", "Https :// - documentation du projet, page 7"),
      img("/projects/https/doc-8.webp", "Https :// - documentation du projet, page 8"),
      img("/projects/https/doc-9.webp", "Https :// - documentation du projet, page 9"),
      img("/projects/https/doc-10.webp", "Https :// - documentation du projet, page 10"),
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
      fr: "Atelier d’initiation à la programmation pour enfants (Ateliers Médicis) - mini-jeu web & supports papier autour d’une fraise qui a perdu sa couleur.",
      en: "Introduction-to-programming workshop for children (Ateliers Médicis) - a browser mini-game and printable materials around a strawberry who lost her colour.",
    },
    content: {
      fr: "Madame Tagada est un atelier d’initiation à la programmation mené les 21 et 22 mai 2026 à l’école de Bully (42) avec quinze élèves répartis en cinq équipes, conçu et animé avec l’artiste Marion Serclérat dans le cadre de la résidence Création en cours des Ateliers Médicis, en prolongement du jeu vidéo Https://.\n\nLe fil rouge : Madame Tagada, une fraise qui a perdu sa couleur, ne la retrouvera que si les enfants apprennent à parler aux machines. Trois demi-journées la font passer de l’écran au corps, puis à la cour, avec la même promesse à chaque fois : comprendre ce qu’est une instruction, et vivre un bug sans avoir perdu.\n\nLe premier après-midi se joue à l’écran. Après une minute de vidéo du jeu Https:// et l’histoire racontée par Marion, je lance un mini-jeu développé en HTML et Canvas, sans aucune dépendance, pour qu’il tourne hors ligne sur l’ordinateur de l’école. Le tout premier essai est volontairement raté : Tagada se cogne dans un nuage, et le mot BUG est écrit au tableau à côté d’INSTRUCTION, PROGRAMME et EXÉCUTION.\n\nSur une grille 6×6, Tagada doit ramasser trois étoiles puis rejoindre le pot de peinture sans jamais repasser sur une case déjà parcourue. On écrit d’abord la suite complète des instructions, puis on l’exécute d’un coup : c’est cet écart entre l’écriture et l’exécution qui fait sentir ce qu’est un programme. Les cinq plateaux sont calibrés pour être d’égale difficulté, et l’objectif de coups affiché n’est pas écrit à la main : il est recalculé par un parcours en profondeur qui cherche le chemin le plus court sous la contrainte de non-revisite, plus quatre coups de marge. Chaque équipe écrit son programme sur un plateau papier A3 et une fiche de trente lignes, puis une autre équipe vient le taper à l’écran. En clôture, j’ouvre le code dans VS Code pour montrer que les plateaux ne sont que du texte, qu’une fonction décide à chaque pas si la case est libre, et qu’une autre recalcule la position soixante fois par seconde pour que Tagada glisse au lieu de sauter.\n\nLe lendemain matin, les enfants deviennent eux-mêmes le programme. Vingt-cinq feuilles A4 posées en 5×5 forment une grille au sol, avec des objets cachés dessous. Trois rôles tournent à chaque réussite : le·la Chef·fe détient la carte des objets et n’a jamais le droit de poser le pied sur la grille, le Robot avance les yeux bandés et ne comprend que quatre mots (avance, gauche, droite, retourne), l’Observateur·ice note les essais et arbitre les bugs. La matinée se termine en peignant ensemble des Tagadas géantes.\n\nL’après-midi explore les limites du langage, sur un parcours de cerceaux où seuls les cerceaux sont praticables. Cinq défis retirent tour à tour un moyen de communiquer : la voix réduite à quatre mots, les pieds liés, le tambour (un clap pour avancer, deux pour aller à gauche, trois à droite), trois mots maximum pour tout le défi, et un casque audio alimenté par des sons pré-enregistrés. La conclusion vient d’elle-même : programmer, c’est inventer des langages. La séance se dénoue sur la chasse aux vraies fraises Tagada.\n\nLes traces produites par les enfants, des post-its nommant un lieu de Bully qu’ils aiment et le mot ou le son qui va avec, des dessins, des photos et des voix, sont ensuite réinjectées dans le jeu Https://, présenté au vernissage du 4 juillet devant les parents d’élèves, l’équipe enseignante, les Ateliers Médicis et les artistes de la résidence.",
      en: "Madame Tagada is an introduction-to-programming workshop run on 21 and 22 May 2026 at the school in Bully (Loire, France) with fifteen pupils split into five teams, designed and led with artist Marion Serclérat as part of the Création en cours residency at Ateliers Médicis, extending the video game Https://.\n\nThe thread: Madame Tagada, a strawberry who has lost her colour, will only find it again if the children learn to talk to machines. Three half-days take her from the screen to the body, then to the playground, with the same promise each time: grasp what an instruction is, and live through a bug without having lost.\n\nThe first afternoon happens on screen. After a minute of footage from Https:// and the story told by Marion, I launch a mini-game built in HTML and Canvas, with no dependencies, so it runs offline on the school computer. The very first attempt fails on purpose: Tagada walks into a cloud, and the word BUG goes up on the board next to INSTRUCTION, PROGRAM and EXECUTION.\n\nOn a 6×6 grid, Tagada must collect three stars then reach the paint pot without ever stepping twice on the same square. You write the whole sequence of instructions first, then run it in one go: that gap between writing and running is what makes a program tangible. The five boards are calibrated to be equally difficult, and the target number of moves is not hand-written: it is recomputed by a depth-first search for the shortest path under the no-revisit constraint, plus four moves of slack. Each team writes its program on an A3 paper board and a thirty-line sheet, then another team comes and types it on screen. To close, I open the code in VS Code to show that the boards are just text, that one function decides at each step whether the square is free, and that another recomputes the position sixty times a second so Tagada glides instead of jumping.\n\nThe next morning, the children become the program themselves. Twenty-five A4 sheets laid out 5×5 form a grid on the ground, with objects hidden underneath. Three roles rotate on each success: the Chief holds the map of the objects and may never set foot on the grid, the Robot moves blindfolded and understands only four words (forward, left, right, flip), the Observer records attempts and rules on bugs. The morning ends by painting giant Tagadas together.\n\nThe afternoon explores the limits of language, on a course of hoops where only the hoops may be stepped on. Five challenges each remove a way of communicating: a voice reduced to four words, tied feet, a drum (one clap to move forward, two to go left, three to go right), three words maximum for the whole challenge, and a pair of headphones fed with pre-recorded sounds. The conclusion comes on its own: programming means inventing languages. The session resolves with a hunt for real Tagada sweets.\n\nThe traces the children produced, sticky notes naming a place in Bully they love along with the word or sound that goes with it, drawings, photographs and voices, then feed back into the Https:// game, shown at the opening on 4 July to the pupils’ families, the teaching staff, Ateliers Médicis and the artists on the residency.",
    },
    roles: ["Creative coding", "Médiation / Atelier", "Game design"],
    stack: ["HTML5 Canvas · JavaScript"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/thaliawoods/madame-tagada",
      },
    ],
    cover: img("/projects/madame-tagada/cover.webp", "Madame Tagada - mini-jeu, plateau de départ"),
    gallery: [
      img("/projects/madame-tagada/02.webp", "Madame Tagada - programme en cours d’exécution"),
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
      fr: "Témoigner pour lutter est une archive vivante et un outil de composition conçus pour le collectif Ely & Marion, autour de leur performance du même nom. J’en ai assuré seule le développement ainsi que la direction éditoriale et graphique, de la structuration des contenus jusqu’à l’export.\n\nL’outil rassemble 113 références militantes (films, musiques, textes, œuvres, podcasts, performances) structurées par un même schéma typé - créateur·ice, année, lieu, source, tags, médias - et réparties en quatre sections : archives, collective, performances et DIY.\n\nL’interface suit une logique éditoriale : hiérarchie simple, mise en page structurée par lignes plutôt que par cartes, interactions minimales mais explicites. Les libellés et les états sont rendus lisibles pour que l’outil reste utilisable dans l’urgence d’une performance, où personne n’a le temps de deviner ce que fait un bouton.\n\nSon cœur est un espace de composition (DIY) : autour d’un canvas, un pool de visuels tirés aléatoirement que l’on glisse, déplace et redimensionne pour recomposer ses propres fragments, avec un tirage relançable à tout moment pour repartir sur une autre proposition. Une console audio en Web Audio API (lecture ponctuelle ou en boucle) ajoute le son à la composition, faisant de l’outil un instrument à part entière, pensé pour être joué en direct en performance.\n\nChaque composition s’exporte en PDF ou en vidéo, en recto-verso : la création au recto, les références utilisées au verso, pour garder la trace des sources. L’export vidéo compose images et vidéos en temps réel sur un canvas hors écran, mixe l’audio et l’encode via MediaRecorder ; les créations partagées rejoignent une galerie commune. Les médias sont hébergés sur Bunny CDN et rattachés automatiquement aux références (normalisation des noms, score de similarité). Le projet est livré et évolue au fil des besoins du collectif.",
      en: "Témoigner pour lutter (Testify to Resist) is a living archive and a composition tool built for the Ely & Marion collective, around their performance of the same name. I handled the development as well as the editorial and graphic direction on my own, from structuring the content to the export.\n\nThe tool brings together 113 activist references (films, music, texts, artworks, podcasts, performances) structured by a single typed schema shared by all of them - creator, year, location, source, tags, media - and split across four browsable sections: archives, collective, performances and the DIY workspace.\n\nThe interface follows an editorial logic: a simple hierarchy, a layout structured in rows rather than cards, minimal but explicit interactions. Labels and states are made legible so the tool stays usable in the rush of a performance, where nobody has time to guess what a button does.\n\nAt its heart is a composition space (DIY): around a canvas, a randomly drawn pool of visuals that you drag, move and resize to recompose your own fragments, with a draw that can be refreshed at any time to start from another proposal. An audio console built with the Web Audio API (one-shot or looped playback) adds sound to the composition, turning the tool into an instrument in its own right, designed to be played live in performance.\n\nEach composition can be exported as a PDF or a video, two-sided: the creation on the front, the references used on the back, to keep track of the sources. The video export composes images and videos in real time onto an offscreen canvas, mixes the audio and encodes it via MediaRecorder; shared creations join a common gallery. Media is hosted on Bunny CDN and matched automatically to references (name normalisation, similarity score). The project is delivered and keeps evolving with the collective’s needs.",
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
    ],

    cover: img(
      "/projects/temoigner-pour-lutter/01.webp",
      "Témoigner pour Lutter - page d’accueil avec bannière d’images",
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
      img("/projects/temoigner-pour-lutter/dossier-1.webp", "Témoigner pour Lutter - dossier artistique, page 1"),
      img("/projects/temoigner-pour-lutter/dossier-2.webp", "Témoigner pour Lutter - dossier artistique, page 2"),
      img("/projects/temoigner-pour-lutter/dossier-3.webp", "Témoigner pour Lutter - dossier artistique, page 3"),
      img("/projects/temoigner-pour-lutter/dossier-4.webp", "Témoigner pour Lutter - dossier artistique, page 4"),
      img("/projects/temoigner-pour-lutter/dossier-5.webp", "Témoigner pour Lutter - dossier artistique, page 5"),
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
    fr: "Hannah Hajar est un site expérimental conçu pour un duo musical, pensé comme une cartographie 3D immersive de leur univers plutôt qu’un site vitrine. J’en ai assuré le développement et la direction artistique, du concept jusqu’à la mise en ligne, en dialogue étroit avec les artistes.\n\nOn y entre par un logo et un écran d’accueil, puis on explore librement une scène en trois dimensions où images, vidéos et textes - bio, abstract, tech rider, dates de concerts - flottent autour d’une sphère centrale. Il n’y a ni menu ni scroll : la navigation spatiale remplace la hiérarchie.\n\nLes contenus sont répartis sur une sphère déformée selon l’angle d’or, π(3−√5), ce qui donne la distribution en tournesol de Fibonacci : des points régulièrement espacés sans jamais former d’alignement visible, donc sans motif parasite. La sphère tourne lentement sur elle-même ; on navigue en faisant pivoter l’orbite autour d’elle et en zoomant, chaque panneau restant toujours face à la caméra.\n\nL’atmosphère est rendue par des shaders GLSL écrits à la main. Le fond n’est pas une texture mais un bruit fractal calculé à chaque image, replié trois fois sur lui-même (domain warping) pour produire des volutes qui ne se répètent jamais et dont le centre suit la position du curseur ; les rouges naissent du mélange de trois teintes par seuils progressifs. S’y ajoutent des particules qui suivent le curseur et une sphère centrale translucide.\n\nLes transitions et l’ouverture des médias en plein écran sont animées avec GSAP, et un drone sonore continu accompagne l’exploration. Les positions des éléments viennent d’une fonction pseudo-aléatoire déterministe : la disposition paraît hasardeuse mais reste strictement identique d’une visite à l’autre. Les médias, nombreux et lourds, sont servis par Bunny CDN, avec un utilitaire qui résout les URL et une API de listing côté serveur.\n\nDéveloppé en React Three Fiber et Three.js, le projet cherche à traduire visuellement une musique de textures instables et de rythmes fragmentés : un espace flottant, en recomposition permanente, où formes, sons et images se répondent.",
    en: "Hannah Hajar is an experimental website designed for a musical duo, conceived as an immersive 3D map of their world rather than a showcase site. I handled the development and the artistic direction, from concept through to launch, in close dialogue with the artists.\n\nYou enter through a logo and a landing screen, then freely explore a three-dimensional scene where images, videos and texts - bio, abstract, tech rider, concert dates - float around a central sphere. There is no menu and no scrolling: spatial navigation takes the place of hierarchy.\n\nContent is distributed over a sphere deformed along the golden angle, π(3−√5), which yields the Fibonacci sunflower layout: points evenly spaced without ever forming a visible alignment, and therefore without spurious patterning. The sphere slowly rotates on itself; you navigate by turning the orbit around it and zooming, with each panel always facing the camera.\n\nThe atmosphere is rendered with hand-written GLSL shaders. The background is not a texture but fractal noise computed every frame, folded back on itself three times (domain warping) to produce swirls that never repeat and whose centre follows the cursor; the reds come from blending three hues through progressive thresholds. Cursor-following particles and a translucent central sphere complete it.\n\nTransitions and full-screen media openings are animated with GSAP, and a continuous sonic drone accompanies the exploration. Element positions come from a deterministic pseudo-random function: the layout looks like chance but stays strictly identical from one visit to the next. The media, numerous and heavy, is served through Bunny CDN, with a helper that resolves the URLs and a server-side listing API.\n\nBuilt with React Three Fiber and Three.js, the project seeks to visually translate music made of unstable textures and fragmented rhythms: a floating space in constant recomposition, where shapes, sounds and images respond to one another.",
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
  ],
  cover: img("/projects/hannah-hajar/cover.webp", "Hannah Hajar - page d’accueil"),
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
      img("/projects/hannah-hajar/dossier-1.webp", "Hannah Hajar - dossier artistique, abstract"),
      img("/projects/hannah-hajar/dossier-2.webp", "Hannah Hajar - dossier artistique, page 2"),
      img("/projects/hannah-hajar/dossier-3.webp", "Hannah Hajar - dossier artistique, page 3"),
      img("/projects/hannah-hajar/dossier-4.webp", "Hannah Hajar - dossier artistique, page 4"),
      img("/projects/hannah-hajar/dossier-5.webp", "Hannah Hajar - dossier artistique, page 5"),
      img("/projects/hannah-hajar/dossier-6.webp", "Hannah Hajar - dossier artistique, page 6"),
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
      fr: "Refonte de l’outil interne de visionnage et de programmation d’un festival de courts métrages. (stage)",
      en: "Redesign of the internal viewing and programming tool of a short-film festival. (internship)",
    },
    content: {
      fr: "Refonte complète de l’outil interne du festival associatif Détours en Cinécourt, utilisé plusieurs mois par an par le comité de visionnage, le jury et l’équipe de programmation pour trier les centaines de courts métrages soumis à chaque édition. J’ai mené la refonte de bout en bout, de la rétro-documentation de l’existant jusqu’au développement.\n\nL’ancien système, en PHP sur base relationnelle, était difficile à faire évoluer : logique métier éparpillée entre contrôleurs, vues et procédures SQL, schéma rigide qu’il fallait migrer à chaque ajout, archives rangées dans une structure distincte par édition, performances qui se dégradaient avec le volume, interface illisible sur mobile et mots de passe stockés en clair.\n\nTrois profils utilisent le site : les visionneur·euse·s du comité, du jury et de l’équipe artistique consultent, notent et commentent ; les administrateur·rice·s modèrent, traitent les alertes, gèrent les tags globaux et préparent les exports ; les réalisateur·rice·s externes soumettent un film par un formulaire public, sans avoir de compte.\n\nJ’ai d’abord rétro-documenté la base relationnelle et cartographié ses tables, puis conçu les wireframes et les maquettes de chaque écran, en itérant avec l’équipe à chaque étape. La décision structurante a été de ne pas reproduire le schéma relationnel à l’identique. Le film devient le document central : tout ce qui se consulte en même temps que lui, commentaires, alertes, tags et statistiques dérivées, est embarqué dans son document, ce qui supprime les jointures sur les pages les plus vues. Les utilisateur·rice·s restent dans une collection séparée, parce qu’ils relèvent d’une logique transverse d’authentification et de rôles ; les sous-documents n’en gardent qu’une référence, avec quelques champs dénormalisés pour l’affichage.\n\nLes structures d’archives par année ont disparu : tous les films, toutes éditions confondues, vivent dans la même collection avec le même schéma, et la distinction entre film courant et archive ne tient plus qu’à l’année de l’édition. Les indicateurs recalculables (nombre de commentaires, nombre d’alertes, note moyenne, réputation) sont regroupés à part dans un sous-document de statistiques, explicitement distingués des données sources dont ils dérivent. Des index couvrent les accès fréquents, dont un index texte sur le titre, le nom du·de la réalisateur·ice et le synopsis.\n\nJ’ai migré plus de 4 000 films et leurs commentaires via un script Python, puis déployé sur MongoDB Atlas. Le site est développé en Next.js 14 (App Router), React 18 et TypeScript, dans une seule application qui porte à la fois l’interface et les routes API, ce qui garantit un typage cohérent de bout en bout. Il propose un catalogue à trois vues (carte, liste, tableau) avec recherche avancée et filtres enregistrables, des fiches films détaillées (commentaires, alertes, notes, coups de cœur), une section archives, un espace profil et un dashboard statistique pour l’administration (graphiques Recharts, exports Excel via exceljs et PDF via jsPDF).\n\nLa sécurité a été reprise entièrement : jeton signé et vérifié côté serveur avec jose et jsonwebtoken, hachage bcrypt, gestion des rôles, protection des routes et durcissement contre les injections. Le site est aujourd’hui en production et utilisé au quotidien par l’équipe du festival, que je continue d’accompagner comme bénévole.",
      en: "A complete overhaul of the internal tool of the community short-film festival Détours en Cinécourt, used for months each year by the viewing committee, the jury and the programming team to sort the hundreds of films submitted to each edition. I led the redesign end to end, from reverse-documenting the legacy system to building the new one.\n\nThe old system, PHP on a relational database, was hard to evolve: business logic scattered across controllers, views and SQL procedures, a rigid schema that had to be migrated on every addition, archives kept in a separate structure per edition, performance degrading as the volume grew, an interface unreadable on mobile and passwords stored in plain text.\n\nThree profiles use the site: viewers from the committee, the jury and the artistic team browse, rate and comment; administrators moderate, handle alerts, manage global tags and prepare exports; external directors submit a film through a public form, without an account.\n\nI first reverse-documented the relational database and mapped its tables, then designed the wireframes and mockups of every screen, iterating with the team at each step. The structuring decision was not to reproduce the relational schema as it stood. The film becomes the central document: everything consulted alongside it - comments, alerts, tags and derived statistics - is embedded in its document, which removes joins on the most visited pages. Users stay in a separate collection, because they belong to a cross-cutting logic of authentication and roles; the sub-documents only keep a reference to them, with a few denormalized fields for display.\n\nThe per-year archive structures are gone: every film, across all editions, lives in the same collection with the same schema, and the distinction between current film and archive now rests solely on the edition year. Recomputable indicators (comment count, alert count, average rating, reputation) are grouped separately in a statistics sub-document, explicitly distinguished from the source data they derive from. Indexes cover the frequent access paths, including a text index on title, director name and synopsis.\n\nI migrated over 4,000 films and their comments through a Python script, then deployed on MongoDB Atlas. The site is built with Next.js 14 (App Router), React 18 and TypeScript, in a single application carrying both the interface and the API routes, which guarantees consistent typing end to end. It offers a catalogue with three views (card, list, table), advanced search with saveable filters, detailed film pages (comments, alerts, ratings, favourites), an archive section, a profile space and a statistics dashboard for administrators (Recharts graphs, Excel exports via exceljs and PDF via jsPDF).\n\nSecurity was rebuilt entirely: a token signed and verified server-side with jose and jsonwebtoken, bcrypt hashing, role management, route protection and hardening against injections. The site is now in production and used daily by the festival team, which I continue to support as a volunteer.",
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
      fr: "Jardin Solidaire est une application web full-stack qui met en relation des propriétaires de jardins sous-utilisés avec des personnes souhaitant jardiner, pour recréer du lien local. Réalisée en équipe de trois dans le cadre d’un projet de certification RNCP, de la conception au déploiement.\n\nLa plateforme couvre tout le parcours : inscription avec vérification par e-mail et réinitialisation de mot de passe, profils distincts propriétaires et jardinier·es, jardins géolocalisés, créneaux de disponibilité, messagerie et favoris, chaque rôle n’ayant accès qu’à ce qui le concerne.\n\nLe cœur métier est un système de réservation sans conflit : chaque demande est confrontée aux créneaux déjà pris, avec détection de chevauchement sur les statuts en attente et confirmés, pour éviter les doubles réservations.\n\nCôté technique : front Next.js, API Node.js et Express avec une séparation nette des routes et des contrôleurs, base PostgreSQL modélisée avec Prisma (jardins, créneaux, réservations, messages, avis, profils). Tous les accès à la base passent par Prisma, ce qui centralise les contrôles d’intégrité au lieu de les disperser dans les contrôleurs.\n\nLa sécurité repose sur une authentification par JWT, un hachage bcrypt des mots de passe, des routes sensibles protégées par middleware, une validation des entrées côté serveur et des secrets isolés dans des variables d’environnement.\n\nLe projet est outillé comme en production : environnement Docker reproductible avec Docker Compose et PgAdmin pour administrer la base, tests automatisés (unitaires Jest, bout-en-bout Playwright) et intégration continue GitHub Actions, qui rejoue à chaque poussée les tests du back, les tests e2e et la construction des images Docker.",
      en: "Jardin Solidaire is a full-stack web application that connects owners of underused gardens with people who want to garden, to rebuild local ties around a shared plot of land. Built by a team of three as part of an RNCP certification project, from design and database modelling through to deployment.\n\nThe platform covers the whole journey: sign-up with email verification and password reset, separate owner and gardener profiles, geolocated gardens, availability slots, messaging and favourites, with each role only ever able to reach the data that concerns it. Owners publish, gardeners book.\n\nIts core is a conflict-free booking system: each request is checked against already-taken slots, with overlap detection across pending and confirmed statuses, to prevent double bookings.\n\nOn the technical side: a Next.js front end, a Node.js and Express API with a clean separation of routes and controllers, a PostgreSQL database modelled with Prisma (gardens, slots, bookings, messages, reviews, profiles). Every database access goes through Prisma, which centralises the integrity checks instead of scattering them across controllers.\n\nSecurity rests on JWT authentication, bcrypt password hashing, sensitive routes protected by middleware, server-side input validation and secrets isolated in environment variables.\n\nThe project is tooled like production: a reproducible Docker environment with Docker Compose and PgAdmin to administer the database, automated tests (Jest unit tests, Playwright end-to-end) and GitHub Actions continuous integration, replaying the backend tests, the e2e suite and the Docker image builds on every push.",
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
      fr: "SPA React (Vite) développée pour le test technique front-end de Lydia : rechercher dans une liste de transactions à partir d’un fichier JSON fourni. L’enjeu n’était pas le nombre de fonctionnalités mais la qualité de l’expérience, la cohérence visuelle, l’accessibilité et la lisibilité du code.\n\nL’interface suit un enchaînement clair - recherche, filtres par statut (validé, en cours, annulé), résultats - avec surlignage des termes trouvés, tri par date, état vide explicite et une info-bulle accessible détaillant le motif des transactions annulées. La hiérarchie visuelle suit cet ordre de lecture, sans détour et sans rien cacher derrière un menu.\n\nAvant d’implémenter, j’ai dessiné plusieurs wireframes à la main pour cadrer la hiérarchie des informations et repérer ce qui était superflu. L’interface est utilisable au clavier et responsive : un tableau sur desktop, des cartes sur mobile. Le bouton Effacer reste désactivé tant que le champ de recherche est vide, puis s’active à la première saisie, pour que l’état du formulaire soit lisible d’un coup d’œil.\n\nLa recherche est implémentée sans librairie externe, comme demandé : un index de n-grammes (trigrammes) est construit à partir des libellés, puis chaque requête est décomposée et intersectée pour ne garder que les candidats pertinents, ce qui reste rapide même sur des saisies partielles. L’application est découpée en composants à responsabilité unique : SearchInput, Status et TransactionsTable.\n\nLe tout est couvert par des tests end-to-end Playwright (recherche insensible à la casse, filtres par statut, comportement du bouton Effacer, affichage de l’état vide) et déployé en continu via GitHub Actions et Vercel.",
      en: "React (Vite) SPA built for Lydia’s front-end technical test: searching a list of transactions from a supplied JSON file. The point was not the number of features but the quality of the experience, visual consistency, accessibility and the readability of the code.\n\nThe interface follows a clear flow - search, status filters (completed, pending, canceled), results - with match highlighting, date sorting, an explicit empty state and an accessible tooltip detailing the reason for canceled transactions. The visual hierarchy follows that reading order, with no detour and nothing hidden behind a menu. Components are reusable and decoupled.\n\nBefore implementing anything, I sketched several wireframes by hand to settle the information hierarchy and spot what was superfluous. The interface is keyboard-usable and responsive: a table on desktop, cards on mobile. The Clear button stays disabled while the search field is empty, then activates on the first keystroke, so the state of the form reads at a glance.\n\nSearch is implemented without any external library, as required: an n-gram (trigram) index is built from the labels, then each query is split and intersected to keep only the relevant candidates, staying fast even on partial input. The application is split into single-responsibility components: SearchInput, Status and TransactionsTable.\n\nEverything is covered by Playwright end-to-end tests (case-insensitive search, status filters, Clear button behaviour, empty-state display) and continuously deployed via GitHub Actions and Vercel.",
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
      en: "Front-end rework of Julaya’s landing page, CMS-driven (UI, components, SEO & performance). (apprenticeship)",
    },
    content: {
      fr: "Après le blog, j’ai étendu le projet à la landing page de Julaya (julaya.co), jusque-là statique, pour la rendre entièrement pilotable depuis le CMS, sans intervention technique.\n\nJ’ai modélisé dans Strapi les différentes pages (accueil, produits, tarifs, à propos, contact) et une cinquantaine de composants de section réutilisables : hero, cartes de fonctionnalités, grilles de tarifs, avis, appels à l’action.\n\nL’équipe marketing peut ainsi composer et faire évoluer ses pages bloc par bloc, en toute autonomie. Le front Next.js (App Router, rendu serveur) consomme ces données, gère le multilingue avec next-intl et sert des pages déjà construites pour le référencement.\n\nLes données du CMS sont récupérées avec SWR, les animations et les carrousels reposent sur GSAP et Swiper, et les styles sur Sass organisé autour d’un design system partagé. Le déploiement passe par trois environnements distincts, développement, préproduction et production, chacun avec sa propre configuration de build.",
      en: "After the blog, I extended the project to Julaya’s landing page (julaya.co), until then static, to make it fully CMS-driven, with no technical involvement for every content change.\n\nIn Strapi I modelled the various pages (home, products, pricing, about, contact) and around fifty reusable section components: hero, feature cards, pricing grids, reviews, calls to action, each of them configurable from the CMS interface.\n\nThe marketing team can now compose and evolve its pages block by block, fully autonomously. The Next.js front end (App Router, server-side rendering) consumes this data, handles multilingual content with next-intl and serves pages already built for SEO.\n\nCMS data is fetched with SWR, animations and carousels rely on GSAP and Swiper, and the styles on Sass organised around a shared design system. Deployment runs through three distinct environments, development, staging and production, each with its own build configuration.",
    },
    roles: ["Front-end"],
    stack: ["Next.js (App Router SSR) · React · Sass · next-intl · Strapi (CMS)"],
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
      en: "Integration and structuring of Julaya’s public blog, CMS-driven. (apprenticeship)",
    },
    content: {
      fr: "Développement du blog public de Julaya (blog.julaya.co) à partir d’une maquette Figma, dans le cadre de mon alternance. J’ai modélisé les contenus dans Strapi - articles, auteur·ices, catégories et leurs relations - et exposé l’API correspondante.\n\nLe front, intégré en Next.js avec l’App Router et un rendu côté serveur, consomme cette API et affiche les articles dynamiquement. Le contenu rédigé en markdown est converti à l’affichage.\n\nL’objectif était de rendre l’équipe marketing autonome pour rédiger et publier sans passer par l’équipe technique, sur une base claire et évolutive. Le rendu côté serveur sert directement le référencement : les pages arrivent au navigateur déjà construites, au lieu d’être assemblées après coup.",
      en: "Development of Julaya’s public blog (blog.julaya.co) from a Figma mockup, during my apprenticeship. I modelled the content in Strapi - articles, authors, categories and their relations - and exposed the matching API.\n\nThe front end, built with Next.js using the App Router and server-side rendering, consumes that API and displays articles dynamically. Content written in markdown is converted at render time.\n\nThe goal was to make the marketing team autonomous to write and publish without going through the technical team, on a clear and scalable base. Server-side rendering serves SEO directly: pages reach the browser already built, rather than being assembled afterwards.",
    },
    roles: ["Front-end", "Content integration"],
    stack: ["Next.js (App Router SSR) · React · Sass · Strapi (CMS)"],
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
      fr: "Projet collectif mené à trois sur six jours, une plateforme de micro-blogging photo dédiée aux animaux, centrée sur la publication de posts associant une image et un texte. Chaque membre retrouve ses publications regroupées sur sa page personnelle, et consulte celles des autres.\n\nSocle full-stack avec Laravel : authentification via Breeze, page de connexion, feed, profil éditable, création et suppression de posts, commentaires et abonnements entre membres, sur une base relationnelle PostgreSQL modélisant utilisateur·ices, posts et commentaires.\n\nLe projet tourne dans un environnement Docker, avec une interface en Tailwind et Alpine.js, en soignant la clarté des trois parcours principaux : s’inscrire, publier, consulter. Les likes et la pagination sont restés en extension.",
      en: "Team project built by three people over six days, a photo micro-blogging platform dedicated to animals, centred on posting an image together with a text. Each member finds their own publications gathered on a personal page, and can browse those of the other members.\n\nFull-stack foundation with Laravel: authentication through Breeze, a login page, a feed, an editable profile, post creation and deletion, comments and follow relationships, on a relational PostgreSQL database modelling users, posts and comments, along with the relations between them.\n\nThe project runs in a Docker environment, with a Tailwind and Alpine.js interface, keeping the three main journeys clear: sign up, publish, browse. Likes and pagination remained as extensions.",
    },
    roles: ["Full-stack (collectif)"],
    stack: ["Laravel · PHP · Tailwind · Alpine.js · PostgreSQL · Docker"],
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
      fr: "Projet collectif à sept sur sept jours, un site e-commerce de meubles de seconde main répondant à une demande client, avec des contraintes imposées : interface en Bootstrap, et organisation en deux équipes, front et back, qui échangent leurs rôles à mi-parcours pour que chacun·e touche aux deux côtés.\n\nJ’étais sur le front la première semaine - pages e-commerce en React : listing, détail produit, administration - puis sur le back la seconde : API Express, base MongoDB via Mongoose et premières briques d’authentification côté serveur.\n\nLe projet couvre le parcours principal, du catalogue à la fiche produit, plus une base d’administration et un formulaire d’inscription. Certaines fonctionnalités restent au stade du MVP : la connexion et le panier ne sont pas finalisés. L’inversion des équipes à mi-parcours était l’exercice réel du projet, autant que le code lui-même.",
      en: "Team project built by seven people over seven days, a second-hand furniture e-commerce site answering a client brief, under imposed constraints: a Bootstrap interface, and two teams, front and back, swapping roles halfway through the project so that everyone worked on both sides.\n\nI was on the front in week one - React e-commerce pages: listing, product detail, administration - then on the back in week two: Express API, MongoDB through Mongoose and the first server-side authentication building blocks.\n\nThe project covers the core journey, from catalogue to product page, plus an admin baseline and a sign-up form. Some features remain MVP-level: login and cart were not completed. Swapping teams halfway was the real exercise of the project, as much as the code itself.",
    },
    roles: ["Full-stack (collectif)"],
    stack: ["React · Bootstrap · Node.js · Express · MongoDB (Mongoose) · JWT"],
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
      fr: "Exploration SwiftUI : carte, recherche et liste de professionnel·les de santé. (projet école, 6 jours)",
      en: "SwiftUI exploration: map, search and a list of healthcare professionals. (school project, 6 days)",
    },
    content: {
      fr: "Exploration de l’approche mobile avec SwiftUI, sur un projet court de six jours : une application iPhone pensée pour répertorier des professionnel·les de santé de confiance, selon les besoins de chacun·e. L’objectif était la prise en main de Swift et de Xcode, de la conception de l’interface jusqu’à la structuration des données.\n\nL’app combine une carte MapKit centrée sur Paris, une liste de praticien·nes navigable vers une fiche détaillée (photo, nom, localisation), une barre d’onglets personnalisée et plusieurs écrans de navigation, la carte restant visible au-dessus de la fiche.\n\nLe code est organisé selon une séparation Models, ViewModel et View. Le modèle est déclaré conforme à Decodable, donc prêt à recevoir une API, mais les données sont encore écrites en dur dans le view model : c’était l’étape suivante prévue. Les avis, les alertes et le niveau de confiance sont restés au stade du concept.",
      en: "Exploring the mobile approach with SwiftUI, on a short six-day project: an iPhone app meant to list trusted healthcare professionals according to each person’s needs. The aim was hands-on practice with Swift and Xcode, from designing the interface to structuring the data. The brief was deliberately progressive: interface first, then navigation, then the data layer.\n\nThe app combines a MapKit map centred on Paris, a list of practitioners navigating to a detail page (photo, name, location), a custom tab bar and several navigation screens, with a circular frame for the portrait and the map staying visible above the card.\n\nThe code is organised along a Models, ViewModel and View separation. The model is declared Decodable, so ready to take an API, but the data is still hard-coded in the view model: that was the planned next step. Reviews, alerts and the trust level remained at the concept stage.",
    },
    roles: ["Mobile"],
    stack: ["Swift · SwiftUI · MapKit · iOS"],
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
      fr: "Prototype d’app de dessin iOS (SwiftUI), pensée autour d’une toile collective. (projet école)",
      en: "iOS drawing app prototype (SwiftUI), designed around a collective canvas. (school project)",
    },
    content: {
      fr: "Draw Together est un prototype d’application de dessin iOS développé en SwiftUI, l’une de mes premières explorations de l’écosystème. L’idée de départ : une toile collective où chacun·e contribue à une œuvre commune.\n\nL’app en pose les fondations côté dessin : une zone de tracé à main levée avec Canvas et DragGesture, et le choix de la couleur et de l’épaisseur du trait. Chaque trait est conservé comme une suite de points, avec sa couleur et son épaisseur.\n\nLa navigation repose sur une barre d’onglets personnalisée et animée - accueil, favoris, enregistrements, profil - avec un bouton d’action central, pilotée par un routeur observable qui expose la page courante. Les noms d’icônes sont centralisés dans un fichier de constantes plutôt que répétés dans les vues.\n\nLa dimension collaborative et le partage en réseau restent à l’état d’intention : ce projet m’a surtout servi à prendre en main SwiftUI, le Canvas, la gestion des gestes, l’état et la navigation.",
      en: "Draw Together is an iOS drawing app prototype built with SwiftUI, one of my first explorations of the ecosystem. The starting idea: a collective canvas where everyone contributes to a shared artwork.\n\nThe app lays the drawing foundations: a freehand drawing area using Canvas and DragGesture, with colour and stroke-width selection. Each stroke is kept as a sequence of points, along with its colour and width, then redrawn on every frame as the gesture moves.\n\nNavigation relies on a custom animated tab bar - home, liked, records, profile - with a central action button, driven by an observable router that exposes the current page. Icon names are centralised in a constants file rather than repeated across the views.\n\nThe collaborative, networked side remains an intention: this project mainly served to get hands-on with SwiftUI, the Canvas, gesture handling, state and navigation.",
    },
    roles: ["iOS"],
    stack: ["Swift · SwiftUI · iOS"],
    links: [
      { label: "GitHub", href: "https://github.com/thaliawoods/DrawTogether" },
    ],
    cover: img("/projects/draw-together/cover.webp", "Draw Together cover"),
    gallery: [],
  }

];
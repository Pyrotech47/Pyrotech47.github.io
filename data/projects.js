const projects = [
  {
    id: 'dungeon-crawler',
    title: 'Blueprint Dungeon Crawler',
    shortDescription:
      'A top-down dungeon crawler built entirely with UE5 Blueprints featuring procedural room generation and enemy AI.',
    fullDescription: `
      This project was my capstone exploration into the power of Unreal Engine 5's Blueprint Visual Scripting system.
      The dungeon crawler features a fully procedural room-generation system built without a single line of C++,
      demonstrating just how capable Blueprints are for complex game logic.

      The player navigates through dynamically generated dungeon floors, each with randomized enemy placements,
      loot spawns, and environmental hazards. Enemy AI uses a custom Behavior Tree driven by Blueprint logic,
      allowing enemies to patrol, chase, and attack with contextual awareness.

      A custom inventory and stats system tracks health, stamina, and collected items — all managed through
      Blueprint interfaces and event dispatchers for clean, decoupled communication between actors.
    `,
    tags: ['UE5', 'Blueprints', 'Procedural Generation', 'AI', 'Game Mechanics'],
    category: 'Unreal Engine 5',
    featured: true,
    coverImage: '/images/projects/dungeon-crawler.jpg',
    images: [
      '/images/projects/dungeon-crawler.jpg',
      '/images/projects/dungeon-crawler-2.jpg',
    ],
    highlights: [
      'Procedural room generation using BSP-inspired Blueprint algorithm',
      'Custom enemy AI Behavior Trees',
      'Blueprint Interface-driven inventory system',
      'Dynamic lighting with Lumen',
      'Save/Load system using UE5 SaveGame class',
    ],
    itchUrl: 'https://michaelbaxter.itch.io/dungeon-crawler',
    playUrl: '',
    year: '2024',
  },
  {
    id: 'fps-mechanics-sandbox',
    title: 'FPS Mechanics Sandbox',
    shortDescription:
      'A first-person mechanics prototype showcasing advanced movement, weapon systems, and environmental interactions built in UE5.',
    fullDescription: `
      The FPS Mechanics Sandbox was designed as a living testbed for experimenting with and showcasing
      first-person game mechanics. The goal was to push the boundaries of what's achievable purely through
      Unreal Engine 5 Blueprints while maintaining clean, reusable architecture.

      Movement mechanics include a full character movement component extension featuring wall-running,
      mantling, sliding, and a grapple hook — all implemented as modular Blueprint components that can
      be dropped into any project. Weapon systems use a data-table-driven approach, allowing new weapons
      to be configured without touching Blueprint logic.

      The project also served as my exploration into UE5's Enhanced Input System, replacing the legacy
      input system with a fully rebindable, context-sensitive input solution.
    `,
    tags: ['UE5', 'Blueprints', 'FPS', 'Movement Systems', 'Weapons', 'Enhanced Input'],
    category: 'Unreal Engine 5',
    featured: true,
    coverImage: '/images/projects/fps-sandbox.jpg',
    images: [
      '/images/projects/fps-sandbox.jpg',
      '/images/projects/fps-sandbox-2.jpg',
    ],
    highlights: [
      'Modular movement component (wall-run, mantle, slide, grapple)',
      'Data-table-driven weapon system',
      'UE5 Enhanced Input System integration',
      'Procedural weapon sway and camera shake',
      'Hit scan and projectile weapon types',
    ],
    itchUrl: 'https://michaelbaxter.itch.io/fps-mechanics-sandbox',
    playUrl: '',
    year: '2024',
  },
  {
    id: 'environmental-storytelling',
    title: 'Echoes of the Vault',
    shortDescription:
      'A narrative exploration game focused on environmental storytelling, using UE5\'s World Partition and Nanite for a rich, detailed world.',
    fullDescription: `
      Echoes of the Vault is a single-player exploration and narrative experience developed as a team
      project during my final year at Canadore College. I served as the Lead Technical Designer,
      responsible for all Blueprint gameplay systems and the underlying architecture that brought
      the narrative world to life.

      The game leverages UE5's World Partition system for seamless open-world streaming, combined with
      Nanite geometry for highly detailed environmental assets without performance compromise. My primary
      contributions included the interaction system, collectible lore object framework, and a dynamic
      ambient audio system that reacts to player proximity and world state.

      A custom Blueprint-based dialogue system drives all narrative delivery, parsing structured data
      assets to present dialogue, trigger cinematics via Sequencer, and update world state flags —
      all without hardcoded dependencies.
    `,
    tags: ['UE5', 'Blueprints', 'Narrative Design', 'World Partition', 'Nanite', 'Sequencer'],
    category: 'Team Project',
    featured: true,
    coverImage: '/images/projects/echoes-vault.jpg',
    images: [
      '/images/projects/echoes-vault.jpg',
      '/images/projects/echoes-vault-2.jpg',
    ],
    highlights: [
      'Lead Technical Designer role',
      'UE5 World Partition open-world setup',
      'Blueprint-based dialogue and narrative system',
      'Dynamic ambient audio Blueprint framework',
      'Sequencer-integrated cinematic triggers',
      'Nanite and Lumen enabled pipeline',
    ],
    itchUrl: 'https://michaelbaxter.itch.io/echoes-of-the-vault',
    playUrl: '',
    year: '2024',
  },
  {
    id: 'ai-stealth-prototype',
    title: 'Stealth AI Prototype',
    shortDescription:
      'A stealth game prototype with sophisticated guard AI using perception systems, Behavior Trees, and dynamic alert states.',
    fullDescription: `
      This prototype was built to deep-dive into Unreal Engine 5's AI framework — specifically the AI
      Perception System and Behavior Tree editor — to create believable, reactive guard AI for a
      stealth game context.

      Guards use sight and sound perception to detect the player, with configurable awareness cones,
      noise radius thresholds, and line-of-sight checks powered by Blueprint-accessible perception data.
      A three-tier alert state machine (Unaware → Suspicious → Alert) drives distinct Behavior Tree
      branches, resulting in guards that feel responsive and contextually intelligent.

      The project also includes a Blueprint-driven level scripting system for patrol routes and
      triggered events, making it easy for designers to configure guard behaviors without modifying
      the core AI logic.
    `,
    tags: ['UE5', 'Blueprints', 'AI', 'Behavior Trees', 'Stealth', 'Perception System'],
    category: 'Unreal Engine 5',
    featured: false,
    coverImage: '/images/projects/stealth-ai.jpg',
    images: ['/images/projects/stealth-ai.jpg'],
    highlights: [
      'UE5 AI Perception System (sight & sound)',
      'Three-tier alert state machine',
      'Designer-friendly patrol route Blueprint system',
      'Behavior Tree driven AI logic',
      'Dynamic music system reacting to alert state',
    ],
    itchUrl: 'https://michaelbaxter.itch.io/stealth-ai-prototype',
    playUrl: '',
    year: '2023',
  },
  {
    id: 'ui-framework',
    title: 'Modular UI Framework',
    shortDescription:
      'A reusable UMG/Blueprint UI framework for game HUDs, menus, and settings systems — designed as a drop-in toolkit for UE5 projects.',
    fullDescription: `
      Recognizing that UI is often the last consideration in game development, I built a modular,
      reusable UI framework in UE5 using Unreal Motion Graphics (UMG) and Blueprints.

      The framework includes a stack-based menu manager that handles screen transitions with animation,
      a fully functional settings screen (graphics, audio, controls) that reads and writes to INI config
      files via Blueprint nodes, and a flexible HUD system driven by data assets so it can be themed
      per level or game mode.

      Special attention was paid to accessibility — all UI elements support gamepad navigation,
      focus highlights, and scalable text sizes. The framework was shared with classmates during
      development and adopted in two team projects.
    `,
    tags: ['UE5', 'UMG', 'Blueprints', 'UI/UX', 'HUD', 'Settings System'],
    category: 'Tools & Frameworks',
    featured: false,
    coverImage: '/images/projects/ui-framework.jpg',
    images: ['/images/projects/ui-framework.jpg'],
    highlights: [
      'Stack-based menu manager with animated transitions',
      'Settings system with INI read/write via Blueprints',
      'Data-asset-driven HUD theming',
      'Full gamepad navigation support',
      'Adopted by two team projects at Canadore',
    ],
    itchUrl: 'https://michaelbaxter.itch.io/modular-ui-framework',
    playUrl: '',
    year: '2023',
  },
];

module.exports = projects;
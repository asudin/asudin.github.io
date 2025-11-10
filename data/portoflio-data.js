var portfolioData = {
  personal: {
    name: "Artiom Sudin",
    title: "Unity Developer",
    location: "Riga, Latvia",
    email: "asudin.dev@gmail.com",
    github: "github.com/asudin",
    telegram: "@asudin"
  },

  experience: [
    {
      company: "SIA MafiaGame",
      role: "Unity Developer",
      period: "Sep 2024 – Present",
      description: "Developing WebGL format games for international clients. Full development cycle from architecture to Playable Ads.",
      highlights: [
        "Optimized gameplay and assets specifically for WebGL and low-spec browser environments",
        "Integrated Firebase SDK and PlayFab for online user data management like leaderboards and user stats",
        "Created modular systems and reusable components for rapid prototyping of new promotional games",
        "Developed several Playable Ads by using Unity Playworks (Luna)",
        "Managed game architecture for future minimal rewriting, focusing on maintainability and quick iteration"
      ],
      stack: ["Unity", "Playworks", "Firebase", "PlayFab", "Git", "DOTween", "UniTask"]
    },
    {
      company: "SupaDoge",
      role: "Unity Developer",
      period: "Aug 2023 – Jul 2024",
      description: "Worked on a 2D gacha-style battler game in a server-client architecture, focusing on gameplay, UI, and performance across platforms. (PC, web, mobile)",
      highlights: [
        "Built and maintained UI using UGUI with real-time server updates for mobile and desktop clients",
        "Collaborated on battle mechanics using state machines and modular gameplay system with server logic",
        "Integrated RESTful APIs and async server calls with failover logic",
        "Extended the Spine plugin for better import of animations by company's animators/designers",
        "Made a 12% increase on final game builds for mobile devices after optimization",
        "Create smooth and performant animations in async codebase by using DOTween, UniTask and Spine",
        "Participated in optimizing legacy codebase"
      ],
      stack: ["Unity", "Spine", "UniTask", "Git", "DOTween", "Figma"],
      links: ["Steam", "Nutaku (web & mobile)"]
    },
    {
      company: "Accenture Baltics",
      role: "Full-Stack .NET Developer",
      period: "June 2022 – Jul 2023",
      description: "Developed enterprise-level web applications using ASP.NET MVC, with real-time functionality and scalable backend components for international clients.",
      highlights: [
        "Built and maintained full-stack web solutions (MVC, REST APIs)",
        "Utilized SignalR to implement real-time message exchange features across client application",
        "Worked with MS SQL, where I did database schema design, and made performance optimization of complex SQL queries",
        "Followed Agile methodology and CI/CD practices within cross-functional teams",
        "Conducted testing and debugging of the application across various use cases"
      ],
      stack: ["ASP.NET", "MVC", "SignalR", "Web API", "SQL", "Blazor"]
    }
  ],

  projects: [
    {
      id: "math-reactor",
      name: "Math Reactor",
      platform: "Mobile (Android)",
      role: "Solo Developer",
      description: "Pet-project/Completely my work (Code, Art, VFX, Translation etc)",
      media: [], // Add images/videos here: ["images/math-reactor/screenshot1.jpg", "images/math-reactor/gameplay.mp4"]
      links: [
        { 
          type: "Google Play", 
          url: "https://play.google.com/store/apps/details?id=com.DCFA.MathReactor&hl=ru&gl=US" 
        }
      ],
      tags: ["Unity", "Mobile", "Pet Project", "Complete Solo Work"]
    },
    {
      id: "pirate-passage",
      name: "Pirate Passage",
      platform: "PC/Mobile",
      role: "Developer",
      description: "Adventure game with engaging gameplay mechanics",
      media: [],
      links: [
        { 
          type: "Gameplay Video", 
          url: "https://drive.google.com/file/d/1Y3sqR-_8SWYL4KH6Mjd4PJRXDySLTJbL/view" 
        },
        { 
          type: "Download", 
          url: "https://disk.yandex.ru/d/3HNcnujCmgT6JA" 
        }
      ],
      tags: ["Unity", "Game Development"]
    },
    {
      id: "advent-calendar",
      name: "Advent Calendar",
      platform: "Mobile (Android)",
      role: "Developer",
      description: "Interactive advent calendar game",
      media: [],
      links: [
        { 
          type: "Gameplay Video", 
          url: "https://youtu.be/RkV44NKDiV4" 
        },
        { 
          type: "Google Play", 
          url: "https://play.google.com/store/apps/details?id=com.games.adventcalendar&hl=ru&gl=US" 
        }
      ],
      tags: ["Unity", "Mobile"]
    },
    {
      id: "food-factory",
      name: "Food Factory",
      platform: "Mobile (Android)",
      role: "Developer",
      description: "Casual factory management game",
      media: [],
      links: [
        { 
          type: "Gameplay Video", 
          url: "https://youtu.be/SX1TaSxD0Qg" 
        },
        { 
          type: "Google Play", 
          url: "https://play.google.com/store/apps/details?id=com.games.foodfactory&hl=ru&gl=US" 
        }
      ],
      tags: ["Unity", "Mobile", "Casual"]
    },
    {
      id: "ragdoll-dunk",
      name: "Ragdoll Dunk 3D",
      platform: "Mobile (Android)",
      role: "Developer",
      description: "Physics-based basketball game",
      media: [],
      links: [
        { 
          type: "Gameplay Video", 
          url: "https://youtu.be/VBgZxx1RmsI" 
        },
        { 
          type: "Google Play", 
          url: "https://play.google.com/store/apps/details?id=com.games.ragdolldunk3d&hl=ru&gl=US" 
        }
      ],
      tags: ["Unity", "Mobile", "Physics"]
    },
    {
      id: "arrow-explosion",
      name: "Arrow Explosion",
      platform: "Mobile (Android)",
      role: "Producer, VFX/SFX artist, Level designer",
      description: "Archery action game with explosive effects",
      media: [],
      links: [
        { 
          type: "Google Play", 
          url: "https://play.google.com/store/apps/details?id=com.wannaplay.arrowexplosion" 
        },
        { 
          type: "Download", 
          url: "https://disk.yandex.ru/d/ahajmf9PL925-g" 
        }
      ],
      tags: ["Unity", "Mobile", "VFX", "Level Design"]
    }
  ],

  education: {
    degree: "BSc in Computer Science & Engineering",
    institution: "University of Crete (UoC)",
    year: "2021"
  },

  skills: {
    languages: ["C#", "HTML", "CSS", "JavaScript"],
    frameworks: ["ASP.NET", "Unity", "MVC"],
    tools: ["Git", "Azure DevOps", "DOTween", "Zenject", "Playworks", "Spine", "UniTask"],
    databases: ["MS SQL"]
  }
};
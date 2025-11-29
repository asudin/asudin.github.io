const portfolioData = {
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
            description: "Developing WebGL format games by doing full development cycle as a solo Unity developer from project’s architecture to Playable Ads. Projects include different type of games, where most of them are in the hybrid-casual genre. Additionally, am responsible for maintaining legacy code on older projects.",
            highlights: [
                "Optimized gameplay and assets for WebGL and low-spec mobile devices",
                "Integrated Firebase SDK and PlayFab for online user data management like leaderboards and user stats",
                "Created modular systems and reusable components for rapid prototyping of new promotional games",
                "Developed Playable Ads using Unity Playworks (Luna)",
				"Maintained legacy code on older projects"
            ],
            stack: ["Unity", "Playworks", "Firebase", "PlayFab", "Git", "DOTween", "UniTask"]
        },
        {
            company: "SupaDoge",
            role: "Unity Developer",
            period: "Aug 2023 – Jul 2024",
            description: "Worked on 2D gacha-style battler game in server-client architecture across PC, web, and mobile. The team consisted of over 24 people, where I was working in a department of other 3 developers, where I was one of the two Unity Developers. Daily tasks included the development of new features, as well as maintaning legacy code.",
            highlights: [
                "Built and maintained UI using uGUI with real-time server updates for mobile and desktop clients",
                "Integrated RESTful APIs and async server calls with failover logic",
				"Collaborated on battle mechanics using state machines and modular gameplay system with server logic",
                "Decreased build sizes up to 12% for mobile devices after mobile asset optimization",
                "Created smooth and performant animations in async codebase by using DOTween, UniTask and Spine",
				"Participated in optimizing legacy codebase",
				"Expanded the external Spine library according to company's tasks"
            ],
            stack: ["Unity", "Spine", "UniTask", "Git", "DOTween", "Figma"]
        },
        {
            company: "Accenture Baltics",
            role: "Full-Stack .NET Developer",
            period: "June 2022 – Jul 2023",
            description: "Developed enterprise-level web applications using ASP.NET MVC, with real-time functionality and scalable backend components for international clients.",
            highlights: [
                "Built full-stack web solutions (MVC, REST APIs)",
                "Implemented real-time chat features using SignalR",
                "Optimized complex SQL queries and database schema design",
                "Followed Agile methodology and CI/CD practices"
            ],
            stack: ["ASP.NET", "MVC", "SignalR", "Web API", "SQL", "Blazor"]
        }
    ],
    projects: [
		{
		  id: "overlewd",
		  name: "Overlewd",
		  platform: "PC, Web, Mobile (Android/iOS)",
		  image: "images/overlewd/cover.jpg",
		  role: "Unity Developer",
		  description: "Worked as a Unity Developer part of a large team. Overlewd is an 18+ gacha free-to-play game for both PC and mobile devices. The project included work on many levels, mostly working with 2D uGUI and backend API calls. The team I was working with consisted of 3 more developers, where I was the second Unity Developer. Daily tasks included from participating in Agile story/tasks creation to independtly implementing new features.",
		  highlights: [
            "Built and maintained UI using uGUI with real-time server updates for mobile and desktop clients",
            "Integrated RESTful APIs and async server calls with failover logic",
			"Collaborated on battle mechanics using state machines and modular gameplay system with server logic",
            "Decreased build sizes up to 12% for mobile devices after mobile asset optimization",
            "Created smooth and performant animations in async codebase by using DOTween, UniTask and Spine",
			"Participated in optimizing legacy codebase",
			"Expanded the external Spine library according to company's tasks"
		  ],
		  media: ["images/overlewd/demo.mp4", "images/overlewd/cover.jpg", "images/overlewd/cover2.jpg", "images/overlewd/cover3.jpg"],
		  links: [
			{ type: "Steam", url: "https://store.steampowered.com/app/2308870/Overlewd/" },
			{ type: "Nutaku", url: "https://www.nutaku.net/games/overlewd/" }
		  ],
		  tags: ["Unity", "Steam", "PC", "Mobile", "Free to Play", "Gacha", "Turn-Based Combat"],
		  category: "pc, web, mobile"
		},
		{
		  id: "colored-puzzle",
		  name: "Colored Puzzle",
		  platform: "WebGL (Telegram)",
		  image: "images/colored-puzzle/cover.png",
		  role: "Unity Developer",
		  description: "Worked as an Unity developer contractor. This project is a copy of a popular mobile app game, where player has to interact with colorful 3D objects to solve a puzzle. This was a port with the exactly same features to the Telegram app via a Telegram bot as a WebGL build. I worked as an independent Unity Developer contractor for several new tasks, including working with legacy code.",
		  highlights: [
            "Implemented async animations for tutorial level and power ups upon user first visit",
            "Optimized WebGL build to load up to 17% faster across mobile devices on Telegram app",
            "Reduced build size from 22 MB to under 17 BM with asset and build optimizations",
			"Developed new features while working in legacy code"
		  ],
		  media: ["images/colored-puzzle/puzzle-demo.mp4", "images/colored-puzzle/cover.png", "images/colored-puzzle/cover2.png", "images/colored-puzzle/cover3.png"],
		  links: [
			{ type: "Telegram", url: "https://t.me/ColorBlockGameBot" }
		  ],
		  tags: ["Unity", "WebGL", "Puzzle", "Telegram", "Animations"],
		  category: "web"
		},
		{
		  id: "crystal-siege",
		  name: "Crystal Siege",
		  platform: "Mobile (Android)",
		  image: "images/crystal-siege/cover.jpg",
		  role: "Unity Developer",
		  description: "Worked as an Unity developer contractor. Crystal Siege project is a simple tower defense game disguised as player shooter. The player is responsible for interacting with the money system, where he has to build resources in order to upgrade his wepons and defend the base.",
		  highlights: [
            "Created modular game architecture for fast-pased development",
			"Level design from imported assets",
			"Utilised different patterns for feature optimizations (enemy and bullets pooling)",
			"Integrated with Firebase for player analytics and statistics",
            "Imported custom VFX from external libraries",
            "Translated to multiple languages",
            "Published on Google Play Store"
		  ],
		  media: ["images/crystal-siege/demo.mp4", "images/crystal-siege/cover.jpg", "images/crystal-siege/cover2.jpg"],
		  links: [
			{ type: "Play Store", url: "https://play.google.com/store/apps/details?id=com.crystalsiege" }
		  ],
		  tags: ["Unity", "Mobile", "Hybrid-Casual"],
		  category: "mobile"
		},
		{
		  id: "food-factory",
		  name: "Food Factory",
		  platform: "Mobile (Android)",
		  image: "images/food-factory/cover.jpg",
		  role: "Unity Developer",
		  description: "Worked as an Unity developer contractor. Casual factory management game, where the player can interact with the screen to speed up food creation. There is factory management elements, where the player accumulates in-app currency and spends on them on different power ups during gameplay loop. Player also earns in-app currency, which he can spend on different skins via the game's shop. There are viewable apps which reward player with different power ups or in-app currency.",
		  highlights: [
            "Implemented in-app shop for player retention",
            "Integrated viewable ads for players to interact with and earn bonuses",
			"Created in-app currency management system within gaming loop",
            "Translated to multiple languages",
            "Published independently on Google Play Store"
		  ],
		  media: ["images/food-factory/demo.mp4", "images/food-factory/cover.jpg", "images/food-factory/cover2.jpg"],
		  links: [
			{ type: "Play Store", url: "https://play.google.com/store/apps/details?id=com.DefaultCompany.foodfactory" }
		  ],
		  tags: ["Unity", "Mobile", "Casual"],
		  category: "mobile"
		},
		{
		  id: "sort-bag",
		  name: "Sort Bag",
		  platform: "Mobile (Android)",
		  image: "images/sort-bag/cover.webp",
		  role: "Unity Developer",
		  description: "Worked as an Unity developer contractor. The game revolves around the player having to sort different 3D objects according the three containers at the bottom. Each level is a puzzle, where player is given different instructions on how to sort. The game's levels were done as static data in Scriptable Objects for easier creation and maintance as the project could grew indefinetely.",
		  highlights: [
            "Developed level data using Scriptable Object for easier maintanance and creation",
			"Firebase player stats integration",
			"Integrated viewable ads between levels",
            "Impported VFX from external library",
            "Published on Google Play Store"
		  ],
		  media: ["images/sort-bag/demo.mp4", "images/sort-bag/cover.webp", "images/sort-bag/cover2.webp"],
		  links: [
			{ type: "Play Store", url: "https://play.google.com/store/apps/details?id=com.DefaultCompany.Sortbag3D" },
			{ type: "APK", url: "https://drive.google.com/file/d/1j2AHwj4tm25YHJpfYa9VwW1scZlq7hTZ/view?usp=sharing" }
		  ],
		  tags: ["Unity", "Mobile", "Hyper-Casual"],
		  category: "mobile"
		},
	  ],
	demos: [
		{
			id: "mini-golf-demo",
			name: "Mini Golf Demo",
			platform: "PC",
			image: "images/demos/mini-golf/cover.png",
			role: "Unity Developer",
			description: "A physics-based mini golf game built with Unity featuring dynamic hole mechanics and time-based scoring. Players shoot balls into moving targets with a trajectory prediction system, where holes randomly switch between bonus and penalty states. Built with service-oriented architecture using dependency injection and a custom game state machine.",
			highlights: [
				"Implemented trajectory prediction system with touch/mouse input controls",
				"Created dynamic hole spawning system with randomized position changes",
				"Designed state machine for game flow management using Single Entry Point pattern",
				"Built timer-based scoring system with bonus/penalty mechanics",
				"Utilized Dependency Injection container for service-oriented architecture",
				"Added visual feedback with VFX and animations for hole state transitions"
			],
			media: ["images/demos/mini-golf/demo.mp4", "images/demos/mini-golf/cover.png", "images/demos/mini-golf/cover2.png", "images/demos/mini-golf/cover3.png"],
			links: [
				{ type: "Github", url: "https://github.com/asudin/pet-passport-demo" }
			],
			tags: ["Unity", "Mobile", "Unity Physics", "Single Entry Point architecture", "DI", "Demo"]
		},
		{
			id: "pet-passport-demo",
			name: "Pet Passport Demo (.NET)",
			platform: "Web",
			image: "images/demos/pet-passport/cover.jpg",
			role: ".NET Developer",
			description: "This is a demo project of a pet passport created in .NET with Bootstrap. User can add pets with corresponding information, as well as register upcoming vaccines for future monitoring. The project was done in ASP.NET Core MVC for backend, with Entity Framework, Azure SQL Database and Bootstrap for the UI.",
			highlights: [
				"Implemented full CRUD operations with Entity Framework Core and Azure SQL Database",
				"Configured contained database user authentication with Azure SQL for secure access",
				"Designed responsive UI with Bootstrap for cross-device compatibility",
				"Deployed to Azure App Service with automated CI/CD pipeline",
				"Integrated vaccination reminder system for proactive pet health monitoring"
			],
			media: ["images/demos/pet-passport/cover.jpg", "images/demos/pet-passport/cover2.jpg", "images/demos/pet-passport/cover3.jpg", "images/demos/pet-passport/cover4.jpg", "images/demos/pet-passport/cover5.jpg"],
			links: [
				{ type: "Github", url: "https://github.com/asudin/pet-passport-demo" },
				{ type: "Demo", url: "https://petpassport-demo-b2cvdpdxf8cxdmax.canadacentral-01.azurewebsites.net/" }
			],
			tags: ["ASP.NET", "SQL Database", "Bootstrap", "Entity Framework", "Demo"]
		},
		{
			id: "casino-slots-demo",
			name: "Casino Slots Demo",
			platform: "WebGL, Mobile",
			image: "images/demos/casino-slots/cover.jpg",
			role: "Unity Developer",
			description: "A demo project made to showcase a casino management game. Player can accumulate ordinary and premium currency, use it to buy casino slots, which have progression for passive income. There is shop, where player can convert his common currency to premium. Additionally, there are 5 different slots, where player can play and earn actively income.",
			highlights: [
				"Created casino reels mechanic for active income generation", 
				"Implemented a passive casino management system",
				"Created in app shop system for currency exchange",
				"Utilized Scriptable Objects for static data management between systems"
			],
			media: ["images/demos/casino-slots/demo.mp4", "images/demos/casino-slots/cover.jpg", "images/demos/casino-slots/cover2.jpg", "images/demos/casino-slots/cover3.jpg", "images/demos/casino-slots/cover4.jpg"],
			links: [
				{ type: "Github", url: "https://github.com/asudin/casino-slots-demo" }
			],
			tags: ["Unity", "Mobile", "Demo"]
		},
		{
			id: "playable-ad",
			name: "Playable Ad Demo (Playworks)",
			platform: "WebGL, Mobile",
			image: "images/demos/playable-ad/cover.jpg",
			role: "Unity Developer",
			description: "This is a demonstration of a playable ad that I create by using Unity Playworks plugin. The playable ad allows to show the user an ad with plyable (interactable) elements. Once the player interacts with the game a CTA screen is shown. All metrics are written and sent to the Playworks dashboard.",
			highlights: [
				"Interactable playable ad create with Unity Playworks plugin", 
				"Send CTA metrics to Playworks dashboard for marketing team"
			],
			media: ["images/demos/playable-ad/cover.jpg", "images/demos/playable-ad/cover2.jpg"],
			links: [
				{ type: "Github", url: "https://github.com/asudin/playable-ads-demo" },
				{ type: "Demo", url: "https://playground.lunalabs.io/preview/247447/337743/6cbab1a46e05f773e0c36ba7adddd7003dc74867d2fcf4c780d3a21a95fd0032" }
			],
			tags: ["Unity", "Playable Ad", "Playworks", "Demo"]
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

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();
  renderProjects();
  renderDemos();
  renderExperience();
  initFilters(); 
});

// Navigation
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageName + '-page').classList.add('active');
    
    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById('nav-' + pageName).classList.add('active');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = ''; 

  portfolioData.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';

    let categories = [];

    if (project.category) {
      if (Array.isArray(project.category)) {
        categories = project.category.map(c => c.toLowerCase());
      } else if (typeof project.category === 'string') {
        categories = project.category.split(',').map(c => c.trim().toLowerCase());
      }
    } else {
      const platform = project.platform ? project.platform.toLowerCase() : '';
      if (platform.includes('web')) categories.push('web');
      if (platform.includes('mobile')) categories.push('mobile');
      if (platform.includes('pc')) categories.push('pc');
    }

    card.setAttribute('data-category', categories.join(' '));

    card.onclick = () => openModal(project);

    card.innerHTML = `
      <img src="${project.image}" alt="${project.name}" class="project-image">
      <div class="project-card-content">
        <h3>${project.name}</h3>
        <p>${project.platform}</p>
      </div>
      <div class="project-card-overlay">
        <div class="project-card-overlay-content">
          <i data-lucide="external-link"></i>
          <p><strong>View Project</strong></p>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  lucide.createIcons();
  initializeFilters();
}

function renderDemos() {
    const grid = document.getElementById('demos-grid');
    
    portfolioData.demos.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.onclick = () => openModal(project);

        card.innerHTML = `
            <img src="${project.image}" alt="${project.name}" class="project-image">
            <div class="project-card-content">
                <h3>${project.name}</h3>
                <p>${project.platform}</p>
            </div>
            <div class="project-card-overlay">
                <div class="project-card-overlay-content">
                    <i data-lucide="external-link"></i>
                    <p><strong>View Project</strong></p>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    lucide.createIcons();
}

function initializeFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('#projects-grid .project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          card.style.opacity = 1;
          card.style.transform = 'scale(1)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Render Experience
function renderExperience() {
    const container = document.getElementById('experience-content');
    
    // Experience items
    portfolioData.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'experience-item';
        
        const highlightsList = exp.highlights.map(h => `<li>${h}</li>`).join('');
        const stackTags = exp.stack.map(s => `<span class="tech-tag">${s}</span>`).join('');
        
        item.innerHTML = `
            <div class="experience-header">
                <div>
                    <h2 class="experience-role">${exp.role}</h2>
                    <h3 class="experience-company">${exp.company}</h3>
                </div>
                <span class="experience-period">${exp.period}</span>
            </div>
            <p class="experience-description">${exp.description}</p>
            <ul class="experience-highlights">${highlightsList}</ul>
            <div class="tech-stack">${stackTags}</div>
        `;
        
        container.appendChild(item);
    });
    
    // Education
    const eduCard = document.createElement('div');
    eduCard.className = 'info-card';
    eduCard.innerHTML = `
        <h2>Education</h2>
        <h3>${portfolioData.education.degree}</h3>
        <p>${portfolioData.education.institution} (${portfolioData.education.year})</p>
    `;
    container.appendChild(eduCard);
    
    // Skills
    const skillsCard = document.createElement('div');
    skillsCard.className = 'info-card';
    
    const languageTags = portfolioData.skills.languages.map(l => `<span class="skill-tag">${l}</span>`).join('');
    const frameworkTags = [...portfolioData.skills.frameworks, ...portfolioData.skills.tools]
        .map(f => `<span class="skill-tag secondary">${f}</span>`).join('');
    
    skillsCard.innerHTML = `
        <h2>Skills</h2>
        <div class="skills-grid">
            <div class="skill-category">
                <h3>Languages</h3>
                <div class="skill-tags">${languageTags}</div>
            </div>
            <div class="skill-category">
                <h3>Frameworks & Tools</h3>
                <div class="skill-tags">${frameworkTags}</div>
            </div>
        </div>
    `;
    container.appendChild(skillsCard);
}

// Modal
function openModal(project) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    
    title.textContent = project.name;
    
    // Build media gallery (NO cover image here)
    let mediaGallery = '';
    if (project.media && project.media.length > 0) {
        const mediaItems = project.media.map(mediaItem => {
            if (mediaItem.endsWith('.mp4')) {
                return `
                    <div class="media-item">
                        <video src="${mediaItem}" controls class="modal-media">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                `;
            } else {
                return `
                    <div class="media-item">
                        <img src="${mediaItem}" alt="${project.name}" class="modal-media">
                    </div>
                `;
            }
        }).join('');
        
        mediaGallery = `
            <div class="modal-section">
                <h3>Media</h3>
				<p class="media-hint">(Tap an image to view full size)</p>
				<div class="media-grid">${mediaItems}</div>
            </div>
        `;
    }
    
    // Build highlights section
    let highlightsSection = '';
    if (project.highlights && project.highlights.length > 0) {
        const highlightsList = project.highlights.map(h => `<li>${h}</li>`).join('');
        highlightsSection = `
            <div class="modal-section">
                <h3>Highlights</h3>
                <ul class="project-highlights">${highlightsList}</ul>
            </div>
        `;
    }
    
    const tagsList = project.tags ? project.tags.map(t => `<span class="modal-tag">${t}</span>`).join('') : '';
    const linksList = project.links ? project.links.map(l => 
        `<a href="${l.url}" target="_blank" class="modal-link">
            <i data-lucide="external-link"></i>${l.type}
        </a>`
    ).join('') : '';
    
    body.innerHTML = `
        ${mediaGallery}
        <div class="modal-section">
            <h3>Role</h3>
            <p>${project.role}</p>
        </div>
        <div class="modal-section">
            <h3>Description</h3>
            <p>${project.description}</p>
        </div>
        ${highlightsSection}
        <div class="modal-section">
            <h3>Platform</h3>
            <p>${project.platform}</p>
        </div>
        ${project.tags ? `
        <div class="modal-section">
            <h3>Technologies</h3>
            <div class="modal-tags">${tagsList}</div>
        </div>` : ''}
        ${project.links ? `
        <div class="modal-section">
            <h3>Links</h3>
            <div class="modal-links">${linksList}</div>
        </div>` : ''}
    `;
    
    modal.classList.add('active');
    lucide.createIcons();
}

function closeModal() {
    document.getElementById('project-modal').classList.remove('active');
}

// Close modal on outside click
document.getElementById('project-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Image Lightbox
const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");

// Open image preview when image clicked
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-media") && e.target.tagName === "IMG") {
        lightboxImage.src = e.target.src;
        lightbox.classList.add("active");
    }
});

// Close on click anywhere / tap on mobile
lightbox.addEventListener("click", function () {
    lightbox.classList.remove("active");
});

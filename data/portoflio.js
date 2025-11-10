import React, { useState } from 'react';
import { Github, Mail, Send, ExternalLink, ChevronLeft, X } from 'lucide-react';

// Data structure - you'll move this to a separate data.js file
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
      description: "Developing WebGL format games for international clients. Full development cycle from architecture to Playable Ads.",
      highlights: [
        "Optimized gameplay and assets for WebGL and low-spec browsers",
        "Integrated Firebase SDK and PlayFab for online user data management",
        "Created modular systems for rapid prototyping of promotional games",
        "Developed Playable Ads using Unity Playworks (Luna)"
      ],
      stack: ["Unity", "Playworks", "Firebase", "PlayFab", "Git", "DOTween", "UniTask"]
    },
    {
      company: "SupaDoge",
      role: "Unity Developer",
      period: "Aug 2023 – Jul 2024",
      description: "Worked on 2D gacha-style battler game in server-client architecture across PC, web, and mobile.",
      highlights: [
        "Built and maintained UI using UGUI with real-time server updates",
        "Integrated RESTful APIs and async server calls with failover logic",
        "Achieved 12% size reduction on mobile builds through optimization",
        "Extended Spine plugin for improved animation workflow"
      ],
      stack: ["Unity", "Spine", "UniTask", "Git", "DOTween", "Figma"],
      links: ["Steam", "Nutaku (web & mobile)"]
    },
    {
      company: "Accenture Baltics",
      role: "Full-Stack .NET Developer",
      period: "June 2022 – Jul 2023",
      description: "Developed enterprise-level web applications using ASP.NET MVC with real-time functionality.",
      highlights: [
        "Built full-stack web solutions (MVC, REST APIs)",
        "Implemented real-time features using SignalR",
        "Optimized complex SQL queries and database schema design",
        "Followed Agile methodology and CI/CD practices"
      ],
      stack: ["ASP.NET", "MVC", "SignalR", "Web API", "SQL", "Blazor"]
    }
  ],
  projects: [
    {
      id: "math-reactor",
      name: "Math Reactor",
      platform: "Mobile (Android)",
      image: "images/math-reactor/cover.jpg",
      role: "Solo Developer",
      description: "Complete pet project including code, art, VFX, and translation",
      media: ["images/math-reactor/screenshot1.jpg", "images/math-reactor/screenshot2.jpg"],
      links: [
        { type: "playstore", url: "https://play.google.com/store/apps/details?id=com.DCFA.MathReactor" }
      ],
      tags: ["Unity", "Mobile", "Pet Project"]
    },
    {
      id: "pirate-passage",
      name: "Pirate Passage",
      platform: "PC/Mobile",
      image: "images/pirate-passage/cover.jpg",
      role: "Developer",
      description: "Adventure game with engaging gameplay mechanics",
      media: ["images/pirate-passage/gameplay.mp4"],
      links: [
        { type: "download", url: "https://disk.yandex.ru/d/3HNcnujCmgT6JA" }
      ],
      tags: ["Unity", "Game Development"]
    },
    {
      id: "food-factory",
      name: "Food Factory",
      platform: "Mobile (Android)",
      image: "images/food-factory/cover.jpg",
      role: "Developer",
      description: "Casual factory management game",
      media: ["images/food-factory/gameplay.mp4"],
      links: [
        { type: "playstore", url: "https://play.google.com/store/apps/details?id=com.games.foodfactory" },
        { type: "youtube", url: "https://youtu.be/SX1TaSxD0Qg" }
      ],
      tags: ["Unity", "Mobile", "Casual"]
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

const PortfolioWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const ProjectCard = ({ project }) => (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      onClick={() => setSelectedProject(project)}
    >
      <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
        <div className="w-full h-full flex items-center justify-center p-6 text-center">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
            <p className="text-sm text-gray-400">{project.platform}</p>
          </div>
        </div>
        <div className={`absolute inset-0 bg-blue-600 bg-opacity-90 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-white text-center p-4">
            <ExternalLink className="mx-auto mb-2" size={32} />
            <p className="font-semibold">View Project</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-2xl">
          <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center z-10">
            <h2 className="text-2xl font-bold text-white">{project.name}</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Role</h3>
              <p className="text-white">{project.role}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Description</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Platform</h3>
              <p className="text-gray-300">{project.platform}</p>
            </div>

            {project.tags && (
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.links && (
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Links</h3>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      {link.type}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="space-y-20">
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          {portfolioData.personal.name}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400">
          {portfolioData.personal.title}
        </p>
        <p className="text-lg text-gray-500">{portfolioData.personal.location}</p>
        
        <div className="flex justify-center gap-6 pt-4">
          <a href={`mailto:${portfolioData.personal.email}`} className="text-gray-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
          <a href={`https://${portfolioData.personal.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href={`https://t.me/${portfolioData.personal.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Send size={24} />
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );

  const ExperiencePage = () => (
    <div className="space-y-12">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Experience</h1>
      
      {portfolioData.experience.map((exp, index) => (
        <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">{exp.role}</h2>
              <h3 className="text-xl text-blue-400">{exp.company}</h3>
            </div>
            <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
          </div>
          
          <p className="text-gray-300 mb-4">{exp.description}</p>
          
          <ul className="space-y-2 mb-4">
            {exp.highlights.map((highlight, i) => (
              <li key={i} className="text-gray-400 flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2">
            {exp.stack.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
        <h3 className="text-xl text-blue-400">{portfolioData.education.degree}</h3>
        <p className="text-gray-400">{portfolioData.education.institution} ({portfolioData.education.year})</p>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skills.languages.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {[...portfolioData.skills.frameworks, ...portfolioData.skills.tools].map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-40 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-xl font-bold hover:text-blue-400 transition-colors"
            >
              AS
            </button>
            <div className="flex gap-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`hover:text-blue-400 transition-colors ${currentPage === 'home' ? 'text-blue-400' : ''}`}
              >
                Projects
              </button>
              <button
                onClick={() => setCurrentPage('experience')}
                className={`hover:text-blue-400 transition-colors ${currentPage === 'experience' ? 'text-blue-400' : ''}`}
              >
                Experience
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'experience' && <ExperiencePage />}
      </main>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default PortfolioWebsite;
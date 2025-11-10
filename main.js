document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    renderHeroSection();
    renderProjects();
    renderExperience();
}

function renderHeroSection() {
    document.getElementById('hero-name').textContent = portfolioData.personal.name;
    document.getElementById('hero-title').textContent = portfolioData.personal.title;
    document.getElementById('hero-location').textContent = portfolioData.personal.location;
    
    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = `
        <a href="mailto:${portfolioData.personal.email}" class="social-link" title="Email">
            📧
        </a>
        <a href="https://${portfolioData.personal.github}" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        </a>
        <a href="https://t.me/${portfolioData.personal.telegram.replace('@', '')}" target="_blank" rel="noopener noreferrer" class="social-link" title="Telegram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
        </a>
    `;
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.onclick = () => openProjectModal(project);
        
        projectCard.innerHTML = `
            <div class="project-card-content">
                <h3 class="project-name">${project.name}</h3>
                <p class="project-platform">${project.platform}</p>
            </div>
            <div class="project-hover">
                <div class="project-hover-icon">→</div>
                <p class="project-hover-text">View Project</p>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

function renderExperience() {
    const experienceContent = document.getElementById('experience-content');
    
    let html = '';
    
    portfolioData.experience.forEach(exp => {
        html += `
            <div class="experience-item">
                <div class="experience-header">
                    <div>
                        <h2 class="experience-role">${exp.role}</h2>
                        <h3 class="experience-company">${exp.company}</h3>
                    </div>
                    <span class="experience-period">${exp.period}</span>
                </div>
                
                <p class="experience-description">${exp.description}</p>
                
                <ul class="experience-highlights">
                    ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
                
                <div class="tech-stack">
                    ${exp.stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
    });
    
    html += `
        <div class="education-section">
            <h2 class="section-subtitle">Education</h2>
            <h3 class="education-degree">${portfolioData.education.degree}</h3>
            <p class="education-institution">${portfolioData.education.institution} (${portfolioData.education.year})</p>
        </div>
    `;
    
    html += `
        <div class="skills-section">
            <h2 class="section-subtitle">Skills</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3 class="skill-category-title">Languages</h3>
                    <div class="skill-tags">
                        ${portfolioData.skills.languages.map(skill => 
                            `<span class="skill-tag">${skill}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="skill-category">
                    <h3 class="skill-category-title">Frameworks & Tools</h3>
                    <div class="skill-tags">
                        ${[...portfolioData.skills.frameworks, ...portfolioData.skills.tools].map(skill => 
                            `<span class="skill-tag secondary">${skill}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    experienceContent.innerHTML = html;
}

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = project.name;
    
    let bodyHTML = `
        <div class="modal-section">
            <h3 class="modal-section-title">Role</h3>
            <p class="modal-section-content">${project.role}</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Description</h3>
            <p class="modal-section-content">${project.description}</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Platform</h3>
            <p class="modal-section-content">${project.platform}</p>
        </div>
    `;
    
    if (project.tags && project.tags.length > 0) {
        bodyHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">Technologies</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
    }
    
    if (project.links && project.links.length > 0) {
        bodyHTML += `
            <div class="modal-section">
                <h3 class="modal-section-title">Links</h3>
                <div class="project-links">
                    ${project.links.map(link => 
                        `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="project-link">
                            ${link.type} →
                        </a>`
                    ).join('')}
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = bodyHTML;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById(`${pageName}-page`).classList.add('active');
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    window.scrollTo(0, 0);
}

document.addEventListener('click', function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
});
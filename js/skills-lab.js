/**
 * Aastha Jha — Personal Portfolio
 * Skills Lab Interactive Module
 */

const SKILLS_DATABASE = [
  // Programming Languages
  {
    id: 'c-lang',
    name: 'C Programming',
    category: 'languages',
    proficiency: 'Core Skill',
    domain: 'Academic & Practical',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>`,
    summary: 'Procedural programming foundation, pointers, memory allocation, data structures, logic formulation, and algorithm implementation.',
    projects: 'Academic Engineering Projects & Problem Solving'
  },
  {
    id: 'cpp-lang',
    name: 'C++',
    category: 'languages',
    proficiency: 'Core Skill',
    domain: 'Academic & Practical',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`,
    summary: 'Object-oriented programming (OOP) principles, classes, inheritance, encapsulation, polymorphism, and computational problem solving.',
    projects: 'Object-Oriented Academic Systems'
  },
  {
    id: 'python-lang',
    name: 'Python (Basics)',
    category: 'languages',
    proficiency: 'Certified (Intro to Python)',
    domain: 'Scripting & Basics',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    summary: 'Python syntax, scripting, data handling, and foundational algorithmic problem solving.',
    projects: 'Python Programming Coursework & Scripting'
  },

  // Web Development & Office
  {
    id: 'html-lang',
    name: 'HTML',
    category: 'web',
    proficiency: 'Proficient',
    domain: 'Web Development',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
    summary: 'Semantic HTML markup structure, accessible document hierarchies, web forms, links, media embeds, and clean web layouts.',
    projects: 'Web Development & Portfolio Design'
  },
  {
    id: 'css-lang',
    name: 'CSS',
    category: 'web',
    proficiency: 'Proficient',
    domain: 'Web Styling & Design',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    summary: 'Modern styling, CSS Flexbox and Grid layouts, responsive design across mobile/desktop, colors, typography, and aesthetic UI transitions.',
    projects: 'Portfolio Website & Web Layouts'
  },
  {
    id: 'ms-office',
    name: 'MS Office (Word, Excel, PPT)',
    category: 'web',
    proficiency: 'Certified (MS Office Essentials)',
    domain: 'Academic & Professional',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    summary: 'Creating formatted documents and data tables for academic assignments using MS Word and Excel with professional layouts, formulas, and presentations.',
    projects: 'Academic Report & Data Systems'
  },

  // Tools & Platforms
  {
    id: 'git-tool',
    name: 'Git',
    category: 'tools',
    proficiency: 'Version Control',
    domain: 'Code Tracking',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>`,
    summary: 'Source code management, repository tracking, commits, branches, and structured project versioning.',
    projects: 'Software & Web Code Repositories'
  },
  {
    id: 'canva-tool',
    name: 'Canva',
    category: 'tools',
    proficiency: 'Visual Design',
    domain: 'Media & Graphics',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/></svg>`,
    summary: 'Designing aesthetic banners, presentation decks, infographics, promotional graphics, and creative photo/video assets.',
    projects: 'Creative Media, Presentations & Event Assets'
  },
  {
    id: 'windows-os',
    name: 'Windows OS',
    category: 'tools',
    proficiency: 'Environment',
    domain: 'Technical Workflow',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    summary: 'System configuration, terminal commands, developer environment setups, file management, and productivity applications.',
    projects: 'Daily Engineering & Development Environment'
  },
  {
    id: 'research-typing',
    name: 'Typing & Internet Research',
    category: 'tools',
    proficiency: 'Core Skill',
    domain: 'Research & Docs',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    summary: 'Fast and accurate typing, extensive technical Internet research, academic literature synthesis, and Google Docs collaboration.',
    projects: 'Academic Research & Project Documentation'
  },

  // Strengths
  {
    id: 'fast-learner',
    name: 'Fast Learner & Adaptive',
    category: 'strengths',
    proficiency: 'Core Strength',
    domain: 'Personal Quality',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    summary: 'Rapidly grasping new programming concepts, emerging technologies, engineering frameworks, and adapting quickly to dynamic requirements.',
    projects: 'Continuous Learning & Computer Science Studies'
  },
  {
    id: 'communication',
    name: 'Good Communication & Presentation',
    category: 'strengths',
    proficiency: 'Core Strength',
    domain: 'Interpersonal',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    summary: 'Clear technical communication, presentation delivery, anchoring events, and creative public speaking.',
    projects: 'Anchoring, Creative Speaking & Academic Presentations'
  },
  {
    id: 'leadership',
    name: 'Strong Leadership & Event Coordination',
    category: 'strengths',
    proficiency: 'Core Strength',
    domain: 'Management',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    summary: 'Coordinating team activities, organizing college and school events, delegating tasks, and leading collaborative initiatives.',
    projects: 'Event Coordination & Cultural Participation'
  },
  {
    id: 'creative-mindset',
    name: 'Creative Mindset & Technical Understanding',
    category: 'strengths',
    proficiency: 'Core Strength',
    domain: 'Innovation',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    summary: 'Blending artistic creativity (video/photo editing, speaking, singing) with analytical engineering logic to craft impactful solutions.',
    projects: 'Entrepreneurial Vision & Software Design'
  }
];

function initSkillsLab() {
  const container = document.getElementById('skills-cloud');
  const tabButtons = document.querySelectorAll('.skill-tab-btn');

  // Inspector Elements
  const inspectorIcon = document.getElementById('inspector-icon');
  const inspectorTitle = document.getElementById('inspector-title');
  const inspectorCategory = document.getElementById('inspector-category');
  const inspectorDomain = document.getElementById('inspector-domain');
  const inspectorLevel = document.getElementById('inspector-level');
  const inspectorSummary = document.getElementById('inspector-summary');
  const inspectorProjects = document.getElementById('inspector-projects');

  if (!container) return;

  function renderSkills(category = 'all') {
    container.innerHTML = '';
    
    const filtered = category === 'all' 
      ? SKILLS_DATABASE 
      : SKILLS_DATABASE.filter(s => s.category === category);

    filtered.forEach((skill, index) => {
      const node = document.createElement('div');
      node.className = `skill-node ${index === 0 && category === 'all' ? 'selected' : ''}`;
      node.innerHTML = `
        ${skill.icon}
        <span>${skill.name}</span>
      `;

      node.addEventListener('click', () => {
        document.querySelectorAll('.skill-node').forEach(n => n.classList.remove('selected'));
        node.classList.add('selected');
        updateInspector(skill);
        if (window.soundSystem) window.soundSystem.click();
      });

      container.appendChild(node);
    });

    if (filtered.length > 0 && category === 'all') {
      updateInspector(filtered[0]);
    }
  }

  function updateInspector(skill) {
    if (!inspectorTitle) return;
    inspectorIcon.innerHTML = skill.icon;
    inspectorTitle.textContent = skill.name;
    inspectorCategory.textContent = skill.category.toUpperCase();
    if (inspectorDomain) inspectorDomain.textContent = skill.domain;
    if (inspectorLevel) inspectorLevel.textContent = skill.proficiency;
    if (inspectorSummary) inspectorSummary.textContent = skill.summary;
    if (inspectorProjects) inspectorProjects.textContent = `Applied in: ${skill.projects}`;
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');
      renderSkills(category);
      if (window.soundSystem) window.soundSystem.pop();
    });
  });

  renderSkills('all');
}

document.addEventListener('DOMContentLoaded', initSkillsLab);

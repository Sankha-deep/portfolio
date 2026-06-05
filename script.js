// ==========================================
// 1. YOUR PERSONAL DATA - EDIT THIS SECTION!
// ==========================================

const profileData = {
    name: "Sankhadeep Das",
    title: "Software Engineer & UI Designer",
    bio: "I craft beautiful, scalable digital experiences. My passion lies in solving complex problems through elegant code and stunning design. Welcome to my personal workspace.",
    email: "myemailsankha@gmail.com",
    github: "https://github.com/Sankha-deep",
    linkedin: "https://www.linkedin.com/in/sankhadeep-das-a8a9a41a7/",
};

// ADD NEW PROJECTS HERE
const myProjects = [
    {
        title: "AI/ML-Powered Hotel Recommendation System",
        description: "An intelligent hotel recommendation engine combining NLP, sentiment analysis, location proximity, and AI-driven query understanding.",
        technologies: ["Python", "Streamlit", "Scikit-learn", "AWS S3", "Google Gemini API", "NLP", "Pandas", "NumPy", "Detoxify"],
        link: "https://github.com/Sankha-deep/npn2"
    },
    {
        title: "AI Medical Chatbot",
        description: "a production-grade RAG-based medical chatbot that provides accurate, source-grounded responses in real-time",
        technologies: ["Python", "Flask", "LangChain", "Pinecone Vector DB", "HuggingFace Embeddings", "Mistral-7B", "OpenRouter API", "HTML", "CSS", "JavaScript"],
        link: "https://github.com/Sankha-deep/End-to-End-Medical-Chatbot-Generative-AI"
    },
    {
        title: "Spotify Clone",
        description: "A cross-platform Spotify-inspired music streaming application with search and playback functionality.",
        technologies: ["Flutter", "Dart", "Android Studio"],
        link: "https://github.com/Sankha-deep/Spotify_app"
    }
];

// ADD NEW ACHIEVEMENTS HERE
const myAchievements = [
    {
        date: "July 2023",
        title: "International Study Abroad Certification",
        description: "Selected for and successfully completed an international academic certification program through IEM America in collaboration with the National University of Singapore (NUS)."
    },
    {
        date: "July 2025",
        title: "IEEE EMBS Pune Chapter Summer Internship",
        description: "Successfully developed and delivered an AI-driven Cognitive Rehabilitation Tool within a 30-day internship, helping streamline cognitive therapy workflows and patient progress tracking."
    },
    {
        date: "July 2025",
        title: "Pinnacle Labs Internship Completion",
        description: "Completed a professional mobile app development internship by building and shipping a cross-platform music streaming application within a strict one-month timeline."
    },
    {
        date: "June 2026",
        title: "AWS Generative AI Applications Professional Certificate",
        description: "Earned professional certification demonstrating expertise in building, deploying, and optimizing Generative AI applications using AWS services, foundation models, and modern AI development workflows."
    },
    {
    date: "2025",
    title: "Figma for UI/UX: Master Web Design in Figma",
    description: "Completed advanced training in UI/UX design using Figma, covering wireframing, prototyping, responsive interfaces, design systems, and user-centered web design principles."
    },
    {
        date: "2026",
        title: "2 YMER Journal Papers Published",
        description: "Published two international journal papers in YMER (Vol. 25, Issue 05) on misinformation detection and AI chatbots for mental health rehabilitation.",
        links: [
            {
                label: "Issue",
                url: "https://ymerdigital.eu/current-issue/?cpage=2"
            }
        ]
    },
    
];


// ==========================================
// 2. WEBSITE LOGIC - NO NEED TO TOUCH THIS!
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- DARK/LIGHT MODE TOGGLE LOGIC ---
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Function to update icon based on current theme
    function updateIcon(theme) {
        if (theme === 'dark') {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }

    // Initialize icon on load
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateIcon(currentTheme);

    // Toggle event listener
    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateIcon('light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateIcon('dark');
        }
    });

    // Mobile nav toggle
    mobileNavToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        mobileNavToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // --- DATA INJECTION LOGIC ---
    
    // Inject Profile Data
    document.getElementById('my-name').textContent = profileData.name;
    document.getElementById('copyright-name').textContent = profileData.name;
    document.getElementById('my-title').textContent = profileData.title;
    document.getElementById('my-bio').textContent = profileData.bio;
    document.getElementById('contact-email').href = `mailto:${profileData.email}`;
    document.getElementById('link-github').href = profileData.github;
    document.getElementById('link-linkedin').href = profileData.linkedin;
    
    // Auto-update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Render Projects
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = myProjects.map(project => {
        const tagsHtml = project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('');

        return `
            <div class="card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">
                    ${tagsHtml}
                </div>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="card-link">
                    View Project 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
            </div>
        `;
    }).join('');

    // Render Achievements
    const achievementsTimeline = document.getElementById('achievements-timeline');
    achievementsTimeline.innerHTML = myAchievements.map(achievement => `
            <div class="achievement-card">
                <div class="achievement-date">${achievement.date}</div>
                <div class="achievement-header">
                    <h3>${achievement.title}</h3>
                    <a href="${profileData.linkedin}" target="_blank" rel="noopener noreferrer" class="linkedin-btn">
                        View in LinkedIn
                    </a>
                </div>
                <p>${achievement.description}</p>
                ${achievement.links ? `
                    <div class="achievement-links">
                        ${achievement.links.map(link => `
                            <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="paper-link">
                                ${link.label}
                            </a>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `).join('');
});
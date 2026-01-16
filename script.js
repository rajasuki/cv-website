const projects = [
    {
        title: "Penguin OS",
        description: "Sistem operasi berbasis Linux yang ringan dan aman dengan antarmuka modern.",
        link: "https://drive.google.com/drive/folders/1dBAh_12oDHWH1V93DPr1FHAfdIh7j3Ed?usp=sharing"
    },
];

function renderProjects() {
    const projectContainer = document.getElementById('project-list');
    if (!projectContainer) return;

    projectContainer.innerHTML = ''; // Clear existing content

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'info-card project-card animate-fade-up';
        card.style.animationDelay = `${(index + 1) * 0.1}s`;

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="btn-link">Lihat Project <i class="fas fa-arrow-right"></i></a>
        `;

        projectContainer.appendChild(card);
    });
}

// Render when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);



// class PortfolioView {
//     constructor() {
//         this.container = document.getElementById("main");
//     }

//     renderProjects(projects) {
//         this.container.innerHTML = "";
        
//         const projectsHTML = projects.map(project => `
//             <div class="col-4 col-12-medium">
//                 <section class="highlight">
//                     <a href="${project.url}" class="image featured"><img src="${project.imageUrl}" alt="${project.name}" style="height: 370px; width: 500px;" /></a>
//                     <h3><a href="${project.githubUrl}">${project.name}</a></h3>
//                     <p>${project.description}</p>
//                     <ul class="actions">
//                         <li><a href="${project.githubUrl}" class="button style1">Learn More</a></li>
//                     </ul>
//                 </section>
//             </div>
//         `).join('');

//         const projectsContainer = document.createElement('div');
//         projectsContainer.classList.add('row');
//         projectsContainer.innerHTML = projectsHTML;

//         this.container.appendChild(projectsContainer);

//         // Add slideshow functionality here
//     }
// }

class PortfolioView {
    constructor() {
        this.container = document.getElementById("main");
    }

    renderProjects(projects, technicalSkills) {
        this.container.innerHTML = "";

        // Render Technical Skills Section
        const technicalSkillsHTML = `
            <div class="title">TECHNICAL SKILLS & PROJECTS</div>
            <div class="container">
                <section id="features">
                    <div class="feature-list">
                        <div class="row">
                            ${technicalSkills.map(skill => `
                                <div class="col-3">
                                    <img src="${skill.imageUrl}" alt="${skill.name}" width="100" height="100">
                                    <p>${skill.name}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>
            </div>`;

        // Append Technical Skills Section to the container
        const technicalSkillsContainer = document.createElement('div');
        technicalSkillsContainer.innerHTML = technicalSkillsHTML;
        this.container.appendChild(technicalSkillsContainer);

        // Render Projects Section
        const projectsHTML = projects.map(project => `
            <div class="col-4 col-12-medium">
                <section class="highlight">
                    <a href="${project.url}" class="image featured"><img src="${project.imageUrl}" alt="${project.name}" style="height: 370px; width: 500px;" /></a>
                    <h3><a href="${project.githubUrl}">${project.name}</a></h3>
                    <p>${project.description}</p>
                    <ul class="actions">
                        <li><a href="${project.githubUrl}" class="button style1">Learn More</a></li>
                    </ul>
                </section>
            </div>
        `).join('');

        // Append Projects Section to the container
        const projectsContainer = document.createElement('div');
        projectsContainer.classList.add('row');
        projectsContainer.innerHTML = projectsHTML;
        this.container.appendChild(projectsContainer);

        // Add slideshow functionality here
    }
}

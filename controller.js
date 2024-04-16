// class PortfolioController {
//     constructor(model, view) {
//         this.model = model;
//         this.view = view;
//         this.init();
//     }

//     init() {
//         const projects = this.model.getAllProjects();
//         this.view.renderProjects(projects);
//         // Add event listeners or other initialization logic here
//     }
// }

// // Initialize the app
// const model = new PortfolioModel();
// const view = new PortfolioView();
// const controller = new PortfolioController(model, view);

class PortfolioController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    init() {
        const projects = this.model.getAllProjects();
        const technicalSkills = this.model.getAllTechnicalSkills(); // Assuming there's a method to fetch technical skills from the model
        this.view.renderProjects(projects, technicalSkills); // Pass both projects and technical skills to the view
        // Add event listeners or other initialization logic here
    }
}

// Initialize the app
const model = new PortfolioModel();
const view = new PortfolioView();
const controller = new PortfolioController(model, view);

// class PortfolioModel {
//     constructor() {
//         this.projects = [
//             {
//                 name: "Fitness",
//                 url: "https://main.d2rnxvjjtumnwv.amplifyapp.com/",
//                 imageUrl: "images/pic02.jpg",
//                 description: "A fitness-related project.",
//                 githubUrl: "https://github.com/sbommaganty/Fitness"
//             },
//             {
//                 name: "Music",
//                 url: "https://main.d2e6k9dtyes1d1.amplifyapp.com/",
//                 imageUrl: "images/pic03.jpg",
//                 description: "A music-related project.",
//                 githubUrl: "https://github.com/sbommaganty/Music"
//             },
//             {
//                 name: "Baby carriages",
//                 url: "https://main.d1bcys90etygzq.amplifyapp.com/",
//                 imageUrl: "images/pic04.jpg",
//                 description: "A project related to baby carriages.",
//                 githubUrl: "https://github.com/sbommaganty/Baby-Carriages"
//             },
//             {
//                 name: "Agriassistance",
//                 url: "https://github.com/sbommaganty/Agriassitance/assets/87115621/f0d22921-006f-4e3e-a039-6fdd50bc74e8",
//                 imageUrl: "images/agri.png",
//                 description: "A project related to agriculture assistance.",
//                 githubUrl: "https://github.com/sbommaganty/Agriassitance"
//             },
//             // Add more projects here
//         ];
//     }

//     getAllProjects() {
//         return this.projects;
//     }
// }

class PortfolioModel {
    constructor() {
        this.projects = [
            {
                name: "Fitness",
                url: "https://main.d2rnxvjjtumnwv.amplifyapp.com/",
                imageUrl: "images/pic02.jpg",
                description: "A fitness-related project.",
                githubUrl: "https://github.com/sbommaganty/Fitness"
            },
            {
                name: "Music",
                url: "https://main.d2e6k9dtyes1d1.amplifyapp.com/",
                imageUrl: "images/pic03.jpg",
                description: "A music-related project.",
                githubUrl: "https://github.com/sbommaganty/Music"
            },
            {
                name: "Baby carriages",
                url: "https://main.d1bcys90etygzq.amplifyapp.com/",
                imageUrl: "images/pic04.jpg",
                description: "A project related to baby carriages.",
                githubUrl: "https://github.com/sbommaganty/Baby-Carriages"
            },
            {
                name: "Agriassistance",
                url: "https://github.com/sbommaganty/Agriassitance/assets/87115621/f0d22921-006f-4e3e-a039-6fdd50bc74e8",
                imageUrl: "images/agri.png",
                description: "A project related to agriculture assistance.",
                githubUrl: "https://github.com/sbommaganty/Agriassitance"
            },
            // Add more projects here
        ];

        // Define array of technical skills
        this.technicalSkills = [
            { name: "", imageUrl: "images/Android.jpg" },
            { name: "", imageUrl: "images/Azure.png" },
            { name: "", imageUrl: "images/C.png" },
            { name: "", imageUrl: "images/Dart.png" },
            { name: "", imageUrl: "images/Firebase.png" },
            { name: "", imageUrl: "images/postgresql.jpg" },
            { name: "", imageUrl: "images/flutter.jpg" },
            { name: "", imageUrl: "images/Git.png" },
            { name: "", imageUrl: "images/graphql.png" },
            { name: "", imageUrl: "images/iOS.png" },
            { name: "", imageUrl: "images/js.jpg" },
            { name: "", imageUrl: "images/kotlin.png" },
            { name: "", imageUrl: "images/Nestjs.png" },
            { name: "", imageUrl: "images/Strapi.png" },
            { name: "", imageUrl: "images/React-native.png" },
            { name: "", imageUrl: "images/python.png" },
            // Add more technical skills here
        ];
    }

    getAllProjects() {
        return this.projects;
    }

    // Method to retrieve all technical skills
    getAllTechnicalSkills() {
        return this.technicalSkills;
    }
}


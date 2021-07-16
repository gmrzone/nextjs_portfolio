import review_image1 from "../../public/review_1.jpg";
import review_image2 from "../../public/review_2.jpg";
import review_image3 from "../../public/review_3.jpeg";
import review_image4 from "../../public/review_4.jpg";
import review_image5 from "../../public/review_5.jpg";
import review_image6 from "../../public/review_6.jpg";
import review_image7 from "../../public/review_7.jpg";
import review_image8 from "../../public/review_8.jpg";

import corecare_main from "../../public/corecare_main.png";
import corecare_old from "../../public/corecare_old.png";
import corecare_admin from "../../public/corecare_admin.png";
import portfolio_main from "../../public/portfolio_main.jpg";

import corecare_main_secondary from "../../public/corecare_main-trans.png";
import corecare_admin_secondary from "../../public/corecare_admin-trans.png";
import protfolio_secondary from "../../public/portfolio-trans.png";

export const skillsData = [
    {
        id: 1,
        title: "Frontend",
        meta: "More Then 2 years",
        icon: "fad fa-code",
        data: [
            {
                name: "Javascript",
                skill: 80,
            },
            {
                name: "React",
                skill: 85,
            },
            {
                name: "Next JS",
                skill: 85,
            },
            {
                name: "Redux",
                skill: 80,
            },
            {
                name: "Chart.js",
                skill: 85,
            },
            {
                name: "Tailwind CSS",
                skill: 75,
            },
            {
                name: "SCSS",
                skill: 75,
            },
            {
                name: "CSS",
                skill: 75,
            },
            {
                name: "HTML",
                skill: 90,
            },
        ],
    },
    {
        id: 2,
        title: "Backend",
        meta: "More Then 2.5 years",
        icon: "fas fa-server",
        data: [
            {
                name: "Python",
                skill: 85,
            },
            {
                name: "Django / DRF",
                skill: 83,
            },
            {
                name: "PostgreSql",
                skill: 65,
            },
            {
                name: "Redis",
                skill: 65,
            },
            {
                name: "Node",
                skill: 35,
            },
        ],
    },
    {
        id: 3,
        title: "Others",
        meta: "More Then 1.5 years",
        icon: "fas fa-toolbox",
        data: [
            {
                name: "Git CLI",
                skill: 75,
            },
            {
                name: "Vs Code",
                skill: 75,
            },
            {
                name: "Docker / Docker Compose",
                skill: 60,
            },
            {
                name: "Linux",
                skill: 75,
            },
            {
                name: "Windows",
                skill: 95,
            },
        ],
    },
];

export const reviewData = [
    {
        id: 1,
        photo: review_image1,
        name: "@stu_mastersgolf",
        review: "Afzal is a skilled professional with great understanding of customer needs. We are looking forward to many more projects with him. You can step in with confidence with Afzal.",
        star: 5,
    },
    {
        id: 2,
        photo: review_image7,
        name: "@mohjakhalil",
        review: "Seller is very skillful with django provided me excellent and high-quality work in given time. Highly recommended and looking forward to work again with him in future.",
        star: 5,
    },
    {
        id: 3,
        photo: review_image2,
        name: "@majestic6548",
        review: "Very detailed and professional Coder, takes into considerations of every requirement given and delivers accurately. Highly recommended, would definitely be coming back for more!.",
        star: 5,
    },
    {
        id: 4,
        photo: review_image3,
        name: "@ZeeshanShaikh",
        review: " Excellent experience. The communication was great and he took time to understand my requirements. Highly recommend!",
        star: 5,
    },
    {
        id: 5,
        photo: review_image4,
        name: "@superrek",
        review: "Extremely helpful, ran into some server issues and he communicated with me and helped to find a solution. 5/5 stars!",
        star: 5,
    },
    {
        id: 6,
        photo: review_image5,
        name: "@zaidshaikh21",
        review: "Afzal did an amazing job helping me out. He not only finished the project in less than a day he then helped me understand everything and help my run my code.",
        star: 5,
    },
    {
        id: 7,
        photo: review_image6,
        name: "@shinny10",
        review: "A great delivery in record time for an affordable budget. Can recommend this seller with confidence!",
        star: 5,
    },
    {
        id: 8,
        photo: review_image8,
        name: "@briankraminit",
        review: "I had a great experience working with Afzal, he was responsive and met all of his deadlines. He understood what I was asking of him and delivered, I would recommend and plan to use again.",
        star: 5,
    },
];

export const ProjectData = [
    {
        id: 1,
        name: "Cleaning and Maintanence Service Platform",
        context: "Entire Frontend & Backend",
        role: "Fullstack Developer",
        period: "October 2020",
        about: "A Fullstack cleaning and maintanence service platform created using React, redux on frontend and django, Postgresql and Redis as backend.",
        link: "https://www.corecare.in/",
        github: "https://github.com/gmrzone/corecare_backend",
        main_image: corecare_old,
        secondary_image: corecare_main_secondary,
        points: [
            "Used React with Redux for Front-end along with HTML, CSS, and SCSS",
            "Lazy Load Images with placeholder to avoid Layout shift",
            "Used Django and Django REST Framework to Create a Backend Restful API",
            "Used Postgres as Database and Redis for Caching DB queried and for creating Service Recommendation Engine",
            "Implemented JWT based authentication system with Custom User and httpOnly Cookie",
            "Used Django Session To create Cart and Coupon System",
            "Use Celery to generate Invoice asynchronously and Sent it via Email on Successful order",
            "Integrated Razor Pay Payment Gateway",
            "Deployed backend on Digital Ocean with NGINX, UWSGI",
        ],
    },
    {
        id: 2,
        name: "Admin Dashboard",
        context: "Frontend Redesign using Nextjs",
        role: "Frontend Developer",
        period: "March 2021",
        about: "Admin Dashboard created using React and Charts.js",
        link: "https://corecare-admin.vercel.app/",
        github: "https://github.com/gmrzone/corecare_admin",
        main_image: corecare_admin,
        secondary_image: corecare_admin_secondary,
        points: [
            "Used React with SWR to create a Performant Admin Dashboard",
            "Used Chart.js to visualize data",
            "Fully Responsive Design",
        ],
    },
    {
        id: 4,
        name: "My Portfolio Website",
        context: "Created usingTypeScript, Nextjs and Tailwing css",
        role: "Frontend Developer",
        period: "August 2021",
        about: "Personal portfolio website created using nextjs and tailwing css.",
        link: "https://afzalsaiyed.xyz/",
        github: "https://github.com/gmrzone/nextjs_portfolio",
        main_image: portfolio_main,
        secondary_image: protfolio_secondary,
        points: ["Created the frontend with next.js", "'Fully Responsive Design'"],
    },
    {
        id: 3,
        name: "Corecare Frontend Redesign",
        context: "Frontend Redesign using Nextjs",
        role: "Frontend Developer",
        period: "January 2021",
        about: "Cleaning and maintanence Services Platform frontend created using next.js and SWR",
        link: "https://dev.corecare.in/",
        github: "https://github.com/gmrzone/corecare_frontend_nextjs",
        main_image: corecare_main,
        secondary_image: corecare_main_secondary,
        points: [
            "Redesigned the frontend to use next.js instead of create-react-app for Static site generation and server-side rendering and to improve the SEO.",
            "Remove Redux and used SWR for fetching data from api to implement caching and to improve overall performance",
            "'Fully Responsive Design'",
        ],
    },
];
/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

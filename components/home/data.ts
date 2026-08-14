import type { StaticImageData } from "next/image";

import corecare_main from "../../public/corecare_main.png";
import corecare_old from "../../public/corecare_old.png";
import corecare_admin from "../../public/corecare_admin.png";
import portfolio_main from "../../public/portfolio_main.jpg";

import corecare_main_secondary from "../../public/corecare_main-trans.png";
import corecare_admin_secondary from "../../public/corecare_admin-trans.png";
import protfolio_secondary from "../../public/portfolio-trans.png";

export interface ISkillsDataStats {
    name: string;
    skill: number;
}
export interface ISkillData {
    id: number;
    title: string;
    meta: string;
    icon: string;
    data: ISkillsDataStats[];
}
export const skillsData: ISkillData[] = [
    {
        id: 1,
        title: "Frontend",
        meta: "More Than 6 years",
        icon: "fad fa-code",
        data: [
            {
                name: "Typescript / Javascript",
                skill: 90,
            },
            {
                name: "React",
                skill: 90,
            },
            {
                name: "Angular",
                skill: 90,
            },
            {
                name: "Vue",
                skill: 90,
            },
            {
                name: "WebRTC",
                skill: 90,
            },
            {
                name: "HTML / CSS",
                skill: 90,
            },
            {
                name: "Next JS",
                skill: 78,
            },
            {
                name: "Redux",
                skill: 78,
            },
            {
                name: "WebSockets",
                skill: 78,
            },
            {
                name: "Jest / React Testing Library",
                skill: 78,
            },
            {
                name: "SCSS",
                skill: 78,
            },
            {
                name: "Web Workers",
                skill: 65,
            },
        ],
    },
    {
        id: 2,
        title: "Backend",
        meta: "More Than 6 years",
        icon: "fas fa-server",
        data: [
            {
                name: "Python",
                skill: 90,
            },
            {
                name: "FastAPI",
                skill: 90,
            },
            {
                name: "System Design",
                skill: 90,
            },
            {
                name: "Django",
                skill: 78,
            },
            {
                name: "Node JS / Express",
                skill: 78,
            },
            {
                name: "MySQL",
                skill: 78,
            },
            {
                name: "MongoDB",
                skill: 78,
            },
            {
                name: "Redis",
                skill: 78,
            },
            {
                name: "Kafka",
                skill: 65,
            },
            {
                name: "RabbitMQ",
                skill: 65,
            },
            {
                name: "Elasticsearch",
                skill: 65,
            },
        ],
    },
    {
        id: 3,
        title: "DevOps & Cloud",
        meta: "More Than 6 years",
        icon: "fas fa-cloud",
        data: [
            {
                name: "AWS (ECS, EC2, Lambda, SQS)",
                skill: 90,
            },
            {
                name: "Git",
                skill: 90,
            },
            {
                name: "Serverless Framework",
                skill: 90,
            },
            {
                name: "Docker / Docker Compose",
                skill: 78,
            },
            {
                name: "Linux",
                skill: 78,
            },
            {
                name: "CI/CD",
                skill: 78,
            },
            {
                name: "HAProxy / NGINX",
                skill: 65,
            },
        ],
    },
];
// Deliberately thin - the resume is the source of truth for detail. Figures are
// grouped under `did`, the change that produced them: a number on its own
// ("6.9MB, bundle") names a measurement but not a subject or a cause, so it
// tells a visitor nothing.
export interface IExperienceFigure {
    big: string;
    sub: string;
    countTo?: number;
    decimals?: number;
    suffix?: string;
    prefix?: string;
}
export interface IExperienceProof {
    did: string;
    figures: IExperienceFigure[];
}
export interface IExperienceData {
    id: number;
    company: string;
    client?: string;
    period: string;
    role: string;
    previousRole?: string;
    blurb: string;
    proofs: IExperienceProof[];
}

export const experienceData: IExperienceData[] = [
    {
        id: 1,
        company: "Perfios",
        period: "2023 - Now",
        role: "Tech Lead Engineer, Fullstack",
        previousRole: "Senior Software Engineer",
        blurb: "I lead the team behind Perfios' KYC and identity products - PIVC, VKYC and OneSDK - and own the edge routing they run on.",
        proofs: [
            {
                did: "Merged VKYC and VideoPD - two Angular apps sharing ~75% of their code - into one Vue 3 build",
                figures: [
                    { big: "6.9", countTo: 6.9, decimals: 1, suffix: "MB", sub: "bundle, from 27MB" },
                    { big: "2-3", suffix: "s", sub: "load, from 7-8s" },
                ],
            },
            {
                did: "Multithreaded the API layer to remove serial bottlenecks",
                figures: [{ big: "50", countTo: 50, suffix: "%", sub: "faster responses" }],
            },
        ],
    },
    {
        id: 2,
        company: "Patch Infotech",
        client: "Kroger",
        period: "2021 - 2023",
        role: "Senior Software Engineer",
        blurb: "Built and ran the CMS powering Kroger's banner ecosystem.",
        proofs: [
            {
                did: "Redesigned the CMS core modules around a JSON Schema driven form layer",
                figures: [{ big: "80", countTo: 80, prefix: "~", suffix: "%", sub: "faster onboarding for new devs" }],
            },
        ],
    },
    {
        id: 3,
        company: "Freelance",
        client: "UpScriptHealth",
        period: "2019 - 2021",
        role: "Fullstack Developer",
        blurb: "Automated telehealth operations for a US healthcare client - doctor assignment, reporting and SMS on a Python scheduler.",
        proofs: [],
    },
];

export interface IAwardData {
    id: number;
    title: string;
    org: string;
    year: string;
    icon: string;
}

export const awardData: IAwardData[] = [
    { id: 1, title: "Circle of Excellence", org: "Perfios", year: "2025", icon: "fas fa-trophy" },
    { id: 2, title: "Blaze a Trail", org: "Perfios", year: "2024", icon: "fas fa-award" },
];

export interface IProjectData {
    id: number;
    name: string;
    context: string;
    role: string;
    period: string;
    about: string;
    link: string;
    github: string;
    main_image: StaticImageData;
    secondary_image: StaticImageData;
    points: string[];
}
export const ProjectData: IProjectData[] = [
    {
        id: 1,
        name: "Cleaning and Maintenance Service Platform",
        context: "Entire Frontend & Backend",
        role: "Fullstack Developer",
        period: "October 2020",
        about: "A Fullstack cleaning and maintanence service platform created using React, redux on frontend and django, Postgresql and Redis as backend.",
        link: "https://corecare.afzalsaiyed.in/",
        github: "https://github.com/gmrzone/corecare_backend",
        main_image: corecare_old,
        secondary_image: corecare_main_secondary,
        points: [
            "Used React with Redux and Typescript for Front-end along with HTML, CSS, and SCSS",
            "Lazy Load Images with placeholder to avoid Layout shift",
            "Used Django/DRF and Node/Express to Create Backend Restful API",
            "Used Postgres as Database and Redis for Caching DB queried and for creating Service Recommendation Engine",
            "Implemented JWT based authentication system with Custom User and httpOnly Cookie",
            "Used Session To create User Cart and Coupon System",
            "Use Celery to generate Invoice asynchronously and Sent it via Email on Successful order",
            "Integrated Razor Pay Payment Gateway",
            "Deployed backend on Digital Ocean with NGINX, UWSGI",
            "Fully Responsive Design",
        ],
    },
    {
        id: 2,
        name: "Admin Dashboard",
        context: "Frontend using Nextjs",
        role: "Frontend Developer",
        period: "March 2021",
        about: "Admin Dashboard created using React and Charts.js",
        link: "https://admin.afzalsaiyed.in/",
        github: "https://github.com/gmrzone/corecare_admin",
        main_image: corecare_admin,
        secondary_image: corecare_admin_secondary,
        points: [
            "Used React with SWR to create a Performant Admin Dashboard",
            "Used Chart.js to visualize data",
            "Created a custom Date Range Picker with calender",
            "User React-hook-form.",
            "Fully Responsive Design",
        ],
    },
    {
        id: 4,
        name: "My Portfolio Website",
        context: "Created using TypeScript, Nextjs and Tailwing css",
        role: "Frontend Developer",
        period: "August 2021",
        about: "Personal portfolio website created using nextjs and tailwing css.",
        link: "https://afzalsaiyed.in/",
        github: "https://github.com/gmrzone/nextjs_portfolio",
        main_image: portfolio_main,
        secondary_image: protfolio_secondary,
        points: [
            "Created the frontend with next.js and Typescript",
            "Created a Custom fully Responsive carousel with touch support for mobile using touch events",
            "Fully Responsive Design",
        ],
    },
    {
        id: 3,
        name: "Corecare Frontend Redesign",
        context: "Frontend Redesign using Nextjs",
        role: "Frontend Developer",
        period: "January 2021",
        about: "Cleaning and maintanence Services Platform frontend created using next.js and SWR",
        link: "https://corecare-v2.afzalsaiyed.in/",
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

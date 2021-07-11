import SectionHeader from "../../common/SectionHeader"
const ProjectSection = () => {
    const ProjectData = [
        {
            id: 1,
            name: "Cleaning and Maintanence Service Platform",
            context: "Entire Frontend & Backend",
            role: "Fullstack Developer",
            period: "October 2020",
            description: "",
            about: "",
            link: "https://www.corecare.in/",
            points: [
                'Used React with Redux for Front-end along with HTML, CSS, and SCSS',
                "Lazy Load Images with placeholder to avoid Layout shift",
                'Used Django and Django REST Framework to Create a Backend Restful API',
                'Used Postgres as Database and Redis for Caching DB queried and for creating Service Recommendation Engine',
                'Implemented JWT based authentication system with Custom User and httpOnly Cookie',
                'Used Django Session To create Cart and Coupon System',
                'Use Celery to generate Invoice asynchronously and Sent it via Email on Successful order',
                'Integrated Razor Pay Payment Gateway',
                'Deployed backend on Digital Ocean with NGINX, UWSGI',
            ]

        },
        {
            id: 21,
            name: "Admin Dashboard",
            context: "Frontend Redesign using Nextjs",
            role: "Frontend Developer",
            period: "March 2021",
            description: "",
            about: "",
            link: "https://corecare-admin.vercel.app/",
            points: [
                'Used React with SWR to create a Performant Admin Dashboard',
                'Used Chart.js to visualize data',
                'Fully Responsive Design'
            ] 
        },
        {
            id: 3,
            name: "Cleaning and Maintanence Service Platform Redesign Frontend",
            context: "Frontend Redesign using Nextjs",
            role: "Frontend Developer",
            period: "January 2021",
            description: "",
            about: "https://dev.corecare.in/",
            points: [
                "Redesigned the frontend to use next.js instead of create-react-app for Static site generation and server-side rendering and to improve the SEO.",
                "Remove Redux and used SWR for fetching data from api to implement caching and to improve overall performance",
                "'Fully Responsive Design'"
            ]
        }
    ]
    return (
        <div className="mt-10 desktop-st:mt-16">
        <div className="container">
            <SectionHeader title="Latest Work" meta="My recent projects" />
            <div className="flex flex-col text-center desktop-st:flex-row desktop-st:text-left">
                
            </div>
        </div>
    </div>
    )
}
export default ProjectSection
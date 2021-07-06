import SkillsAccordian from './SkillsAccordian'
const Skills = () => {
    const frontEndData = [
        {
            name: "HTML",
            skill: 90,
            icon: "fab fa-html5"
        },
        {
            name: "CSS",
            skill: 75,
            icon: "fab fa-css3-alt"
        },
        {
            name: "SCSS",
            skill: 75,
            "icon": "fab fa-sass"
        },
        {
            name: "Tailwind CSS",
            skill: 75,
            "src": "./tailwind.svg"
        },
        {
            name: "Javascript",
            skill: 80,
            icon: "fab fa-js"
        },
        {
            name: "React",
            skill: 85,
            icon: "fab fa-react"
        },
        {
            name: "Redux",
            skill: 80,
            src: "./redux.svg"
        },
        {
            name: "Next JS",
            skill: 85,
            "src": "./next-js.svg"
        },
        {   
            name: "Chart.js",
            skill: 85,
            src: "./chartjs.svg"
        },

    ]
    const BackendData = [
        {
            name: "Python",
            skill: 85,
            icon: "fab fa-python"
        },
        {
            name: "Django / DRF",
            skill: 83,
            src: "./django.svg"
        },
        {
            name: "PostgreSql",
            skill: 65,
            src: "./postgresql.svg"
        },
        {
            name: "Redis",
            skill: 65,
            src: "./redis.svg"
        },
        {
            name: "Node",
            skill: 35,
            icon: "fab fa-node"
        },

    ]
    const OthersData = [
        {
            name: "Git CLI",
            skill: 75,
            icon: "fab fa-github"
        },
        {
            name: "Vs Code",
            skill: 75,
            src: "./vscode.svg"
        },
        {
            name: "Docker / Docker Compose",
            skill: 60,
            icon: "fab fa-docker"
        },
        {
            name: "Linux",
            skill: 75,
            icon: "fab fa-linux"
        },
        {
            name: "Windows",
            skill: 95,
            icon: "fab fa-windows"
        }

    ]
    return (
        <div className="mt-6">
            <div className="container">
                <h2 className="text-main">Skills</h2>
                <div className="mt-6">
                    <SkillsAccordian title="Backend" data={BackendData}/>
                </div>
            </div>  
        </div>
    )
}

export default Skills
/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

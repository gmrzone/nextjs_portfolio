import SkillsAccordian from "./SkillsAccordianItem"
import SkillAccordianItem from './SkillsAccordianItem'
const SkillAccordian = () => {
    const skillsData = [
        {
            title: "Frontend",
            meta: "More Then 2 years",
            icon: "fad fa-code",
            data: [
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
        },
        {
            title: "Backend",
            meta: "More Then 2.5 years",
            icon: "fas fa-server",
            data: [
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
        },
        {
            title: "Others",
            icon: "fas fa-toolbox",
            data: [
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
        }
    ]
    const renderItems = skillsData.map((x, i, a) => {
        return <SkillAccordianItem key={i} title={x.title} meta={x.meta} data={x.data} icon={x.icon} last={a.length === i + 1}/>
    })
    console.log(skillsData)
    return (
        <div className="flex justify-center flex-col gap-y-10 flex-wrap mt-6 desktop-st:flex-row desktop-st:gap-x-5 xl:gap-x-10 xl:flex-nowrap">
            {renderItems}
        </div>
    )
}
export default SkillAccordian

/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

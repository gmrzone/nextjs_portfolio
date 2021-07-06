import SkillsAccordian from './SkillsAccordian'
const Skills = () => {
    const frontEndData = [
        {
            name: "HTML",
            skill: 90
        },
        {
            name: "CSS",
            skill: 75
        },
        {
            name: "SCSS",
            skill: 75
        },
        {
            name: "Tailwind CSS",
            skill: 75
        },
        {
            name: "Javascript",
            skill: 80
        },
        {
            name: "React",
            skill: 90
        },
        {
            name: "Redux",
            skill: 90
        },
        {
            name: "Next JS",
            skill: 90
        },
        {   
            name: "Chart.js",
            skill: 85
        },

    ]
    const BackendData = [
        {
            name: "Python",
            skill: 92
        },
        {
            name: "Django / DRF",
            skill: 90
        },
        {
            name: "PostgreSql",
            skill: 65
        },
        {
            name: "Redis",
            skill: 65
        },
        {
            name: "Node",
            skill: 35
        },

    ]
    const OthersData = [
        {
            name: "Git CLI",
            skill: 75
        },
        {
            name: "Vs Code",
            skill: 75
        },
        {
            name: "Docker / Docker Compose",
            skill: 60
        },
        {
            name: "Linux",
            skill: 75
        },
        {
            name: "Windows",
            skill: 95
        }
        
    ]
    return (
        <div className="mt-6">
            <div className="container">
                <h2 className="text-main">Skills</h2>
                <div className="mt-6">
                    <SkillsAccordian title="Backend"/>
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

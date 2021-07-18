import SkillAccordian from "./SkillsAccordian";
import SectionHeader from "../../common/SectionHeader";
import { NextPage } from "next";
const Skills: NextPage = () => {
    return (
        <div className="mt-10 desktop-st:mt-16">
            <div className="container">
                <SectionHeader title="Skills" meta="My Tech Stack" inverted={false} />
                <SkillAccordian />
            </div>
        </div>
    );
};

export default Skills;
/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

import SkillsAccordian from "./SkillsAccordianItem";
import SkillAccordianItem from "./SkillsAccordianItem";
import { skillsData } from "../data";
import { useState } from "react";
const SkillAccordian = () => {
    const [activeAccordian, setActiveAccordian] = useState(skillsData[0].id);
    const activateAccordian = (id) => {
        if (id === activeAccordian) {
            setActiveAccordian(null);
        } else {
            setActiveAccordian(id);
        }
    };

    const renderItems = skillsData.map((x, i, a) => {
        return (
            <SkillAccordianItem
                key={i}
                item={x}
                last={a.length === i + 1}
                activeAccordian={activeAccordian}
                activateAccordian={activateAccordian}
            />
        );
    });
    return (
        <div className="flex justify-center flex-col gap-y-2 flex-wrap mt-6 desktop-st:flex-row desktop-st:gap-x-5 xl:gap-x-10 xl:flex-nowrap">
            {renderItems}
        </div>
    );
};
export default SkillAccordian;

/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

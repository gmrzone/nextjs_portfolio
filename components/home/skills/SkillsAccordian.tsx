import SkillAccordianItem from "./SkillsAccordianItem";
import { skillsData } from "../data";
import { useState } from "react";
import type { JSX } from "react";
import { NextPage } from "next";
const SkillAccordian: NextPage = () => {
    const [activeAccordian, setActiveAccordian] = useState<number | null>(skillsData[0].id);
    const activateAccordian: (id: number) => void = (id) => {
        if (id === activeAccordian) {
            setActiveAccordian(null);
        } else {
            setActiveAccordian(id);
        }
    };

    const renderItems = skillsData.map<JSX.Element>((x, i): JSX.Element => {
        return <SkillAccordianItem key={i} item={x} activeAccordian={activeAccordian} activateAccordian={activateAccordian} />;
    });
    return (
        <div className="flex justify-center flex-col gap-y-2 flex-wrap desktop-st:flex-row desktop-st:gap-x-5 xl:gap-x-10 xl:flex-nowrap">
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

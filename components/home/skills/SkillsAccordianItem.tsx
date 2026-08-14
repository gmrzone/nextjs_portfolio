import SkillItems from "./SkillItems";
import SkillsItemHeader from "./SkillItemHeader";
// import DesktopFullSkillModalItem from './DesktopFullSkillModalItem';
import dynamic from "next/dynamic";
import { useState } from "react";
import { NextPage } from "next";
import { ISkillData } from "../data";
const DesktopFullSkillModalItem = dynamic(() => import("./DesktopFullSkillModalItem"), { ssr: false });

interface IProps {
    item: ISkillData;
    activeAccordian: number | null;
    activateAccordian: (id: number) => void;
}
const SkillsAccordianItem: NextPage<IProps> = ({ item: { title, meta, data, icon, id }, activeAccordian, activateAccordian }) => {
    const [desktopFullSkillActive, setDesktopFullSkillActive] = useState(false);
    const closeDesktopSkillModal = () => {
        setDesktopFullSkillActive(false);
    };
    const openDesktopSkillModal = () => {
        setDesktopFullSkillActive(true);
        activateAccordian(id);
    };
    return (
        <div className={`w-full max-w-full desktop-st:max-w-md space-y-2 accordian-item`}>
            <DesktopFullSkillModalItem active={desktopFullSkillActive} close={closeDesktopSkillModal} title={title} data={data} id={id} />
            <SkillsItemHeader
                icon={icon}
                title={title}
                meta={meta}
                activeAccordian={activeAccordian}
                activateAccordian={activateAccordian}
                id={id}
            />
            <SkillItems data={data} activeAccordian={activeAccordian} id={id} forceFull={false} />
            <div
                className="bg-sec/100 dark:bg-sec-dark/100 text-bg-sec dark:text-bg-sec-inverted px-3 font-bold py-3 text-center shadow-md rounded-md hidden cursor-pointer transition-colors duration-300 hover:bg-sec/75 dark:hover:bg-sec-dark/70 desktop-st:block"
                onClick={openDesktopSkillModal}>
                View All
            </div>
            {/* Between 992px and 1280px only two cards fit per row, and this
                previously hid the last group outright — so "DevOps & Cloud"
                was invisible on most laptops. The parent already has
                `flex-wrap`, so the third card simply wraps to a second row. */}
        </div>
    );
};

export default SkillsAccordianItem;

/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

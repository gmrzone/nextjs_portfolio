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
    last: boolean;
    activeAccordian: number | null;
    activateAccordian: (id: number) => void;
}
const SkillsAccordianItem: NextPage<IProps> = ({ item: { title, meta, data, icon, id }, last, activeAccordian, activateAccordian }) => {
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
                className="bg-sec dark:bg-sec-dark text-bg-sec dark:text-bg-sec-inverted px-3 font-bold mb-8 py-3 text-center shadow-md rounded-md hidden cursor-pointer transition-colors duration-300 bg-opacity-100 hover:bg-opacity-75 dark:hover:bg-opacity-70 desktop-st:block"
                onClick={openDesktopSkillModal}>
                View All
            </div>
            <style jsx>{`
                @media only screen and (min-width: 992px) and (max-width: 1280px) {
                    .accordian-item {
                        display: ${last ? "none" : "block"};
                    }
                }
            `}</style>
        </div>
    );
};

export default SkillsAccordianItem;

/*
 * Created on Tue Jul 06 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

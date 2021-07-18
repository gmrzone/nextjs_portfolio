import { NextPage } from "next";

interface IProps {
    icon: string;
    title: string;
    meta: string;
    activeAccordian: number | null;
    id: number;
    activateAccordian: (id: number) => void;
}
const SkillsItemHeader: NextPage<IProps> = ({ icon, title, meta, activeAccordian, id, activateAccordian }) => {
    return (
        <div
            className="flex justify-between bg-white dark:bg-bg-sec-inverted px-6 py-2 rounded-md overflow-hidden cursor-pointer shadow-lg"
            onClick={() => activateAccordian(id)}>
            <div className="flex flex-col justify-center">
                <i className={`${icon} text-3xl text-main`} />
            </div>
            <div>
                <h3 className="text-main dark:text-main-dark">{title}</h3>
                <span className="text-gray-600">{meta}&nbsp;</span>
            </div>
            <div className="flex flex-col justify-center">
                <i
                    className={`fas fa-caret-down text-xl text-main transition-transform duration-300 delay-100 desktop-st:hidden desktop-st:transition-none desktop-st:rotate-0 ${
                        activeAccordian === id ? "rotate-180" : "rotate-0"
                    }`}
                />
            </div>
        </div>
    );
};

export default SkillsItemHeader;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

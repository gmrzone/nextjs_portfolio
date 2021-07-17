import { NextPage } from "next";

interface SectionProps {
    title: string;
    meta: string;
    inverted: boolean;
}
const SectionHeader: NextPage<SectionProps> = ({ title, meta, inverted }) => {
    return (
        <div className="mb-10 desktop-st:mb-16">
            <h2 className={`text-center ${inverted ? "text-white" : "text-main dark:text-main-dark"}`}>{title}</h2>
            <span className={`text-center block font-semibold ${inverted ? "text-gray-400" : "text-gray-500 dark:text-gray-700"}`}>
                {meta}
            </span>
        </div>
    );
};

export default SectionHeader;

/*
 * Created on Tue Jul 13 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

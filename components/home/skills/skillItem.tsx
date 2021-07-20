import { useEffect, useRef } from "react";
import { NextPage } from "next";
import { ISkillsDataStats } from "../data";

interface iProps {
    item: ISkillsDataStats;
}
const SkillItem: NextPage<iProps> = ({ item }) => {
    return (
        <div className="space-y-2">
            <div className="flex flex-row justify-between">
                <div className="font-semibold text-gray-600">{item.name}</div>
                <span className="text-gray-600">{item.skill}%</span>
            </div>
            <div className="relative">
                <div className="w-full h-2 bg-sec-lg dark:bg-bg-sec-dark rounded-full overflow-hidden relative">
                    <div
                        className="h-full absolute bg-sec dark:bg-sec-dark w-full transform-gpu transition-transform duration-500 progress-bar"
                        data-skill={item.skill}></div>
                </div>
            </div>
            <style jsx>{`
                .progress-bar {
                    transform: translate3d(-99%, 0px, 0px);
                    backface-visibility: hidden;
                    perspective: 1000;
                    will-change: transform;
                }
            `}</style>
        </div>
    );
};

export default SkillItem;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

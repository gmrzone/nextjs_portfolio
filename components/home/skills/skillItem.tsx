import { useEffect, useRef } from "react";
import { NextPage } from 'next'
import { ISkillsDataStats } from '../data'


interface iProps {
    item: ISkillsDataStats
}
const SkillItem: NextPage<iProps> = ({ item }) => {
    const progressBar = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const options = {
            rootMargin: "0px 0px 0px 0px",
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((x) => {
                const target = x.target as HTMLDivElement
                if (x.isIntersecting) {
                    target.classList.remove("w-0");
                    target.style.width = `${item.skill}%`;
                    observer.unobserve(x.target);
                }
            });
        }, options);
        if (progressBar.current){
            observer.observe(progressBar.current);
        }
    }, [item]);
    return (
        <div className="space-y-2">
            <div className="flex flex-row justify-between">
                <div className="font-semibold text-gray-600">{item.name}</div>
                <span className="text-gray-600">{item.skill}%</span>
            </div>
            <div className="relative">
                <div className="w-full h-2 bg-sec-lg dark:bg-bg-sec-dark rounded-full overflow-hidden">
                    <div className="h-full bg-sec dark:bg-sec-dark w-0 transition-all duration-500" ref={progressBar}></div>
                </div>
            </div>
        </div>
    );
};

export default SkillItem;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

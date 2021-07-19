import SkillItem from "./skillItem";
import { NextPage } from "next";
import { ISkillsDataStats } from "../data";
import { useEffect, useRef } from 'react';

interface IProps {
    data: ISkillsDataStats[];
    activeAccordian?: number | null;
    id: number;
    forceFull: boolean;
}
const RenderItems: NextPage<IProps> = ({ data, activeAccordian, id, forceFull = false }) => {
    const mainContainer = useRef<HTMLDivElement | null>(null)
    const renderData = data.map((x, i) => {
        return <SkillItem item={x} key={i} />;
    });

    useEffect(() => {
        const options = {
            rootMargin: "0px 0px -30px 0px"
        }
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(x => {
                if (x.isIntersecting){
                    const target = (x.target as HTMLDivElement).lastChild?.firstChild?.firstChild as HTMLDivElement;
                    if (target && target.dataset.skill){
                        const skillpercent = target.dataset.skill
                        target.style.transform = `translate3d(${-(100 - (+skillpercent))}%, 0px, 0px)`;

                    }
                    observer.unobserve(x.target)
                }
            })
        }, options)
        if (mainContainer.current){
            Array.from(mainContainer.current.children).forEach(x => {
                observer.observe(x)
            })
        }
    }, [])


    return (
        <div
            className={`space-y-6 bg-white dark:bg-bg-sec-inverted px-4 mb-8 py-6 rounded-md accordian-content overflow-hidden h-auto ${
                forceFull ? "shadow-none" : "shadow-md"
            }`} ref={mainContainer}>
            {renderData}
            <style jsx>{`
                @media (max-width: 992px) {
                    .accordian-content {
                        height: auto;
                        max-height: ${activeAccordian === id ? "1000px" : "0px"};
                        transition: ${forceFull ? "none" : "max-height 0.4s ease-in-out, padding 0.35s 0.07s ease-in-out"};
                        padding: ${activeAccordian === id ? "" : "0px"};
                    }
                }
                @media (min-width: 993px) {
                    .accordian-content {
                        height: ${forceFull ? "auto" : "285px"};
                    }
                }
            `}</style>
        </div>
    );
};

export default RenderItems;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

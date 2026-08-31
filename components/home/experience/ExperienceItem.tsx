import { useRef } from "react";
import { NextPage } from "next";
import { IExperienceData, IExperienceFigure } from "../data";
import { useActivated, useCountUp } from "./motion";

const Figure: NextPage<{ figure: IExperienceFigure; active: boolean; delay: number }> = ({ figure, active, delay }) => {
    const counted = useCountUp(figure.countTo ?? 0, active);
    const shown = figure.countTo !== undefined ? counted.toFixed(figure.decimals ?? 0) : figure.big;

    return (
        <div
            className={`transition-all duration-700 ease-out ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: `${delay}ms` }}>
            <span className="block text-4xl desktop-st:text-5xl font-bold text-white leading-none tabular-nums">
                {figure.prefix}
                {shown}
                <span className="text-sec-lg text-2xl desktop-st:text-3xl align-top ml-0.5">{figure.suffix}</span>
            </span>
            <span className="block text-gray-400 text-sm font-semibold mt-1.5">{figure.sub}</span>
        </div>
    );
};

const ExperienceItem: NextPage<{ item: IExperienceData; index: number }> = ({ item, index }) => {
    const row = useRef<HTMLLIElement | null>(null);
    const active = useActivated(row);
    let step = 0; // running delay index so figures stagger across proof groups

    return (
        <li ref={row} className="relative pl-10 desktop-st:pl-16 pb-16 desktop-st:pb-24 last:pb-0">
            {/* node: dark core with an accent ring, plus a halo that only blooms
                once the row activates */}
            <span
                className={`absolute left-0 top-2 -translate-x-1/2 h-4 w-4 rounded-full border-2 transition-all duration-700 ease-out ${
                    active ? "bg-sec dark:bg-blue-600 border-sec-lg scale-100" : "bg-main dark:bg-main-dark border-bg-sec/30 scale-75"
                }`}
            />
            <span
                className={`absolute left-0 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-sec/40 transition-all duration-1000 ease-out ${
                    active ? "opacity-0 scale-[3]" : "opacity-0 scale-100"
                }`}
                style={{ transitionDelay: active ? "120ms" : "0ms" }}
            />

            {/* two columns on desktop — narrative left, proof right — so a row
                spans the viewport instead of huddling in the left third */}
            <div
                className={`desktop-st:grid desktop-st:grid-cols-[minmax(0,30rem)_1fr] desktop-st:gap-x-14 desktop-st:items-start transition-all duration-700 ease-out ${
                    active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}>
                <div>
                    <span className="block text-sec-lg font-bold text-xs uppercase tracking-[0.2em]">{item.period}</span>

                    <h3 className="mt-2 text-bg-sec dark:text-bg-sec-inverted leading-none text-4xl desktop-st:text-6xl font-bold">
                        {item.company}
                    </h3>

                    <p className="mt-3 text-white font-semibold">
                        {item.role}
                        {item.client && <span className="text-gray-400 font-semibold"> · for {item.client}</span>}
                    </p>
                    {item.previousRole && <p className="text-gray-500 text-sm font-semibold">↳ joined as {item.previousRole}</p>}

                    <p className="mt-4 text-gray-300 max-w-[44ch] leading-relaxed">{item.blurb}</p>
                </div>

                {item.proofs.length > 0 && (
                    <div className="mt-8 desktop-st:mt-1 flex flex-col gap-8">
                        {item.proofs.map((proof) => (
                            <div key={proof.did} className="border-l-2 border-sec-lg/40 pl-5">
                                {/* the change comes first; the figures below are its result */}
                                <p className="text-white text-sm leading-relaxed max-w-[44ch]">{proof.did}</p>
                                <div className="mt-4 flex flex-wrap gap-x-10 gap-y-5">
                                    {proof.figures.map((figure) => (
                                        <Figure key={figure.sub} figure={figure} active={active} delay={260 + step++ * 130} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </li>
    );
};

export default ExperienceItem;

/*
 * Created on Sat Aug 15 2026
 *
 * Copyright (c) 2026 AFzal Saiyed
 */

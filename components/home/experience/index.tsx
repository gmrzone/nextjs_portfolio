import { useRef } from "react";
import SectionHeader from "../../common/SectionHeader";
import ExperienceItem from "./ExperienceItem";
import AwardCard from "./AwardCard";
import { experienceData, awardData } from "../data";
import { useScrollProgress } from "./motion";
import { NextPage } from "next";

const Experience: NextPage = () => {
    const track = useRef<HTMLOListElement | null>(null);
    const progress = useScrollProgress(track);

    return (
        <div className="mt-10 desktop-st:mt-16 bg-main dark:bg-main-dark py-14 desktop-st:py-20 overflow-x-hidden" id="experience">
            <div className="container">
                <SectionHeader title="Experience" meta="Six years, three teams" inverted={true} />

                <ol ref={track} className="relative ml-2 desktop-st:ml-6">
                    {/* the dim track, and over it a beam whose height follows scroll
                        position — the nodes light up as it reaches them */}
                    <span className="absolute left-0 top-0 h-full w-px bg-bg-sec/15" aria-hidden="true" />
                    <span
                        className="absolute left-0 top-0 w-px bg-linear-to-b from-sec-lg to-sec will-change-[height]"
                        style={{ height: `${progress * 100}%`, boxShadow: "0 0 12px 1px rgba(162,219,250,0.55)" }}
                        aria-hidden="true"
                    />

                    {experienceData.map((item, i) => (
                        <ExperienceItem item={item} index={i} key={item.id} />
                    ))}
                </ol>

                <div className="mt-16 desktop-st:mt-24 relative">
                    {/* a soft accent glow so the cards' backdrop-blur has something to
                        blur — over a flat background, glass reads as nothing */}
                    <span
                        className="pointer-events-none absolute -top-10 left-1/4 h-56 w-2/3 -translate-x-1/4 rounded-full bg-sec/20 blur-[90px]"
                        aria-hidden="true"
                    />

                    <div className="relative mb-8 flex items-center gap-5">
                        <h3 className="text-bg-sec dark:text-bg-sec-inverted text-3xl desktop-st:text-4xl font-bold leading-none">
                            Awards
                        </h3>
                        <span className="h-px flex-1 bg-linear-to-r from-sec-lg/40 to-transparent" aria-hidden="true" />
                    </div>

                    <div className="relative grid gap-5 desktop-st:grid-cols-2">
                        {awardData.map((award, i) => (
                            <AwardCard award={award} index={i} key={award.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

/*
 * Created on Sat Aug 15 2026
 *
 * Copyright (c) 2026 AFzal Saiyed
 */

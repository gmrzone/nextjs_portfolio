import { useRef } from "react";
import { NextPage } from "next";
import { IAwardData } from "../data";
import { useActivated } from "./motion";
import { useCardTilt } from "../../../hooks/useCardTilt";

const AwardCard: NextPage<{ award: IAwardData; index: number }> = ({ award, index }) => {
    const wrap = useRef<HTMLDivElement | null>(null);
    const active = useActivated(wrap, 0.5);
    // shared with the contact channels — one tilt implementation, not two
    const { ref: card, onMouseMove, onMouseLeave } = useCardTilt();

    return (
        <div
            ref={wrap}
            className={`transition-all duration-700 ease-out ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${index * 140}ms` }}>
            <div
                ref={card}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                className="award-card group relative overflow-hidden rounded-xl border border-bg-sec/20 bg-bg-sec/8 px-6 py-7 desktop-st:px-8 desktop-st:py-9 backdrop-blur-md">
                {/* highlight that follows the pointer */}
                <span className="sheen pointer-events-none absolute inset-0" aria-hidden="true" />
                {/* the year, oversized and ghosted, as the card's texture */}
                <span
                    className="pointer-events-none absolute -right-2 -bottom-8 text-[7rem] desktop-st:text-[9rem] font-bold leading-none text-bg-sec/5 select-none"
                    aria-hidden="true">
                    {award.year}
                </span>

                <div className="relative flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sec-lg/30 bg-sec/15">
                        <i className={`${award.icon} text-sec-lg`} aria-hidden="true" />
                    </span>
                    <span className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-sec-lg">{award.org}</span>
                        <span className="mt-1 text-xl desktop-st:text-2xl font-bold leading-tight text-bg-sec dark:text-bg-sec-inverted">
                            {award.title}
                        </span>
                    </span>
                </div>

                <style jsx>{`
                    .award-card {
                        --sheen: 0;
                        transform-style: preserve-3d;
                        /* short and separate from the wrapper's 700ms entrance, so the
                           tilt tracks the pointer instead of lagging behind it */
                        transition:
                            transform 150ms ease-out,
                            border-color 300ms ease-out;
                        will-change: transform;
                    }
                    .award-card:hover {
                        border-color: rgba(162, 219, 250, 0.45);
                    }
                    .sheen {
                        background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(232, 240, 242, 0.16), transparent 55%);
                        opacity: var(--sheen);
                        transition: opacity 250ms ease-out;
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .award-card {
                            transition: none;
                        }
                        .sheen {
                            display: none;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default AwardCard;

/*
 * Created on Sat Aug 15 2026
 *
 * Copyright (c) 2026 AFzal Saiyed
 */

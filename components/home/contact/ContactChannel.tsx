import { NextPage } from "next";
import { useCardTilt } from "../../../hooks/useCardTilt";

export interface IChannel {
    label: string;
    value: string;
    href: string | null;
    icon: string;
}

const CARD_CLASS =
    "tilt-card group relative flex items-center gap-4 overflow-hidden rounded-xl border border-white/70 dark:border-bg-sec-dark/40 bg-white/55 dark:bg-bg-sec-inverted/60 px-5 py-4 backdrop-blur-md shadow-sm";

const ContactChannel: NextPage<{ channel: IChannel }> = ({ channel }) => {
    // typed as the anchor so the same ref works for both branches
    const { ref, onMouseMove, onMouseLeave } = useCardTilt<HTMLAnchorElement>();

    const inner = (
        <>
            <span className="sheen pointer-events-none absolute inset-0" aria-hidden="true" />
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sec/10 dark:bg-blue-600/10 transition-colors duration-300 group-hover:bg-sec/20">
                <i className={`${channel.icon} text-2xl text-sec dark:text-blue-600`} aria-hidden="true" />
            </span>
            <span className="relative flex flex-col min-w-0">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-700">{channel.label}</span>
                <span className="mt-0.5 text-main dark:text-main-dark font-semibold truncate transition-colors duration-300 group-hover:text-sec dark:group-hover:text-blue-600">
                    {channel.value}
                </span>
            </span>
        </>
    );

    // The wrapper owns the scroll-in animation (ContactContext's observer toggles
    // its classes); the inner card owns the tilt, so the 500ms entrance can't
    // slow down pointer tracking.
    return (
        <div className="transform-gpu -translate-x-full opacity-0 transition-all duration-500 ease-in-out anim-container">
            {channel.href ? (
                <a
                    href={channel.href}
                    ref={ref}
                    onMouseMove={onMouseMove}
                    onMouseLeave={onMouseLeave}
                    className={`${CARD_CLASS} cursor-pointer`}>
                    {inner}
                </a>
            ) : (
                <div className={CARD_CLASS}>{inner}</div>
            )}

            <style jsx>{`
                .anim-container {
                    backface-visibility: hidden;
                    perspective: 1000;
                    will-change: transform;
                }
                .tilt-card {
                    --sheen: 0;
                    transform-style: preserve-3d;
                    transition:
                        transform 150ms ease-out,
                        border-color 300ms ease-out,
                        box-shadow 300ms ease-out;
                    will-change: transform;
                }
                .tilt-card:hover {
                    border-color: rgba(29, 161, 242, 0.5);
                    box-shadow: 0 10px 30px -12px rgba(5, 55, 66, 0.35);
                }
                .sheen {
                    background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.75), transparent 55%);
                    opacity: var(--sheen);
                    transition: opacity 250ms ease-out;
                }
                @media (prefers-reduced-motion: reduce) {
                    .tilt-card {
                        transition: none;
                    }
                    .sheen {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
};

export default ContactChannel;

/*
 * Created on Sat Aug 15 2026
 *
 * Copyright (c) 2026 AFzal Saiyed
 */

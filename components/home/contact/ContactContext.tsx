import { useEffect, useRef } from "react";
import { NextPage } from "next";
import ContactChannel, { IChannel } from "./ContactChannel";

// Phone and email were previously plain text — nothing to tap on a phone and
// nothing to click on a desktop. They are links now; the location is not,
// because there is no useful destination for it.
const CHANNELS: IChannel[] = [
    { label: "Phone", value: "+91 9220976696", href: "tel:+919220976696", icon: "fal fa-phone-alt" },
    { label: "Email", value: "saiyedafzalgz@gmail.com", href: "mailto:saiyedafzalgz@gmail.com", icon: "fal fa-envelope" },
    { label: "Location", value: "Mumbai, India", href: null, icon: "fal fa-map-marker-alt" },
];

const ContactContent: NextPage = () => {
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((x) => {
                    const target = x.target as HTMLDivElement;
                    if (x.isIntersecting) {
                        target.classList.remove("-translate-x-full");
                        target.classList.remove("opacity-0");
                        target.classList.add("translate-x-0");
                        target.classList.add("opacity-100");
                    } else {
                        target.classList.remove("translate-x-0");
                        target.classList.remove("opacity-100");
                        target.classList.add("-translate-x-full");
                        target.classList.add("opacity-0");
                    }
                });
            },
            { rootMargin: "0px 0px -70px 0px" },
        );

        if (container.current) {
            Array.from(container.current.children).forEach((x) => {
                observer.observe(x);
            });
        }
        return () => observer.disconnect();
    }, []);

    // desktop-st:pt-6 matches the 24px gutter each input reserves above itself for
    // its floating label (removing that gutter clips the label, since the input
    // container is overflow:hidden). Offsetting the cards instead lines the first
    // card up with the first input. Desktop only — the columns stack below that.
    return (
        <div className="relative w-full desktop-st:w-1/2 desktop-st:pr-10 desktop-st:pt-6 text-left">
            {/* soft accent glow so the cards' backdrop-blur has something to blur —
                over a flat background, frosted glass reads as nothing */}
            <span
                className="pointer-events-none absolute -top-8 left-0 h-52 w-4/5 rounded-full bg-sec/25 dark:bg-blue-600/20 blur-[80px]"
                aria-hidden="true"
            />
            <div className="relative flex flex-col gap-4" ref={container}>
                {CHANNELS.map((channel) => (
                    <ContactChannel channel={channel} key={channel.label} />
                ))}
            </div>
        </div>
    );
};

export default ContactContent;

/*
 * Created on Thu Jul 08 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

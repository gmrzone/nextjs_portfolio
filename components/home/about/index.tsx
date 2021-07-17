import AboutPhoto from "./AboutPhoto";
import AboutContent from "./AboutContent";
import { useEffect, useRef } from "react";
import SectionHeader from "../../common/SectionHeader";
const About = () => {
    const aboutContentRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const options = {
            rootMargin: "0px 0px -70px 0px",
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((x: IntersectionObserverEntry) => {
                if (x.isIntersecting) {
                    const target = x.target as HTMLDivElement
                    if (target.dataset.name === "photo") {
                        target.classList.remove("-translate-x-full");
                        target.classList.remove("opacity-0");
                        target.classList.add("translate-x-0");
                        target.classList.add("opacity-100");
                    } else if (target.dataset.name === "content") {
                        target.classList.remove("translate-x-full");
                        target.classList.remove("opacity-0");
                        target.classList.add("translate-x-0");
                        target.classList.add("opacity-100");
                    }
                    observer.unobserve(x.target);
                }
            });
        }, options);

        if (aboutContentRef.current){
            Array.from(aboutContentRef.current.children).forEach((x) => {
                observer.observe(x);
            });
        }
    }, []);
    return (
        <div className="mt-10 desktop-st:mt-16 overflow-x-hidden">
            <div className="container">
                <SectionHeader title="About" meta="My Introduction" inverted={false} />
                <div className="flex flex-col text-center desktop-st:flex-row desktop-st:text-left" ref={aboutContentRef}>
                    <AboutPhoto />
                    <AboutContent />
                </div>
            </div>
        </div>
    );
};

export default About;

/*
 * Created on Wed Jul 07 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

import AboutPhoto from "./AboutPhoto";
import AboutContent from "./AboutContent";
import { useEffect, useRef } from "react";
import SectionHeader from "../../common/SectionHeader";
const About = () => {
    const aboutContentRef = useRef();
    useEffect(() => {
        const options = {
            rootMargin: "0px 0px -70px 0px",
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((x) => {
                if (x.isIntersecting) {
                    if (x.target.dataset.name === "photo") {
                        x.target.classList.remove("-translate-x-full");
                        x.target.classList.remove("opacity-0");
                        x.target.classList.add("translate-x-0");
                        x.target.classList.add("opacity-100");
                    } else if (x.target.dataset.name === "content") {
                        x.target.classList.remove("translate-x-full");
                        x.target.classList.remove("opacity-0");
                        x.target.classList.add("translate-x-0");
                        x.target.classList.add("opacity-100");
                    }
                    observer.unobserve(x.target);
                }
            });
        }, options);

        Array.from(aboutContentRef.current.children).forEach((x) => {
            observer.observe(x);
        });
    }, []);
    return (
        <div className="mt-10 desktop-st:mt-16">
            <div className="container">
                <SectionHeader title="About" meta="My Introduction" />
                <div className="flex flex-col text-center desktop-st:flex-row desktop-st:text-left overflow-x-hidden md:overflow-x-auto" ref={aboutContentRef}>
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

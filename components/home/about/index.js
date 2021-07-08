import AboutPhoto from "./AboutPhoto";
import AboutContent from "./AboutContent";
import { useEffect, useRef } from "react";
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
        <div className="mt-6 desktop-st:mt-12">
            <div className="container">
                <h2 className="text-main text-center">About</h2>
                <span className="text-center block text-gray-500 font-semibold">My Introduction.</span>
                <div
                    className="flex flex-col text-center mt-6 desktop-st:mt-10 desktop-st:flex-row desktop-st:text-left"
                    ref={aboutContentRef}>
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

import { useEffect, useRef } from "react";
import { NextPage } from "next";
const ContactContent: NextPage = () => {
    const container = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const options = {
            rootMargin: "0px 0px -70px 0px",
        };
        const observer = new IntersectionObserver((entries) => {
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
        }, options);

        if (container.current) {
            Array.from(container.current.children).forEach((x) => {
                observer.observe(x);
            });
        }
    }, []);
    return (
        <div className="w-full space-y-4 desktop-st:space-y-8 desktop-st:pt-6 desktop-st:w-1/2 desktop-st:text-left" ref={container}>
            <div className="flex flex-nowrap space-x-2 items-center transform-gpu -translate-x-full opacity-0 transition-all duration-500 ease-in-out main-container">
                <i className="fal fa-phone-alt text-4xl text-sec dark:text-blue-600 w-16" />
                <div>
                    <h3 className="text-main dark:text-main-dark mb-1">Call Me</h3>
                    <span className="text-gray-500 dark:text-gray-600 font-semibold">9221018330</span>
                </div>
            </div>
            <div className="flex flex-nowrap space-x-2 items-center transform-gpu -translate-x-full opacity-0 transition-all duration-500 ease-in-out main-container">
                <i className="fal fa-envelope text-4xl text-sec dark:text-blue-600 w-16" />
                <div>
                    <h3 className="text-main mb-1">Email</h3>
                    <span className="text-gray-500 dark:text-gray-600 font-semibold">saiyedafzalgz@gmail.com</span>
                </div>
            </div>
            <div className="flex flex-nowrap space-x-2 items-center transform-gpu -translate-x-full opacity-0 transition-all duration-500 ease-in-out main-container">
                <i className="fal fa-map-marker-alt text-4xl text-sec dark:text-blue-600 w-16"></i>
                <div>
                    <h3 className="text-main mb-1">Location</h3>
                    <span className="text-gray-500 dark:text-gray-600 font-semibold">Mumbai/Maharashtra</span>
                </div>
            </div>
            <style jsx>{`
                .main-container {
                    backface-visibility: hidden;
                    perspective: 1000;
                    will-change: transform;
                }
            
            `}</style>
        </div>
    );
};

export default ContactContent;

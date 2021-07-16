import Image from "next/image";
import { useEffect, useRef } from "react";
import ResponsiveLink from "../../common/ResponsiveLink";

const ProjectItem = ({ item, openProjectModal }) => {
    const projectRef = useRef();
    const projectText = useRef();

    useEffect(() => {
        const options = {
            rootMargin: "0px 0px -25px 0px",
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((x) => {
                if (x.isIntersecting) {
                    x.target.classList.remove("after:translate-x-0");
                    x.target.classList.add("after:translate-x-full");
                    x.target.classList.add("after:left-1");
                    observer.unobserve(x.target);
                }
            });
        }, options);
        observer.observe(projectRef.current);
        observer.observe(projectText.current);
    }, []);
    const openItemModal = () => {
        openProjectModal(item);
    };
    return (
        <div
            className="group rounded-lg overflow-hidden shadow-md cursor-pointer relative after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:bg-gradient-to-r after:from-main after:to-sec dark:after:from-main-dark dark:after:to-sec-dark after:translate-x-0 after:transition-transform after:duration-500 after:opacity-95"
            ref={projectRef}
            onClick={() => openProjectModal(item)}>
            <div className="relative after:hidden desktop-st:after:block after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-main dark:after:bg-sec-dark dark:after:opacity-90 z-0 after:bg-opacity-90 after:-translate-x-full after:transition-transform after:duration-300 group-hover:after:translate-x-0">
                <Image alt="project_image" src={item.main_image} layout="intrinsic" width={600} height={296} placeholder="blur" />
                <div className="absolute hidden desktop-st:inline-block desktop-st:bottom-0 desktop-st:right-full desktop-st:top-auto desktop-st:mb-8 desktop-st:mr-8 desktop-st:z-10 desktop-st:transition-all desktop-st:duration-300 desktop-st:group-hover:right-0">
                    <ResponsiveLink title="Detail" icon="far fa-info-square text-sm" action={openItemModal} />
                </div>
                <div className="absolute hidden desktop-st:block z-10 text-center top-1/3 w-full px-4 desktop-st:transition-transform duration-300 desktop-st:-translate-x-full group-hover:translate-x-0">
                    <p className="text-bg-sec dark:text-bg-sec-inverted w-full text-lg font-semibold">{item.about}</p>
                </div>
            </div>
            <div className="text-center bg-white dark:bg-bg-sec-inverted transition-colors duration-300 p-2 desktop-st:group-hover:before:left-0 desktop-st:group-hover:before:translate-x-0 desktop-st:relative before:hidden desktop-st:before:block before:absolute before:w-full before:h-full before:bg-sec dark:before:bg-sec-dark before:top-0 before:-left-1 before:-translate-x-full before:transition-transform before:duration-300">
                <p
                    className="text-main dark:text-main-dark desktop-st:group-hover:text-white transition-colors duration-300 inline-block font-semibold overflow-hidden text-sm desktop-st:text-lg relative after:absolute after:top-0 after:h-full after:w-full after:bg-sec dark:after:bg-sec-dark after:left-0 after:translate-x-0 after:transition-transform after:duration-500"
                    ref={projectText}>
                    {item.name}
                </p>
            </div>
        </div>
    );
};

export default ProjectItem;

/*
 * Created on Tue Jul 13 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

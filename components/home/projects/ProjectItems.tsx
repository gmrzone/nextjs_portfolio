import { ProjectData, IProjectData } from "../data";
import ProjectItem from "./ProjectItem";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";

interface IState {
    active: boolean;
    activeItem: IProjectData | null;
}

const ProjectModal = dynamic(() => import("./ProjectDetailModal"), { ssr: false });
const ProjectItems: NextPage = () => {
    const mainContainerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const options = {
            rootMargin: "0px 0px -25px 0px",
        };
        const observer = new IntersectionObserver((entries, observe) => {
            entries.forEach((x) => {
                if (x.isIntersecting) {
                    x.target.classList.remove("after:translate-x-0");
                    x.target.classList.add("after:translate-x-full");
                    x.target.classList.add("after:left-1");
                    observer.unobserve(x.target);
                }
            });
        }, options);
        if (mainContainerRef.current) {
            Array.from(mainContainerRef.current.children).forEach((x) => {
                observer.observe(x);
                const projectText = x.lastChild?.firstChild as HTMLElement;
                if (projectText) {
                    observer.observe(projectText);
                }
            });
        }
    }, []);
    const [modalActive, setModalActive] = useState<IState>({ active: false, activeItem: null });

    const openProjectModal: (item: IProjectData) => void = (item) => {
        setModalActive({ active: true, activeItem: item });
    };
    const closeProjectModal = () => {
        setModalActive((s) => {
            return { ...s, active: false };
        });
    };
    const renderItems = ProjectData.map((x) => {
        return <ProjectItem key={x.id} item={x} openProjectModal={openProjectModal} />;
    });
    return (
        <div className="grid gap-x-8 gap-y-12 grid-cols-1 desktop-st:grid-cols-2" ref={mainContainerRef}>
            <ProjectModal active={modalActive.active} activeItem={modalActive.activeItem} closeModal={closeProjectModal} />
            {renderItems}
        </div>
    );
};

export default ProjectItems;

/*
 * Created on Tue Jul 13 2021
 *
 * Copyright (c) 2021 AFzal Saiyed
 */

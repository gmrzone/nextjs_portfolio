import { ProjectData, IProjectData } from "../data";
import ProjectItem from "./ProjectItem";
import { useState } from "react";
import dynamic from "next/dynamic";
import {NextPage} from 'next'

interface IState {
    active: boolean,
    activeItem: IProjectData | null
}

const ProjectModal = dynamic(() => import("./ProjectDetailModal"), { ssr: false });
const ProjectItems: NextPage = () => {
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
        <div className="grid gap-x-8 gap-y-12 grid-cols-1 desktop-st:grid-cols-2">
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

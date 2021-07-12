import { ProjectData } from '../data'
import ProjectItem from './ProjectItem';
import { useState } from 'react'
import dynamic from 'next/dynamic'

const ProjectModal = dynamic(() => import('./ProjectDetailModal'), {ssr: false})
const ProjectItems = () => {
    const [modalActive, setModalActive] = useState({active: false, activeItem: null})
    const openProjectModal = (item) => {
        setModalActive({active: true, activeItem: item})
    }
    const closeProjectModal = () => {
        setModalActive({active: false, activeItem: null})
    }
    const renderItems = ProjectData.map(x => {
        return (
            <ProjectItem key={x.id} item={x} openProjectModal={openProjectModal}/>
        )
    })
    return (
        <div className="grid gap-x-8 gap-y-12 grid-cols-1 desktop-st:grid-cols-2">
            <ProjectModal active={modalActive.active} activeItem={modalActive.activeItem} closeModal={closeProjectModal}/>
            {renderItems}
        </div>
    )
}

export default ProjectItems
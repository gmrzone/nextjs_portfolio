import { ProjectData } from '../data'
import ProjectItem from './ProjectItem'
const ProjectItems = () => {
    const renderItems = ProjectData.map(x => {
        return (
            <ProjectItem key={x.id} item={x} />
        )
    })
    return (
        <div className="grid gap-x-8 gap-y-12 grid-cols-1 desktop-st:grid-cols-2">
            {renderItems}
        </div>
    )
}

export default ProjectItems
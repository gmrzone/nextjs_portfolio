import SectionHeader from "../../common/SectionHeader";
import ProjectItems from "./ProjectItems";
const ProjectSection = () => {
    return (
        <div className="mt-10 desktop-st:mt-16">
            <div className="container">
                <SectionHeader title="Latest Work" meta="My recent projects" inverted={false}/>
                <div className="flex flex-col text-center desktop-st:flex-row desktop-st:text-left">
                    <ProjectItems />
                </div>
            </div>
        </div>
    );
};
export default ProjectSection;

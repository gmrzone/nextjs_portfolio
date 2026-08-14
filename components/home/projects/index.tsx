import SectionHeader from "../../common/SectionHeader";
import ProjectItems from "./ProjectItems";
import { NextPage } from "next";
const ProjectSection: NextPage = () => {
    return (
        <div className="mt-10 desktop-st:mt-16" id="projects">
            <div className="container">
                <SectionHeader title="Personal Projects" meta="Things I've built outside of work" inverted={false} />
                <div className="flex flex-col text-center desktop-st:flex-row desktop-st:text-left">
                    <ProjectItems />
                </div>
            </div>
        </div>
    );
};
export default ProjectSection;

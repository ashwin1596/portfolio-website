import {myProjects} from "../constants/index.js";
import ProjectCard from "./ProjectCard.jsx";

const ProjectGrid = () => {
    return (
        <div className="container mx-auto px-6 pt-20" id="projects">
            <h2 className="text-3xl font-bold text-white text-center mb-8">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {myProjects.map((project, index) => (
                    <ProjectCard key={index} {...project}/>
                ))}
            </div>
        </div>
    )
}
export default ProjectGrid

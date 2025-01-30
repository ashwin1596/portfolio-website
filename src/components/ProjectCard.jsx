const ProjectCard = ({title, desc, image, link, tags, spotlight}) => {
    return (
        <div className="">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg"/>
            <h3 className="text-xl font-semibold text-white mt-3">{title}</h3>
            <p className="text-gray-400 text-sm mt-2 text-justify">{desc}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-blue-400 hover:text-blue-300">
                View Project
            </a>
            <div className="flex items-center gap-3">
                {tags.map((tag, index) => (
                    <div key={index} className="tech-logo">
                        <img src={tag.path} alt={tag.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProjectCard

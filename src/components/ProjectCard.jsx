const ProjectCard = ({title, desc, image, link, tags, spotlight}) => {
    return (
        <div className="grid-container p-5 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between h-full">
            <img src={image} alt={title} className="w-full h-48 object-cover items-center rounded-lg"/>
            <h3 className="text-xl font-semibold text-white mt-3">{title}</h3>
            <p className="text-gray-400 text-sm mt-2 text-justify">{desc}</p>

            <div className="flex items-center gap-3">
                {tags.map((tag, index) => (
                    <div key={index} className="tech-logo">
                        <img src={tag.path} alt={tag.name}/>
                    </div>
                ))}
            </div>

            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer"
                   className="flex flex-row items-center mt-3 inline-block text-blue-400 hover:text-blue-300">
                    <img src="/myassets/github_logo.svg" className="tech-logo"/>
                    {"View Code"}
                </a>
            )}
        </div>
    )
}
export default ProjectCard

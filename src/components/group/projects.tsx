const projectData = [
    {name: "ToolBird", description: "The all-in-one toolbox for SaaS developers to get better overview and save time", image:"/projects/toolbird.webp", link:"/group/projects/toolbird"},
]

export default function Projects() {
    return (
        <section className="mb-24">
            <div className="w-[94%] mx-auto flex flex-col gap-6">
                {projectData.map((v, index) => <ProjectCard key={v} Obj={v} />)}
            </div>
        </section>
    )
}

function ProjectCard(props:any) {
    return (
        <div className="bg-[url(/projects/toolbird.svg)] bg-center bg-cover min-h-[70vh] rounded-xl p-10 text-white flex flex-col justify-end">
            <h1 className="text-5xl font-[300] mb-3">{props.Obj.name}</h1>
            <p className="font-[200] text-xl">{props.Obj.description}</p>
        </div>
    )
}
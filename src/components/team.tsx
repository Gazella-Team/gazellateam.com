const teamData = [
    {name:"Lasse Osmann", title:"Founder", image:"/team/lasseosmann.webp", linkedIn:"https://www.linkedin.com/in/lasse-%F0%9F%8D%89-osmann-1b6ab9243/"},
    {name:"Lasse Osmann", title:"Founder", image:"/team/simonmaribo.webp", linkedIn:"https://www.linkedin.com/in/lasse-%F0%9F%8D%89-osmann-1b6ab9243/"},
    {name:"Lasse Osmann", title:"Founder", image:"/team/lasseosmann.webp", linkedIn:"https://www.linkedin.com/in/lasse-%F0%9F%8D%89-osmann-1b6ab9243/"},
    {name:"Lasse Osmann", title:"Founder", image:"/team/simonmaribo.webp", linkedIn:"https://www.linkedin.com/in/lasse-%F0%9F%8D%89-osmann-1b6ab9243/"},
]

export default function Team() {
    return (
        <section className="pb-24">
            <div className="w-[94%] gap-6 mx-auto max-w-[1300px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {teamData.map((v, index) => <TeamMemberCard Obj={v} />)}
            </div>
        </section>
    )
}

function TeamMemberCard(props:any) {
    return (
        <div className="flex flex-col gap-6">
            <img className="rounded-xl" src={props.Obj.image}></img>
            <div>
                <h2 className="font-[300]">{props.Obj.name}</h2>
                <p className="font-[200]">{props.Obj.title}</p>
            </div>
        </div>
    )
}
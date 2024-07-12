import { useState } from "react"
import { Reveal } from "./Animations/Reveal"
import Link from "next/link"

const teamData = [
    {name:"Lasse Osmann", title:"Founder & Developer", image:"/team/lasseosmann.webp", linkedIn:"https://www.linkedin.com/in/lasse-%F0%9F%8D%89-osmann-1b6ab9243/", funImage:"/team/lasseosmann02.webp"},
    {name:"Simon Maribo", title:"Co-Founder & Developer", image:"/team/simonmaribo.webp", linkedIn:"https://www.linkedin.com/in/simonmaribo/", funImage:"/team/simonmaribo02.webp"},
    {name:"Mik Lønborg", title:"Head of Sales", image:"/team/miklonborg.webp", linkedIn:"https://www.linkedin.com/in/mik-l%C3%B8nborg/", funImage:"/team/miklonborg02.webp"},
    {name:"Frederik Ferdinand", title:"Backend Lead", image:"/team/emptymember.webp", linkedIn:"https://www.linkedin.com/in/frederik-ferdinand-947011207/", funImage:"/team/emptymember.webp"},
    {name:"Malte Pedersen", title:"Lead Manager", image:"/team/emptymember.webp", linkedIn:"https://www.linkedin.com/in/malte-pedersen-2689772ab/", funImage:"/team/emptymember.webp"},
]

export default function Team() {
    return (
        <section className="pb-24">
            <div className="w-[94%] gap-6 gap-y-12 mx-auto max-w-[1300px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {teamData.map((v, index) => <TeamMemberCard key={v} Obj={v} />)}
            </div>
        </section>
    )
}

function TeamMemberCard(props:any) {
    const [imageHovered, setImageHovered] = useState(false)
    return (
        <Reveal>
            <Link target="_blank" href={props.Obj.linkedIn} className="flex flex-col gap-6">
                <img onMouseEnter={() => setImageHovered(true)} onMouseLeave={() => setImageHovered(false)}  className="transition-all" src={imageHovered ? props.Obj.image:props.Obj.image}></img>
                <div>
                    <h2 className="font-[300]">{props.Obj.name}</h2>
                    <p className="font-[200] text-sm text-gray-600">{props.Obj.title}</p>
                </div>
            </Link>
        </Reveal>
    )
}
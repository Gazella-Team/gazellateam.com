import Link from "next/link"
import { Reveal } from "./Animations/Reveal"
import { url } from "inspector"

const caseDataFirst = [
    {heading:"Toolbird", domain:"toolbird.io", description: "Seamless platform for slot bidding for minecraft servers", image:"/blog-images/how-much-does-an-app-cost/main.webp", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/toolbird.webp", link:"/minecraft-buzz-auctions"},
]


export default function Cases() {
    return (
        <section>
            <div className="w-[94%] max-w-[1300px] pb-24 gap-16 mx-auto">
                <div className="flex flex-col gap-20 grid grid-cols-2">
                    {caseDataFirst.map((v, index) => <CaseCard Obj={v} />)}
                </div>
            </div>
        </section>
    )
}

function CaseCard(props:any) {
    return (
        <Link href={props.Obj.link}>
            <div className="flex flex-col gap-8">
                <img className="h-[560px] object-cover" src={props.Obj.image}></img>
                <div className="absolute m-8 bg-gray-200 rounded-full p-1 px-5">
                    <h2 className="text-lg paragraph">{props.Obj.heading}</h2>
                </div>
            </div>
        </Link>
    )
}
import Link from "next/link"
import { Reveal } from "./Animations/Reveal"
import { url } from "inspector"

const caseDataFirst = [
    {heading:"Toolbird", domain:"toolbird.io", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/test.webp", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/toolbird.webp", link:"/minecraft-buzz-auctions"},
]

const caseDataSecond = [
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/toolbird.webp", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/test.webp", link:"/minecraft-buzz-auctions"},
]

export default function Cases() {
    return (
        <section>
            <div className="w-[94%] pb-24 gap-16 mx-auto flex justify-between max-w-[1000px]">
                <div className="flex flex-col gap-20">
                    {caseDataFirst.map((v, index) => <CaseCard Obj={v} />)}
                </div>
                <div className="flex flex-col gap-20 mt-40">
                    {caseDataSecond.map((v, index) => <CaseCard Obj={v} />)}
                </div>
            </div>
        </section>
    )
}

function CaseCard(props:any) {
    return (
        <Link href={props.Obj.link}>
            <div className="flex flex-col gap-8">
                <img className="min-h-[560px]" src={props.Obj.image}></img>
                <div className="flex flex-col gap-2">
                    <p className="text-gray-400 font-[200] text-xl">toolbird.io</p>
                    <h2 className="text-3xl">{props.Obj.heading}</h2>
                </div>
            </div>
        </Link>
    )
}
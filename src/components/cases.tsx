import Link from "next/link"
import { Reveal } from "./Animations/Reveal"
import { url } from "inspector"

const caseDataFirst = [
    {heading:"Toolbird", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/test.webp", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/toolbird.webp", link:"/minecraft-buzz-auctions"},
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak.png", link:"/minecraft-buzz-auctions"},
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/test.webp", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak2.png", link:"/minecraft-buzz-auctions"},
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak.png", link:"/minecraft-buzz-auctions"},
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/test.webp", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak2.png", link:"/minecraft-buzz-auctions"},
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak.png", link:"/minecraft-buzz-auctions"},
]

const caseDataSecond = [
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/test.webp", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/toolbird.webp", link:"/minecraft-buzz-auctions"},
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak.png", link:"/minecraft-buzz-auctions"},
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/test.webp", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak2.png", link:"/minecraft-buzz-auctions"},
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak.png", link:"/minecraft-buzz-auctions"},
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/test.webp", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak2.png", link:"/minecraft-buzz-auctions"},
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak.png", link:"/minecraft-buzz-auctions"},
]

export default function Cases() {
    return (
        <section>
            <div className="w-[94%] pb-24 gap-10 mx-auto flex justify-between max-w-[900px]">
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
                <img className="min-h-[560px]" src="/cases/toolbird.webp"></img>
                <div>
                    <h2 className="text-2xl">{props.Obj.heading}</h2>
                </div>
            </div>
        </Link>
    )
}
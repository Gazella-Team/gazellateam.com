import Link from "next/link"
import { Reveal } from "./Animations/Reveal"

const caseData = [
    {heading:"Minecraft Buzz Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak2.png", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Buzz Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak2.png", link:"/minecraft-buzz-auctions"},
]

export default function Cases() {
    return (
        <section className="pb-24">
            <div className="w-[94%] gap-6 mx-auto max-w-[1300px] grid md:grid-cols-1 xl:grid-cols-2">
                {caseData.map((v, index) => <CaseCard key={v.heading} Obj={v} />)}
            </div>
        </section>
    )
}

function CaseCard(props:any) {
    return (
        <Link href={props.Obj.link}>
            <div className="bg-center bg-cover min-h-[500px] rounded-xl p-10 text-white flex flex-col justify-end" style={{backgroundImage: `linear-gradient(to top, rgba(5, 29, 64, 1), rgba(5, 29, 64, 0)), url(/work.png)`}}>
                <h1 className="text-xl mb-4">{props.Obj.heading}</h1>
                <p className="font-[200]">Vi er et ungt og nørdet team specialiseret i engagerende contentproduktion, raffineret webudvikling</p>
            </div>
        </Link>
    )
}
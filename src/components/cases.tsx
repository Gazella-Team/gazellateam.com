import Link from "next/link"
import { Reveal } from "./Animations/Reveal"

const caseData = [
    {heading:"Minecraft Buzz Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak.png", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Buzz Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak2.png", link:"/minecraft-buzz-auctions"},
]

export default function Cases() {
    return (
        <section>
            <div className="w-[94%] gap-6 mx-auto max-w-[1300px]">
                {caseData.map((v, index) => <CaseCard key={v.heading} Obj={v} />)}
            </div>
        </section>
    )
}

function CaseCard(props:any) {
    return (
        <Link href={props.Obj.link}>
            <div className="bg-center bg-cover rounded-xl border text-white flex flex-col justify-end">
                <div className="bg-white text-main p-10 rounded-xl">
                    <h1 className="text-xl mb-4">{props.Obj.heading}</h1>
                    <p className="font-[200]">Vi er et ungt og nørdet team specialiseret i engagerende contentproduktion, raffineret webudvikling</p>
                </div>
            </div>
        </Link>
    )
}
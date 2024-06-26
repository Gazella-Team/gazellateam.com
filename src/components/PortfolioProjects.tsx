import Link from "next/link"
import { Reveal } from "./Animations/Reveal"
import { url } from "inspector"

const portfolioData = [
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/portfolio/toolbird.webp", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Buzz Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak2.png", link:"/minecraft-buzz-auctions"},
    {heading:"coad.dk", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak.png", link:"/minecraft-buzz-auctions"},
]

export default function PortfolioProjects() {
    return (
        <section>
            <div className="w-[94%] pb-24 gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[1300px]">
                {portfolioData.map((v, index) => <PortfolioCard key={v.heading} Obj={v} />)}
            </div>
        </section>
    )
}

function PortfolioCard(props:any) {
    return (
        <Link href={props.Obj.link}>
            <div className={`bg-center bg-[url(/portfolio/toolbird.webp)] rounded-3xl bg-cover min-h-[500px] text-white flex flex-col justify-between?`}>
            </div>
        </Link>
    )
}
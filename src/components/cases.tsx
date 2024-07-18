import Link from "next/link"
import { Reveal } from "./Animations/Reveal"
import { url } from "inspector"
import { cn } from "@/helpers/utils"

const caseDataFirst = [
    {heading:"Toolbird", domain:"toolbird.io", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/toolbird.webp", link:"/minecraft-buzz-auctions"},
    {heading:"Minecraft Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/blog-images/how-much-does-an-app-cost/main.webp", link:"/minecraft-buzz-auctions"},
]


export default function Cases() {
    return (
        <section>
            <div className="w-[94%] max-w-[1300px] pb-24 gap-16 mx-auto">
                <Reveal>
						<div className="mt-8 mb-10 flex justify-end">
							<div className="bg-white shadow-sm border w-full sm:w-fit border-gray-600/10 paragraph rounded-3xl sm:rounded-full px-3 py-2 flex flex-col sm:flex-row gap-2">
                                <Link
                                href={"/"}
								className={cn(
									'text-sm cursor-pointer font-medium px-3 py-1.5 rounded-full text-gray-500 hover:text-gray-800 hover:bg-slate-50',
									)}
									>
									Hjemmeside
								</Link>
                                <Link
                                href={"/"}
								className={cn(
									'text-sm cursor-pointer font-medium px-3 py-1.5 rounded-full text-gray-500 hover:text-gray-800 hover:bg-slate-50',
									)}
									>
									App udvikling
								</Link>
                                <Link
                                href={"/"}
								className={cn(
									'text-sm cursor-pointer font-medium px-3 py-1.5 rounded-full text-gray-500 hover:text-gray-800 hover:bg-slate-50',
									)}
									>
									Design og brugeroplevelse
								</Link>
							</div>
						</div>
					</Reveal>
                <div className="flex flex-col gap-20 grid grid-cols-2">
                    {caseDataFirst.map((v, index) => <CaseCard key={index} Obj={v} />)}
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
                <div className="absolute m-8 bg-white border border-gray-600/20 rounded-full p-1 px-5">
                    <h2 className="text-lg paragraph">{props.Obj.heading}</h2>
                </div>
            </div>
        </Link>
    )
}
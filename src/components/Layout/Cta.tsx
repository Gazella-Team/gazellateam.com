import { ArrowUpRight } from "lucide-react";
import EstimateSheet from "../modals/EstimateSheet";
import Link from "next/link";

export default function Cta() {
    return (
        <>
        <section className="hidden md:block pt-24">
            <div className="w-[90%] p-12 xl:p-20 max-w-[1400px] mx-auto min-h-[500px] bg-main text-white flex items-center xl:grid grid-cols-2">
                <div className="flex flex-col gap-6 justify-center">
                    <h1 className="font-semibold text-5xl">Har du en ide til en hjemmeside eller app?</h1>
                    <p className="text-xl xl:max-w-md text-gray-200">Vi tilbyder dig en gratis og uforpligtende snak med sparing, ideer og rådgivning i relation til din nuværende eller kommende software.</p>
                    <div className="flex items-center mt-5 gap-3">
                        <EstimateSheet>
							<div className="flex text-sm cursor-pointer bg-white text-main px-5 py-2 rounded-full font-semibold">
								<p>Få et gratis prisestimat</p>
								<ArrowUpRight size={16} />
							</div>
						</EstimateSheet>
                        <Link className="flex text-sm cursor-pointer bg-white text-main px-5 py-2 rounded-full font-semibold" href={"/kontakt"}>
                            Kontakt os
                        </Link>
                    </div>
                </div>
                <div className="hidden xl:flex items-center justify-center">
                    <img className="w-[400px]" src="/team/collectedteam.png"></img>
                </div>
            </div>
        </section>
        <section className="block md:hidden pt-24">
            <div className="w-[90%] max-w-[1400px] mx-auto text-main">
                <div className="flex flex-col gap-6 justify-center">
                    <h1 className="font-semibold text-4xl">Har du en ide til en hjemmeside eller app?</h1>
                    <p className="text-xl xl:max-w-md text-main font-light">Vi tilbyder dig en gratis og uforpligtende snak med sparing, ideer og rådgivning i relation til din nuværende eller kommende software.</p>
                    <div className="flex items-center mt-5 gap-3">
                        <EstimateSheet>
							<div className="flex text-sm cursor-pointer bg-main text-white px-5 py-2 rounded-full font-semibold">
								<p>Få et gratis prisestimat</p>
								<ArrowUpRight size={16} />
							</div>
						</EstimateSheet>
                        <Link className="flex text-sm cursor-pointer bg-main text-white px-5 py-2 rounded-full font-semibold" href={"/kontakt"}>
                            Kontakt os
                        </Link>
                    </div>
                </div>
                <div className="hidden xl:flex items-center justify-center">
                    <img className="w-[400px]" src="/team/collectedteam.png"></img>
                </div>
            </div>
        </section>
        </>
    )
}
import { Check, Users } from "lucide-react"
import { Reveal } from "./Animations/Reveal"
import CountdownTimer from "./countdown"
import Link from "next/link"


export default function Hero() {
    return (
        <section className="py-[100px]">
            <div className="w-[90%] mx-auto max-w-[660px]">
                <Reveal>
                    <div className="flex items-center max-w-[1300px] mx-auto mb-[40px]">
                        <div className="bg-white rounded-full p-[4px]">
                            <img className="w-[50px] rounded-full" src="/team/lasseosmann.webp"></img>
                        </div>
                        <div className="bg-white rounded-full p-[4px] ml-[-20px]">
                            <img className="w-[50px] rounded-full" src="/team/simonmaribo.webp"></img>
                        </div>
                        <div className="bg-white rounded-full p-[4px] ml-[-20px]">
                            <img className="w-[50px] rounded-full" src="/team/miklonborg.webp"></img>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <h1 className="font-[300] text-5xl leading-[110%] mb-[50px] sm:text-[54px] ">Premium offer: Get a free SEO analysis of your website</h1>
                </Reveal>
                <Reveal>
                    <div className="border rounded-xl px-2 py-1 inline-block mb-10 sm:rounded-full">
                        <div className="flex flex-col items-left gap-2 font-[200] text-sm sm:flex-row sm:items-center">
                            <div className="flex items-center gap-2">
                                <Users size={18} />
                                <p>15 spots left</p>
                            </div>
                            <p className="hidden sm:flex">|</p>
                            <CountdownTimer />
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <p className="font-[200] text-[18px] text-gray-600">Search Engine Optimization (SEO) is essential for any business seeking organic leads and customers. With the correct setup, your business is likely to get more customers and acquire a more recognizable brand over time. We have made a limited offer, where we offer 15 ambitious companies a free seo analysis including:</p>
                </Reveal>
                <Reveal>
                    <div className="my-14 grid grid-cols-2 font-[300] max-w-[450px] gap-x-10 gap-y-4">
                        <div className="flex items-center gap-2">
                            <Check />
                            <h2>Website Audit</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check />
                            <h2>Keyword Research</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check />
                            <h2>Competitor Analysis</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check />
                            <h2>Improvement plan</h2>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <p className="font-[200] text-[18px] text-gray-600">Over the span of 7 days, we will look into your current SEO-setup, find points to optimize, and conclude with a complete report, on how you and your business can get more organic leads and conversions on your website over time. Spots are limited.</p>
                </Reveal>
                <Reveal>
                    <div className="flex items-center gap-3 mt-14">
                        <Link className="bg-main border-[3px] border-main text-white px-4 py-3 rounded-full text-sm font-[300]" href={"https://cal.com/lasseosmann/request-a-free-seo-analysis"}>
                            Request now
                        </Link>
                        <Link target="_blank" className="bg-transparent border-[3px] border-main text-main px-4 py-3 rounded-full text-sm font-[300] hover:bg-main hover:text-white transition-all" href={"https://gazellateam.com/"}>
                            Visit Gazella Team
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>

    )
}

//
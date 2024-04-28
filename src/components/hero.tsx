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
                    <p className="font-[200] text-[18px] text-gray-600">Tiny Rhino is a technical product agency that has been at the forefront of innovation for over 7 years. We are proud to have delivered many innovate solutions to a range of clients from a variety of industries, driven by a passion for new and innovative technology</p>
                </Reveal>
                <Reveal>
                    <div className="my-14 grid grid-cols-2 font-[300] max-w-[320px] gap-x-10 gap-y-4">
                        <div className="flex items-center gap-2">
                            <Check />
                            <h2>360 analysis</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check />
                            <h2>360 analysis</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check />
                            <h2>360 analysis</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check />
                            <h2>360 analysis</h2>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <p className="font-[200] text-[18px] text-gray-600">Tiny Rhino is a technical product agency that has been at the forefront of innovation for over 7 years. We are proud to have delivered many innovate solutions to a range of clients from a variety of industries, driven by a passion for new and innovative technology<br></br><br></br>Tiny Rhino is a technical product agency that has been at the forefront of innovation for over 7 years. We are proud to have delivered many innovate solutions to a range of clients from a variety of industries, driven by a passion for new and innovative technology</p>
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
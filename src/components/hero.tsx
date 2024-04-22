import { CheckCircle, Users } from "lucide-react";
import { Reveal } from "./Animations/Reveal";
import TpWidget from "./TpWidget";
import Countdown from "./countdown";
import Link from "next/link";

export default function Hero() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    return (
        <section className="grid grid-cols-2 overflow-y-auto">
            <div className="w-[90%] mx-auto max-w-[600px] py-20 overflow-y-auto">
                <Reveal>
                    <div className="border rounded-full px-2 py-1 inline-block mb-6">
                        <div className="flex items-center gap-2 font-[200] text-sm">
                            <Users size={18} />
                            <p>9 spots left</p>
                            <p>|</p>
                            <p className="bg-main rounded-full text-white px-2">21d 13t 24m 34s</p>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <h1 className="text-[54px] font-[300] leading-[110%] mb-[30px]">Claim access to a free SEO analysis</h1>
                </Reveal>
                <Reveal>
                <p className="font-[200] text-[18px] text-gray-600">Tiny Rhino is a technical product agency that has been at the forefront of innovation for over 7 years. We are proud to have delivered many innovate solutions to a range of clients</p>
                </Reveal>
                <Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 my-14 gap-6 justify-start max-w-[450px]">
                        <div className="flex items-center gap-2 font-[300]">
                            <CheckCircle />
                            <h3>Complete analysis</h3>
                        </div>
                        <div className="flex items-center gap-2 font-[300]">
                            <CheckCircle />
                            <h3>Complete analysis</h3>
                        </div>
                        <div className="flex items-center gap-2 font-[300]">
                            <CheckCircle />
                            <h3>Complete analysis</h3>
                        </div>
                        <div className="flex items-center gap-2 font-[300]">
                            <CheckCircle />
                            <h3>Complete analysis</h3>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <p className="font-[200] text-[18px] text-gray-600 mb-10">
                        Tiny Rhino is a technical product agency that 
                    </p>
                </Reveal>
                <div className="flex items-center gap-2 mt-4 font-[200]">
                    <Link className="bg-main text-white px-4 py-3 text-sm rounded-full" href={"/"}>Claim your spot</Link>
                    <Link className="bg-main text-white px-4 py-3 text-sm rounded-full" href={"/"}>Learn more</Link>
                </div>
            </div>
            <img src="/bg.webp" className="object-cover h-full rounded-tl-3xl"></img>
        </section>

    )
}
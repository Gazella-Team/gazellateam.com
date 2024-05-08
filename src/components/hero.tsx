import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import TpWidget from "./TpWidget";
import ServiceSlider from "./service-slider";

export default function Hero() {
    return (
        <section className="py-[60px] bg-[url(/bgs/line.svg)] bg-cover bg-center">
            <div className="w-[90%] mx-auto max-w-[1160px] grid grid-cols-1 md:grid-cols-2">
                <div>
                    <Reveal>
                        <TpWidget />
                    </Reveal>
                    <Reveal>
                        <h1 className="text-7xl font-[300] leading-[110%] mb-[20px]">Custom software development for companies</h1>
                    </Reveal>
                    <Reveal>
                        <p className="text-xl text-gray-600 font-[200] leading-[150%] mb-[50px]">We help companies of all sizes sell more, build worlflows and launch innovative ideas through tailormade software development.</p>
                    </Reveal>
                    <Reveal>
                        <div className="flex items-center gap-4 mb-[60px]">
                            <Link className="bg-main text-white rounded-full px-7 py-2 text-sm font-[300] border-2 border-main" href={"/contact"}>Contact us</Link>
                            <Link className="bg-white text-main rounded-full px-7 py-2 text-sm font-[300] border-2 border-main hover:bg-main hover:text-white transition-all" href={"/contact"}>Learn more</Link>
                        </div>
                    </Reveal>
                </div>
            </div>
            <ServiceSlider />
        </section>

    )
}
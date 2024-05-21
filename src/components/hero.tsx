import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import TpWidget from "./TpWidget";
import ServiceSlider from "./service-slider";
import VideoPlayer from "./video";

export default function Hero() {
    return (
        <section className="py-[60px] bg-[url(/bgs/line.svg)] bg-cover bg-center">
            <div className="w-[90%] mx-auto max-w-3xl xl:max-w-[1360px] flex flex-col xl:gap-10 xl:flex-row xl:items-center justify-between">
                <div>
                    <Reveal>
                        <TpWidget />
                    </Reveal>
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl font-[300] leading-[110%] max-w-[500px] mb-[20px]">Custom software development for companies</h1>
                    </Reveal>
                    <Reveal>
                        <p className="text-lg md:text-xl text-gray-600 font-[200] max-w-[500px] leading-[150%] mb-[50px]">We help companies of all sizes sell more, build worlflows and launch innovative ideas through tailormade software development.</p>
                    </Reveal>
                    <Reveal>
                        <div className="flex items-center gap-4 mb-[60px]">
                            <Link className="bg-main text-white rounded-full px-7 py-2 text-sm font-[300] border-2 border-main" href={"/contact"}>Contact us</Link>
                            <Link className="bg-white text-main rounded-full px-7 py-2 text-sm font-[300] border-2 border-main hover:bg-main hover:text-white transition-all" href={"/services"}>Learn more</Link>
                        </div>
                    </Reveal>
                </div>
                <div className="flex items-center justify-end">
                    <VideoPlayer thumbnail="/thumbnail.png" />
                </div>
            </div>
        </section>

    )
}
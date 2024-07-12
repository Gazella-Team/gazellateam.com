import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import TpWidget from "./TpWidget";

export default function Hero() {
    return (
        <section className="py-[60px] pb-0 bg-[url(/bgs/line.svg)] bg-cover bg-center">
            <div className="w-[86%] mx-auto flex flex-col max-w-4xl xl:max-w-[1360px] ">
                <div className="flex flex-col">
                    <Reveal>
                        <h1 className="text-4xl md:text-8xl font-[300] mx-auto leading-[110%] max-w-5xl mb-[40px]">Where software<br></br><span className="ml-20">meets creativity</span></h1>
                    </Reveal>
                    <div className="max-w-5xl mx-auto">
                        <Reveal>
                            <p className="text-lg ml-20 md:text-xl text-gray-600 max-w-5xl w-[70%] font-[200] leading-[150%] mb-[80px]">We help companies of all sizes sell more, build workflows and launch innovative ideas through tailormade software development.</p>
                        </Reveal>
                    </div>
                    <Reveal>
                        <div className="flex mx-auto max-w-5xl justify-end items-center gap-4 mb-[60px]">
                            <Link className="bg-main text-white rounded-full px-7 py-2 text-xs md:text-sm font-[300] border-2 border-main" href={"/contact"}>Contact us</Link>
                            <Link className="bg-white text-main rounded-full px-7 py-2 text-xs md:text-sm font-[300] border-2 border-main hover:bg-main hover:text-white transition-all" href={"/services"}>Learn more</Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>

    )
}
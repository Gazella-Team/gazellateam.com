import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import TpWidget from "./TpWidget";

export default function Hero() {
    return (
        <section className="py-24 relative pb-0 bg-white bg-cover bg-center">
            <div className="w-[94%] max-w-[1300px] relative z-10 mx-auto flex flex-col ">
                <div className="flex flex-col max-w-2xl">
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl font-[300] mx-auto leading-[110%] mb-[40px]">Where software meets creativity</h1>
                    </Reveal>
                    <div className="max-w-5xl mx-auto">
                        <Reveal>
                            <p className="text-lg md:text-xl text-gray-600 max-w-5xl w-[70%] font-light paragraph leading-[150%] mb-[80px]">We help companies of all sizes sell more, build workflows and launch innovative ideas through tailormade software development.</p>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>

    )
}
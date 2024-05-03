import { Reveal } from "./Animations/Reveal";
import TpWidget from "./TpWidget";

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
                        <p className="text-xl text-gray-600 font-[200] leading-[150%] mb-[50px]">AI-agenter er intelligente løsninger, der består af en stor sprogmodel (LLM), som vi kender fra ChatGPT, og som har adgang til værktøjer. Agenten kan.</p>
                    </Reveal>
                </div>
            </div>
        </section>

    )
}
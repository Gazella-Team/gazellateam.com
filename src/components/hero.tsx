import { Reveal } from "./Animations/Reveal";
import TpWidget from "./TpWidget";

export default function Hero() {
    return (
        <section className="py-[60px]">
            <div className="w-[90%] mx-auto max-w-[660px]">
                <Reveal>
                    <TpWidget />
                </Reveal>
                <Reveal>
                    <h1 className="text-[54px] font-[300] leading-[110%] mb-[50px]">Elevating your business with custom software</h1>
                </Reveal>
                <Reveal>
                <p className="font-[200] text-[18px] text-gray-600">Gazella Team Consulting is a digital agency based in Copenhagen, passionate about software and product design that provides value. For us, software is not just code, but a tool that can be shaped to serve a purpose in many social- and business related areas.
<br></br><br></br>
The core value of our work is turning visitors into customers with great customer journey, building workflows and automated processes that save time, and building unique applications that solve modern problems. We make sure our solution is aligned with your vision.
<br></br><br></br>
What makes our services different is our approach to working with tech in different industries.
<br></br><br></br>
Collaboration is at the core of our work. We partner closely with our clients to understand their goals and challenges, ensuring that our solutions align with their vision. Together, we leverage our technical expertise and strategic guidance to deliver exceptional outcomes.
<br></br><br></br>
Throughout our journey, we have had the privilege of working with diverse clients across various industries. From startups to established enterprises, we have consistently delivered products that exceed expectations and drive success.
<br></br><br></br>

If you are seeking a technical product agency that not only provides development solutions but also offers comprehensive guidance and a focus on societal impact, look no further than Tiny Rhino. Let&apos;s collaborate and create innovative solutions that shape the future.</p>
                </Reveal>
            </div>
        </section>

    )
}
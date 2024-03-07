import { Reveal } from "../Animations/Reveal";
import Layout from "../Layout";

export default function MainHero() {
    return (
        <section className="h-[60vh] pb-[100px] bg-main flex flex-col justify-end">
            <div className="w-[94%] mx-auto text-white">
                <Reveal>
                    <h1 className="font-[200] text-[60px] mb-[10px]">Automations with Zapier</h1>
                </Reveal>
                <Reveal>
                    <p className="font-[100] w-[60%] text-[18px]">We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment to sustainability drives us to integrate</p>
                </Reveal>
            </div>
        </section>
    )
}
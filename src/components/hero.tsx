import { Reveal } from "./Animations/Reveal";

export default function Hero() {
    return (
        <section className="py-24">
            <div className="w-[95%] mx-auto max-w-[1200px]">
                <Reveal>
                    <h1 className="text-7xl font-[200] leading-[110%] mb-[50px]">We elevate businesses with tailormade apps</h1>
                </Reveal>
            </div>
        </section>

    )
}
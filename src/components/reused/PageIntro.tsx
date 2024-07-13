import { Reveal } from "../Animations/Reveal";
import SectionStarter from "./SectionStarter";

export default function PageIntro(props:any) {
    return (
        <section className="py-12 pb-20">
            <div className={props.smallWidth ? "w-[94%] max-w-[1000px] mx-auto":"w-[94%] max-w-[1300px] mx-auto"}>
                <Reveal>
                    <h1 className="font-[300] max-w-3xl text-[40px] tracking-tight md:text-[50px] xl:text-6xl text-main leading-[120%] mb-8">{props.heading}.</h1>
                </Reveal>
                <Reveal>
                    <p className="font-[200] paragraph text-[16px] md:text-[18px] xl:text-[20px] leading-[150%] max-w-[500px] text-gray-600">{props.description}</p>
                </Reveal>
            </div>
        </section>
    )
}
import { Reveal } from "../Animations/Reveal";

export default function PageIntro(props:any) {
    return (
        <section className="py-12 pb-[70px]">
            <div className="w-[94%] max-w-[1300px] mx-auto">
                <Reveal>
                    <h1 className="font-[300] text-[40px] tracking-tight md:text-[50px] xl:text-6xl leading-[110%] text-main mb-[20px]">{props.heading}</h1>
                </Reveal>
                <Reveal>
                    <p className="font-[200] text-[16px] md:text-[18px] xl:text-[18px] leading-[150%] max-w-[400px] md:max-w-[600px] text-gray-600">{props.description}</p>
                </Reveal>
            </div>
        </section>
    )
}
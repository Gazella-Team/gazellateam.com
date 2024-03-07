import { Reveal } from "../Animations/Reveal";

export default function CaseHero(props:any) {
    return (
        <section className="py-[100px] pb-[50px]">
            <div className="text-center w-[100%] max-w-[800px] mx-auto">
                <Reveal>
                    <p className="text-[24px] font-[100] mb-[20px] text-gray-600">/  Spaak Technologies</p>
                </Reveal>
                <Reveal>
                    <h1 className="font-[200] text-[40px] leading-[50px] text-main mb-[40px]">{props.heading}</h1>
                </Reveal>
            </div>
        </section>
    )
}
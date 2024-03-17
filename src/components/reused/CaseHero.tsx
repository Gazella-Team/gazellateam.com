import { Reveal } from "../Animations/Reveal";

export default function CaseHero(props:any) {
    return (
        <section className="py-[100px] pb-[50px]">
            <div className="w-[100%] max-w-[1200px] mx-auto">
                <Reveal>
                    <p className="text-[18px] font-[100] mb-[20px] text-gray-600"> / ToolBird</p>
                </Reveal>
                <Reveal>
                    <h1 className="font-[200] text-[60px] leading-[70px] w-[70%] text-main mb-[40px]">{props.heading}</h1>
                </Reveal>
            </div>
        </section>
    )
}
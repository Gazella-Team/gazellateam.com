import { Reveal } from "../Animations/Reveal";

type SectionIntroProps = {
    heading:string,
    description?:string,
    children: React.ReactNode,
    space?: string,
    marginBottom?: boolean,
    width: string,
}

export default function SectionIntro(props:SectionIntroProps) {
    return (
        <section className={props.marginBottom ? "py-32":"pt-32"}>
            <div className={`w-[94%] max-w-${props.width} mx-auto flex flex-col gap-${props.space}`}>
                <div>
                    <Reveal>
                        <h1 className="font-[300] text-center mx-auto max-w-3xl text-[40px] md:text-[50px] xl:text-4xl text-main mb-[20px]">{props.heading}</h1>
                    </Reveal>
                    <Reveal>
                        <p className="font-[200] text-[16px] md:text-[18px] xl:text-[18px] leading-[150%] max-w-[500px] text-gray-600">{props.description}</p>
                    </Reveal>
                </div>
                {props.children}
            </div>
        </section>
    )
}
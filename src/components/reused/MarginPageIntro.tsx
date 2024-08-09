import { Reveal } from '../Animations/Reveal'
import { RevealWild } from '../Animations/RevealWild'

export default function MarginPageIntro(props:any) {
    return (
        <section className="py-40 bg-main">
            <div className="w-[90%] max-w-6xl mx-auto">
                <RevealWild delayTime={0.3}>
                    <h1 className="font-semibold text-white tracking-tight max-w-3xl text-4xl md:text-4xl xl:text-6xl leading-[120%] mb-8">{props.heading}.</h1>
                </RevealWild>
                <Reveal delayTime={0.5}>
                    <p className="font-light text-[16px] md:text-[18px] xl:text-[20px] leading-[150%] max-w-xl text-gray-200">{props.description}</p>
                </Reveal>
            </div>
        </section>
    )
}

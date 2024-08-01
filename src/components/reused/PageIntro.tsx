import { Reveal } from '../Animations/Reveal'
import { RevealWild } from '../Animations/RevealWild'
import SectionStarter from './SectionStarter'

export default function PageIntro(props:any) {
    return (
        <section className="py-12 pb-20">
            <div className="w-[90%] max-w-4xl mx-auto">
                <RevealWild delayTime={0.3}>
                    <h1 className="font-semibold tracking-tighter max-w-xl text-4xl md:text-4xl xl:text-6xl text-black leading-[120%] mb-8">{props.heading}.</h1>
                </RevealWild>
                <Reveal delayTime={0.5}>
                    <p className="font-light text-[16px] md:text-[18px] xl:text-[20px] leading-[150%] max-w-[500px] text-gray-600">{props.description}</p>
                </Reveal>
            </div>
        </section>
    )
}

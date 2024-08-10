import { Reveal } from '../Animations/Reveal'
import { RevealWild } from '../Animations/RevealWild'
import SectionStarter from './SectionStarter'

export default function PageIntro(props:any) {
    return (
        <section className="py-16 md:py-24">
            <div className="w-[90%] max-w-7xl mx-auto">
                <Reveal>
                    <h1 className="font-semibold text-main tracking-tight max-w-3xl text-[40px] md:text-5xl xl:text-6xl leading-[120%] mb-8">{props.heading}<span className='text-second'>.</span></h1>
                </Reveal>
                <Reveal>
                    <p className="font-light text-[16px] md:text-[18px] xl:text-[20px] leading-[150%] max-w-xl text-gray-600">{props.description}</p>
                </Reveal>
            </div>
        </section>
    )
}

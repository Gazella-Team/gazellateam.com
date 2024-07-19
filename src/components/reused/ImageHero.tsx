import Link from "next/link"
import { Reveal } from "../Animations/Reveal"

type ImageHero = {
    imagePath:string
    heading:string
    paragraph?:string
}

export default function ImageHero(props:ImageHero) {
    return (
        <section style={{backgroundImage: `url(${props.imagePath})`}} className={`bg-center relative bg-cover flex flex-col justify-center py-32 text-white`}>
            <div className="w-[90%] flex flex-col gap-10 max-w-[1300px] mx-auto relative z-10">
                <div className="max-w-4xl flex flex-col gap-8">
                    <Reveal>
                        <h2 className="font-[300] text-3xl md:text-4xl xl:text-5xl sm:leading-[120%] md:leading-[120%] xl:leading-[120%]">{props.heading}.</h2>
                    </Reveal>
                    <Reveal>
                        <p className="font-[300] max-w-2xl paragraph text-xl leading-[150%]">{props.paragraph}</p>
                    </Reveal>
                </div>
                <div className="flex items-center gap-3">
                    <Link className="bg-white px-5 py-1.5 rounded-full text-main paragraph font-semibold" href={"/contact"}>Kom igang for kun 899 kr.</Link>
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-main via-main/90 via-main/80 to-main/70"></div>
        </section>
    )
}
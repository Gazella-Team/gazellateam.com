import { Reveal } from '../Animations/Reveal'
import SectionStarter from './SectionStarter'

<<<<<<< HEAD
export default function PageIntro(props:any) {
    return (
        <section className="py-12 pb-20">
            <div className={props.smallWidth ? "w-[90%] max-w-[1000px] mx-auto":"w-[90%] max-w-[1300px] mx-auto"}>
                <Reveal delayTime={0.3}>
                    <h1 className="font-regular max-w-3xl text-2xl tracking-tight md:text-4xl xl:text-7xl text-main leading-[120%] mb-8">{props.heading}.</h1>
                </Reveal>
                <Reveal delayTime={0.5}>
                    <p className="font-[200] paragraph text-[16px] md:text-[18px] xl:text-[20px] leading-[150%] max-w-[500px] text-gray-600">{props.description}</p>
                </Reveal>
            </div>
        </section>
    )
}
=======
export default function PageIntro(props: any) {
	return (
		<section className="py-12 pb-20">
			<div
				className={
					props.smallWidth
						? 'w-[90%] max-w-[1000px] mx-auto'
						: 'w-[90%] max-w-[1300px] mx-auto'
				}
			>
				<Reveal>
					<h1 className="font-[300] max-w-3xl text-[40px] tracking-tight md:text-[50px] xl:text-6xl text-main leading-[120%] mb-8">
						{props.heading}.
					</h1>
				</Reveal>
				<Reveal>
					<p className="font-[200] paragraph text-[16px] md:text-[18px] xl:text-[20px] leading-[150%] max-w-[500px] text-gray-600">
						{props.description}
					</p>
				</Reveal>
			</div>
		</section>
	)
}
>>>>>>> c3ad152a5cb18ce49c671c7a6890f1bc7a168af2

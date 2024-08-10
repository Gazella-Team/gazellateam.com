import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import TpWidget from './TpWidget'
import { RevealWild } from './Animations/RevealWild'
import CaseSwiper from './cases-swiper'
import HeroSlider from './hero-slider'

export default function Hero() {
	return (
		<section className="py-24 gap-16 flex flex-col justify-center relative bg-white bg-cover bg-center">
			<div className="w-[90%] max-w-7xl relative mx-auto flex flex-col ">
				<div className="flex flex-col">
					<RevealWild delayTime={0.3}>
						<h1 className="text-4xl max-w-5xl font-semibold tracking-tight text-main md:text-8xl xl:leading-[120%] mb-[30px]">
							<p>Digitalt bureau med 20 års samlet erfaring<span className='text-second'>.</span></p>
						</h1>
					</RevealWild>
					<div className='w-full flex flex-col gap-4'>
						<Reveal delayTime={0.5}>
							<div>
								<p className="text-xl text-gray-600 justify-end max-w-3xl font-light md:text-2xl mb-[40px]">
									Vi skaber værdiskabende app- og web løsninger ved kombination af tekniske, salgspsykologiske og designmæssige kompetencer.					
								</p>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	)
}

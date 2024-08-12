import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import TpWidget from './TpWidget'
import { RevealWild } from './Animations/RevealWild'
import CaseSwiper from './cases-swiper'
import HeroSlider from './hero-slider'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
	return (
		<section className="py-24 gap-16 flex flex-col justify-center relative bg-cover bg-center">
			<div className="w-[90%] max-w-7xl relative mx-auto flex flex-col ">
				<div className="flex flex-col">
					<RevealWild delayTime={0.3}>
						<h1 className="text-4xl max-w-[700px] font-semibold tracking-tight text-main md:text-5xl xl:leading-[120%] mb-[30px]">
							<p>Vi er et ungt digitalt bureau med passion for <span className='text-second'>salgsfremmende</span> og <span className='text-second'>kreative</span> web- og app løsninger<span className='text-second'>.</span></p>
						</h1>
					</RevealWild>
					<div className='w-full flex flex-col gap-4'>
						<Reveal delayTime={0.5}>
							<div>
								<p className="text-xl text-gray-600 justify-end max-w-3xl font-light md:text-2xl mb-[40px]">
									Ved at kombinere tekniske, salgspsykologiske og designmæssige kompetencer sikrer vi brancheførende resultater for vores kunder.					
								</p>
							</div>
						</Reveal>
					</div>
					<Reveal delayTime={0.6}>
						<div className="flex flex-col sm:flex-row mt-5 sm:items-center gap-6 sm:gap-10">
							<Link target="_blank" href={"https://cal.com/lasseosmann/discoverycall"} className="flex items-center gap-5">
								<div className="p-4 border hi rounded-full hover:bg-third hover:border-third hover:text-white transition-all text-main border-main">
									<ArrowRight strokeWidth={1.5} />
								</div>
								<p className="text-xl">Kom i kontakt</p>
							</Link>
							<Link href={"/teamet"} className="flex items-center gap-5">
								<div className="p-4 border hi rounded-full hover:bg-third hover:border-third hover:text-white transition-all text-main border-main">
									<ArrowRight strokeWidth={1.5} />
								</div>
								<p className="text-xl">Læs mere om os</p>
							</Link>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	)
}

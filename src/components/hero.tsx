import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import TpWidget from './TpWidget'

export default function Hero() {
	return (
		<section className="py-24 relative pb-0 bg-white bg-cover bg-center">
			<div className="w-[90%] mb-10 max-w-[1400px] relative mx-auto flex flex-col ">
				<div className="flex flex-col max-w-5xl">
					<Reveal delayTime={0.3}>
						<h1 className="text-4xl max-w-3xl font-semibold md:text-7xl xl:leading-[120%] mb-[40px]">
							Et kompetent software bureau fra København
						</h1>
					</Reveal>
				</div>
			</div>
		</section>
	)
}

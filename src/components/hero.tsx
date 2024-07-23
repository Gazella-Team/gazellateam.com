import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import TpWidget from './TpWidget'

export default function Hero() {
	return (
		<section className="py-24 relative pb-0 bg-white bg-cover bg-center">
			<div className="w-[90%] mb-10 max-w-[1300px] relative z-10 mx-auto flex flex-col ">
				<div className="flex flex-col max-w-5xl">
					<Reveal>
						<h1 className="text-4xl md:text-6xl font-[300] mx-auto xl:leading-[120%] mb-[40px]">
							Et hjemmeside- og app bureau med øje for detalje
						</h1>
					</Reveal>
				</div>
			</div>
		</section>
	)
}

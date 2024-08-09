import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import TpWidget from './TpWidget'
import { RevealWild } from './Animations/RevealWild'

export default function Hero() {
	return (
		<section className="h-screen flex flex-col justify-center relative bg-white bg-cover bg-center">
			<div className="w-[90%] max-w-7xl relative mx-auto flex flex-col ">
				<div className="flex flex-col">
					<RevealWild delayTime={0.3}>
						<h1 className="text-4xl max-w-4xl font-semibold tracking-tight text-main md:text-7xl xl:leading-[120%] mb-[30px]">
							<p>Hjemmeside- og app udvikling</p>
						</h1>
					</RevealWild>
					<div className='w-full flex flex-col gap-4'>
						<Reveal delayTime={0.5}>
							<div>
								<p className="text-xl text-gray-600 justify-end max-w-2xl font-light md:text-2xl mb-[40px]">
									Vi skaber værdiskabende app- og web løsninger ved kombination af tekniske, salgspsykologiske og designmæssige kompetencer.					
								</p>
								<div className='flex items-center gap-4'>
									<Link className='bg-black border-2 border-black font-medium px-5 py-2 text-white rounded-full' href={"/kontakt"}>
										Kontakt os
									</Link>
									<Link className='bg-transparent border-2 border-black font-medium px-5 py-2 text-black rounded-full hover:bg-black hover:text-white transition-all' href={"/teamet"}>
										Om os
									</Link>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	)
}

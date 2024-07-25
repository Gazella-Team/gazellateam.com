import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import TpWidget from './TpWidget'

export default function Hero() {
	return (
		<section className="py-24 pb-16 relative bg-white bg-cover bg-center">
			<div className="w-[90%] mb-10 max-w-[1400px] relative mx-auto flex flex-col ">
				<div className="flex flex-col">
					<Reveal delayTime={0.3}>
						<h1 className="text-4xl max-w-3xl font-semibold md:text-7xl xl:leading-[120%] mb-[40px]">
							Vi løfter projekter og virksomheder med software udvikling.
						</h1>
					</Reveal>
					<div className='w-full flex flex-col gap-4 items-end justify-center'>
						<Reveal delayTime={0.3}>
							<div>
								<p className="text-xl text-main justify-end max-w-xl font-light md:text-2xl mb-[40px]">
									Vi er et hjemmeside- og app bureau med øje for detalje. Vi har +10 års samlet erfaring indenfor software og skrædersyede løsninger.								
								</p>
								<div className='flex items-center gap-4'>
									<Link className='bg-main border-2 border-main font-medium px-5 py-2 text-white rounded-full' href={"/kontakt"}>
										Kontakt os
									</Link>
									<Link className='bg-transparent border-2 border-main font-medium px-5 py-2 text-main rounded-full hover:bg-main hover:text-white transition-all' href={"/teamet"}>
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

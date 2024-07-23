import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import TpWidget from './TpWidget'

export default function Hero() {
<<<<<<< HEAD
    return (
        <section className="py-24 pb-12 relative bg-white bg-cover bg-center">
            <div className="w-[90%] mb-10 max-w-[1400px] relative z-10 mx-auto flex flex-col ">
                <div className="flex flex-col max-w-[600px]">
                    <Reveal delayTime={0.3}>
                        <h1 className="text-4xl md:text-8xl tracking-tighter font-normal mx-auto xl:leading-[110%] mb-[40px]">Et software bureau i hjertet af københavn</h1>
                    </Reveal>
                </div>
                <div className="flex items-center mt-[-100px] justify-end">
                        <Reveal delayTime={0.5}>
                            <p className="font-light max-w-lg flex justify-end text-gray-600 text-lg">We help entrepreneurs achieve big things in short spaces of time through growth funding and analytics. We help entrepreneurs achieve big things in short spaces of time through growth funding and analytics.</p>
                        </Reveal>
                </div>
            </div>
        </section>

    )
}
=======
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
>>>>>>> c3ad152a5cb18ce49c671c7a6890f1bc7a168af2

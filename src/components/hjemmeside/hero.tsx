import Link from 'next/link'

export default function Hero() {
	return (
		<section className="relative bg-white bg-cover bg-center">
			<div className="w-[90%] mx-auto max-w-[1400px] grid grid-cols-2 gap-20">
				<div className='py-24'>
					<h2 className='text-5xl leading-[120%] font-semibold max-w-2xl'>Drømmer du om mere kendskab og flere kunder? Det starter med en ny performance hjemmeside</h2>
				</div>
                <div className='bg-red-400 h-[400px]'>
				</div>
			</div>
		</section>
	)
}

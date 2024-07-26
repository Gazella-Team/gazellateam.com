import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import SecondHero from '@/components/reused/DefaultHero'
import ImageHero from '@/components/reused/ImageHero'
import PageIntro from '@/components/reused/PageIntro'
import Team from '@/components/team'
import Testimonials from '@/components/hjemmeside/testimonials'
import Kompetencer from '@/components/hjemmeside/kompetencer'
import TrustBar from '@/components/hjemmeside/trust-bar'
import ServiceSlider from '@/components/service-slider'
import Link from 'next/link'
import { Reveal } from '@/components/Animations/Reveal'

export default function People() {
	return (
		<Layout>
			<Meta
				title={`Hjemmeside: Er du klar til at få flere kunder og mere kendskab? Det starter med en performance hjemmeside. - Gazella Team`}
			/>
			<section className="py-12 pb-20">
				<div className={"w-[90%] max-w-[1400px] mx-auto"}>
					<Reveal delayTime={0.3}>
						<h1 className={"font-semibold max-w-3xl text-3xl tracking-tight md:text-4xl xl:text-6xl text-main leading-[120%] mb-8"}>Er du klar til at få flere kunder og mere kendskab? Det starter med en performance hjemmeside.</h1>
					</Reveal>
					<Reveal delayTime={0.5}>
						<p className="font-light text-[16px] md:text-[18px] xl:text-[20px] leading-[150%] max-w-[500px] text-gray-600">Vi er et lille team af udviklere, designere og kommunikationsansvarlige, som hver dag stræber efter at inspirere og løfte virksomheder med software.</p>
					</Reveal>
					<Reveal delayTime={0.5}>
						<div className='mt-12'>
							<Link className='bg-main text-white py-2 px-5 font-semibold rounded-full' href={"/kontakt"}>
								Kom i gang for kun 899 kr. /måneden
							</Link>
						</div>
					</Reveal>
				</div>
			</section>
			<TrustBar />
			<Kompetencer />
			<ServiceSlider />
			<Testimonials />
			<div className="w-[90%] my-24 mx-auto max-w-[700px]">
				<h2 className="font-[300] mb-20 text-3xl md:text-4xl leading-[150%] md:leading-[150%]">
					Vil du vide hvilke muligheder du har med en hjemmeside? Vi
					tilbyder et gratis og uforpligtende strategi-kald
				</h2>
				<p className="text-3xl mb-4 paragraph text-gray-600">
					+45 50695272
				</p>
				<p className="text-3xl paragraph text-gray-600">
					hey@gazellateam.com
				</p>
			</div>
		</Layout>
	)
}

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

export default function People() {
	return (
		<Layout>
			<Meta
				title={`Hjemmeside: Er du klar til at få flere kunder og mere kendskab? Det starter med en performance hjemmeside. - Gazella Team`}
			/>
			<PageIntro
				headingSize="sm"
				starter="theteam"
				heading="Er du klar til at få flere kunder og mere kendskab? Det starter med en performance hjemmeside"
				description="Vi er et lille team af udviklere, designere og kommunikationsansvarlige, som hver dag stræber efter at inspirere og løfte virksomheder med software."
			/>
			<ImageHero
				heading="Er du klar til at få flere kunder og mere kendskab? Det starter med en performance hjemmeside"
				paragraph="Vi garanterer dig en fordobling i unikke månedlige besøgende med en ny hjemmeside indenfor 2 måneder - Ellers betaler vi alle pengene tilbage."
				imagePath="/hjemmeside/hjemmeside.webp"
			/>
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

import { Reveal } from '@/components/Animations/Reveal'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import CalEmbed from '@/components/cal'
import PageIntro from '@/components/reused/PageIntro'

export default function Contact() {
	return (
		<Layout cta={true}>
			<Meta title={`Kontakt os - Gazella Team`} />
			<PageIntro
				headingSize="sm"
				starter="madewithlove"
				heading="Interesseret i at høre mere? Book 30 minutter med os"
				description="Dyk ned i vores forskellige cases og interne projekter, som vi udvikler for at inspirere og forbedre virksomheder."
			/>
			<div className='w-[90%] mx-auto max-w-4xl'>
				<CalEmbed />
			</div>
		</Layout>
	)
}

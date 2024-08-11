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
				heading="Kontakt os"
				description="Dyk ned i vores forskellige cases og interne projekter, som vi udvikler for at inspirere og forbedre virksomheder."
			/>
			<section className='py-16 border-t bg-white  border-gray-600/10'>
				<div className='w-[90%] mx-auto flex items-center justify-end max-w-7xl'>
					<h2 className='text-5xl font-semibold text-main'>hey@gazellateam.com</h2>
				</div>
			</section>
			<section className='py-16 border-t bg-white  border-gray-600/10'>
				<div className='w-[90%] mx-auto max-w-7xl flex items-center justify-end'>
					<h2 className='text-5xl font-semibold text-main'>+45 50 69 52 72</h2>
				</div>
			</section>
			<section className='py-16 border-t bg-white  border-gray-600/10'>
				<div className='w-[90%] mx-auto max-w-7xl flex items-center justify-end'>
					<h2 className='text-5xl font-semibold text-main'>CVR: 45036956</h2>
				</div>
			</section>
		</Layout>
	)
}

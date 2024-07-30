import { Reveal } from '@/components/Animations/Reveal'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import CalEmbed from '@/components/cal'
import SecondHero from '@/components/reused/DefaultHero'
import PageIntro from '@/components/reused/PageIntro'
import Cal from '@calcom/embed-react'

export default function Contact() {
	return (
		<Layout cta={true}>
			<Meta title={`Kontakt os - Gazella Team`} />
			<section className="py-12 pb-20">
				<div className="w-[90%] max-w-[1300px] mx-auto">
					<Reveal delayTime={0.3}>
						<h1 className="font-light max-w-3xl text-3xl md:text-4xl xl:text-6xl text-main mb-8">Interesseret i at høre mere? Book 30 minutter med os.</h1>
					</Reveal>
					<Reveal delayTime={0.5}>
						<p className="font-light text-[16px] md:text-[18px] xl:text-[20px] leading-[150%] max-w-[500px] text-gray-600">hey</p>
					</Reveal>
				</div>
			</section>
			<CalEmbed />
		</Layout>
	)
}

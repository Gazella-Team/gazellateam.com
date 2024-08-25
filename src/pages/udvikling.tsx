import { Reveal } from '@/components/Animations/Reveal'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import DevelopmentFAQ from '@/components/organisms/DevelopmentFAQ'
import PageIntro from '@/components/reused/PageIntro'
import ServicesComponent from '@/components/services'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Udvikling() {
	return (
		<Layout cta={true}>
			<Meta
				keywords="app, iOS, Android, cross-platform, udvikling, mobil"
				description="Fremtiden er mobil. Vi specialiserer os i cross-platform app-udvikling for at levere unikke mobiloplevelser til både iOS og Anroid. Gennem hele udviklingsprocessen sørger vi for kontinuerlig iteration og feedback, efterfulgt af post-lancering support for at sikre en fremtidssikret skalerbar løsning, der passer til din vision."
				title={`Gazella Team: Vi er specialister i udvikling af apps til iOS og Android.`}
			/>
			<section className="py-16 md:py-24 bg-cover bg-center flex flex-col items-end">
				<div className="w-[90%] mx-auto max-w-[700px] flex flex-col">
					<div className="max-w-2xl">
						<Reveal>
							<div className="mb-14 flex flex-col gap-10 md:gap-12">
								<h2 className="text-4xl md:text-5xl xl:text-5xl leading-[120%] md:leading-[120%] xl:leading-[120%] font-semibold text-main">
									Udvikling af din egen{' '}
									<span className="text-second">
										drømme-applikation
									</span>
								</h2>
								<p className="font-light text-[18px] paragraph text-gray-600">
									Står du og har en ide til en hjemmeside, app
									eller andet digitalt produkt, men ved ikke
									helt hvordan du kommer igang? Så er du på
									det rigtige sted. Vi har et team af erfarne
									udviklere, der er klar til at hjælpe dig
									igennem hele processen.
								</p>
								<DevelopmentFAQ />
							</div>
						</Reveal>
					</div>
					<div className="flex flex-col sm:flex-row mt-5 sm:items-center gap-6 sm:gap-10">
						<Link
							target="_blank"
							href={'https://cal.com/lasseosmann/discoverycall'}
							className="flex items-center gap-5"
						>
							<div className="p-4 border hi rounded-full hover:bg-third hover:border-third hover:text-white transition-all text-main border-main">
								<ArrowRight strokeWidth={1.5} />
							</div>
							<p className="text-xl">Kontakt os</p>
						</Link>
						<Link
							href={'tel:50695272'}
							className="flex items-center gap-5"
						>
							<div className="p-4 border hi rounded-full hover:bg-third hover:border-third hover:text-white transition-all text-main border-main">
								<ArrowRight strokeWidth={1.5} />
							</div>
							<p className="text-xl">Ring 50 69 52 72</p>
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	)
}

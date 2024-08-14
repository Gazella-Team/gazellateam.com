import { Reveal } from '@/components/Animations/Reveal'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import PageIntro from '@/components/reused/PageIntro'
import ServicesComponent from '@/components/services'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function App() {
	return (
		<Layout cta={true}>
			<Meta keywords='app, iOS, Android, cross-platform, udvikling, mobil' description='Fremtiden er mobil. Vi specialiserer os i cross-platform app-udvikling for at levere unikke mobiloplevelser til både iOS og Anroid. Gennem hele udviklingsprocessen sørger vi for kontinuerlig iteration og feedback, efterfulgt af post-lancering support for at sikre en fremtidssikret skalerbar løsning, der passer til din vision.' title={`Gazella Team: Vi er specialister i udvikling af apps til iOS og Android.`} />
			<section className="py-16 md:py-24 bg-cover bg-center flex flex-col items-end">
				<div className="w-[90%] mx-auto max-w-[700px] flex flex-col">
					<div className="max-w-2xl">
						<Reveal>
							<div className="mb-14 flex flex-col gap-10 md:gap-12">
								<h2 className="text-4xl md:text-5xl xl:text-5xl leading-[120%] md:leading-[120%] xl:leading-[120%] font-semibold text-main">
									Moderne og skalerbar app udvikling til <span className='text-second'>iOS og Android</span>
								</h2>
								<p className="font-light text-[18px] paragraph text-gray-600">
									Fremtiden er mobil. Vi specialiserer os i cross-platform
									app-udvikling for at
									levere unikke mobiloplevelser til både iOS og
									Anroid. Gennem hele udviklingsprocessen sørger
									vi for kontinuerlig iteration og feedback,
									efterfulgt af post-lancering support for at
									sikre en fremtidssikret skalerbar løsning, der
									passer til din vision.{' '}
									<br></br>
									<br></br>
									<h3 className='font-semibold text-main text-xl my-5'>Intuitivt design og brugeroplevelse</h3>
									En software uden brugervenligt design og en
									brugeroplevelse, der er svær at navigere, er
									ingenting. Når vi arbejder på et projekt, sørger
									vi for at designe, teste og implementere et
									unikt design sammen med en struktureret
									brugeroplevelse, baseret på din målgruppe.
									<br></br>
									<br></br>
									<h3 className='font-semibold text-main text-xl my-5'>Samspil med andre services</h3>
									En software uden brugervenligt design og en
									brugeroplevelse, der er svær at navigere, er
									ingenting. Når vi arbejder på et projekt, sørger
									vi for at designe, teste og implementere et
									unikt design sammen med en struktureret
									brugeroplevelse, baseret på din målgruppe.
									<br></br>
									<br></br>
									<h3 className='font-semibold text-main text-xl my-5'>Fast kompetent udviklingsteam</h3>
									En software uden brugervenligt design og en
									brugeroplevelse, der er svær at navigere, er
									ingenting. Når vi arbejder på et projekt, sørger
									vi for at designe, teste og implementere et
									unikt design sammen med en struktureret
									brugeroplevelse, baseret på din målgruppe.
									<br></br>
									<br></br>
									<h3 className='font-semibold text-main text-xl my-5'>Nyeste teknologier</h3>
									En software uden brugervenligt design og en
									brugeroplevelse, der er svær at navigere, er
									ingenting. Når vi arbejder på et projekt, sørger
									vi for at designe, teste og implementere et
									unikt design sammen med en struktureret
									brugeroplevelse, baseret på din målgruppe.
									<br></br>
									<br></br>

									<h3 className='font-semibold text-main text-xl my-5'>Kontinuerlig support og drift</h3>
									Når du får din app udviklet hos os, kan du føle dig tryg med vores frie support
									alle ugens hverdage. Vi sidder klar til at hjælpe med alle spørgsmål eller problemer
									du måtte have med din app.
									<br></br>
									<br></br>
									Vi sørger for løbende drift, opdatering og optimering af din hjemmeside, så 
									du konstant står skarpt sammenlignet med dine konkurrenter.
								</p>
							</div>
						</Reveal>
					</div>
					<div className="flex flex-col sm:flex-row mt-5 sm:items-center gap-6 sm:gap-10">
						<Link href={"mailto:hey@gazellateam.com"} className="flex items-center gap-5">
							<div className="p-4 border hi rounded-full hover:bg-third hover:border-third hover:text-white transition-all text-main border-main">
								<ArrowRight strokeWidth={1.5} />
							</div>
							<p className="text-xl">Skriv til os</p>
						</Link>
						<Link href={"tel:50695272"} className="flex items-center gap-5">
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

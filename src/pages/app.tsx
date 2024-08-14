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
									Design er altafgørende for dine brugeres opfattelse af din app. For at din kommende app udlever sit <span className='text-third'>fulde potentiale</span>, sørger vi for et intuitivt design passende
									til din ide og forretning i sammenspil med en <span className='text-third'>strategisk gennemtænkt brugeroplevelse</span>, som sørger
									for let navigation, lav ventetid og gladere brugere.
									<br></br>
									<br></br>
									<h3 className='font-semibold text-main text-xl my-5'>Samspil med andre services</h3>
									Vores app-udviklingsservice fokuserer på at skabe løsninger, der er fuldt integreret med din 
									virksomheds øvrige systemer og tjenester. Vi sikrer, at din nye app fungerer problemfrit sammen 
									med <span className='text-third'>eksisterende teknologier</span>, hvilket optimerer arbejdsgange og <span className='text-third'>øger effektiviteten</span>. Med en stærk integration mellem appen og andre vigtige forretningsværktøjer kan vi
									nemt styre <span className='text-third'>data, processer og analyser.</span>
									<br></br>
									<br></br>
									<h3 className='font-semibold text-main text-xl my-5'>Fast kompetent udviklingsteam</h3>
									Når du får din app udviklet hos os, kan du være sikker på
									et <span className='text-third'>kompetent in-house</span> udviklerteam siddende i København.
									Vi er let tilgængelige gennem hele udviklingsprocessen, og vi supplerer
									med løbende <span className='text-third'>faglig erfaring og sparring</span> for at danne det bedste grundlag
									for et enestående slut-resultat.

									<br></br>
									<br></br>
									<h3 className='font-semibold text-main text-xl my-5'>Nyeste teknologier</h3>
									Hos os bruger vi de nyeste app- teknologier og frameworks indefor software, for
									at sikre en <span className='text-third'>hurtig, skalerbar og konkurrencedygtig løsning</span> til alle projekter.
									Vi forstår at skabe vindende app-løsninger ved sammenspil af tekniske kompetencer,
									gennemtænkt brugeroplevelse og <span className='text-third'>udviklingsteknologier fra øverste hylde.</span>

									<br></br>
									<br></br>

									<h3 className='font-semibold text-main text-xl my-5'>Kontinuerlig support og drift</h3>
									Efter lanceringen af din app kan du føle dig tryg og fortsat konkurrencedygtig med vores <span className='text-third'>dedikerede
									support og drift.</span> Vi står for yderligere bug-fixes, ændringer og opdateringer, så din app holdes ved lige året rundt.
								</p>
							</div>
						</Reveal>
					</div>
					<div className="flex flex-col sm:flex-row mt-5 sm:items-center gap-6 sm:gap-10">
						<Link target="_blank" href={"https://cal.com/lasseosmann/discoverycall"} className="flex items-center gap-5">
							<div className="p-4 border hi rounded-full hover:bg-third hover:border-third hover:text-white transition-all text-main border-main">
								<ArrowRight strokeWidth={1.5} />
							</div>
							<p className="text-xl">Kontakt os</p>
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

import { Reveal } from '@/components/Animations/Reveal'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import PageIntro from '@/components/reused/PageIntro'
import ServicesComponent from '@/components/services'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hjemmeside() {
	return (
		<Layout cta={true}>
			<Meta title={`Gazella Team: Vi er specialister i udvikling af performance hjemmesider.`} />
			<section className="py-16 md:py-24 bg-cover bg-center flex flex-col items-end">
				<div className="w-[90%] mx-auto max-w-[700px] flex flex-col">
					<div className="max-w-2xl">
						<Reveal>
							<div className="mb-14 flex flex-col gap-10 md:gap-11">
								<h2 className="text-4xl md:text-5xl xl:text-5xl font-semibold leading-[120%] md:leading-[120%] xl:leading-[120%] text-main">
									Få flere kunder og mere kendskab med en ny <span className='text-second'>performance hjemmeside</span>
								</h2>
								<p className="font-light text-[18px] paragraph text-gray-600">
									Hos Gazella Team forstår vi, at en hjemmeside er meget mere end blot
									et online visitkort. Vi specialiserer os i at skrædersy hjemmesider til
									forrentinger med formål om at øge online traffiken og hermed salg og omsætning.
									Ved at kombinere hastighedsoptimering, søgemaskineoptimering, design og 
									salgspsykologisk hjemmesidestruktur, skaber vi vindende hjemmesider for vores kunder.
									<br></br>
									<br></br>
									<h3 className='font-semibold text-main text-xl my-5'>Salgsoptimeret udvikling</h3>
									Med højere konkurrence på internettet som aldrig før, er det nødvendigt med et salgsoptimeret setup
									til sin hjemmeside. Vi sørger for at gennemarbejde en komplet <span className='text-third'>hastighedsoptimering </span> 
									af din hjemmeside, så brugeroplevelsen bliver så god som muligt. I relation til god hastighed udarbejder vi en skræddersyet 
									SEO strategi, så i øger jeres <span className='text-third'>synlighed på Google</span> og tiltrækker flere organiske kunder.
									<br></br>
									<br></br>
									<h3 className='font-semibold text-main text-xl my-5'>Responsivt til alle enheder</h3>
									Alle hjemmesider, vi udvikler, er <span className='text-third'>kompatible med både mobil, tablet, laptop og desktop.</span>{" "}
									Det betyder, at hjemmesiden automatisk tilpasser sig alle enheder.
									Vi sørger for en gennemarbejdet brugeroplevelse på tværs af alle enheder, så dine besøgende
									får den bedst mulige oplevelse, når de besøger din hjemmeside.
									<br></br>
									<br></br>
									<h3 className='font-semibold text-main text-xl my-5'>Skræddersyet design</h3>
									Vi står for at skrædersy et unikt design, som matcher din virksomheds værdier og visioner. 
									Med et design, som appelerer til din målgruppe, formår vi effektivt at kommunikerer den
									rette værdi til dine kunder.
									<br></br>
									<br></br>
									<h3 className='font-semibold text-main text-xl my-5'>Fri support</h3>
									Når du får din hjemmeside udviklet hos os, kan du føle dig tryg med vores frie support
									alle ugens hverdage. Vi sidder klar til at hjælpe med alle spørgsmål eller problemer
									du måtte have med din hjemmeside.
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
							<p className="text-xl">Kom i gang for kun 899 kr.</p>
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

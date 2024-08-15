import { Reveal } from '@/components/Animations/Reveal'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import PageIntro from '@/components/reused/PageIntro'
import ServicesComponent from '@/components/services'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Design() {
	return (
		<Layout cta={true}>
			<Meta keywords='design, brugeroplevelse, wireframe, konverteringer' description='Vi forstår, at en imponerende digital tilstedeværelse er essentiel i dagens konkurrenceprægede marked, og derfor er vores mål at skabe unikke og effektive designs, der engagerer og inspirerer dine brugere.' title={`Gazella Team: Specialister i kreative design løsninger, som maksimerer konverteringen af dine besøgende til loyale kunder.`} />
			<section className="py-16 md:py-24 bg-cover bg-center flex flex-col items-end">
				<div className="w-[90%] mx-auto max-w-[700px] flex flex-col">
					<div className="max-w-2xl">
						<Reveal>
							<div className="mb-14 flex flex-col gap-10 md:gap-11">
								<h2 className="text-4xl md:text-5xl xl:text-5xl leading-[120%] md:leading-[120%] xl:leading-[120%] font-semibold text-main">
									Kreativ design <span className='text-second'>identitet</span> og <span className='text-second'>strategisk</span> brugeroplevelse
								</h2>
								<p className="font-light text-[18px] paragraph text-gray-600">
								Vi tilbyder skræddersyede løsninger inden for design og brugeroplevelse, som sigter mod at <span className='text-third'>maksimere konverteringen af dine besøgende</span> til loyale kunder.
								<br></br><br></br>
								Vi forstår, at en imponerende digital tilstedeværelse er essentiel i dagens konkurrenceprægede marked, og derfor er vores mål at skabe unikke og effektive designs, der <span className='text-third'>engagerer og inspirerer</span> dine brugere. Vores erfarne team af designere arbejder tæt sammen med dig for at udvikle visuelle identiteter og grænseflader, der afspejler din virksomheds unikke værdier og mål.
								<br></br><br></br>Vi tror på, at et veludført design ikke kun ser godt ud, men også fungerer optimalt. Fra logodesign og branding til web- og applikationsdesign, sikrer vi, at alle elementer taler sammen i en harmonisk enhed, der <span className='text-third'>styrker dit brand.</span>
								<br></br><br></br>En god brugeroplevelse er kernen i vores tilgang. Vi anvender en brugercentreret designproces, der inkluderer research, brugerrejser, wireframes og prototyper for at sikre, at hver løsning er <span className='text-third'>intuitiv og brugervenlig.</span>
								<br></br><br></br>Vores mål er at forbedre kunderejsen, reducere friktion og gøre det nemt for dine besøgende at nå frem til de ønskede handlinger, hvilket i sidste ende øger konverteringsraten.
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

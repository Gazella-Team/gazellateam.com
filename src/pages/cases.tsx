import Layout from '@/components/Layout'
import SecondHero from '@/components/reused/DefaultHero'
import CaseComponent from '@/components/cases'
import Team from '@/components/team'
import PageIntro from '@/components/reused/PageIntro'
import MarginPageIntro from '@/components/reused/MarginPageIntro'

export default function Solutions() {
	return (
		<Layout transparentNav={true}>
			<MarginPageIntro
				headingSize="sm"
				starter="madewithlove"
				heading="Mere end 10.000 samlede udviklingstimer i baggagen"
				description="Dyk ned i vores forskellige cases og interne projekter, som vi udvikler for at inspirere og forbedre virksomheder."
			/>
			<CaseComponent />
		</Layout>
	)
}

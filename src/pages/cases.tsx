import Layout from '@/components/Layout'
import SecondHero from '@/components/reused/DefaultHero'
import CaseComponent from '@/components/cases'
import Team from '@/components/team'
import PageIntro from '@/components/reused/PageIntro'

export default function Solutions() {
	return (
		<Layout>
			<PageIntro
				headingSize="sm"
				starter="madewithlove"
				heading="Mere end 10.000 samlede udviklingstimer i baggagen"
				description="Dyk ned i vores forskellige cases og interne projekter, som vi udvikler for at inspirere og forbedre virksomheder."
			/>
			<CaseComponent />
		</Layout>
	)
}

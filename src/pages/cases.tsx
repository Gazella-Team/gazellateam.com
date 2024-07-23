import Layout from '@/components/Layout'
import SecondHero from '@/components/reused/DefaultHero'
import CaseComponent from '@/components/cases'
import Team from '@/components/team'
import PageIntro from '@/components/reused/PageIntro'

export default function Solutions() {
	return (
		<Layout>
			<PageIntro
				starter="madewithlove"
				heading="Cases"
				description="Dyk ned i vores forskellige cases og interne projekter, som vi udvikler for at inspirere og forbedre virksomheder."
			/>
			<CaseComponent />
		</Layout>
	)
}

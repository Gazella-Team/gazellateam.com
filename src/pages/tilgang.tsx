import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import SecondHero from '@/components/reused/DefaultHero'
import MarginPageIntro from '@/components/reused/MarginPageIntro'
import PageIntro from '@/components/reused/PageIntro'
import Team from '@/components/team'

export default function People() {
	return (
		<Layout cta={true}>
			<Meta title={`Tilgang - Gazella Team`} />
			<PageIntro 
				starter="theteam"
				heading="Fra ide til produkt"
				description="Vi er et lille team af udviklere, designere og kommunikationsansvarlige, som hver dag stræber efter at inspirere og løfte virksomheder med software."
			/>
			<Team />
		</Layout>
	)
}

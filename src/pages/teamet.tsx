import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import SecondHero from '@/components/reused/DefaultHero'
import PageIntro from '@/components/reused/PageIntro'
import Team from '@/components/team'

export default function People() {
	return (
		<Layout cta={true}>
			<Meta title={`Teamet - Gazella Team`} />
			<PageIntro
				starter="theteam"
				heading="Et ungt bureau med meget erfaring"
				description="Vi er et lille team af udviklere, designere og kommunikationsansvarlige, som hver dag stræber efter at inspirere og løfte virksomheder med software."
			/>
			<Team />
		</Layout>
	)
}

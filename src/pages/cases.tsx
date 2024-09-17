import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import CaseHero from '@/components/reused/CaseHero'
import PageIntro from '@/components/reused/PageIntro'
import Parallax from '@/components/reused/Parallax'
import Team from '@/components/team'

export default function Cases() {
	return (
		<Layout cta={true}>
			<Meta
				keywords="team, udviklere, designere, kommunikationsansvarlige, inspirere"
				description="Vi er et lille team af udviklere, designere og kommunikationsansvarlige, som hver dag stræber efter at inspirere og løfte virksomheder med software."
				title={`Mød vores engagerede team - Gazella Team`}
			/>
			<CaseHero heading="En unik influencer platform" />
			<Parallax height={800} image={'/cases/burst.webp'} />
		</Layout>
	)
}

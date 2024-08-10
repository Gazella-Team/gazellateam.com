import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import PageIntro from '@/components/reused/PageIntro'
import ServicesComponent from '@/components/services'

export default function ydelser() {
	return (
		<Layout cta={true}>
			<Meta title={`Services - Gazella Team`} />
			<ServicesComponent />
		</Layout>
	)
}

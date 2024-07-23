import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import PageIntro from '@/components/reused/PageIntro'
import ServicesComponent from '@/components/services'

export default function App() {
	return (
		<Layout>
			<Meta title={`App - Gazella Team`} />
			<ServicesComponent />
		</Layout>
	)
}

import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/DefaultHero";
import CaseComponent from "@/components/cases"

export default function Cases() {
    return (
        <Layout>
            <SecondHero heading="Cases we're proud of" description="We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment is this." />
            <CaseComponent />
        </Layout>
    )
}
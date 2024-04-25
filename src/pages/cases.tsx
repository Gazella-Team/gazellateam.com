import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/DefaultHero";
import CaseComponent from "@/components/cases"

export default function Cases() {
    return (
        <Layout>
            <SecondHero heading="Work we're proud of" description="We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment to sustainability drives us to integrate environmental considerations into every aspect of our business." />
            <CaseComponent />
        </Layout>
    )
}
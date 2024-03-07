import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/SecondHero";
import Work from "@/components/work";

export default function Cases() {
    return (
        <Layout>
            <SecondHero heading="Projects and partnerships" description="We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment to sustainability drives us to integrate environmental considerations into every aspect of our business." />
            <Work />
        </Layout>
    )
}
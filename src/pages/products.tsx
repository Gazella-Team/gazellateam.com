import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/SecondHero";
import Brands from "@/components/brands";

export default function Products() {
    return (
        <Layout>
            <SecondHero founders={true} heading="Projects we're building" description="We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment to sustainability drives us to integrate environmental considerations into every aspect of our business." />
            <Brands />
        </Layout>
    )
}
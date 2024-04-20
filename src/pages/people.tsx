import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/DefaultHero";
import Team from "@/components/team";

export default function People() {
    return (
        <Layout>
            <SecondHero heading="Meet the team" description="We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment to sustainability drives us to integrate environmental considerations into every aspect of our business." />
            <Team />
        </Layout>
    )
}
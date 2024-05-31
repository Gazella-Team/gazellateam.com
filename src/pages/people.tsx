import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/DefaultHero";
import Team from "@/components/team";

export default function People() {
    return (
        <Layout>
            <SecondHero heading="Meet the team" description="We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment is this." />
            <Team />
        </Layout>
    )
}
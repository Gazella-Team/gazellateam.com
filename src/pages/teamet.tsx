import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";
import SecondHero from "@/components/reused/DefaultHero";
import PageIntro from "@/components/reused/PageIntro";
import Team from "@/components/team";

export default function People() {
    return (
        <Layout>
            <Meta title={`People - Gazella Team`} />
            <PageIntro starter="theteam" heading="Teamet" description="Mød vores team, som hver dag arbejder for at " />
            <Team />
        </Layout>
    )
}
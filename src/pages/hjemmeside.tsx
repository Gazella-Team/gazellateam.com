import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";
import SecondHero from "@/components/reused/DefaultHero";
import PageIntro from "@/components/reused/PageIntro";
import Team from "@/components/team";

export default function People() {
    return (
        <Layout>
            <Meta title={`People - Gazella Team`} />
            <PageIntro starter="theteam" heading="Teamet" description="Dyk ned i vores forskellige cases og interne projekter, som vi udvikler for at inspirere og forbedre virksomheder." />
            <Team />
        </Layout>
    )
}
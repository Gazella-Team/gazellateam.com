import Layout from "@/components/Layout";
import HeroImage from "@/components/reused/HeroImage";
import PageIntro from "@/components/reused/PageIntro";
import Team from "@/components/team";

export default function WebDevelopment() {
    return (
        <Layout>
            <PageIntro heading="App Development" description="We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment is this." />
            <HeroImage />
        </Layout>
    )
}
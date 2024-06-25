import Layout from "@/components/Layout";
import PageIntro from "@/components/reused/PageIntro";
import Team from "@/components/team";

export default function WebDevelopment() {
    return (
        <Layout>
            <PageIntro heading="Meet the team" description="We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment is this." />
            <Team />
        </Layout>
    )
}
import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/DefaultHero";
import CaseComponent from "@/components/cases"
import Team from "@/components/team";
import PageIntro from "@/components/reused/PageIntro";

export default function PerformanceAudit() {
    return (
        <Layout>
            <PageIntro heading="Free Perfromance Audit" description="We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment is this." />
            <CaseComponent />
        </Layout>
    )
}
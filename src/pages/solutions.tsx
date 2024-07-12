import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/DefaultHero";
import CaseComponent from "@/components/cases"
import Team from "@/components/team";
import PageIntro from "@/components/reused/PageIntro";

export default function Solutions() {
    return (
        <Layout>
            <PageIntro starter="madewithlove" smallWidth={true} heading="Solutions" description="" />
            <CaseComponent />
        </Layout>
    )
}
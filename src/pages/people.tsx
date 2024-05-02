import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/DefaultHero";
import Team from "@/components/team";

export default function People() {
    return (
        <Layout>
            <SecondHero heading="Meet the team" description="A small team, with global ambitions. Put faces to the team, who everyday strives to elevate software, build solutions and make a difference for partners worldwide." />
            <Team />
        </Layout>
    )
}
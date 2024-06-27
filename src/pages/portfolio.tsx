import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/DefaultHero";
import CaseComponent from "@/components/cases"
import Team from "@/components/team";
import PageIntro from "@/components/reused/PageIntro";
import PortfolioProjects from "@/components/PortfolioProjects";
import Meta from "@/components/Layout/Meta";

export default function Portfolio() {
    return (
        <Layout>
            <Meta title={`Portfolio - Gazella Team`} />
            <PageIntro heading="Portfolio" description="Read more about the projects we've built for clients, and the projects we build internally." />
            <PortfolioProjects />
        </Layout>
    )
}
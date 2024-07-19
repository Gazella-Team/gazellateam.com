import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";
import CalEmbed from "@/components/cal";
import SecondHero from "@/components/reused/DefaultHero";
import PageIntro from "@/components/reused/PageIntro";
import Cal from "@calcom/embed-react";

export default function Contact() {
    return (
        <Layout>
            <Meta title={`Kontakt os - Gazella Team`} />
            <PageIntro smallWidth={true} heading="Lad os snakke" description="Vi er altid klar til en god snak om software og forretning. Kom i kontakt med vores team i dag." />
            <CalEmbed />
        </Layout>
    )
}
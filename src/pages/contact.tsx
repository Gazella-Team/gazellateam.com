import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";
import CalEmbed from "@/components/cal";
import SecondHero from "@/components/reused/DefaultHero";
import PageIntro from "@/components/reused/PageIntro";
import Cal from "@calcom/embed-react";

export default function Contact() {
    return (
        <Layout>
            <Meta title={`Get in touch - Gazella Team`} />
            <PageIntro heading="Let's talk" description="We're always up for a good talk regarding software and business. Get in touch with our team today." />
            <CalEmbed />
        </Layout>
    )
}
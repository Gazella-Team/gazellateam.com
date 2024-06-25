import Layout from "@/components/Layout";
import CalEmbed from "@/components/cal";
import SecondHero from "@/components/reused/DefaultHero";
import PageIntro from "@/components/reused/PageIntro";
import Cal from "@calcom/embed-react";

export default function Contact() {
    return (
        <Layout>
            <PageIntro heading="Let's talk" description="We're always up for a good talk regarding software and business. Get in touch with our team today." />
            <CalEmbed />
        </Layout>
    )
}
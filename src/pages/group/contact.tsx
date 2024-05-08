import CalEmbed from "@/components/cal";
import Layout from "@/components/group/Layout";
import SecondHero from "@/components/reused/DefaultHero";

export default function Contact() {
    return (
        <Layout>
            <SecondHero heading="Let's talk" description="We're always up for a good talk regarding software and business. Get in touch with our team today." />
            <CalEmbed />
        </Layout>
    )
}
import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/SecondHero";
import ContactInfo from "@/components/contactinfo";

export default function Contact() {
    return (
        <Layout>
            <SecondHero heading="Let's talk" description="We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment to sustainability drives us to integrate environmental considerations into every aspect of our business." />
            <ContactInfo />
        </Layout>
    )
}
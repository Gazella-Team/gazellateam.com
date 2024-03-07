import Layout from "@/components/Layout";
import ImageHero from "@/components/reused/ImageHero";
import SecondHero from "@/components/reused/SecondHero";

export default function AppDevelopment() {
    return (
        <Layout>
            <SecondHero heading="Native app development combined with seamless user experience" description="We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment to sustainability drives us to integrate environmental considerations into every aspect of our business." />
            <ImageHero path="/bgs/app.png" />
        </Layout>
    )
}
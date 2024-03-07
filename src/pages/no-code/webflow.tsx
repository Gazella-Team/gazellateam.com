import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/SecondHero";
import ImageHero from "@/components/reused/ImageHero";

export default function Webflow(){
    return (
        <Layout>
            <SecondHero heading="Web design using webflow" description="Take control of HTML, CSS, and JavaScript in a visual canvas. Webflow generates clean, semantic code that’s ready to publish." />
            <ImageHero path="/bgs/tablet.svg" />
        </Layout>
    )
} 
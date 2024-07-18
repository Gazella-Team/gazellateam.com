import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";
import SecondHero from "@/components/reused/DefaultHero";
import ImageHero from "@/components/reused/ImageHero";
import PageIntro from "@/components/reused/PageIntro";
import Team from "@/components/team";
import Testimonials from "@/components/hjemmeside/testimonials";
import Kompetencer from "@/components/hjemmeside/kompetencer";
import TrustBar from "@/components/hjemmeside/trust-bar";

export default function People() {
    return (
        <Layout>
            <Meta title={`People - Gazella Team`} />
            <ImageHero heading="Er du klar til at få flere kunder og mere kendskab? Det starter med en performance hjemmeside" paragraph="Vi garanterer dig en fordobling i unikke månedlige besøgende med en ny hjemmeside indenfor 2 måneder - Ellers betaler vi alle pengene tilbage." imagePath="/hjemmeside.webp" />
            <TrustBar />
            <Kompetencer />
            <Testimonials />
        </Layout>
    )
}
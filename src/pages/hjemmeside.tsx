import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";
import SecondHero from "@/components/reused/DefaultHero";
import ImageHero from "@/components/reused/ImageHero";
import PageIntro from "@/components/reused/PageIntro";
import Team from "@/components/team";
import Testimonials from "@/components/hjemmeside/testimonials";
import Kompetencer from "@/components/hjemmeside/kompetencer";
import TrustBar from "@/components/hjemmeside/trust-bar";
import ServiceSlider from "@/components/service-slider";
import Link from "next/link";

export default function People() {
    return (
        <Layout>
            <Meta title={`Hjemmeside: Er du klar til at få flere kunder og mere kendskab? Det starter med en performance hjemmeside. - Gazella Team`} />
            <ImageHero heading="Er du klar til at få flere kunder og mere kendskab? Det starter med en performance hjemmeside" paragraph="Vi garanterer dig en fordobling i unikke månedlige besøgende med en ny hjemmeside indenfor 2 måneder - Ellers betaler vi alle pengene tilbage." imagePath="/hjemmeside/hjemmeside.webp" />
            <TrustBar />
            <Kompetencer />
            <div className="w-[90%] mb-24 text-center mx-auto max-w-[500px]">
                <h2 className="font-[300] mb-16 text-3xl md:text-4xl leading-[150%] md:leading-[150%]">Vi er så selvsikre på vores web udvikling, at du får alle pengene tilbage hvis ikke du fordobler dine unikke månedlige besøgende på 2 måneder.</h2>
                <Link className="bg-main px-5 py-1.5 rounded-full text-white paragraph font-semibold" href={"/contact"}>Kom igang for kun 899 kr.</Link>
            </div>
            <ServiceSlider />
            <Testimonials />
            <div className="w-[90%] my-24 mx-auto max-w-[700px]">
                <h2 className="font-[300] mb-20 text-3xl md:text-4xl leading-[150%] md:leading-[150%]">Vil du vide hvilke muligheder du har med en hjemmeside? Vi tilbyder et gratis og uforpligtende strategi-kald</h2>
                <p className="text-3xl mb-4 paragraph text-gray-600">+45 50695272</p>
                <p className="text-3xl paragraph text-gray-600">hey@gazellateam.com</p>
            </div>
        </Layout>
    )
}
import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/DefaultHero";
import CaseComponent from "@/components/cases"
import Team from "@/components/team";
import PageIntro from "@/components/reused/PageIntro";

export default function PerformanceAudit() {
    return (
        <Layout>
            <section className="min-h-[600px] bg-gradient-to-t from-main to-white py-24">
                <div className="w-[94%] max-w-[1300px] flex flex-col gap-5 text-center mx-auto">
                    <h1 className="text-5xl font-[300] mx-auto max-w-3xl">Get a 100% free performance audit of your current website</h1>
                    <p className="font-[200] text-gray-200 max-w-2xl mx-auto">We are dedicated to ensuring environmental responsibility is at the core of our operations. Our commitment is this. Our commitment is this.</p>
                </div>
            </section>
            <CaseComponent />
        </Layout>
    )
}
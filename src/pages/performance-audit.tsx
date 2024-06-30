import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/DefaultHero";
import CaseComponent from "@/components/cases"
import Team from "@/components/team";
import PageIntro from "@/components/reused/PageIntro";
import Link from "next/link";

export default function PerformanceAudit() {
    return (
        <Layout>
            <section className="min-h-[600px] text-white bg-gradient-to-t from-main via-main/90 to-main/80 pt-24">
                <div className="w-[94%] max-w-[1300px] flex flex-col gap-10 text-center mx-auto">
                    <div className="flex">
                        <p className="border-2 mx-auto px-5 rounded-full py-1 text-sm font-[200]">⚡️ Only 10 spots left</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-5xl font-[300] mx-auto max-w-3xl">Get a 100% free performance audit of your current website</h1>
                        <p className="font-[200] text-gray-200 max-w-2xl mx-auto">Get a tailormade step-by-step guide on how you can increase sales, brand value and traffic through your website. All for free, no binding.</p>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <Link className="bg-white border-2 border-white text-main font-[300] rounded-full px-5 py-2 text-sm" href={"/contact"}>Claim your spot</Link>
                        <Link className="bg-white border-2 border-white text-white font-[300] bg-transparent hover:bg-white hover:text-main transition-all rounded-full px-5 py-2 text-sm" href={"/contact"}>What's included?</Link>
                    </div>
                </div>
                <img className="w-[80%] mt-[-100px] mx-auto" src="/bgs/performance-audit.png"></img>
            </section>
            <CaseComponent />
        </Layout>
    )
}
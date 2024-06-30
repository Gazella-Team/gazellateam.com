import Layout from "@/components/Layout";
import SecondHero from "@/components/reused/DefaultHero";
import CaseComponent from "@/components/cases"
import Team from "@/components/team";
import PageIntro from "@/components/reused/PageIntro";
import Link from "next/link";
import VideoPlayer from "@/components/video";
import SectionIntro from "@/components/reused/SectionIntro";

export default function PerformanceAudit() {
    return (
        <Layout>
            <section className="min-h-[600px] text-white bg-gradient-to-t from-main via-main/90 to-main/80 py-24">
                <div className="w-[94%] max-w-[1300px] flex flex-col gap-10 text-center mx-auto">
                    <div className="flex">
                        <p className="border-2 mx-auto px-5 rounded-full py-1 text-sm font-[200]">⚡️ Only 10 spots left</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-5xl font-[300] mx-auto max-w-3xl">Get a 100% free performance audit of your current website</h1>
                        <p className="font-[200] text-gray-200 max-w-2xl mx-auto">Increase sales, brand value and traffic through your website with a tailormade step-by-step guide. Get yours all for free within 2 days, no binding.</p>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <Link className="bg-white border-2 border-white text-main font-[300] rounded-full px-5 py-2 text-sm" href={"/contact"}>Claim your spot</Link>
                        <Link className="bg-transparent hover:bg-white hover:text-main transition-all border-2 border-white text-white font-[300] rounded-full px-5 py-2 text-sm" href={"/contact"}>Claim your spot</Link>
                    </div>
                    <div className="max-w-4xl mx-auto mt-10">
                     <VideoPlayer />
                    </div>
                </div>
            </section>
            <SectionIntro heading="A proven strategy that has helped hundredsq" />
        </Layout>
    )
}
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
                        <p className="border-2 mx-auto px-5 rounded-full py-1 text-sm font-[200]">⚡️ 35 / 50 spots taken</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl lg:text-5xl font-[300] mx-auto max-w-3xl">Get a 100% free performance audit of your current website</h1>
                        <p className="font-[200] text-gray-200 max-w-2xl mx-auto">Increase sales, brand value and traffic through your website with a tailormade step-by-step guide. Get yours all for free within 2 days, no binding.</p>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <Link className="bg-white border-2 border-white text-main font-[300] rounded-full px-5 py-2 text-sm" target="_blank" href={"https://osep408e8xh.typeform.com/to/iv2Oj1ez"}>Claim your spot</Link>
                        <Link className="bg-transparent hover:bg-white hover:text-main transition-all border-2 border-white text-white font-[300] rounded-full px-5 py-2 text-sm" href={"/contact"}>What&apos;s included?</Link>
                    </div>
                    <div className="max-w-4xl w-[100%] mx-auto mt-10">
                     <VideoPlayer />
                    </div>
                </div>
            </section>
            <SectionIntro width="5xl" space="20" heading="A proven strategy that has helped hundreds improve their website">
                <div className="grid mt-24 md:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-28">
                    <div className="bg-[#fafafa] shadow-md text-center border border-gray-600/10 rounded-2xl p-10">
                        <div className="mt-[-80px] flex mb-6 justify-center">
                            <img className="w-20 mt rounded-full" src="/testimonial-headshots/gustav-walsted.webp"></img>
                        </div>
                        <div className="mb-8">
                            <h2 className="font-[300]">Gustav Walsted</h2>
                            <p className="text-sm font-[200] text-gray-600">Founder, coad.dk</p>
                        </div>
                        <p className="font-[200] text-sm leading-7">Makeable har igen gjort et solidt stykke arbejde med denne totalrenoverede version af AarhusGuiden. Lige fra design til launch har vi følt os i de bedste hænder hos det kompetente team, og vi er meget stolte af resultatet.</p>
                    </div>
                    <div className="bg-[#fafafa] shadow-md text-center border border-gray-600/10 rounded-2xl p-10">
                        <div className="mt-[-80px] flex mb-6 justify-center">
                            <img className="w-20 mt rounded-full" src="/testimonial-headshots/gustav-walsted.webp"></img>
                        </div>
                        <div className="mb-8">
                            <h2 className="font-[300]">Gustav Walsted</h2>
                            <p className="text-sm font-[200] text-gray-600">Founder, coad.dk</p>
                        </div>
                        <p className="font-[200] text-sm leading-7">Makeable har igen gjort et solidt stykke arbejde med denne totalrenoverede version af AarhusGuiden. Lige fra design til launch har vi følt os i de bedste hænder hos det kompetente team, og vi er meget stolte af resultatet.</p>
                    </div>
                    <div className="bg-[#fafafa] shadow-md text-center border border-gray-600/10 rounded-2xl p-10">
                        <div className="mt-[-80px] flex mb-6 justify-center">
                            <img className="w-20 mt rounded-full" src="/testimonial-headshots/gustav-walsted.webp"></img>
                        </div>
                        <div className="mb-8">
                            <h2 className="font-[300]">Gustav Walsted</h2>
                            <p className="text-sm font-[200] text-gray-600">Founder, coad.dk</p>
                        </div>
                        <p className="font-[200] text-sm leading-7">Makeable har igen gjort et solidt stykke arbejde med denne totalrenoverede version af AarhusGuiden. Lige fra design til launch har vi følt os i de bedste hænder hos det kompetente team, og vi er meget stolte af resultatet.</p>
                    </div>
                </div>
            </SectionIntro>
            <SectionIntro width="5xl" space="0" heading="What's included?">
                <div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white flex flex-col gap-4 rounded-2xl border w-full border-gray-600/10 shadow-md p-10">
                        <h2 className="font-[300]">Personalized consultation</h2>
                        <p className="font-[200] text-sm">Increase sales, brand value and traffic through your website with a tailormade step-by-step guide. Get yours all for free within 2 days, no binding.</p>
                    </div>
                    <div className="bg-white flex flex-col gap-4 rounded-2xl border w-full border-gray-600/10 shadow-md p-10">
                        <h2 className="font-[300]">Speed review</h2>
                        <p className="font-[200] text-sm">Increase sales, brand value and traffic through your website with a tailormade step-by-step guide. Get yours all for free within 2 days, no binding.</p>
                    </div>
                    <div className="bg-white flex flex-col gap-4 rounded-2xl border w-full border-gray-600/10 shadow-md p-10">
                        <h2 className="font-[300]">SEO review</h2>
                        <p className="font-[200] text-sm">Increase sales, brand value and traffic through your website with a tailormade step-by-step guide. Get yours all for free within 2 days, no binding.</p>
                    </div>
                    <div className="bg-white flex flex-col gap-4 rounded-2xl border w-full border-gray-600/10 shadow-md p-10">
                        <h2 className="font-[300]">Branding analysis</h2>
                        <p className="font-[200] text-sm">Increase sales, brand value and traffic through your website with a tailormade step-by-step guide. Get yours all for free within 2 days, no binding.</p>
                    </div>
                    <div className="bg-white flex flex-col gap-4 rounded-2xl border w-full border-gray-600/10 shadow-md p-10">
                        <h2 className="font-[300]">Points of improvement</h2>
                        <p className="font-[200] text-sm">Increase sales, brand value and traffic through your website with a tailormade step-by-step guide. Get yours all for free within 2 days, no binding.</p>
                    </div>
                    <div className="bg-white flex flex-col gap-4 rounded-2xl border w-full border-gray-600/10 shadow-md p-10">
                        <h2 className="font-[300]">Excecution guide</h2>
                        <p className="font-[200] text-sm">Increase sales, brand value and traffic through your website with a tailormade step-by-step guide. Get yours all for free within 2 days, no binding.</p>
                    </div>
                </div>
            </SectionIntro>
            <SectionIntro width="5xl" marginBottom={true} space="0" heading="Limited spots: Do as +100 other business owners and enroll for free">
                <div className="flex items-center justify-center mt-8">
                    <Link className="bg-main border-2 border-main text-white font-[300] rounded-full px-5 py-2 text-sm" target="_blank" href={"https://osep408e8xh.typeform.com/to/iv2Oj1ez"}>Enroll in 30 seconds</Link>
                </div>
            </SectionIntro>
        </Layout>
    )
}
import { Reveal } from "@/components/Animations/Reveal";
import Layout from "@/components/Layout";
import CaseHero from "@/components/reused/CaseHero";
import CustomerDesc from "@/components/customerdesc";

export default function ToolBird() {
    return (
        <Layout>
            <CaseHero heading="All the supplementary tools your tech startup needs to start, scale and run, all in one platform" description="The political landscape is accelerating in terms of complexity. To keep up with pace, Spaak Technologies works to empower organisations in digitalising operations and achieving overview in the oceans of information." />
            <Reveal>
                <img src="/spaak.png"  className="w-[94%] rounded-[14px] mx-auto h-[800px] object-cover"></img>
            </Reveal>
            <CustomerDesc />
            <img className="w-[94%] mx-auto rounded-[14px] h-[600px] object-cover" src="/spaak2.png"></img>
        </Layout>
    )
}
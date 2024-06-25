import Layout from "@/components/Layout";
import Hero from "@/components/hero";
import PageIntro from "@/components/reused/PageIntro";
import VideoPlayer from "@/components/video";

export default function Home() {
  return (
    <Layout>
      <PageIntro heading="Custom software development for companies" description="We help companies of all sizes sell more, build workflows and launch innovative ideas through tailormade software development." />
      <div className="w-[94%] rounded-2xl mb-20 mx-auto max-w-[1300px]">
        <VideoPlayer />
      </div>
    </Layout>
)}

import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";
import Hero from "@/components/hero";
import PageIntro from "@/components/reused/PageIntro";
import VideoPlayer from "@/components/video";

export default function Home() {
  return (
    <Layout>
     <Meta title={`Home - Gazella Team`} />
     <Hero />
      <div className="w-[94%] rounded-2xl mb-20 mx-auto max-w-[1300px]">
        <VideoPlayer />
      </div>
    </Layout>
)}

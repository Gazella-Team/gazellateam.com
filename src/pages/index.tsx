import Layout from "@/components/Layout";
import Hero from "@/components/hero";
import VideoPlayer from "@/components/video";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="w-[86%] rounded-2xl mb-24 mx-auto max-w-5xl">
        <VideoPlayer />
      </div>
    </Layout>
)}

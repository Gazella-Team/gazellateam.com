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
     <img src="/bg.webp"></img>
    </Layout>
)}

import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";
import Hero from "@/components/hero";
import PageIntro from "@/components/reused/PageIntro";
import { BlurHero } from "@/components/ui/blur-hero";
import VideoPlayer from "@/components/video";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
     <Meta title={`Et hjemmeside- og app bureau med øje for detalje. Vi har +10 års samlet erfaring indenfor software. - Gazella Team`} />
     <BlurHero>
            <section className="flex absolute h-full items-center z-[999]">
                <div className="w-[90%] mx-auto flex justify-center gap-8 flex-col h-full max-w-6xl">
                        <h2 className="text-5xl font-[300] max-w-3xl text-white">On a mission to help ambitious founders raise capital through systematic outreach.</h2>
                        <p className="text-gray-300 font-[200] max-w-md text-lg">We help entrepreneurs achieve big things in short spaces of time through growth funding and analytics.</p>
                </div>
            </section>
        </BlurHero>
    </Layout>
)}

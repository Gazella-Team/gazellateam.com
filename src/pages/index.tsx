import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import Hero from '@/components/hero'
import PageIntro from '@/components/reused/PageIntro'
import VideoPlayer from '@/components/video'

export default function Home() {
  return (
    <Layout >
      <Meta title={`Et hjemmeside- og app bureau med øje for detalje. Vi har +10 års samlet erfaring indenfor software. - Gazella Team`} />
      <Hero />
      <img className="w-[90%] max-w-[1400px] mx-auto" src="/bg.webp"></img>
    </Layout>
)}

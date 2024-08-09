import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import Hero from '@/components/hero'
import PageIntro from '@/components/reused/PageIntro'
import Testimonials from '@/components/testimonials'
import VideoPlayer from '@/components/video'

export default function Home() {
  return (
    <Layout>
      <Meta title={`Gazella Team: Et digitalt bureau med øje for detalje. Vi har +10 års samlet erfaring indenfor software.`} />
      <Hero />
    </Layout>
)}

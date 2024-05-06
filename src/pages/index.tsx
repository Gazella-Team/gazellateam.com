import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Hero from "@/components/hero";
import GraphicDisplay from "@/components/GraphicDisplay";
import ServiceSlider from "@/components/service-slider";
import Video from "@/components/video";
import Cases from "@/components/cases";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Video />
      <Cases />
    </Layout>
)}

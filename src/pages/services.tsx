import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";
import PageIntro from "@/components/reused/PageIntro";
import ServicesComponent from "@/components/services";

export default function Services() {
  return (
    <Layout>
      <Meta title={`Services - Gazella Team`} />
      <PageIntro starter="skills" heading="Services" smallWidth={true} description="Read more about the projects we've built for clients, and the projects we build internally." />
      <ServicesComponent />
    </Layout>
)}

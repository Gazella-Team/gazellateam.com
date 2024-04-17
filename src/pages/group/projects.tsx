import Layout from "@/components/group/Layout";
import Hero from "@/components/group/hero";
import Projects from "@/components/group/projects";
import DefaultHero from "@/components/reused/DefaultHero";

export default function ProjectsPage() {
  return (
    <Layout>
      <DefaultHero heading="Building the damn future" description="nig" founders={true} />
      <Projects />
    </Layout>
)}

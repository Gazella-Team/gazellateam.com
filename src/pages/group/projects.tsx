import Layout from "@/components/group/Layout";
import Projects from "@/components/group/projects";
import DefaultHero from "@/components/reused/DefaultHero";

export default function ProjectsPage() {
  return (
    <Layout>
      <DefaultHero heading="Building software with impact" description="Take a look at the projects we build and believe in internally" founders={true} />
      <Projects />
    </Layout>
)}

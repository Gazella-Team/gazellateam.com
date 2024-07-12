import Layout from "@/components/Layout";

export default function ToolbirdCase() {
    return (
        <Layout>
            <section className="py-32">
                <div className="w-[94%] max-w-[1200px] mx-auto">
                    <div className="max-w-3xl flex flex-col gap-6">
                        <h3 className="font-[300] text-2xl text-gray-500 paragraph">toolbird.io</h3>
                        <h2 className="text-5xl font-[200] leading-[60px]">Seamless analytics of any webpage. An ideal Google Analytics Alternative</h2>
                    </div>
                </div>
            </section>
            <img src="/cases/large/test.webp"></img>
        </Layout>
    )
}
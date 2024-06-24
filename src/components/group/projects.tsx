import Link from "next/link";
import { Reveal } from "../Animations/Reveal";


export default function Projects() {
    return (
        <section className="py-12">
            <div className="w-[90%] mx-auto max-w-[660px]">
                <div className="inline-block mb-10">
                    <div className="px-4 py-2 text-sm border font-[300] border-gray-600/10 rounded-full shadow-sm select-none flex items-center gap-4 bg-white">
                        <h2>What we&apos;re building</h2>
                    </div>
                </div>
                <Reveal>
                    <h1 className="text-[54px] font-[300] leading-[110%] mb-[50px]">Portfolio Projects</h1>
                </Reveal>
                <Reveal>
                    <div className="flex flex-col gap-6">
                        <div className="bg-white border p-10 border-gray-600/10 rounded-xl">
                            <h2 className="text-base">Toolbird</h2>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>

    )
}
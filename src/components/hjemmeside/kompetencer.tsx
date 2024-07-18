import { Search } from "lucide-react";

export default function Kompetencer() {
    return (
        <section className="pb-24">
            <div className="w-[90%] bg-second rounded-3xl p-10 mx-auto max-w-[1300px]">
                <div className="pb-24 pt-12 text-center">
                    <h2 className="font-[300] text-4xl max-w-xl mx-auto">Vi står for det hele, så du kan gøre det du er bedst til</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="border bg-white rounded-2xl flex flex-col gap-4 border-gray-600/10 shadow-sm p-10">
                        <div className="flex mb-3">
                            <div className="text-white rounded-full bg-main p-2.5">
                                <Search size={18} />
                            </div>
                        </div>
                        <h2 className="font-[300] text-lg text-main">Komplet udvikling</h2>
                        <p className="paragraph text-gray-600">Øg din online synlighed og tiltræk flere kunder med effektiv søgemaskineoptimering.</p>
                    </div>
                    <div className="border bg-white  rounded-2xl flex flex-col gap-4 border-gray-600/10 shadow-sm p-10">
                        <div className="flex mb-3">
                            <div className="text-white rounded-full bg-main p-2.5">
                                <Search size={18} />
                            </div>
                        </div>
                        <h2 className="font-[300] text-lg text-main">Unikt responsivt design</h2>
                        <p className="paragraph text-gray-600">Øg din online synlighed og tiltræk flere kunder med effektiv søgemaskineoptimering.</p>
                    </div>
                    <div className="border bg-white rounded-2xl flex flex-col gap-4 border-gray-600/10 shadow-sm p-10">
                        <div className="flex mb-3">
                            <div className="text-white rounded-full bg-main p-2.5">
                                <Search size={18} />
                            </div>
                        </div>
                        <h2 className="font-[300] text-lg text-main">Hastighedsoptimering</h2>
                        <p className="paragraph text-gray-600">Øg din online synlighed og tiltræk flere kunder med effektiv søgemaskineoptimering.</p>
                    </div>
                    <div className="border bg-white rounded-2xl flex flex-col gap-4 border-gray-600/10 shadow-sm p-10">
                        <div className="flex mb-3">
                            <div className="text-white rounded-full bg-main p-2.5">
                                <Search size={18} />
                            </div>
                        </div>
                        <h2 className="font-[300] text-lg text-main">Søgemaskineoptimering</h2>
                        <p className="paragraph text-gray-600">Øg din online synlighed og tiltræk flere kunder med effektiv søgemaskineoptimering.</p>
                    </div>
                    <div className="border bg-white rounded-2xl flex flex-col gap-4 border-gray-600/10 shadow-sm p-10">
                        <div className="flex mb-3">
                            <div className="text-white rounded-full bg-main p-2.5">
                                <Search size={18} />
                            </div>
                        </div>
                        <h2 className="font-[300] text-lg text-main">Søgemaskineoptimering</h2>
                        <p className="paragraph text-gray-600">Øg din online synlighed og tiltræk flere kunder med effektiv søgemaskineoptimering.</p>
                    </div>
                    <div className="border bg-white rounded-2xl flex flex-col gap-4 border-gray-600/10 shadow-sm p-10">
                        <div className="flex mb-3">
                            <div className="text-white rounded-full bg-main p-2.5">
                                <Search size={18} />
                            </div>
                        </div>
                        <h2 className="font-[300] text-lg text-main">Analyse og rapportering</h2>
                        <p className="paragraph text-gray-600">Øg din online synlighed og tiltræk flere kunder med effektiv søgemaskineoptimering.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { ArrowRight } from "lucide-react";

export default function Cta() {
    return (
        <section className="py-32 bg-main border-t border-gray-600/10">
            <div className="w-[90%] flex text-white flex-col gap-16 mx-auto max-w-7xl">
                <h2 className="text-3xl max-w-4xl">Virksomheder, der forstår at give brugerne en <span className="text-second">gennemført</span> digital oplevelse, øger <span className="text-second">engagementet</span> og loyaliteten. Her er, hvordan vi hjælper med at skabe forretning på <span className="text-second">mobilen</span>.</h2>
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-5">
                        <div className="p-4 border rounded-full border-white">
                            <ArrowRight className="text-white" />
                        </div>
                        <p className="text-xl">Skriv til Lasse</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="p-4 border rounded-full border-white">
                            <ArrowRight className="text-white" />
                        </div>
                        <p className="text-xl">Ring 50 69 52 72</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
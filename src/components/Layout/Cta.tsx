import { ArrowUpRight } from "lucide-react";
import EstimateSheet from "../modals/EstimateSheet";
import Link from "next/link";

export default function Cta() {
    return (
        <>
        <section className="bg-main">
            <div className="w-[90%] text-white max-w-7xl mx-auto py-40">
                <h1 className="text-6xl mb-[30px] font-semibold max-w-2xl">Har du en ide til en hjemmeside eller app?</h1>
                <p className="text-xl text-gray-200 justify-end max-w-3xl font-light md:text-2xl">
					Vi skaber værdiskabende app- og web løsninger ved kombination af tekniske, salgspsykologiske og designmæssige kompetencer.					
				</p>
            </div>
        </section>
        </>
    )
}
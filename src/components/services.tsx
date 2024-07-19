import { Reveal } from "./Animations/Reveal";

export default function Services() {
    return (
        <section className="py-12 pb-24 bg-cover bg-center flex flex-col items-end">
            <div className="w-[90%] mx-auto max-w-[700px] flex flex-col">
                <div className="max-w-2xl">
                    <Reveal>
                        <div className="mb-14 flex flex-col gap-4">
                            <h2 className="text-2xl font-[300] text-main">App udvikling</h2>
                            <p className="font-light text-[18px] paragraph text-gray-600">
                            Fremtiden er mobil. Vi specialiserer os i native app-udvikling på tværs af platforme for at levere unikke mobiloplevelser til både iOS og Anroid. Gennem hele udviklingsprocessen sørger vi for kontinuerlig iteration og feedback, efterfulgt af post-lancering support for at sikre en fremtidssikret skalerbar løsning, der passer til din vision.                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="mb-14 flex flex-col gap-4">
                            <h2 className="text-2xl font-[300] text-main">Design og brugeroplevelse</h2>
                            <p className="font-light text-[18px] paragraph text-gray-600">
                            En software uden brugervenligt design og en brugeroplevelse, der er svær at navigere, er ingenting. Når vi arbejder på et projekt, sørger vi for at designe, teste og implementere et unikt design sammen med en struktureret brugeroplevelse, baseret på din målgruppe.                            </p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-[300] text-main">Shopify udvikling</h2>
                            <p className="font-light text-[18px] paragraph text-gray-600">
                            At have et konverteringsoptimeret setup til din webshop er essentielt for optimale resultater. Ved at implementere en unik identitet sammen med konverteringsoptimerede sider og betalingsflows, er vi i stand til at maksimere potentialet i enhver webshop.                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>

    )
}
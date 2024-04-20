const caseData = [
    {heading:"Minecraft Buzz Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak2.png"},
    {heading:"Minecraft Buzz Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak2.png"},
    {heading:"Minecraft Buzz Auctions", description: "Seamless platform for slot bidding for minecraft servers", image:"/cases/spaak2.png"},
]

export default function Cases() {
    return (
        <section className="pb-24">
            <div className="w-[94%] gap-6 mx-auto max-w-[1300px] grid md:grid-cols-1 xl:grid-cols-3">
                {caseData.map((v, index) => <CaseCard key={v.heading} Obj={v} />)}
            </div>
        </section>
    )
}

function CaseCard(props:any) {
    return (
        <div className="bg-[url(/cases/spaak2.png)] bg-center bg-cover min-h-[500px] rounded-xl p-10">
            <h1>{props.Obj.heading}</h1>
        </div>
    )
}
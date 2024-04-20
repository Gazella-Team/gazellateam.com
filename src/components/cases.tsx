const caseData = [
    {heading:"Minecraft Buzz Auctions"},
    {heading:"Minecraft Buzz Auctions"},
    {heading:"Minecraft Buzz Auctions"},
]

export default function Cases() {
    return (
        <section className="py-24">
            <div className="w-[94%] gap-6 mx-auto max-w-[1300px] grid md:grid-cols-1 xl:grid-cols-3">
                {caseData.map((v, index) => <CaseCard key={v.heading} Obj={v} />)}
            </div>
        </section>
    )
}

function CaseCard(props:any) {
    return (
        <div>
            <h1>{props.Obj.heading}</h1>
        </div>
    )
}
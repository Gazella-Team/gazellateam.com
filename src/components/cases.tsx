const caseData = [
    {heading:"Minecraft Buzz Auctions"}
]

export default function Cases() {
    return (
        <section className="py-24">
            <div>
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
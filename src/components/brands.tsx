import Link from "next/link"
import { Reveal } from "./Animations/Reveal"

const brandsData = [
    {company: "ToolBird", caseDescription: "The all-in-one toolkit for your SaaS, providing all the features you need to start, scale and run a profitable product - all in one platform.", caseImage: "/products/toolbird.svg", tag:["web", "UI/UX", "seo"], link: "/work/cases/coad"},
    {company: "Centox", caseDescription: "Planmates is a mobile app, made to make planning new events and plans with your friends easier", caseImage: "/products/centox.svg", tag:["web-app", "design", "frontend"], link: "/work/cases/centox"},
]

export default function Brands() {
    return (
        <section className="py-[100px] pt-[0px]">
            <div className="w-[94%] mx-auto grid grid-cols-2 gap-[25px] max-w-main">
                {brandsData.map(v => <BrandCard key={v} Obj={v} />)}
            </div>
        </section>
    )
}

const BrandCard = (props:any) => {
    return (
        <Reveal>
        <Link href={props.Obj.link} className="h-[600px] w-full rounded-[14px] bg-center bg-cover flex flex-col justify-end" style={{backgroundImage: `linear-gradient(rgba(5, 29, 64, 0), rgba(5, 29, 64, 0.5)), url(${props.Obj.caseImage})`}}>
            <div className="text-white p-[30px]">
                <div>
                    <h1 className="font-[200] text-[28px] leading-[38px] mb-[14px]">{props.Obj.company}</h1>
                    <p className="font-[100] leading-[26px]">{props.Obj.caseDescription}</p>
                </div>
            </div>

        </Link>
        </Reveal>

    )
}
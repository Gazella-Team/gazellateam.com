import Link from "next/link"
import { Reveal } from "./Animations/Reveal"
import { useState } from "react"

const casesData = [
    {company: "Spaak Technologies", caseDescription: "Udvikling af Vid&Sans – nyt videnskabeligt medie fra Århus Universitetsforlag.", caseImage: "/spaak.png", tag:["Integrations", "Web", "Data"], link: "/spaak"},
    {company: "Pandoras Box", caseDescription: "Planmates is a mobile app, made to make planning new events and plans with your friends easier", caseImage: "/bgs/app.png", tag:"Web", link: "/work/cases/centox"},
    {company: "COAD", caseDescription: "Planmates is a mobile app, made to make planning new events and plans with your friends easier", caseImage: "/work.png", tag:"App", link: "/work/cases/planmates"},
    {company: "Scalender", caseDescription: "Planmates is a mobile app, made to make planning new events and plans with your friends easier", caseImage: "/work.png", tag:"App", link: "/work/cases/planmates"},
    {company: "Organic Masterclass", caseDescription: "Udvikling af Vid&Sans – nyt videnskabeligt medie fra Århus Universitetsforlag.", caseImage: "/work.png", tag:"Web", link: "/work/cases/organicmasterclass"},
]

const categories = ["All", "App", "Web", "Data", "Integrations"]

export default function Work() {
    const [currentCategory, setCurrentCategory] = useState("All");

    function tagFilter() {
        let result = [];

        for (let i = 0; i < casesData.length; i++) {
            if (casesData[i].tag.includes(currentCategory)) {
                result.push(casesData[i])
            }
        }
        return result
    }

    return (
        <section className="py-[100px] pt-[00px]">
            
{/*       <div className="flex items-center justify-center">
                <Reveal>
                    <div className="flex items-center justify-center gap-[10px] shadow-clean p-[20px] mb-[40px] rounded-[14px]">
                        {categories.map((v:any) => <div className={v === currentCategory ? "bg-gray-100 rounded-[14px]":""}><p onClick={() => setCurrentCategory(v)} className="font-[300] px-[16px] py-[2px] cursor-pointer">{v}</p></div>
                            )}
                    </div>
                </Reveal>
            </div>
    */}
            <div className="w-[94%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-[25px] max-w-main">
                {currentCategory === "All" ? casesData.map(v => <CaseCard key={v} Obj={v} />):tagFilter().map(v => <CaseCard key={v} Obj={v} />)}
            </div>
        </section>
    )
}

const CaseCard = (props:any) => {
    return (
        <Reveal>
        <Link href={props.Obj.link} className="h-[600px] lazy w-full rounded-[14px] bg-center bg-cover flex flex-col justify-end" style={{backgroundImage: `linear-gradient(rgba(5, 29, 64, 0), rgba(5, 29, 64, 0.8)), url(${props.Obj.caseImage})`}}>

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
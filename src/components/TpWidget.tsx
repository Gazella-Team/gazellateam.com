import Link from "next/link";

export default function TpWidget() {
    return (
        <Link target="_blank" href={"https://dk.trustpilot.com/review/gazellateam.com"} className="inline-block mb-10">
            <div className="px-4 py-2 text-sm border font-[300] border-gray-600/10 rounded-full flex items-center gap-4">
                <h2>4.0 out of 5 - Trustpilot</h2>
                <img className="w-24" src="/stars/stars-4.svg"></img>
            </div>
        </Link>
    )
}
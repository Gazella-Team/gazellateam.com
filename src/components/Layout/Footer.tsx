import Link from "next/link"

export default function Footer() {
    return (
        <section className="py-[20px] bg-third text-main flex items-center border-t-[1px]">
            <div className="w-[94%] max-w-main mx-auto flex flex-col justify-between gap-[70px] text-center">
                <p className="font-[200] text-sm text-gray-600">© {new Date().getFullYear()} Gazella Team</p>
            </div>
        </section>
    )
}
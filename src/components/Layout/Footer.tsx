import Link from "next/link"

export default function Footer() {
    return (
        <section className="py-[100px] pb-[60px] bg-third text-main flex items-center">
            <div className="w-[94%] mx-auto flex flex-col justify-between gap-[70px]">
                <div className="grid grid-cols-2">
                    <div>
                    <div className="flex items-center mb-[40px]">
                <div className="bg-white rounded-full p-[4px]">
                    <img className="w-[60px] rounded-full" src="/team/lasseosmann.webp"></img>
                </div>
                <div className="bg-white rounded-full p-[4px] ml-[-20px]">
                    <img className="w-[60px] rounded-full" src="/team/simonmaribo.webp"></img>
                </div>
                <div className="bg-white rounded-full p-[4px] ml-[-20px]">
                    <img className="w-[60px] rounded-full" src="/team/miklonborg.webp"></img>
                </div>

            </div>
                        <h1 className="text-[24px] mb-[4px] font-[300]">Do you have a project in mind?</h1>
                        <p className="font-[200] mb-[50px]">We&apos;d love to discuss your coming project</p>
                        <Link className="border-[2px] font-[300] border-main px-[20px] py-[10px] rounded-full hover:bg-main hover:text-white transition-all" href={"/contact"}>Let&apos;s talk</Link>
                    </div>
                    <div>

                    </div>
                </div>

                <div className="text-gray-600 flex items-center justify-between">
                    <p className="font-[200]">© {new Date().getFullYear()} Gazella Team</p>
                    <div className="flex items-center gap-[30px] font-[200]">
                        <Link href={"/partners"}>Partners</Link>
                        <Link href={"/learning"}>Learning</Link>
                        <Link href={"/Privacy policy"}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
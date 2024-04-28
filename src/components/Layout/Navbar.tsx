import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
    const currentPath = useRouter().pathname
    const [menuClicked, setMenuClicked] = useState(false)
    return (
        <>
        <nav className="h-[135px] fixed bg-white w-full flex flex-col z-[999]">
            <div className="bg-main text-white h-[50px] flex items-center justify-center">
                <div className="w-[94%] max-w-[1500px] flex items-center justify-end">
                    <Link href={"/group"} className="text-xs font-[200] px-3 py-1 border border-gray-700 rounded-full">Gazella Team Group</Link>
                </div>
            </div>
            <div className="w-[94%] flex-1 max-w-[1500px] mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <img className="w-[80px]" src="/logos/gazellateamlogowhitebg.svg"></img>
                </Link>
                <div className="hidden items-center gap-[30px] md:flex">
                    <div className="text-main text-[15px] flex items-center gap-[24px] font-[200]">
                        <Link className="hover:text-gray-600" href={"/services"}>
                        Services
                        </Link>
                        <Link className="hover:text-gray-600" href={"/people"}>
                        People
                        </Link>
                        <Link className="hover:text-gray-600" href={"/people"}>
                        Blog
                        </Link>
                        <Link className="hover:text-gray-600" href={"/contact"}>
                        Contact
                        </Link>
                        <div className="flex items-center gap-1">
                            <Link className="hover:text-gray-600" href={"/for-agencies"}>
                            Free SEO
                            </Link>
                            <div className="bg-[#e9f4ff] text-[#0060f2] px-2 rounded-full text-sm">
                                new
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center font-[200] gap-[6px]">
                        <Link className="hover:text-gray-600" href={"/products"}>
                        DK
                        </Link>
                        <p>|</p>
                        <Link className="hover:text-gray-600" href={"/products"}>
                        EN
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden">
                    {menuClicked ?<X size={26} onClick={() => setMenuClicked(!menuClicked)} />
                    :
                    <svg onClick={() => setMenuClicked(!menuClicked)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /> </svg>
                }
                </div>
            </div>
        </nav>
        {menuClicked ? (
            
              <div className="flex md:hidden fixed w-full bg-white top-[85px] bottom-0 py-[135px] z-20 overflow-auto">
              <style jsx>{`
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>
                <div className="w-[94%] font-[300] mx-auto flex flex-col text-xl gap-3 text-main">
                        <Link onClick={() => setMenuClicked(false)} className="hover:text-gray-600" href={"/consulting"}>
                        Consulting
                        </Link>
                        <Link onClick={() => setMenuClicked(false)} className="hover:text-gray-600" href={"/products"}>
                        What we&apos;re building
                        </Link>
                        <Link onClick={() => setMenuClicked(false)} className="hover:text-gray-600" href={"/people"}>
                        People
                        </Link>
                        <Link onClick={() => setMenuClicked(false)} className="hover:text-gray-600" href={"/contact"}>
                        Contact
                        </Link>
                </div>
                
              </div>
          ) : null}
        </>
    )
}
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [menuClicked, setMenuClicked] = useState(false)
    return (
        <>
                <nav className="h-[85px] fixed bg-white w-full flex items-center z-[999]">
            <div className="w-[94%] max-w-[1500px] mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <img className="w-[80px]" src="/logos/gazellateamlogowhitebg.svg"></img>
                </Link>
                <div className="hidden items-center gap-[30px] md:flex">
                    <div className="text-main text-[15px] flex items-center gap-[24px] font-[200]">
                        <Link className="hover:text-gray-600" href={"/products"}>
                        What we&apos;re building
                        </Link>
                        <Link className="hover:text-gray-600" href={"/people"}>
                        People
                        </Link>
                        <Link className="hover:text-gray-600" href={"/contact"}>
                        Contact
                        </Link>
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
                <svg onClick={() => setMenuClicked(!menuClicked)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /> </svg>
                </div>
            </div>
        </nav>
        {menuClicked ? (
            
              <div className="flex md:hidden fixed w-full bg-white top-[85px] bottom-0 py-[30px] z-20 overflow-auto">
              <style jsx>{`
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>
                <div className="w-[94%] font-[300] mx-auto flex flex-col text-xl gap-3 text-main">
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
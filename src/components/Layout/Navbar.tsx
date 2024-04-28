import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
    const currentPath = useRouter().pathname
    const [menuClicked, setMenuClicked] = useState(false)
    return (
        <>
        <nav className="h-[85px] fixed bg-white w-full flex flex-col z-[999]">
            <div className="w-[94%] flex-1 max-w-[1500px] mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <img className="w-[80px]" src="/logos/gazellateamlogowhitebg.svg"></img>
                </Link>
                <div className="flex items-center gap-4">
                    <Link className="text-sm font-[300] hidden md:block" href={"https://gazellateam.com/"}>
                        hey@gazellateam.com
                    </Link>
                    <Link target="_blank" className="bg-main text-white px-4 py-2 rounded-full text-sm font-[300]" href={"https://gazellateam.com/"}>
                        Visit Gazella Team
                    </Link>
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
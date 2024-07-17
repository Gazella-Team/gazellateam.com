import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
    const currentPath = useRouter().pathname.slice(0,3)
    const [menuClicked, setMenuClicked] = useState(false)
    return (
        currentPath === "/dk" ? 
        <>
        <nav className="h-[80px] fixed bg-white w-full flex flex-col z-[999]">
            <div className="w-[90%] flex-1 max-w-[1300px] mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <img className="w-[80px]" src="/logos/gazellateamlogowhitebg.svg"></img>
                </Link>
                <div className="hidden items-center gap-[30px] md:flex">
                    <div className="text-main text-[15px] flex items-center gap-[24px] font-[200]">
                        <div className="flex items-center">
                            <Link className="hover:text-gray-600" href={"/dk/performance-hjemmeside"}>
                                DK
                            </Link>
                            <div className="h-3 border border-main mx-2"></div>
                            <Link className="hover:text-gray-600" href={"/"}>
                                EN
                            </Link>
                        </div>
                    </div>
                    <Link className="hover:text-gray-200 bg-main text-sm px-5 py-1 rounded-full text-white paragraph font-normal" href={"/contact"}>
                        Kontakt os
                    </Link>
                </div>
                <div className="flex md:hidden cursor-pointer">
                    {menuClicked ?<X size={26} onClick={() => setMenuClicked(!menuClicked)} />
                    :
                    <svg onClick={() => setMenuClicked(!menuClicked)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /> </svg>
                }
                </div>
            </div>
        </nav>
        {menuClicked ? (
            
              <div className="flex md:hidden fixed w-full bg-white top-[80px] bottom-0 py-[45px] z-20 overflow-auto">
              <style jsx>{`
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>
                <div className="w-[90%] font-[300] mx-auto flex flex-col text-xl gap-3 text-main">
                <div className="text-main text-4xl flex font-[300] flex-col justify-center gap-[24px]">
                        <Link className="hover:text-gray-600" href={"/services"}>
                        Services
                        </Link>
                        <Link className="hover:text-gray-600" href={"/people"}>
                        People
                        </Link>
                        <Link className="hover:text-gray-600" href={"/blog"}>
                        Blog
                        </Link>
                        <Link className="hover:text-gray-600" href={"/contact"}>
                        Contact
                        </Link>
                    </div>
                </div>
                
              </div>
          ) : null}
        </>
        :
        <>
        <nav className="h-[80px] fixed bg-white w-full flex flex-col z-[999]">
            <div className="w-[90%] flex-1 max-w-[1300px] mx-auto flex items-center justify-between">
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
                        <Link className="hover:text-gray-600" href={"/blog"}>
                        Blog
                        </Link>
                    </div>
                    <Link
								href={'/contact'}
								className="bg-main border-[3px] border-main font-normal paragraph text-sm flex text-white px-6 py-1 rounded-full"
							>
								Get in touch
							</Link>
                </div>
                <div className="flex md:hidden cursor-pointer">
                    {menuClicked ?<X size={26} onClick={() => setMenuClicked(!menuClicked)} />
                    :
                    <svg onClick={() => setMenuClicked(!menuClicked)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"> <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" /> </svg>
                }
                </div>
            </div>
        </nav>
        {menuClicked ? (
            
              <div className="flex md:hidden fixed w-full bg-white top-[80px] bottom-0 py-[45px] z-20 overflow-auto">
              <style jsx>{`
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>
                <div className="w-[90%] font-[300] mx-auto flex flex-col text-xl gap-3 text-main">
                <div className="text-main text-4xl flex font-[300] flex-col justify-center gap-[24px]">
                        <Link className="hover:text-gray-600" href={"/services"}>
                        Services
                        </Link>
                        <Link className="hover:text-gray-600" href={"/people"}>
                        People
                        </Link>
                        <Link className="hover:text-gray-600" href={"/blog"}>
                        Blog
                        </Link>
                        <Link className="hover:text-gray-600" href={"/contact"}>
                        Contact
                        </Link>
                    </div>
                </div>
                
              </div>
          ) : null}
        </>
    )
}
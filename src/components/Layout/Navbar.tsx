import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/contentlayer/lib/utils";

export default function Navbar(props:any) {
    const currentPath = useRouter().pathname.slice(0,3)
    const [menuClicked, setMenuClicked] = useState(false)
    const scrolled = useScroll(50)

    return (
        <>
        {
        props.noNavPadding
        ?
        <nav className={cn("h-[80px] fixed bg-transparent transition-all w-full flex flex-col z-[999]", scrolled && "bg-white")}>
            <div className="w-[90%] flex-1 max-w-[1300px] mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <img className="w-[80px]" src="/logos/gazellateamlogowhitebg.svg"></img>
                </Link>
                <div className="hidden items-center gap-[30px] md:flex">
                    <div className={cn("text-white text-[15px] flex items-center gap-[24px] font-[200]", scrolled && "text-main")}>
                        <Link className="hover:text-gray-600" href={"/hjemmeside"}>
                        Hjemmeside
                        </Link>
                        <Link className="hover:text-gray-600" href={"/teamet"}>
                        Teamet
                        </Link>
                        <Link className="hover:text-gray-600" href={"/blog"}>
                        Blog
                        </Link>
                        <Link className="hover:text-gray-600" href={"/kontakt"}>
                        +45 50695272
                        </Link>
                    </div>
                    <Link
								href={'/kontakt'}
								className="bg-main border-[3px] border-main font-normal paragraph text-sm flex text-white px-6 py-1 rounded-full"
							>
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
        :
        <nav className="h-[80px] fixed bg-white transition-all w-full flex flex-col z-[999]">
            <div className="w-[90%] flex-1 max-w-[1300px] mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <img className="w-[80px]" src="/logos/gazellateamlogowhitebg.svg"></img>
                </Link>
                <div className="hidden items-center gap-[30px] md:flex">
                    <div className="text-main text-[15px] flex items-center gap-[24px] font-[200]">
                        <Link className="hover:text-gray-600" href={"/hjemmeside"}>
                        Hjemmeside
                        </Link>
                        <Link className="hover:text-gray-600" href={"/teamet"}>
                        Teamet
                        </Link>
                        <Link className="hover:text-gray-600" href={"/blog"}>
                        Blog
                        </Link>
                        <Link className="hover:text-gray-600" href={"/kontakt"}>
                        +45 50695272
                        </Link>
                    </div>
                    <Link
                                href={'/kontakt'}
                                className="bg-main border-[3px] border-main font-normal paragraph text-sm flex text-white px-6 py-1 rounded-full"
                            >
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
        }
        {menuClicked ? (
            
              <div className="flex md:hidden fixed w-full bg-white top-[80px] bottom-0 py-[45px] z-20 overflow-auto">
              <style jsx>{`
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>
                <div className="w-[90%] font-[300] mx-auto flex flex-col text-xl gap-3 text-main">
                <div className="text-main text-4xl flex font-[300] flex-col justify-center gap-[24px]">
                        <Link className="hover:text-gray-600" href={"/hjemmeside"}>
                        Hjemmeside
                        </Link>
                        <Link className="hover:text-gray-600" href={"/teamet"}>
                        Teamet
                        </Link>
                        <Link className="hover:text-gray-600" href={"/blog"}>
                        Blog
                        </Link>
                        <Link className="hover:text-gray-600" href={"/kontakt"}>
                        Kontakt
                        </Link>
                    </div>
                </div>
                
              </div>
          ) : null}
        </>
    )
}
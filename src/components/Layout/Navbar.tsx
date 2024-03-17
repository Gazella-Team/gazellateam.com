import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="h-[85px] fixed bg-white w-full flex items-center z-[999]">
            <div className="w-[94%] max-w-[1500px] mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <img className="w-[90px]" src="/logos/gazellateamlogowhitebg.svg"></img>
                </Link>
                <div className="flex items-center gap-[30px]">
                    <div className="text-main text-[15px] flex items-center gap-[24px] font-[200]">
                        <Link className="hover:text-gray-600" href={"/products"}>
                        What we&apos;re building
                        </Link>
                        <Link className="hover:text-gray-600" href={"/consulting"}>
                        Consulting
                        </Link>
                        <Link className="hover:text-gray-600" href={"/cases"}>
                        Clients
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

            </div>
        </nav>
    )
}
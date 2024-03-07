import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="h-[85px] fixed bg-white w-full flex items-center">
            <div className="w-[96%] mx-auto flex items-center justify-between">
                <Link href={"/"}>
                    <img className="w-[50px]" src="/logos/logofill.svg"></img>
                </Link>
                <div className="flex items-center gap-[30px]">
                    <div className="text-main text-[15px] flex items-center gap-[24px] font-[200]">
                        <Link className="hover:text-gray-600" href={"/services/app-development"}>
                        Development
                        </Link>
                        <Link className="hover:text-gray-600" href={"/no-code/webflow"}>
                        No-code Services
                        </Link>
                        <Link className="hover:text-gray-600" href={"/cases"}>
                        Cases
                        </Link>
                        <Link className="hover:text-gray-600" href={"/people"}>
                        People
                        </Link>
                        <Link className="hover:text-gray-600" href={"/products"}>
                        Products we build
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
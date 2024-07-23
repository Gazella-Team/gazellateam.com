import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import EstimateSheet from '../modals/EstimateSheet'

export default function Navbar() {
	const currentPath = useRouter().pathname.slice(0, 3)
	const [menuClicked, setMenuClicked] = useState(false)
	return (
		<>
			<nav className="h-[80px] fixed bg-white w-full flex flex-col z-[10]">
				<div className="w-[90%] flex-1 max-w-[1300px] mx-auto flex items-center justify-between">
					<Link href={'/'}>
						<img
							className="w-[80px]"
							src="/logos/gazellateamlogowhitebg.svg"
						></img>
					</Link>
					<div className="hidden items-center gap-[30px] md:flex">
						<div className="text-main text-[15px] flex items-center gap-[24px] font-[200]">
							<Link
								className="hover:text-gray-600"
								href={'/hjemmeside'}
							>
								Hjemmeside
							</Link>
							<Link
								className="hover:text-gray-600"
								href={'/teamet'}
							>
								Teamet
							</Link>
							<Link
								className="hover:text-gray-600"
								href={'/blog'}
							>
								Blog
							</Link>
							<EstimateSheet>
								<div className="hidden md:flex text-[13px] cursor-pointer bg-main text-white select-none px-4 py-1 items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full footer:hidden">
									<p>Estimate your project</p>
									<ArrowUpRight size={16} />
								</div>
							</EstimateSheet>
						</div>
						<Link
							href={'/kontakt'}
							className="bg-main border-[3px] border-main font-normal paragraph text-sm flex text-white px-6 py-1 rounded-full"
						>
							Kontakt os
						</Link>
					</div>
					<div className="flex md:hidden cursor-pointer">
						{menuClicked ? (
							<X
								size={26}
								onClick={() => setMenuClicked(!menuClicked)}
							/>
						) : (
							<svg
								onClick={() => setMenuClicked(!menuClicked)}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-8 h-8"
							>
								{' '}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 9h16.5m-16.5 6.75h16.5"
								/>{' '}
							</svg>
						)}
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
							<Link
								className="hover:text-gray-600"
								href={'/hjemmeside'}
							>
								Hjemmeside
							</Link>
							<Link
								className="hover:text-gray-600"
								href={'/teamet'}
							>
								Teamet
							</Link>
							<Link
								className="hover:text-gray-600"
								href={'/blog'}
							>
								Blog
							</Link>
							<Link
								className="hover:text-gray-600"
								href={'/kontakt'}
							>
								Kontakt
							</Link>
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}

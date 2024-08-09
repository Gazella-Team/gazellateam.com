import { ArrowUpRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import EstimateSheet from '../modals/EstimateSheet'
import useScroll from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'

type Navbar = {
	transparent?: boolean,
}

export default function Navbar(props:Navbar) {
	const currentPath = useRouter().pathname.slice(0, 3)
	const [menuClicked, setMenuClicked] = useState(false)
	const scrolled = useScroll(50)
	return (
		<>
			{
			props.transparent ?
			<nav className={cn("h-[80px] fixed bg-transparent w-full flex flex-col z-[10] transition-all", scrolled && "bg-white")}>
			<div className="w-[94%] flex-1 max-w-8xl mx-auto flex items-center justify-between">
				<div className='w-[100px] flex items-center justify-start'>
					<Link href={'/'}>
						<img
							className="w-[80px] transition-all"
							src={scrolled ? "/logos/1.png":"/logos/2.png"}
						></img>
					</Link>
				</div>
				<div className="hidden flex-1 justify-center items-center gap-[30px] md:flex">
					<div className={cn("text-white text-base flex items-center gap-[30px] font-medium", scrolled && "text-black")}>
						<Link
							className={cn("hover:text-gray-200", scrolled && "hover:text-gray-600")}
							href={'/cases'}
						>
							Ydelser
						</Link>
						<Link
							className={cn("hover:text-gray-200", scrolled && "hover:text-gray-600")}
							href={'/cases'}
						>
							Cases
						</Link>
						<Link
							className={cn("hover:text-gray-200", scrolled && "hover:text-gray-600")}
							href={'/teamet'}
						>
							Teamet
						</Link>
						<Link
							className={cn("hover:text-gray-200", scrolled && "hover:text-gray-600")}
							href={'/blog'}
						>
							Nyheder og læring
						</Link>
					</div>
				</div>
				<div className='flex items-center justify-end'>
					<Link className={cn('bg-white border-2 border-white text-sm font-medium px-5 py-2 text-main rounded-full transition-all', scrolled && "text-white transition-all border-main bg-main")} href={"/kontakt"}>
					 	Få et gratis tilbud
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
		:
		<nav className="h-[80px] fixed bg-white w-full flex flex-col z-[10]">
		<div className="w-[94%] flex-1 max-w-8xl mx-auto flex items-center justify-between">
			<div className='w-[160px] flex items-center justify-start'>
				<Link href={'/'}>
					<img
						className="w-[80px]"
						src="/logos/1.png"
					></img>
				</Link>
			</div>
			<div className="hidden flex-1 justify-center items-center gap-[30px] md:flex">
				<div className="text-main text-base flex items-center gap-[30px] font-medium">
					<Link
						className="hover:text-gray-600"
						href={'/teamet'}
					>
						Ydesler
					</Link>
					<Link
						className="hover:text-gray-600"
						href={'/cases'}
					>
						Cases
					</Link>
					<Link
						className="hover:text-gray-600"
						href={'/blog'}
					>
						Tilgang
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
						Nyheder og læring
					</Link>
				</div>
			</div>
			<div className='flex items-center w-[160px] justify-end'>
				<Link className='bg-main border-2 border-main text-sm font-medium px-5 py-2 text-white rounded-full' href={"/kontakt"}>
						Få et gratis tilbud
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

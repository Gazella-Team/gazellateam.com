import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Cta from './Cta'
import { useRouter } from 'next/router'
type FooterProps = {
	fullWidth?: boolean
	noCta?: boolean
}

const FOOTER_LINKS: {
	title: string
	links: { label: string; href: string; target?: string }[]
}[] = [
	{
		title: 'Kategori',
		links: [
			{
				label: 'Link',
				href: '/',
			},
			{
				label: 'Link',
				href: '/',
			},
		],
	},
	{
		title: 'Kategori',
		links: [
			{
				label: 'Link',
				href: '/',
			},
			{
				label: 'Link',
				href: '/',
			},
			{
				label: 'Link',
				href: '/',
			},
			{
				label: 'Link',
				href: '/',
			},
		],
	},
	{
		title: 'Kategori',
		links: [
			{
				label: 'Link',
				href: '/',
			},
			{
				label: 'Link',
				href: '/',
			},
			{
				label: 'Link',
				href: '/',
			},
		],
	},
]

export default function Footer(props: FooterProps) {
	const path = useRouter()

	return (
		<>
			{!props.noCta && <Cta />}
			<footer
				className='py-[10px] mx-auto border-t relative border-t-gray-600/10 bg-white'
			>
				<div className="w-[86%] mx-auto min-h-[370px] max-w-7xl grid grid-cols-1 md:grid-cols-[35%_1fr] pt-14 gap-20">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col">
							<img
								className="w-[80px]"
								src="/logos/1.png"
								alt="Gazella Team Logo"
							/>
							<p className="text-gray-500 paragraph text-sm max-w-xs font-regular">
							Hvor investorer og iværksættere mødes
							</p>
						</div>
						<div className="flex">
							<Link
								href={'/'}
								className="bg-first border-[3px] border-gray-800 font-normal paragraph text-xs flex text-white px-6 py-1 rounded-full"
							>
								Kom i gang
							</Link>
						</div>
						<div className="flex items-center gap-2 mt-3">
							<Link
								href={
									'/'
								}
								className="border p-3 rounded-full border-gray-600/10 hover:bg-slate-50 transition-all"
							>
								<FaLinkedin color="rgb(31 41 55)" />
							</Link>
							<Link
								href={'/'}
								className="border p-3 rounded-full border-gray-600/10 hover:bg-slate-50 transition-all"
							>
								<FaTwitter color="rgb(31 41 55)" />
							</Link>
						</div>
					</div>
					<div className="grid grid-cols-2 mb-24 lg:grid-cols-3 paragraph gap-16">
						{FOOTER_LINKS.map((group) => (
							<div key={group.title}>
								<h2 className="text-base mb-5 font-semibold text-gray-800">
									{group.title}
								</h2>
								<div className="text-gray-500 text-base flex flex-col gap-5 font-normal">
									{group.links.map((link) => (
										<Link
											href={link.href}
											key={link.href}
											className="hover:text-gray-800 transition-all"
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="text-center pb-6 text-gray-400 text-sm gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-between paragraph w-[86%] mx-auto max-w-7xl">
					<p>
						© {new Date().getFullYear()} Gazella Team
					</p>
					<div className="flex items-center gap-4">
						<p>
							Stiftet i København, Danmark.
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
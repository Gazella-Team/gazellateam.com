import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Cta from './Cta'

type FooterProps = {
	fullWidth?: boolean
	noCta?: boolean
}

const FOOTER_LINKS: {
	title: string
	links: { label: string; href: string; target?: string }[]
}[] = [
	{
		title: 'Ydelser',
		links: [
			{
				label: 'Hjemmeside',
				href: '/hjemmeside',
			},
			{
				label: 'App udvikling',
				href: '/app',
			},
			{
				label: 'Design og brugeroplevelse',
				href: '/app',
			},
		],
	},
	{
		title: 'Virksomhed',
		links: [
			{
				label: 'Teamet',
				href: '/teamet',
			},
			{
				label: 'Blog',
				href: '/blog',
			},
		],
	},
	{
		title: 'Kontakt',
		links: [
			{
				label: 'Book et møde',
				href: '/kontakt',
			},
			{
				label: '+45 50695272',
				href: '/kontakt',
			},
			{
				label: 'hey@gazellateam.com',
				href: '/kontakt',
			},
		],
	},
	/*
	{
		title: 'Privacy',
		links: [
			{
				label: 'Analytics',
				href: '/privacy-friendly-analytics',
			},
		],
	},
	*/
]

export default function Footer(props: FooterProps) {
	return (
		<>
			<footer
                className='bg-black rounded-t-[100px] text-white'
			>
				<div className="w-[90%] max-w-[1300px] mx-auto min-h-[570px] grid grid-cols-1 md:grid-cols-[35%_1fr] pt-16 gap-20">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-8">
							<img
								className="w-[45px]"
								src="/logos/iconwhite.svg"
							></img>
							<p className="text-gray-200 paragraph text-sm max-w-xs font-normal">
								Et digitalt bureau med øje for
								detalje. Vi har +10 års samlet erfaring indenfor
								software.
							</p>
						</div>
						<div className="flex">
							<Link
								href={'/kontakt'}
								className="bg-white border-[3px] border-white font-normal paragraph text-sm flex text-main px-6 py-1 rounded-full"
							>
								Kontakt os
							</Link>
						</div>
						<div className="flex items-center gap-2 mt-3">
							<Link
								href={
									'https://linkedin.com/company/gazellateam'
								}
								className="border p-3 rounded-full border-gray-600/10 hover:bg-slate-50 transition-all"
							>
								<FaLinkedin color="rgb(31 41 55)" />
							</Link>
							<Link
								href={'https://x.com/toolbirdapp'}
								className="border p-3 rounded-full border-gray-600/10 hover:bg-slate-50 transition-all"
							>
								<FaTwitter color="rgb(31 41 55)" />
							</Link>
						</div>
					</div>
					<div className="grid grid-cols-2 mb-24 lg:grid-cols-3 paragraph gap-16">
						{FOOTER_LINKS.map((group) => (
							<div key={group.title}>
								<h2 className="text-sm mb-5 font-medium white">
									{group.title}
								</h2>
								<div className="text-white text-sm flex flex-col gap-5 font-normal">
									{group.links.map((link) => (
										<Link
											href={link.href}
											key={link.href}
											className="hover:text-gray-200 transition-all"
										>
											{link.label}
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="text-center font-[200] pb-6 text-white text-sm gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-between paragraph w-[90%] mx-auto max-w-[1300px]">
					<p>© {new Date().getFullYear()} Gazella Team</p>
					<div className="flex items-center gap-4">
						<p>Stiftet i København, Danmark</p>
					</div>
				</div>
			</footer>
		</>
	)
}

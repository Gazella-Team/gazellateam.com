import Link from 'next/link'
import { FaMailBulk, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Cta from '../cta'
import { Mail } from 'lucide-react'
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
				label: 'Udvikling',
				href: '/udvikling',
			},
			{
				label: 'Mobil App',
				href: '/app',
			},
			{
				label: 'Design',
				href: '/design',
			},
		],
	},
	{
		title: 'Interne projekter',
		links: [
			{
				label: 'Toolbird',
				href: 'https://toolbird.io/',
			},
		],
	},
	{
		title: 'Firma',
		links: [
			{
				label: 'Teamet',
				href: '/teamet',
			},
			{
				label: 'Karriere',
				href: 'https://thehub.io/startups/gazella-team',
			},
		],
	},
	/*
		{
		title: 'Ekstra',
		links: [
			{
				label: 'Læring',
				href: '/blog',
			},
			{
				label: 'Nyheder',
				href: '/blog',
			},
		],
	},
	 */
]

export default function Footer(props: FooterProps) {
	const path = useRouter()

	return (
		<>
			<footer className="py-[10px] mx-auto border-t text-main relative border-t-gray-600/10 bg-white">
				<div className="w-[90%] mx-auto min-h-[370px] max-w-7xl grid grid-cols-1 md:grid-cols-[35%_1fr] pt-14 gap-20">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-5">
							<img
								className="w-[80px]"
								src="/logos/1.png"
								alt="Gazella Team Logo"
							/>
							<p className="text-gray-600 paragraph text-sm max-w-[220px] font-regular">
								Vi er et ungt digitalt bureau med passion for
								salgsfremmende og kreative web- og app
								løsninger.
							</p>
						</div>
						<div className="flex items-center gap-2 mt-3">
							<Link
								target="_blank"
								href={
									'https://www.linkedin.com/company/gazellateam'
								}
								className="border p-3 rounded-full border-gray-600/10 hover:bg-slate-50 transition-all"
							>
								<FaLinkedin color="rgb(31 41 55)" />
							</Link>
							<Link
								href={'mailto:hey@gazellateam.com'}
								className="border p-3 rounded-full border-gray-600/10 hover:bg-slate-50 transition-all"
							>
								<Mail
									size={18}
									className="text-white"
									fill="rgb(31 41 55)"
								/>
							</Link>
						</div>
					</div>
					<div className="grid grid-cols-2 mb-24 lg:grid-cols-3 paragraph gap-16">
						{FOOTER_LINKS.map((group) => (
							<div key={group.title}>
								<h2 className="text-base mb-5 font-semibold text-main">
									{group.title}
								</h2>
								<div className="text-gray-500 text-base flex flex-col gap-5 font-normal">
									{group.links.map((link) => (
										<Link
											href={link.href}
											key={link.href}
											className="hover:text-main transition-all"
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
					<p>© {new Date().getFullYear()} Gazella Team</p>
					<div className="flex items-center gap-4">
						<p>CVR: 45003639</p>
					</div>
				</div>
			</footer>
		</>
	)
}

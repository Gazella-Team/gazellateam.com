import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

type FooterProps = {
	fullWidth?: boolean
	noCta?: boolean
}

const FOOTER_LINKS: {
	title: string
	links: { label: string; href: string; target?: string }[]
}[] = [
	{
		title: 'Products',
		links: [
			{
				label: 'Web Analytics',
				href: '/analytics',
			},
		],
	},
	{
		title: 'Free Tools',
		links: [
			{
				label: 'All tools',
				href: '/tools',
			},
			{
				label: 'UTM Link Generator',
				href: '/tools/utm-generator',
			},
		],
	},
	{
		title: 'Company',
		links: [
			{
				label: 'About us',
				href: '/blog/introducing-toolbird',
			},
			{
				label: 'Open Startup',
				href: 'https://app.toolbird.io/share/toolbird.io',
			},
			{
				label: 'Affiliate',
				href: '/affiliate',
			},
			{
				label: 'Partners',
				href: '/partners',
			},
			{
				label: 'Terms & Conditions',
				href: '/legal/terms',
			},
			{
				label: 'Privacy Policy',
				href: '/legal/privacy',
			},
		],
	},
	{
		title: 'Resources',
		links: [
			{
				label: 'Blog',
				href: '/blog',
			},
			{
				label: 'Docs',
				href: 'https://docs.toolbird.io/',
			},
			{
				label: 'Extra tools',
				href: '/tools',
			},
			{
				label: 'Glossary',
				href: '/glossary',
			},
		],
	},
	{
		title: 'Compare',
		links: [
			{
				label: 'Plausible',
				href: '/compare/plausible',
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
                className='bg-[#fafafa]'
			>
				<div className="w-[86%] mx-auto min-h-[370px] grid grid-cols-1 md:grid-cols-[35%_1fr] pt-14 gap-20">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-8">
                            <img className="w-[80px]" src="/logos/gazellateamlogowhitebg.svg"></img>
							<p className="text-gray-500 paragraph text-sm max-w-xs font-[200]">
								Get Web Analytics, Feedback Hub and User
								Surveys, all collected in one place.
							</p>
						</div>
						<div className="flex">
							<Link
								href={'https://app.toolbird.io/auth/register'}
								className="bg-gray-800 border-[3px] border-gray-800 font-[300] paragraph text-xs flex text-white px-6 py-1 rounded-full"
							>
								Start 14-day free trial
							</Link>
						</div>
						<div className="flex items-center gap-2 mt-3">
							<Link
								href={
									'https://linkedin.com/company/toolbird-io'
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
								<h2 className="text-sm mb-5 font-[300] text-gray-800">
									{group.title}
								</h2>
								<div className="text-gray-500 text-sm flex flex-col gap-5 font-[200]">
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
				<div className="text-center font-[200] pb-6 text-gray-400 text-sm gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-between paragraph w-[86%] mx-auto max-w-6xl">
					<p>
						© {new Date().getFullYear()} Toolbird - Part of{' '}
						<a
							href="https://gazellateam.com"
							className="underline"
							target="_blank"
						>
							Gazella Team
						</a>
					</p>
					<div className="flex items-center gap-4">
						<p>
							Made and hosted in the EU 🇪🇺
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
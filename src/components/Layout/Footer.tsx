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
		title: 'Work',
		links: [
			{
				label: 'Services',
				href: '/services',
			},
		],
	},
	{
		title: 'Company',
		links: [
			{
				label: 'People',
				href: '/people',
			},
			{
				label: 'Blog',
				href: '/blog',
			},
		],
	},
	{
		title: 'Contact',
		links: [
			{
				label: 'Book a meeting',
				href: '/contact',
			},
			{
				label: '+45 50695272',
				href: '/contact',
			},
			{
				label: 'hey@gazellateam.com',
				href: '/contact',
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
				<div className="w-[94%] max-w-[1300px] mx-auto min-h-[370px] grid grid-cols-1 md:grid-cols-[35%_1fr] pt-16 gap-20">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-8">
                            <img className="w-[80px]" src="/logos/gazellateamlogowhitebg.svg"></img>
							<p className="text-gray-500 paragraph text-sm max-w-xs font-normal">
							We help companies of all sizes sell more, build workflows and launch innovative ideas through tailormade software development.
							</p>
						</div>
						<div className="flex">
							<Link
								href={'/contact'}
								className="bg-main border-[3px] border-main font-normal paragraph text-sm flex text-white px-6 py-1 rounded-full"
							>
								Get in touch
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
								<h2 className="text-sm mb-5 font-medium text-gray-800">
									{group.title}
								</h2>
								<div className="text-gray-500 text-sm flex flex-col gap-5 font-normal">
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
				<div className="text-center font-[200] pb-6 text-gray-400 text-sm gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-between paragraph w-[86%] mx-auto">
					<p>
						© {new Date().getFullYear()} Gazella Team
					</p>
					<div className="flex items-center gap-4">
						<p>
							Based in Europe, Denmark
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}
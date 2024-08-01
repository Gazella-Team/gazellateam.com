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
                className='pt-24'
			>
				<div className="text-center font-normal pb-6 text-black text-sm gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-center paragraph w-[90%] mx-auto max-w-[1300px]">
					<p>© {new Date().getFullYear()} Gazella Team</p>
				</div>
			</footer>
		</>
	)
}

import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import { url } from 'inspector'
import { cn } from '@/helpers/utils'

const caseDataFirst = [
	{
		heading: 'LM Capital',
		domain: 'toolbird.io',
		description: 'Seamless platform for slot bidding for minecraft servers',
		image: '/cases/lmcapital.webp',
		link: '/minecraft-buzz-auctions',
	},
	{
		heading: 'Planmates',
		description: 'Seamless platform for slot bidding for minecraft servers',
		image: '/blog-images/how-much-does-an-app-cost/main.webp',
		link: '/minecraft-buzz-auctions',
	},
]

export default function Cases() {
	return (
		<section>
			<div className="w-[90%] max-w-[1400px] pb-24 gap-16 mx-auto">
				<div className="grid grid-cols-2 gap-12">
					{caseDataFirst.map((v, index) => (
						<CaseCard key={index} Obj={v} />
					))}
				</div>
			</div>
		</section>
	)
}

function CaseCard(props: any) {
	return (
		<Link href={props.Obj.link}>
			<div className="flex flex-col gap-8">
				<img
					className="h-[560px] object-cover"
					src={props.Obj.image}
				></img>
				<div className="absolute m-8 bg-white border border-gray-600/20 rounded-full p-1 px-5">
					<h2 className="text-lg paragraph">{props.Obj.heading}</h2>
				</div>
			</div>
		</Link>
	)
}

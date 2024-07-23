import Link from 'next/link'
import { Reveal } from './Animations/Reveal'
import { url } from 'inspector'

const portfolioData = [
	{
		heading: 'Toolbird',
		description: 'Seamless platform for slot bidding for minecraft servers',
		image: '/portfolio/toolbird.webp',
		link: '/minecraft-buzz-auctions',
		owned: true,
	},
	{
		heading: 'minecraft.buzz',
		description: 'Seamless platform for slot bidding for minecraft servers',
		image: '/portfolio/toolbird.webp',
		link: '/minecraft-buzz-auctions',
	},
	{
		heading: 'coad.dk',
		description: 'Seamless platform for slot bidding for minecraft servers',
		image: '/portfolio/toolbird.webp',
		link: '/minecraft-buzz-auctions',
	},
]

export default function PortfolioProjects() {
	return (
		<section>
			<div className="w-[94%] pb-24 gap-6 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[1300px]">
				{portfolioData.map((v, index) => (
					<PortfolioCard key={v.heading} Obj={v} />
				))}
			</div>
		</section>
	)
}

function PortfolioCard(props: any) {
	return props.Obj.owned ? (
		<Link href={props.Obj.link}>
			<div
				className={`bg-center relative bg-[url(/portfolio/toolbird.webp)] rounded-2xl p-10 bg-cover min-h-[500px] text-white flex flex-col justify-end`}
			>
				<div className="absolute flex text-main top-0 right-0 pt-8 pr-10">
					<div className="bg-white px-2 py-[2px] rounded-full">
						<p className="text-xs font-[300]">Gazella Team Owned</p>
					</div>
				</div>
				<div className="flex flex-col z-10 relative gap-1">
					<h2 className="font-[300]">{props.Obj.heading}</h2>
					<p className="font-[200] text-sm text-gray-200">
						{props.Obj.description}
					</p>
				</div>
				<div className="absolute rounded-2xl z-1 inset-0 bg-gradient-to-t from-main to-transparent opacity-40"></div>
			</div>
		</Link>
	) : (
		<Link href={props.Obj.link}>
			<div
				className={`bg-center relative bg-[url(/portfolio/toolbird.webp)] rounded-2xl p-10 bg-cover min-h-[500px] text-white flex flex-col justify-end`}
			>
				<div className="flex flex-col z-10 relative gap-1">
					<h2 className="font-[300]">{props.Obj.heading}</h2>
					<p className="font-[200] text-sm text-gray-200">
						{props.Obj.description}
					</p>
				</div>
				<div className="absolute rounded-2xl z-1 inset-0 bg-gradient-to-t from-main to-transparent opacity-40"></div>
			</div>
		</Link>
	)
}

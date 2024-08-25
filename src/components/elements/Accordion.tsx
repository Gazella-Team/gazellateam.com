import { cn } from '@/lib/utils'
import { Minus, Plus } from 'lucide-react'
import * as React from 'react'
import { useState } from 'react'

type AccordionItemProps = {
	isOpen: boolean
	open: () => void
	title: string
	children?: React.ReactNode
}

function AccordionItemProps({
	isOpen,
	open,
	title,
	children,
}: AccordionItemProps) {
	return (
		<div className="border p-3 rounded-3xl bg-white overflow-hidden">
			<button
				className={cn(
					'p-2 px-4 rounded-2xl group w-full transition-all flex justify-between items-center',
					isOpen && 'bg-gray-50'
				)}
				onClick={open}
			>
				<h3
					className={cn(
						'text-xl font-semibold text-left group-hover:translate-x-2 transition-all',
						isOpen && 'text-third'
					)}
				>
					{title}
					<span className="text-second">.</span>
				</h3>
				{isOpen ? (
					<span className="text-second group-hover:-translate-x-1 transition-all">
						<Minus />
					</span>
				) : (
					<span className="text-second group-hover:rotate-[45deg] transition-all">
						<Plus />
					</span>
				)}
			</button>
			{isOpen && <section className="px-8 py-4">{children}</section>}
		</div>
	)
}

type AccordionProps = {
	items: {
		title: string
		content: React.ReactNode
	}[]
}

export default function Accordion({ items }: AccordionProps) {
	const [expanded, setExpanded] = useState<string | null>(null)

	return (
		<div className="flex flex-col gap-2">
			{items.map((item) => (
				<AccordionItemProps
					key={item.title}
					title={item.title}
					isOpen={expanded === item.title}
					open={() => {
						if (expanded === item.title) {
							setExpanded(null)
						} else {
							setExpanded(item.title)
						}
					}}
				>
					{item.content}
				</AccordionItemProps>
			))}
		</div>
	)
}

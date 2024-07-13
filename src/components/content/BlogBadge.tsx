import { cn } from '@/helpers/utils'
import { Post } from 'contentlayer/generated'

type BlogCategory = Post['category']

type BlogBadgeProps = {
	category: BlogCategory
}

export default function BlogBadge({ category }: BlogBadgeProps) {

	return (
		<span
			className={cn(
				`paragraph text-gray-500 text-sm`,
				'text-gray-600'
			)}
		>
			. {category.slice(0, 1).toUpperCase() + category.slice(1)}
		</span>
	)
}

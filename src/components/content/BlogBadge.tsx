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
				`px-2 border border-gray-600/10 paragraph text-white py-1.5 rounded-full text-xs font-medium bg-gradient-to-r`,
				'text-white bg-gradient-to-r from-gray-800 to-gray-700'
			)}
		>
			{category.slice(0, 1).toUpperCase() + category.slice(1)}
		</span>
	)
}

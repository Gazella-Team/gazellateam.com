import { Post } from 'contentlayer/generated'
import { format } from 'date-fns'
import Link from 'next/link'
import BlogBadge from './BlogBadge'

type BlogCardProps = {
	post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
	return (
		<Link
			className="flex flex-col overflow-hidden transition-all"
			href={`/blog/${post.slug}`}
		>
			<img
				alt={post.title}
				width="2400"
				height="1260"
				decoding="async"
				data-nimg="1"
				className="blur-0 aspect-[1200/630] object-cover"
				src={post.image}
				style={{ color: 'transparent' }}
			/>
			<div className="flex flex-1 flex-col mt-5 justify-between rounded-b-lg bg-white ">
				<div className="flex flex-col gap-6">
					<BlogBadge category={post.category} />
					<div>
						<h2 className="line-clamp-2 font-display text-3xl font-semibold tracking-tight text-black">
							{post.title}
						</h2>
						<p className="mt-2 line-clamp-2 font-base text-base text-gray-600">
							{post.description}
						</p>
					</div>
				</div>
				<div className="mt-8 flex items-center justify-between">
					<time
						dateTime={format(
							new Date(post.publishedAt),
							'yyyy-MM-dd'
						)}
						className="text-base text-gray-800"
					>
						{format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
					</time>
				</div>
			</div>
		</Link>
	)
}

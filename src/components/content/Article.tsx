import Link from 'next/link'
import type { Post } from 'contentlayer/generated'
import { Mdx } from '@/components/content/mdx'
import { format } from 'date-fns'
import { AuthorAvatars } from './blog/AuthorAvatars'
import { AuthorNames } from './blog/AuthorNames'
import BlogBadge from './BlogBadge'
import { ArrowLeft } from 'lucide-react'
import { Reveal } from '../Animations/Reveal'

export function Article({ post }: { post: Post }) {
	return (
		<Reveal delayTime={0.3}>
			<article className="relative mx-auto flex max-w-3xl w-[90%] py-24  md:mb-12 flex-col gap-8">
				<div className="grid md:max-w-2xl mx-auto w-full gap-5">
					<div className="mb-3 text-third text-sm gap-2">
						<Link
							className="flex gap-2 items-center"
							href={`/blog`}
							passHref
						>
							<ArrowLeft size={14} />
							Tilbage til alle opslag
						</Link>
					</div>
					<div className="flex items-center gap-2">
						<Link href={`/blog/category/${post.category}`} passHref>
							<BlogBadge category={post.category} />
						</Link>
					</div>
					<h1 className="text-main font-semibold text-5xl">{post.title}</h1>
					<h2 className="text-gray-600">
						{post.description}
					</h2>
					<div className="flex items-center gap-3 mb-5">
						<div className="flex gap-4">
							<AuthorAvatars authors={post.authors} />
							<div>
								<AuthorNames authors={post.authors} />
								<p className="text-sm text-gray-500 font-light">
									{format(
										new Date(post.publishedAt),
										'MMMM dd, yyyy'
									)}
									<span className="text-gray-500 mx-1">
										&bull;
									</span>
									{post.readingTime}
								</p>
							</div>
						</div>
					</div>
					<div className="relative h-full w-full overflow-hidden">
						<img src={post.image} alt={post.title} />
					</div>
				</div>
				<Mdx code={post.body.code} />
			</article>
		</Reveal>
	)
}

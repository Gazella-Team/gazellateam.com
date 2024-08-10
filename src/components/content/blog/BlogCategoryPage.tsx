import { Post } from 'contentlayer/generated'
import BlogCard from '../BlogCard'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import categories, { getCategoriesList } from '@/contentlayer/lib/categories'
import { cn } from '@/helpers/utils'
import Link from 'next/link'
import { Reveal } from '@/components/Animations/Reveal'
type BlogCategoryPageProps = {
	activeTab: keyof typeof categories
	posts: Post[]
}

export default function BlogCategoryPage({
	posts,
	activeTab,
}: BlogCategoryPageProps) {
	const category = categories[activeTab]
	return (
		<Layout cta={true}>
			{/* TODO: Create SEO banner from image.social when we have 3 blogs */}
			<Meta
				title={`Blog | ${category.name} | Gazella Team`}
				description="Latest news and updates from Toolbird aswell as guides."
			/>
			<div className="mt-20">
				<div className="max-w-7xl w-[90%] mx-auto">
					<Reveal delayTime={0.3}>
						<h1 className="text-5xl font-semibold mb-6 text-main">
							Nyheder og læring<span className='text-second'>.</span>
						</h1>
					</Reveal>
					<Reveal delayTime={0.5}>
						<h2 className="text-xl font-light text-gray-600">
							Seneste nyheder og opslag fra Gazella Team
						</h2>
					</Reveal>
					<Reveal delayTime={0.6}>
						<div className="mt-8 mb-10 flex">
							<div className="border bg-white w-full sm:w-fit border-gray-600/10 rounded-3xl sm:rounded-full px-3 py-2 flex flex-col sm:flex-row gap-2">
								{
									// Tabs
									getCategoriesList().map((category) => (
										<Link
											key={category.tag}
											href={
												category.tag == 'all'
													? '/blog'
													: `/blog/kategori/${category.tag}`
											}
											className={cn(
												'text-sm cursor-pointer font-medium px-3 py-1.5 rounded-full',
												category.tag == activeTab
													? 'text-white bg-main'
													: 'text-gray-500 hover:text-main hover:bg-gray-50'
											)}
										>
											{category.name}
										</Link>
									))
								}
							</div>
						</div>
					</Reveal>
				</div>
				<div className="py-8 pb-24 min-h-[490px] flex items-center justify-center  border-gray-600/10">
					{posts.length > 0 ? (
						<div className="max-w-7xl w-[90%] gap-8 md:gap-12 mx-auto grid grid-cols-1 md:grid-cols-2">
							{posts.map((post) => (
								<Reveal delayTime={0.6} key={post.slug}>
									<BlogCard post={post} />
								</Reveal>
							))}
						</div>
					) : (
						<div className="max-w-6xl w-[90%] mx-auto flex items-center justify-center h-[300px] border border-dashed bg-white border-gray-300 rounded-3xl">
							<p className="text-gray-500 paragraph text-lg p-8">
								Ingen posts endnu. Kig tilbage senere.
							</p>
						</div>
					)}
				</div>
			</div>
		</Layout>
	)
}

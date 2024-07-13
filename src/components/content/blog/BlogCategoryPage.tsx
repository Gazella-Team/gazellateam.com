import { Post } from 'contentlayer/generated'
import BlogCard from '../BlogCard'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import categories, { getCategoriesList } from '@/contentlayer/lib/categories'
import { cn } from '@/helpers/utils'
import Link from 'next/link'
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
		<Layout>
			{/* TODO: Create SEO banner from image.social when we have 3 blogs */}
			<Meta
				title={`Blog | ${category.name} | Gazella Team`}
				description="Latest news and updates from Toolbird aswell as guides."
			/>
			<div
				className="mt-12"
			>
				<div className="max-w-[1300px] w-[94%] mx-auto">
					<h1 className="text-4xl font-[300]  mb-4 text-main">
						Blog
					</h1>
					<h2 className="text-xl paragraph font-normal text-gray-600">
						Latest news and updates from Toolbird
					</h2>
					<div className="mt-8 mb-10 flex">
						<div className="bg-white border w-full sm:w-fit border-gray-600/10 paragraph rounded-3xl sm:rounded-full px-3 py-2 flex flex-col sm:flex-row gap-2">
							{
								// Tabs
								getCategoriesList().map((category) => (
									<Link
										key={category.tag}
										href={
											category.tag == 'all'
												? '/blog'
												: `/blog/category/${category.tag}`
										}
										className={cn(
											'text-sm cursor-pointer font-medium px-3 py-1.5 rounded-full',
											category.tag == activeTab
												? 'text-white bg-main'
												: 'text-gray-500 hover:text-gray-800 hover:bg-slate-50'
										)}
									>
										{category.name}
									</Link>
								))
							}
						</div>
					</div>
				</div>
				<div
					className="py-12 pb-24 min-h-[490px] bg-white flex items-center justify-center  border-gray-600/10"
				>
					{posts.length > 0 ? (
						<div className="max-w-[1300px] w-[94%] gap-8 md:gap-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
							{posts.map((post) => (
								<BlogCard key={post.slug} post={post} />
							))}
						</div>
					) : (
						<div className="max-w-6xl w-[90%] mx-auto flex items-center justify-center h-[300px] border border-dashed bg-white border-gray-300 rounded-3xl">
							<p className="text-gray-500 paragraph text-lg p-8">
								No blog posts found in this category yet. Check
								back later!
							</p>
						</div>
					)}
				</div>
			</div>
		</Layout>
	)
}

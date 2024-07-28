import { Article } from '@/components/content/Article'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import { allPosts, Post } from 'contentlayer/generated'
import {
	GetStaticPaths,
	GetStaticProps,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next'

export default function BlogList({
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout cta={true}>
			<Meta
				title={`${post.title} | Gazella Team`}
				description={post.description}
				banner={post.image}
				authors={post.authors.map((author) => author.name)}
			/>
			<div>
				<Article post={post} />
			</div>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = allPosts.map((post) => ({
		params: {
			slug: post.slug,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<{
	post: Post
}> = async (context: GetStaticPropsContext) => {
	const slug = context.params?.slug as string
	const post = allPosts.find((p) => p.slug === slug)

	if (!post) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			post: post,
		},
	}
}

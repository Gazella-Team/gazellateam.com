import Head from 'next/head'

const Meta = ({
	title = 'Gazella Team: Et ungt digitalt bureau med passion for salgsfremmende og kreative web- og app løsninger.',
	keywords = 'digital, bureau, hjemmeside, app, design, erfaring, software, salg, kreativ',
	description = 'Ved at kombinere tekniske, salgspsykologiske og designmæssige kompetencer sikrer vi brancheførende resultater for vores kunder.',
	icon = '/seo/favicon.png',
	banner = '/seo/banner.png',
	url = 'https://gazellateam.com',
	authors,
}: {
	title?: string
	keywords?: string
	description?: string
	icon?: string
	banner?: string
	url?: string
	authors?: string[]
}) => {
	return (
		<Head>
			<meta name="theme-color" content={'#fffff'} key="theme-color" />

			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
				key="viewport"
			/>
			<meta name="keywords" content={keywords} key="keyword" />
			<meta name="description" content={description} key="description" />

			<meta name="Language" content="en" key="lang" />
			<meta
				httpEquiv="Content-Language"
				content="en"
				key="content-lang"
			/>

			<meta charSet="utf-8" key="charset" />
			<link rel="icon" href={icon} key="icon" />
			<title key="title">{title}</title>

			<meta property="og:title" content={title} key="og:title" />
			<meta
				property="og:site_name"
				content="Gazella Team"
				key="og:site_name"
			/>
			<meta property="og:url" content={url} key="og:url" />
			<meta
				property="og:description"
				content={description}
				key="og:description"
			/>
			<meta property="og:type" content="website" key="og:type" />
			<meta property="og:image" content={banner} key="og:image" />

			<meta
				property="twitter:card"
				content="summary_large_image"
				key="twitter:card"
			/>
			<meta property="twitter:url" content={url} key="twitter:url" />
			<meta
				property="twitter:title"
				content={title}
				key="twitter:title"
			/>
			<meta
				property="twitter:description"
				content={description}
				key="twitter:description"
			/>
			<meta
				property="twitter:image"
				content={banner}
				key="twitter:banner"
			/>
			{authors?.map((author, index) => (
				<meta key={`author-${index}`} name="author" content={author} />
			))}
		</Head>
	)
}

export default Meta

const categories = {
	all: {
		name: 'All',
	},
	guides: {
		name: 'Guides',
	},
	education: {
		name: 'Education',
	},
	engineering: {
		name: 'Engineering',
	},
	news: {
		name: 'Company News',
	},
}

export function getCategoriesList() {
	const list = []
	for (const key in categories) {
		const typedKed = key as keyof typeof categories
		list.push({
			tag: key,
			name: categories[typedKed].name,
		})
	}
	return list
}

export default categories

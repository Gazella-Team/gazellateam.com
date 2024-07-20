const categories = {
	alle: {
		name: 'Alle',
	},
	laering: {
		name: 'Læring',
	},
	udvikling: {
		name: 'Udvikling',
	},
	nyheder: {
		name: 'Nyheder',
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

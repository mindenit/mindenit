export const useIconColorClasses = () => {
	const getIconColorClasses = (color: string) => {
		const colorMap = {
			blue: 'bg-blue-500/10 text-blue-600',
			emerald: 'bg-emerald-500/10 text-emerald-600',
			purple: 'bg-purple-500/10 text-purple-600',
			orange: 'bg-orange-500/10 text-orange-600',
			red: 'bg-red-500/10 text-red-600',
			indigo: 'bg-indigo-500/10 text-indigo-600',
		}
		return colorMap[color as keyof typeof colorMap] || colorMap.blue
	}

	return { getIconColorClasses }
}

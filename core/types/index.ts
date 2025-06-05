export interface NavigationItem {
	label: string
	href?: string
	children?: NavigationItem[]
}

export interface SocialLink {
	name: string
	href: string
	icon: string
	hoverClasses: string
	gradientClasses: string
}

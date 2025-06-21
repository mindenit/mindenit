export const navigationItems: NavigationItem[] = [
	{
		label: 'Головна',
		href: '/',
	},
	{
		label: "Кар'єра",
		href: '/hiring',
	},
	{
		label: 'Документи',
		children: [
			{
				label: 'Меморандум',
				href: '/memorandum',
			},
		],
	},
	{
		label: 'Програми',
		children: [
			{
				label: 'Student Program',
				href: '/student-program',
			},
			{
				label: 'Developer Program',
				href: '/developer-program',
			},
		],
	},
]

export const socialLinks: SocialLink[] = [
	{
		name: 'Telegram',
		href: 'https://t.me/mindenit',
		icon: 'streamline-logos:telegram-logo-2-solid',
		hoverClasses:
			'hover:text-christi-600 dark:hover:text-christi-400 hover:bg-christi-50 dark:hover:bg-christi-950/50',
		gradientClasses: 'from-christi-500/10 to-christi-600/10',
	},
	{
		name: 'Discord',
		href: 'https://discord.gg/ahKR75hU9h',
		icon: 'streamline-logos:discord-logo-2-solid',
		hoverClasses:
			'hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/50 dark:hover:text-indigo-400',
		gradientClasses: 'from-indigo-500/10 to-indigo-600/10',
	},
	{
		name: 'GitHub',
		href: 'https://github.com/mindenit',
		icon: 'streamline-logos:github-logo-2-solid',
		hoverClasses: 'hover:text-secondary-foreground hover:bg-muted-foreground/10',
		gradientClasses: 'from-muted/50 to-muted',
	},
]

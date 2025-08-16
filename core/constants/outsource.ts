export const SERVICES = [
	{
		title: 'Веб-сайти',
		description: 'Сучасні та адаптивні веб-сайти з унікальним дизайном',
		icon: 'lucide:globe',
		features: ['Responsive дизайн', 'SEO оптимізація', 'Швидка завантаження', 'Безпека'],
		technologies: ['Vue.js', 'Nuxt.js', 'React', 'Next.js'],
	},
	{
		title: 'Інтернет-магазини',
		description: 'Повнофункціональні e-commerce рішення для онлайн продажів',
		icon: 'lucide:shopping-cart',
		features: ['Каталог товарів', 'Система платежів', 'Управління замовленнями', 'Аналітика'],
		technologies: ['Shopify', 'WooCommerce', 'Custom решения'],
	},
	{
		title: 'CMS системи',
		description: 'Системи управління контентом для легкого оновлення сайту',
		icon: 'lucide:edit',
		features: [
			'Зручний інтерфейс',
			'Управління користувачами',
			'SEO інструменти',
			'Резервне копіювання',
		],
		technologies: ['Strapi', 'Sanity', 'Custom CMS'],
	},
	{
		title: 'LMS платформи',
		description: 'Системи управління навчанням для освітніх закладів',
		icon: 'lucide:graduation-cap',
		features: ['Курси та уроки', 'Тестування', 'Прогрес студентів', 'Сертифікати'],
		technologies: ['Moodle', 'Custom LMS'],
	},
	{
		title: 'Мобільні додатки',
		description: 'Нативні та крос-платформені мобільні додатки',
		icon: 'lucide:smartphone',
		features: ['iOS та Android', 'Push-повідомлення', 'Офлайн режим', 'App Store публікація'],
		technologies: ['React Native', 'Flutter', 'PWA'],
	},
	{
		title: 'API та інтеграції',
		description: 'Розробка API та інтеграція з існуючими системами',
		icon: 'lucide:link',
		features: ['RESTful API', 'GraphQL', 'Webhooks', 'Документація'],
		technologies: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL'],
	},
]

export const PROCESS_STEPS = [
	{
		number: '01',
		title: 'Консультація',
		description: 'Обговорюємо ваші потреби, цілі та бюджет. Аналізуємо технічні вимоги.',
		icon: 'lucide:message-circle',
		duration: '1-2 дні',
	},
	{
		number: '02',
		title: 'Планування',
		description: 'Створюємо технічне завдання, wireframes та план проекту з термінами.',
		icon: 'lucide:clipboard-list',
		duration: '3-5 днів',
	},
	{
		number: '03',
		title: 'Дизайн',
		description: 'Розробляємо UI/UX дизайн, створюємо прототипи та погоджуємо з вами.',
		icon: 'lucide:palette',
		duration: '1-2 тижні',
	},
	{
		number: '04',
		title: 'Розробка',
		description: 'Кодимо ваш проект, регулярно надсилаємо оновлення та демо-версії.',
		icon: 'lucide:code',
		duration: '2-8 тижнів',
	},
	{
		number: '05',
		title: 'Тестування',
		description: 'Проводимо повне тестування на різних пристроях та браузерах.',
		icon: 'lucide:bug',
		duration: '3-7 днів',
	},
	{
		number: '06',
		title: 'Запуск',
		description: 'Розгортаємо проект на хостингу, налаштовуємо домен та SSL сертифікат.',
		icon: 'lucide:rocket',
		duration: '1-2 дні',
	},
]

export const ADVANTAGES = [
	{
		title: 'Досвідчена команда',
		description: 'Наші розробники мають досвід роботи з різними технологіями та проектами',
		icon: 'lucide:users',
	},
	{
		title: 'Сучасні технології',
		description: 'Використовуємо найновіші інструменти та фреймворки для кращих результатів',
		icon: 'lucide:zap',
	},
	{
		title: 'Фіксована ціна',
		description: 'Без прихованих доплат - ціна залишається такою, як погоджена на початку',
		icon: 'lucide:shield-check',
	},
	{
		title: 'Підтримка після запуску',
		description: 'Надаємо технічну підтримку та допомогу після здачі проекту',
		icon: 'lucide:headphones',
	},
]

export const PARTNERS = [
	{
		name: 'ХНУРЕ',
		fullName: 'Харківський національний університет радіоелектроніки',
		description: 'Провідний технічний університет України в галузі IT та телекомунікацій',
		logo: '/logos/nure.svg',
		url: 'https://nure.ua/',
		category: 'Освіта',
	},
	{
		name: 'Godlike',
		fullName: 'Godlike Digital Solutions',
		description:
			'Провідний провайдер ігрового хостингу з підтримкою Minecraft, Rust, ARK та інших ігор',
		logo: '/logos/godlike.webp',
		url: 'https://godlike.host/',
		category: 'Хостинг',
	},
]

export const MORE_INTERESTING_FEATURES = [
	{
		icon: 'lucide:lightbulb',
		title: 'Інноваційні рішення',
		description: 'Створюємо унікальні продукти з використанням найсучасніших технологій',
		gradientFrom: 'from-royal-blue-500/20',
		gradientTo: 'to-christi-500/20',
		textColor: 'text-royal-blue-600 dark:text-royal-blue-400',
		hoverColor: 'group-hover:text-royal-blue-600 dark:group-hover:text-royal-blue-400',
	},
	{
		icon: 'lucide:puzzle',
		title: 'Індивідуальний підхід',
		description: 'Кожен проект розробляється з урахуванням ваших специфічних потреб',
		gradientFrom: 'from-christi-500/20',
		gradientTo: 'to-amaranth-500/20',
		textColor: 'text-christi-600 dark:text-christi-400',
		hoverColor: 'group-hover:text-christi-600 dark:group-hover:text-christi-400',
	},
	{
		icon: 'lucide:rocket',
		title: 'Швидкий запуск',
		description: 'Оптимізовані процеси для максимально швидкого виходу на ринок',
		gradientFrom: 'from-amaranth-500/20',
		gradientTo: 'to-royal-blue-500/20',
		textColor: 'text-amaranth-600 dark:text-amaranth-400',
		hoverColor: 'group-hover:text-amaranth-600 dark:group-hover:text-amaranth-400',
	},
]

export const PARTNER_STATS = [
	{
		value: '5+',
		label: 'Завершених проектів',
		color: 'text-royal-blue-600 dark:text-royal-blue-400',
	},
	{ value: '100%', label: 'Задоволених клієнтів', color: 'text-christi-600 dark:text-christi-400' },
	{ value: '24/7', label: 'Технічна підтримка', color: 'text-amaranth-600 dark:text-amaranth-400' },
]

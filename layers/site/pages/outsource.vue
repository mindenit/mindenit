<script setup lang="ts">
const pageTitle = `Аутсорс`
const pageDescription =
	'Ми готові втілити ваші ідеї в життя. Наша команда спеціалізується на створенні веб-сайтів, мобільних додатків та програмного забезпечення на замовлення.'

useSeoMeta({
	title: pageTitle,
	description: pageDescription,
	ogTitle: pageTitle,
	ogDescription: pageDescription,
})

defineOgImageComponent('Mindenit')

const services = [
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

const processSteps = [
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

const advantages = [
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

// ПОКРАЩЕНИЙ МАСИВ ДЛЯ ПАРТНЕРІВ
const partners = [
	{
		name: 'ХНУРЕ',
		fullName: 'Харківський національний університет радіоелектроніки',
		description: 'Провідний технічний університет України в галузі IT та телекомунікацій',
		logo: '/logos/nure.svg',
		url: 'https://nure.ua/',
		category: 'Освіта',
	},
	{
		name: 'GodLike',
		fullName: 'GodLike Esports',
		description: 'Професійна кіберспортивна організація та розробник ігрових рішень',
		logo: '/logos/godlike.webp',
		url: '#',
		category: 'Кіберспорт',
	},
]
</script>

<template>
	<div class="flex flex-col gap-16 pt-24">
		<PageHeader>
			<template #title>
				<GradientText>Працюємо з любов'ю</GradientText>
			</template>
			<template #description>
				<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
					Втілюємо ваші ідеї в життя за допомогою сучасних технологій. Від концепції до готового
					продукту - ми з вами на кожному кроці.
				</p>
			</template>
		</PageHeader>

		<GradientSection variant="primary" size="md" align="center" class="relative overflow-hidden">
			<div
				class="from-royal-blue-400/10 to-christi-400/10 absolute top-0 right-0 h-20 w-20 animate-bounce
					rounded-full bg-gradient-to-r blur-xl"
			></div>
			<div
				class="from-christi-400/10 to-amaranth-400/10 absolute bottom-0 left-0 h-16 w-16 animate-bounce
					rounded-full bg-gradient-to-r blur-xl"
				style="animation-delay: 1.5s"
			></div>

			<div class="relative z-10">
				<h3 class="text-secondary-foreground mb-8 text-3xl font-bold">Чому варто обрати нас?</h3>
				<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					<div
						v-for="(advantage, index) in advantages"
						:key="advantage.title"
						class="group space-y-3 text-center"
						:style="{ animationDelay: `${index * 200}ms` }"
					>
						<div
							class="bg-royal-blue-100 dark:bg-royal-blue-900/30 group-hover:from-royal-blue-100
								group-hover:to-christi-100 dark:group-hover:from-royal-blue-900/50
								dark:group-hover:to-christi-900/50 mx-auto flex h-16 w-16 items-center justify-center rounded-xl
								transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-gradient-to-r"
						>
							<Icon
								:name="advantage.icon"
								class="text-royal-blue-600 dark:text-royal-blue-400 group-hover:text-christi-600
									dark:group-hover:text-christi-400 !size-8 transition-all duration-300 group-hover:scale-110"
							/>
						</div>
						<h4
							class="text-secondary-foreground group-hover:text-royal-blue-600 dark:group-hover:text-royal-blue-400
								font-semibold transition-colors duration-300"
						>
							{{ advantage.title }}
						</h4>
						<p
							class="text-muted-foreground group-hover:text-secondary-foreground/80 text-sm transition-colors
								duration-300"
						>
							{{ advantage.description }}
						</p>
					</div>
				</div>
			</div>
		</GradientSection>

		<!-- Покращений блок партнерів -->
		<!-- Покращений блок партнерів -->
		<GradientSection variant="subtle" size="lg" align="center" class="relative overflow-hidden">
			<!-- Анімовані декоративні елементи -->
			<div
				class="from-royal-blue-400/10 to-christi-400/10 absolute top-0 left-1/4 h-24 w-24 animate-pulse
					rounded-full bg-gradient-to-r blur-xl"
			></div>
			<div
				class="from-christi-400/10 to-amaranth-400/10 absolute right-1/4 bottom-0 h-20 w-20 animate-pulse
					rounded-full bg-gradient-to-r blur-xl"
				style="animation-delay: 1.5s"
			></div>

			<div class="relative z-10">
				<div class="mb-12 text-center">
					<h2 class="mb-4 text-3xl font-bold">
						<GradientText>З нами співпрацюють</GradientText>
					</h2>
					<p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
						Довіра провідних компаній та організацій - наша найкраща рекомендація
					</p>
				</div>

				<!-- Центровані картки партнерів -->
				<div class="flex justify-center">
					<div class="grid max-w-2xl gap-8 md:grid-cols-2">
						<div
							v-for="(partner, index) in partners"
							:key="partner.name"
							class="group bg-card border-border/50 relative overflow-hidden rounded-xl border p-6 shadow-lg
								transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
							:style="{ animationDelay: `${index * 150}ms` }"
						>
							<!-- Анімований фон при ховері -->
							<div
								class="from-royal-blue-500/5 via-christi-500/5 to-amaranth-500/5 absolute inset-0 bg-gradient-to-br
									opacity-0 transition-all duration-500 group-hover:opacity-100"
							></div>

							<!-- Анімований бордер -->
							<div
								class="from-royal-blue-500/10 via-christi-500/10 to-amaranth-500/10 absolute inset-0 rounded-xl border-2
									border-transparent bg-gradient-to-r [mask-composite:exclude] opacity-0 transition-opacity
									duration-500 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
									group-hover:opacity-100"
							></div>

							<div class="relative z-10 space-y-4 text-center">
								<!-- Лого та категорія -->
								<div class="space-y-3">
									<div
										class="from-royal-blue-100/50 to-christi-100/50 dark:from-royal-blue-900/30 dark:to-christi-900/30 mx-auto
											flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r transition-all duration-500
											group-hover:scale-110 group-hover:rotate-6"
									>
										<img
											:src="partner.logo"
											:alt="partner.name"
											class="h-10 w-10 object-contain opacity-70 transition-all duration-300 group-hover:scale-110
												group-hover:opacity-100"
										/>
										<Icon
											v-if="!partner.logo"
											name="lucide:building"
											class="text-royal-blue-600 dark:text-royal-blue-400 h-8 w-8"
										/>
									</div>

									<div class="space-y-1">
										<span
											class="bg-christi-100 dark:bg-christi-900/50 text-christi-700 dark:text-christi-300 inline-block
												rounded-full px-2 py-1 text-xs font-medium"
										>
											{{ partner.category }}
										</span>
									</div>
								</div>

								<!-- Назва та опис -->
								<div class="space-y-2">
									<h3
										class="text-secondary-foreground group-hover:text-royal-blue-600 dark:group-hover:text-royal-blue-400
											text-lg font-bold transition-colors duration-300"
									>
										{{ partner.name }}
									</h3>
									<h4 class="text-muted-foreground text-sm font-medium">
										{{ partner.fullName }}
									</h4>
									<p
										class="text-muted-foreground group-hover:text-secondary-foreground/80 text-sm leading-relaxed
											transition-colors duration-300"
									>
										{{ partner.description }}
									</p>
								</div>

								<!-- Посилання (якщо є) -->
								<div v-if="partner.url && partner.url !== '#'" class="pt-2">
									<a
										:href="partner.url"
										target="_blank"
										rel="noopener noreferrer"
										class="text-royal-blue-600 dark:text-royal-blue-400 hover:text-christi-600 dark:hover:text-christi-400
											inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300"
									>
										<span>Дізнатися більше</span>
										<Icon
											name="lucide:external-link"
											class="h-3 w-3 transition-transform duration-300 group-hover:scale-110"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Додатковий блок з статистикою -->
				<div class="mt-12 grid gap-6 md:grid-cols-3">
					<div class="space-y-2 text-center">
						<div class="text-royal-blue-600 dark:text-royal-blue-400 text-3xl font-bold">5+</div>
						<div class="text-muted-foreground text-sm">Завершених проектів</div>
					</div>
					<div class="space-y-2 text-center">
						<div class="text-christi-600 dark:text-christi-400 text-3xl font-bold">100%</div>
						<div class="text-muted-foreground text-sm">Задоволених клієнтів</div>
					</div>
					<div class="space-y-2 text-center">
						<div class="text-amaranth-600 dark:text-amaranth-400 text-3xl font-bold">24/7</div>
						<div class="text-muted-foreground text-sm">Технічна підтримка</div>
					</div>
				</div>
			</div>
		</GradientSection>

		<Separator />

		<div class="container mx-auto px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">
				<GradientText>Що ми розробляємо</GradientText>
			</h2>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<div
					v-for="(service, index) in services"
					:key="service.title"
					class="group bg-card border-border/50 relative overflow-hidden rounded-xl border p-6 shadow-lg
						transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
					:style="{ animationDelay: `${index * 100}ms` }"
				>
					<div
						class="from-royal-blue-500/10 to-christi-500/10 absolute inset-0 bg-gradient-to-r opacity-0 transition-all
							duration-500 group-hover:opacity-100"
					></div>

					<div
						class="from-royal-blue-500/20 via-christi-500/20 to-royal-blue-500/20 absolute inset-0 rounded-xl border-2
							border-transparent bg-gradient-to-r [mask-composite:exclude] opacity-0 transition-opacity
							duration-500 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
							group-hover:opacity-100"
					></div>

					<div class="relative z-10">
						<div class="mb-4 flex items-center gap-3">
							<div
								class="from-royal-blue-500/20 to-christi-500/20 flex h-12 w-12 items-center justify-center rounded-lg
									bg-gradient-to-r transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
							>
								<Icon
									:name="service.icon"
									class="text-royal-blue-600 dark:text-royal-blue-400 h-6 w-6 transition-transform duration-300
										group-hover:scale-110"
								/>
							</div>
							<h3
								class="text-secondary-foreground group-hover:text-royal-blue-600 dark:group-hover:text-royal-blue-400
									text-xl font-bold transition-colors duration-300"
							>
								{{ service.title }}
							</h3>
						</div>

						<p
							class="text-muted-foreground group-hover:text-secondary-foreground/90 mb-4 transition-colors duration-300"
						>
							{{ service.description }}
						</p>

						<div class="space-y-3">
							<div>
								<h4 class="text-secondary-foreground mb-2 text-sm font-semibold">Можливості:</h4>
								<div class="flex flex-wrap gap-1">
									<span
										v-for="(feature, featureIndex) in service.features"
										:key="feature"
										class="bg-royal-blue-50 dark:bg-royal-blue-950/30 text-royal-blue-700 dark:text-royal-blue-300 rounded px-2
											py-1 text-xs transition-all duration-300 hover:scale-105"
										:style="{ transitionDelay: `${featureIndex * 50}ms` }"
									>
										{{ feature }}
									</span>
								</div>
							</div>

							<div>
								<h4 class="text-secondary-foreground mb-2 text-sm font-semibold">Технології:</h4>
								<div class="flex flex-wrap gap-1">
									<span
										v-for="(tech, techIndex) in service.technologies"
										:key="tech"
										class="bg-christi-50 dark:bg-christi-950/30 text-christi-700 dark:text-christi-300 rounded px-2 py-1
											text-xs transition-all duration-300 hover:scale-105"
										:style="{ transitionDelay: `${techIndex * 50}ms` }"
									>
										{{ tech }}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="relative mt-16">
				<GradientSection
					variant="primary"
					size="lg"
					align="center"
					class="relative overflow-hidden"
				>
					<div
						class="from-royal-blue-400/20 to-christi-400/20 absolute top-0 left-0 h-32 w-32 animate-pulse rounded-full
							bg-gradient-to-r blur-xl"
					></div>
					<div
						class="from-christi-400/20 to-amaranth-400/20 absolute right-0 bottom-0 h-24 w-24 animate-pulse
							rounded-full bg-gradient-to-r blur-xl"
						style="animation-delay: 1s"
					></div>
					<div
						class="from-amaranth-400/20 to-royal-blue-400/20 absolute top-1/2 left-1/2 h-16 w-16 animate-pulse
							rounded-full bg-gradient-to-r blur-xl"
						style="animation-delay: 2s"
					></div>

					<div class="relative z-10">
						<div class="mb-8 text-center">
							<div class="mb-4 inline-flex items-center gap-2">
								<Icon
									name="lucide:sparkles"
									class="text-royal-blue-600 dark:text-royal-blue-400 !size-8 animate-bounce"
								/>
								<h3 class="text-secondary-foreground text-3xl font-bold">
									<GradientText variant="primary">І багато цікавішого!</GradientText>
								</h3>
								<Icon
									name="lucide:sparkles"
									class="text-christi-600 dark:text-christi-400 !size-8 animate-bounce"
									style="animation-delay: 0.5s"
								/>
							</div>
							<p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
								Ми завжди відкриті до нових викликів та нестандартних рішень. Маєте унікальну ідею?
								Давайте її обговоримо!
							</p>
						</div>

						<div class="mb-8 grid gap-6 md:grid-cols-3">
							<div class="group text-center">
								<div
									class="from-royal-blue-500/20 to-christi-500/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center
										rounded-2xl bg-gradient-to-r transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
								>
									<Icon
										name="lucide:lightbulb"
										class="text-royal-blue-600 dark:text-royal-blue-400 !size-8 transition-transform duration-300
											group-hover:scale-110"
									/>
								</div>
								<h4
									class="text-secondary-foreground group-hover:text-royal-blue-600 dark:group-hover:text-royal-blue-400 mb-2
										font-semibold transition-colors duration-300"
								>
									Інноваційні рішення
								</h4>
								<p
									class="text-muted-foreground group-hover:text-secondary-foreground/80 text-sm transition-colors
										duration-300"
								>
									Створюємо унікальні продукти з використанням найсучасніших технологій
								</p>
							</div>

							<div class="group text-center">
								<div
									class="from-christi-500/20 to-amaranth-500/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center
										rounded-2xl bg-gradient-to-r transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
								>
									<Icon
										name="lucide:puzzle"
										class="text-christi-600 dark:text-christi-400 !size-8 transition-transform duration-300
											group-hover:scale-110"
									/>
								</div>
								<h4
									class="text-secondary-foreground group-hover:text-christi-600 dark:group-hover:text-christi-400 mb-2
										font-semibold transition-colors duration-300"
								>
									Індивідуальний підхід
								</h4>
								<p
									class="text-muted-foreground group-hover:text-secondary-foreground/80 text-sm transition-colors
										duration-300"
								>
									Кожен проект розробляється з урахуванням ваших специфічних потреб
								</p>
							</div>

							<div class="group text-center">
								<div
									class="from-amaranth-500/20 to-royal-blue-500/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center
										rounded-2xl bg-gradient-to-r transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
								>
									<Icon
										name="lucide:rocket"
										class="text-amaranth-600 dark:text-amaranth-400 !size-8 transition-transform duration-300
											group-hover:scale-110"
									/>
								</div>
								<h4
									class="text-secondary-foreground group-hover:text-amaranth-600 dark:group-hover:text-amaranth-400 mb-2
										font-semibold transition-colors duration-300"
								>
									Швидкий запуск
								</h4>
								<p
									class="text-muted-foreground group-hover:text-secondary-foreground/80 text-sm transition-colors
										duration-300"
								>
									Оптимізовані процеси для максимально швидкого виходу на ринок
								</p>
							</div>
						</div>
					</div>
				</GradientSection>
			</div>
		</div>

		<Separator />

		<div class="container mx-auto px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">
				<GradientText>Як ми працюємо</GradientText>
			</h2>
			<p class="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
				Прозорий процес від ідеї до готового продукту з регулярними оновленнями та контролем якості
			</p>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<div
					v-for="(step, index) in processSteps"
					:key="step.number"
					class="bg-card border-border/50 group relative rounded-xl border p-6 shadow-lg transition-all duration-500
						hover:-translate-y-1 hover:shadow-xl"
					:style="{ animationDelay: `${index * 150}ms` }"
				>
					<div
						class="from-royal-blue-500/10 via-christi-500/10 to-amaranth-500/10 absolute inset-0 rounded-xl
							bg-gradient-to-br opacity-0 transition-all duration-500 group-hover:opacity-100"
					></div>

					<div class="absolute -top-4 left-6 z-20">
						<div
							class="from-royal-blue-600 to-christi-600 flex !size-8 items-center justify-center rounded-full
								bg-gradient-to-r text-sm font-bold text-white shadow-lg transition-all duration-300
								group-hover:scale-110 group-hover:rotate-12"
						>
							{{ index + 1 }}
						</div>
					</div>

					<div
						v-if="index < processSteps.length - 1"
						class="from-royal-blue-200 to-christi-200 dark:from-royal-blue-800 dark:to-christi-800
							group-hover:from-royal-blue-400 group-hover:to-christi-400 absolute top-0 left-full hidden h-0.5 w-8
							translate-y-4 transform bg-gradient-to-r transition-all duration-500 lg:block"
					>
						<div
							class="bg-royal-blue-500 absolute top-0 h-1 w-1 animate-pulse rounded-full opacity-0 transition-opacity
								duration-500 group-hover:opacity-100"
							style="animation: moveDot 2s ease-in-out infinite"
						></div>
					</div>

					<div class="relative z-10 pt-4">
						<div class="mb-3 flex items-center gap-3">
							<div
								class="from-royal-blue-500/20 to-christi-500/20 flex h-10 w-10 items-center justify-center rounded-lg
									bg-gradient-to-r transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
							>
								<Icon
									:name="step.icon"
									class="text-royal-blue-600 dark:text-royal-blue-400 !size-5 transition-transform duration-300
										group-hover:scale-110"
								/>
							</div>
							<h3
								class="text-secondary-foreground group-hover:text-royal-blue-600 dark:group-hover:text-royal-blue-400
									text-lg font-bold transition-colors duration-300"
							>
								{{ step.title }}
							</h3>
						</div>

						<p
							class="text-muted-foreground group-hover:text-secondary-foreground/90 mb-3 transition-colors duration-300"
						>
							{{ step.description }}
						</p>

						<div class="flex items-center gap-2">
							<Icon name="lucide:clock" class="text-christi-600 dark:text-christi-400 h-3 w-3" />
							<span class="text-christi-600 dark:text-christi-400 text-xs font-semibold">
								{{ step.duration }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<Separator />

		<GradientSection variant="secondary" size="lg" align="center" class="relative overflow-hidden">
			<div
				class="from-royal-blue-400/10 to-christi-400/10 absolute top-1/4 left-0 h-32 w-32 animate-pulse
					rounded-full bg-gradient-to-r blur-2xl"
			></div>
			<div
				class="from-christi-400/10 to-amaranth-400/10 absolute right-0 bottom-1/4 h-28 w-28 animate-pulse
					rounded-full bg-gradient-to-r blur-2xl"
				style="animation-delay: 2s"
			></div>

			<div class="relative z-10">
				<h3 class="text-secondary-foreground mb-4 text-3xl font-bold">Готові почати ваш проект?</h3>
				<p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg leading-relaxed">
					Напишіть нам, розкажіть про свою ідею, і ми безкоштовно проконсультуємо вас та
					запропонуємо оптимальне рішення.
				</p>

				<div class="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href="mailto:sales@mindenit.org"
						class="group from-royal-blue-600 to-christi-600 hover:from-royal-blue-700 hover:to-christi-700 relative
							inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r px-8 py-3 font-semibold
							text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:scale-105
							hover:shadow-2xl"
					>
						<div
							class="absolute inset-0 translate-x-full -skew-x-12 transform bg-gradient-to-r from-white/20 to-transparent
								opacity-0 transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
						></div>
						<Icon
							name="lucide:mail"
							class="relative z-10 !size-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
						/>
						<span class="relative z-10">sales@mindenit.org</span>
					</a>

					<div class="text-muted-foreground flex items-center gap-6 text-sm">
						<div class="group flex items-center gap-1">
							<Icon
								name="lucide:clock"
								class="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
							/>
							<span class="group-hover:text-secondary-foreground transition-colors duration-300"
								>Відповідь до 24 годин</span
							>
						</div>
						<div class="group flex items-center gap-1">
							<Icon
								name="lucide:shield-check"
								class="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
							/>
							<span class="group-hover:text-secondary-foreground transition-colors duration-300"
								>Безкоштовна консультація</span
							>
						</div>
					</div>
				</div>

				<div class="border-border/30 border-t pt-8">
					<div
						class="text-muted-foreground/70 group flex items-center justify-center gap-2 text-sm"
					>
						<Icon
							name="lucide:lightbulb"
							class="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-500"
						/>
						<span class="group-hover:text-secondary-foreground transition-colors duration-300">
							<strong>Безкоштовна консультація:</strong> розкажемо про можливості, підберемо
							технології та оцінимо терміни
						</span>
					</div>
				</div>
			</div>
		</GradientSection>
	</div>
</template>

<style scoped>
@keyframes moveDot {
	0% {
		left: 0;
	}
	50% {
		left: 50%;
	}
	100% {
		left: 100%;
	}
}

/* Анімації появи елементів */
.grid > div,
.grid > a {
	opacity: 0;
	transform: translateY(20px);
	animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

/* Плавна анімація для тегів */
.flex-wrap > span {
	transform: scale(0.95);
	transition: all 0.3s ease;
}

.flex-wrap > span:hover {
	transform: scale(1.05);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Анімація пульсації */
@keyframes gentlePulse {
	0%,
	100% {
		opacity: 0.6;
	}
	50% {
		opacity: 1;
	}
}

.animate-gentle-pulse {
	animation: gentlePulse 3s ease-in-out infinite;
}
</style>

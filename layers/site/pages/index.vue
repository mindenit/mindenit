<script setup lang="ts">
useHead({
	title: 'Mindenit',
	meta: [
		{
			name: 'description',
			content:
				'Mindenit - команда ентузіастів-студентів, що створює технологічні рішення для полегшення студентського життя через сайти, боти та додатки',
		},
		{
			name: 'keywords',
			content:
				'mindenit, розклад університету, відповіді на тести, студентські проекти, технологічні рішення для студентів, біржа студентських робіт, emperor.uno',
		},
		{ name: 'robots', content: 'index, follow' },
		{ name: 'language', content: 'uk' },
		{ property: 'og:title', content: 'Mindenit - Технологічні рішення для студентів' },
		{
			property: 'og:description',
			content: 'Ми створюємо сучасні технологічні рішення для покращення студентського життя',
		},
		{ property: 'og:image', content: '/img/mindenit.jpg' },
		{ property: 'og:locale', content: 'uk_UA' },
	],
	link: [{ rel: 'icon', type: 'image/jpeg', href: '/img/mindenit.jpg' }],
})

definePageMeta({
	layout: 'home',
})

const products = [
	{
		name: 'Розклад',
		description: 'Сайт з розкладом для студентів університету',
		logo: '/schedule-logo.png',
		link: 'https://sh.mindenit.org/',
	},
	{
		name: 'Answers',
		description:
			'Сайт з відповідями на тести для студентів, яка керується студентами. Аналог "Золотого Трону Імператора (emperor.uno)"',
		logo: '/answers-logo.png',
		link: 'https://answers.mindenit.org/',
	},
	{
		name: 'Glimpse',
		description:
			'Біржа робіт, на якій студенти швидко та прозоро можуть покупати та продавати роботи',
		logo: null,
		link: null,
	},
]
</script>

<template>
	<div class="flex flex-col gap-16">
		<section>
			<div class="mb-6 text-center">
				<h2 class="mb-4 text-4xl font-black md:text-5xl">
					<span
						class="from-royal-blue-600 to-christi-600 dark:from-royal-blue-400 dark:to-christi-400 bg-gradient-to-r
							bg-clip-text text-transparent"
					>
						Наші продукти
					</span>
				</h2>
				<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
					Інноваційні рішення, створені з любов'ю для студентської спільноти
				</p>
			</div>

			<div class="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
				<ProductCard v-for="product in products" :key="product.name" :product="product" />
			</div>
		</section>

		<section class="relative mb-16 overflow-hidden rounded-2xl py-16">
			<div
				class="from-royal-blue-500/10 to-christi-500/10 absolute inset-0 bg-gradient-to-br via-transparent"
			></div>
			<div class="relative space-y-6 text-center">
				<h3 class="text-secondary-foreground text-3xl font-bold">
					Разом ми створюємо майбутнє освіти
				</h3>
				<p class="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
					Кожен проект — це крок до того, щоб зробити навчання простішим, цікавішим та ефективнішим.
					Ми віримо, що технології можуть змінити світ освіти на краще.
				</p>
				<div class="flex justify-center pt-4">
					<div class="text-royal-blue-600 dark:text-royal-blue-400 flex items-center gap-2">
						<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>
						<span class="font-semibold">Інновації • Якість • Спільнота</span>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

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
					<GradientText> Наші продукти </GradientText>
				</h2>
				<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
					Інноваційні рішення, створені з любов'ю для студентської спільноти
				</p>
			</div>

			<div class="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
				<ProductCard v-for="product in products" :key="product.name" :product="product" />
			</div>
		</section>

		<Separator />

		<GradientSection variant="primary" size="md" align="center">
			<h3 class="text-secondary-foreground text-3xl font-bold">
				Разом ми створюємо майбутнє освіти
			</h3>
			<p class="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed">
				Кожен проект — це крок до того, щоб зробити навчання простішим, цікавішим та ефективнішим.
				Ми віримо, що технології можуть змінити світ освіти на краще.
			</p>
			<div class="flex justify-center pt-4">
				<div class="text-royal-blue-600 dark:text-royal-blue-400 flex items-center gap-2">
					<Icon name="lucide:check" />
					<span class="font-semibold">Інновації • Якість • Спільнота</span>
				</div>
			</div>
		</GradientSection>
	</div>
</template>

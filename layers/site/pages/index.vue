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
	layout: 'default',
})

const stats = [
	{ id: 1, value: '550+', label: 'Активних користувачів', isTime: false },
	{ id: 2, value: '3', label: 'Успішних проєкти', isTime: false },
	{ id: 3, value: '700+', label: 'Задоволених студентів', isTime: false },
	{ id: 4, value: '100%', label: 'Підтримки', isTime: false },
]

const products = [
	{
		name: 'Розклад',
		description: 'Сайт з розкладом для студентів університету',
		logo: '/schedule-logo.png',
		link: 'https://sh.mindenit.org/',
		aos: 'flip-left',
	},
	{
		name: 'Answers',
		description:
			'Сайт з відповідями на тести для студентів, яка керується студентами. Аналог "Золотого Трону Імператора (emperor.uno)"',
		logo: '/answers-logo.png',
		link: 'https://answers.mindenit.org/',
		aos: 'flip-right',
	},
	{
		name: 'Glimpse',
		description:
			'Біржа робіт, на якій студенти швидко та прозоро можуть покупати та продавати роботи',
		logo: null,
		link: null,
		aos: 'flip-right',
		fullWidth: true,
	},
]
</script>

<template>
	<div class="flex flex-col gap-8">
		<div class="flex w-full flex-col items-center gap-8 md:flex-row">
			<img
				class="pointer-events-none size-28 rounded-xl shadow-lg"
				src="/logo.webp"
				alt="Mindenit logo"
			/>
			<div class="flex flex-col gap-2">
				<h1 class="text-secondary-foreground text-center text-4xl font-bold md:text-left">
					Mindenit
				</h1>
				<p class="text-muted-foreground">
					Ми — <span class="text-secondary-foreground font-bold">Mindenit</span>, команда
					ентузіастів-студентів, яка займається створенням сучасних технологічних рішень для
					студентів. Наша мета — покращити та полегшити студентське життя завдяки сайтам, ботам та
					додаткам.
				</p>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-4">
			<StatsCard
				v-for="stat in stats"
				:key="stat.id"
				:value="stat.value"
				:label="stat.label"
				:is-time="stat.isTime"
			/>

			<StatsCard
				:value="'2+'"
				:label="'Ми працюємо для Вас вже'"
				:is-time="true"
				:start-date="'2023-02-16'"
				class="sm:col-span-4"
			/>

			<ActionCard
				title="Наш телеграм"
				button-text="Приєднатися"
				link="https://t.me/mindenit"
				class="sm:col-span-2"
			/>

			<ActionCard
				title="Наша банка"
				button-text="Задонатити"
				link="https://send.monobank.ua/jar/2GW9aAQNXE"
				class="sm:col-span-2"
			/>
		</div>

		<div class="bg-fiord-600 dark:bg-fiord-400 h-px w-full"></div>

		<h1 class="text-secondary-foreground text-center text-3xl font-bold">Наші продукти</h1>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
			<ProductCard
				v-for="product in products"
				:key="product.name"
				:product="product"
				:data-aos="product.aos"
			/>
		</div>
	</div>
</template>

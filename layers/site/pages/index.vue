<script setup lang="ts">
const pageTitle = `Головна`
const pageDescription =
	'Mindenit - інноваційні IT-рішення для студентів. Ми створюємо продукти, які роблять навчання простішим і ефективнішим.'

useSeoMeta({
	title: pageTitle,
	description: pageDescription,
	ogTitle: pageTitle,
	ogDescription: pageDescription,
})

defineOgImageComponent('Mindenit')

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

			<div class="grid grid-cols-1 gap-8">
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

<script setup lang="ts">
const pageTitle = `Mindenit Developer Program`
const pageDescription = 'Ця сторінка знаходиться в розробці. Слідкуйте за оновленнями!'

useSeoMeta({
	title: pageTitle,
	description: pageDescription,
	ogTitle: pageTitle,
	ogDescription: pageDescription,
})

defineOgImageComponent('Mindenit')
</script>

<template>
	<div class="mx-auto max-w-2xl space-y-8 text-center">
		<div class="flex items-center justify-center pb-8">
			<InDevelopment />
		</div>

		<div class="space-y-4">
			<h1
				class="from-royal-blue-600 via-christi-500 to-royal-blue-600 animate-pulse bg-gradient-to-r bg-clip-text
					text-4xl font-bold text-transparent md:text-6xl"
			>
				Ця сторінка ще в розробці
			</h1>

			<p class="text-muted-foreground mx-auto max-w-lg text-lg leading-relaxed md:text-xl">
				Ми активно працюємо над цією сторінкою. Скоро тут буде щось неймовірне! 🚀
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2">
			<div
				class="bg-card/80 border-border/50 rounded-2xl border p-6 shadow-lg backdrop-blur-md transition-all
					duration-300 hover:scale-105 hover:shadow-xl"
			>
				<div class="mb-4 flex items-center gap-3">
					<Icon name="lucide:code" class="text-royal-blue-600 dark:text-royal-blue-400 size-6" />
					<h3 class="text-secondary-foreground text-lg font-semibold">В процесі розробки</h3>
				</div>
				<p class="text-muted-foreground text-sm leading-relaxed">
					Наша команда розробників активно працює. Ми використовуємо найсучасніші технології для
					забезпечення найкращого досвіду.
				</p>
			</div>

			<div
				class="bg-card/80 border-border/50 rounded-2xl border p-6 shadow-lg backdrop-blur-md transition-all
					duration-300 hover:scale-105 hover:shadow-xl"
			>
				<div class="mb-4 flex items-center gap-3">
					<Icon name="lucide:clock" class="text-christi-600 dark:text-christi-400 size-6" />
					<h3 class="text-secondary-foreground text-lg font-semibold">Скоро буде готово</h3>
				</div>
				<p class="text-muted-foreground text-sm leading-relaxed">
					Очікуйте на запуск у найближчому майбутньому. Ми повідомимо про готовність через наші
					канали зв'язку.
				</p>
			</div>
		</div>
	</div>
</template>

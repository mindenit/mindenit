<script setup lang="ts">
interface Props {
	error: {
		statusCode: number
		statusMessage?: string
		message?: string
	}
}

const props = defineProps<Props>()

useHead({
	title: `${props.error.statusCode} - Сторінка не знайдена | Mindenit`,
	meta: [
		{
			name: 'description',
			content:
				'Схоже, ця сторінка загубилася у кодових дебрях. Поверніться на головну або скористайтеся навігацією.',
		},
		{
			property: 'og:title',
			content: `${props.error.statusCode} - Сторінка не знайдена | Mindenit`,
		},
		{
			property: 'og:description',
			content: 'Схоже, ця сторінка загубилася у кодових дебрях.',
		},
		{
			name: 'robots',
			content: 'noindex, nofollow',
		},
	],
})

const errorConfig = computed(() => {
	const configs = {
		404: {
			title: 'Сторінка не знайдена',
			message:
				'Схоже, ця сторінка загубилася у кодових дебрях. Можливо, вона ще не створена або переїхала на нову адресу.',
			emoji: '🔍',
		},
		500: {
			title: 'Помилка сервера',
			message: 'Наші сервери зараз відпочивають. Ми вже працюємо над вирішенням проблеми.',
			emoji: '⚡',
		},
		default: {
			title: 'Щось пішло не так',
			message: 'Виникла неочікувана помилка. Не хвилюйтесь, ми це виправимо!',
			emoji: '🤖',
		},
	}

	return configs[props.error.statusCode as keyof typeof configs] || configs.default
})

const goBack = () => {
	if (import.meta.client && window.history.length > 1) {
		window.history.back()
	} else {
		navigateTo('/')
	}
}

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
	<div class="bg-background min-h-screen">
		<div class="absolute top-0 right-0 left-0 z-50 p-4 md:p-8">
			<Navbar />
		</div>

		<div class="container mx-auto flex min-h-screen items-center justify-center px-4 pt-20">
			<div class="mx-auto max-w-4xl space-y-12 text-center">
				<div class="flex justify-center">
					<div class="group relative">
						<div
							class="from-royal-blue-500/20 to-christi-500/20 absolute -inset-8 rounded-full bg-gradient-to-br opacity-50
								blur-xl transition-all duration-700 group-hover:opacity-70"
						></div>

						<div class="relative">
							<span
								class="from-royal-blue-600 via-christi-500 to-amaranth-600 dark:from-royal-blue-400 dark:via-christi-400
									dark:to-amaranth-400 animate-pulse bg-gradient-to-r bg-clip-text text-8xl font-black
									text-transparent md:text-9xl"
							>
								{{ error.statusCode }}
							</span>

							<div class="absolute -top-4 -right-4 animate-bounce text-4xl">
								{{ errorConfig.emoji }}
							</div>
						</div>
					</div>
				</div>

				<div class="space-y-6">
					<h1 class="text-secondary-foreground text-4xl font-bold md:text-5xl">
						{{ errorConfig.title }}
					</h1>

					<p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
						{{ errorConfig.message }}
					</p>
				</div>

				<div class="flex flex-wrap justify-center gap-4">
					<Button
						size="lg"
						class="group transition-all duration-300 hover:-translate-y-1"
						@click="handleError"
					>
						На головну
						<Icon name="lucide:home" class="mr-2 transition-transform group-hover:scale-110" />
					</Button>

					<Button
						variant="outline"
						size="lg"
						class="group transition-all duration-300 hover:-translate-y-1"
						@click="goBack"
					>
						Назад
						<Icon
							name="lucide:arrow-right"
							class="mr-2 transition-transform group-hover:-translate-x-1"
						/>
					</Button>
				</div>
			</div>
		</div>

		<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
			<div
				class="bg-royal-blue-200/20 dark:bg-royal-blue-800/20 absolute top-20 left-10 size-32 animate-pulse
					rounded-full blur-3xl"
			></div>
			<div
				class="bg-christi-200/20 dark:bg-christi-800/20 absolute right-10 bottom-20 size-40 animate-pulse
					rounded-full blur-3xl"
				style="animation-delay: 1s"
			></div>
			<div
				class="bg-amaranth-200/20 dark:bg-amaranth-800/20 absolute top-1/2 left-1/4 size-24 animate-pulse
					rounded-full blur-2xl"
				style="animation-delay: 0.5s"
			></div>
		</div>
	</div>
</template>

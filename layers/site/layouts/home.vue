<script setup lang="ts">
import GradientText from '~/core/components/GradientText.vue'
</script>

<template>
	<div class="relative min-h-screen overflow-x-hidden">
		<div class="absolute top-0 right-0 left-0 z-50 p-4 md:p-8">
			<Navbar />
		</div>

		<section class="relative mb-16 flex h-dvh w-full items-center justify-center overflow-hidden">
			<div
				class="from-royal-blue-50 via-background to-christi-50 dark:from-royal-blue-950/30 dark:via-background
					dark:to-christi-950/30 absolute inset-0 bg-gradient-to-br opacity-90"
			></div>

			<div
				class="bg-royal-blue-200/40 dark:bg-royal-blue-800/40 absolute top-10 left-10 size-20 animate-pulse
					rounded-full blur-xl transition-all duration-1000 hover:scale-110"
			></div>
			<div
				class="bg-christi-200/40 dark:bg-christi-800/40 absolute right-10 bottom-10 size-32 animate-pulse
					rounded-full blur-xl transition-all duration-1000 hover:scale-110"
				style="animation-delay: 1s"
			></div>
			<div
				class="bg-amaranth-200/40 dark:bg-amaranth-800/40 absolute top-1/2 left-1/4 size-16 animate-pulse
					rounded-full blur-lg transition-all duration-1000 hover:scale-110"
				style="animation-delay: 0.5s"
			></div>

			<div
				class="bg-royal-blue-300/20 dark:bg-royal-blue-700/20 absolute top-1/3 right-1/3 size-24 animate-bounce
					rounded-full blur-2xl"
				style="animation-delay: 2s; animation-duration: 3s"
			></div>

			<div class="relative mx-auto max-w-5xl px-8 text-center">
				<div class="mb-8 flex justify-center">
					<div class="group relative">
						<div
							class="from-royal-blue-400 to-christi-400 absolute -inset-6 rounded-full bg-gradient-to-r opacity-30
								blur-lg transition-all duration-700 group-hover:opacity-60 group-hover:blur-2xl"
						></div>
						<img
							class="group-hover:shadow-3xl relative size-24 rounded-2xl shadow-2xl transition-all duration-700
								group-hover:scale-110 group-hover:rotate-3"
							src="/logo.webp"
							alt="Mindenit logo"
						/>
					</div>
				</div>

				<div class="space-y-6">
					<h1 class="text-5xl font-black tracking-tight">
						<GradientText class="animate-pulse" style="animation-duration: 4s">
							Mindenit
						</GradientText>
					</h1>

					<div class="mx-auto max-w-4xl space-y-6">
						<p class="text-muted-foreground/90 text-lg leading-relaxed">
							Ми створюємо не просто сайти та додатки — ми будуємо екосистему, яка робить навчання
							<span class="text-christi-600 dark:text-christi-400 font-semibold">простішим</span>,
							<span class="text-royal-blue-600 dark:text-royal-blue-400 font-semibold"
								>ефективнішим</span
							>
							та
							<span class="text-amaranth-600 dark:text-amaranth-400 font-semibold">цікавішим</span>
						</p>
					</div>
				</div>

				<div class="grid grid-cols-4 gap-8 py-6 max-sm:grid-cols-2">
					<div class="text-center">
						<NumberTicker
							class="text-royal-blue-600 dark:text-royal-blue-400 text-3xl font-black"
							:value="550"
							suffix="+"
							:duration="2000"
							transition="easeOutQuint"
						/>
						<div class="text-muted-foreground text-sm font-medium">Активних користувачів</div>
					</div>
					<div class="text-center">
						<NumberTicker
							class="text-christi-600 dark:text-christi-400 text-3xl font-black"
							:value="3"
							:duration="2000"
							transition="easeOutQuint"
						/>
						<div class="text-muted-foreground text-sm font-medium">Успішних проєкти</div>
					</div>
					<div class="text-center">
						<NumberTicker
							class="text-amaranth-600 dark:text-amaranth-400 text-3xl font-black"
							:value="2"
							suffix="+"
							:duration="2000"
							transition="easeOutQuint"
						/>
						<div class="text-muted-foreground text-sm font-medium">Роки досвіду</div>
					</div>
					<div class="text-center">
						<NumberTicker
							class="text-3xl font-black text-amber-600 dark:text-amber-400"
							:value="700"
							suffix="+"
							:duration="2000"
							transition="easeOutQuint"
						/>
						<div class="text-muted-foreground text-sm font-medium">Задоволених студентів</div>
					</div>
				</div>

				<div class="flex flex-wrap justify-center gap-4 pt-4">
					<Button
						class="group hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
						size="lg"
						as="a"
						href="https://t.me/mindenit"
						target="_blank"
						rel="noopener noreferrer"
					>
						Приєднатися до команди
						<Icon
							name="lucide:arrow-right"
							class="transition-transform duration-300 group-hover:translate-x-1"
						/>
					</Button>

					<Button
						class="group hover:shadow-3xl transition-all duration-300 hover:-translate-y-1"
						size="lg"
						variant="success"
						as="a"
						href="https://send.monobank.ua/jar/2GW9aAQNXE"
						target="_blank"
						rel="noopener noreferrer"
					>
						Підтримати проект
						<Icon
							name="lucide:heart"
							class="transition-transform duration-300 group-hover:translate-x-1"
						/>
					</Button>
				</div>
			</div>

			<div
				class="from-background via-background/80 pointer-events-none absolute right-0 bottom-0 left-0 h-32
					bg-gradient-to-t to-transparent"
			></div>
		</section>

		<div class="relative container mx-auto -mt-16 pt-16 max-sm:px-4">
			<slot />
		</div>
	</div>
</template>

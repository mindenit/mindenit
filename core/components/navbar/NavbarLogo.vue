<script setup lang="ts">
interface Props {
	onLogoClick?: () => void
}

defineProps<Props>()
</script>

<template>
	<NuxtLink to="/" class="group flex shrink-0 items-center gap-3" @click="onLogoClick">
		<div class="relative">
			<div
				class="from-royal-blue-400 to-christi-400 absolute -inset-1 rounded-xl bg-gradient-to-r opacity-0 blur
					transition-opacity duration-300 group-hover:opacity-30"
			/>
			<img
				src="/mindenit.png"
				alt="Logo"
				class="relative h-10 w-10 shrink-0 rounded-xl shadow-sm transition-all duration-300 group-hover:scale-110
					group-hover:shadow-md"
			/>
		</div>

		<div class="relative flex h-10 flex-col justify-center">
			<span
				class="text-secondary-foreground group-hover:text-royal-blue-600 dark:group-hover:text-royal-blue-400
					text-xl font-bold transition-all duration-300 group-hover:-translate-y-2.5"
			>
				Mindenit
			</span>
			<span
				class="text-muted-foreground absolute top-1/2 translate-y-0.5 text-xs font-medium whitespace-nowrap
					opacity-0 transition-all duration-300 group-hover:opacity-100 sm:block"
			>
				Інноваційні рішення
			</span>
		</div>
	</NuxtLink>
</template>

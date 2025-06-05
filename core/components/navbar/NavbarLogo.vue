<script setup lang="ts">
interface Props {
	onLogoClick?: () => void
}

defineProps<Props>()
</script>

<template>
	<NuxtLink to="/" class="group flex items-center gap-3" @click="onLogoClick">
		<div class="relative">
			<div
				class="from-royal-blue-400 to-christi-400 absolute -inset-1 rounded-xl bg-gradient-to-r opacity-0 blur
					transition-opacity duration-300 group-hover:opacity-30"
			/>
			<img
				src="/logo.webp"
				alt="Logo"
				class="relative h-10 w-10 rounded-xl shadow-sm transition-all duration-300 group-hover:scale-110
					group-hover:shadow-md"
			/>
		</div>
		<div class="flex flex-col">
			<span
				class="text-secondary-foreground group-hover:text-royal-blue-600 dark:group-hover:text-royal-blue-400
					text-xl font-bold transition-colors duration-300"
			>
				Mindenit
			</span>
			<span
				class="text-muted-foreground hidden text-xs font-medium opacity-0 transition-opacity duration-300
					group-hover:opacity-100 sm:block"
			>
				Студентські рішення
			</span>
		</div>
	</NuxtLink>
</template>

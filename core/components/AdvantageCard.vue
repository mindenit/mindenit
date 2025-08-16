<script setup lang="ts">
interface Advantage {
	title: string
	description: string
	icon: string
}

interface Props {
	advantage: Advantage
	index?: number
}

defineProps<Props>()
</script>

<template>
	<div
		class="group space-y-3 text-center transition-all duration-500 hover:-translate-y-1"
		:style="{ animationDelay: `${(index || 0) * 200}ms` }"
	>
		<div
			class="bg-royal-blue-100 dark:bg-royal-blue-900/30 group-hover:from-royal-blue-100
				group-hover:to-christi-100 dark:group-hover:from-royal-blue-900/50
				dark:group-hover:to-christi-900/50 mx-auto flex h-16 w-16 items-center justify-center rounded-xl
				transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-gradient-to-r
				group-hover:shadow-lg"
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
			class="text-muted-foreground group-hover:text-secondary-foreground/80 text-sm leading-relaxed
				transition-colors duration-300"
		>
			{{ advantage.description }}
		</p>
	</div>
</template>

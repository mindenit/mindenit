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
			class="group-hover:to-christi-100 dark:group-hover:to-christi-900/50 from-royal-blue-100 to-royal-blue-100
				dark:from-royal-blue-900/30 dark:to-royal-blue-900/30 mx-auto flex h-16 w-16 items-center
				justify-center rounded-xl bg-gradient-to-r shadow-lg transition duration-500 group-hover:scale-110
				group-hover:rotate-12 group-hover:shadow-xl"
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

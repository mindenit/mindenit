<script setup lang="ts">
interface ProcessStep {
	number?: string // Опціональне, якщо використовується
	title: string
	description: string
	duration: string
	icon: string
}

interface Props {
	step: ProcessStep
	index: number
	isLast?: boolean
}

defineProps<Props>()
</script>

<template>
	<div
		class="bg-card border-border/50 group relative rounded-xl border p-6 shadow-lg transition-all duration-500
			hover:-translate-y-1 hover:shadow-xl"
		:style="{ animationDelay: `${index * 150}ms` }"
	>
		<!-- Background gradient on hover -->
		<div
			class="from-royal-blue-500/10 via-christi-500/10 to-amaranth-500/10 absolute inset-0 rounded-xl
				bg-gradient-to-br opacity-0 transition-all duration-500 group-hover:opacity-100"
		></div>

		<!-- Step number -->
		<div class="absolute -top-4 left-6 z-20">
			<div
				class="from-royal-blue-600 to-christi-600 flex !size-8 items-center justify-center rounded-full
					bg-gradient-to-r text-sm font-bold text-white shadow-lg transition-all duration-300
					group-hover:scale-110 group-hover:rotate-12"
			>
				{{ index + 1 }}
			</div>
		</div>

		<!-- Connection line -->
		<div
			v-if="!isLast"
			class="from-royal-blue-200 to-christi-200 dark:from-royal-blue-800 dark:to-christi-800
				group-hover:from-royal-blue-400 group-hover:to-christi-400 absolute top-0 left-full hidden h-0.5 w-8
				translate-y-4 transform bg-gradient-to-r transition-all duration-500 lg:block"
		>
			<div
				class="bg-royal-blue-500 absolute top-0 h-1 w-1 animate-pulse rounded-full opacity-0 transition-opacity
					duration-500 group-hover:opacity-100"
				style="animation: moveDot 2s ease-in-out infinite"
			></div>
		</div>

		<div class="relative z-10 pt-4">
			<div class="mb-3 flex items-center gap-3">
				<div
					class="from-royal-blue-500/20 to-christi-500/20 flex h-10 w-10 items-center justify-center rounded-lg
						bg-gradient-to-r transition-all duration-300 group-hover:scale-110 group-hover:rotate-6
						group-hover:shadow-lg"
				>
					<Icon
						:name="step.icon"
						class="text-royal-blue-600 dark:text-royal-blue-400 !size-5 transition-transform duration-300
							group-hover:scale-110"
					/>
				</div>
				<h3
					class="text-secondary-foreground group-hover:text-royal-blue-600 dark:group-hover:text-royal-blue-400
						text-lg font-bold transition-colors duration-300"
				>
					{{ step.title }}
				</h3>
			</div>

			<p
				class="text-muted-foreground group-hover:text-secondary-foreground/90 mb-3 leading-relaxed
					transition-colors duration-300"
			>
				{{ step.description }}
			</p>

			<div class="flex items-center gap-2">
				<Icon name="lucide:clock" class="text-christi-600 dark:text-christi-400 h-3 w-3" />
				<span class="text-christi-600 dark:text-christi-400 text-xs font-semibold">
					{{ step.duration }}
				</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
@keyframes moveDot {
	0% {
		left: 0;
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		left: 100%;
		opacity: 0;
	}
}
</style>

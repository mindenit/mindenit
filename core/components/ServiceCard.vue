<script setup lang="ts">
interface Service {
	title: string
	description: string
	icon: string
	features: string[]
	technologies: string[]
}

interface Props {
	service: Service
	index?: number
}

defineProps<Props>()
</script>

<template>
	<div
		class="group bg-card border-border/50 relative overflow-hidden rounded-xl border p-6 shadow-lg
			transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
		:style="{ animationDelay: `${(index || 0) * 100}ms` }"
	>
		<!-- Background gradient on hover -->
		<div
			class="from-royal-blue-500/10 to-christi-500/10 absolute inset-0 bg-gradient-to-r opacity-0 transition-all
				duration-500 group-hover:opacity-100"
		></div>

		<!-- Border gradient on hover -->
		<div
			class="from-royal-blue-500/20 via-christi-500/20 to-royal-blue-500/20 absolute inset-0 rounded-xl border-2
				border-transparent bg-gradient-to-r [mask-composite:exclude] opacity-0 transition-opacity
				duration-500 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
				group-hover:opacity-100"
		></div>

		<div class="relative z-10">
			<div class="mb-4 flex items-center gap-3">
				<div
					class="from-royal-blue-500/20 to-christi-500/20 flex h-12 w-12 items-center justify-center rounded-lg
						bg-gradient-to-r transition-all duration-300 group-hover:scale-110 group-hover:rotate-6
						group-hover:shadow-lg"
				>
					<Icon
						:name="service.icon"
						class="text-royal-blue-600 dark:text-royal-blue-400 !size-6 transition-transform duration-300
							group-hover:scale-110"
					/>
				</div>
				<h3
					class="text-secondary-foreground group-hover:text-royal-blue-600 dark:group-hover:text-royal-blue-400
						text-xl font-bold transition-colors duration-300"
				>
					{{ service.title }}
				</h3>
			</div>

			<p
				class="text-muted-foreground group-hover:text-secondary-foreground/90 mb-4 leading-relaxed
					transition-colors duration-300"
			>
				{{ service.description }}
			</p>
		</div>
	</div>
</template>

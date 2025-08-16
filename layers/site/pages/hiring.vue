<script setup lang="ts">
const pageTitle = 'Приєднайся до команди розробників'
const pageDescription =
	'Команда розробників шукає Frontend та Backend розробників і дизайнера для роботи над проектами з використанням сучасних технологій'

useSeoMeta({
	title: pageTitle,
	description: pageDescription,
	ogTitle: pageTitle,
	ogDescription: pageDescription,
})

defineOgImageComponent('Mindenit')

const { getIconColorClasses } = useIconColorClasses()
</script>

<template>
	<div
		class="container mx-auto min-h-full max-w-7xl flex-col items-center justify-center pt-10 max-md:px-4
			max-md:py-8 md:flex"
	>
		<div class="text-center">
			<PageHeader>
				<template #title> Приєднайся до команди </template>
				<template #meta>
					<p class="text-muted-foreground mx-auto max-w-2xl text-xl">
						Ми шукаємо талановитих спеціалістів для роботи над інноваційними проектами
					</p>
				</template>
			</PageHeader>
		</div>

		<div class="space-y-8">
			<div class="grid auto-rows-fr gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
				<div
					v-for="position in POSITIONS"
					:key="position.id"
					class="from-royal-blue-50 to-christi-50 dark:from-royal-blue-950/20 dark:to-christi-950/20 border-border/50
						flex flex-col space-y-4 rounded-xl border bg-gradient-to-r p-6 transition-all duration-200
						hover:scale-[1.02] hover:shadow-lg"
				>
					<div class="flex items-center gap-3">
						<div class="rounded-lg p-2" :class="getIconColorClasses(position.iconColor)">
							<Icon :name="position.icon" class="h-6 w-6" />
						</div>
						<div class="min-w-0 flex-1">
							<h3 class="text-secondary-foreground truncate text-xl font-bold">
								{{ position.title }}
							</h3>
							<p class="text-muted-foreground truncate text-sm">{{ position.subtitle }}</p>
						</div>
					</div>

					<p class="text-muted-foreground flex-1 text-sm leading-relaxed">
						{{ position.description }}
					</p>

					<div class="flex-shrink-0">
						<h4 class="text-secondary-foreground mb-2 text-sm font-semibold">
							{{ position.id === 'designer' ? 'Інструменти:' : 'Технології:' }}
						</h4>
						<div class="flex flex-wrap gap-2">
							<Badge
								v-for="tech in position.technologies"
								:key="tech.name"
								variant="secondary"
								class="flex items-center gap-1 text-xs"
							>
								<Icon :name="tech.icon" class="!size-3 flex-shrink-0" />
								<span class="truncate">{{ tech.name }}</span>
							</Badge>
						</div>
					</div>
				</div>
			</div>

			<Separator />

			<HiringForm />
		</div>
	</div>
</template>

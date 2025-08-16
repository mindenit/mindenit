<script setup lang="ts">
interface Props {
	navigationItems: NavigationItem[]
	socialLinks: SocialLink[]
	isOpen: boolean
}

interface Emits {
	(e: 'close'): void
}

defineProps<Props>()
defineEmits<Emits>()

// Стилі для виділеної кнопки в мобільній версії
const getHighlightedMobileStyles = () => {
	return [
		'block rounded-xl px-4 py-2 transition-all duration-300',
		// Градієнтний фон
		'bg-gradient-to-r from-royal-blue-500/10 to-christi-500/10',
		// Бордер
		'border border-royal-blue-200/50 dark:border-royal-blue-700/50',
		// Текст
		'text-royal-blue-700 dark:text-royal-blue-300 font-semibold',
		// Hover ефекти
		'hover:from-royal-blue-500/20 hover:to-christi-500/20',
		'hover:border-royal-blue-300/70 dark:hover:border-royal-blue-600/70',
		'hover:text-royal-blue-800 dark:hover:text-royal-blue-200',
		// Тінь
		'shadow-sm hover:shadow-md',
		// Анімація
		'hover:scale-[1.02]',
	].join(' ')
}

const getRegularMobileStyles = () => {
	return 'text-muted-foreground hover:text-secondary-foreground hover:bg-muted block rounded-xl px-4 py-2 transition-colors duration-300'
}
</script>

<template>
	<div v-if="isOpen" class="border-border/50 mt-4 border-t pt-4 lg:hidden">
		<nav class="space-y-1">
			<template v-for="item in navigationItems" :key="item.label">
				<template v-if="item.href && !item.children">
					<NuxtLink
						:to="item.href"
						:class="item.highlighted ? getHighlightedMobileStyles() : getRegularMobileStyles()"
						@click="$emit('close')"
					>
						<span v-if="item.highlighted" class="flex items-center">
							{{ item.label }}
							<Icon name="lucide:sparkles" class="ml-1 !size-3 animate-pulse" />
						</span>
						<span v-else>{{ item.label }}</span>
					</NuxtLink>
				</template>

				<template v-else-if="item.children">
					<div class="space-y-1">
						<div class="text-muted-foreground/70 px-4 py-1 text-sm font-medium">
							{{ item.label }}
						</div>
						<NuxtLink
							v-for="child in item.children"
							:key="child.label"
							:to="child.href!"
							class="text-muted-foreground hover:text-secondary-foreground hover:bg-muted block rounded-xl px-6 py-2
								text-sm transition-colors duration-300"
							@click="$emit('close')"
						>
							{{ child.label }}
						</NuxtLink>
					</div>
				</template>
			</template>

			<div class="border-border/30 mt-3 border-t pt-2">
				<div class="space-y-1">
					<div class="text-muted-foreground/70 px-4 py-1 text-sm font-medium">Спільнота</div>

					<a
						v-for="link in socialLinks"
						:key="link.name"
						:href="link.href"
						target="_blank"
						rel="noopener noreferrer"
						:class="[
							`text-muted-foreground flex items-center gap-3 rounded-xl px-6 py-2 text-sm transition-colors
							duration-300`,
							link.hoverClasses,
						]"
						@click="$emit('close')"
					>
						<Icon :name="link.icon" class="size-4" />
						{{ link.name }}
					</a>
				</div>
			</div>
		</nav>
	</div>
</template>

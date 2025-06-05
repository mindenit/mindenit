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
</script>

<template>
	<div v-if="isOpen" class="border-border/50 mt-4 border-t pt-4 md:hidden">
		<nav class="space-y-1">
			<template v-for="item in navigationItems" :key="item.label">
				<template v-if="item.href && !item.children">
					<NuxtLink
						:to="item.href"
						class="text-muted-foreground hover:text-secondary-foreground hover:bg-muted block rounded-xl px-4 py-2
							transition-colors duration-300"
						@click="$emit('close')"
					>
						{{ item.label }}
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

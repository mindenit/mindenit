<script setup lang="ts">
import { navigationMenuTriggerStyle } from '../ui/navigation-menu'

interface Props {
	items: NavigationItem[]
}

defineProps<Props>()

const getHighlightedStyles = (isActive: boolean) => {
	const baseStyles = [
		navigationMenuTriggerStyle(),
		'bg-gradient-to-r from-royal-blue-500/10 to-christi-500/10',
		'text-royal-blue-700 dark:text-royal-blue-300',
		isActive && 'from-royal-blue-500/25 to-christi-500/25',
	].filter(Boolean)

	return baseStyles.join(' ')
}
</script>

<template>
	<NavigationMenu :viewport="false">
		<NavigationMenuList>
			<NavigationMenuItem v-for="item in items" :key="item.label">
				<template v-if="item.href && !item.children">
					<NuxtLink v-slot="{ isActive, href, navigate }" :to="item.href" custom>
						<NavigationMenuLink
							:active="isActive"
							:href
							:class="
								item.highlighted ? getHighlightedStyles(isActive) : navigationMenuTriggerStyle()
							"
							@click="navigate"
						>
							<span class="relative">
								{{ item.label }}
							</span>
						</NavigationMenuLink>
					</NuxtLink>
				</template>

				<template v-else-if="item.children">
					<NavigationMenuTrigger>{{ item.label }}</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div class="grid w-48 gap-1 p-2">
							<NuxtLink
								v-for="child in item.children"
								:key="child.label"
								v-slot="{ isActive, href, navigate }"
								:to="child.href!"
								custom
							>
								<NavigationMenuLink
									:active="isActive"
									:href
									:class="navigationMenuTriggerStyle()"
									@click="navigate"
								>
									{{ child.label }}
								</NavigationMenuLink>
							</NuxtLink>
						</div>
					</NavigationMenuContent>
				</template>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenu>
</template>

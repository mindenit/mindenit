<script setup lang="ts">
import { navigationMenuTriggerStyle } from '../ui/navigation-menu'

interface Props {
	items: NavigationItem[]
}

defineProps<Props>()
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
							:class="navigationMenuTriggerStyle()"
							@click="navigate"
						>
							{{ item.label }}
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

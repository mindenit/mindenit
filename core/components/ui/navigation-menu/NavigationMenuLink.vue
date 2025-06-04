<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import {
	NavigationMenuLink,
	type NavigationMenuLinkEmits,
	type NavigationMenuLinkProps,
	useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/core/utils'

const props = defineProps<NavigationMenuLinkProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
	<NavigationMenuLink
		data-slot="navigation-menu-link"
		v-bind="forwarded"
		:class="
			cn(
				`text-muted-foreground hover:text-secondary-foreground hover:bg-royal-blue-50
				dark:hover:bg-royal-blue-950/50`,
				`nav-link-item relative flex items-center overflow-hidden rounded-xl px-4 py-2 font-medium
				transition-all duration-300`,
				`data-[active=true]:text-royal-blue-600 dark:data-[active=true]:text-royal-blue-400
				data-[active=true]:bg-royal-blue-50/70 dark:data-[active=true]:bg-royal-blue-950/70`,
				'focus-visible:ring-royal-blue-500/20 focus-visible:ring-4 focus-visible:outline-none',
				'hover:shadow-md',
				'[&_svg:not([class*=\'text-\'])]:text-muted-foreground [&_svg:not([class*=\'size-\'])]:size-4',
				props.class
			)
		"
	>
		<span class="relative z-10 flex flex-col gap-1">
			<slot />
		</span>
		<div
			class="nav-link-gradient from-royal-blue-500/10 to-christi-500/10 absolute inset-0 rounded-xl
				bg-gradient-to-r opacity-0 transition-all duration-300"
		></div>
		<div
			class="nav-link-glow from-royal-blue-400 to-christi-400 absolute -inset-1 rounded-xl bg-gradient-to-r
				opacity-0 blur transition-opacity duration-300"
		></div>
	</NavigationMenuLink>
</template>

<style scoped>
.nav-link-item:hover .nav-link-gradient {
	opacity: 1;
}

.nav-link-item:focus-visible .nav-link-gradient {
	opacity: 1;
}

.nav-link-item:hover .nav-link-glow {
	opacity: 0.15;
}

.nav-link-item:focus-visible .nav-link-glow {
	opacity: 0.15;
}
</style>

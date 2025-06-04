<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ChevronDown } from 'lucide-vue-next'
import { NavigationMenuTrigger, type NavigationMenuTriggerProps, useForwardProps } from 'reka-ui'
import { cn } from '@/core/utils'
import { navigationMenuTriggerStyle } from '.'

const props = defineProps<NavigationMenuTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
	<NavigationMenuTrigger
		data-slot="navigation-menu-trigger"
		v-bind="forwardedProps"
		:class="
			cn(navigationMenuTriggerStyle(), 'nav-trigger-item relative overflow-hidden', props.class)
		"
	>
		<span class="relative z-10 flex items-center">
			<slot />
			<ChevronDown
				class="nav-trigger-item-data-[state=open]:rotate-180 relative top-[1px] ml-1 size-3 transition-all
					duration-300"
				aria-hidden="true"
			/>
		</span>
		<div
			class="nav-trigger-gradient from-royal-blue-500/10 to-christi-500/10 absolute inset-0 rounded-xl
				bg-gradient-to-r opacity-0 transition-all duration-300"
		></div>
		<div
			class="nav-trigger-glow from-royal-blue-400 to-christi-400 absolute -inset-1 rounded-xl bg-gradient-to-r
				opacity-0 blur transition-opacity duration-300"
		></div>
	</NavigationMenuTrigger>
</template>

<style scoped>
.nav-trigger-item:hover .nav-trigger-gradient {
	opacity: 1;
}

.nav-trigger-item:focus-visible .nav-trigger-gradient {
	opacity: 1;
}

.nav-trigger-item:hover .nav-trigger-glow {
	opacity: 0.2;
}

.nav-trigger-item:focus-visible .nav-trigger-glow {
	opacity: 0.2;
}
</style>

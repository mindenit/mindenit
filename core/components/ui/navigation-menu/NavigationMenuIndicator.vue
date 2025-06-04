<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import {
	NavigationMenuIndicator,
	type NavigationMenuIndicatorProps,
	useForwardProps,
} from 'reka-ui'
import { cn } from '@/core/utils'

const props = defineProps<NavigationMenuIndicatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
	<NavigationMenuIndicator
		data-slot="navigation-menu-indicator"
		v-bind="forwardedProps"
		:class="
			cn(
				'data-[state=visible]:animate-in data-[state=hidden]:animate-out',
				'data-[state=hidden]:fade-out data-[state=visible]:fade-in',
				'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
				'transition-all duration-300',
				props.class
			)
		"
	>
		<div
			class="from-royal-blue-400 to-christi-400 relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm
				bg-gradient-to-r shadow-lg"
		/>
	</NavigationMenuIndicator>
</template>

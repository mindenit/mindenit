<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuViewport, type NavigationMenuViewportProps, useForwardProps } from 'reka-ui'
import { cn } from '@/core/utils'

const props = defineProps<NavigationMenuViewportProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
	<div class="absolute top-full left-0 isolate z-50 flex justify-center">
		<NavigationMenuViewport
			data-slot="navigation-menu-viewport"
			v-bind="forwardedProps"
			:class="
				cn(
					`origin-top-center relative mt-2 h-[var(--reka-navigation-menu-viewport-height)] w-full
					overflow-hidden`,
					'md:w-[var(--reka-navigation-menu-viewport-width)]',
					'bg-card/95 text-card-foreground border-border/60 rounded-2xl border shadow-2xl backdrop-blur-lg',
					'data-[state=open]:animate-in data-[state=closed]:animate-out',
					'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
					'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
					'transition-all duration-300 ease-in-out',
					'before:from-royal-blue-500/5 before:to-christi-500/5 before:absolute before:inset-0 before:-z-10',
					'before:rounded-2xl before:bg-gradient-to-r before:via-transparent before:opacity-100',
					props.class
				)
			"
		/>
	</div>
</template>

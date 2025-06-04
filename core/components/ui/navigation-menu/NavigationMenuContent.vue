<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import {
	NavigationMenuContent,
	type NavigationMenuContentEmits,
	type NavigationMenuContentProps,
	useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/core/utils'

const props = defineProps<NavigationMenuContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<NavigationMenuContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
	<NavigationMenuContent
		data-slot="navigation-menu-content"
		v-bind="forwarded"
		:class="
			cn(
				`data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in
				data-[motion^=to-]:fade-out`,
				'data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52',
				'data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
				'top-0 left-0 w-full p-3 pr-3.5 md:absolute md:w-auto',
				'bg-card/95 border-border/60 rounded-2xl border shadow-2xl backdrop-blur-lg',
				'before:from-royal-blue-500/5 before:to-christi-500/5 before:absolute before:inset-0 before:-z-10',
				'before:rounded-2xl before:bg-gradient-to-r before:via-transparent before:opacity-100',
				`group-data-[viewport=false]/navigation-menu:bg-card/95
				group-data-[viewport=false]/navigation-menu:backdrop-blur-lg`,
				`group-data-[viewport=false]/navigation-menu:border-border/60
				group-data-[viewport=false]/navigation-menu:shadow-2xl`,
				'group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in',
				'group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out',
				`group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95
				group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95`,
				`group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0
				group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0`,
				`group-data-[viewport=false]/navigation-menu:top-full
				group-data-[viewport=false]/navigation-menu:mt-2`,
				`group-data-[viewport=false]/navigation-menu:overflow-hidden
				group-data-[viewport=false]/navigation-menu:rounded-2xl`,
				'group-data-[viewport=false]/navigation-menu:duration-300',
				`**:data-[slot=navigation-menu-link]:focus:ring-0
				**:data-[slot=navigation-menu-link]:focus:outline-none`,
				props.class
			)
		"
	>
		<slot />
	</NavigationMenuContent>
</template>

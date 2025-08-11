<script setup lang="ts">
import type { TooltipContentEmits, TooltipContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { TooltipContent, TooltipPortal, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/core/utils'

defineOptions({
	inheritAttrs: false,
})

const props = withDefaults(
	defineProps<TooltipContentProps & { class?: HTMLAttributes['class'] }>(),
	{
		sideOffset: 4,
	}
)

const emits = defineEmits<TooltipContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
	<TooltipPortal>
		<TooltipContent
			data-slot="tooltip-content"
			v-bind="{ ...forwarded, ...$attrs }"
			:class="
				cn(
					`border-border/60 bg-card/95 text-foreground z-50 w-fit overflow-hidden rounded-xl border px-3 py-1.5
					text-xs text-balance shadow-2xl backdrop-blur-lg`,
					'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
					'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
					`data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2
					data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
					props.class
				)
			"
		>
			<div
				class="from-royal-blue-500/5 to-christi-500/5 absolute inset-0 -z-10 bg-gradient-to-r via-transparent"
			/>

			<slot />
		</TooltipContent>
	</TooltipPortal>
</template>

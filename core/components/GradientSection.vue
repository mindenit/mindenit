<script setup lang="ts">
interface Props {
	tag?: string
	variant?: 'primary' | 'secondary' | 'subtle' | 'footer'
	size?: 'sm' | 'md' | 'lg'
	align?: 'left' | 'center' | 'right'
	contentClass?: string
}

const props = withDefaults(defineProps<Props>(), {
	tag: 'section',
	variant: 'primary',
	size: 'md',
	align: 'center',
})

const gradientVariants = {
	primary: 'from-royal-blue-500/10 to-christi-500/10 bg-gradient-to-br via-transparent',
	secondary: 'from-christi-500/10 to-amaranth-500/10 bg-gradient-to-br via-transparent',
	subtle:
		'from-royal-blue-50/50 to-christi-50/50 dark:from-royal-blue-950/20 dark:to-christi-950/20 bg-gradient-to-br',
	footer:
		'from-royal-blue-50 to-christi-50 dark:from-royal-blue-950/30 dark:to-christi-950/30 bg-gradient-to-r',
}

const sizeVariants = {
	sm: {
		padding: 'py-8',
		margin: 'mb-8',
		rounded: 'rounded-xl',
	},
	md: {
		padding: 'py-16',
		margin: 'mb-16',
		rounded: 'rounded-2xl',
	},
	lg: {
		padding: 'py-24',
		margin: 'mb-24',
		rounded: 'rounded-3xl',
	},
}

const alignVariants = {
	left: 'text-left',
	center: 'text-center space-y-6',
	right: 'text-right',
}

const gradientClass = computed(() => gradientVariants[props.variant])
const paddingClass = computed(() => sizeVariants[props.size].padding)
const marginClass = computed(() => sizeVariants[props.size].margin)
const roundedClass = computed(() => sizeVariants[props.size].rounded)
const contentClass = computed(() => [alignVariants[props.align], props.contentClass])
</script>

<template>
	<component
		:is="tag"
		:class="['relative overflow-hidden', roundedClass, paddingClass, marginClass, $attrs.class]"
	>
		<div :class="['absolute inset-0', gradientClass]"></div>

		<div :class="['relative', contentClass]">
			<slot />
		</div>
	</component>
</template>

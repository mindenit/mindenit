<script setup lang="ts">
interface Props {
	tag?: string
	variant?: 'primary' | 'secondary' | 'accent'
}

const props = withDefaults(defineProps<Props>(), {
	tag: 'span',
	variant: 'primary',
})

const gradientClass = computed(() => {
	const variants = {
		primary: 'from-royal-blue-600 to-christi-600 dark:from-royal-blue-400 dark:to-christi-400',
		secondary: 'from-christi-600 to-amaranth-600 dark:from-christi-400 dark:to-amaranth-400',
		accent: 'from-royal-blue-600 via-royal-blue-500 to-christi-600',
	}
	return variants[props.variant]
})
</script>

<template>
	<component
		:is="tag"
		:class="['bg-gradient-to-r bg-clip-text text-transparent', gradientClass, $attrs.class]"
	>
		<slot />
	</component>
</template>

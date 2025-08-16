<template>
	<div
		:class="[
			'absolute rounded-full bg-gradient-to-r blur-xl',
			animationClass,
			sizeClass,
			gradientClass,
			positionClass,
		]"
		:style="{ animationDelay: delay }"
	></div>
</template>

<script setup lang="ts">
interface Props {
	size?: 'sm' | 'md' | 'lg' | 'xl'
	position?:
		| 'top-left'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-right'
		| 'center'
		| 'top-center'
		| 'bottom-center'
		| 'left-center'
		| 'right-center'
	variant?: 'primary' | 'secondary' | 'tertiary' | 'mixed'
	animation?: 'bounce' | 'pulse' | 'float' | 'spin'
	delay?: string
	customPosition?: string
}

const {
	size = 'md',
	position = 'top-right',
	variant = 'primary',
	animation = 'pulse',
	delay = '0s',
	customPosition,
} = defineProps<Props>()

const sizeClass = computed(() => {
	const sizes = {
		sm: 'h-16 w-16',
		md: 'h-20 w-20',
		lg: 'h-24 w-24',
		xl: 'h-32 w-32',
	}
	return sizes[size]
})

const positionClass = computed(() => {
	if (customPosition) return customPosition

	const positions = {
		'top-left': 'top-0 left-0',
		'top-right': 'top-0 right-0',
		'top-center': 'top-0 left-1/2 -translate-x-1/2',
		'bottom-left': 'bottom-0 left-0',
		'bottom-right': 'bottom-0 right-0',
		'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
		'left-center': 'left-0 top-1/2 -translate-y-1/2',
		'right-center': 'right-0 top-1/2 -translate-y-1/2',
		center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
	}
	return positions[position]
})

const gradientClass = computed(() => {
	const gradients = {
		primary: 'from-royal-blue-400/10 to-christi-400/10',
		secondary: 'from-christi-400/10 to-amaranth-400/10',
		tertiary: 'from-amaranth-400/10 to-royal-blue-400/10',
		mixed: 'from-royal-blue-400/20 via-christi-400/20 to-amaranth-400/20',
	}
	return gradients[variant]
})

const animationClass = computed(() => {
	const animations = {
		bounce: 'animate-bounce',
		pulse: 'animate-pulse',
		float: 'animate-float',
		spin: 'animate-spin',
	}
	return animations[animation]
})
</script>

<style scoped>
@keyframes float {
	0%,
	100% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-10px);
	}
}

.animate-float {
	animation: float 3s ease-in-out infinite;
}
</style>

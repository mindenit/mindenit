<script setup lang="ts">
interface Props {
	title: string
	buttonText: string
	link: string
}
defineProps<Props>()
</script>

<template>
	<div
		class="product-card relative flex h-full flex-col items-stretch gap-6 rounded-xl p-6 text-center shadow-lg
			transition-all duration-300 ease-in-out before:absolute before:inset-0 before:-z-10
			before:rounded-xl before:bg-gradient-to-br before:from-indigo-500/15 before:to-indigo-500/10
			before:opacity-0 before:transition-opacity before:duration-300 after:absolute after:inset-0
			after:-z-10 after:rounded-xl after:bg-gradient-to-br after:from-indigo-500/10 after:to-indigo-500/5
			after:transition-opacity after:duration-300 hover:-translate-y-1 hover:before:opacity-100
			hover:after:opacity-0"
		:class="$attrs.class"
	>
		<div class="text-primary text-3xl font-bold">{{ title }}</div>
		<div class="text-sm text-slate-400">
			<a
				class="bg-primary inline-block rounded-lg px-6 py-3 font-semibold tracking-wider text-white uppercase
					transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:no-underline"
				:href="link"
				target="_blank"
				rel="noopener noreferrer"
			>
				{{ buttonText }}
			</a>
		</div>
	</div>
</template>

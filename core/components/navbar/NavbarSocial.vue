<script setup lang="ts">
interface Props {
	links: SocialLink[]
}

defineProps<Props>()
</script>

<template>
	<template v-for="link in links" :key="link.name">
		<a
			:href="link.href"
			target="_blank"
			rel="noopener noreferrer"
			:class="[
				'text-muted-foreground group relative rounded-xl p-2 font-medium transition-all duration-300',
				link.hoverClasses,
			]"
			:title="`Наш ${link.name}`"
		>
			<Icon :name="link.icon" class="size-4" />
			<div
				:class="[
					`absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 transition-opacity duration-300
					group-hover:opacity-100`,
					link.gradientClasses,
				]"
			/>
		</a>
	</template>
</template>

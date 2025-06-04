<script setup lang="ts">
interface Product {
	name: string
	description: string
	logo: string | null
	link: string | null
	aos: string
	fullWidth?: boolean
}

interface Props {
	product: Product
}

defineProps<Props>()
</script>

<template>
	<component
		:is="product.link ? 'a' : 'div'"
		:href="product.link"
		:target="product.link ? '_blank' : undefined"
		:rel="product.link ? 'noopener noreferrer' : undefined"
		:class="['block h-full', product.fullWidth ? 'sm:col-span-2' : '']"
	>
		<div
			class="product-card relative flex h-full items-stretch gap-6 rounded-xl p-6 shadow-lg transition-all
				duration-300 ease-in-out before:absolute before:inset-0 before:-z-10 before:rounded-xl
				before:bg-gradient-to-br before:from-[#6368f226] before:to-[#6368f20d] before:opacity-0
				before:transition-opacity before:duration-300 after:absolute after:inset-0 after:-z-10
				after:rounded-xl after:bg-gradient-to-br after:from-[#6368f21a] after:to-[#6368f20d]
				after:transition-opacity after:duration-300 hover:-translate-y-1 hover:before:opacity-100
				hover:after:opacity-0"
		>
			<div class="border-gradient"></div>
			<div class="border-gradient-hover"></div>

			<div
				class="product-logo [&:not(:has(img))]:text-primary/80 [&:not(:has(img))]:bg-primary/10 flex h-20 w-20
					items-center justify-center rounded-lg [&:not(:has(img))]:font-bold"
			>
				<img
					v-if="product.logo"
					:src="product.logo"
					:alt="`${product.name} logo`"
					class="h-full w-full rounded-lg object-cover"
				/>
				<span v-else>{{ product.name }}</span>
			</div>

			<div class="product-content relative flex-1">
				<h3 class="text-secondary-foreground mb-2 text-xl font-bold">{{ product.name }}</h3>
				<p class="text-muted-foreground">{{ product.description }}</p>
			</div>
		</div>
	</component>
</template>

<style scoped>
.border-gradient {
	content: '';
	position: absolute;
	inset: 0;
	border-radius: 0.75rem;
	padding: 1px;
	background: linear-gradient(135deg, rgba(99, 104, 242, 0.8), rgba(99, 104, 242, 0.4));
	-webkit-mask:
		linear-gradient(#fff 0 0) content-box,
		linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	mask-composite: exclude;
	opacity: 1;
	transition: opacity 0.3s ease;
	pointer-events: none;
}

.border-gradient-hover {
	content: '';
	position: absolute;
	inset: 0;
	border-radius: 0.75rem;
	padding: 1px;
	background: linear-gradient(135deg, rgba(99, 104, 242, 1), rgba(99, 104, 242, 0.6));
	-webkit-mask:
		linear-gradient(#fff 0 0) content-box,
		linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	mask-composite: exclude;
	opacity: 0;
	transition: opacity 0.3s ease;
	pointer-events: none;
}
</style>

<script setup lang="ts">
interface Product {
	name: string
	description: string
	logo: string | null
	link: string | null
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
		:class="[
			'block h-full',
			product.fullWidth ? 'col-span-1 sm:col-span-2 lg:col-span-2' : 'col-span-1',
		]"
	>
		<div
			class="product-card before:from-royal-blue-500/20 before:via-christi-500/10 before:to-amaranth-500/10
				after:from-royal-blue-400/15 after:via-christi-400/8 after:to-amaranth-400/8 group border-border/50
				hover:border-royal-blue-300/50 dark:hover:border-royal-blue-600/50 bg-card/50 relative flex h-full
				min-h-[200px] flex-col items-stretch gap-4 rounded-xl border p-4 shadow-lg backdrop-blur-sm
				transition-all duration-500 ease-out before:absolute before:inset-0 before:-z-10 before:rounded-xl
				before:bg-gradient-to-br before:opacity-0 before:transition-all before:duration-500 after:absolute
				after:inset-0 after:-z-10 after:rounded-xl after:bg-gradient-to-br after:transition-all
				after:duration-500 hover:-translate-y-1 hover:shadow-xl hover:before:opacity-100
				hover:after:opacity-0 sm:min-h-[220px] sm:flex-row sm:gap-6 sm:rounded-2xl sm:p-6
				before:sm:rounded-2xl after:sm:rounded-2xl sm:hover:-translate-y-2 sm:hover:shadow-2xl
				md:min-h-[240px] lg:p-8"
		>
			<div
				class="from-royal-blue-500 to-christi-500 absolute top-0 left-1/2 h-1 w-12 -translate-x-1/2 rounded-b-full
					bg-gradient-to-r opacity-60 transition-opacity duration-500 group-hover:opacity-100 sm:w-16"
			></div>

			<div
				v-if="product.link"
				class="from-royal-blue-400/0 via-royal-blue-400/20 to-christi-400/0 absolute -inset-1 -z-20 rounded-xl
					bg-gradient-to-r opacity-0 blur transition-opacity duration-500 group-hover:opacity-100
					sm:rounded-2xl"
			></div>

			<div class="border-gradient"></div>
			<div class="border-gradient-hover"></div>

			<div class="flex justify-center sm:block sm:flex-shrink-0">
				<div
					class="product-logo [&:not(:has(img))]:from-royal-blue-100 [&:not(:has(img))]:to-christi-100
						[&:not(:has(img))]:dark:from-royal-blue-900/50 [&:not(:has(img))]:dark:to-christi-900/50
						[&:not(:has(img))]:text-royal-blue-700 [&:not(:has(img))]:dark:text-royal-blue-300 relative flex
						size-16 min-w-16 items-center justify-center rounded-lg transition-all duration-500
						group-hover:scale-105 group-hover:rotate-1 sm:size-20 sm:min-w-20 sm:rounded-xl
						sm:group-hover:scale-110 sm:group-hover:rotate-3 lg:size-24 lg:min-w-24
						[&:not(:has(img))]:bg-gradient-to-br [&:not(:has(img))]:text-sm [&:not(:has(img))]:font-bold
						sm:[&:not(:has(img))]:text-base lg:[&:not(:has(img))]:text-lg"
					:class="product.logo ? '' : 'shadow-md'"
				>
					<img
						v-if="product.logo"
						:src="product.logo"
						:alt="`${product.name} logo`"
						class="h-full w-full rounded-lg object-cover sm:rounded-xl"
					/>
					<span v-else class="px-1 text-center leading-tight">
						{{ product.name.split(' ')[0] }}
					</span>

					<div
						v-if="product.link"
						class="bg-christi-500 absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full text-xs
							font-bold text-white opacity-0 transition-all duration-300 group-hover:scale-110
							group-hover:opacity-100 sm:-top-2 sm:-right-2 sm:size-6"
					>
						<Icon name="lucide:arrow-up-right" class="size-2.5 sm:size-3" />
					</div>
				</div>
			</div>

			<div
				class="product-content relative flex flex-1 flex-col justify-between space-y-3 text-center sm:space-y-4
					sm:text-left"
			>
				<div class="space-y-2 sm:space-y-3">
					<div class="flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-start">
						<h3
							class="text-secondary-foreground group-hover:text-royal-blue-600 dark:group-hover:text-royal-blue-400
								text-2xl leading-tight font-bold transition-colors duration-300"
						>
							{{ product.name }}
						</h3>

						<span
							v-if="product.link"
							class="bg-christi-100 dark:bg-christi-900/50 text-christi-700 dark:text-christi-300 flex-shrink-0
								rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap sm:px-3"
						>
							Активний
						</span>
						<span
							v-else
							class="bg-amaranth-100 dark:bg-amaranth-900/50 text-amaranth-700 dark:text-amaranth-300 flex-shrink-0
								rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap sm:px-3"
						>
							В розробці
						</span>
					</div>

					<p
						class="text-muted-foreground group-hover:text-secondary-foreground/80 line-clamp-3 text-base
							leading-relaxed transition-colors duration-300 sm:line-clamp-none"
					>
						{{ product.description }}
					</p>
				</div>

				<div class="border-border/30 flex items-center justify-between border-t pt-3 sm:pt-4">
					<div class="flex items-center gap-2">
						<div
							class="h-2 w-2 rounded-full"
							:class="product.link ? 'bg-christi-500 animate-pulse' : 'bg-amaranth-500'"
						></div>
						<span class="text-muted-foreground text-xs font-medium">
							{{ product.link ? 'Доступний зараз' : 'Скоро буде доступний' }}
						</span>
					</div>

					<div
						v-if="product.link"
						class="translate-x-2 transform opacity-0 transition-all duration-300 group-hover:translate-x-0
							group-hover:opacity-100"
					>
						<svg
							class="text-royal-blue-500 h-4 w-4 sm:h-5 sm:w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fill-rule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
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
	background: linear-gradient(
		135deg,
		rgba(99, 104, 242, 0.6),
		rgba(99, 104, 242, 0.3),
		rgba(132, 204, 22, 0.3)
	);
	-webkit-mask:
		linear-gradient(#fff 0 0) content-box,
		linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	mask-composite: exclude;
	opacity: 0.7;
	transition: opacity 0.5s ease;
	pointer-events: none;
}

.border-gradient-hover {
	content: '';
	position: absolute;
	inset: 0;
	border-radius: 0.75rem;
	padding: 1px;
	background: linear-gradient(
		135deg,
		rgba(99, 104, 242, 1),
		rgba(132, 204, 22, 0.8),
		rgba(99, 104, 242, 0.6)
	);
	-webkit-mask:
		linear-gradient(#fff 0 0) content-box,
		linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	mask-composite: exclude;
	opacity: 0;
	transition: opacity 0.5s ease;
	pointer-events: none;
}

.product-card:hover .border-gradient {
	opacity: 0;
}

.product-card:hover .border-gradient-hover {
	opacity: 1;
}

@media (min-width: 640px) {
	.border-gradient,
	.border-gradient-hover {
		border-radius: 1rem;
	}
}

.line-clamp-3 {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

@media (min-width: 640px) {
	.line-clamp-3 {
		display: block;
		-webkit-line-clamp: unset;
		-webkit-box-orient: unset;
		overflow: visible;
	}
}
</style>

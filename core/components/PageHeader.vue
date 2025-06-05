<template>
	<header class="mb-12 text-center">
		<h1 class="text-secondary-foreground mb-4 text-4xl font-bold md:text-5xl">
			<GradientText variant="primary">
				<slot name="title" />
			</GradientText>
		</h1>

		<div v-if="$slots.meta" class="text-muted-foreground space-y-1">
			<slot name="meta" />
		</div>

		<p v-if="$slots.description" class="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
			<slot name="description" />
		</p>
	</header>
</template>

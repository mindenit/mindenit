<script setup>
const route = useRoute()
const hideNavbar = computed(() => route.meta.hideNavbar)
</script>

<template>
	<div class="min-h-screen">
		<div v-if="!hideNavbar" class="absolute top-0 right-0 left-0 z-50 p-4 md:p-8">
			<Navbar />
		</div>
		<div class="container mx-auto px-2" :class="hideNavbar ? 'h-screen' : 'my-8 pt-20'">
			<slot />
		</div>
	</div>
</template>

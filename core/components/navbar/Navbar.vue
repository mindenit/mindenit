<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const showMobileMenu = ref(false)
const navbarRef = ref()

onClickOutside(navbarRef, () => {
	showMobileMenu.value = false
})

const handleMobileMenuToggle = () => {
	showMobileMenu.value = !showMobileMenu.value
}

const handleMobileMenuClose = () => {
	showMobileMenu.value = false
}
</script>

<template>
	<div
		ref="navbarRef"
		class="bg-card/80 border-border/50 hover:bg-card/90 before:from-royal-blue-500/10 before:to-christi-500/10
			sticky z-50 mx-auto max-w-5xl rounded-2xl border p-4 shadow-xl backdrop-blur-md transition-all
			duration-500 ease-in-out before:absolute before:inset-0 before:-z-10 before:rounded-2xl
			before:bg-gradient-to-r before:via-transparent before:opacity-0 before:transition-opacity
			before:duration-500 hover:shadow-2xl hover:before:opacity-100"
	>
		<div class="flex items-center justify-between">
			<NavbarLogo :on-logo-click="handleMobileMenuClose" />

			<nav class="hidden items-center gap-4 lg:flex">
				<NavbarNavigation :items="NAVIGATION_ITEMS" />

				<div class="bg-border h-6 w-px" />

				<NavbarSocial :links="SOCIAL_LINKS" />
			</nav>

			<div class="flex items-center gap-2 lg:hidden">
				<Button variant="ghost" size="icon" @click="handleMobileMenuToggle">
					<Icon v-if="!showMobileMenu" name="lucide:menu" class="!size-5" />
					<Icon v-else name="lucide:x" class="!size-5" />
				</Button>
				<ThemeSwitcher />
			</div>

			<div class="hidden items-center gap-2 lg:flex">
				<ThemeSwitcher />
			</div>
		</div>

		<NavbarMobile
			:is-open="showMobileMenu"
			:navigation-items="NAVIGATION_ITEMS"
			:social-links="SOCIAL_LINKS"
			@close="handleMobileMenuClose"
		/>
	</div>
</template>

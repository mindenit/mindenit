<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { navigationItems, socialLinks } from '~/core/constants'

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

			<nav class="hidden items-center gap-4 md:flex">
				<NavbarNavigation :items="navigationItems" />

				<div class="bg-border h-6 w-px" />

				<NavbarSocial :links="socialLinks" />
			</nav>

			<div class="flex items-center gap-2 md:hidden">
				<Button variant="ghost" size="icon" @click="handleMobileMenuToggle">
					<Icon v-if="!showMobileMenu" name="lucide:menu" class="!size-5" />
					<Icon v-else name="lucide:x" class="!size-5" />
				</Button>
				<ThemeSwitcher />
			</div>

			<div class="hidden items-center gap-2 md:flex">
				<ThemeSwitcher />
			</div>
		</div>

		<NavbarMobile
			:is-open="showMobileMenu"
			:navigation-items="navigationItems"
			:social-links="socialLinks"
			@close="handleMobileMenuClose"
		/>
	</div>
</template>

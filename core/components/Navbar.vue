<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'

const showMobileMenu = ref(false)
const navbarRef = ref()

onClickOutside(navbarRef, () => {
	showMobileMenu.value = false
})
</script>

<template>
	<div
		ref="navbarRef"
		class="bg-card/80 border-border/50 hover:bg-card/90 before:from-royal-blue-500/10 before:to-christi-500/10
			sticky z-50 mx-auto max-w-4xl rounded-2xl border p-4 shadow-xl backdrop-blur-md transition-all
			duration-500 ease-in-out before:absolute before:inset-0 before:-z-10 before:rounded-2xl
			before:bg-gradient-to-r before:via-transparent before:opacity-0 before:transition-opacity
			before:duration-500 hover:shadow-2xl hover:before:opacity-100"
	>
		<div class="flex items-center justify-between">
			<NuxtLink to="/" class="group flex items-center gap-3" @click="showMobileMenu = false">
				<div class="relative">
					<div
						class="from-royal-blue-400 to-christi-400 absolute -inset-1 rounded-xl bg-gradient-to-r opacity-0 blur
							transition-opacity duration-300 group-hover:opacity-30"
					></div>
					<img
						src="/logo.webp"
						alt="Logo"
						class="relative h-10 w-10 rounded-xl shadow-sm transition-all duration-300 group-hover:scale-110
							group-hover:shadow-md"
					/>
				</div>
				<div class="flex flex-col">
					<span
						class="text-secondary-foreground group-hover:text-royal-blue-600 dark:group-hover:text-royal-blue-400
							text-xl font-bold transition-colors duration-300"
					>
						Mindenit
					</span>
					<span
						class="text-muted-foreground hidden text-xs font-medium opacity-0 transition-opacity duration-300
							group-hover:opacity-100 sm:block"
					>
						Студентські рішення
					</span>
				</div>
			</NuxtLink>

			<nav class="hidden items-center gap-2 md:flex">
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NuxtLink v-slot="{ isActive, href, navigate }" to="/" custom>
								<NavigationMenuLink
									:active="isActive"
									:href
									:class="navigationMenuTriggerStyle()"
									@click="navigate"
								>
									Головна
								</NavigationMenuLink>
							</NuxtLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Документи</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NuxtLink v-slot="{ isActive, href, navigate }" to="/memorandum" custom>
									<NavigationMenuLink
										:active="isActive"
										:href
										:class="navigationMenuTriggerStyle()"
										@click="navigate"
									>
										Меморандум
									</NavigationMenuLink>
								</NuxtLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<div class="bg-border h-6 w-px"></div>
				<a
					href="https://t.me/mindenit"
					target="_blank"
					rel="noopener noreferrer"
					class="text-muted-foreground hover:text-christi-600 dark:hover:text-christi-400 hover:bg-christi-50
						dark:hover:bg-christi-950/50 group relative rounded-xl p-2 font-medium transition-all duration-300"
					title="Наш Telegram"
				>
					<Icon name="lucide:send" class="size-4" />
					<div
						class="from-christi-500/10 to-christi-600/10 absolute inset-0 rounded-xl bg-gradient-to-r opacity-0
							transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</a>
				<a
					href="https://github.com/mindenit"
					target="_blank"
					rel="noopener noreferrer"
					class="text-muted-foreground hover:text-secondary-foreground hover:bg-muted group relative rounded-xl p-2
						font-medium transition-all duration-300"
					title="Наш Github"
				>
					<Icon name="lucide:github" class="size-4" />
					<div
						class="from-muted/50 to-muted absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 transition-opacity
							duration-300 group-hover:opacity-100"
					></div>
				</a>
			</nav>

			<div class="flex items-center gap-2 md:hidden">
				<button
					class="text-muted-foreground hover:text-secondary-foreground hover:bg-muted rounded-xl p-2 transition-all
						duration-300"
					@click="showMobileMenu = !showMobileMenu"
				>
					<Icon v-if="!showMobileMenu" name="lucide:menu" class="!size-5" />
					<Icon v-else name="lucide:x" class="!size-5" />
				</button>
				<ThemeSwitcher />
			</div>

			<div class="hidden items-center gap-2 md:flex">
				<ThemeSwitcher />
			</div>
		</div>

		<div v-if="showMobileMenu" class="border-border/50 mt-4 border-t pt-4 md:hidden">
			<nav class="space-y-1">
				<NuxtLink
					to="/"
					class="text-muted-foreground hover:text-secondary-foreground hover:bg-muted block rounded-xl px-4 py-2
						transition-colors duration-300"
					@click="showMobileMenu = false"
				>
					Головна
				</NuxtLink>

				<div class="space-y-1">
					<div class="text-muted-foreground/70 px-4 py-1 text-sm font-medium">Документи</div>
					<NuxtLink
						to="/memorandum"
						class="text-muted-foreground hover:text-secondary-foreground hover:bg-muted block rounded-xl px-6 py-2
							text-sm transition-colors duration-300"
						@click="showMobileMenu = false"
					>
						Меморандум
					</NuxtLink>
				</div>

				<div class="border-border/30 mt-3 border-t pt-2">
					<a
						href="https://t.me/mindenit"
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground hover:text-christi-600 dark:hover:text-christi-400 hover:bg-christi-50
							dark:hover:bg-christi-950/50 flex items-center gap-3 rounded-xl px-4 py-2 transition-colors
							duration-300"
						@click="showMobileMenu = false"
					>
						<Icon name="lucide:send" class="size-4" />
						Telegram
					</a>
					<a
						href="https://github.com/mindenit"
						target="_blank"
						rel="noopener noreferrer"
						class="text-muted-foreground hover:text-secondary-foreground hover:bg-muted flex items-center gap-3
							rounded-xl px-4 py-2 transition-colors duration-300"
						@click="showMobileMenu = false"
					>
						<Icon name="lucide:github" class="size-4" />
						GitHub
					</a>
				</div>
			</nav>
		</div>
	</div>
</template>

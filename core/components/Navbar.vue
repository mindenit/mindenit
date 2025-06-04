<template>
	<div
		class="relative mx-auto max-w-4xl rounded-xl p-6 shadow-lg transition-all duration-300 ease-in-out
			before:absolute before:inset-0 before:-z-10 before:rounded-xl before:bg-gradient-to-br
			before:from-[#6368f226] before:to-[#6368f20d] before:opacity-0 before:transition-opacity
			before:duration-300 after:absolute after:inset-0 after:-z-10 after:rounded-xl
			after:bg-gradient-to-br after:from-[#6368f21a] after:to-[#6368f20d] after:transition-opacity
			after:duration-300 hover:before:opacity-100 hover:after:opacity-0"
	>
		<div class="flex items-center justify-between">
			<NuxtLink to="/" class="flex items-center gap-3">
				<img src="/logo.webp" alt="Logo" class="h-8 w-8 rounded-lg shadow-sm" />
				<span class="text-secondary-foreground text-lg font-semibold">Mindenit</span>
			</NuxtLink>
			<nav class="hidden items-center gap-6 md:flex">
				<NuxtLink
					to="/"
					class="text-muted-foreground hover:text-secondary-foreground transition-colors duration-200"
				>
					Головна
				</NuxtLink>
				<NuxtLink
					to="/memorandum"
					class="text-muted-foreground hover:text-secondary-foreground transition-colors duration-200"
				>
					Меморандум
				</NuxtLink>
			</nav>
			<div class="flex items-center">
				<ThemeSwitcher />
			</div>
		</div>
	</div>
</template>

<template>
	<div
		class="bg-card/80 border-border/50 hover:bg-card/90 before:from-royal-blue-500/10 before:to-christi-500/10
			sticky z-50 mx-auto max-w-4xl rounded-2xl border p-4 shadow-xl backdrop-blur-md transition-all
			duration-500 ease-in-out before:absolute before:inset-0 before:-z-10 before:rounded-2xl
			before:bg-gradient-to-r before:via-transparent before:opacity-0 before:transition-opacity
			before:duration-500 hover:shadow-2xl hover:before:opacity-100"
	>
		<div class="flex items-center justify-between">
			<NuxtLink to="/" class="group flex items-center gap-3">
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
						class="text-muted-foreground text-xs font-medium opacity-0 transition-opacity duration-300
							group-hover:opacity-100"
					>
						Студентські рішення
					</span>
				</div>
			</NuxtLink>

			<nav class="hidden items-center gap-1 md:flex">
				<NuxtLink
					to="/"
					class="text-muted-foreground hover:text-secondary-foreground hover:bg-royal-blue-50
						dark:hover:bg-royal-blue-950/50 group relative rounded-xl px-4 py-2 font-medium transition-all
						duration-300"
				>
					<span class="relative z-10">Головна</span>
					<div
						class="from-royal-blue-500/10 to-christi-500/10 absolute inset-0 rounded-xl bg-gradient-to-r opacity-0
							transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</NuxtLink>

				<NuxtLink
					to="/memorandum"
					class="text-muted-foreground hover:text-secondary-foreground hover:bg-royal-blue-50
						dark:hover:bg-royal-blue-950/50 group relative rounded-xl px-4 py-2 font-medium transition-all
						duration-300"
				>
					<span class="relative z-10">Меморандум</span>
					<div
						class="from-royal-blue-500/10 to-christi-500/10 absolute inset-0 rounded-xl bg-gradient-to-r opacity-0
							transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</NuxtLink>

				<div class="bg-border ml-2 h-6 w-px"></div>

				<a
					href="https://t.me/mindenit"
					target="_blank"
					rel="noopener noreferrer"
					class="text-muted-foreground hover:text-christi-600 dark:hover:text-christi-400 hover:bg-christi-50
						dark:hover:bg-christi-950/50 group relative rounded-xl px-3 py-2 font-medium transition-all
						duration-300"
					title="Наш Telegram"
				>
					<div class="flex items-center gap-2">
						<Icon name="logos:telegram" class="size-4" />
						<span class="hidden sm:inline">Telegram</span>
					</div>
					<div
						class="from-christi-500/10 to-christi-600/10 absolute inset-0 rounded-xl bg-gradient-to-r opacity-0
							transition-opacity duration-300 group-hover:opacity-100"
					></div>
				</a>
			</nav>

			<div class="flex items-center gap-2">
				<button
					class="text-muted-foreground hover:text-secondary-foreground hover:bg-muted rounded-xl p-2 transition-all
						duration-300 md:hidden"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>

				<ThemeSwitcher />
			</div>
		</div>
	</div>
</template>

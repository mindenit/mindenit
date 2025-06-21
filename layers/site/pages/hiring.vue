<script setup lang="ts">
const pageTitle = 'Приєднайся до команди розробників'
const pageDescription =
	'Команда розробників шукає Frontend та Backend розробників для роботи над проектами з використанням сучасних технологій'

useSeoMeta({
	title: pageTitle,
	description: pageDescription,
	ogTitle: pageTitle,
	ogDescription: pageDescription,
})

defineOgImageComponent('Mindenit')

const name = ref('')
const telegram = ref('')
const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const nameError = ref('')
const telegramError = ref('')

const validateForm = () => {
	let isValid = true

	if (!name.value.trim()) {
		nameError.value = "Ім'я є обов'язковим"
		isValid = false
	} else if (name.value.trim().length < 2) {
		nameError.value = "Ім'я повинно містити принаймні 2 символи"
		isValid = false
	} else {
		nameError.value = ''
	}

	if (!telegram.value.trim()) {
		telegramError.value = "Telegram профіль є обов'язковим"
		isValid = false
	} else if (!telegram.value.startsWith('@') && !telegram.value.includes('t.me/')) {
		telegramError.value = 'Введіть коректний Telegram профіль (@username або t.me/username)'
		isValid = false
	} else {
		telegramError.value = ''
	}

	return isValid
}

const submitForm = async () => {
	if (!validateForm()) return

	isSubmitting.value = true
	submitStatus.value = 'idle'

	try {
		const config = useRuntimeConfig()
		const webhookUrl = config.public.hiringWebhookUrl

		const payload = {
			embeds: [
				{
					title: '🚀 Нова заявка на приєднання до команди',
					color: 0x3b82f6,
					fields: [
						{
							name: "👤 Ім'я",
							value: name.value.trim(),
							inline: true,
						},
						{
							name: '📱 Telegram',
							value: telegram.value.trim(),
							inline: true,
						},
					],
					timestamp: new Date().toISOString(),
					footer: {
						text: 'Заявка з сайту команди',
					},
				},
			],
		}

		const response = await fetch(webhookUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})

		if (!response.ok) {
			throw new Error('Помилка відправки')
		}

		submitStatus.value = 'success'
		name.value = ''
		telegram.value = ''
	} catch (error) {
		console.error('Submit error:', error)
		submitStatus.value = 'error'
		errorMessage.value = 'Помилка відправки форми. Спробуйте ще раз.'
	} finally {
		isSubmitting.value = false
	}
}

const frontendTech = [
	{ name: 'Vue.js', icon: 'logos:vue' },
	{ name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
	{ name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
	{ name: 'TypeScript', icon: 'logos:typescript-icon' },
]

const backendTech = [
	{ name: 'Node.js', icon: 'logos:nodejs-icon' },
	{ name: 'PostgreSQL', icon: 'logos:postgresql' },
	{ name: 'Redis', icon: 'logos:redis' },
	{ name: 'TypeScript', icon: 'logos:typescript-icon' },
]
</script>

<template>
	<div class="container mx-auto max-w-4xl px-4 py-12">
		<div class="mb-12 text-center">
			<PageHeader>
				<template #title> Приєднайся до команди </template>
				<template #meta>
					<p class="text-muted-foreground mx-auto max-w-2xl text-xl">
						Ми шукаємо талановитих Frontend та Backend розробників для роботи над інноваційними
						проектами
					</p>
				</template>
			</PageHeader>
		</div>

		<div class="space-y-8">
			<Alert v-if="submitStatus === 'success'" class="border-green-500/30 bg-green-500/10">
				<AlertDescription class="text-green-700">
					<strong>Заявка відправлена!</strong> Ми зв'яжемося з тобою найближчим часом.
				</AlertDescription>
			</Alert>

			<Alert v-if="submitStatus === 'error'" class="border-red-500/30 bg-red-500/10">
				<AlertDescription class="text-red-700">
					<strong>Помилка відправки:</strong> {{ errorMessage }}
				</AlertDescription>
			</Alert>

			<div class="grid gap-6 md:grid-cols-2">
				<div
					class="from-royal-blue-50 to-christi-50 dark:from-royal-blue-950/20 dark:to-christi-950/20 border-border/50
						space-y-4 rounded-xl border bg-gradient-to-r p-6"
				>
					<div class="flex items-center gap-3">
						<div class="rounded-lg bg-blue-500/10 p-2">
							<Icon name="lucide:code" class="h-6 w-6 text-blue-600" />
						</div>
						<div>
							<h3 class="text-secondary-foreground text-xl font-bold">Frontend розробник</h3>
							<p class="text-muted-foreground">Створення користувацьких інтерфейсів</p>
						</div>
					</div>

					<p class="text-muted-foreground text-sm leading-relaxed">
						Розробка сучасних веб-додатків з використанням Vue.js екосистеми та найкращих практик
						UI/UX дизайну.
					</p>

					<div>
						<h4 class="text-secondary-foreground mb-2 text-sm font-semibold">Технології:</h4>
						<div class="flex flex-wrap gap-2">
							<Badge
								v-for="tech in frontendTech"
								:key="tech.name"
								variant="secondary"
								class="flex items-center gap-1"
							>
								<Icon :name="tech.icon" class="h-3 w-3" />
								{{ tech.name }}
							</Badge>
						</div>
					</div>
				</div>

				<div
					class="from-royal-blue-50 to-christi-50 dark:from-royal-blue-950/20 dark:to-christi-950/20 border-border/50
						space-y-4 rounded-xl border bg-gradient-to-r p-6"
				>
					<div class="flex items-center gap-3">
						<div class="rounded-lg bg-emerald-500/10 p-2">
							<Icon name="lucide:server" class="h-6 w-6 text-emerald-600" />
						</div>
						<div>
							<h3 class="text-secondary-foreground text-xl font-bold">Backend розробник</h3>
							<p class="text-muted-foreground">Розробка серверної логіки</p>
						</div>
					</div>

					<p class="text-muted-foreground text-sm leading-relaxed">
						Створення надійних API, робота з базами даних та забезпечення високої продуктивності
						серверних додатків.
					</p>

					<div>
						<h4 class="text-secondary-foreground mb-2 text-sm font-semibold">Технології:</h4>
						<div class="flex flex-wrap gap-2">
							<Badge
								v-for="tech in backendTech"
								:key="tech.name"
								variant="secondary"
								class="flex items-center gap-1"
							>
								<Icon :name="tech.icon" class="h-3 w-3" />
								{{ tech.name }}
							</Badge>
						</div>
					</div>
				</div>
			</div>

			<Separator />

			<div class="border-border/50 bg-card/80 rounded-xl border p-8 shadow-xl backdrop-blur-md">
				<div class="mb-6">
					<h2
						class="text-secondary-foreground border-border/30 flex items-center gap-2 border-b pb-3 text-2xl font-bold"
					>
						<Icon name="lucide:send" class="h-6 w-6" />
						Подати заявку
					</h2>
					<p class="text-muted-foreground mt-2">
						Заповни форму нижче, і ми зв'яжемося з тобою для подальшого обговорення
					</p>
				</div>

				<form class="space-y-6" @submit.prevent="submitForm">
					<div class="space-y-2">
						<Label for="name">Ім'я *</Label>
						<Input
							id="name"
							v-model="name"
							type="text"
							placeholder="Твоє ім'я"
							:disabled="isSubmitting"
							:class="{ 'border-red-500': nameError }"
						/>
						<p v-if="nameError" class="text-sm text-red-500">{{ nameError }}</p>
					</div>

					<div class="space-y-2">
						<Label for="telegram">Telegram профіль *</Label>
						<Input
							id="telegram"
							v-model="telegram"
							type="text"
							placeholder="@username або t.me/username"
							:disabled="isSubmitting"
							:class="{ 'border-red-500': telegramError }"
						/>
						<p v-if="telegramError" class="text-sm text-red-500">{{ telegramError }}</p>
					</div>

					<Button
						type="submit"
						:disabled="isSubmitting"
						class="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
					>
						<Icon v-if="isSubmitting" name="lucide:loader-2" class="mr-2 h-4 w-4 animate-spin" />
						<Icon v-else name="lucide:send" class="mr-2 h-4 w-4" />
						{{ isSubmitting ? 'Відправляємо...' : 'Відправити заявку' }}
					</Button>
				</form>
			</div>
		</div>
	</div>
</template>

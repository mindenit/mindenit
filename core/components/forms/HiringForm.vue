<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useStorage, useNow } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { HIRING_FORM_SUBMISSION_INTERVAL } from '@/core/constants'

const isSubmitting = ref(false)
const lastSubmission = useStorage('last-hiring-submission', 0)
const now = useNow({ interval: 1000 })

const isRateLimited = computed(() => {
	return now.value.getTime() - lastSubmission.value < HIRING_FORM_SUBMISSION_INTERVAL
})

const secondsRemaining = computed(() => {
	if (!isRateLimited.value) return 0
	const timePassed = now.value.getTime() - lastSubmission.value
	return Math.ceil((HIRING_FORM_SUBMISSION_INTERVAL - timePassed) / 1000)
})

const formSchema = toTypedSchema(
	z.object({
		name: z
			.string({
				required_error: "Ім'я є обов'язковим",
			})
			.min(2, "Ім'я повинно містити принаймні 2 символи")
			.max(50, "Ім'я не повинно перевищувати 50 символів"),
		telegram: z
			.string({
				required_error: "Telegram профіль є обов'язковим",
			})
			.refine(
				value => value.startsWith('@') || value.includes('t.me/'),
				'Введіть коректний Telegram профіль (@username або t.me/username)'
			),
	})
)

const form = useForm({
	validationSchema: formSchema,
})

const onSubmit = form.handleSubmit(async values => {
	if (isRateLimited.value) {
		toast.error(`Будь ласка, зачекайте ${secondsRemaining.value}с перед наступною відправкою.`)
		return
	}

	isSubmitting.value = true

	try {
		await $fetch('/api/notify', {
			method: 'POST',
			body: { type: 'hiring', data: values },
		})

		toast.success('Заявка відправлена!', {
			description: 'Ми зв`яжемося з тобою найближчим часом.',
		})
		lastSubmission.value = Date.now()
		form.resetForm()
	} catch (error) {
		console.error('Submit error:', error)
		toast.error('Помилка відправки заявки', {
			description: 'Будь ласка, спробуйте ще раз пізніше.',
		})
	} finally {
		isSubmitting.value = false
	}
})
</script>

<template>
	<div class="border-border/50 bg-card/80 rounded-xl border p-8 shadow-xl backdrop-blur-md">
		<div class="mb-6">
			<h2
				class="text-secondary-foreground border-border/30 flex items-center gap-2 border-b pb-3 text-2xl font-bold"
			>
				<Icon name="lucide:send" class="!size-4" />
				Подати заявку
			</h2>
			<p class="text-muted-foreground mt-2">
				Заповни форму нижче, і ми зв'яжемося з тобою для подальшого обговорення
			</p>
		</div>

		<form class="space-y-6" @submit="onSubmit">
			<FormField v-slot="{ componentField }" name="name">
				<FormItem>
					<FormLabel for="name">Ім'я *</FormLabel>
					<FormControl>
						<Input
							id="name"
							type="text"
							placeholder="Твоє ім'я"
							:disabled="isSubmitting || isRateLimited"
							v-bind="componentField"
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			</FormField>

			<FormField v-slot="{ componentField }" name="telegram">
				<FormItem>
					<FormLabel for="telegram">Telegram профіль *</FormLabel>
					<FormControl>
						<Input
							id="telegram"
							type="text"
							placeholder="@username або t.me/username"
							:disabled="isSubmitting || isRateLimited"
							v-bind="componentField"
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			</FormField>

			<Button
				type="submit"
				:disabled="isSubmitting || isRateLimited"
				class="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
			>
				<Icon v-if="isSubmitting" name="lucide:loader-2" class="mr-2 !size-4 animate-spin" />
				<template v-else-if="isRateLimited">
					<Icon name="lucide:timer" class="mr-2 !size-4" />
					Зачекайте {{ secondsRemaining }}с
				</template>
				<template v-else>
					<Icon name="lucide:send" class="mr-2 !size-4" />
					Відправити заявку
				</template>
			</Button>
		</form>
	</div>
</template>

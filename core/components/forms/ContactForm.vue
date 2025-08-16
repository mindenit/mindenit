<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useStorage, useNow } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { CONTACT_FORM_SUBMISSION_INTERVAL } from '@/core/constants'

const isSubmitting = ref(false)
const lastSubmission = useStorage('last-contact-submission', 0)
const now = useNow({ interval: 1000 })

const isRateLimited = computed(() => {
	return now.value.getTime() - lastSubmission.value < CONTACT_FORM_SUBMISSION_INTERVAL
})

const secondsRemaining = computed(() => {
	if (!isRateLimited.value) return 0
	const timePassed = now.value.getTime() - lastSubmission.value
	return Math.ceil((CONTACT_FORM_SUBMISSION_INTERVAL - timePassed) / 1000)
})

const formSchema = toTypedSchema(
	z.object({
		name: z
			.string({
				required_error: "Ім'я є обов'язковим",
			})
			.min(2, "Ім'я повинно містити принаймні 2 символи")
			.max(50, "Ім'я не повинно перевищувати 50 символів"),
		email: z
			.string({
				required_error: "Email є обов'язковим",
			})
			.email('Введіть коректний Email'),
		message: z
			.string({
				required_error: "Повідомлення є обов'язковим",
			})
			.min(10, 'Повідомлення повинно містити принаймні 10 символів')
			.max(500, 'Повідомлення не повинно перевищувати 500 символів'),
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
		const sendWebhook = $fetch('/api/notify', {
			method: 'POST',
			body: { type: 'contact', data: values },
		})

		const sendEmail = $fetch('/api/send-email', {
			method: 'POST',
			body: values,
		})

		await Promise.all([sendWebhook, sendEmail])

		toast.success('Повідомлення відправлено!', {
			description: 'Ми зв`яжемося з вами найближчим часом.',
		})
		lastSubmission.value = Date.now()
		form.resetForm()
	} catch (error) {
		console.error('Submit error:', error)
		toast.error('Помилка відправки форми', {
			description: 'Будь ласка, спробуйте ще раз пізніше.',
		})
	} finally {
		isSubmitting.value = false
	}
})
</script>

<template>
	<div class="w-full max-w-xl">
		<form class="space-y-6" @submit="onSubmit">
			<FormField v-slot="{ componentField }" name="name">
				<FormItem>
					<FormLabel for="name">Ім'я *</FormLabel>
					<FormControl>
						<Input
							id="name"
							type="text"
							placeholder="Ваше ім'я"
							:disabled="isSubmitting || isRateLimited"
							v-bind="componentField"
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			</FormField>

			<FormField v-slot="{ componentField }" name="email">
				<FormItem>
					<FormLabel for="email">Email *</FormLabel>
					<FormControl>
						<Input
							id="email"
							type="email"
							placeholder="example@email.com"
							:disabled="isSubmitting || isRateLimited"
							v-bind="componentField"
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			</FormField>

			<FormField v-slot="{ componentField }" name="message">
				<FormItem>
					<FormLabel for="message">Повідомлення *</FormLabel>
					<FormControl>
						<Textarea
							id="message"
							placeholder="Розкажіть нам про вашу ідею..."
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
					Відправити
				</template>
			</Button>
		</form>
	</div>
</template>

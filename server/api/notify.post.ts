const getWebhookUrl = (type: string) => {
	const config = useRuntimeConfig()
	switch (type) {
		case 'contact':
			return config.public.hiringWebhookUrl
		case 'hiring':
			return config.public.hiringWebhookUrl
		default:
			return null
	}
}

type ContactData = { name: string; email: string; message: string }
type HiringData = { name: string; telegram: string }

const getWebhookPayload = (type: string, data: unknown) => {
	switch (type) {
		case 'contact': {
			const contactData = data as ContactData
			return {
				embeds: [
					{
						title: '📝 Нове повідомлення з контактної форми',
						color: 0x84cc16,
						fields: [
							{ name: "👤 Ім'я", value: contactData.name, inline: true },
							{ name: '✉️ Email', value: contactData.email, inline: true },
							{ name: '📄 Повідомлення', value: contactData.message },
						],
						timestamp: new Date().toISOString(),
						footer: { text: 'Повідомлення з сайту' },
					},
				],
			}
		}
		case 'hiring': {
			const hiringData = data as HiringData
			return {
				embeds: [
					{
						title: '🚀 Нова заявка на приєднання до команди',
						color: 0x3b82f6,
						fields: [
							{ name: "👤 Ім'я", value: hiringData.name, inline: true },
							{ name: '📱 Telegram', value: hiringData.telegram, inline: true },
						],
						timestamp: new Date().toISOString(),
						footer: { text: 'Заявка з сайту команди' },
					},
				],
			}
		}
		default:
			return null
	}
}

export default defineEventHandler(async event => {
	const { type, data } = await readBody(event)

	const webhookUrl = getWebhookUrl(type)
	const payload = getWebhookPayload(type, data)

	if (!webhookUrl || !payload) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Invalid notification type',
		})
	}

	try {
		await $fetch(webhookUrl as string, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: payload,
		})
		return { success: true }
	} catch (error) {
		console.error('Error sending webhook:', error)
		throw createError({
			statusCode: 500,
			statusMessage: 'Error sending webhook',
		})
	}
})

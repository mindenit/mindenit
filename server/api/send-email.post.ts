import nodemailer from 'nodemailer'

const escapeHtml = (text: string): string => {
	if (!text) return ''
	const map: { [key: string]: string } = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;',
	}
	return text.replace(/[&<>"']/g, m => map[m] || m)
}

export default defineEventHandler(async event => {
	try {
		const { name, email, message } = await readBody(event)

		if (!name || !email || !message) {
			throw createError({
				statusCode: 400,
				statusMessage: 'Missing required fields',
			})
		}

		const config = useRuntimeConfig()

		if (!config.smtpHost || !config.smtpUser || !config.smtpPass) {
			throw createError({
				statusCode: 500,
				statusMessage: 'Email service not configured',
			})
		}

		const transporter = nodemailer.createTransport({
			host: config.smtpHost,
			port: config.smtpPort,
			secure: config.smtpPort === 465,
			auth: {
				user: config.smtpUser,
				pass: config.smtpPass,
			},
		})

		const mailOptions = {
			from: `"${escapeHtml(name)}" <${config.smtpFrom}>`,
			to: 'sales@mindenit.org',
			replyTo: email,
			subject: `Нове повідомлення з контактної форми від ${escapeHtml(name)}`,
			text: message,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px;">
					<h2>Нове повідомлення з контактної форми</h2>
					<p><strong>Ім'я:</strong> ${escapeHtml(name)}</p>
					<p><strong>Email:</strong> ${escapeHtml(email)}</p>
					<p><strong>Повідомлення:</strong></p>
					<p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
				</div>
			`,
		}

		await transporter.sendMail(mailOptions)
		return { success: true }
	} catch (error) {
		console.error('Email sending error:', error)
		throw createError({
			statusCode: 500,
			statusMessage: 'Unable to send email',
		})
	}
})

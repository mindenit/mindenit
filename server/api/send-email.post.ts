import nodemailer from 'nodemailer'

export default defineEventHandler(async event => {
	const { name, email, message } = await readBody(event)

	const config = useRuntimeConfig()

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
		from: `"${name}" <${config.smtpFrom}>`,
		to: 'sales@mindenit.org',
		replyTo: email,
		subject: `Нове повідомлення з контактної форми від ${name}`,
		text: message,
		html: `
			<p><strong>Ім'я:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Повідомлення:</strong></p>
			<p>${message}</p>
		`,
	}

	try {
		await transporter.sendMail(mailOptions)
		return { success: true }
	} catch (error) {
		console.error('Error sending email:', error)
		throw createError({
			statusCode: 500,
			statusMessage: 'Error sending email',
		})
	}
})

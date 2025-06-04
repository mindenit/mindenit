<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
	value: string
	label: string
	isTime?: boolean
	startDate?: string
}

const props = withDefaults(defineProps<Props>(), {
	isTime: false,
	startDate: '',
})

const counterRef = ref<HTMLElement>()
const displayValue = ref('0')

function declension(number: number, words: string[]): string {
	const cases = [2, 0, 1, 1, 1, 2]
	const idx =
		number % 100 > 4 && number % 100 < 20
			? 2
			: (cases[(number % 10 < 5 ? number % 10 : 5) as number] ?? 2)
	return words[idx] ?? words[0] ?? ''
}

function formatTimeText(value: number, words: string[], addComma = true): string {
	if (value <= 0) return ''
	const text = `${Math.floor(value)} ${declension(Math.floor(value), words)}`
	return addComma ? text + ',' : text
}

function getTimeDifference(startDate: string) {
	const start = new Date(startDate)
	const kyivOffset = 2 * 60
	const now = new Date()
	const userOffset = now.getTimezoneOffset()
	const offsetDiff = kyivOffset + userOffset

	const kyivNow = new Date(now.getTime() + offsetDiff * 60 * 1000)

	let years = kyivNow.getFullYear() - start.getFullYear()
	let months = kyivNow.getMonth() - start.getMonth()
	let days = kyivNow.getDate() - start.getDate()

	if (days < 0) {
		months--
		const lastMonth = new Date(kyivNow.getFullYear(), kyivNow.getMonth(), 0)
		days += lastMonth.getDate()
	}

	if (months < 0) {
		years--
		months += 12
	}
	return { years, months, days }
}

function animateTimeCounter(element: HTMLElement, startDate: string, duration: number) {
	const timeDiff = getTimeDifference(startDate)
	const yearWords = ['рік', 'роки', 'років']
	const monthWords = ['місяць', 'місяці', 'місяців']
	const dayWords = ['день', 'дні', 'днів']

	let currentYear = 0
	let currentMonth = 0
	let currentDay = 0

	const yearIncrement = timeDiff.years / (duration / 16)
	const monthIncrement = timeDiff.months / (duration / 16)
	const dayIncrement = timeDiff.days / (duration / 16)

	function updateCounter() {
		if (currentYear < timeDiff.years) {
			currentYear = Math.min(currentYear + yearIncrement, timeDiff.years)
		}
		if (currentYear >= timeDiff.years && currentMonth < timeDiff.months) {
			currentMonth = Math.min(currentMonth + monthIncrement, timeDiff.months)
		}
		if (
			currentYear >= timeDiff.years &&
			currentMonth >= timeDiff.months &&
			currentDay < timeDiff.days
		) {
			currentDay = Math.min(currentDay + dayIncrement, timeDiff.days)
		}

		const parts = []

		const yearText = formatTimeText(
			currentYear,
			yearWords,
			!!(Math.floor(currentMonth) || Math.floor(currentDay))
		)
		const monthText = formatTimeText(currentMonth, monthWords, !!Math.floor(currentDay))
		const dayText = formatTimeText(currentDay, dayWords, false)

		if (yearText) parts.push(yearText)
		if (monthText) parts.push(monthText)
		if (dayText) parts.push(dayText)

		element.textContent = parts.join(' ')

		if (
			currentYear < timeDiff.years ||
			currentMonth < timeDiff.months ||
			currentDay < timeDiff.days
		) {
			requestAnimationFrame(updateCounter)
		}
	}

	updateCounter()
}

function animateCounter(
	element: HTMLElement,
	targetValue: number,
	suffix: string,
	duration: number
) {
	const startValue = 0
	const increment = targetValue / (duration / 16)
	let currentValue = startValue

	function updateCounter() {
		currentValue += increment
		if (currentValue >= targetValue) {
			element.textContent = Math.floor(targetValue) + suffix
		} else {
			element.textContent = Math.floor(currentValue) + suffix
			requestAnimationFrame(updateCounter)
		}
	}
	updateCounter()
}

onMounted(() => {
	if (!counterRef.value) return

	if (props.isTime && props.startDate) {
		displayValue.value = ''
		animateTimeCounter(counterRef.value, props.startDate, 1000)
	} else {
		const targetValue = parseInt(props.value.replace(/\D/g, ''))
		const suffix = props.value.replace(/\d+/g, '')
		displayValue.value = '0'
		animateCounter(counterRef.value, targetValue, suffix, 1000)
	}
})
</script>

<template>
	<div
		class="product-card relative flex h-full flex-col items-stretch gap-1 rounded-xl p-6 text-center shadow-lg
			transition-all duration-300 ease-in-out before:absolute before:inset-0 before:-z-10
			before:rounded-xl before:bg-gradient-to-br before:from-[#6368f226] before:to-[#6368f20d]
			before:opacity-0 before:transition-opacity before:duration-300 after:absolute after:inset-0
			after:-z-10 after:rounded-xl after:bg-gradient-to-br after:from-[#6368f21a] after:to-[#6368f20d]
			after:transition-opacity after:duration-300 hover:-translate-y-1 hover:before:opacity-100
			hover:after:opacity-0"
		:class="$attrs.class"
	>
		<div ref="counterRef" class="counter text-primary text-3xl font-bold">
			{{ displayValue }}
		</div>
		<div class="text-muted-foreground text-sm">{{ label }}</div>
	</div>
</template>

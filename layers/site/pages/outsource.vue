<script setup lang="ts">
const pageTitle = 'Аутсорс'
const pageDescription =
	'Ми готові втілити ваші ідеї в життя. Наша команда спеціалізується на створенні веб-сайтів, мобільних додатків та програмного забезпечення на замовлення.'

useSeoMeta({
	title: pageTitle,
	description: pageDescription,
	ogTitle: pageTitle,
	ogDescription: pageDescription,
})

defineOgImageComponent('Mindenit')
</script>

<template>
	<div class="flex flex-col gap-16 pt-24">
		<!-- Page Header -->
		<PageHeader>
			<template #title>
				<GradientText>Працюємо з любов'ю</GradientText>
			</template>
			<template #description>
				<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
					Втілюємо ваші ідеї в життя за допомогою сучасних технологій. Від концепції до готового
					продукту - ми з вами на кожному кроці.
				</p>
			</template>
		</PageHeader>

		<!-- Advantages Section -->
		<GradientSection variant="primary" size="md" align="center" class="relative overflow-hidden">
			<TheBlob size="md" position="top-right" variant="primary" animation="bounce" />
			<TheBlob
				size="sm"
				position="bottom-left"
				variant="secondary"
				animation="bounce"
				delay="1.5s"
			/>

			<div class="relative z-10">
				<h3 class="text-secondary-foreground mb-8 text-center text-3xl font-bold">
					<GradientText>Чому варто обрати нас?</GradientText>
				</h3>
				<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					<AdvantageCard
						v-for="(advantage, index) in ADVANTAGES"
						:key="advantage.title"
						:advantage="advantage"
						:index="index"
					/>
				</div>
			</div>
		</GradientSection>

		<!-- Partners Section -->
		<div class="container mx-auto px-4">
			<div class="relative z-10">
				<div class="mb-12 text-center">
					<h2 class="mb-4 text-3xl font-bold">
						<GradientText>З нами співпрацюють</GradientText>
					</h2>
					<p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
						Довіра провідних компаній та організацій - наша найкраща рекомендація
					</p>
				</div>

				<div class="flex justify-center">
					<div class="flex max-w-4xl flex-wrap justify-center gap-8">
						<PartnerCard
							v-for="(partner, index) in PARTNERS"
							:key="partner.name"
							:partner="partner"
							:index="index"
							class="max-w-[450px] min-w-[300px] flex-1"
						/>
					</div>
				</div>

				<div class="mt-8 flex flex-wrap items-center justify-center gap-8 text-center">
					<div v-for="stat in PARTNER_STATS" :key="stat.label">
						<div :class="['text-3xl font-bold', stat.color]">{{ stat.value }}</div>
						<div class="text-muted-foreground mt-1 text-sm">{{ stat.label }}</div>
					</div>
				</div>
			</div>
		</div>

		<Separator />

		<!-- Services Section -->
		<div class="container mx-auto px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">
				<GradientText>Що ми розробляємо</GradientText>
			</h2>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<ServiceCard
					v-for="(service, index) in SERVICES"
					:key="service.title"
					:service="service"
					:index="index"
				/>
			</div>

			<!-- Additional Services Section -->
			<div class="relative mt-16">
				<GradientSection
					variant="primary"
					size="lg"
					align="center"
					class="relative overflow-hidden"
				>
					<TheBlob size="xl" position="top-left" variant="primary" animation="pulse" />
					<TheBlob
						size="lg"
						position="bottom-right"
						variant="secondary"
						animation="pulse"
						delay="1s"
					/>
					<TheBlob size="sm" position="center" variant="tertiary" animation="pulse" delay="2s" />

					<div class="relative z-10">
						<div class="mb-8 text-center">
							<div class="mb-4 inline-flex items-center gap-2">
								<Icon
									name="lucide:sparkles"
									class="text-royal-blue-600 dark:text-royal-blue-400 !size-8 animate-bounce"
								/>
								<h3 class="text-secondary-foreground text-3xl font-bold">
									<GradientText variant="primary">І багато цікавішого!</GradientText>
								</h3>
								<Icon
									name="lucide:sparkles"
									class="text-christi-600 dark:text-christi-400 !size-8 animate-bounce"
									style="animation-delay: 0.5s"
								/>
							</div>
							<p class="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
								Ми завжди відкриті до нових викликів та нестандартних рішень. Маєте унікальну ідею?
								Давайте її обговоримо!
							</p>
						</div>

						<div class="mb-8 grid gap-6 md:grid-cols-3">
							<div
								v-for="feature in MORE_INTERESTING_FEATURES"
								:key="feature.title"
								class="group text-center"
							>
								<div
									:class="[
										`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r transition-all
										duration-500 group-hover:scale-110 group-hover:rotate-12`,
										feature.gradientFrom,
										feature.gradientTo,
									]"
								>
									<Icon
										:name="feature.icon"
										:class="[
											'!size-8 transition-transform duration-300 group-hover:scale-110',
											feature.textColor,
										]"
									/>
								</div>
								<h4
									:class="[
										'mb-2 font-semibold transition-colors duration-300',
										'text-secondary-foreground',
										feature.hoverColor,
									]"
								>
									{{ feature.title }}
								</h4>
								<p
									class="text-muted-foreground group-hover:text-secondary-foreground/80 text-sm transition-colors
										duration-300"
								>
									{{ feature.description }}
								</p>
							</div>
						</div>
					</div>
				</GradientSection>
			</div>
		</div>

		<Separator />

		<!-- Process Section -->
		<div class="container mx-auto px-4">
			<h2 class="mb-8 text-center text-3xl font-bold">
				<GradientText>Як ми працюємо</GradientText>
			</h2>
			<p class="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
				Прозорий процес від ідеї до готового продукту з регулярними оновленнями та контролем якості
			</p>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<ProcessStepCard
					v-for="(step, index) in PROCESS_STEPS"
					:key="`step-${index}`"
					:step="step"
					:index="index"
					:is-last="index === PROCESS_STEPS.length - 1"
				/>
			</div>
		</div>

		<Separator />

		<!-- Contact Section -->
		<GradientSection variant="secondary" size="lg" align="center" class="relative overflow-hidden">
			<TheBlob size="xl" custom-position="top-1/4 left-0" variant="primary" animation="pulse" />
			<TheBlob
				size="lg"
				custom-position="right-0 bottom-1/4"
				variant="secondary"
				animation="pulse"
				delay="2s"
			/>

			<div class="relative z-10 flex flex-col items-center">
				<h3 class="text-secondary-foreground mb-4 text-3xl font-bold">
					<GradientText>Готові почати ваш проект?</GradientText>
				</h3>
				<p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg leading-relaxed">
					Напишіть нам, розкажіть про свою ідею, і ми безкоштовно проконсультуємо вас та
					запропонуємо оптимальне рішення.
				</p>

				<ContactForm />

				<div class="text-muted-foreground my-8 text-center text-sm">або</div>

				<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href="mailto:sales@mindenit.org"
						class="group from-royal-blue-600 to-christi-600 hover:from-royal-blue-700 hover:to-christi-700 relative
							inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r px-8 py-3 font-semibold
							text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:scale-105
							hover:shadow-2xl"
					>
						<div
							class="absolute inset-0 translate-x-full -skew-x-12 transform bg-gradient-to-r from-white/20 to-transparent
								opacity-0 transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
						></div>
						<Icon
							name="lucide:mail"
							class="relative z-10 !size-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
						/>
						<span class="relative z-10">sales@mindenit.org</span>
					</a>
				</div>

				<div class="border-border/30 mt-8 border-t pt-8">
					<div
						class="text-muted-foreground/70 group flex items-center justify-center gap-2 text-sm"
					>
						<Icon
							name="lucide:lightbulb"
							class="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-yellow-500"
						/>
						<span class="group-hover:text-secondary-foreground transition-colors duration-300">
							<strong>Безкоштовна консультація:</strong> розкажемо про можливості, підберемо
							технології та оцінимо терміни
						</span>
					</div>
				</div>
			</div>
		</GradientSection>
	</div>
</template>

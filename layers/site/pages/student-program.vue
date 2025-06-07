<script setup lang="ts">
const pageTitle = `Mindenit Student Program`
const pageDescription =
	'Програма підтримки студентських ініціатив "Mindenit Student Program" - створюємо сприятливе середовище для реалізації студентських проектів з технічною підтримкою, менторством та організаційною допомогою.'

useSeoMeta({
	title: pageTitle,
	description: pageDescription,
	ogTitle: pageTitle,
	ogDescription: pageDescription,
})

defineOgImageComponent('Mindenit')
</script>

<template>
	<div class="container mx-auto max-w-4xl px-4 py-12">
		<PageHeader>
			<template #title> Mindenit Student Program </template>
			<template #meta>
				<p class="text-lg"><strong>Дата затвердження:</strong> 07.06.2025</p>
				<p class="text-lg">
					<strong>Організатори:</strong> Команда "Mindenit" у співпраці зі Студентським сенатом
					ХНУРЕ
				</p>
			</template>
		</PageHeader>

		<div
			class="bg-card/80 border-border/50 space-y-8 rounded-2xl border p-8 shadow-xl backdrop-blur-md md:p-12"
		>
			<section class="text-muted-foreground leading-relaxed">
				<p class="text-lg">
					Mindenit Student Program — це ініціатива, спрямована на підтримку та розвиток студентських
					проектів, започаткована 17 грудня 2024 року. Наша місія — створити сприятливе середовище,
					в якому студенти можуть отримати необхідні ресурси, менторську підтримку та практичний
					досвід для реалізації власних ідей, що сприятиме їхньому професійному зростанню та
					розвитку студентської спільноти.
				</p>
			</section>

			<section class="space-y-6">
				<h2
					class="text-secondary-foreground border-border/30 border-b pb-3 text-2xl font-bold md:text-3xl"
				>
					1. Загальні положення
				</h2>

				<div class="space-y-4">
					<div>
						<h3 class="text-secondary-foreground mb-2 text-lg font-semibold">1.1. Про програму</h3>
						<p class="text-muted-foreground leading-relaxed">
							Mindenit Student Program — це ініціатива, спрямована на підтримку та розвиток
							студентських проектів. Програма була започаткована 17 грудня 2024 року.
						</p>
					</div>

					<div>
						<h3 class="text-secondary-foreground mb-2 text-lg font-semibold">
							1.2. Місія програми
						</h3>
						<p class="text-muted-foreground leading-relaxed">
							Створити сприятливе середовище, в якому студенти можуть отримати необхідні ресурси,
							менторську підтримку та практичний досвід для реалізації власних ідей, що сприятиме
							їхньому професійному зростанню та розвитку студентської спільноти.
						</p>
					</div>

					<div>
						<h3 class="text-secondary-foreground mb-2 text-lg font-semibold">
							1.3. Формат підтримки
						</h3>
						<p class="text-muted-foreground leading-relaxed">
							Програма надає нефінансову підтримку, що включає технічні ресурси, консультації,
							менторство та організаційну допомогу.
						</p>
					</div>
				</div>
			</section>

			<section class="space-y-6">
				<h2
					class="text-secondary-foreground border-border/30 border-b pb-3 text-2xl font-bold md:text-3xl"
				>
					2. Напрями проектів та умови участі
				</h2>

				<div class="space-y-4">
					<div>
						<h3 class="text-secondary-foreground mb-2 text-lg font-semibold">
							2.1. Напрями проектів
						</h3>
						<p class="text-muted-foreground mb-3 leading-relaxed">
							До участі в Програмі приймаються проекти за двома основними напрямами:
						</p>
						<div class="ml-4 space-y-3">
							<div
								class="bg-royal-blue-50/50 dark:bg-royal-blue-950/20 border-royal-blue-200/50 dark:border-royal-blue-800/30
									rounded-xl border p-4"
							>
								<h4 class="text-secondary-foreground mb-2 font-semibold">Технологічні проекти</h4>
								<p class="text-muted-foreground text-sm leading-relaxed">
									Розробка веб-сайтів, мобільних додатків, чат-ботів, програмного забезпечення та
									інших ІТ-продуктів.
								</p>
							</div>
							<div
								class="bg-christi-50/50 dark:bg-christi-950/20 border-christi-200/50 dark:border-christi-800/30 rounded-xl
									border p-4"
							>
								<h4 class="text-secondary-foreground mb-2 font-semibold">
									Соціально-культурні проекти
								</h4>
								<p class="text-muted-foreground text-sm leading-relaxed">
									Ініціативи, спрямовані на покращення студентського життя, наприклад, створення
									освітніх платформ, організація заходів, заснування студентських медіа тощо.
								</p>
							</div>
						</div>
					</div>

					<div>
						<h3 class="text-secondary-foreground mb-2 text-lg font-semibold">
							2.2. Вимоги до учасників
						</h3>
						<div class="text-muted-foreground ml-4 space-y-2 leading-relaxed">
							<p>• До участі запрошуються студенти будь-якої форми навчання</p>
							<p>• Заявку можна подавати як індивідуально, так і у складі команди</p>
							<p>• Вимоги до розміру команди відсутні</p>
						</div>
					</div>

					<div>
						<h3 class="text-secondary-foreground mb-2 text-lg font-semibold">2.3. Ліцензування</h3>
						<p class="text-muted-foreground leading-relaxed">
							Усі проекти, що передбачають створення програмного коду, мають бути ліцензовані під
							відкритою ліцензією GNU General Public License v3.0 (GPLv3). Це забезпечує вільне
							розповсюдження та використання продукту спільнотою. При цьому авторські права на код
							повністю залишаються за його розробниками.
						</p>
					</div>
				</div>
			</section>

			<section class="space-y-6">
				<h2
					class="text-secondary-foreground border-border/30 border-b pb-3 text-2xl font-bold md:text-3xl"
				>
					3. Етапи проведення програми
				</h2>

				<div class="space-y-4">
					<div
						class="from-royal-blue-50 to-christi-50 dark:from-royal-blue-950/20 dark:to-christi-950/20 border-border/50
							rounded-xl border bg-gradient-to-r p-4"
					>
						<p class="text-secondary-foreground mb-2 font-semibold">
							Програма проводиться посезонно. Один сезон триває три календарні місяці.
						</p>
					</div>

					<div>
						<h3 class="text-secondary-foreground mb-3 text-lg font-semibold">
							Етап 1: Подання та розгляд заявок
						</h3>
						<div class="ml-4 space-y-3">
							<div>
								<h4 class="text-secondary-foreground mb-1 font-medium">3.1.1.</h4>
								<p class="text-muted-foreground leading-relaxed">
									Подання заявок здійснюється шляхом заповнення офіційної Google Форми, посилання на
									яку публікується в офіційних інформаційних каналах Програми.
								</p>
							</div>
							<div>
								<h4 class="text-secondary-foreground mb-1 font-medium">3.1.2.</h4>
								<p class="text-muted-foreground leading-relaxed">
									Прийом заявок для поточного сезону завершується 12-го числа кожного місяця за
									умови, що накопичилося 5 або більше прийнятих заявок. Якщо до 12-го числа 5 заявок
									не набралося, набір продовжується до наступного місяця.
								</p>
							</div>
							<div>
								<h4 class="text-secondary-foreground mb-1 font-medium">3.1.3.</h4>
								<p class="text-muted-foreground leading-relaxed">
									Заявки розглядаються організаторами протягом трьох робочих днів. Кожен заявник
									отримує офіційний лист із підтвердженням участі або обґрунтованою відмовою.
								</p>
							</div>
						</div>
					</div>

					<div>
						<h3 class="text-secondary-foreground mb-3 text-lg font-semibold">
							Етап 2: Конкурсний відбір
						</h3>
						<div class="ml-4 space-y-3">
							<div>
								<h4 class="text-secondary-foreground mb-1 font-medium">3.2.1.</h4>
								<p class="text-muted-foreground leading-relaxed">
									Після завершення прийому заявок формується фінальний список проектів-учасників.
								</p>
							</div>
							<div>
								<h4 class="text-secondary-foreground mb-1 font-medium">3.2.2.</h4>
								<p class="text-muted-foreground leading-relaxed">
									Учасникам надається один день на підготовку короткої презентації свого проекту в
									довільному форматі. Матеріали надсилаються на контактну адресу технічної підтримки
									@mindenit_support.
								</p>
							</div>
							<div>
								<h4 class="text-secondary-foreground mb-1 font-medium">3.2.3.</h4>
								<p class="text-muted-foreground leading-relaxed">
									Презентації публікуються в офіційному Telegram-каналі Mindenit для ознайомлення
									спільноти.
								</p>
							</div>
							<div>
								<h4 class="text-secondary-foreground mb-1 font-medium">3.2.4.</h4>
								<p class="text-muted-foreground mb-2 leading-relaxed">
									Проводиться відкрите онлайн-голосування в Telegram-каналі, що триває 6 днів.
									Голосування визначає рейтинг проектів:
								</p>
								<div class="bg-card/50 border-border/30 rounded-lg border p-3">
									<p class="text-muted-foreground mb-2 text-sm">
										<strong>1 голос = 1 рейтинговий бал</strong>
									</p>
									<p class="text-muted-foreground mb-2 text-sm">
										Мінімальні пороги для проходження:
									</p>
									<div class="text-muted-foreground space-y-1 text-sm">
										<p>• День 1: 3 голоси</p>
										<p>• День 2: 4 голоси</p>
										<p>• День 3: 5 голосів</p>
										<p>• День 4: 6 голосів</p>
										<p>• День 5: 10 голосів</p>
										<p>• День 6: голосування завершується о 21:00 за київським часом</p>
									</div>
								</div>
							</div>
							<div>
								<h4 class="text-secondary-foreground mb-1 font-medium">3.2.5.</h4>
								<p class="text-muted-foreground leading-relaxed">
									Три проекти, які набрали найбільшу сумарну кількість голосів за весь період і не
									вибули з голосування, стають переможцями відбору та проходять до наступного етапу.
								</p>
							</div>
						</div>
					</div>

					<div>
						<h3 class="text-secondary-foreground mb-3 text-lg font-semibold">
							Етап 3: Реалізація проектів (Сезон)
						</h3>
						<div class="ml-4 space-y-3">
							<div>
								<h4 class="text-secondary-foreground mb-1 font-medium">3.3.1.</h4>
								<p class="text-muted-foreground leading-relaxed">
									Сезон роботи над проектами розпочинається 1-го числа місяця, наступного за місяцем
									закриття реєстрації.
								</p>
							</div>
							<div>
								<h4 class="text-secondary-foreground mb-1 font-medium">3.3.2. Перші 10 днів:</h4>
								<div class="text-muted-foreground ml-4 space-y-1 text-sm">
									<p>
										• Організаційна зустріч команд з представниками Mindenit та Студентського сенату
									</p>
									<p>• Формування дорожньої карти (roadmap) проекту</p>
									<p>
										• Надання доступу до ресурсів: створення веб-сторінки проекту на домені
										[назва_проекту].mindenit.org
									</p>
								</div>
							</div>
							<div>
								<h4 class="text-secondary-foreground mb-1 font-medium">3.3.3.</h4>
								<p class="text-muted-foreground leading-relaxed">
									Команди працюють над реалізацією проекту згідно з дорожньою картою. Організатори
									надають менторську та технічну підтримку.
								</p>
							</div>
							<div>
								<h4 class="text-secondary-foreground mb-1 font-medium">3.3.4. Звітність:</h4>
								<p class="text-muted-foreground leading-relaxed">
									Наприкінці кожного місяця команди презентують результати своєї роботи. Якщо
									прогрес визнається незадовільним, команді може бути винесено попередження.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="space-y-6">
				<h2
					class="text-secondary-foreground border-border/30 border-b pb-3 text-2xl font-bold md:text-3xl"
				>
					4. Можливості та переваги для учасників
				</h2>

				<div class="space-y-4">
					<p class="text-muted-foreground leading-relaxed">
						У разі успішної реалізації та захисту проекту команда або індивідуальний учасник
						отримують:
					</p>

					<div class="grid gap-4 md:grid-cols-2">
						<div
							class="bg-royal-blue-50/50 dark:bg-royal-blue-950/20 border-royal-blue-200/50 dark:border-royal-blue-800/30
								rounded-xl border p-4"
						>
							<h4 class="text-secondary-foreground mb-2 font-semibold">4.1. Стипендіальні бали</h4>
							<p class="text-muted-foreground text-sm leading-relaxed">
								Додаткові бали до стипендіального рейтингу (кількість балів погоджується з
								адміністрацією університету та оголошується на початку кожного сезону).
							</p>
						</div>

						<div
							class="bg-christi-50/50 dark:bg-christi-950/20 border-christi-200/50 dark:border-christi-800/30 rounded-xl
								border p-4"
						>
							<h4 class="text-secondary-foreground mb-2 font-semibold">4.2. Власний домен</h4>
							<p class="text-muted-foreground text-sm leading-relaxed">
								Можливість зберегти за собою домен [назва_проекту].mindenit.org на постійній основі
								(умови обговорюються індивідуально).
							</p>
						</div>

						<div
							class="from-royal-blue-50/50 to-christi-50/50 dark:from-royal-blue-950/20 dark:to-christi-950/20
								border-border/50 rounded-xl border bg-gradient-to-br p-4 md:col-span-2"
						>
							<h4 class="text-secondary-foreground mb-2 font-semibold">4.3. Подальша співпраця</h4>
							<p class="text-muted-foreground text-sm leading-relaxed">
								Можливість подальшої співпраці з Mindenit та Студентським сенатом для представлення
								проекту адміністрації університету та отримання офіційної підтримки.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section class="space-y-6">
				<h2
					class="text-secondary-foreground border-border/30 border-b pb-3 text-2xl font-bold md:text-3xl"
				>
					5. Правила та регламент
				</h2>

				<div class="space-y-4">
					<div>
						<h3 class="text-secondary-foreground mb-2 text-lg font-semibold">
							5.1. Вихід з програми
						</h3>
						<p class="text-muted-foreground leading-relaxed">
							Учасник або команда можуть відкликати свій проект на будь-якому етапі без пояснення
							причин.
						</p>
					</div>

					<div>
						<h3 class="text-secondary-foreground mb-2 text-lg font-semibold">
							5.2. Дискваліфікація
						</h3>
						<p class="text-muted-foreground leading-relaxed">
							Проект може бути дискваліфікований рішенням організаторів за порушення правил
							Програми, академічної доброчесності або етичних норм. У разі дискваліфікації одного з
							трьох проектів-переможців, його місце займає наступний за рейтингом голосування
							проект.
						</p>
					</div>

					<div>
						<h3 class="text-secondary-foreground mb-2 text-lg font-semibold">
							5.3. Суддівство та апеляція
						</h3>
						<div class="ml-4 space-y-2">
							<p class="text-muted-foreground leading-relaxed">
								• Організатори (представники Mindenit та Студентського сенату) виступають у ролі
								суддів, які стежать за дотриманням правил.
							</p>
							<p class="text-muted-foreground leading-relaxed">
								• Рішення про дискваліфікацію може бути оскаржене шляхом подання апеляції на адресу
								@mindenit_support. Апеляція розглядається протягом трьох робочих днів.
							</p>
						</div>
					</div>

					<div>
						<h3 class="text-secondary-foreground mb-2 text-lg font-semibold">
							5.4. Зміни до правил
						</h3>
						<p class="text-muted-foreground leading-relaxed">
							Організатори залишають за собою право вносити зміни до цього положення, про що
							зобов'язуються завчасно повідомляти в офіційних інформаційних каналах.
						</p>
					</div>

					<div>
						<h3 class="text-secondary-foreground mb-2 text-lg font-semibold">
							5.5. Конфіденційність
						</h3>
						<p class="text-muted-foreground leading-relaxed">
							Дані, надані учасниками, використовуються виключно для цілей організації та проведення
							Програми і не передаються третім особам без згоди учасників.
						</p>
					</div>
				</div>
			</section>

			<footer class="border-border/30 mt-12 border-t pt-8">
				<GradientSection tag="div" variant="footer" size="sm" align="center" class="p-6">
					<p class="text-muted-foreground mb-6 text-sm italic">
						Положення затверджено командою "Mindenit" та Студентським сенатом ХНУРЕ та є чинним з
						дати затвердження.
					</p>

					<div class="flex flex-col items-center gap-4">
						<Button
							as="a"
							href="https://forms.gle/Qds47MWqJBTwsaCQ9"
							target="_blank"
							rel="noopener noreferrer"
							size="lg"
							class="from-royal-blue-600 to-christi-600 hover:from-royal-blue-700 hover:to-christi-700 rounded-xl
								bg-gradient-to-r px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300
								hover:shadow-xl"
						>
							<Icon name="lucide:external-link" class="mr-2 size-5" />
							Подати заявку на участь
						</Button>

						<div class="text-muted-foreground/70 flex items-center justify-center gap-2 text-xs">
							<Icon name="lucide:file-check" class="size-4" />
							<span>Офіційне положення програми Mindenit Student Program</span>
						</div>
					</div>
				</GradientSection>
			</footer>
		</div>
	</div>
</template>

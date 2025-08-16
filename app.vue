<script setup lang="ts">
import { Toaster } from '@/core/components/ui/sonner'
import 'vue-sonner/style.css'
</script>

<template>
	<NuxtRouteAnnouncer />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	<Toaster position="top-right" rich-colors :z-index="9999" />
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { balanceOptions, priceOptions } from "~/queries";

const { data: price } = useQuery(priceOptions());
const { data: balance } = useQuery(balanceOptions());
</script>

<template>
	<div>
		<p>Ціна на місяць: {{ price }}</p>
		<p>Баланс: {{ balance }}</p>
	</div>
</template>

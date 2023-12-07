<script setup lang="ts">
const route = useRoute();
const { quotableUrl } = useAppConfig();
const { data, error, pending } = await useFetch<Quote>(
  `${quotableUrl}/quotes/${route.params.id}`,
);
if (error && error.value) {
  throw createError(error.value);
}
addMeta("Quotomizer | Your Daily Dose of Inspiration", data.value?.content ?? "");

</script>

<template>
  <FullPageQuote v-if="data" :data="data" :pending="pending" />
</template>

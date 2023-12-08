<script setup lang="ts">
const { quotableUrl } = useAppConfig();
const { data, error, pending, refresh } = useLazyAsyncData<Quote>(() =>
  $fetch(`${quotableUrl}/quotes/random`).then(
    (value) => (value as Quote[])?.[0],
  ),
);
if (error && error.value) {
  throw createError(error.value);
}
addMeta("Quotomizer", "Your Daily Dose of Inspiration");
</script>

<template>
  <FullPageQuote v-model:data="data" :pending="pending" :refresh="refresh" />
</template>

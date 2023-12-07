<script setup lang="ts">
const { quotableUrl } = useAppConfig();
const { data, error, pending, refresh } = await useLazyFetch<Quote>(
  `${quotableUrl}/random`,
);
if (error && error.value) {
  throw createError(error.value);
}
addMeta("Quotomizer", "Your Daily Dose of Inspiration");

</script>

<template>
  <FullPageQuote v-if="data" :data="data" :pending="pending" :refresh="refresh" />
</template>

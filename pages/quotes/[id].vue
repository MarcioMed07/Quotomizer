<script setup lang="ts">
const route = useRoute();
const { quotableUrl } = useAppConfig();
const { data, error, pending } = await useLazyFetch<Quote>(
  `${quotableUrl}/quotes/${route.params.id}`,
);
if (error && error.value) {
  throw createError(error.value);
}
addMeta("Quotomizer | Your Daily Dose of Inspiration", data.value?.content ?? "");

</script>

<template>
    <FullPageQuote :data="data" :pending="pending" />
 
</template>

<script setup lang="ts">
const { quotableUrl } = useAppConfig();
const { data, error, pending, refresh } = await useLazyFetch<Quote>(
  `${quotableUrl}/random`,
);
if (data) {
  const url = useRequestURL();
  addMeta({
    title: "Quotomizer",
    description: "Your Daily Dose of Inspiration",
    url: url.origin,
  });
}
</script>

<template>
  <FullPageQuote :data="data" :pending="pending" :refresh="refresh" />
</template>

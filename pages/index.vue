<script setup lang="ts">
const {quotableUrl} = useAppConfig()
const { data, error, pending, refresh } = await useLazyFetch<Quote>(`${quotableUrl}/random`)
</script>

<template>
  <FullPageQuote :data="data" :pending="pending" :refresh="refresh" />
</template>
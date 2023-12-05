<script setup lang="ts">
const route = useRoute()
const {quotableUrl} = useAppConfig()
const { data, error, pending } = await useFetch<Quote>(`${quotableUrl}/quotes/${route.params.id}`)
if(error && error.value){
  throw createError(error.value);
}
</script>

<template>
  <FullPageQuote :data="data" :pending="pending"/>
</template>
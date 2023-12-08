<script setup lang="ts">
const { data, refresh, pending } = defineProps<{
  pending: boolean;
  data: Quote | null;
  refresh?: Function;
}>();
</script>

<template>
  <div class="content">
    <QuoteBox :data="data" :pending="pending" />
    <IconButton
      v-if="refresh"
      @click="refresh()"
      aria-label="get new quote"
      name="shuffle"
      size="xl"
      icon="i-fa6-solid-shuffle"
    />
  </div>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
}
</style>

<script setup lang="ts">
const { data, refresh, pending } = defineProps<{
  pending: boolean;
  data: Quote;
  refresh?: Function;
}>();
</script>

<template>
  <div class="container">
    <QuoteBox :data="data" :pending="pending" />
    <IconButton
      v-if="refresh"
      @click="refresh()"
      size="xl"
      name="i-fa6-solid-shuffle"
    />
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 2em);
  max-width: 700px;
}
</style>

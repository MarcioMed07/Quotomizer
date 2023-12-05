<template>
  <button class="button"><font-awesome-icon :icon="icon" /></button>
</template>

<script setup lang="ts">
defineProps<{
  icon: string,
}>()
</script>

<style>
.button {
  display: inline-flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #34D399;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: color-mix(in srgb, #34D399 90%, black);
}
</style>
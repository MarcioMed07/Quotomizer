<template>
  <button class="button">
    <font-awesome-icon :icon="icon"></font-awesome-icon>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>

<style>
.button {
  display: inline-flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #34d399;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: color-mix(in srgb, #34d399 90%, black);
}
</style>

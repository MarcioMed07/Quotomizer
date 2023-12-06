<template>
  <UButton :ui="{ rounded: 'rounded-full' }" :size="size ?? 'md'" square>
    <UIcon :name="name" dynamic />
  </UButton>
</template>

<script setup lang="ts">
import type { ButtonSize } from '@nuxt/ui/dist/runtime/types';

defineProps<{
  name: string;
  size?: ButtonSize
}>();
</script>

<style>

.button:hover {
  background-color: color-mix(in srgb, #34d399 90%, black);
}
</style>

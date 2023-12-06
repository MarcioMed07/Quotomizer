<template>
  <UButton
    :ui="{ rounded: 'rounded-full' }"
    :icon="name"
    :size="size ?? 'md'"
    :color="color ?? 'primary'"
    square
  />
</template>

<script setup lang="ts">
import type { ButtonColor, ButtonSize } from "@nuxt/ui/dist/runtime/types";

defineProps<{
  name: string;
  size?: ButtonSize;
  color?: ButtonColor;
}>();
</script>

<script setup lang="ts">
import type { ButtonColor, ButtonSize } from "@nuxt/ui/dist/runtime/types";

defineProps<{
  icon: string;
  size?: ButtonSize;
  color?: ButtonColor;
  props?: any;
}>();
</script>

<template>
  <UButton
    :ui="{ rounded: 'rounded-full' }"
    :icon="icon"
    :size="size ?? 'md'"
    :color="color ?? 'primary'"
    square
  />
</template>

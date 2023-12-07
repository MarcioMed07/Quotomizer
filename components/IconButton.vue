<template>
  <UButton
    {...props}
    :ui="{ rounded: 'rounded-full' }"
    :icon="icon"
    :size="size ?? 'md'"
    :color="color ?? 'primary'"
    square
  />
</template>

<script setup lang="ts">
import type { ButtonColor, ButtonSize } from "@nuxt/ui/dist/runtime/types";

defineProps<{
  icon: string;
  size?: ButtonSize;
  color?: ButtonColor;
  props?: any;
}>();
</script>

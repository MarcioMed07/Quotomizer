<script setup lang="ts">
const { error } = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="app">
    <AppHeader />
    <div class="content">
      <h1 class="text-5xl">{{ error?.statusCode }}</h1>
      <IconButton @click="handleError()" aria-label="go to home page" name="home" icon="i-fa6-solid-house" />
    </div>
    <AppFooter />
  </div>
</template>

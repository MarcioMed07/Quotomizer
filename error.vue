<script setup lang="ts">
const { error } = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <AppHeader/>
  <div class="container">
    <h1>{{ error?.statusCode }}</h1>
    <IconButton @click="handleError()" icon="home" />
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
  width: 100%;
  max-width: 700px;
}

</style>
<template>
  <div class="app p-4">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script>
useHead({
  title: "Quotomizer",
});
</script>

<style>
.app{
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100dvh;
}

</style>
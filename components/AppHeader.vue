<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <header class="header py-2 pb-8">
    <NuxtLink class="title" to="/">
      <img class="logo" src="/favicon.png" alt="Quotomizer logo" /><span
        >Quotomizer</span
      >
    </NuxtLink>
    <NuxtLink class="list-link" to="/quotes">List of quotes</NuxtLink>
    <IconButton
      @click="isDark = !isDark"
      size="xs"
      name="dark mode toggle"
      aria-label="dark mode toggle"
      role="switch"
      :aria-checked="isDark"
      :icon="isDark ? 'i-fa6-solid-moon' : 'i-fa6-solid-sun'"
    />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: last baseline;
  justify-content: center;
  gap: 4em;
}

.title {
  display: flex;
  text-decoration: none;
  font-family: "Pacifico";
  align-items: center;
  font-size: xx-large;
}

.logo {
  width: 50px;
  height: 50px;
}

.list-link {
  font-family: "Courgette";
  font-size: serif;
  font-weight: bold;
  text-decoration: none;
  font-style: italic;
}
</style>

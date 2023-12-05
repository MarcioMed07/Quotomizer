<template>
  <header class="header">
    <NuxtLink class="title" to="/">
      <img class="logo" src="/favicon.png" /><span>Quotomizer</span>
    </NuxtLink>
    <NuxtLink class="list-link" to="/quotes">List of quotes</NuxtLink>
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
  color: black;
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
  color: black;
  font-size: serif;
  font-weight: bold;
  text-decoration: none;
  font-style: italic;
}
</style>

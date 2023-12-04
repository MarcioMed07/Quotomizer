<script setup lang="ts">
export interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}
const { data, error, pending, refresh } = await useFetch<Quote>('https://api.quotable.io/random')
</script>

<template>
  <div class="container">
    <QuoteBox :data="data ?? undefined" :pending="pending" />
    <button class="refresh" @click="refresh()"><font-awesome-icon icon="shuffle" /></button>
  </div>
</template>

<style>

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: calc(100% - 2em);
  max-width: 700px;
}

.refresh {
  display: inline-flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #34D399;
  border: none;
  cursor: pointer;
}
.refresh:hover{
  background-color:color-mix(in srgb, #34D399 90%, black);
}
</style>
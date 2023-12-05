<script setup lang="ts">
  defineProps<{
    pending: boolean,
    data: Quote | null
  }>()
</script>

<template>
  <div>
    <div class="content">
      <div v-if="!pending">
        <h2 class="quote">{{ data?.content }}</h2>
        <span class="author">{{ data?.author }}</span>
      </div>
      <div v-else>
        <font-awesome-icon class="spinner" icon="spinner"/>
      </div>
    </div>
  </div>
</template>


<style>
.content {
  width: 100%;
  height: 100%;
  min-width: 360px;
  min-height: 180px;
  padding: 2em 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.875rem;
  border-radius: 0.625rem;
  background: #E5E7EB;
  box-sizing: border-box;
}

.quote {
  font-family: serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 1.5em;
  color: var(--default-gray-900, #111827);
  text-align: center;
}

.author {
  font-family: serif;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  font-size: 1em;
  color: var(--default-gray-900, #111827);
  text-align: center;
}

.spinner {
  height: 2em;
  animation: rotation 1.5s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

</style>

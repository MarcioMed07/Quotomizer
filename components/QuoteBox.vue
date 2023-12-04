<script setup lang="ts">
import { type Quote } from '~/pages/index.vue';
defineProps<{
  pending: boolean,
  data?: Quote
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
.content{
  border-radius: 0.625rem;
  background: #E5E7EB;
  min-height: 180px;
  padding: 2em 1.5em;
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.875rem;
  box-sizing: border-box;
}

.quote {
  color: var(--default-gray-900, #111827);
  text-align: center;
  font-family: IBM Plex Mono;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 1.5em;
}

.author {
  color: var(--default-gray-900, #111827);
  text-align: center;
  font-family: IBM Plex Mono;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  font-size: 1em;
}


.spinner {
    animation: rotation 1.5s infinite linear;
    height: 2em;
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

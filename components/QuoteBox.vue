<script setup lang="ts">
const { data, pending } = defineProps<{
  pending: boolean;
  data: Quote | null;
}>();
const { isLiked, toggleLike, copy, share } = useQuoteInteraction();
</script>

<template>
  <UContainer :ui="{ base: 'bg-gray-100 dark:bg-gray-800' }" class="content">
    <div v-if="!pending && data">
      <h2 class="quote text-2xl">{{ data?.content }}</h2>
      <span class="author italic">{{ data?.author }}</span>
      <IconButton
        icon="i-fa6-solid-heart"
        class="absolute top-4 left-4"
        @click="toggleLike(data._id)"
        name="like"
        size="xs"
        aria-label="toggle like quote"
        v-bind:color="isLiked(data._id) ? 'red' : 'white'"
        v-bind:aria-checked="isLiked(data._id)"
      />
      <UPopover
        class="absolute top-4 right-4"
        :popper="{ arrow: true, placement: 'top' }"
      >
        <IconButton
          @click="copy(data?.content, data?.author)"
          size="xs"
          icon="i-fa6-solid-copy"
          color="gray"
          aria-label="copy quote"
          name="copy"
        />
        <template #panel>
          <div class="p-4">
            <span>copied</span>
          </div>
        </template>
      </UPopover>
      <UPopover
        class="absolute bottom-4 right-4"
        :popper="{ arrow: true, placement: 'top' }"
      >
        <IconButton
          @click="share(data?._id)"
          size="lg"
          icon="i-fa6-solid-share"
          aria-label="share quote"
          name="share"
        />
        <template #panel>
          <div class="p-4">
            <span>copied</span>
          </div>
        </template>
      </UPopover>
    </div>
    <UIcon class="spinner" name="i-fa6-solid-spinner" v-else />
  </UContainer>
</template>

<style scoped>
.content {
  width: 100%;
  max-width: 720px;
  min-height: 180px;
  max-height: 300px;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0.625rem;
  box-sizing: border-box;
  position: relative;
  gap: 1.5rem;
  font-family: serif;
}

.spinner {
  font-size: 2em;
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

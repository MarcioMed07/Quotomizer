<script setup lang="ts">
const { data, pending } = defineProps<{
  pending: boolean;
  data: Quote;
}>();
const url = useRequestURL();
const showCopyLabel = ref(false);
const showShareLabel = ref(false);
const copy = (quote: string, author: string) => {
  copyQuote(quote, author);
  showCopyLabel.value = true;
  setTimeout(() => (showCopyLabel.value = false), 1000);
};

const share = (id: string) => {
  if (navigator.share) {
    navigator.share({
      url: `${url.origin}/quotes/${id}`,
    });
  } else {
    navigator.clipboard.writeText(`${url.origin}/quotes/${id}`);
    showShareLabel.value = true;
    setTimeout(() => (showShareLabel.value = false), 1000);
  }
};
</script>

<template>
  <UContainer
    :ui="{ base: 'bg-gray-100 dark:bg-gray-800' }"
    class="content"
    v-if="!pending"
  >
    <h2 class="quote text-2xl">{{ data?.content }}</h2>
    <span class="author italic">{{ data?.author }}</span>
    <UPopover
      class="absolute top-4 right-4"
      :popper="{ arrow: true, placement: 'top' }"
    >
      <IconButton
        @click="copy(data.content, data.author)"
        size="xs"
        name="i-fa6-solid-copy"
        color="gray"
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
      <IconButton @click="share(data._id)" size="lg" name="i-fa6-solid-share" />
      <template #panel>
        <div class="p-4">
          <span>copied</span>
        </div>
      </template>
    </UPopover>
  </UContainer>
  <UContainer
    :ui="{ base: 'bg-gray-100 dark:bg-gray-800' }"
    class="content"
    v-else
  >
    <UIcon class="spinner" name="i-fa6-solid-spinner" />
  </UContainer>
</template>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  min-height: 180px;
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

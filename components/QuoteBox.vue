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
  <UContainer :ui="{ base: 'bg-gray-100 dark:bg-gray-800' }" class="content" v-if="!pending">
    <div class="copy" @click="copy(data.content, data.author)">
      <UIcon name="i-fa6-regular-copy" dynamic />
      <label v-if="showCopyLabel">copied</label>
    </div>
    <h2 class="quote">{{ data?.content }}</h2>
    <span class="author">{{ data?.author }}</span>
    <div class="share">
      <IconButton @click="share(data._id)" size="lg" name="i-fa6-solid-share" />
      <label v-if="showShareLabel">copied</label>
    </div>
  </UContainer>
  <UContainer :ui="{ base: 'bg-gray-100 dark:bg-gray-800' }" class="content" v-else>
    <UIcon class="spinner" name="i-fa6-solid-spinner" dynamic />
  </UContainer>
</template>

<style scoped>
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
  box-sizing: border-box;
  position: relative;
}

.quote {
  font-family: serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 1.5em;
  text-align: center;
  font-family: "Courgette";
}

.author {
  font-family: serif;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  font-size: 1em;
  text-align: center;
}

.share {
  position: absolute;
  right: 1em;
  bottom: 1em;
}

.copy {
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  font-size: 1em;
  border-radius: 100%;
  padding: 0.5em;
  cursor: pointer;
  box-sizing: content-box;
  width: 1em;
  height: 1em;
}

.copy .icon {
  display: block;
}

.copy:hover {
  background-color: #00000020;
}

.share label,
.copy label {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translate(-50%);
  background: #00000050;
  padding: 0.5em;
  color: white;
  border-radius: 10%;
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

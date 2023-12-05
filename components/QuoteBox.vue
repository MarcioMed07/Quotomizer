<script setup lang="ts">
const { data, pending } = defineProps<{
  pending: boolean;
  data: Quote;
}>();
const url = useRequestURL();
const showCopyLabel = ref(false);
const showShareLabel = ref(false);
const copy = () => {
  copyQuote(data.content, data.author);
  showCopyLabel.value = true;
  setTimeout(() => (showCopyLabel.value = false), 1000);
};

const share = () => {
  if (navigator.share) {
    navigator.share({
      url: `${url.origin}/quotes/${data._id}`,
    });
  } else {
    navigator.clipboard.writeText(`${url.origin}/quotes/${data._id}`);
    showShareLabel.value = true;
    setTimeout(() => (showShareLabel.value = false), 1000);
  }
};
</script>

<template>
  <div>
    <div class="content" v-if="!pending">
      <div class="copy">
        <font-awesome-icon @click="copy" icon="copy" />
        <label v-if="showCopyLabel">copied</label>
      </div>
      <h2 class="quote">{{ data?.content }}</h2>
      <span class="author">{{ data?.author }}</span>
      <div class="share">
        <IconButton @click="share" icon="share" />
        <label v-if="showShareLabel">copied</label>
      </div>
    </div>
    <div class="content" v-else>
      <font-awesome-icon class="spinner" icon="spinner" />
    </div>
  </div>
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
  background: #e5e7eb;
  box-sizing: border-box;
  position: relative;
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

.share {
  position: absolute;
  right: 1em;
  bottom: 1em;
}

.copy {
  position: absolute;
  right: 1em;
  top: 1em;
}

.copy svg {
  width: 1em;
  height: 1em;
  color: grey;
  border-radius: 100%;
  padding: 0.5em;
  cursor: pointer;
}

.copy svg:hover {
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

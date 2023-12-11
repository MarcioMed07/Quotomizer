<script setup lang="ts">
const { quotableUrl } = useAppConfig();
const page = ref(1);
const sort = ref<{ column: string; direction: "asc" | "desc" }>({
  column: "content",
  direction: "asc",
});

const totalCount = ref<number>(0);

const {
  data: quotes,
  pending,
  error,
  refresh,
} = await useLazyAsyncData<QuoteList>(
  "quotes",
  () =>
    $fetch(`${quotableUrl}/quotes`, {
      params: {
        page: page.value,
        sortBy: sort.value.column,
        order: sort.value.direction,
        limit: 10,
      },
    }).then((value: any) => {
      totalCount.value = value.totalCount ?? 0
      return value as QuoteList
    }),
  {
    watch: [page],
  },
);

totalCount.value = quotes.value?.totalCount ?? 0

if (error && error.value) {
  throw createError(error.value);
}

addMeta("Quotomizer | List of Quotes", "Your Daily Dose of Inspiration")

const columns: {
  [key: string]: any;
  key: string;
  sortable?: boolean | undefined;
  direction?: "asc" | "desc" | undefined;
  class?: string | undefined;
}[] = [
    {
      key: 'heart'
    },
    {
      label: "Quote",
      key: "content",
      sortable: true,
      direction: "asc",
    },
    {
      label: "Author",
      key: "author",
      sortable: true,
    },
  ];

const { isLiked } = useQuoteInteraction()
</script>

<template>
  <div>
    <UTable @select="(row: Quote) => navigateTo(`/quotes/${row._id}`)" v-model:sort="sort" @update:sort="refresh"
      :rows="quotes?.results" :columns="columns" :loading="pending"
      :loading-state="{ icon: 'i-fa6-solid-spinner', label: '' }">
      <template #content-data="{ row }">
        <span class="whitespace-break-spaces font-serif">{{ row.content }}</span>
      </template>
      <template #author-data="{ row }">
        <span class="italic font-serif">{{ row.author }}</span>
      </template>
      <template #heart-data="{ row }">
        <UIcon size="2xs" name="i-fa6-solid-heart" :class="isLiked(row._id) ? 'text-red-500' : 'text-gray-500'" />
      </template>
    </UTable>
    <UPagination class="mt-4 place-content-center" v-model="page" show-first show-last v-model:total="totalCount" />
  </div>
</template>

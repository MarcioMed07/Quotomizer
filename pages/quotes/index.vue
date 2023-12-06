<script setup lang="ts">
const { quotableUrl } = useAppConfig();
const page = ref(1);
const totalPages = ref(1);
const count = ref(0);
const totalCount = ref(0);

const sort = ref<{ column: string; direction: "asc" | "desc" }>({
  column: "content",
  direction: "asc",
});

const {
  data: quotes,
  pending,
  refresh,
} = await useAsyncData<QuoteList>(
  "quotes",
  () =>
    $fetch(`${quotableUrl}/quotes`, {
      params: {
        page: page.value,
        sortBy: sort.value.column,
        order: sort.value.direction,
        limit: 10,
      },
    }),
  {
    watch: [page],
  },
);
totalPages.value = quotes.value?.totalPages ?? 1;
count.value = quotes.value?.count ?? 0;
totalCount.value = quotes.value?.totalCount ?? 0;

const columns: {
  [key: string]: any;
  key: string;
  sortable?: boolean | undefined;
  direction?: "asc" | "desc" | undefined;
  class?: string | undefined;
}[] = [
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

const onSelect = (row: Quote) => {
  navigateTo(`/quotes/${row._id}`);
};
</script>

<template>
  <UTable
    @select="onSelect"
    v-model:sort="sort"
    @update:sort="refresh"
    :rows="quotes?.results"
    :columns="columns"
    :loading="pending"
    :loading-state="{ icon: 'i-fa6-solid-spinner', label: '' }"
  >
    <template #content-data="{ row }">
      <span class="whitespace-break-spaces font-serif">{{ row.content }}</span>
    </template>
    <template #author-data="{ row }">
      <span class="italic font-serif">{{ row.author }}</span>
    </template>
  </UTable>
  <UPagination
    class="mt-4 place-content-center"
    v-model="page"
    show-first
    show-last
    :total="totalCount"
  />
</template>

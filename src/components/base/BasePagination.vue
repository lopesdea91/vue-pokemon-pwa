<script setup lang="ts">
import { toRefs } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import homeStore from "../../pages/homePage/state";

const { total, page, limit } = toRefs(homeStore.state);

const totalPage = computed(() => Math.ceil(total.value / limit.value));

const items = computed(() => {
  const qtyBtn = 10;

  const numMaxSplice = totalPage.value - qtyBtn / 2;
  const numMinSplice = qtyBtn / 2;
  let numSplice = 1;

  if (page.value > numMinSplice) {
    numSplice = numMinSplice;
  }
  //   n = page.value < limitSplice;
  //   const nSplice = n ? page.value : limitSplice;

  return Array(totalPage.value)
    .fill(1)
    .map((_, i) => {
      const numPage = i + 1;
      const active = numPage === page.value;

      return {
        page: numPage,
        active,
      };
    })
    .splice(numSplice - 1, qtyBtn);
});
</script>

<template>
  <nav class="paginate-container">
    <ul class="paginate">
      <li
        class="paginate-item"
        @click="homeStore.actions.handlePagination(page - 1)"
      >
        <Icon icon="fa-solids fa-backward" />
      </li>

      <li
        v-for="item in items"
        :key="item.page"
        class="paginate-item"
        :class="{ current: item.active }"
        @click="homeStore.actions.handlePagination(item.page)"
      >
        {{ item.page }}
      </li>

      <li
        class="paginate-item"
        @click="homeStore.actions.handlePagination(page + 1)"
      >
        <Icon icon="fa-solids fa-forward" />
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.paginate-container {
  @apply flex mb-5;
}
.paginate {
  @apply mx-auto inline-flex flex-wrap -space-x-px;
}
.paginate-item {
  @apply cursor-pointer py-2 px-3 leading-tight text-sm text-gray-500 bg-white border border-gray-300 duration-200 flex items-center justify-center;

  &.current,
  &:hover {
    @apply bg-gray-100 text-gray-500 dark:border-gray-500 dark:bg-gray-500 dark:text-white;
  }
}
</style>
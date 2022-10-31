<script  setup lang="ts">
import homeStore from "./state";
import BasePagination from "@/components/base/BasePagination.vue";
import BaseInputSearch from "@/components/base/BaseInputSearch.vue";
import PokemonCard from "@/components/PokemonCard.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

onMounted(async () => {
  await homeStore.actions.openPageOnce();
});

const { push } = useRouter();
</script>

<template>
  <h1 class="title">Pokédex</h1>

  <BaseInputSearch />

  <BasePagination />

  <div class="items">
    <PokemonCard
      v-for="item in homeStore.state.items"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :imageUrl="item.imageUrl"
      :type="item.type"
      @click="
        () =>
          push({
            name: 'pokemonId',
            params: {
              id: item.id,
            },
          })
      "
    />
  </div>
</template>

<style lang="scss" scoped>
.title {
  @apply text-6xl text-gray-800 mb-4 md:mb-6 md:mt-6 text-center;
}
.items {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 mb-4;
}
</style>
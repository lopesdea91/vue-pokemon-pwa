<script setup lang="ts">
import PokemonDetails from "@/components/PokemonDetails.vue";
import { onMounted, onUnmounted, toRefs } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import pokemonIdStore from "./state";

const route = useRoute();
const { back } = useRouter();

const { load, pokemon } = toRefs(pokemonIdStore.state);

onMounted(() => {
  const id: string = Array.isArray(route.params.id)
    ? route.params.id[0]
    : route.params.id;

  pokemonIdStore.actions.fetchId(id);
});

onUnmounted(() => {
  pokemonIdStore.actions.reset();
});
</script>

<template>
  <div class="header">
    <Icon icon="fa-solid fa-arrow-left" class="icon" @click="() => back()" />
    <h1 class="title">{{ pokemon.name || "..." }}</h1>
  </div>

  <!-- <pre>{{ pokemon }}</pre> -->

  <PokemonDetails
    :load="load"
    :id="pokemon.id"
    :name="pokemon.name"
    :imageUrl="pokemon.imageUrl"
    :type="pokemon.type"
    :types="pokemon.types"
    :abilities="pokemon.abilities"
    :height="pokemon.height"
    :weight="pokemon.weight"
  />
</template>

<style lang="scss" scoped>
.header {
  @apply text-gray-800 mb-4 md:mb-6 md:mt-6 flex items-center border-b pb-2;

  .icon {
    @apply text-2xl cursor-pointer;
  }
  .title {
    @apply w-full text-4xl text-center uppercase;
  }
}
</style>
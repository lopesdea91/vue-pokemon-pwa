<script setup lang="ts">
import { toRefs } from "@vue/reactivity";
import homeStore from "../pages/homePage/state";

const { load } = toRefs(homeStore.state);

defineProps({
  id: { type: Number },
  name: { type: String },
  imageUrl: { type: String },
  type: { type: String, default: "" },
});
</script>

<template>
  <div
    class="pokemon-card"
    :class="([`bg-pokemon-${type}-10`, `border-pokemon-${type}-50`], { load })"
  >
    <div class="pokemon-card-image">
      <img class="img" :src="imageUrl" />
    </div>
    <h2 class="pokemon-card-name" :class="{ load }">
      {{ load ? "..." : name }}
    </h2>
    <span class="pokemon-card-id">#{{ id }}</span>
  </div>
</template>

<style lang="scss" scoped>
.load {
  @apply animate-pulse;
}
.pokemon-card {
  @apply text-center py-2 cursor-pointer rounded-lg border-2 shadow-md hover:shadow-lg hover:-rotate-2;

  &:hover {
    .img {
      @apply scale-[1.15] rotate-2;
    }
  }
}
.pokemon-card-image {
  @apply h-24 flex;

  .img {
    @apply block m-auto h-full;
  }
}
.pokemon-card-name {
  @apply h-10 flex items-center justify-center leading-4 font-bold text-lg text-gray-800;
}
.pokemon-card-id {
  @apply h-12 font-light text-sm text-gray-400;
}
.pokemon-card,
.img {
  @apply duration-200;
}
</style>
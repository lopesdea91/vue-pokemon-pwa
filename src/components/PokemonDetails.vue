<script setup lang="ts">
import { PokemonType, PokemonAbility } from "../types";
defineProps<{
  load: Boolean;
  id: Number;
  name: string;
  imageUrl: string;
  type: string;
  types: PokemonType;
  abilities: PokemonAbility;
  height: Number;
  weight: Number;
}>();
</script>

<template>
  <div class="pokemon-details" :class="{ load }">
    <div
      class="image"
      :class="`bg-pokemon-${type}-10 border-pokemon-${type}-50`"
    >
      <img v-if="imageUrl" class="img" :src="imageUrl" />
      <Icon v-else class="icon" icon="fa-solids fa-spinner" />
    </div>

    <div class="details" :class="[`bg-pokemon-${type}-10`]">
      <section class="info">
        <h2 class="name">{{ name || "..." }}</h2>
        <span class="id"> #{{ id }} </span>
      </section>

      <section>
        <p>Altura: {{ height || "..." }}</p>
      </section>

      <section>
        <p>Peso: {{ weight || "..." }}</p>
      </section>

      <section>
        <h3>Habilidade(s)</h3>
        <ul class="abilities">
          <li
            v-for="el in abilities"
            :key="el.name"
            class="ability"
            :class="[`bg-pokemon-${type}-80`, `border-pokemon-${type}-100`]"
          >
            {{ el.name }}
          </li>
        </ul>
      </section>

      <section>
        <h3>Tipo</h3>
        <ul class="types">
          <li
            v-for="el in types"
            :key="el.name"
            class="type"
            :class="[`bg-pokemon-${type}-80`, `border-pokemon-${type}-100`]"
          >
            {{ el.name }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pokemon-details {
  @apply flex flex-col gap-4;

  &.load {
    .image {
      @apply border-stone-200;
    }
    .image,
    .info {
      @apply bg-stone-100;
    }
  }
}
.image {
  @apply h-80 lg:h-96 rounded-lg border-2 flex;

  & > * {
    @apply m-auto;
  }
  .icon {
    @apply text-3xl animate-spin;
  }
  .img {
    @apply block h-full mx-auto;
  }
}
.details {
  @apply grow p-2;

  section {
    @apply mb-3;
  }

  .info {
    @apply flex items-center justify-between pb-2 mb-3 border-b-2;

    .name {
      @apply font-bold text-2xl text-gray-800;
    }
    .id {
      @apply text-sm text-gray-400;
    }
  }

  .types,
  .abilities {
    @apply flex gap-2;

    .type,
    .ability {
      @apply text-white text-sm text-center rounded px-2 py-1;
    }
  }

  h3 {
    @apply mb-2;
  }
}
</style>
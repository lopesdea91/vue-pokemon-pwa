<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="input">
        <label for="input-search">
          <Icon icon="fa-solid fa-magnifying-glass" />
        </label>

        <input id="input-search" type="search" placeholder="digite um nome" />
      </div>

      <button class="btn">
        <Icon icon="fa-solid fa-bars" />
      </button>
    </div>
    <div class="options">
      <h3>Fields</h3>
      campos
    </div>
    <!-- <input type="text" /> -->
  </div>
</template>

<style lang="scss" scoped>
.container {
  @apply max-w-md mx-auto mb-3;
}
.header {
  @apply flex items-center gap-1.5;

  .input {
    @apply w-full h-10 flex items-center gap-2 bg-gray-200 p-2 text-gray-800 rounded-md;

    label {
      @apply cursor-pointer;
    }

    input {
      @apply w-full bg-transparent text-sm outline-none;
    }
  }
  .btn {
    @apply w-14 h-10 bg-gray-500 p-1 rounded-md text-white;
  }
}
.options {
  @apply hidden;
}
</style>
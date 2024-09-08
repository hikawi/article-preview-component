<script setup lang="ts">
import { ref } from "vue";
import michelle from "./assets/avatar-michelle.jpg";
import IconShare from "./icons/IconShare.vue";

const active = ref(false);
</script>

<template>
  <div
    class="relative flex h-16 w-full flex-row items-center justify-between px-10 pb-6"
  >
    <div class="flex h-full flex-row items-center justify-center gap-4">
      <img
        :src="michelle.src"
        alt="Avatar of the author, Michelle"
        :width="40"
        :height="40"
        class="rounded-full object-contain"
      />
      <div class="flex h-full flex-col items-start justify-center">
        <p class="text-dark-gray-blue text-sm font-bold">Michelle Appleton</p>
        <p class="text-desat-dark-blue text-sm font-medium">28 Jun 2020</p>
      </div>
    </div>
    <div
      class="flex size-8 cursor-pointer items-center justify-center rounded-full"
      :class="{ 'bg-desat-dark-blue': active, 'bg-light-gray-blue': !active }"
      @click="active = !active"
    >
      <IconShare
        :class="{ 'fill-white': active, 'fill-desat-dark-blue': !active }"
      />
    </div>
  </div>
</template>

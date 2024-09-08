<script setup lang="ts">
import { ref } from "vue";
import michelle from "./assets/avatar-michelle.jpg";
import IconShare from "./icons/IconShare.vue";
import MobileShareView from "./MobileShareView.vue";

const active = ref(false);
</script>

<template>
  <div class="relative mt-2 flex w-full flex-row items-center justify-between">
    <div class="flex h-full flex-row gap-4">
      <img
        :src="michelle.src"
        alt="Avatar of the author, Michelle"
        :width="40"
        :height="40"
        class="rounded-full"
      />
      <div class="flex h-full flex-col">
        <p class="text-dark-gray-blue text-sm font-bold">Michelle Appleton</p>
        <p class="text-desat-dark-blue text-sm font-medium">28 Jun 2020</p>
      </div>
    </div>
    <button
      class="bg-light-gray-blue flex size-8 items-center justify-center rounded-full"
      @click="active = !active"
    >
      <IconShare
        :class="{ 'fill-white': active, 'fill-desat-dark-blue': !active }"
      />
    </button>

    <MobileShareView v-show="active" @update="active = false" />
  </div>
</template>

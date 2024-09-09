<script setup lang="ts">
/*
What did I do in this file bruh
I don't know how to deal with this kind of design.
*/

import { onBeforeMount, onUnmounted, ref } from "vue";
import michelle from "./assets/avatar-michelle.jpg";
import IconShare from "./icons/IconShare.vue";
import ShareView from "./ShareView.vue";

const active = ref(false);
const isMobile = ref(false);

function checkMobile() {
  isMobile.value = window.innerWidth <= 1024;
}

onBeforeMount(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
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
        <p class="text-sm font-bold text-dark-gray-blue">Michelle Appleton</p>
        <p class="text-sm font-medium text-desat-dark-blue">28 Jun 2020</p>
      </div>
    </div>
    <div
      class="absolute right-6 z-20 flex size-8 cursor-pointer items-center justify-center rounded-full"
      :class="{
        'bg-desat-dark-blue': active,
        'bg-light-gray-blue': !active,
        'top-4': isMobile && active,
      }"
      @click="active = !active"
    >
      <IconShare
        :class="{ 'fill-white': active, 'fill-desat-dark-blue': !active }"
      />

      <!-- This is the desktop view, where the share tab is above the share button. -->
      <ShareView v-if="!isMobile" v-show="active" />
    </div>

    <!-- This is the mobile view, the share tab covers the author tab. -->
    <ShareView v-if="isMobile" v-show="active" />
  </div>
</template>

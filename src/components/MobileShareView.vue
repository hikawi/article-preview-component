<script setup lang="ts">
import IconFacebook from "./icons/IconFacebook.vue";
import IconPinterest from "./icons/IconPinterest.vue";
import IconTwitter from "./icons/IconTwitter.vue";

defineEmits<{
  update: [];
}>();
</script>

<template>
  <div
    class="bg-dark-gray-blue animate-up absolute flex h-full w-full flex-row p-4 md:hidden"
  >
    <div class="flex h-full flex-row gap-4">
      <p class="text-desat-dark-blue text-sm uppercase tracking-[0.3rem]">
        Share
      </p>
      <IconFacebook />
      <IconPinterest />
      <IconTwitter />
    </div>
    <button
      class="bg-light-gray-blue flex size-8 items-center justify-center rounded-full"
      @click="$emit('update')"
    >
      <IconShare class="fill-white" />
    </button>
  </div>
</template>

<style lang="css" scoped>
.animate-up {
  animation: slide-up 0.5s ease;
}

.animate-down {
  animation: slide-up 0.5s ease reverse;
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

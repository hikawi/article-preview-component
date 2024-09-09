<script setup lang="ts">
import IconFacebook from "./icons/IconFacebook.vue";
import IconPinterest from "./icons/IconPinterest.vue";
import IconShare from "./icons/IconShare.vue";
import IconTwitter from "./icons/IconTwitter.vue";

defineProps<{
  mobile: boolean;
}>();

const emits = defineEmits<{
  update: [];
}>();

function emitUpdate() {
  console.log("Emitted");
  emits("update");
}
</script>

<template>
  <div
    v-if="mobile"
    class="bg-dark-gray-blue absolute left-0 top-0 z-10 flex h-full w-full flex-row items-center justify-start gap-4 px-10 py-6"
  >
    <p class="text-gray-blue text-sm uppercase tracking-[0.3rem]">Share</p>
    <IconFacebook />
    <IconPinterest />
    <IconTwitter />
  </div>
  <div
    v-else
    class="bg-dark-gray-blue absolute left-0 top-0 rounded-lg px-4 py-2 text-white"
  >
    Desktop
  </div>
</template>

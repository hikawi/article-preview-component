<script setup lang="ts">
import IconFacebook from "./icons/IconFacebook.vue";
import IconPinterest from "./icons/IconPinterest.vue";
import IconTwitter from "./icons/IconTwitter.vue";
</script>

<template>
  <!-- Tailwind abuse lmao what is this -->
  <!-- The idea is:
   - On mobile: it's a full-width bar replacing the author's info, the share button is in AuthorDisplay.vue with z-20.
   - On desktop: it's a text bubbl (with the little arrow pointing, hence the :after directives) without the share button.
  -->
  <div
    class="absolute left-0 top-0 z-10 flex h-full w-full flex-row items-center justify-start gap-4 bg-dark-gray-blue px-10 py-6 lg:left-1/2 lg:h-fit lg:w-fit lg:-translate-x-1/2 lg:-translate-y-20 lg:justify-center lg:rounded-lg lg:px-6 lg:py-4 lg:after:absolute lg:after:bottom-0 lg:after:left-1/2 lg:after:-mb-[16px] lg:after:-ml-[16px] lg:after:size-0 lg:after:border-[16px] lg:after:border-b-0 lg:after:border-transparent lg:after:border-t-dark-gray-blue lg:after:content-['']"
  >
    <p class="text-sm uppercase tracking-[0.3rem] text-gray-blue">Share</p>
    <IconFacebook />
    <IconPinterest />
    <IconTwitter />
  </div>
</template>

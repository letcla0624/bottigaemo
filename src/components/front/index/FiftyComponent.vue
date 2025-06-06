<script setup>
import { reactive } from "vue";

import { useChangeLangStore } from "@/stores/changeLangStore.js";
import { storeToRefs } from "pinia";

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const data = [
  {
    title: "outfit",
    subTitle: "穿搭系列",
    subEnTitle: "Wearing series",
    bgURL:
      "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678690207647.jpg",
    link: "/model-fit",
  },
  {
    title: "girl's",
    subTitle: "探索產品",
    subEnTitle: "Explore products",
    bgURL:
      "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678689602626.jpg",
    link: "/products",
  },
];

const items = reactive(data);
</script>

<template>
  <div class="h-screen text-center lg:flex justify-center items-start">
    <div
      v-for="item in items"
      :key="item.title"
      class="h-1/2 lg:w-1/2 lg:h-full bg-white transition-all duration-300 hover:lg:w-11/12"
      :style="{
        background: `url(${item.bgURL}) 50% 50% no-repeat`,
      }"
    >
      <RouterLink
        :to="item.link"
        class="w-full h-full flex flex-col justify-center items-center"
      >
        <h2
          class="text-5xl md:text-7xl font-bodoni uppercase tracking-wider text-white mix-blend-difference"
        >
          {{ item.title }}
        </h2>
        <p class="text-base tracking-widest hoverBar mt-4">
          <template v-if="localLang === 'zh_TW'">
            {{ item.subTitle }}
          </template>
          <template v-else-if="localLang === 'en'">
            <span class="uppercase">{{ item.subEnTitle }}</span>
          </template>
        </p>
      </RouterLink>
    </div>
  </div>
</template>

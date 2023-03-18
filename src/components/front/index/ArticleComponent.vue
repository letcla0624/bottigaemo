<script setup>
import { onMounted } from "vue";
import { PlusSmallIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

import { storeToRefs } from "pinia";
import { useFrontArticlesStore } from "@/stores/frontArticlesStore.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia article
const frontArticlesStore = useFrontArticlesStore();
const { newArticles } = storeToRefs(frontArticlesStore);
const { getArticles } = frontArticlesStore;

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

onMounted(() => {
  getArticles();
});
</script>
<template>
  <div class="max-w-[1280px] mx-auto">
    <div
      v-for="(article, idx) in newArticles.arr"
      :key="article.id"
      class="grid md:grid-cols-2 items-center mb-20"
    >
      <div
        class="md:w-[80%] mx-auto"
        :class="{ 'md:order-last': (idx + 1) % 2 === 0 }"
      >
        <div class="relative px-[2em]">
          <div class="w-full overflow-hidden aspect-ratio-9-16">
            <router-link :to="`/article-detail/${article.id}`">
              <img
                :src="article.imageUrl"
                alt="article.title"
                class="transform duration-300 hover:scale-125 object-cover"
              />
            </router-link>
          </div>

          <div
            class="absolute top-0 bottom-0 flex flex-col justify-between"
            :class="[
              { 'left-0': (idx + 1) % 2 !== 0 },
              { 'right-0': (idx + 1) % 2 === 0 },
              { 'items-start': (idx + 1) % 2 !== 0 },
              { 'items-end': (idx + 1) % 2 === 0 },
            ]"
          >
            <p
              class="uppercase origin-top-left rotate-90 ml-6"
              :class="{ 'translate-x-full': idx % 2 !== 0 }"
            >
              {{ article.author }}
            </p>
            <p class="rotate-90 date pl-3">{{ `0${idx + 1}` }}</p>
          </div>
        </div>
      </div>
      <div class="w-[90%] md:w-[80%] text-left mx-auto mt-8 md:mt-0">
        <h3 class="text-xl lg:text-3xl line-clamp-2">
          <template v-if="localLang === 'zh_TW'">
            {{ article.title }}
          </template>
          <template v-else-if="localLang === 'en'">
            {{ article.enTitle }}
          </template>
        </h3>
        <p class="text-gray-500 leading-loose line-clamp-3 mt-7 mb-5">
          <template v-if="localLang === 'zh_TW'">
            {{ article.description }}
          </template>
          <template v-else-if="localLang === 'en'">
            {{ article.enDescription }}
          </template>
        </p>
        <router-link
          :to="`/article-detail/${article.id}`"
          class="text-gray-600 flex items-center w-fit hoverBar py-1"
        >
          <PlusSmallIcon class="w-4 h-4 inline stroke-2 mr-1" />
          {{ $t("more") }}
        </router-link>
      </div>
    </div>
  </div>
  <router-link
    to="/articles"
    class="flex items-center w-fit mx-auto hoverBar p-1"
  >
    {{ $t("moreArticles") }}
    <ChevronRightIcon class="w-4 h-4 inline stroke-2" />
  </router-link>
</template>
<style lang="scss">
.date {
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 47%;
    right: 100%;
    display: inline-block;
    width: 100px;
    height: 1px;
    background-color: var(--color-primary-dark);
    transform-origin: right;
    z-index: -2;
  }
}
</style>

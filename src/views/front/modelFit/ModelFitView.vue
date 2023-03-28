<script setup>
import { reactive, inject, watch } from "vue";
import MetaComponent from "@/components/front/MetaComponent.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import { PlusSmallIcon } from "@heroicons/vue/24/outline";

import Tilt from "vanilla-tilt-vue";

import { storeToRefs } from "pinia";
import { useModelsStore } from "@/stores/models.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

const modelsStore = useModelsStore();
const { models } = modelsStore;
const { modelId } = storeToRefs(modelsStore);

const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

watch(
  localLang,
  (newVal) => {
    localLang.value = newVal;
  },
  { deep: true }
);

const detectWidth = inject("detectWidth");

const modules = [Navigation, Pagination];
const swiperOptions = reactive({
  pagination: {
    el: ".index-swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: ".index-prevBtn",
    nextEl: ".index-nextBtn",
  },
});

// 判斷 swiper 要顯示哪一張
const handleSlideTo = (swiper) => {
  swiper.slideTo(modelId.value - 1);
};

const options = reactive({
  reverse: true,
  max: 10,
});

// 設定 meta
const metaData = reactive({
  title: "模特穿搭系列 | Bottigaemo",
  enTitle: "Model Outfit | Bottigaemo",
  url: `${import.meta.env.VITE_APP_URL}/#/model-fit`,
});
</script>

<template>
  <div>
    <MetaComponent :meta-data="metaData" :localLang="localLang" />
    <div class="modelFit bg-white z-[1]">
      <div class="w-screen h-screen">
        <swiper
          :slidesPerView="1"
          :navigation="swiperOptions.navigation"
          :pagination="swiperOptions.pagination"
          :loop="true"
          :modules="modules"
          class="w-full h-full pb-10 md:pb-0"
          @swiper="handleSlideTo"
        >
          <swiper-slide v-for="item in models" :key="item.title">
            <div class="grid md:grid-cols-2 xl:grid-cols-4 items-center h-full">
              <div
                class="justify-center items-center h-full text-white hidden xl:flex"
                :style="{ backgroundColor: `${item.bgcolor}` }"
              >
                <div class="font-bodoni uppercase">
                  <p class="text-2xl text-white/70">{{ item.subtitle }}</p>
                  <h2 class="text-6xl font-extrabold tracking-tighter mb-5">
                    {{ item.title }}
                  </h2>
                </div>
              </div>
              <div class="xl:col-span-2">
                <Tilt :options="options">
                  <RouterLink :to="`fit-detail/${item.id}`">
                    <img
                      :src="item.imgURL"
                      :alt="item.title"
                      class="w-9/12 mx-auto"
                    />
                  </RouterLink>
                </Tilt>
              </div>
              <div
                class="flex flex-col justify-start md:justify-end items-start h-full w-full px-8 md:w-10/12 lg:w-9/12 -mt-20 md:mb-80"
              >
                <div class="font-bodoni uppercase xl:hidden">
                  <p class="md:text-2xl text-black/60">{{ item.subtitle }}</p>
                  <h2
                    class="text-2xl md:text-6xl font-extrabold font-bodoni uppercase tracking-tighter mb-5"
                  >
                    {{ item.title }}
                  </h2>
                </div>

                <p
                  class="leading-loose text-gray-500 line-clamp-3 md:line-clamp-none mb-4 md:mb-10"
                >
                  <template v-if="localLang === 'zh_TW'">
                    {{ item.description }}
                  </template>
                  <template v-else-if="localLang === 'en'">
                    {{ item.enDescription }}
                  </template>
                </p>
                <RouterLink
                  :to="`fit-detail/${item.id}`"
                  class="text-gray-600 flex items-center w-fit hoverBar"
                >
                  <PlusSmallIcon class="w-4 h-4 inline stroke-2 mr-1" />
                  {{ $t("watchDetail") }}
                </RouterLink>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div
          class="navigation-pagination-container w-full md:w-1/2 xl:w-1/4 flex justify-between items-center absolute bottom-5 left-0 right-0 rotate-0 z-10 md:bottom-[26%] lg:bottom-[20%] xl:bottom-[10%] md:right-auto px-8 md:px-0"
        >
          <div
            class="index-prevBtn flex justify-center items-center w-9 h-9 md:ml-[10%] z-[2] -rotate-90"
            tabindex="0"
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-48d4ad8e3cd92a75"
          >
            <svg
              class="slider-fullscreen-arrow-svg"
              :class="detectWidth >= 1280 ? `fill-white` : `fill-primary-dark`"
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="25"
              viewBox="0 0 5 25"
            >
              <path
                d="M1.97 1.058L.673 2.897c-.105.15-.308.182-.452.073s-.176-.32-.071-.47L1.66.359C1.821.131 2.055 0 2.301 0h0 .001c.246.001.48.132.642.363l1.494 2.139c.105.15.073.361-.072.468s-.348.075-.451-.075L2.617 1.037V25H1.97V1.058z"
              ></path>
            </svg>
          </div>
          <div
            class="index-swiper-pagination inherit xl:text-white text-center py-5 z-[1]"
          ></div>
          <div
            class="index-nextBtn flex justify-center items-center w-9 h-9 md:mr-[10%] z-[2] -rotate-90"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-48d4ad8e3cd92a75"
          >
            <svg
              class="slider-fullscreen-arrow-svg -scale-y-100"
              :class="detectWidth >= 1280 ? `fill-white` : `fill-primary-dark`"
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="25"
              viewBox="0 0 5 25"
            >
              <path
                d="M1.97 1.058L.673 2.897c-.105.15-.308.182-.452.073s-.176-.32-.071-.47L1.66.359C1.821.131 2.055 0 2.301 0h0 .001c.246.001.48.132.642.363l1.494 2.139c.105.15.073.361-.072.468s-.348.075-.451-.075L2.617 1.037V25H1.97V1.058z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

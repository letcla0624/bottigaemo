<script setup>
import { inject } from "vue";
import HeartFillComponent from "@/components/svgPath/HeartFillComponent.vue";
import LoveComponent from "@/components/front/LoveComponent.vue";
import { toThousands } from "@/composable/toThousands.js";
import { PlusIcon, HeartIcon } from "@heroicons/vue/24/outline";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";

import { storeToRefs } from "pinia";
import { useFrontFavoriteStore } from "@/stores/frontFavoriteStore.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia favorite
const frontFavoriteStore = useFrontFavoriteStore();
const { favoriteProdArr, startFavoriteAnim } = storeToRefs(frontFavoriteStore);
const { toggleFavorite } = frontFavoriteStore;

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const detectWidth = inject("detectWidth");
const modules = [FreeMode];

const props = defineProps({
  categoryProducts: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="pl-2 md:pl-4">
    <swiper
      :slidesPerView="1.2"
      :spaceBetween="8"
      :freeMode="detectWidth >= 640 ? true : false"
      :breakpoints="{
        '640': {
          slidesPerView: 2.2,
        },
        '768': {
          slidesPerView: 3.2,
          spaceBetween: 16,
        },
        '992': {
          slidesPerView: 4.2,
          spaceBetween: 16,
        },
      }"
      :modules="modules"
      class="py-10"
    >
      <swiper-slide
        v-for="product in props.categoryProducts.arr"
        :key="product.title"
      >
        <div class="flex flex-col">
          <router-link :to="`/prod/${product.id}`">
            <div class="w-full overflow-hidden relative img-cover">
              <img
                :src="product.imageUrl"
                :alt="localLang === 'zh_TW' ? product.title : product.enTitle"
                class="w-full transition duration-300 aspect-ratio-1-1 object-cover hover:scale-125"
              />
              <div
                class="w-full h-full bg-neutral-100/90 hidden justify-center items-center absolute top-0 left-0 img-mask hover:visible transition duration-300"
              >
                <PlusIcon class="w-4 h-4 inline stroke-2 mr-1" />
                {{ $t("more") }}
                <button
                  type="button"
                  class="absolute right-0 top-0 p-3"
                  @click.prevent="toggleFavorite(product.id)"
                >
                  <n-tooltip
                    trigger="hover"
                    v-if="!favoriteProdArr.arr.includes(product.id)"
                  >
                    <template #trigger>
                      <HeartIcon class="cursor-pointer iconHover w-5 h-5" />
                    </template>
                    {{ $t("addFavorites") }}
                  </n-tooltip>
                  <n-tooltip trigger="hover" v-else>
                    <template #trigger>
                      <HeartFillComponent
                        class="cursor-pointer iconHover w-5 h-5 fill-primary-dark"
                      />
                    </template>
                    {{ $t("removeFavorites") }}
                  </n-tooltip>
                </button>
                <template v-if="startFavoriteAnim">
                  <LoveComponent />
                </template>
              </div>
            </div>
            <div class="bg-neutral-100 text-center p-3">
              <h3 class="uppercase line-clamp-2 mb-1">
                <template v-if="localLang === 'zh_TW'">
                  {{ product.title }}
                </template>
                <template v-else-if="localLang === 'en'">
                  {{ product.enTitle }}
                </template>
              </h3>
              <p>
                <template v-if="localLang === 'zh_TW'">
                  NT$ {{ toThousands(product.price) }}
                </template>
                <template v-else-if="localLang === 'en'">
                  $ {{ toThousands(product.enPrice) }}
                </template>
              </p>
            </div>
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style lang="scss"></style>

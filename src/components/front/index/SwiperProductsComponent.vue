<script setup>
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { toThousands } from "@/composable/toThousands.js";
import { PlusIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

import { storeToRefs } from "pinia";
import { useFrontProductsStore } from "@/stores/frontProductsStore.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia getProducts
const frontProductsStore = useFrontProductsStore();
const { topProducts } = storeToRefs(frontProductsStore);
const { getProducts } = frontProductsStore;

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const modules = [Pagination];

onMounted(() => {
  getProducts();
});
</script>
<template>
  <div>
    <swiper
      :slidesPerView="1"
      :spaceBetween="16"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 1,
        },
        '768': {
          slidesPerView: 3,
        },
      }"
      :modules="modules"
      :loop="true"
      class="py-10"
    >
      <swiper-slide
        v-for="topProduct in topProducts.arr"
        :key="topProduct.title"
      >
        <div class="flex flex-col hoverBar">
          <a :href="topProduct.link">
            <div class="w-full overflow-hidden aspect-ratio-1-1">
              <router-link :to="`prod/${topProduct.id}`">
                <div class="w-full overflow-hidden relative img-cover">
                  <img
                    :src="topProduct.imageUrl"
                    :alt="topProduct.title"
                    class="w-full transition duration-300"
                  />
                  <div
                    class="w-full h-full text-primary-dark bg-neutral-100/90 hidden justify-center items-center absolute top-0 left-0 img-mask hover:visible transition duration-300"
                  >
                    <PlusIcon class="w-4 h-4 inline stroke-2 mr-1" />
                    {{ $t("more") }}
                  </div>
                </div>
              </router-link>
            </div>
            <div class="p-5">
              <h3 class="text-lg overflow-hidden line-clamp-1 mb-1">
                <template v-if="localLang === 'zh_TW'">
                  {{ topProduct.title }}
                </template>
                <template v-else-if="localLang === 'en'">
                  {{ topProduct.enTitle }}
                </template>
              </h3>
              <p class="">
                <template v-if="localLang === 'zh_TW'">
                  NT$ {{ toThousands(topProduct.price) }}
                </template>
                <template v-else-if="localLang === 'en'">
                  $ {{ toThousands(topProduct.enPrice) }}
                </template>
              </p>
            </div>
          </a>
        </div>
      </swiper-slide>
    </swiper>
    <router-link
      to="/products"
      class="btn btn-outline-dark border-white px-5 w-fit mx-auto hover:bg-white hover:text-primary-dark mt-10"
    >
      {{ $t("moreProducts") }}
      <ChevronRightIcon class="w-4 h-4 inline stroke-2 ml-1" />
    </router-link>
  </div>
</template>
<style lang="scss"></style>

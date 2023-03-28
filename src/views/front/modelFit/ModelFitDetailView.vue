<script setup>
import { reactive, watch, inject } from "vue";
import { useRoute } from "vue-router";
import { ChevronLeftIcon, PlusIcon } from "@heroicons/vue/24/outline";
import MetaComponent from "@/components/front/MetaComponent.vue";

import { storeToRefs } from "pinia";
import { useModelsStore } from "@/stores/models.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia models
const modelsStore = useModelsStore();
const { models } = modelsStore;
const { modelId } = storeToRefs(modelsStore);

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const renovate = inject("reload");

watch(
  localLang,
  (newVal) => {
    localLang.value = newVal;
    renovate();
  },
  { deep: true }
);

const route = useRoute();

modelId.value = route.params.id;
const model = reactive(models[`${modelId.value - 1}`]);

const metaData = reactive({
  title: `造型 ${modelId.value} - 模特穿搭系列 | Bottigaemo`,
  enTitle: `Look ${modelId.value} -  Model Outfit | Bottigaemo`,
  url: `${import.meta.env.VITE_APP_URL}/#/model-fit/${modelId.value}`,
});
</script>
<template>
  <div>
    <MetaComponent :meta-data="metaData" :localLang="localLang" />
    <div class="modelFitDEtail mt-16 sm:mt-0">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="lg:h-screen lg:sticky top-0">
          <video
            class="w-full h-full object-cover"
            autoplay
            loop
            muted
            playsinline
            controlslist="nodownload"
            :poster="model.poster"
          >
            <source :src="model.video" type="video/mp4" />
          </video>
        </div>
        <div class="bg-white px-3 py-5 md:p-10 3xl:px-40">
          <div
            class="font-bodoni uppercase lg:mt-20 mb-10 py-3 border-b-4 border-primary-dark"
          >
            <p class="text-lg md:text-xl text-gray-400">{{ model.subtitle }}</p>
            <h2 class="text-5xl font-extrabold tracking-tighter mb-5">
              {{ model.title }}
            </h2>
          </div>
          <ul
            v-masonry
            transition-duration=".3s"
            item-selector=".item"
            class="masonry-container h-screen"
          >
            <li
              v-masonry-tile
              v-for="fit in model.fits"
              :key="fit"
              class="item w-1/2 p-3 mb-7"
            >
              <div class="w-full overflow-hidden relative img-cover">
                <router-link :to="`/prod/${fit.link}`">
                  <img
                    :src="fit.imgUrl"
                    :alt="fit.title"
                    class="w-full transition duration-300"
                  />
                  <div
                    class="w-full h-full bg-white/90 hidden justify-center items-center absolute top-0 left-0 img-mask hover:visible transition duration-300"
                  >
                    <PlusIcon class="w-4 h-4 inline stroke-2 mr-1" />
                    {{ $t("more") }}
                  </div>
                </router-link>
              </div>
              <h3 class="font-bold uppercase pt-3">
                <template v-if="localLang === 'zh_TW'">
                  {{ fit.title }}
                </template>
                <template v-else-if="localLang === 'en'">
                  <span class="uppercase">{{ fit.enTitle }}</span>
                </template>
              </h3>
            </li>
          </ul>
          <div
            class="text-center border-t-4 border-primary-dark pt-5 lg:pt-10 clear-both"
          >
            <router-link to="/model-fit" class="text-bold hoverBar pb-1">
              <ChevronLeftIcon class="w-4 h-4 inline stroke-2 mr-1" />
              {{ $t("returnToModelFashion") }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.img-cover {
  &:hover {
    img {
      transform: scale(1.25);
    }
    .img-mask {
      display: flex;
    }
  }
}
</style>

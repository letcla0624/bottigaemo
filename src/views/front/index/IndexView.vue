<script setup>
import { reactive } from "vue";
import MetaComponent from "@/components/front/MetaComponent.vue";
import IndexBannerComponent from "@/components/front/index/IndexBannerComponent.vue";
import BlogComponent from "@/components/front/index/ArticleComponent.vue";
import FiftyComponent from "@/components/front/index/FiftyComponent.vue";
import AboutComponent from "@/components/front/index/AboutComponent.vue";
import SwiperProductsComponent from "@/components/front/index/SwiperProductsComponent.vue";
import SeparatorUpComponent from "@/components/svgPath/SeparatorUpComponent.vue";
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/outline";

import { storeToRefs } from "pinia";
import { useModelsStore } from "@/stores/models.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const modelsStore = useModelsStore();
const { modelId } = storeToRefs(modelsStore);
modelId.value = 1;

// 設定 meta
const metaData = reactive({
  title: "Bottigaemo - 官方網站",
  enTitle: "Bottigaemo - Official Website",
  url: `${import.meta.env.VITE_APP_URL}/#/`,
});
</script>

<template>
  <div class="index">
    <MetaComponent :meta-data="metaData" :localLang="localLang" />
    <section>
      <div class="relative">
        <IndexBannerComponent />
        <div
          class="w-full text-center flex flex-col justify-center items-center absolute text-white top-[80%] md:top-[95%] z-[2]"
        >
          <div class="animate-bounce flex flex-col items-center">
            <ChevronDoubleDownIcon class="w-6 h-6 animate-pulse" />
          </div>
          <p class="mt-2 tracking-widest">{{ $t("scrollDown") }}</p>
        </div>
      </div>
    </section>
    <section>
      <div
        class="relative bg-primary-dark text-white pb-10 md:py-20 px-2 md:px-5"
      >
        <SeparatorUpComponent class="fill-primary-dark" />
        <div class="container text-center">
          <h2
            class="text-xl md:text-3xl font-bold tracking-wider uppercase pt-5"
          >
            {{ $t("newArrival") }}
          </h2>
          <SwiperProductsComponent />
        </div>
      </div>
    </section>
    <FiftyComponent />
    <section class="bg-white pb-10 md:pb-20">
      <div class="container mx-auto text-center">
        <h2
          class="text-xl md:text-3xl font-bold tracking-wider uppercase py-10 md:py-20"
        >
          {{ $t("newArticles") }}
        </h2>
        <BlogComponent />
      </div>
    </section>
    <section>
      <AboutComponent />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.rotateY-180 {
  transform: rotateY(180deg);
}
</style>

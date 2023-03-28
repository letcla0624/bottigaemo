<script setup>
import { onMounted, inject, watch, reactive } from "vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
import LoadingComponent from "@/components/LoadingComponent.vue";
import MetaComponent from "@/components/front/MetaComponent.vue";
import { storeToRefs } from "pinia";
import { useFrontArticlesStore } from "@/stores/frontArticlesStore.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia Articles
const frontArticlesStore = useFrontArticlesStore();
const { articles, isLoading } = storeToRefs(frontArticlesStore);
const { getArticles } = frontArticlesStore;

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const renovate = inject("reload");
const detectWidth = inject("detectWidth");

watch(
  localLang,
  (newVal) => {
    localLang.value = newVal;
    renovate();
  },
  { deep: true }
);

onMounted(() => {
  getArticles();
});

// 設定 meta
const metaData = reactive({
  title: "品牌動向 | Bottigaemo",
  enTitle: "Bottigaemo News | Bottigaemo",
  url: `${import.meta.env.VITE_APP_URL}/#/articles`,
});
</script>

<template>
  <div>
    <MetaComponent :meta-data="metaData" :localLang="localLang" />
    <LoadingComponent v-if="isLoading" />
    <div v-else class="bg-primary-dark text-white min-h-screen">
      <!-- <div
          class="tracking-wider text-center flex justify-center items-center w-full h-[400px] aspect-video py-10 md:pt-20 mb-10"
          style="
            background: url('https://images.unsplash.com/photo-1508162245510-bf2772371e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80')
              center center no-repeat;
            background-size: cover;
          "
        >
          <div class="flex justify-center items-center">
            <h2
              class="text-2xl md:text-4xl font-bodoni tracking-tighter text-primary-dark mb-1"
            >
              <em class="">Bottiga</em>
              <span>emo</span>
            </h2>
            <span class="text-2xl text-primary-dark mx-4"> & </span>
            <h2
              class="text-lg md:text-xl uppercase text-primary-dark font-extrabold text-left leading-tight mb-1"
            >
              <span>People</span><br />
              <span>For Wildlife</span>
            </h2>
          </div>
        </div> -->
      <div class="w-screen relative mb-10">
        <div
          class="absolute w-full h-full text-center flex justify-center items-center z-[1]"
        >
          <div class="flex justify-center items-center text-white">
            <h2 class="text-2xl md:text-4xl font-bodoni tracking-tighter mb-1">
              <em class="">Bottiga</em>
              <span>emo</span>
            </h2>
            <span class="text-2xl mx-4 lg:mx-8"> & </span>
            <h2
              class="text-lg md:text-2xl uppercase font-extrabold text-left tracking-wider leading-tight mb-1"
            >
              <template v-if="localLang === 'zh_TW'">
                <span>品牌動向總覽</span>
              </template>
              <template v-else-if="localLang === 'en'">
                <span>People</span><br />
                <span>For Wildlife</span>
              </template>
            </h2>
          </div>
        </div>
        <video
          v-if="detectWidth < 768"
          autoplay
          loop
          muted
          playsinline
          controlslist="nodownload"
          poster="https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679403717714.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lFMohhC3cjwAftQpyIOqKYSc1afms%2BV%2FTwABGY8GgAce84aybr9RPRtwQeDb6Vnc7Bkm6C4ylyh971WD3H6kkjAb8Lwgr%2FY9f9VRwvPL%2B5dOKy%2FrSPoDxa22YoTFXN5qoYH5PKyJHXlIvWWfiur%2BxPpyA2NJmYx07SrBa2U%2FI%2B%2F8iXO64LSVyfGBaJGPB2wO8%2FuD9PDAIv35eyB%2BnYamfO%2B1ICyAiVSXGKh3tojn1PAm66Pylsp6x4hCC%2BWFVUPw1GFFafFPYM9K2tJ%2FqQ%2FgVPGqv8KBk1jrNoJQbvi95Q134RKxSmi%2BpSCwMl%2BA0dZFUPcZAXoIuLEVWpfweXj3Eg%3D%3D"
          class="w-full h-[500px] object-cover"
        >
          <source src="/video/articles/banner-phone.mp4" type="video/mp4" />
        </video>
        <video
          v-else
          autoplay
          loop
          muted
          playsinline
          controlslist="nodownload"
          poster="https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679403696900.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VaJdqZB%2BHh18aOIahaezZ%2B6FA2%2B4Bsnq1HkLG%2BhOL2pXDS4bZP4od66JhUUWYOd6pLdrq5sdzH99b95caZr7ispIVkMjXxcWKBUPP%2BW4aEglZD%2BRm3y%2BT080BeczKddXrTagCKn%2B2bnJaDAgetRqawjbjBjzJWbFiOIzm%2FVFZZHACOgPaw52HamAkEHTr7SkymXuoVLhXBnHiSzom83axmo0MOBjzwkR01x2VtaHeC%2F6GMEJvVT5gR%2F7Nffxha1jt9H%2FXkZzThD%2BohAxAg19wHLgD%2BEn%2FVtGMP%2FMhifxUJGL7i8rLnRoKk5CP3ShwvXcjRpI%2BR57LxvNbc6WIprQlw%3D%3D"
          class="w-full max-h-[700px] object-cover"
        >
          <source src="/video/articles/banner.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="container">
        <div
          v-masonry
          transition-duration=".3s"
          item-selector=".item"
          class="masonry-container"
        >
          <div
            v-masonry-tile
            class="item w-full sm:w-1/2 lg:w-1/3"
            v-for="article in articles.arr"
            :key="article.title"
          >
            <div class="m-2 mb-4">
              <router-link :to="`article-detail/${article.id}`">
                <div class="w-full overflow-hidden relative img-cover">
                  <img
                    :src="article.imageUrl"
                    :alt="
                      localLang === 'zh_TW' ? article.title : article.enTitle
                    "
                    class="w-full transition duration-300 aspect-ratio-4-3 object-cover"
                  />
                  <div
                    class="w-full h-full bg-black/60 hidden justify-center items-center absolute top-0 left-0 img-mask hover:visible transition duration-300"
                  >
                    <PlusIcon class="w-4 h-4 inline stroke-2 mr-1" />
                    {{ $t("more") }}
                  </div>
                </div>
                <div class="my-3">
                  <p class="bg-white/20 text-xs w-fit px-3 py-1 mb-4">
                    <template v-if="localLang === 'zh_TW'">
                      {{ article.tag[0] }}
                    </template>
                    <template v-else-if="localLang === 'en'">
                      <span class="capitalize">{{ article.enTag }}</span>
                    </template>
                  </p>
                  <h3 class="text-lg md:text-xl tracking-wider mb-1">
                    <template v-if="localLang === 'zh_TW'">
                      {{ article.title }}
                    </template>
                    <template v-else-if="localLang === 'en'">
                      {{ article.enTitle }}
                    </template>
                  </h3>
                  <p class="opacity-50">
                    by <span class="uppercase"> {{ article.author }} </span>
                  </p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.n-checkbox {
  .n-checkbox-box {
    border-radius: 0;

    .n-checkbox-box__border {
      border: 1px solid var(--color-primary-dark) !important;
    }
  }

  &:focus:not(:active) {
    .n-checkbox-box {
      .n-checkbox-box__border {
        box-shadow: none !important;
      }
    }
  }

  &:hover {
    .n-checkbox-box {
      border-color: var(--color-primary-dark);
    }
  }
}
.n-checkbox.n-checkbox {
  &--checked {
    .n-checkbox-box {
      background-color: var(--color-primary-dark);
    }
  }
}
</style>

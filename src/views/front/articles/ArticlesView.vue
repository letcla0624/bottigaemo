<script setup>
import { onMounted, inject, watch } from "vue";
import { PlusIcon } from "@heroicons/vue/24/outline";
import LoadingComponent from "@/components/LoadingComponent.vue";
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
</script>

<template>
  <div>
    <div class="pt-[72px]">
      <LoadingComponent v-if="isLoading" />
      <div v-else class="bg-primary-dark text-white min-h-screen">
        <div class="tracking-wider text-center py-20 md:py-36">
          <h2 class="text-xl md:text-3xl font-bold mb-1">
            <template v-if="localLang === 'zh_TW'"> 品牌動向 </template>
            <template v-else-if="localLang === 'en'">
              Bottigaemo Club
            </template>
          </h2>
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
              class="item w-full sm:w-1/2 lg:w-1/3 p-1"
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

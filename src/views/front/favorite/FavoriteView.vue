<script setup>
import { ref, reactive, onMounted } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import RemoveFavoriteModal from "@/components/modal/RemoveFavoriteModal.vue";
import MetaComponent from "@/components/front/MetaComponent.vue";
import { NTooltip } from "naive-ui";
import { toThousands } from "@/composable/toThousands.js";
import {
  XMarkIcon,
  ChevronRightIcon,
  PlusIcon,
  ClipboardDocumentIcon,
} from "@heroicons/vue/24/outline";

import { storeToRefs } from "pinia";
import { useFrontFavoriteStore } from "@/stores/frontFavoriteStore.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia favorite
const frontFavoriteStore = useFrontFavoriteStore();
const { tempFavoriteProds, isLoading } = storeToRefs(frontFavoriteStore);
const { getFavoriteProds } = frontFavoriteStore;

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const showModal = ref(false);
const tempProdItem = reactive({ obj: {} });

const closeModal = () => {
  showModal.value = false;
};

const openDelModal = (prod) => {
  tempProdItem.obj = { ...prod };
  showModal.value = true;
};

onMounted(() => {
  getFavoriteProds();
});

// 設定 meta
const metaData = reactive({
  title: "收藏清單 | Bottigaemo",
  enTitle: "Wishlist | Bottigaemo",
  url: `${import.meta.env.VITE_APP_URL}/#/favorite`,
});
</script>

<template>
  <div>
    <MetaComponent :meta-data="metaData" :localLang="localLang" />
    <LoadingComponent v-if="isLoading" />
    <div v-else class="container px-2">
      <div
        v-if="tempFavoriteProds.arr.length === 0"
        class="h-screen flex flex-col justify-center items-center text-center"
      >
        <ClipboardDocumentIcon class="w-10 h-10 stroke-1" />
        <h2 class="text-base md:text-2xl tracking-wide mt-3 mb-10">
          {{ $t("favoriteItems") }}
        </h2>
        <router-link to="products" class="btn btn-dark">
          {{ $t("moreProducts") }}
          <ChevronRightIcon class="w-4 h-4 inline stroke-2 ml-1" />
        </router-link>
      </div>
      <div v-else class="pt-[72px]">
        <div class="flex justify-between items-center py-4">
          <router-link to="products" class="btn btn-outline-dark">
            {{ $t("moreProducts") }}
            <ChevronRightIcon class="w-4 h-4 inline stroke-2 ml-1" />
          </router-link>
          <p class="text-black/50">
            <template v-if="localLang === 'zh_TW'">
              共 {{ tempFavoriteProds.arr.length }} 件商品
            </template>
            <template v-else-if="localLang === 'en'">
              Total {{ tempFavoriteProds.arr.length }} products
            </template>
          </p>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
          <div
            v-for="product in tempFavoriteProds.arr"
            :key="product.title"
            class="bg-neutral-100"
          >
            <router-link :to="`prod/${product.id}`">
              <div
                class="w-full overflow-hidden relative img-cover pb-3 md:py-10"
              >
                <img
                  :src="product.imageUrl"
                  :alt="localLang === 'zh_TW' ? product.title : product.enTitle"
                  class="w-full transition duration-300"
                />
                <div
                  class="w-full h-full bg-neutral-100/90 opacity-0 flex justify-center items-center absolute top-0 left-0 img-mask hover:opacity-100 transition duration-300"
                >
                  <PlusIcon class="w-4 h-4 inline stroke-2 mr-1" />
                  {{ $t("more") }}
                </div>
                <n-tooltip trigger="hover">
                  <template #trigger>
                    <button
                      type="button"
                      class="absolute right-0 top-0 p-3"
                      @click.prevent="openDelModal(product)"
                    >
                      <XMarkIcon class="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </template>
                  {{ $t("removeFavorites") }}
                </n-tooltip>
              </div>
              <div class="md:bg-neutral-100 p-2 md:py-4">
                <div
                  class="flex flex-col md:flex-row justify-between items-center"
                >
                  <h2 class="line-clamp-1 uppercase">
                    <template v-if="localLang === 'zh_TW'">
                      {{ product.title }}
                    </template>
                    <template v-else-if="localLang === 'en'">
                      {{ product.enTitle }}
                    </template>
                  </h2>
                  <p>
                    <template v-if="localLang === 'zh_TW'">
                      NT$ {{ toThousands(product.price) }}
                    </template>
                    <template v-if="localLang === 'en'">
                      $ {{ toThousands(product.enPrice) }}
                    </template>
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <RemoveFavoriteModal
      :del-item="tempProdItem"
      :show-modal="showModal"
      @close-modal="closeModal"
    />
  </div>
</template>

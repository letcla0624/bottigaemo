<script setup>
import { NModal } from "naive-ui";

import { storeToRefs } from "pinia";
import { useFrontFavoriteStore } from "@/stores/frontFavoriteStore.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia favorite
const frontFavoriteStore = useFrontFavoriteStore();
const { isLoading } = storeToRefs(frontFavoriteStore);
const { removeFavoriteProd } = frontFavoriteStore;

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const props = defineProps({
  delItem: {
    type: Object,
    default: () => ({}),
  },
  showModal: {
    type: Boolean,
    default: false,
  },
  closeModal: {
    type: Function,
    default: () => {},
  },
});

const emit = defineEmits(["closeModal"]);

const submitCallback = () => {
  removeFavoriteProd(props.delItem.obj.id);
  emit("closeModal");
};

const cancelCallback = () => {
  emit("closeModal");
};
</script>

<template>
  <div>
    <n-modal
      :show="props.showModal"
      preset="dialog"
      :on-close="cancelCallback"
      :on-mask-click="cancelCallback"
      transform-origin="center"
      :z-index="2050"
      class="rounded-none"
    >
      <template #header>
        <h3 class="text-xl">{{ $t("deleteFavoriteItems") }}</h3>
      </template>
      <div class="py-5">
        <template v-if="localLang === 'zh_TW'">
          確認從您的願望錄中刪除產品
          <span class="font-bold">{{ props.delItem.obj.title }}</span> 嗎？
        </template>
        <template v-else-if="localLang === 'en'">
          Are you sure you want to remove the
          <span class="font-bold">{{ props.delItem.obj.enTitle }}</span> from
          your wishlist?
        </template>
      </div>
      <template #action>
        <button type="button" class="btn border-none" @click="cancelCallback">
          {{ $t("no") }}
        </button>
        <button
          type="button"
          class="btn btn-dark disabled:opacity-25 disabled:cursor-not-allowed"
          @click="submitCallback"
          :disabled="isLoading === props.delItem"
        >
          <svg
            v-if="isLoading === props.delItem"
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {{ $t("yes") }}
        </button>
      </template>
    </n-modal>
  </div>
</template>

<style lang="scss" scoped></style>

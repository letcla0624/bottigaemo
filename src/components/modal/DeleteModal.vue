<script setup>
import { NModal } from "naive-ui";
import { useFrontCartStore } from "@/stores/frontCartStore.js";
import { storeToRefs } from "pinia";

// pinia cart
const frontCartStore = useFrontCartStore();
const { loadingCart } = storeToRefs(frontCartStore);
const { deleteCartItem } = frontCartStore;

const props = defineProps({
  delItem: {
    type: Object,
    default: () => ({}),
  },
  sendId: {
    type: String,
    default: "",
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
  deleteCartItem(props.delItem.obj.id);
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
      :z-index="2050"
      transform-origin="center"
      class="rounded-none"
    >
      <template #header>
        <h3 class="text-xl">{{ $t("removeItem") }}</h3>
      </template>
      <div class="py-5">
        {{ $t("removeNotice") }}
      </div>
      <template #action>
        <button type="button" class="btn border-none" @click="cancelCallback">
          {{ $t("no") }}
        </button>
        <button
          type="button"
          class="btn btn-dark disabled:opacity-25 disabled:cursor-not-allowed"
          @click="submitCallback"
          :disabled="loadingCart === props.delItem"
        >
          <svg
            v-if="loadingCart === props.delItem"
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

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import { GlobeAsiaAustraliaIcon } from "@heroicons/vue/24/solid";
import axios from "axios";

import { storeToRefs } from "pinia";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const route = useRoute();
const router = useRouter();

const orderId = route.params.id;
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
const tempOrder = reactive({ obj: {} });
const isLoading = ref(false);

const getOrder = async () => {
  isLoading.value = true;

  try {
    const res = await axios.get(
      `${VITE_APP_API}/api/${VITE_APP_PATH}/order/${orderId}`
    );

    isLoading.value = false;

    if (res.data.order !== null || undefined) {
      tempOrder.obj = res.data.order;
    } else {
      router.push({ name: "404" });
    }
  } catch (err) {
    isLoading.value = false;
    alert(err.response.data.message);
  }
};

onMounted(() => {
  getOrder();
});
</script>

<template>
  <div>
    <LoadingComponent v-if="isLoading" />
    <div v-else class="flex justify-center items-center min-h-screen mx-2">
      <div class="pt-[72px] grid place-items-center">
        <div class="grid p-4 max-w-5xl gap-4 grid-cols-2 md:grid-cols-4">
          <div
            class="col-span-2 grid grid-cols-1 sm:gap-4 md:text-7xl md:col-span-3 md:grid-cols-3"
          >
            <div
              class="md:col-span-2"
              :class="localLang === 'zh_TW' ? 'md:col-span-2' : 'md:col-span-3'"
            >
              <h1
                class="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-wide mb-3 md:-mb-8"
              >
                {{ $t("thanks") }}
                <GlobeAsiaAustraliaIcon
                  class="w-14 h-14 hidden lg:inline stroke-1 fill-primary-dark mb-5"
                />
              </h1>
            </div>
          </div>
          <div
            class="sm:col-start-2 sm:row-start-2 self-center md:col-start-1 md:col-span-2 md:pr-8 text-base md:text-lg flex"
          >
            <p class="text-sm text-black/60">
              <span
                class="font-bodoni tracking-tighter"
                :class="{ hidden: localLang === 'en' }"
              >
                <em>Bottiga</em>emo
              </span>
              {{ $t("donate1") }}
              <b> 1% </b>
              {{ $t("donate2") }}
            </p>
          </div>
          <div
            v-for="(item, itemId, idx) in tempOrder.obj.products"
            :key="itemId"
            class="h-full w-full overflow-hidden grid sm:w-auto sm:h-auto"
            :class="{ 'md:col-start-2': idx === 3 }"
          >
            <img :src="item.product.imageUrl" :alt="item.product.title" />
          </div>
        </div>
        <div class="md:relative bottom-5 w-full flex justify-center my-10">
          <router-link to="/" class="btn btn-dark w-full sm:w-fit px-20">
            {{ $t("backToHome") }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

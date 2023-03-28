<script setup>
import { ref, inject, defineEmits, onMounted } from "vue";
import { NEllipsis } from "naive-ui";
import NotiComponent from "@/components/front/NotiComponent.vue";
import {
  CreditCardIcon,
  TruckIcon,
  GiftIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/vue/24/outline";

import { storeToRefs } from "pinia";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const detectWidth = inject("detectWidth");
const year = inject("year");

// i18n
const emit = defineEmits(["language"]);
const language = ref(localLang);
const setLang = () => {
  localStorage.setItem("language", language.value);
};
const changeLang = () => {
  emit("language", language.value);
  setLang();
};
onMounted(() => {
  setLang();
});
</script>
<template>
  <div :class="{ 'has-animation': detectWidth >= 1024 }">
    <footer
      class="footer lg:fixed bottom-0 w-full h-auto bg-primary-dark text-white text-center pt-10 z-0"
    >
      <div
        class="logo font-bodoni tracking-tighter text-center text-white/75 text-3xl md:text-4xl py-10 md:py-20"
      >
        <a href="#"> <em>Bottiga</em>emo </a>
      </div>
      <div class="container mx-auto">
        <ul class="md:flex justify-center items-center">
          <li class="p-4 m-4">
            <RouterLink to="/" class="uppercase">
              {{ $t("menu.index") }}
            </RouterLink>
          </li>
          <li class="p-4 m-4">
            <RouterLink to="/products" class="uppercase">
              {{ $t("menu.products") }}
            </RouterLink>
          </li>
          <li class="p-4 m-4">
            <RouterLink to="/articles" class="uppercase">
              {{ $t("menu.articles") }}
            </RouterLink>
          </li>
          <li class="p-4 m-4">
            <RouterLink to="/about" class="uppercase">
              {{ $t("menu.aboutUs") }}
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="border-y border-white/30">
        <div class="max-w-[2360px] mx-auto py-10 px-3">
          <ul class="grid gap-y-10 grid-cols-2 lg:grid-cols-4">
            <li class="w-full lg:border-r border-white/30">
              <h4 class="text-xl uppercase mb-3">
                {{ $t("shippingAndReturns") }}
              </h4>
              <TruckIcon class="w-12 h-12 stroke-1 mx-auto my-4" />
              <p class="text-white/50">
                {{ $t("shippingContent1") }}<br />
                {{ $t("shippingContent2") }}
              </p>
            </li>
            <li class="w-full lg:border-r border-white/30">
              <h4 class="text-xl uppercase mb-3">{{ $t("payment") }}</h4>
              <CreditCardIcon class="w-12 h-12 stroke-1 mx-auto my-4" />
              <p class="text-white/50">
                {{ $t("paymentContent1") }}<br />
                {{ $t("paymentContent2") }}
              </p>
            </li>
            <li class="w-full lg:border-r border-white/30">
              <h4 class="text-xl uppercase mb-3">{{ $t("gifts") }}</h4>
              <GiftIcon class="w-12 h-12 stroke-1 mx-auto my-4" />
              <p class="text-white/50">
                {{ $t("giftsContent1") }}<br />
                {{ $t("giftsContent2") }}
              </p>
            </li>
            <li class="w-full">
              <h4 class="text-xl uppercase mb-3">{{ $t("service") }}</h4>
              <ChatBubbleBottomCenterTextIcon
                class="w-12 h-12 stroke-1 mx-auto my-4"
              />
              <p class="text-white/50">
                {{ $t("serviceContent1") }}<br />
                AM 10:00 - PM 06:00<br />
                <a href="tel:+886-22984765">
                  {{ $t("serviceContent2") }}: +886-22984765
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-b border-white/30 text-white/50">
        <div class="container mx-auto">
          <div class="md:flex justify-between items-center">
            <ul class="md:flex justify-center items-center">
              <li class="p-4 my-4">
                <RouterLink to="/privacy">{{ $t("privacy") }}</RouterLink>
              </li>
              <li class="p-4 my-4">
                <n-notification-provider :max="1">
                  <NotiComponent />
                </n-notification-provider>
              </li>
            </ul>
            <select
              class="form-select text-sm bg-primary-dark border-0 focus:ring-0 mb-5 md:m-0"
              v-model="language"
              @change="changeLang"
            >
              <option disabled>{{ $t("selectLanguage") }}</option>
              <option value="zh_TW" selected>繁體中文</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
      <div class="container text-white/50 px-3 py-5">
        <div class="flex flex-col lg:flex-row justify-between items-center">
          <small
            class="lg:text-left mb-3 lg:pr-2 lg:mb-0 lg:border-r border-white/30"
          >
            <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
              {{ $t("low") }}
            </n-ellipsis>
          </small>
          <small class="sm:whitespace-nowrap pl-2">
            &copy; {{ year }} Bottigaemo - All Rights Reserved | Design & Code
            by WILL.
          </small>
        </div>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.has-animation {
  padding-bottom: calc(726.5px);
  @media screen and (max-width: 1023px) {
    padding-bottom: 0 !important;
  }
}

.footer {
  a {
    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>

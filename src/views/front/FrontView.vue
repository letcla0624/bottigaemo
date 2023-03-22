<script setup>
import { ref, provide, watch, onMounted, nextTick, computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import NavComponent from "@/components/front/NavComponent.vue";
import FooterComponent from "@/components/front/FooterComponent.vue";
import { useI18n } from "vue-i18n";
import { useMeta } from "vue-meta";

// 打開選單
const body = document.querySelector("body");
const isOpen = ref(false);
const openMenu = () => {
  isOpen.value = !isOpen.value;
  fixedBody();
};
provide("isOpen", isOpen);

// 打開選單後固定底部的 body
const fixedBody = () => {
  if (isOpen.value) {
    body.classList.add("overflow-y-hidden");
  } else {
    body.classList.remove("overflow-y-hidden");
  }
};

const route = useRoute();
watch(
  () => route.path,
  () => {
    isOpen.value = false;
    fixedBody();
  }
);

// 局部重新 reload 方法，瀑布流會用到
const isRouterAlive = ref(true);
const reload = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
};
provide("reload", reload);

// 讓router改變後頁面也會刷新
const key = computed(() => {
  return route.path + Math.random();
});

// 變更語系
const { locale } = useI18n({ useScope: "global" });
const changeLang = (language) => {
  if (language === "zh_TW") {
    locale.value = "zh_TW";
  } else if (language === "en") {
    locale.value = "en";
  }
};
onMounted(() => {
  locale.value = localStorage.getItem("language");
});

useMeta({
  title: "Bottigaemo",
  htmlAttrs: { lang: locale.value },
  keywords: "",
  description: "",
  author: "Will Wu",
  "apple-mobile-web-app-capable": "yes",
  og: {
    title: "Bottigaemo",
    url: "https://letcla0624.github.io/bottigaemo/#/",
    image: `https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679471146367.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dB%2FVw3JSbC2utg0uNX9%2B3jNliX6TssJbpeq2Q%2BFIJP7NklSEZu740bk%2FhLEZFLR7zcXeU8W8DiyPIjoP497D3dPSDGoO496zzzVv2R3aoRRUPqDpAL2jVBx1DmpWaEPJF8l8WgGc%2B2Askj2rtaSCoVVsv%2FHA7oA26tXfor85LLEADPqLyDBGYLg8CHdVwpt95rJ6Yz7X1JDvIL2PmJy%2FSCrOb1v9UM61ZMoJEg3nTqfKwAGtC5zN18qkQc1EavobcwVGskfaVjfqhaPVHy3%2BloHfQuM2wWDDPLrQxuT0FTci3V5vR07qpprAU6g1hoG2o7JjiGyIbNTw9dSFu2jcwA%3D%3D`,
    type: "website",
  },
});
</script>

<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">
        {{
          locale === "zh_TW"
            ? `${content} - 官方網站`
            : `${content} - Official Website`
        }}
      </template>
      <template v-slot:description>
        {{ $t("meta-description") }}
      </template>
      <template v-slot:keywords>
        {{ $t("meta-keywords") }}
      </template>
    </metainfo>
    <NavComponent @open-menu="openMenu" />
    <router-view
      v-if="isRouterAlive"
      v-slot="{ Component }"
      class="relative main bg-white min-h-screen"
      :key="key"
    >
      <transition name="fadeIn" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterComponent @language="changeLang" />
  </div>
</template>

<style lang="scss"></style>

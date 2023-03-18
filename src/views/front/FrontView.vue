<script setup>
import { ref, provide, watch, onMounted, nextTick, computed } from "vue";
import { RouterView, useRoute } from "vue-router";
import NavComponent from "@/components/front/NavComponent.vue";
import FooterComponent from "@/components/front/FooterComponent.vue";
import { useI18n } from "vue-i18n";

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
</script>

<template>
  <div>
    <div>
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
  </div>
</template>

<style lang="scss"></style>

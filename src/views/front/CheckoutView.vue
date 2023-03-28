<script setup>
import { inject, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const detectWidth = inject("detectWidth");

// 變更語系
const { locale } = useI18n({ useScope: "global" });
onMounted(() => {
  locale.value = localStorage.getItem("language");
});
</script>

<template>
  <div>
    <div class="relative main bg-white">
      <div class="container max-w-7xl">
        <div class="md:flex px-2">
          <div
            class="w-full md:w-1/2 xl:w-5/12 md:min-h-screen md:order-last md:px-3 lg:px-10"
          >
            <RouterView name="rightSide" />
          </div>
          <div
            class="w-full md:w-1/2 xl:w-7/12 md:min-h-screen md:border-r md:order-first md:px-3 lg:px-10"
          >
            <RouterView name="leftSide" :detectWidth="detectWidth" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

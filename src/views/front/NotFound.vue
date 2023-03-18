<script setup>
import { onMounted, ref } from "vue";
import Lipstick404JSON from "@/assets/JSON/404.json";
import { useI18n } from "vue-i18n";

const anim = ref(null);

const toPause = () => {
  setTimeout(() => {
    anim.value.pause();
  }, 3000);
};

// 變更語系
const { locale } = useI18n({ useScope: "global" });

onMounted(() => {
  anim.value.play();
  anim.value.setSpeed(1.2);
  toPause();

  locale.value = localStorage.getItem("language");
});
</script>

<template>
  <div>
    <div
      class="w-screen h-screen bg-white flex flex-col justify-center items-center"
    >
      <lottie-animation
        ref="anim"
        :animationData="Lipstick404JSON"
        :loop="false"
        :autoPlay="true"
        class="w-36 -m-8"
      />
      <div class="text-center">
        <div class="mb-20">
          <h1 class="font-bold text-4xl font-bodoni md:text-6xl uppercase mb-3">
            Only Staff
          </h1>
          <p class="text-xl text-black/40 tracking-wide">{{ $t("404") }}</p>
        </div>
        <router-link to="/" class="btn btn-dark">
          {{ $t("backToHome") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

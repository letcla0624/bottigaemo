<script setup>
import { onMounted, ref } from "vue";
import loveJSON from "@/assets/JSON/love.json";

const anim = ref(null);

onMounted(() => {
  anim.value.play();
});
</script>

<template>
  <div>
    <lottie-animation
      ref="anim"
      :animationData="loveJSON"
      :loop="false"
      :autoPlay="true"
      class="w-14 absolute -top-1 -right-[6px] scale-125 z-0"
    />
  </div>
</template>

<style lang="scss" scoped></style>

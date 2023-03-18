<script setup>
import { onMounted, ref } from "vue";
import walkingWomanJSON from "@/assets/JSON/walking-woman.json";

const anim = ref(null);

onMounted(() => {
  anim.value.play();
  anim.value.setSpeed(1.8);
});
</script>

<template>
  <div>
    <div
      class="w-screen h-screen bg-white/90 fixed flex flex-col justify-center items-center z-50"
    >
      <lottie-animation
        ref="anim"
        :animationData="walkingWomanJSON"
        :loop="true"
        :autoPlay="true"
        class="w-24"
      />
      <p
        class="text-sm text-primary-dark font-bodoni uppercase tracking-widest"
      >
        Loading...
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

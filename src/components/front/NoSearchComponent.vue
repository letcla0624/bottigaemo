<script setup>
import { onMounted, ref } from "vue";
import noSearchJSON from "@/assets/JSON/noSearch.json";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

const anim = ref(null);

onMounted(() => {
  anim.value.play();
});
</script>

<template>
  <div>
    <div
      class="flex flex-col justify-center items-center text-center px-2 py-32 z-50"
    >
      <lottie-animation
        ref="anim"
        :animationData="noSearchJSON"
        :loop="true"
        :autoPlay="true"
        class="w-40 md:w-60"
      />
      <h3 class="text-2xl my-2">
        <MagnifyingGlassIcon class="w-6 h-6 stroke-1 inline mr-1" />
        {{ $t("noSearch") }}
      </h3>
      <p class="text-black/50">{{ $t("reSearch") }}</p>
    </div>
  </div>
</template>

<script setup>
import { useSeparatorPath } from "@/composable/separatorPath.js";
import { onMounted } from "vue";

onMounted(() => {
  useSeparatorPath();
});
</script>

<template>
  <svg
    class="separator separator-down"
    width="100%"
    height="100%"
    viewBox="0 0 100 10"
    preserveAspectRatio="none"
  >
    <slot>
      <path
        class="path-anim"
        data-path-to="M 0 0 C 35 21 70 0 100 0 L 0 0 Z"
        vector-effect="non-scaling-stroke"
        d="M 0 0 C 37 0 70 0 100 0 L 0 0 Z"
      />
    </slot>
  </svg>
</template>

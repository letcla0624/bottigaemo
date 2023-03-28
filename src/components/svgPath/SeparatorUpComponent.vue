<script setup>
import { useSeparatorPath } from "@/composable/separatorPath.js";
import { onMounted } from "vue";

onMounted(() => {
  useSeparatorPath();
});
</script>

<template>
  <svg
    class="separator separator-up"
    width="100%"
    height="100%"
    viewBox="0 0 100 10"
    preserveAspectRatio="none"
  >
    <slot>
      <path
        class="path-anim"
        data-path-to="M 24 0 C 33 0 37 10 49 10 C 61 10 65 0.1 74 0 C 83 0 90 10 100 0 L 100 10 L 0 10 L 0 0 C 9 7 15 0.1 24 0 Z"
        vector-effect="non-scaling-stroke"
        d="M 24 0 C 33 0 30 0 49 0 C 64 0 65 0.1 74 0 C 83 0 82 0 100 0 L 100 10 L 0 10 L 0 0 C 11 0 15 0.1 24 0 Z"
      />
    </slot>
  </svg>
</template>

<style lang="scss">
.separator {
  display: block;
  position: absolute;
  z-index: 1;
  pointer-events: none;
  width: 100%;
  height: 100px;
  left: 0;

  &-up {
    top: -99px;
  }

  &-down {
    bottom: -99px;
  }
}
</style>

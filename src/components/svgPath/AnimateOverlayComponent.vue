<script setup>
import { onMounted, inject } from "vue";

const isOpen = inject("isOpen");

const props = defineProps({
  animation: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits(["is-open"], ["end-animate"]);

const switchPages = () => {
  emit("is-open", isOpen);
};

onMounted(() => {
  const overlayPath = document.querySelector(".overlayPath");

  const paths = {
    step1: {
      unfilled: "M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z",
      inBetween: "M 0 0 h 33 c -30 54 113 65 0 100 H 0 V 0 Z",
      filled: "M 0 0 h 100 c 0 50 0 50 0 100 H 0 V 0 Z",
    },
    step2: {
      filled: "M 100 0 H 0 c 0 50 0 50 0 100 h 100 V 50 Z",
      inBetween: "M 100 0 H 50 c 28 43 4 81 0 100 h 50 V 0 Z",
      unfilled: "M 100 0 H 100 c 0 50 0 50 0 100 h 0 V 0 Z",
    },
  };

  props.animation
    .set(overlayPath, {
      attr: { d: paths.step1.unfilled },
    })
    .to(
      overlayPath,
      {
        duration: 0.8,
        ease: "power3.in",
        attr: { d: paths.step1.inBetween },
      },
      0
    )
    .to(overlayPath, {
      duration: 0.2,
      ease: "power1",
      attr: { d: paths.step1.filled },
      onComplete: () => switchPages(),
    })
    .set(overlayPath, {
      attr: { d: paths.step2.filled },
    })
    .to(overlayPath, {
      duration: 0.15,
      ease: "sine.in",
      attr: { d: paths.step2.inBetween },
    })
    .to(overlayPath, {
      duration: 1,
      ease: "power4",
      attr: { d: paths.step2.unfilled },
    });
});
</script>

<template>
  <svg
    class="fixed pointer-events-none h-full z-50"
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <path
      class="overlayPath fill-primary-dark"
      vector-effect="non-scaling-stroke"
      d="M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z"
    />
  </svg>
</template>

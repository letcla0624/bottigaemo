<script setup>
import { RouterView } from "vue-router";
import { onMounted, ref, provide } from "vue";
import { NConfigProvider } from "naive-ui";
import AOS from "aos";

const themeOverrides = {
  common: {
    primaryColor: "#5698c3",
  },
  Select: {
    peers: {
      InternalSelection: {
        textColor: "#0f1423",
      },
    },
  },
};

const detectWidth = ref(null);
provide("detectWidth", detectWidth);

const year = ref(null);
provide("year", year);
const getDate = () => {
  year.value = new Date().getFullYear();
};

onMounted(() => {
  detectWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    detectWidth.value = window.innerWidth;
  });

  // 禁止右鍵
  document.oncontextmenu = function () {
    window.event.returnValue = false;
  };

  localStorage.setItem("language", "zh_TW");

  getDate();
  AOS.init();
});
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <RouterView />
  </n-config-provider>
</template>

<style lang="scss">
#app {
  height: 100%;
  -webkit-overflow-scrolling: touch;
}

.fadeIn-enter-active,
.fadeIn-enter-active {
  transition: all 0.8s;
}

.fadeIn-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.fadeIn-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.main {
  z-index: 1;
}

.iconHover {
  transition: all 0.2s;

  &:hover {
    transform: scale(1.15);
  }
}

.hoverBar {
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background-color: currentColor;
    height: 1px;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: all 0.2s ease;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
}

// 難纏的藍色外框
:focus,
:focus-visible {
  @media screen and (min-width: 640px) {
    outline: transparent auto 0px !important;
  }
}

// swiper 手機很卡
.swiper-slide {
  transition: transform 0.3s ease-out;
}

.swiper-container {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.swiper-pagination-bullet {
  background-color: var(--color-primary) !important;
}

// 圖片比例
.aspect-ratio {
  &-16-9 {
    aspect-ratio: 16 / 9;
  }

  &-19-16 {
    aspect-ratio: 9 / 16;
  }

  &-4-3 {
    aspect-ratio: 4 / 3;
  }

  &-1-1 {
    aspect-ratio: 1 / 1;
  }
}

// table 第一列固定
table thead th:first-child,
table tbody th {
  position: sticky;
  width: 140px;
  left: 0.5rem;
  background: white;
  z-index: 1;
}

// toast message
.Toastify {
  &__toast {
    border-radius: 0 !important;
    color: var(--color-primary-dark) !important;

    &--error {
      color: var(--toastify-color-error) !important;
    }
  }

  &__progress-bar {
    &-theme--light {
      background: var(--color-primary-dark) !important;
    }

    &--error {
      background: var(--toastify-color-error) !important;
    }
  }
}

// n-card
.n-base-close {
  &:before {
    background-color: transparent !important;
  }
}

// n-dialog
.n-dialog .n-dialog__icon {
  color: var(--color-primary-dark);
}
</style>

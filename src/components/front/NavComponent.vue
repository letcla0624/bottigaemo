<script setup>
import { RouterLink, useRoute } from "vue-router";
import { inject, ref, reactive, watch, onMounted } from "vue";
import { gsap } from "gsap";
import { NBadge, NDrawer, NDrawerContent, NTooltip } from "naive-ui";
import { toThousands } from "@/composable/toThousands.js";

import HeartFillComponent from "@/components/svgPath/HeartFillComponent.vue";
import AnimateOverlayComponent from "@/components/svgPath/AnimateOverlayComponent.vue";
import DeleteModal from "@/components/modal/DeleteModal.vue";

import {
  ShoppingBagIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/vue/24/outline";

import { storeToRefs } from "pinia";
import { useFrontCartStore } from "@/stores/frontCartStore.js";
import { useFrontFavoriteStore } from "@/stores/frontFavoriteStore.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia carts
const frontCartStore = useFrontCartStore();
const { cart, cartsTotal, loadingCart, enTotal } = storeToRefs(frontCartStore);
const { getCarts, updateCart } = frontCartStore;

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const frontFavoriteStore = useFrontFavoriteStore();
const { favoriteProdArr } = storeToRefs(frontFavoriteStore);
const { getFavorite } = frontFavoriteStore;
onMounted(() => {
  getFavorite();
});

const detectWidth = inject("detectWidth");

const isAnimating = ref(false);
const animation = gsap.timeline({
  paused: true,
  onComplete: () => (isAnimating.value = false),
});

const runAnimate = () => {
  isAnimating.value = true;
  animation.restart();
};

const emit = defineEmits(["open-menu"]);
const menuDisabled = ref(false);
const openMenu = () => {
  menuDisabled.value = true;
  emit("open-menu");
  runAnimate();

  setTimeout(() => {
    menuDisabled.value = false;
  }, 1200);
};

const isOpenMenu = ref(false);
const changeMenu = (isOpen) => {
  isOpenMenu.value = isOpen.value;
};

// 路由改變選單收合
const route = useRoute();
watch(
  () => route.path,
  () => {
    isOpenMenu.value = false;
  }
);

const active = ref(false);
const placement = ref("right");
const activate = (place) => {
  active.value = true;
  placement.value = place;
};

// 監聽滑鼠捲動方向
const windowScrollTop = ref(0);
const navBar = ref(null);
onMounted(() => {
  document.addEventListener("scroll", () => {
    windowScrollTop.value = document.scrollingElement.scrollTop;
  });

  getCarts();
});

const showModal = ref(false);
const tempCartItem = reactive({ obj: {} });
const closeModal = () => {
  showModal.value = false;
};
const openDelModal = (cartItem) => {
  tempCartItem.obj = { ...cartItem };
  showModal.value = true;
};
</script>

<template>
  <header
    class="fixed top-0 w-screen flex justify-between items-center px-2 md:px-4 py-4 z-50 transition-all duration-500"
    :class="{ 'bg-white/90': windowScrollTop > 0 }"
    ref="navBar"
  >
    <button
      type="button"
      class="nav-toggle w-[82px] sm:w-[136px] text-left flex"
      :class="{ active: isOpenMenu }"
      @click.prevent="openMenu"
      :disabled="menuDisabled"
    >
      <span class="text-sm mr-2 hidden sm:inline">
        <span v-show="!isOpenMenu"></span>
        <span v-show="isOpenMenu"></span>
      </span>
      <span class="nav-navIcon">
        <span class="nav-navIcon-line"></span>
        <span class="nav-navIcon-line"></span>
        <span class="nav-navIcon-line"></span>
      </span>
    </button>
    <div
      class="nav-menu w-full h-screen bg-white fixed top-0 left-0 justify-center items-center overflow-hidden text-center -z-[1] hidden"
      :class="{ active: isOpenMenu }"
    >
      <ul class="md:text-2xl">
        <li>
          <RouterLink to="/" class="uppercase">
            {{ $t("menu.index") }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/products" class="uppercase">
            {{ $t("menu.products") }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/articles" class="uppercase">
            {{ $t("menu.articles") }}
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about" class="uppercase">
            {{ $t("menu.aboutUs") }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <RouterLink to="/">
      <h1
        class="text-2xl font-bodoni tracking-tighter text-primary-dark transition-all ease-in-out duration-300"
        :class="[
          { 'text-4xl': detectWidth >= 640 },
          { 'sm:text-3xl': windowScrollTop > 0 },
        ]"
      >
        <em>Bottiga</em>emo
      </h1>
    </RouterLink>
    <ul class="flex items-center -z-10 pr-3 sm:pr-4">
      <li class="ml-3">
        <RouterLink to="/favorite">
          <n-tooltip trigger="hover">
            <template #trigger>
              <HeartIcon
                v-if="favoriteProdArr.arr.length === 0"
                class="iconHover w-6 h-6"
              />
              <HeartFillComponent
                v-else
                class="cursor-pointer iconHover w-6 h-6 fill-primary-dark"
              />
            </template>
            {{ $t("menu.myFavorites") }}
          </n-tooltip>
        </RouterLink>
      </li>
      <li class="ml-6 sm:ml-16">
        <button type="button" @click="activate('right')">
          <n-badge :value="cartsTotal" :max="10" color="black">
            <ShoppingBagIcon class="iconHover w-6 h-6" />
          </n-badge>
        </button>
      </li>
    </ul>
  </header>

  <n-drawer
    v-model:show="active"
    :placement="placement"
    :width="detectWidth < 502 ? `90%` : 502"
    :z-index="2010"
  >
    <n-drawer-content closable>
      <template #header>
        <h5 class="text-xl flex items-center">
          <template v-if="localLang === 'zh_TW'"> 我的購物袋 </template>
          <template v-else-if="localLang === 'en'"> My Shopping Bag </template>
          <span class="text-xs text-gray-500 font-normal ml-2">
            ({{ cartsTotal }})
          </span>
        </h5>
      </template>
      <div
        v-if="cartsTotal === 0"
        class="h-full flex flex-col justify-center items-center text-center text-black/40"
      >
        <ShoppingBagIcon class="w-7 h-7" />
        <h3 class="text-base pt-3 pb-5">
          <template v-if="localLang === 'zh_TW'">
            您的購物袋目前沒有產品
          </template>
          <template v-else-if="localLang === 'en'">
            Your shopping bag currently has no products.
          </template>
        </h3>
        <router-link
          to="/products"
          class="btn btn-dark md:w-1/3"
          @click="active = false"
        >
          <template v-if="localLang === 'zh_TW'"> 前往購物 </template>
          <template v-else-if="localLang === 'en'"> Go shopping </template>
        </router-link>
      </div>
      <ul v-else>
        <li
          v-for="cartItem in cart.arr.carts"
          :key="cartItem.product_id"
          class="py-4 border-b"
        >
          <div class="flex items-center">
            <router-link
              :to="`/prod/${cartItem.product.id}`"
              @click="active = false"
            >
              <div class="w-20 h-20">
                <img
                  :src="cartItem.product.imageUrl"
                  :alt="cartItem.product.title"
                  class="object-cover max-w-[80px] h-full"
                />
              </div>
            </router-link>
            <div class="w-full pl-3">
              <div class="flex justify-between items-start mb-3">
                <router-link
                  :to="`/prod/${cartItem.product.id}`"
                  @click="active = false"
                >
                  <h3 class="font-bold line-clamp-1 hoverBar">
                    <template v-if="localLang === 'zh_TW'">
                      {{ cartItem.product.title }}
                    </template>
                    <template v-else-if="localLang === 'en'">
                      {{ cartItem.product.enTitle }}
                    </template>
                  </h3>
                  <p v-if="cartItem.setSize" class="text-xs">
                    {{ cartItem.setSize }}
                  </p>
                </router-link>
                <n-tooltip trigger="hover">
                  <template #trigger>
                    <button
                      type="button"
                      class="p-2 pt-0 pr-0 disabled:opacity-25 disabled:cursor-not-allowed"
                      @click="openDelModal(cartItem)"
                      :disabled="loadingCart === cartItem.id"
                    >
                      <TrashIcon class="w-5 h-5" />
                    </button>
                  </template>
                  {{ $t("delete") }}
                </n-tooltip>
              </div>

              <div class="flex justify-between items-center w-full">
                <select
                  class="focus:border-primary-dark focus:ring-0 w-1/3 min-w-[72px] py-1"
                  v-model="cartItem.qty"
                  @change="updateCart(cartItem)"
                  :disabled="loadingCart === true"
                >
                  <option
                    v-for="i in cartItem.product.in_stock"
                    :key="`num_${i}`"
                    :value="i"
                  >
                    {{ i }}
                  </option>
                </select>
                <p class="text-right">
                  <template v-if="localLang === 'zh_TW'">
                    NT$ {{ toThousands(cartItem.total) }}
                  </template>
                  <template v-else-if="localLang === 'en'">
                    $ {{ toThousands(cartItem.item_enTotal) }}
                  </template>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <template #footer>
        <div
          class="flex justify-between items-center w-full"
          :class="{ 'text-black/20': cartsTotal === 0 }"
        >
          <strong class="text-xl">
            <template v-if="localLang === 'zh_TW'">
              NT$ {{ toThousands(cart.arr.total) }}
            </template>
            <template v-else-if="localLang === 'en'">
              $ {{ toThousands(enTotal) }}
            </template>
          </strong>
          <button
            type="button"
            class="btn btn-dark w-1/3 disabled:opacity-25 disabled:cursor-not-allowed"
            :disabled="cartsTotal === 0 || cart.arr.carts.length === 0"
            @click="$router.push('/checkout')"
          >
            <template v-if="localLang === 'zh_TW'"> 前往付款 </template>
            <template v-else-if="localLang === 'en'"> Checkout </template>
          </button>
        </div>
      </template>
    </n-drawer-content>
  </n-drawer>

  <DeleteModal
    :del-item="tempCartItem"
    :show-modal="showModal"
    @close-modal="closeModal"
  />

  <AnimateOverlayComponent :animation="animation" @is-open="changeMenu" />
</template>

<style lang="scss" scoped>
.nav-toggle {
  &:hover {
    .nav-navIcon {
      .nav-navIcon-line {
        &:nth-of-type(1) {
          transform: translate(0, 3px);
        }
        &:nth-of-type(3) {
          transform: translate(0, -3px);
        }
      }
    }
  }

  &.active {
    .nav-navIcon {
      .nav-navIcon-line {
        &:nth-of-type(1) {
          transform: translate(0px, 10px) rotate(45deg);
          transition-delay: 0.1s;
        }
        &:nth-of-type(2) {
          transform: scaleX(0);
          opacity: 0;
        }
        &:nth-of-type(3) {
          transform: translate(0px, -9px) rotate(-45deg);
          transition-delay: 0.1s;
        }
      }
    }
  }

  .nav-navIcon {
    vertical-align: middle;
    width: 24px;
    height: 20px;
    display: inline-block;

    .nav-navIcon-line {
      background-color: currentColor;
      width: 100%;
      height: 1.5px;
      margin-bottom: 8px;
      transform-origin: center;
      transition: all 0.15s ease-out;
      transition-property: transform, opacity;
      display: block;

      &:nth-of-type(2) {
        transform-origin: center;
        width: 65%;
      }
    }
  }
}
.nav-menu {
  &.active {
    display: flex;
  }

  li {
    a {
      color: inherit;
      text-align: center;
      text-decoration: none;
      padding: 16px;
      margin: 20px 0;
      display: inline-block;
      transition: all 0.2s ease;
      position: relative;
      opacity: 0.6;

      &.router-link-exact-active,
      &:hover {
        transform: scale(1.2);
        color: var(--color-primary-dark);
        opacity: 1;

        &:after {
          transform: scaleX(1);
        }
      }

      &:after {
        background-color: currentColor;
        width: 32px;
        height: 1px;
        margin: 0 auto;
        left: 0;
        right: 0;
        bottom: 8px;
        transform: scaleX(0);
        transition: all 0.2s ease;
        position: absolute;
        content: "";
      }
    }
  }
}
</style>

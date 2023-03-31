<script setup>
import { ref, reactive, onMounted, inject, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import LoadingComponent from "@/components/LoadingComponent.vue";
import loveJSON from "@/assets/JSON/love.json";
import { toThousands } from "@/composable/toThousands.js";
import HeartFillComponent from "@/components/svgPath/HeartFillComponent.vue";
import SwiperOtherProdsComponent from "@/components/front/prod/SwiperOtherProdsComponent.vue";
import BreadComponent from "@/components/front/BreadComponent.vue";
import MetaComponent from "@/components/front/MetaComponent.vue";
import ClothesModal from "@/components/modal/ClothesModal.vue";
import VideoModal from "@/components/modal/VideoModal.vue";
import { NDivider } from "naive-ui";
import {
  HeartIcon,
  PlayCircleIcon,
  ScissorsIcon,
} from "@heroicons/vue/24/outline";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import { Mousewheel, FreeMode } from "swiper";

import { storeToRefs } from "pinia";
import { useFrontCartStore } from "@/stores/frontCartStore.js";
import { useFrontFavoriteStore } from "@/stores/frontFavoriteStore.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia cart
const frontCartStore = useFrontCartStore();
const { newCartArr, loadingCart } = storeToRefs(frontCartStore);
const { getCarts, addToCart } = frontCartStore;

// pinia favorite
const frontFavoriteStore = useFrontFavoriteStore();
const { favoriteProdArr } = storeToRefs(frontFavoriteStore);
const { toggleFavorite } = frontFavoriteStore;

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const detectWidth = inject("detectWidth");
const modules = [Mousewheel, FreeMode];

const showModal = ref(false);
const showVideoModal = ref(false);
const closeModal = () => {
  showModal.value = false;
  showVideoModal.value = false;
};

const setSize = ref("");
const qty = ref(1);
const route = useRoute();

const defaultQty = () => {
  setTimeout(() => {
    qty.value = 1;
  }, 3500);
};

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
const product = reactive({ obj: {} });
const isLoading = ref(false);

const getProduct = async () => {
  const { id } = route.params;
  isLoading.value = true;
  try {
    const res = await axios.get(
      `${VITE_APP_API}/api/${VITE_APP_PATH}/product/${id}`
    );

    isLoading.value = false;
    product.obj = res.data.product;
    getCategoryProducts();

    metaData.title = `${product.obj.title} | Bottigaemo`;
    metaData.enTitle = `${product.obj.enTitle} | Bottigaemo`;
  } catch (err) {
    isLoading.value = false;
    alert(err.response.data.message);
  }
};

const categoryProducts = reactive({ arr: [] });
const getCategoryProducts = async () => {
  const { category } = product.obj;
  const { id } = route.params;

  try {
    const res = await axios.get(
      `${VITE_APP_API}/api/${VITE_APP_PATH}/products?category=${category}`
    );

    // 移除相同 id 產品
    categoryProducts.arr = res.data.products.filter(function (item) {
      return item.id !== id;
    });
  } catch (err) {
    alert(err.response.data.message);
  }
};

// 加入願望清單動畫
const anim = ref(null);
const startFavoriteAnimFn = (id) => {
  const prodId = JSON.parse(localStorage.getItem("prodId"));

  if (prodId.includes(id)) {
    anim.value.play();
  }

  setTimeout(() => {
    anim.value.stop();
  }, 1200);
};

let tempCart = reactive({ arr: [] });
const overStock = ref(false);
const resultIndex = ref(0);

// 判斷此商品有沒有在購物車裡
const init = () => {
  if (tempCart.arr.length !== 0) {
    tempCart.arr = [...newCartArr.value];

    resultIndex.value = tempCart.arr
      .map((item) => {
        return item.productId;
      })
      .indexOf(route.params.id);

    overStock.value = tempCart.arr[resultIndex.value]?.overStock;
  }
};

// 監聽 cart 單一產品的數量有沒有大於限定數量
watch(newCartArr, (newVal) => {
  if (newVal.length !== 0) {
    resultIndex.value = newVal
      .map((item) => item.productId)
      .indexOf(route.params.id);

    overStock.value = newVal[resultIndex.value]?.overStock;
  } else {
    overStock.value = false;
  }
});

onMounted(async () => {
  await getProduct();
  await getCarts();
  await init();
});

// 設定 meta
const metaData = reactive({
  title: "",
  enTitle: "",
  url: `${import.meta.env.VITE_APP_URL}/#/${route.params.id}`,
});
</script>

<template>
  <div>
    <MetaComponent :meta-data="metaData" :localLang="localLang" />
    <div class="pt-[72px]">
      <LoadingComponent v-if="isLoading" />
      <div v-else>
        <div class="lg:flex justify-center items-center top-0">
          <swiper
            slidesPerView="1.15"
            spaceBetween="8"
            :breakpoints="{
              '320': {
                spaceBetween: 8,
              },
              '768': {
                spaceBetween: 16,
              },
              '1024': {
                spaceBetween: 32,
              },
            }"
            :mousewheel="true"
            :freeMode="detectWidth >= 768 ? true : false"
            :modules="modules"
            class="lg:w-7/12 lg:mt-20 4xl:h-[80vh]"
          >
            <swiper-slide
              v-for="(pic, idx) in product.obj.imagesUrl"
              :key="idx"
            >
              <img
                :src="pic"
                :alt="
                  localLang === 'zh_TW'
                    ? product.obj.title
                    : product.obj.enTitle
                "
                class="w-full h-full object-cover"
              />
            </swiper-slide>
          </swiper>
          <div
            class="lg:w-5/12 flex flex-col justify-center items-center lg:order-first"
          >
            <div
              class="lg:w-4/5 xl:w-10/12 2xl:w-7/12 p-4 lg:pl-0 mt-5 xl:mt-0"
            >
              <BreadComponent
                :prod-title="product.obj.title"
                :prod-en-title="product.obj.enTitle"
              />
              <div>
                <h2 class="text-2xl xl:text-3xl uppercase">
                  <template v-if="localLang === 'zh_TW'">
                    {{ product.obj.title }}
                  </template>
                  <template v-else-if="localLang === 'en'">
                    {{ product.obj.enTitle }}
                  </template>
                </h2>
                <h3
                  v-if="product.obj.subtitle || product.obj.enSubtitle"
                  class="text-base text-black/50 py-1"
                >
                  <template v-if="localLang === 'zh_TW'">
                    {{ product.obj.subtitle }}
                  </template>
                  <template v-else-if="localLang === 'en'">
                    {{ product.obj.enSubtitle }}
                  </template>
                </h3>
                <div class="flex justify-between items-center">
                  <p class="text-lg my-3">
                    <template v-if="localLang === 'zh_TW'">
                      NT$ {{ toThousands(product.obj.price) }}
                    </template>
                    <template v-else-if="localLang === 'en'">
                      $ {{ toThousands(product.obj.enPrice) }}
                    </template>
                  </p>
                  <div class="relative">
                    <button
                      type="button"
                      class="relative p-3 z-[1]"
                      @click="
                        toggleFavorite(product.obj.id);
                        startFavoriteAnimFn(product.obj.id);
                      "
                    >
                      <n-tooltip
                        trigger="hover"
                        v-if="!favoriteProdArr.arr.includes(product.obj.id)"
                      >
                        <template #trigger>
                          <HeartIcon class="cursor-pointer iconHover w-5 h-5" />
                        </template>
                        {{ $t("addFavorites") }}
                      </n-tooltip>
                      <n-tooltip trigger="hover" v-else>
                        <template #trigger>
                          <HeartFillComponent
                            class="cursor-pointer iconHover w-5 h-5 fill-primary-dark"
                          />
                        </template>
                        {{ $t("removeFavorites") }}
                      </n-tooltip>
                    </button>
                    <lottie-animation
                      ref="anim"
                      :animationData="loveJSON"
                      :loop="false"
                      :autoPlay="false"
                      class="w-14 absolute -top-1 -right-[6px] scale-125 z-0"
                    />
                  </div>
                </div>
                <div
                  class="grid gap-2 mt-5"
                  :class="{ 'grid-cols-2': product.obj.setSize }"
                >
                  <div v-if="product.obj.setSize" class="flex flex-col">
                    <select
                      class="focus:border-primary-dark focus:ring-0 py-3"
                      v-model="setSize"
                    >
                      <option value="" disabled>{{ $t("choose") }}</option>
                      <option
                        v-for="size in product.obj.setSize"
                        :key="`num_${size}`"
                        :value="size"
                        :selected="size"
                      >
                        {{ size }}
                      </option>
                    </select>
                  </div>
                  <button
                    type="button"
                    class="btn btn-dark w-full disabled:opacity-25 disabled:cursor-not-allowed"
                    @click="
                      addToCart(
                        product.obj.id,
                        qty,
                        setSize,
                        product.obj.enPrice
                      );
                      defaultQty();
                    "
                    :disabled="
                      (product.obj.setSize
                        ? setSize === '' || loadingCart === true
                        : loadingCart === true) || overStock === true
                    "
                  >
                    <svg
                      v-if="loadingCart === true"
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {{ $t("addToBag") }}
                  </button>
                </div>
                <p
                  v-if="overStock"
                  class="text-right text-xs text-red-500 mt-1"
                >
                  <b>{{ $t("full") }}</b>
                </p>
                <p
                  v-if="product.obj.setSize"
                  class="text-xs text-black/50 my-3"
                >
                  {{ $t("notice") }}
                </p>
                <button
                  v-if="
                    product.obj.setSize &&
                    route.params.id !== '-NOtotMZnrQ7orIGBbWu'
                  "
                  type="button"
                  class="flex items-center mt-4 hoverBar hover:text-primary"
                  preset="card"
                  @click="showModal = true"
                >
                  <ScissorsIcon class="w-5 h-5 pr-1" />
                  <span class="border-b border-primary-dark pb-1">
                    {{ $t("sizeChart") }}
                  </span>
                </button>
              </div>
              <n-divider />
              <div class="tracking-wider mb-10">
                <h4 class="text-base text-black/50 mb-5">
                  {{ $t("info") }}
                </h4>
                <p class="mb-5">
                  <template v-if="localLang === 'zh_TW'">
                    {{ product.obj.description }}
                  </template>
                  <template v-else-if="localLang === 'en'">
                    {{ product.obj.enDescription }}
                  </template>
                </p>
                <div
                  v-if="product.obj.content || product.obj.enContent"
                  class="py-5"
                >
                  <template v-if="localLang === 'zh_TW'">
                    {{ product.obj.content }}
                  </template>
                  <template v-else-if="localLang === 'en'">
                    {{ product.obj.enContent }}
                  </template>
                </div>
                <ul class="py-5">
                  <li
                    v-if="
                      product.obj.product_material ||
                      product.obj.product_enMaterial
                    "
                    class="py-1"
                  >
                    {{ $t("composition") }}
                    <template v-if="localLang === 'zh_TW'">
                      {{ product.obj.product_material }}
                    </template>
                    <template v-else-if="localLang === 'en'">
                      {{ product.obj.product_enMaterial }}
                    </template>
                  </li>
                  <li
                    v-if="
                      product.obj.product_volume || product.obj.product_enVolume
                    "
                    class="py-1"
                  >
                    <template v-if="localLang === 'zh_TW'">
                      {{ product.obj.product_volume }}
                    </template>
                    <template v-else-if="localLang === 'en'">
                      {{ product.obj.product_enVolume }}
                    </template>
                  </li>
                  <li
                    v-if="
                      product.obj.product_colors || product.obj.product_enColors
                    "
                    class="py-1"
                  >
                    {{ $t("colors") }}
                    <template v-if="localLang === 'zh_TW'">
                      {{ product.obj.product_colors }}
                    </template>
                    <template v-else-if="localLang === 'en'">
                      {{ product.obj.product_enColors }}
                    </template>
                  </li>
                  <li
                    v-if="product.obj.made_place || product.obj.made_enPlace"
                    class="py-1"
                  >
                    {{ $t("made") }}
                    <template v-if="localLang === 'zh_TW'">
                      {{ product.obj.made_place }}
                    </template>
                    <template v-else-if="localLang === 'en'">
                      {{ product.obj.made_enPlace }}
                    </template>
                  </li>
                  <li v-if="product.obj.product_number" class="py-1">
                    {{ $t("pdNb") }}
                    {{ product.obj.product_number }}
                  </li>
                </ul>
                <div
                  v-if="product.obj.videoId"
                  class="flex justify-between items-center"
                >
                  <button
                    type="button"
                    class="flex items-center hover:text-primary hoverBar"
                    @click="showVideoModal = true"
                  >
                    <PlayCircleIcon class="w-5 h-5 inline stroke-2 pr-1" />
                    <span class="border-b border-primary-dark pb-1">
                      {{ $t("watchVideo") }}
                    </span>
                  </button>
                </div>

                <VideoModal
                  :show-modal="showVideoModal"
                  :close-modal="closeModal"
                  :video-id="product.obj.videoId"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="categoryProducts.arr.length !== 0"
          class="pt-20 md:pt-36 pb-10"
        >
          <h3 class="text-center text-xl md:text-3xl font-bold tracking-wide">
            {{ $t("command") }}
          </h3>
          <SwiperOtherProdsComponent :category-products="categoryProducts" />
        </div>
      </div>

      <!-- 尺碼 Modal -->
      <ClothesModal :show-modal="showModal" :close-modal="closeModal" />
    </div>
  </div>
</template>

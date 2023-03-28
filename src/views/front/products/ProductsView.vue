<script setup>
import { ref, reactive, inject, onMounted } from "vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import LoveComponent from "@/components/front/LoveComponent.vue";
import HeartFillComponent from "@/components/svgPath/HeartFillComponent.vue";
import NoSearchComponent from "@/components/front/NoSearchComponent.vue";
import MetaComponent from "@/components/front/MetaComponent.vue";
import { toThousands } from "@/composable/toThousands.js";

import {
  AdjustmentsHorizontalIcon,
  PlusIcon,
  HeartIcon,
} from "@heroicons/vue/24/outline";

import {
  NDrawer,
  NDrawerContent,
  NCheckboxGroup,
  NGrid,
  NGi,
  NDivider,
} from "naive-ui";

import { storeToRefs } from "pinia";
import { useFrontProductsStore } from "@/stores/frontProductsStore.js";
import { useFrontFavoriteStore } from "@/stores/frontFavoriteStore.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia getProducts
const frontProductsStore = useFrontProductsStore();
const { products, isLoading } = storeToRefs(frontProductsStore);
const { getProducts } = frontProductsStore;

// pinia favorite
const frontFavoriteStore = useFrontFavoriteStore();
const { favoriteProdArr, startFavoriteAnim } = storeToRefs(frontFavoriteStore);
const { toggleFavorite } = frontFavoriteStore;

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const detectWidth = inject("detectWidth");
const year = inject("year");

// naive ui
const active = ref(false);
const placement = ref("right");
const activate = (place) => {
  active.value = true;
  placement.value = place;
};

let tempProducts = reactive({ arr: [] });
const filters = reactive({ arr: [] });
const filterProducts = ref([]);
const sortSelect = ref("");

const sortPrice = () => {
  if (filters.arr.length === 0 && filterProducts.value.length === 0) {
    filterProducts.value = products.value.arr;
  }

  if (sortSelect.value === "normal") {
    init();
    filters.arr = [];
    filterProducts.value.length = 0;
  } else if (sortSelect.value === "heightToLow") {
    tempProducts.arr = filterProducts.value.sort((a, b) => b.price - a.price);
  } else if (sortSelect.value === "lowToHeight") {
    tempProducts.arr = filterProducts.value.sort((a, b) => a.price - b.price);
  }
};

const filterCategory = async () => {
  const bigPics = document.querySelectorAll(".bigPic");
  tempProducts = { ...products.value };

  if (filters.arr.length === 0) {
    bigPics.forEach((item) => {
      detectWidth.value >= 768
        ? item.classList.remove("hidden")
        : item.classList.add("hidden");
    });
  } else {
    bigPics.forEach((item) => {
      item.classList.add("hidden");
    });

    filterProducts.value = products.value.arr.filter((item) =>
      filters.arr.includes(item.category)
    );

    if (sortSelect.value !== "normal") {
      sortPrice();
    } else {
      sortSelect.value = "";
    }

    tempProducts.arr = filterProducts.value;
  }
};

const init = () => {
  getProducts();
  tempProducts = products.value;
};

onMounted(() => {
  init();
});

// 設定 meta
const metaData = reactive({
  title: "全部產品 - 包、服飾、配件、香水、美妝 | Bottigaemo",
  enTitle: `All Products - Bags, Clothing, Accessories, Perfume, Mockup | Bottigaemo`,
  url: `${import.meta.env.VITE_APP_URL}/#/products`,
});
</script>

<template>
  <div>
    <MetaComponent :meta-data="metaData" :localLang="localLang" />
    <div class="pt-[72px] md:pt-0">
      <LoadingComponent v-if="isLoading" />
      <div v-else>
        <div class="w-screen relative">
          <div
            class="absolute w-full h-full text-center flex flex-col justify-center items-center z-[1]"
          >
            <div
              class="w-2/3 md:w-auto bg-white/60 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:text-white/90 px-4 py-5 xl:p-10"
            >
              <h2 class="text-xl tracking-wider mb-3 md:mb-1">
                {{ year }}
                <template v-if="localLang === 'zh_TW'"> 時尚單品 </template>
                <template v-else-if="localLang === 'en'">
                  Fashion Items
                </template>
              </h2>
              <p
                class="text-sm"
                :class="{ 'tracking-widest': localLang === 'zh_TW' }"
              >
                <template v-if="localLang === 'zh_TW'">
                  當代女性必備的經典配備，展現女性的高雅品味，都是您的最佳搭配。
                </template>
                <template v-else-if="localLang === 'en'">
                  A classic essential for contemporary women, showcasing their
                  elegant taste, all of which are your best choices to match
                  with.
                </template>
              </p>
            </div>
          </div>
          <div
            class="w-full h-full absolute bg-white/10 z-0 hidden md:block"
          ></div>
          <video
            v-if="detectWidth < 768"
            autoplay
            loop
            muted
            playsinline
            controlslist="nodownload"
            poster="https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678027705055.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fvX5QcNMyUffiFabMNLAh77FbUGpoKYZ5UKdKfyRwrT%2FYYB%2B%2B%2FGOvH%2F6a%2FZ2Gl%2BAPnuCUw8HqAHh5moDwhnXzC9xobTKa4MjRaUb0sjX8Rg2Rx0Lp7wkfgVayQgF0ugVuJS%2BIY7Cu24tZ1gxExchHCEer67M2yqDa6Tl%2Beozbk9kSeXi76Jl%2FXZlJSWGBcJuETs%2Behn7vPzF9z%2FHCaSmjx1IJQvF4MMxWqfeNeCAIXLeITmYRqqojf8YAQTCFSjvLQGVYFoPlUrDejOwj2dihtsh5HqUAgrnneRgiaUSAMMewRnbS2WUoaHcNGXRHrjLVn9W6ZCIvFFOnlTIXe0%2BrQ%3D%3D"
          >
            <source src="/video/products/banner-phone.mp4" type="video/mp4" />
          </video>
          <video
            v-else
            autoplay
            loop
            muted
            playsinline
            controlslist="nodownload"
            poster="https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678027725410.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bEEl5ToZH8d1YmyGCMSycDKBvt9x6R3J9C0yCzsVEA6H8HPyhaGmpW7MdQNkY8l1EVaX1wwK%2FdjUzd3JczS2TK3eCTTqAwgoWaz2zRKiwi2YZzNEq7uqjqnOf%2FobYsjyE6e3Xe%2BA5TWjqZzNFyTbalsISY42yDgKI9dOQRuMaawmG2ipus78wsHl1lciC%2Frxt19I5Pu6t1h0lOA6mztbNgl7ljw8gZjpq6qsbdkDsBULMmU4MZHad%2F1fTbiGpS4g9Z4gVyq8LProBc5N1%2Fv5f%2BoXdQw9kHFTjmoYeeJ%2F3742C1IvOK3Z9BDmdnBJHkSmRjd94NpHzXTv6xHC%2BjAYJQ%3D%3D"
            class="w-full"
          >
            <source src="/video/products/banner.mp4" type="video/mp4" />
          </video>
        </div>
        <div
          class="flex justify-between items-center p-5 border-y mb-1 sticky top-16 md:top-[68px] bg-white z-10"
        >
          <button
            type="button"
            class="flex items-center"
            @click="activate('left')"
          >
            <AdjustmentsHorizontalIcon class="w-4 h-4 inline stroke-2 mr-1" />
            {{ $t("filters") }}
          </button>
          <div class="flex items-center">
            <p class="text-black/50 mx-3 hidden sm:block">
              <template v-if="localLang === 'zh_TW'">
                共 {{ tempProducts.arr.length }} 件商品
              </template>
              <template v-else-if="localLang === 'en'">
                Total {{ tempProducts.arr.length }} products
              </template>
            </p>
            <div class="border-l border-black/40 pl-3">
              <select
                class="form-select text-sm border-0 py-0 focus:ring-0"
                v-model="sortSelect"
                @change="sortPrice()"
              >
                <option value="" disabled>排序方式</option>
                <option value="normal" selected>全部商品</option>
                <option value="heightToLow">價格：由高至低</option>
                <option value="lowToHeight">價格：由低至高</option>
              </select>
            </div>
          </div>
        </div>
        <div
          v-if="tempProducts.arr.length === 0"
          class="flex flex-col justify-center items-center"
        >
          <NoSearchComponent />
        </div>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2 m-2"
        >
          <div
            v-for="(product, idx) in tempProducts.arr"
            :key="product.title"
            class="bg-neutral-100"
          >
            <RouterLink :to="`prod/${product.id}`">
              <div
                class="w-full overflow-hidden relative img-cover pb-3 md:py-10"
              >
                <img
                  :src="product.imageUrl"
                  :alt="localLang === 'zh_TW' ? product.title : product.enTitle"
                  class="w-full transition duration-300"
                />
                <div
                  class="w-full h-full bg-neutral-100/90 opacity-0 flex justify-center items-center absolute top-0 left-0 img-mask hover:opacity-100 transition duration-300"
                >
                  <PlusIcon class="w-4 h-4 inline stroke-2 mr-1" />
                  {{ $t("more") }}
                  <button
                    type="button"
                    class="absolute right-0 top-0 p-3 z-[1]"
                    @click.prevent="toggleFavorite(product.id)"
                  >
                    <n-tooltip
                      trigger="hover"
                      v-if="!favoriteProdArr.arr.includes(product.id)"
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
                  <template v-if="startFavoriteAnim">
                    <LoveComponent :idx="idx" />
                  </template>
                </div>
              </div>
              <div class="md:bg-neutral-100 p-3 md:p-4">
                <div
                  class="flex flex-col md:flex-row justify-between items-center"
                >
                  <h2 class="md:w-1/2 xl:w-2/3 uppercase">
                    <template v-if="localLang === 'zh_TW'">
                      <span class="line-clamp-1">{{ product.title }}</span>
                    </template>
                    <template v-else-if="localLang === 'en'">
                      <span class="line-clamp-1">{{ product.enTitle }}</span>
                    </template>
                  </h2>
                  <p class="md:text-right">
                    <template v-if="localLang === 'zh_TW'">
                      NT$ {{ toThousands(product.price) }}
                    </template>
                    <template v-else-if="localLang === 'en'">
                      $ {{ toThousands(product.enPrice) }}
                    </template>
                  </p>
                </div>
              </div>
            </RouterLink>
          </div>
          <div
            class="col-start-1 col-end-3 row-start-7 row-end-9 md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3 lg:col-start-3 lg:col-end-5 2xl:col-start-4 2xl:col-end-6 lg:row-start-1 lg:row-end-3 overflow-hidden bigPic"
            :class="{ hidden: detectWidth < 768 }"
            ref="bigPic1"
          >
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678030834738.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=a3IKK5%2BUDvmyHRjdageKbuJ25412tvsZIG2zDcHL3FStBD7wEDcG8eIUGQJUAhmufEaflqCl8WL%2BRcg4kd6w0YazLxb5icM9dqMySC9BaQO1F1F2YKbmy4K76t3dyiH2hN1EWwQ1Lqo0l4jEspjMPVo0o2XWHg7oQJEoMVU%2BLG5pwcIR4uepgddRffaZ3ThIKOlFFhVrwmAfJ4ffFylq00nb6iYMhhB0RN2muL2uBkBjqtCZvo87tY%2Fw%2B2uY75ZTCR1VQV85kUGgmT5zk4lZ572HCOFtS%2BoJQ5ngBUk2R1z0sK53UglQTM3qZBH3WbezSy93vw8TCWfz73w5Wgkcwg%3D%3D"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="col-start-1 col-end-3 row-start-8 row-end-10 md:col-start-1 md:col-end-3 md:row-start-5 md:row-end-7 overflow-hidden bigPic"
            :class="{ hidden: detectWidth < 768 }"
            ref="bigPic2"
          >
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678030361374.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TYIOafWEAUxStry%2FFsqesRhL3VlVwJuJ%2FD1S6VYKmC6eOMAInS6ySNeBrXfF8YEv%2BHfwSnWS6tI%2FhRReVrWvb%2B1NUx534XB2Jnxw9TlnLAyq5fA6i%2Bk6CJmjQKvyMRaWwHebeH3yN4fLd4LgNPgnNx9V%2Bcq%2BHZ4XS7AVTWoH78SF5QiUkZp96xBd%2FnTwxJcIiolyTEYZ4tw2GMPim3G%2BVg%2Fj3Nma2mDy%2FCOYXVpR1lUewtmbbPRLE%2BI5xSHvkHs5zUifaQL0VkUuNCKgOe1UZVSSSEPMPYbPcnLbufXJuoTQrpZ1Q7jr7lUO849B7Jl6wUj8J4CDEUEiPzr827w0Pg%3D%3D"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <n-drawer
      v-model:show="active"
      :placement="placement"
      :width="detectWidth < 502 ? `100%` : 502"
      resizable
    >
      <n-drawer-content closable>
        <template #header>
          <h5 class="text-xl flex items-center">
            <template v-if="localLang === 'zh_TW'"> 進階篩選 </template>
            <template v-else-if="localLang === 'en'">
              Advanced Filters
            </template>
          </h5>
        </template>
        <div>
          <div>
            <h3 class="font-bold my-4">
              <template v-if="localLang === 'zh_TW'"> 上半身 </template>
              <template v-else-if="localLang === 'en'"> Upper Body </template>
            </h3>
            <n-checkbox-group class="px-3">
              <n-grid :y-gap="12" :cols="1">
                <n-gi>
                  <input
                    id="clothes"
                    type="checkbox"
                    value="上衣"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="clothes" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 上衣 </template>
                    <template v-else-if="localLang === 'en'">
                      Clothes
                    </template>
                  </label>
                </n-gi>
                <n-gi>
                  <input
                    id="dresses"
                    type="checkbox"
                    value="洋裝"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="dresses" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 洋裝 </template>
                    <template v-else-if="localLang === 'en'">
                      Dresses
                    </template>
                  </label>
                </n-gi>
                <n-gi>
                  <input
                    id="coats"
                    type="checkbox"
                    value="大衣"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="coats" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 大衣 </template>
                    <template v-else-if="localLang === 'en'"> Coats </template>
                  </label>
                </n-gi>
              </n-grid>
            </n-checkbox-group>
          </div>
          <n-divider />
          <div>
            <h3 class="font-bold my-4">
              <template v-if="localLang === 'zh_TW'"> 下半身 </template>
              <template v-else-if="localLang === 'en'"> Lower Body </template>
            </h3>
            <n-checkbox-group class="px-3">
              <n-grid :y-gap="12" :cols="1">
                <n-gi>
                  <input
                    id="pants"
                    type="checkbox"
                    value="褲子"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="pants" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 褲子 </template>
                    <template v-else-if="localLang === 'en'"> Pants </template>
                  </label>
                </n-gi>
                <n-gi>
                  <input
                    id="skirts"
                    type="checkbox"
                    value="裙子"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="skirts" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 裙子 </template>
                    <template v-else-if="localLang === 'en'"> Skirts </template>
                  </label>
                </n-gi>
              </n-grid>
            </n-checkbox-group>
          </div>
          <n-divider />
          <div>
            <h3 class="font-bold my-4">
              <template v-if="localLang === 'zh_TW'"> 配件 </template>
              <template v-else-if="localLang === 'en'"> Accessories </template>
            </h3>
            <n-checkbox-group class="px-3">
              <n-grid :y-gap="12" :cols="1">
                <n-gi>
                  <input
                    id="perfume"
                    type="checkbox"
                    value="香水"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="perfume" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 香水 </template>
                    <template v-else-if="localLang === 'en'">
                      Perfumes
                    </template>
                  </label>
                </n-gi>
                <n-gi>
                  <input
                    id="lipstick"
                    type="checkbox"
                    value="口紅"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="lipstick" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 口紅 </template>
                    <template v-else-if="localLang === 'en'">
                      Lipsticks
                    </template>
                  </label>
                </n-gi>
                <n-gi>
                  <input
                    id="gloves"
                    type="checkbox"
                    value="手套"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="gloves" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 手套 </template>
                    <template v-else-if="localLang === 'en'"> Gloves </template>
                  </label>
                </n-gi>
                <n-gi>
                  <input
                    id="hats"
                    type="checkbox"
                    value="帽子"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="hats" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 帽子 </template>
                    <template v-else-if="localLang === 'en'"> Hats </template>
                  </label>
                </n-gi>
                <n-gi>
                  <input
                    id="shocks"
                    type="checkbox"
                    value="襪子"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="shocks" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 襪子 </template>
                    <template v-else-if="localLang === 'en'"> Shocks </template>
                  </label>
                </n-gi>
                <n-gi>
                  <input
                    id="necklaces"
                    type="checkbox"
                    value="項鍊"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="necklaces" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 項鍊 </template>
                    <template v-else-if="localLang === 'en'">
                      Nicknacks
                    </template>
                  </label>
                </n-gi>
                <n-gi>
                  <input
                    id="wristbands"
                    type="checkbox"
                    value="手環"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="wristbands" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 手環 </template>
                    <template v-else-if="localLang === 'en'">
                      Wristbands
                    </template>
                  </label>
                </n-gi>
                <n-gi>
                  <input
                    id="scarfs"
                    type="checkbox"
                    value="圍巾"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="scarfs" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 圍巾 </template>
                    <template v-else-if="localLang === 'en'"> Scarfs </template>
                  </label>
                </n-gi>
              </n-grid>
            </n-checkbox-group>
          </div>
          <n-divider />
          <div>
            <h3 class="font-bold my-4">
              <template v-if="localLang === 'zh_TW'"> 包 </template>
              <template v-else-if="localLang === 'en'"> Bags </template>
            </h3>
            <n-checkbox-group class="px-3">
              <n-grid :y-gap="12" :cols="1">
                <n-gi>
                  <input
                    id="backpacks"
                    type="checkbox"
                    value="後背包"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="backpacks" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 後背包 </template>
                    <template v-else-if="localLang === 'en'">
                      Backpacks
                    </template>
                  </label>
                </n-gi>
                <n-gi>
                  <input
                    id="handbags"
                    type="checkbox"
                    value="手提包"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="handbags" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 手提包 </template>
                    <template v-else-if="localLang === 'en'">
                      handbags
                    </template>
                  </label>
                </n-gi>
              </n-grid>
            </n-checkbox-group>
          </div>
          <n-divider />
          <div>
            <h3 class="font-bold my-4">
              <template v-if="localLang === 'zh_TW'"> 鞋子 </template>
              <template v-else-if="localLang === 'en'"> Shoes </template>
            </h3>
            <n-checkbox-group class="px-3">
              <n-grid :y-gap="12" :cols="1">
                <n-gi>
                  <input
                    id="high_heels"
                    type="checkbox"
                    value="高跟鞋"
                    v-model="filters.arr"
                    class="text-primary-dark border-primary-dark focus:ring-0"
                  />
                  <label for="high_heels" class="cursor-pointer pl-2">
                    <template v-if="localLang === 'zh_TW'"> 高跟鞋 </template>
                    <template v-else-if="localLang === 'en'">
                      High heels
                    </template>
                  </label>
                </n-gi>
              </n-grid>
            </n-checkbox-group>
          </div>
        </div>
        <template #footer>
          <button
            type="button"
            class="w-full btn btn-dark"
            @click="
              filterCategory();
              active = false;
            "
          >
            {{ $t("confirm") }}
          </button>
        </template>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<style lang="scss">
.n-checkbox {
  .n-checkbox-box {
    border-radius: 0;

    .n-checkbox-box__border {
      border: 1px solid var(--color-primary-dark) !important;
    }
  }

  &:focus:not(:active) {
    .n-checkbox-box {
      .n-checkbox-box__border {
        box-shadow: none !important;
      }
    }
  }

  &:hover {
    .n-checkbox-box {
      border-color: var(--color-primary-dark);
    }
  }
}
.n-checkbox.n-checkbox {
  &--checked {
    .n-checkbox-box {
      background-color: var(--color-primary-dark);
    }
  }
}
</style>

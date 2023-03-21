<script setup>
import { onMounted } from "vue";
import { NCollapse, NCollapseItem, NBadge } from "naive-ui";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";

import { toThousands } from "@/composable/toThousands.js";
import { storeToRefs } from "pinia";
import { useFrontCartStore } from "@/stores/frontCartStore.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia cart
const frontCartStore = useFrontCartStore();
const { cart, final_enTotal, enTotal, code } = storeToRefs(frontCartStore);
const { getCarts, useCoupon } = frontCartStore;

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

onMounted(() => {
  getCarts();
});
</script>

<template>
  <div class="md:pt-10">
    <div class="my-10 md:hidden">
      <div class="text-center my-5">
        <h1 class="font-bodoni text-3xl md:text-5xl tracking-tighter">
          <em>Bottiga</em>emo
        </h1>
      </div>
      <ul class="list-unstyled flex items-center justify-center text-xs">
        <li class="flex items-center">
          <RouterLink to class="hover:text-primary">
            <span @click="$router.back(-1)" class="hoverBar whitespace-nowrap">
              {{ $t("return") }}
            </span>
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 inline stroke-2 mx-2 opacity-50" />
        </li>
        <li class="flex items-center">
          <span class="whitespace-nowrap">{{ $t("paymentMethod") }}</span>
          <ChevronRightIcon class="w-4 h-4 inline stroke-2 mx-2 opacity-50" />
        </li>
        <li class="pr-2 opacity-50">
          <span class="whitespace-nowrap">
            {{ $t("orderConfirmation") }}
          </span>
        </li>
      </ul>
    </div>
    <n-collapse
      arrow-placement="right"
      :default-expanded-names="['1']"
      class="mt-10 px-3 py-4 border md:border-none bg-slate-50/75 md:bg-transparent"
    >
      <n-collapse-item
        :title="localLang === 'zh_TW' ? '購物袋商品' : 'Shopping Bag Items'"
        name="1"
      >
        <ul class="pb-5 border-y">
          <li
            v-for="cartItem in cart.arr.carts"
            :key="cartItem.id"
            class="flex justify-between items-center mt-5"
          >
            <router-link :to="`prod/${cartItem.product.id}`" class="w-2/3">
              <div class="flex items-center">
                <n-badge :value="cartItem.qty" color="gray">
                  <div class="w-14 h-14 lg:w-20 lg:h-20 border overflow-hidden">
                    <img
                      :src="cartItem.product.imageUrl"
                      :alt="
                        localLang === 'zh_TW'
                          ? cartItem.product.title
                          : cartItem.product.enTitle
                      "
                      class="object-cover"
                    />
                  </div>
                </n-badge>
                <div class="mx-2">
                  <h3 class="text-xs sm:text-sm font-bold hoverBar">
                    <template v-if="localLang === 'zh_TW'">
                      {{ cartItem.product.title }}
                    </template>
                    <template v-else-if="localLang === 'en'">
                      {{ cartItem.product.enTitle }}
                    </template>
                  </h3>
                  <p class="text-xs text-black/50">
                    {{ cartItem.setSize }}
                  </p>
                </div>
              </div>
            </router-link>
            <p class="w-1/3 text-right">
              <template v-if="localLang === 'zh_TW'">
                NT$ {{ toThousands(cartItem.final_total) }}
              </template>
              <template v-else-if="localLang === 'en'">
                $ {{ toThousands(cartItem.item_enTotal) }}
              </template>
            </p>
          </li>
        </ul>
        <div class="py-5 border-b">
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="discountCode"
              class="block w-full p-4 pl-10 border border-gray-300 appearance-none focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark peer"
              placeholder=" "
              v-model="code"
            />
            <label
              for="discountCode"
              class="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              {{ $t("discountCode") }}
            </label>
            <button
              type="button"
              class="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-black/80 focus:outline-none font-medium text-sm px-4 py-2 disabled:opacity-25 disabled:cursor-not-allowed"
              @click="useCoupon"
              :disabled="code === ''"
            >
              {{ $t("submit") }}
            </button>
          </div>
          <template v-if="cart.arr.total !== cart.arr.final_total">
            <p class="tracking-wide text-primary mt-2">
              {{ $t("discountMessage") }}
            </p>
          </template>
        </div>
        <div class="border-b py-5">
          <div class="flex justify-between mb-3">
            <h6 class="">{{ $t("subtotal") }}</h6>
            <p class="">
              <template v-if="localLang === 'zh_TW'">
                + NT$ {{ toThousands(cart.arr.total) }}
              </template>
              <template v-else-if="localLang === 'en'">
                + $ {{ toThousands(enTotal) }}
              </template>
            </p>
          </div>
          <div class="flex justify-between mb-3">
            <h6 class="">{{ $t("discount") }}</h6>
            <p class="">
              <template v-if="localLang === 'zh_TW'">
                - NT$ {{ toThousands(cart.arr.total - cart.arr.final_total) }}
              </template>
              <template v-else-if="localLang === 'en'">
                - $ {{ toThousands(enTotal - final_enTotal) }}
              </template>
            </p>
          </div>
          <div class="flex justify-between">
            <h6 class="">{{ $t("shipping") }}</h6>
            <p class="">{{ $t("free") }}</p>
          </div>
        </div>
        <div class="flex justify-between items-center py-4">
          <h6 class="font-bold">{{ $t("total") }}</h6>
          <div class="flex items-center">
            <small class="text-xs text-black/50 mr-2">
              <template v-if="localLang === 'zh_TW'"> NTD </template>
              <template v-else-if="localLang === 'en'"> USD </template>
            </small>
            <b class="text-xl">
              <template v-if="localLang === 'zh_TW'">
                NT$ {{ toThousands(cart.arr.final_total) }}
              </template>
              <template v-else-if="localLang === 'en'">
                $ {{ toThousands(final_enTotal) }}
              </template>
            </b>
          </div>
        </div>
        <template #header-extra>
          <b>
            <template v-if="localLang === 'zh_TW'">
              NT$ {{ toThousands(cart.arr.final_total) }}
            </template>
            <template v-else-if="localLang === 'en'">
              $ {{ toThousands(final_enTotal) }}
            </template>
          </b>
        </template>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style lang="scss"></style>

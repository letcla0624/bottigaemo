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
const { cart, final_enTotal } = storeToRefs(frontCartStore);
const { getCarts } = frontCartStore;

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
            <span @click="$router.back(-1)" class="hoverBar">返回頁面</span>
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 inline stroke-2 mx-2 opacity-50" />
        </li>
        <li class="flex items-center">
          <span class="">聯絡資訊</span>
          <ChevronRightIcon class="w-4 h-4 inline stroke-2 mx-2 opacity-50" />
        </li>
        <li class="pr-2 opacity-50"><span class="">付款</span></li>
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
        <div class="border-b py-5">
          <div class="flex justify-between mb-3">
            <h6 class="">{{ $t("subtotal") }}</h6>
            <p class="">
              <template v-if="localLang === 'zh_TW'">
                + NT$ {{ toThousands(cart.arr.total) }}
              </template>
              <template v-else-if="localLang === 'en'">
                + $ {{ toThousands(final_enTotal) }}
              </template>
            </p>
          </div>
          <div class="flex justify-between mb-3">
            <h6 class="">{{ $t("discount") }}</h6>
            <p class="">
              <template v-if="localLang === 'zh_TW'">
                - NT$ {{ toThousands(cart.arr.final_total - cart.arr.total) }}
              </template>
              <template v-else-if="localLang === 'en'">
                - $ {{ toThousands(final_enTotal - final_enTotal) }}
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

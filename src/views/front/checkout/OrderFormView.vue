<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { NDivider } from "naive-ui";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/vue/24/outline";
import { toast } from "vue3-toastify";
import axios from "axios";

import { storeToRefs } from "pinia";
import { useFrontCartStore } from "@/stores/frontCartStore.js";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

import TwCitySelector from "tw-city-selector";

// pinia cart
const frontCartStore = useFrontCartStore();
const { cart } = storeToRefs(frontCartStore);
const { getCarts } = frontCartStore;

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const router = useRouter();
const loading = ref(false);
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
const form = ref(null);
const data = reactive({
  user: {
    name: "",
    email: "",
    tel: "",
    address: "",
  },
  message: "",
});

const county = ref("");
const district = ref("");
const zipcode = ref(null);
const street = ref("");
const error = ref(false);

const isPhone = (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value) ? true : "需要輸入 09 開頭的台灣手機格式";
};

const createOrder = async () => {
  loading.value = true;

  if (
    county.value !== "" &&
    district.value !== "" &&
    zipcode.value.value !== ""
  ) {
    data.user.address = `${zipcode.value.value} ${county.value}${district.value}${street.value}`;
  }

  try {
    const res = await axios.post(`${VITE_APP_API}/api/${VITE_APP_PATH}/order`, {
      data,
    });

    loading.value = false;
    error.value = false;
    form.value.resetForm();
    data.message = "";
    getCarts();
    router.push(`/order-finish/${res.data.orderId}`);

    toast(res.data.message, {
      icon: CheckCircleIcon,
      type: "success",
    });
  } catch (err) {
    loading.value = false;
    error.value = true;
    toast(err.response.data.message, {
      icon: ExclamationCircleIcon,
      type: "error",
    });
  }
};

onMounted(() => {
  getCarts();
  new TwCitySelector({
    el: ".city-selector-set",
    elCounty: ".county",
    elDistrict: ".district",
    elZipcode: ".zipcode",
  });
});
</script>

<template>
  <div class="py-10">
    <div class="my-10 hidden md:block">
      <div class="text-center my-5">
        <h1 class="font-bodoni text-3xl md:text-5xl tracking-tighter">
          <router-link to="/"> <em>Bottiga</em>emo </router-link>
        </h1>
      </div>
      <ul class="list-unstyled flex items-center justify-center text-xs">
        <li class="flex items-center">
          <RouterLink to class="hover:text-primary">
            <span @click="$router.back(-1)" class="hoverBar">
              {{ $t("return") }}
            </span>
          </RouterLink>
          <ChevronRightIcon class="w-4 h-4 inline stroke-2 mx-2 opacity-50" />
        </li>
        <li class="flex items-center">
          <span class="">{{ $t("paymentMethod") }}</span>
          <ChevronRightIcon class="w-4 h-4 inline stroke-2 mx-2 opacity-50" />
        </li>
        <li class="pr-2 opacity-50">
          <span class="">
            {{ $t("orderConfirmation") }}
          </span>
        </li>
      </ul>
    </div>
    <div class="">
      <VForm
        ref="form"
        class="md:text-sm my-5"
        v-slot="{ errors }"
        @submit="createOrder"
      >
        <div class="mb-10">
          <h2 class="text-lg mb-4">{{ $t("paymentInfo") }}</h2>
          <div class="mb-5">
            <div class="relative mb-2">
              <VField
                type="email"
                name="電子郵件"
                id="email"
                class="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent border-1 border-gray-300 appearance-none focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark peer"
                placeholder=" "
                :class="{ 'border-red-500': errors['電子郵件'] }"
                rules="email|required"
                v-model="data.user.email"
              />
              <label
                for="email"
                class="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                <span
                  class="after:content-['*'] after:ml-1 after:text-red-500 block"
                >
                  {{ $t("email") }}
                </span>
              </label>
            </div>
            <error-message name="電子郵件" class="text-red-500 text-sm" />
          </div>
        </div>
        <div class="mb-10">
          <h2 class="text-lg mb-4">{{ $t("shippingAddress") }}</h2>
          <div class="mb-5">
            <div class="mb-2">
              <div class="city-selector-set flex justify-between gap-3 mb-3">
                <select
                  class="county w-full py-3"
                  :class="{ 'is-invalid': error }"
                  v-model="county"
                  rules="required"
                ></select>
                <select
                  class="district w-full py-3"
                  :class="{ 'is-invalid': error }"
                  v-model="district"
                  rules="required"
                ></select>
                <div class="">
                  <input
                    class="zipcode py-3 placeholder:text-sm"
                    :class="{ 'is-invalid': error }"
                    type="text"
                    size="3"
                    readonly
                    disabled
                    :placeholder="localLang === 'zh_TW' ? '區號' : 'Zip'"
                    ref="zipcode"
                  />
                </div>
              </div>
              <div class="relative">
                <VField
                  type="text"
                  name="收件人地址"
                  id="address"
                  class="block px-2.5 pb-2.5 pt-4 w-full bg-transparent border-1 border-gray-300 appearance-none placeholder:text-sm placeholder:text-black/50 focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark peer"
                  placeholder=" "
                  :class="{ 'border-red-500': errors['收件人地址'] }"
                  rules="required"
                  v-model="street"
                />

                <label
                  for="address"
                  class="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  <span
                    class="after:content-['*'] after:ml-1 after:text-red-500 block"
                  >
                    {{ $t("street") }}
                  </span>
                </label>
              </div>
            </div>
            <error-message name="收件人地址" class="text-red-500 text-sm" />
          </div>
          <n-divider />
          <div class="mb-5">
            <div class="relative mb-2">
              <VField
                type="text"
                name="收件人姓名"
                id="name"
                class="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent border-1 border-gray-300 appearance-none focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark peer"
                placeholder=" "
                :class="{ 'border-red-500': errors['收件人姓名'] }"
                rules="required"
                v-model="data.user.name"
              />
              <label
                for="name"
                class="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                <span
                  class="after:content-['*'] after:ml-1 after:text-red-500 block"
                >
                  {{ $t("name") }}
                </span>
              </label>
            </div>
            <error-message name="收件人姓名" class="text-red-500 text-sm" />
          </div>
          <div class="mb-5">
            <div class="relative mb-2">
              <VField
                type="tel"
                name="收件人電話"
                id="tel"
                class="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent border-1 border-gray-300 appearance-none focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark peer"
                placeholder=" "
                oninput="value=value.replace(/[^\d]/g,'')"
                :class="{ 'border-red-500': errors['收件人電話'] }"
                :rules="isPhone"
                v-model="data.user.tel"
              />
              <label
                for="tel"
                class="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                <span
                  class="after:content-['*'] after:ml-1 after:text-red-500 block"
                >
                  {{ $t("cellphone") }}
                </span>
              </label>
            </div>
            <error-message name="收件人電話" class="text-red-500 text-sm" />
          </div>
        </div>
        <div class="mb-5">
          <h2 class="text-lg mb-4">{{ $t("message") }}</h2>
          <div class="relative mb-2">
            <textarea
              name="需求"
              id="message"
              class="block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent border-1 border-gray-300 appearance-none focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark peer"
              placeholder=" "
              cols="30"
              rows="6"
              v-model="data.message"
            ></textarea>
            <label
              for="message"
              class="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[32px] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              {{ $t("messageContent") }}
            </label>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="sm:flex items-center hidden">
            <ChevronLeftIcon class="w-4 h-4 inline stroke-2 mr-1" />
            <RouterLink to class="hover:text-primary">
              <span @click="$router.back(-1)" class="hoverBar">
                {{ $t("return") }}
              </span>
            </RouterLink>
          </div>
          <button
            type="submit"
            class="btn btn-dark disabled:opacity-25 disabled:cursor-not-allowed w-full sm:w-1/2 xl:w-1/3"
            :disabled="
              cart.arr.final_total === 0 || loading || cart.arr.length === 0
            "
          >
            <svg
              v-if="loading"
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
            {{ $t("keepPay") }}
          </button>
        </div>
      </VForm>
    </div>
  </div>
</template>

<style lang="scss">
.city-selector-set {
  select,
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border-color: #d1d1d1;

    &:focus {
      border-color: #000;
      --tw-ring-color: #000;
    }

    &.is-invalid {
      border-color: red;
      --tw-ring-color: red;
    }
  }
}
</style>

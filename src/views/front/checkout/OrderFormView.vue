<script setup>
import { ref, reactive, onMounted, watch } from "vue";
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
import { setLocale } from "@vee-validate/i18n";

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

// 判斷 vee-validate 語系
setLocale(localLang.value);

const isPhone = (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;

  return phoneNumber.test(value)
    ? true
    : localLang.value === "zh_TW"
    ? "需要輸入 09 開頭的台灣手機格式"
    : "Taiwanese mobile phone number format starting with 09 is required.";
};

const fieldEmail = ref(localLang.value === "zh_TW" ? "電子郵件" : "Email");
const fieldAddress = ref(
  localLang.value === "zh_TW" ? "收件人地址 " : "Address"
);
const fieldName = ref(localLang.value === "zh_TW" ? "收件人姓名 " : "Name");

watch(localLang, (newVal) => {
  fieldEmail.value = newVal === "zh_TW" ? "電子郵件" : "Email";
  fieldAddress.value = newVal === "zh_TW" ? "收件人地址" : "Address";
  fieldName.value = newVal === "zh_TW" ? "收件人姓名 " : "Name";
});

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
  <div class="py-10 md:mr-3">
    <div class="my-10 hidden md:block">
      <div class="text-center my-5">
        <h1 class="font-bodoni text-3xl md:text-5xl tracking-tighter">
          <router-link to="/"> <em>Bottiga</em>emo </router-link>
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <VField
                type="email"
                :name="fieldEmail"
                id="email"
                class="block w-full p-3 pl-10 border border-gray-300 appearance-none focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark peer"
                placeholder=" "
                :class="{
                  'border-red-500': errors[fieldEmail],
                }"
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
            <error-message :name="fieldEmail" class="text-red-500 text-sm" />
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
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <VField
                  type="text"
                  :name="fieldAddress"
                  id="address"
                  class="block w-full p-3 pl-10 border border-gray-300 appearance-none placeholder:text-sm placeholder:text-black/50 focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark peer"
                  placeholder=" "
                  :class="{ 'border-red-500': errors[fieldAddress] }"
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
            <error-message :name="fieldAddress" class="text-red-500 text-sm" />
          </div>
          <n-divider />
          <div class="mb-5">
            <div class="relative mb-2">
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <VField
                type="text"
                :name="fieldName"
                id="name"
                class="block w-full p-3 pl-10 border border-gray-300 appearance-none focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark peer"
                placeholder=" "
                :class="{ 'border-red-500': errors['fieldName'] }"
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
            <error-message :name="fieldName" class="text-red-500 text-sm" />
          </div>
          <div class="mb-5">
            <div class="relative mb-2">
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <VField
                type="tel"
                name="收件人電話"
                id="tel"
                class="block w-full p-3 pl-10 border border-gray-300 appearance-none focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark peer"
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
            <div
              class="absolute inset-y-0 left-0 top-3.5 pl-3 pointer-events-none hidden lg:block"
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
            <textarea
              name="需求"
              id="message"
              class="block w-full p-3 lg:pl-10 border border-gray-300 appearance-none focus:border-primary-dark focus:outline-none focus:ring-1 focus:ring-primary-dark peer"
              placeholder=" "
              cols="30"
              rows="6"
              v-model="data.message"
            ></textarea>
            <label
              for="message"
              class="absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
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

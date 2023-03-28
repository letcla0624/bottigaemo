<script setup>
import { reactive } from "vue";

import { storeToRefs } from "pinia";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const data = [
  {
    title: "outfit",
    subTitle: "穿搭系列",
    subEnTitle: "Wearing series",
    bgURL:
      "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678690207647.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=auFffMtRs8XSZKk7L%2BLlTlx%2F1DvTqFUgNjBLujh3ckdnro60uoc1SECS%2BUMgTY38FDz4n0mAxtJMBesuGMVIg2idHNWAuVbMB%2BCDUxVSGICZj2oZ2i2T9jxrtX3C4Orp2UES%2Fh1NXJKBbc5X%2Bb%2FLF9hfls%2Fw7JgQB%2BsJ8nmuGROj1iRZn%2F8fwK6JPRpwSvaDA8HOCk3xGCCAk293%2FCZ3p465E%2BzFe27%2FHkaqIh%2FJXgkIrNW%2BLZq6%2BLBAztrKW%2FiDJqKVPVcR9Wcrl3OD%2B1%2FlpSPG3eVIhVLPld9mvTlwxhRqU1a7gH2EVpQQd17Wmf6HJgdZAT2B2a1EBsW9F8Y8hQ%3D%3D",
    link: "/model-fit",
  },
  {
    title: "girl's",
    subTitle: "探索產品",
    subEnTitle: "Explore products",
    bgURL:
      "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1678689602626.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=HIAD15UBv2I%2BfFUjqJbcdkHD1jYwxrDu08XLTFmsSODIoeidDrYLfkwsWCfHTey4RsWDFiwWQZus5tLhrCh5ZI2a6uOLAqYzLTWUEwdp9zc5hi3DmMmNGwFfI%2BCfLj6Tx7yvk%2FpGbGxnqBMmR%2BOVshHATi2FuZzVjaHNhOpNIP2GIUYe4mBtGCG2ZMgx8aDhwUO3iNJBFTLCsGL8bzj%2BMo3EZkxePfKBS1mGUE7dVHEMeSWa1%2FBOUU%2FoZrEB2%2Bp8XNLCpiBtYP9hUpwkhsFHeOA2dRRvuUGZf3GlrJ7JVy8h2t2sIxn4fKMiMQrqUziDsj9KUzYn31XjEt2Xwoxggg%3D%3D",
    link: "/products",
  },
];

const items = reactive(data);
</script>
<template>
  <div class="h-screen text-center lg:flex justify-center items-start">
    <div
      v-for="item in items"
      :key="item.title"
      class="h-1/2 lg:w-1/2 lg:h-full bg-white transition-all duration-300 hover:lg:w-11/12"
      :style="{
        background: `url(${item.bgURL}) 50% 50% no-repeat`,
      }"
    >
      <router-link
        :to="item.link"
        class="w-full h-full flex flex-col justify-center items-center"
      >
        <h2
          class="text-5xl md:text-7xl font-bodoni uppercase tracking-wider text-white mix-blend-difference"
        >
          {{ item.title }}
        </h2>
        <p class="text-base tracking-widest hoverBar mt-4">
          <template v-if="localLang === 'zh_TW'">
            {{ item.subTitle }}
          </template>
          <template v-else-if="localLang === 'en'">
            <span class="uppercase">{{ item.subEnTitle }}</span>
          </template>
        </p>
      </router-link>
    </div>
  </div>
</template>

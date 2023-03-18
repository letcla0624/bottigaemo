<script setup>
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { reactive, inject } from "vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { storeToRefs } from "pinia";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

const detectWidth = inject("detectWidth");

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const modules = [Navigation, Pagination, Autoplay];
const swiperOptions = reactive({
  pagination: {
    el: ".index-swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: ".index-prevBtn",
    nextEl: ".index-nextBtn",
  },
});

const data = [
  {
    title: "<em>Eau de</em> Rochas",
    subTitle: "發現氣質迷人的香味",
    subEnTitle: "Discover the fragrance",
    m_posterURL:
      "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-hexschool/1674548350348.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CPjzUmanywZsag4qm9tZTQD2gtKi4RlOqATEJL9Q9QCHEbANdBBDxwj%2Bd3J0zNsB1HqFP72aRFsgEBw0WDNHvW3Xf3Il3fbHl3V07OFRJnE1%2BTeU49FR0WxnHR2smt%2B07H9qusw0%2FsQgwPijURDxJ5UzPHIRvSNpmkwGycO3LX0lM1xmPTevVeZil8xD%2FIcKde0%2F4B%2Bp3uXM6zcduABcNIRL%2BGki8FliY9MW0rP8f0aoDRY3%2B5Rbo5MU8rvQqAja9Ot2znbORGJKdrNgciksyFcq0LFKJ8sQoviGiY3806UG%2FgQbyWx389oqpXl5KbCIUNhCZxQWBD%2FFkgXQfrByeg%3D%3D",
    posterURL:
      "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-hexschool/1674548314314.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hrhhmDF6puXANB5cqwvit1LKlxx5grsdL4nHAw%2B9upJGiYDwuQnuuBeSmc%2Bc8F7azVE5E4CGjN%2FIsAXsH0TOTVfpiba2QOlgbJ55R0k00%2FyPrm8RDpQBu08hOMgev5iDJ8uUuUNKHGQ6h%2FKIdKzSa1md2WNHXjaYPd6pR5PEKRMN6c1Kuurk6IRBUQmc2DnP7bNilFZUUVjYoDESLAHYT41xELemcWOI%2FvQGc%2BXemGUHaI17i7zw5s0OGBOKLlYaS4v%2BF3mzLuyP3sd4IoNcg%2FHCDfMc6hSYjeSw53eRgQ12f2BKJCaHyYk7N8hFbkcQvXd2hh2YobUN1zgE10%2FRvQ%3D%3D",
    m_videoURL: "/bottigaemo/video/index/1-phone.mp4",
    videoURL: "/bottigaemo/video/index/1.mp4",
    link: "-NOtkC4nCN2GSzVic6pm",
  },
  {
    title: "<em>Marg</em> Qualley",
    subTitle: "擁攬自然風光的開闊心境",
    subEnTitle: "Embracing the natural scenery",
    m_posterURL:
      "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-hexschool/1674548463775.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OoR1WT1mil7Bv1Lbp7%2FBNHUKehg9TD1o5Rfa5bjwO4snPjP63Rz%2B8nWmHRbhzUuAvQ5JXw4rx0zYu%2Bfu7emsKZ0H5C7kbDKAjLXOQGans6cQX97SMhyfW%2BDtefg8fCgjQQaGnvKDCaBSvJK6MyEsbWyrX9VeFZc2dyawAP9RfujJILDVb6iFiZkNeJklowbkO4HVz7NwvNUNsSemsJRccEfnQOv0Mdpd%2BlL4qEGbiBFeOIo7icphEQOq4adq5s6fiK6oGqxIZn6U3JJPSPhL%2B3fvEJYVoi7lug8awKsla%2BY%2FaJ9AkPNfBy0nUPUDYIq8CBgFO3CLTtNJl2a5QI01zw%3D%3D",
    posterURL:
      "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-hexschool/1674548441179.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OZMxqumfjexnAboicgwXm0g89vBu8O4YrT2DbcTTosVC3kdtNKY0EZYenJ1grvF8JaGndLQ97qw%2FH1kTGOzWGkh4JdI44IUGP7GCaWHlyUABrRy5PHkwZkE9Su4byJclXKXObViHDTxpxBIX8QIWJZ54qR5i1spj6%2BwBAL4M4pXdku0VrNQnXZldPo4UQLmzlCmWK7JJnz9%2F%2FWlvB4paG0Rwq4zxyGlyCm9DKyuMAWXyWBvLfSpbTk9PPlxBK3XmhflmCa7VoyAtOiTbV%2F6BDGu%2BkjPD%2Fcv9Ed%2FgvF9RmboQbnHB5upM%2BgxzS1oGIQsgN%2BT3LsFBxqnbH8No8yAhYw%3D%3D",
    m_videoURL: "/bottigaemo/video/index/2-phone.mp4",
    videoURL: "/bottigaemo/video/index/2.mp4",
    link: "-NOrgOp1wQVl5_DcyQbX",
  },
];
const items = reactive(data);
</script>

<template>
  <swiper
    :direction="detectWidth > 768 ? 'vertical' : 'horizontal'"
    :modules="modules"
    :navigation="swiperOptions.navigation"
    :pagination="swiperOptions.pagination"
    :loop="true"
    :speed="1200"
    :autoplay="{
      delay: 6000,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide
      v-for="item in items"
      :key="item.title"
      class="relative flex justify-center items-center text-center"
    >
      <div class="text-white absolute uppercase">
        <h2
          class="intro-title mix-blend-difference font-bodoni text-center leading-none"
          v-html="item.title"
        ></h2>
        <router-link
          :to="`/prod/${item.link}`"
          class="relative inline-block z-10 mt-7"
        >
          <span class="hoverBar tracking-widest text-base">
            <template v-if="localLang === 'zh_TW'">
              {{ item.subTitle }}
            </template>
            <template v-else-if="localLang === 'en'">
              {{ item.subEnTitle }}
            </template>
          </span>
        </router-link>
      </div>
      <div class="w-full h-full absolute bg-white/5 z-0"></div>
      <video
        v-if="detectWidth < 768"
        autoplay
        loop
        muted
        playsinline
        controlslist="nodownload"
        :poster="item.m_posterURL"
      >
        <source :src="item.m_videoURL" type="video/mp4" />
      </video>
      <video
        v-else
        autoplay
        loop
        muted
        playsinline
        controlslist="nodownload"
        :poster="item.posterURL"
      >
        <source :src="item.videoURL" type="video/mp4" />
      </video>
    </swiper-slide>
  </swiper>
  <div
    class="navigation-pagination-container w-auto flex md:flex-col justify-center items-center absolute bottom-5 left-0 right-0 rotate-0 z-10 md:bottom-[10%] md:left-[3%] md:right-auto"
  >
    <div
      class="index-prevBtn flex justify-center items-center w-9 h-9 ml-[10%] z-[2] -rotate-90 md:rotate-0"
      tabindex="0"
      role="button"
      aria-label="Previous slide"
      aria-controls="swiper-wrapper-48d4ad8e3cd92a75"
    >
      <svg
        class="slider-fullscreen-arrow-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="5"
        height="25"
        fill="#fff"
        viewBox="0 0 5 25"
      >
        <path
          d="M1.97 1.058L.673 2.897c-.105.15-.308.182-.452.073s-.176-.32-.071-.47L1.66.359C1.821.131 2.055 0 2.301 0h0 .001c.246.001.48.132.642.363l1.494 2.139c.105.15.073.361-.072.468s-.348.075-.451-.075L2.617 1.037V25H1.97V1.058z"
        ></path>
      </svg>
    </div>
    <div
      class="index-swiper-pagination inherit text-white text-center py-5 z-[1] md:rotate-90"
    ></div>
    <div
      class="index-nextBtn flex justify-center items-center w-9 h-9 mr-[10%] z-[2] -rotate-90 md:rotate-0"
      tabindex="0"
      role="button"
      aria-label="Next slide"
      aria-controls="swiper-wrapper-48d4ad8e3cd92a75"
    >
      <svg
        class="slider-fullscreen-arrow-svg -scale-y-100"
        xmlns="http://www.w3.org/2000/svg"
        width="5"
        height="25"
        fill="#fff"
        viewBox="0 0 5 25"
      >
        <path
          d="M1.97 1.058L.673 2.897c-.105.15-.308.182-.452.073s-.176-.32-.071-.47L1.66.359C1.821.131 2.055 0 2.301 0h0 .001c.246.001.48.132.642.363l1.494 2.139c.105.15.073.361-.072.468s-.348.075-.451-.075L2.617 1.037V25H1.97V1.058z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
  transition-property: transform;
  box-sizing: content-box;

  &-slide {
    img,
    video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.intro-title {
  font-size: max(50px, min(110px, 15vw));
}
</style>

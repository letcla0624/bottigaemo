<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import LoadingComponent from "@/components/LoadingComponent.vue";
import BreadComponent from "@/components/front/BreadComponent.vue";
import MetaComponent from "@/components/front/MetaComponent.vue";
import { ArrowUturnLeftIcon } from "@heroicons/vue/24/outline";
import { storeToRefs } from "pinia";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const route = useRoute();
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
const article = reactive({ obj: {} });
const isLoading = ref(false);
const tags = ref("");
const year = ref("");
const month = ref("");
const day = ref("");

const getArticle = async () => {
  const { id } = route.params;
  isLoading.value = true;
  try {
    const res = await axios.get(
      `${VITE_APP_API}/api/${VITE_APP_PATH}/article/${id}`
    );

    isLoading.value = false;
    article.obj = res.data.article;

    year.value = date(article.obj.create_at).split("/")[0];
    month.value = date(article.obj.create_at).split("/")[1];
    day.value = date(article.obj.create_at).split("/")[2];

    article.obj.tag.forEach((item) => {
      tags.value = item;
    });

    metaData.title = `${article.obj.title} | Bottigaemo`;
    metaData.enTitle = `${article.obj.enTitle} | Bottigaemo`;
  } catch (err) {
    isLoading.value = false;
    alert(err.response.data.message);
  }
};

const date = (time) => {
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
};

onMounted(() => {
  getArticle();
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
      <div v-else class="pb-20">
        <div
          class="w-screen h-40 md:h-[400px] overflow-hidden relative"
          :style="{
            background: `url(${article.obj.imageUrl}) center center no-repeat`,
            backgroundSize: 'cover',
          }"
        >
          <div
            class="w-full h-full bg-black/60 flex justify-center items-center absolute top-0 left-0 img-mask text-white/70"
          >
            <ul class="max-w-4xl text-center">
              <li v-if="article.obj.photographer">
                <template v-if="localLang === 'zh_TW'"> 攝影： </template>
                <template v-else-if="localLang === 'en'">
                  Photographer:
                </template>
                {{ article.obj.photographer }}
              </li>
              <li v-if="article.obj.makeuper">
                <template v-if="localLang === 'zh_TW'"> 造型： </template>
                <template v-else-if="localLang === 'en'"> Stylist: </template>
                {{ article.obj.makeuper }}
              </li>
              <li v-if="article.obj.photoModel">
                <template v-if="localLang === 'zh_TW'"> 模特： </template>
                <template v-else-if="localLang === 'en'"> Model: </template>
                {{ article.obj.photoModel }}
              </li>
            </ul>
          </div>
        </div>
        <div class="container max-w-4xl px-2 py-5 md:py-10">
          <BreadComponent
            :prod-title="article.obj.title"
            :prod-en-title="article.obj.enTitle"
          />
          <div class="md:tracking-wide text-primary-dark border-b pb-10">
            <div class="md:flex flex-row-reverse justify-between">
              <div class="font-bodoni flex mb-3 md:ml-10 h-[48px]">
                <b class="text-5xl mr-2">{{ day }}</b>
                <div class="mt-1">
                  <p>{{ month }} /</p>
                  <p>{{ year }}</p>
                </div>
              </div>
              <h2 class="font-bold text-xl md:text-3xl mb-1">
                <template v-if="localLang === 'zh_TW'">
                  {{ article.obj.title }}
                </template>
                <template v-else-if="localLang === 'en'">
                  {{ article.obj.enTitle }}
                </template>
              </h2>
            </div>
            <div class="flex items-center text-black/60">
              <p>{{ article.obj.author }} ・</p>
              <template v-if="localLang === 'zh_TW'">
                <span># {{ article.obj.tag }}</span>
              </template>
              <template v-else-if="localLang === 'en'">
                <span># {{ article.obj.enTag }}</span>
              </template>
            </div>
          </div>
          <template v-if="localLang === 'zh_TW'">
            <div
              v-html="article.obj.content"
              class="article text-base font-light leading-loose py-10"
            ></div>
          </template>
          <template v-else-if="localLang === 'en'">
            <div
              v-html="article.obj.enContent"
              class="article text-base font-light leading-loose py-10"
            ></div>
          </template>
        </div>
        <router-link
          to="/articles"
          class="flex items-center w-fit mx-auto hoverBar p-1"
        >
          <ArrowUturnLeftIcon class="w-4 h-4 inline stroke-2 mr-1" />
          {{ $t("returnToArticles") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.article {
  p {
    padding-bottom: 1rem;
  }
}
</style>

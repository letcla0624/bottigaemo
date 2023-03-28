<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";

import { storeToRefs } from "pinia";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const props = defineProps({
  prodTitle: {
    type: String,
    default: "",
  },
  prodEnTitle: {
    type: String,
    default: "",
  },
});

const route = useRoute();
const router = useRouter();

const breadcrumbList = reactive({ arr: [] });

const nowBreadcrumb = () => {
  breadcrumbList.arr = route.meta.breadcrumb;
};

const routeTo = (idx) => {
  if (breadcrumbList.arr[idx].link) {
    router.push(breadcrumbList.arr[idx].link);
  }
};

onMounted(() => {
  nowBreadcrumb();
});
</script>

<template>
  <nav>
    <ul class="flex items-center flex-nowrap mb-10">
      <li
        v-for="(item, idx) in breadcrumbList.arr"
        :key="`${item}_${idx}`"
        class="cursor-pointer flex items-center"
        @click="routeTo(idx)"
      >
        <span class="hoverBar hover:text-primary whitespace-nowrap">
          <template v-if="localLang === 'zh_TW'">
            {{ item.name }}
          </template>
          <template v-else-if="localLang === 'en'">
            {{ item.enName }}
          </template>
        </span>
        <ChevronRightIcon class="w-8 h-8 inline stroke-2 px-2 opacity-50" />
      </li>
      <li v-if="props.prodTitle" class="text-black/50">
        <span class="line-clamp-1 uppercase">
          <template v-if="localLang === 'zh_TW'">
            {{ props.prodTitle }}
          </template>
          <template v-else-if="localLang === 'en'">
            {{ props.prodEnTitle }}
          </template>
        </span>
      </li>
    </ul>
  </nav>
</template>

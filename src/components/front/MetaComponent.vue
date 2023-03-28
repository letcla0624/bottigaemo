<script setup>
import { computed } from "vue";
import { useMeta } from "vue-meta";

const props = defineProps({
  metaData: {
    type: Object,
    default: () => ({}),
  },
  localLang: {
    type: String,
    default: "",
  },
});

useMeta(
  computed(() => ({
    title: "",
    htmlAttrs: { lang: props.localLang === "zh_TW" ? "zh-TW" : "en" },
    keywords: "",
    description: "",
    og: {
      title:
        props.localLang === "zh_TW"
          ? props.metaData.title
          : props.metaData.enTitle,
      url: props.metaData.url,
    },
  }))
);
</script>

<template>
  <div>
    <metainfo>
      <template v-slot:title>
        {{
          props.localLang === "zh_TW"
            ? props.metaData.title
            : props.metaData.enTitle
        }}
      </template>
      <template v-slot:description>
        {{ $t("meta-description") }}
      </template>
      <template v-slot:keywords>
        {{ $t("meta-keywords") }}
      </template>
    </metainfo>
  </div>
</template>

<style lang="scss" scoped></style>

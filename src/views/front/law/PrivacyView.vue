<script setup>
import { reactive } from "vue";
import { NTabs, NTabPane } from "naive-ui";
import PrivacyComponent from "@/components/front/law/PrivacyComponent.vue";
import TermsComponent from "@/components/front/law/TermsComponent.vue";
import FaqComponent from "@/components/front/law/FaqComponent.vue";
import MetaComponent from "@/components/front/MetaComponent.vue";

import { storeToRefs } from "pinia";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

// 設定 meta
const metaData = reactive({
  title: "常見問題 & 法律條款 | Bottigaemo",
  enTitle: "FAQ & Legal Terms | Bottigaemo",
  url: `${import.meta.env.VITE_APP_URL}/#/privacy`,
});
</script>

<template>
  <div class="pt-[72px]">
    <MetaComponent :meta-data="metaData" :localLang="localLang" />
    <div class="md:pb-10">
      <n-tabs
        default-value="privacy"
        justify-content="space-evenly"
        type="line"
        size="large"
        animated
      >
        <n-tab-pane
          name="privacy"
          :tab="localLang === 'zh_TW' ? '隱私政策' : 'PRIVACY POLICY'"
        >
          <PrivacyComponent />
        </n-tab-pane>
        <n-tab-pane
          name="terms"
          :tab="localLang === 'zh_TW' ? '法律資訊' : 'LEGAL INFORMATION'"
        >
          <TermsComponent />
        </n-tab-pane>
        <n-tab-pane
          name="faq"
          :tab="localLang === 'zh_TW' ? '常見問題' : 'CONDITIONS OF SALE'"
        >
          <FaqComponent />
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<style lang="scss">
.n-tabs.n-tabs--line-type .n-tabs-tab.n-tabs-tab--active,
.n-tabs.n-tabs--bar-type .n-tabs-tab.n-tabs-tab--active {
  color: var(--color-primary);
}
.n-tabs .n-tabs-bar {
  background-color: var(--color-primary);
}
.n-tabs-tab-wrapper {
  padding: 0 1rem;
}
.n-tabs.n-tabs--flex .n-tabs-nav {
  position: sticky;
  top: 64px;
  background-color: #fff;
  z-index: 2;
  @media screen and (min-width: 640px) {
    top: 68px;
  }

  .n-tabs-wrapper {
    padding: 0.75rem 0;
  }
}
</style>
top-16 md:top-[68px]

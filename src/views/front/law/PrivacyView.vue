<script setup>
import { NTabs, NTabPane } from "naive-ui";
import PrivacyComponent from "@/components/front/law/PrivacyComponent.vue";
import TermsComponent from "@/components/front/law/TermsComponent.vue";
import FaqComponent from "@/components/front/law/FaqComponent.vue";

import { storeToRefs } from "pinia";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

// pinia language
const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);
</script>

<template>
  <div class="pt-[72px]">
    <div class="md:py-10">
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
  top: 0;
  background-color: #fff;
  z-index: 2;
  .n-tabs-wrapper {
    padding: 0.75rem 0;
  }
}
</style>

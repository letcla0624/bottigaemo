<script setup>
import { h, ref } from "vue";
import { useNotification, NAvatar } from "naive-ui";

import { storeToRefs } from "pinia";
import { useChangeLangStore } from "@/stores/changeLangStore.js";

const changeLangStore = useChangeLangStore();
const { localLang } = storeToRefs(changeLangStore);

const notification = useNotification();
const content = ref("");

const noticeMessage = () => {
  if (localLang.value === "zh_TW") {
    content.value = `好消息，為了回饋 Bottigaemo 隱藏 VIP 的顧客們，即日起只要在結帳時輸入折扣碼：「bottigaemovip」，全館商品 95 折，VIP 折扣碼將不定時下架，請各位 VIP 們好好把握機會喔~✌️`;
  } else if (localLang.value === "en") {
    content.value = `Good news! In order to reward Bottigaemo's VIP customers, starting today, if you enter the discount code 「bottigaemovip」 at checkout, you can enjoy a 5% discount on all products in the store. The VIP discount code will be taken down at irregular intervals, so VIP customers please take advantage of this opportunity!`;
  }

  notification.create({
    title: "Bottigaemo VIP",
    description: "From the Bottigaemo Official",
    content: content,
    avatar: () =>
      h(NAvatar, {
        size: "small",
        round: true,
        src: "https://storage.googleapis.com/vue-course-api.appspot.com/letcla-fashion/1679408164058.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SqdTDiskVAvmKiZn8c6IrbkcXD9WIrbUwPm%2FJ6bH6ydQl8X3dnQpSR70Ko7RN1z7Qhl3JSmogaTGoD7du6dxpI4lH8bQdSv0VE%2FfivShD7fu%2FFdexY3YUzBwdXmDFRLlsx706dpLOOpZ3ii05H%2BMc0y6B6%2FudUj%2FlB5N1tKPatmFfNMtAoh743sKVsG%2BZdsOuVYSwIHxORWyNmkJjOkYeGVKIYvYJ6ySbUXkGLEEmcBH9b7G4LHMepX6oZ2JCpIS%2BQIbP8fug3l2oJBk%2FBEQxqqVvDpSqdlWYHyvZuSnFC5P%2B9WkNnT5UoK6ER7GkWny7wduMF7QmH5VAECooS%2FAoQ%3D%3D",
      }),
  });
};
</script>

<template>
  <div>
    <p class="cursor-pointer hover:text-primary" @click="noticeMessage">
      {{ $t("noticeMessage") }}
    </p>
  </div>
</template>

<style lang="scss">
.n-notification-container.n-notification-container--top-right .n-notification {
  @media screen and (max-width: 400px) {
    max-width: 300px;
    margin-left: 0;
  }
}
</style>

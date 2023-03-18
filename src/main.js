import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/scss/all.scss";

// 引入 vue3-toastify
import Vue3Toastify, { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// 引入 video.js
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/city/index.css";
import "@videojs/themes/dist/fantasy/index.css";
import "@videojs/themes/dist/forest/index.css";
import "@videojs/themes/dist/sea/index.css";

// material icons
import "material-icons/iconfont/material-icons.css";

// 引入 naive ui
import naive from "naive-ui";

// 引入 aos
import "aos/dist/aos.css";

// 引入 Lottie
import LottieAnimation from "lottie-web-vue";

// 引入 VueMasonry
import { VueMasonryPlugin } from "vue-masonry";

// 引入 i18n
import { createI18n } from "vue-i18n";
import zh from "./assets/languages/zh_TW.json";
import en from "./assets/languages/en.json";

// 引入 Vee-Validate
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zh_TW from "@vee-validate/i18n/dist/locale/zh_TW.json";

// 加入全部規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// 設定 Vee-Validate
configure({
  generateMessage: localize({ zh_TW: zh_TW }),
  validateOnInput: true,
});

// 設定預設語系
setLocale("zh_TW");

const i18n = createI18n({
  legacy: false,
  locale: "zh_TW",
  messages: {
    en,
    zh_TW: zh,
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(naive);
app.use(LottieAnimation);
app.use(VueMasonryPlugin);
app.use(i18n);
app.use(Vue3Toastify, {
  autoClose: 800,
  position: toast.POSITION.BOTTOM_RIGHT,
});

// 加入 Vee-Validate 元件
app.component("VForm", Form);
app.component("VField", Field);
app.component("ErrorMessage", ErrorMessage);

app.mount("#app");

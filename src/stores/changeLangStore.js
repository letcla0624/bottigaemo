import { ref } from "vue";
import { defineStore } from "pinia";

export const useChangeLangStore = defineStore("changeLang", () => {
  const localLang = ref("");
  localLang.value = localStorage.getItem("language");

  return { localLang };
});

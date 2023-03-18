import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useFrontArticlesStore = defineStore("frontArticles", () => {
  const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
  const isLoading = ref(false);
  const articles = reactive({ arr: [] });
  const newArticles = reactive({ arr: [] });

  const getArticles = async () => {
    isLoading.value = true;
    try {
      const res = await axios.get(
        `${VITE_APP_API}/api/${VITE_APP_PATH}/articles`
      );

      isLoading.value = false;
      articles.arr = res.data.articles;
      newArticles.arr = res.data.articles.slice(0, 3);
    } catch (err) {
      isLoading.value = false;
      alert(err.response.data.message);
    }
  };

  return { articles, getArticles, isLoading, newArticles };
});

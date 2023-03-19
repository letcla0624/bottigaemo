import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useFrontProductsStore = defineStore("frontProducts", () => {
  const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
  const isLoading = ref(false);
  const products = reactive({ arr: [] });
  const topProducts = reactive({ arr: [] });

  const getProducts = async () => {
    isLoading.value = true;
    try {
      const res = await axios.get(
        `${VITE_APP_API}/api/${VITE_APP_PATH}/products/all`
      );

      isLoading.value = false;
      products.arr = res.data.products;
      topProducts.arr = res.data.products.slice(0, 3);
    } catch (err) {
      isLoading.value = false;
      alert(err.response.data.message);
    }
  };

  return { products, getProducts, isLoading, topProducts };
});

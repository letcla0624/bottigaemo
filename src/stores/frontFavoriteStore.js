import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import { CheckCircleIcon } from "@heroicons/vue/24/outline";
import axios from "axios";

export const useFrontFavoriteStore = defineStore("frontFavorite", () => {
  const localLang = ref("");
  const getLocalLang = () => {
    localLang.value = localStorage.getItem("language");
  };

  const favoriteProdArr = reactive({ arr: [] });
  const getFavorite = () => {
    favoriteProdArr.arr = JSON.parse(localStorage.getItem("prodId")) || [];
  };

  // 加入願望清單商品
  const startFavoriteAnim = ref(false);
  const toggleFavorite = (id) => {
    const itemIdx = favoriteProdArr.arr.findIndex((item) => item === id);
    const message = ref("");

    getLocalLang();

    if (itemIdx === -1) {
      startFavoriteAnim.value = true;
      favoriteProdArr.arr.push(id);

      setTimeout(() => {
        startFavoriteAnim.value = false;
      }, 1200);
    } else {
      startFavoriteAnim.value = false;
      favoriteProdArr.arr.splice(itemIdx, 1);
    }

    if (localLang.value === "zh_TW") {
      itemIdx === -1
        ? (message.value = "已加入願望清單")
        : (message.value = "已移除願望清單");
    } else if (localLang.value === "en") {
      itemIdx === -1
        ? (message.value = "Added to wishlist")
        : (message.value = "Wishlist removed");
    }

    toast(message.value, {
      icon: CheckCircleIcon,
      type: "success",
    });

    localStorage.setItem("prodId", JSON.stringify(favoriteProdArr.arr));
    getFavorite();
  };

  const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
  const isLoading = ref(false);
  const products = reactive({ arr: [] });
  const tempFavoriteProds = reactive({ arr: [] });

  const getFavoriteProds = async () => {
    isLoading.value = true;

    try {
      const res = await axios.get(
        `${VITE_APP_API}/api/${VITE_APP_PATH}/products/all`
      );

      isLoading.value = false;
      products.arr = res.data.products;
      tempFavoriteProds.arr = products.arr.filter((item) => {
        return favoriteProdArr.arr.indexOf(item.id) !== -1;
      });
    } catch (err) {
      isLoading.value = false;
      alert(err.response.data.message);
    }
  };

  // 移除願望清單商品
  const removeFavoriteProd = (id) => {
    const itemIdx = favoriteProdArr.arr.findIndex((item) => item === id);

    favoriteProdArr.arr.splice(itemIdx, 1);
    localStorage.setItem("prodId", JSON.stringify(favoriteProdArr.arr));

    localLang.value = localStorage.getItem("language");

    if (localLang.value === "zh_TW") {
      toast("已移除願望清單", {
        icon: CheckCircleIcon,
        type: "success",
      });
    } else if (localLang.value === "en") {
      toast("Wishlist removed", {
        icon: CheckCircleIcon,
        type: "success",
      });
    }

    getFavoriteProds();
  };

  return {
    toggleFavorite,
    favoriteProdArr,
    getFavorite,
    getFavoriteProds,
    isLoading,
    tempFavoriteProds,
    removeFavoriteProd,
    startFavoriteAnim,
  };
});
